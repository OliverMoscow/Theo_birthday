const video = document.createElement("video");
video.setAttribute("playsinline", "");
video.setAttribute("autoplay", "");
video.setAttribute("muted", "");
video.style.width = "200px";
video.style.height = "200px";

const facingMode = "user";
const constraints = {
    audio: false,
    video: {
        facingMode
    }
};

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject = stream;
});

document.body.appendChild(video);