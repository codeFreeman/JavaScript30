![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day22 Follow Along Nav

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect),
[wesbos 所參考的網站](https://stripe.com/)

#### 定義問題及撰寫程式

1. 第二十二天製作了一個滑入提示效果

### 程式解析

**指定dom 元素**

    const targer = document.querySelectorAll('a');
    const highlight = document.createElement('span')
    highlight.classList.add('highlight');
    document.body.appendChild(highlight);

*選取所有a 連結，並產生一個指定提示特效的span*

**提示效果**

    function highlightLink(){
      const linkCoords = this.getBoundingClientRect();
      const extra = 5;
      const coords = {
        width: linkCoords.width + extra,
        height: linkCoords.height + extra,
        top: (linkCoords.top - (extra / 2)) + window.scrollY,
        left: (linkCoords.left - (extra / 2)) + window.scrollX
      }
      highlight.style.width = `${coords.width}px`
      highlight.style.height = `${coords.height}px`
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    }

*將a 連結的位置取出後，指定到一開始設定的span，在滑鼠滑入時，span的位置會跟a 連結同步*

**增加監聽事件**

    targer.forEach(a => {
      a.addEventListener('mouseenter', highlightLink)
    });

*對每個a 連結增加監聽事件，只要滑鼠移入就執行function*
