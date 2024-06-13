import { ipcRenderer, contextBridge, IpcRendererEvent } from 'electron'

contextBridge.exposeInMainWorld('exposedApi', {
  openNewWindow: () => ipcRenderer.send('openNewPO', "S"),
  sendVideoToSecondScreen: (videoName: string) => ipcRenderer.send('videoName', videoName),
  setVideoName: (channel: string , listener: (events: IpcRendererEvent, args: any) => void) => ipcRenderer.on(channel, listener)

})
