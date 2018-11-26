![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day27 Click and Drag

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [pageX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX), [offsetLeft](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft), [scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft), [scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)

#### 定義問題及撰寫程式

第二十七天實作類似可拖拉的相簿或幻燈片
1.當點擊下去時可以拖拉畫面

### 程式解析

**指定dom 元素**

    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

*指定items，建立flag 做判斷*

**按下滑鼠左鍵時**

    slider.addEventListener('mousedown', (e)=>{
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft =  slider.scrollLeft
    });

*點下去後得到startX 等於點擊的位置在頁面上的位置減去因為padding 位移的距離，scrollLeft 等於整個頁面捲動的距離*

**移動滑鼠時**

    slider.addEventListener('mousemove', (e)=>{
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });

*透過計算將要scrollLeft 的位移等於，scrollLeft 減去點擊的位置startX*

**mouseleave& mouseup**

    slider.addEventListener('mouseleave', ()=>{
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', ()=>{
      isDown = false;
      slider.classList.remove('active');
    });

*在這滑鼠離開及放開滑鼠時兩個情況底下，不做任何動作，且不會觸發滑鼠移動的事件*
