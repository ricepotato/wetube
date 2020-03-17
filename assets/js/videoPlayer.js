const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = videoContainer.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
const volumeButton = document.getElementById("jsVolumeButton");
const fullScreenButton = document.getElementById("jsFullScreen");

function handlerPlayClick(e) {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick(e) {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen(e) {
  fullScreenButton.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenButton.addEventListener("click", goFullScreen);
  document.webkitExitFullscreen();
}

function goFullScreen(e) {
  videoContainer.webkitRequestFullscreen();
  fullScreenButton.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenButton.removeEventListener("click", goFullScreen);
  fullScreenButton.addEventListener("click", exitFullScreen);
}

function init() {
  playButton.addEventListener("click", handlerPlayClick);
  volumeButton.addEventListener("click", handleVolumeClick);
  fullScreenButton.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
