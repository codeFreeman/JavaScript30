![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day28 Video Speed Scrubber

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [pageY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY), [offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop), [offsetHeight](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight), [playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate)

#### 定義問題及撰寫程式

第二十八天實作透過滑鼠移動調整播放速度的瀏覽器
1. 當滑鼠在音量調整控制列移動時，可以加快或減慢影片播放速度

### 程式解析

**指定dom 元素**

    const speed = document.querySelector('.speed');
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

*指定items，建立flag 做判斷*

**滑鼠移動時調整音量**

    function handleMove(e){
      const y = e.pageY - this.offsetTop;
      const percent = y / this.offsetHeight;
      const min = 0.4;
      const max = 4;
      const moveheight = Math.round(percent * 100) + '%';
      const playbackRate = percent * (max - min) + min;
      bar.style.height = moveheight;
      bar.textContent = playbackRate.toFixed(2) + '×';
      video.playbackRate = playbackRate;
    }

    speed.addEventListener('mousemove', handleMove);

*當滑鼠移動時在畫面上是得到e.pageY 減去bar 的offsetTop 得到目前所在的位置，用來除以控制列的高度求得佔了多少的比例，假設播放速度最小為0.4x (不能為0 影片無法播放) 最大為4x，用percent * (max - min) + min，可以將範圍設限在0.4 到4 之間，最後就將得到的結果加到bar 跟video 上*
