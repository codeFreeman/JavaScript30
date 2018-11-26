![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day25 Event Capture, Propagation, Bubbling and Once

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [addEventListener](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener),  [stopPropagation](https://developer.mozilla.org/zh-TW/docs/Web/API/Event/stopPropagation)

#### 定義問題及撰寫程式

第二十五天講解了事件傳遞的觀念

### 程式解析

**指定dom 元素**

    const divs = document.querySelectorAll('div');
    const button = document.querySelector('button');


*接下來會觀察div 跟button 事件傳遞的效果*

**stopPropagation& event capture**

    function logTxt(e){
      console.log(this.classList.value);
      // e.stopPropagation();
    }

    divs.forEach(div => div.addEventListener('click',     logTxt,{
        capture: false,
      })
    );

*事件的傳遞是由父層一路傳遞到子層，當我們點擊div.three 時，實際上會經過one two 才到three，但預設的事件傳遞方法是Bubbling，所以實際上返回的結果會是three>two>one，當調整第三個參數capture: true 時，便會從one>two>three，e.stopPropagation()，則是會阻止事件的傳遞。*

**once 的用途**

    button.addEventListener('click',()=>{
      console.log('click!')
    },{
      once:true
    });

*當addEventListener 第三個參數中設定once: true，就會等於removeEventListener，unbind 這個事件，只會執行一次後，就解除綁定*
