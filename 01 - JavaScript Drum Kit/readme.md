![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day4 Array Cardio

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字:  ES6 [Template Literals](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals) & [Arrow functions](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions), event [keydown](https://developer.mozilla.org/en-US/docs/Web/Events/keydown) & [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend), [addEventListener](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener), [dataset](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/dataset)

#### 定義問題及撰寫程式
1. 第一天是要挑戰事件監聽模擬一個用鍵盤控制的小遊戲，當鍵盤敲擊時會同時在對應的按鈕上產生效果及播放音效
2. 當transition 效果結束時應該要移除網頁上效果的class

### 程式解析

**指定dom 元素**

    const keys = Array.from(document.querySelectorAll('.key'));

*Array.from() 這個方法能把nodeList 轉換成Array(陣列)，Array 能使用的方法比nodeList 多，會建議轉換成Array。使用 querySelectorAll 選取所有帶有class 'key' 的元素，稍後會掛載監聽事件*

**監聽事件**

    window.addEventListener('keydown', keydownPlaySound);
    keys.forEach(key => key.addEventListener('click', clickPlaySound));
    keys.forEach(key => key.addEventListener('mouseover', clickPlaySound));
    keys.forEach(key => key.addEventListener('transitionend', removeEffect));

*這邊有二個事件是主動的，一個是被動的，keydownPlaySound 當按下鍵盤時播放音樂，clickPlaySound 透過滑鼠事件點擊、移出也會播放音樂，最後是當transition 效果結束時，移除class*

**當按下鍵盤時會播放音效及增加UI 特效**

    function keydownPlaySound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }

*使用querySelector 選取已經設定好的audio[data-key]，但我們要如何知道我們選擇的是正確的keyCode 使用e(event).keyCode 去取得我們按下鍵盤上哪個鍵，然後使用HTMLMediaElement.play() 執行音樂播放，設定HTMLMediaElement.currentTime = 0 讓程式每次執行音樂重置，最後一件事是在播放音樂時加上特效class*

**when mouse click will play audio & add effect**

    function clickPlaySound(e){
      e.stopPropagation();
      if(e.target.nodeName !=  "KBD" ) return;
      const clickKey = e.target.parentNode.dataset.key;
      const audio = document.querySelector(`audio[data-key="`+clickKey+`"]`);
      const key = document.querySelector(`.key[data-key="` + clickKey +`"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }

*這段程式跟上面的程式幾乎相同, 但使用mouseEvent(滑鼠事件)，透過滑鼠點擊移出，可以有相同的效果*

**當音效播放結束應該要移除效果**

    function removeEffect(e){
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }

*這邊是透過一個事件叫做transitionend event，主要是監聽css 裡面transition 這個屬性，當transition 所執行的時間完成後，將移除效果的class*
