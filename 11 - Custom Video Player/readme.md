![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day11 HTML Video Player

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

#### 定義問題及撰寫程式

1. 第十一天客製化HTML Video Player 介面，及wes 的小挑戰全螢幕的功能。

### 程式解析

**設定dom 元素**

    const player = document.querySelector(".player");
    const video = player.querySelector(".viewer");
    const progress = player.querySelector(".progress");
    const progressFilled = player.querySelector(".progress__filled");
    const toggle = player.querySelector(".toggle");
    const skipButton = player.querySelectorAll("[data-skip]");
    const rangeBar = player.querySelectorAll(".player__slider");

*選取接下來要做作的內容，影片、進度條、播放/暫停、快進快退*

**執行function**

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

*額外增加的是使用鍵盤控制播放/暫停(鍵盤空白鍵)及全螢幕的功能(鍵盤f)*

**增加監聽事件**

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

*綁定監聽事件*
