![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day13 Slide in on Scroll

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [splice](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#### 定義問題及撰寫程式

1. 第十三天常用的網頁捲動照片滑入效果。

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

*有幾點要完成，當照片過半大於照片到頂部的高度&& 照片的底部大於捲軸Ｙ軸時載入效果*

**增加監聽事件**

    window.addEventListener('scroll', debounce(scrollIn));

*在window 上增加捲軸事件*
