![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day13 Slide in on Scroll

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY), [innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight),[offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)

#### 定義問題及撰寫程式

第十三天實作網頁捲動特效
1. 網頁捲動至特定位置時照片自動滑入

### 程式解析

**設定dom 元素**

    const slideInImgs = Array.from(document.querySelectorAll('.slide-in'));

*選取所有的照片*

**增加監聽事件**

    function scrollIn(e){
      slideInImgs.forEach(slideInImg=> {
        const slideInAt = (window.innerHeight + window.scrollY)- slideInImg.height / 2;
        const slideInImgBottom = slideInImg.offsetTop+ slideInImg.height;
        const isHalfShown = slideInAt> slideInImg.offsetTop;
        const isNotScrolledPast = window.scrollY < slideInImgBottom;
        const status = (isHalfShown && isNotScrolledPast)?"add":"remove";
        slideInImg.classList[status]("active");
      })
    }

*有兩個條件要完成，當照片過半大於照片到頂部的高度&& 照片的底部大於捲軸Ｙ軸時載入效果*

**增加監聽事件**

    window.addEventListener('scroll', debounce(scrollIn));

*在window 上增加捲軸事件*
