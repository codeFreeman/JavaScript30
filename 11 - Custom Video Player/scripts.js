// set dom
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButton = player.querySelectorAll("[data-skip]");
const rangeBar = player.querySelectorAll(".player__slider");

//function
function toggleVideo(){
  const status = video.paused ? "play" : 'pause';
  video[status]();
}
function toggleVideoKey(e){
  if(e.keyCode != 32){
    return;
  }else{
    const status = video.paused ? "play" : 'pause';
    video[status]();
  }
}

function playButtonUpdate(){
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
}
function playButtonUpdateKey(e) {
  if(e.keyCode != 32){
    return;
  }else{
    const icon = video.paused ? "►" : "❚❚";
    toggle.textContent = icon;
  }
}

function toggleFullScreen(e){
  if(e.keyCode != 70){
    return;
  }else{
    const isFullScreen = !video.webkitDisplayingFullscreen ? "webkitEnterFullScreen" : "webkitExitFullScreen";
    video[isFullScreen]();
  }
}

function timeSkip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeValueUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const progressPercent = (e.offsetX / this.offsetWidth) * video.duration;
  video.currentTime = progressPercent;
}

//hook addEventListener
video.addEventListener("click", toggleVideo);
toggle.addEventListener("click", toggleVideo);
window.addEventListener("keyup", toggleVideoKey);

video.addEventListener("play", playButtonUpdate);
video.addEventListener("pause", playButtonUpdate);
window.addEventListener("keyup", playButtonUpdateKey);

video.addEventListener("timeupdate", handleProgress);

window.addEventListener("keyup", toggleFullScreen);

skipButton.forEach(button => button.addEventListener("click", timeSkip));
rangeBar.forEach(range => range.addEventListener("change", rangeValueUpdate));
rangeBar.forEach(range => range.addEventListener("mousemove", rangeValueUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousedown", e => mousedown && scrub(e));
progress.addEventListener("click", () => mousedown = true);
progress.addEventListener("click", () => mousedown = false);
