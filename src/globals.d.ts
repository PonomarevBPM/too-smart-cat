declare namespace exposedApi {
    function openNewWindow (): void;
    function sendVideoToSecondScreen (videoName:string): void;
    function setVideoName (channel: string , listener: (events: IpcRendererEvent, args: any) => void): void;
}