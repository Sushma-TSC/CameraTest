
export const injectVideo = () => {
    const video = document.createElement("video");
    document.body.appendChild(video);
    video.setAttribute("src", video);
    video.setAttribute('id', 'video-mock');
    video.setAttribute("controls", "");
    video.oncanplay = () => {
        navigator.mediaDevices.getUserMedia = () => {
            video.play();
            return Promise.resolve(video.captureStream());
        };
        video.loop = true;
    };

}