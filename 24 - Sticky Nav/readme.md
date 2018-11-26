![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day24 Sticky Nav

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

#### 定義問題及撰寫程式

第二十四天實作選單固定功能
1. 往下捲到超過選單時將選單固定住並顯示logo，往回卷時解除選單固定並隱藏logo

### 程式解析

**指定dom 元素**

    const nav = document.querySelector('#main');
    let navTop = nav.offsetTop;
    const navHeight = nav.offsetHeight;

*指定navbar 並取得其高度及離視窗頂端的距離*

**建立固定navbar 的功能**

    function navFixed(){
      const windowScroll = this.scrollY;
      if(windowScroll > navTop){
        document.body.style.paddingTop = navHeight+'px';
        document.body.classList.add('nav--fixed');
      }else{
        document.body.classList.remove('nav--fixed');
        document.body.style.paddingTop = 0;
      }
    }
    window.addEventListener('scroll',navFixed);

*建立一個捲動監聽事件當window 捲軸位置超過navbar 視窗頂端的值時，將navbar 的position 修改成fixed，並且增加body 的paddinTop 為navbar 的高度*
