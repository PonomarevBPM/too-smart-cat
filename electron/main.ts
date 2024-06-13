import { app, BrowserWindow, ipcMain, screen } from 'electron'
import { fileURLToPath } from 'node:url'
import { createFileRoute, createURLRoute} from 'electron-router-dom'
import { join } from 'path'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | undefined
const windows = new Set<BrowserWindow>();


function createWindow() {
  const factor = screen.getPrimaryDisplay().scaleFactor;

  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'cat-icon.png'),
    autoHideMenuBar: true,
    fullscreen: true,
    width: 1920,
    height: 1080,
    kiosk: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      nodeIntegration: true,
      contextIsolation: true,
      zoomFactor: 1.0 / factor
    },
  })


  if (VITE_DEV_SERVER_URL) {
    win.loadURL(createURLRoute(
      VITE_DEV_SERVER_URL,
      'main'
    ));
    
  } else {
    //win.loadFile('dist/index.html')
    win.loadFile(
      ...createFileRoute(
        join(__dirname, '../dist/index.html'),
        'main'
      ))
  }
  win.removeMenu();
  // win.webContents.openDevTools();
}

function createSecondWindow() {
  const displays = screen.getAllDisplays()
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })
  if (externalDisplay) {
  const childWindow = new BrowserWindow({
    x: externalDisplay.bounds.x + 50,
    y:externalDisplay.bounds.y + 50,
    parent: win,
    height: 600,
    width: 800, 
    fullscreen: true,
    show: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.mjs'),
    }, 
  },);

  if (VITE_DEV_SERVER_URL) {
    childWindow.loadURL(createURLRoute(
      VITE_DEV_SERVER_URL,
      'screen'
    ));
  } else {
    childWindow.loadFile(
      ...createFileRoute( 
        join(__dirname, '../dist/index.html'),
        'screen'
      ))
  }

  windows.add(childWindow);
}
}

ipcMain.on('openNewPO',() =>{
  createSecondWindow();
});

ipcMain.on('videoName',(_events,args) =>{
  windows.forEach(window => {
    window.webContents.send('videoName', args);
  });

});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = undefined
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(() => {
  createWindow();
  createSecondWindow();
})
