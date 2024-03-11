function toggleAudio() {
    var video = document.getElementById("video");
    var audioIcon = document.getElementById("audioIcon");
    
    if (video.muted) {
        video.muted = false;
        audioIcon.classList.remove("uil-volume-mute");
        audioIcon.classList.add("uil-volume-up");
    } else {
        video.muted = true;
        audioIcon.classList.remove("uil-volume-up");
        audioIcon.classList.add("uil-volume-mute");
    }
}
