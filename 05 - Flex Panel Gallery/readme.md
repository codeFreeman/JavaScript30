![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day5 Flex Panels 💪

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [flex](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)

#### 定義問題及撰寫程式

1. 第五天帶入了flexbox 的應用(順便推銷一下自己有flexbox的[教學](https://flexbox.io/))，製作了一個類似collapse 特效的相片盒

### 程式解析

**設定dom 元素**

    const panels = document.querySelectorAll('.panel');

*選取所有class panel*

**綁定監聽事件**

  panels.forEach(panel => panel.addEventListener('click', openEffect));
  panels.forEach(panel => panel.addEventListener('transitionend', activeEffect));

*事件有使用到之前transitionend 針對transition 結束後才執行*

**程式**

    function openEffect(e){
      this.classList.toggle('open');
    }
    function activeEffect(e){
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
    }

*1. openEffect 在點擊時展開照片. 2. activeEffect 在transition 結束後執行文字滑入的效果*
