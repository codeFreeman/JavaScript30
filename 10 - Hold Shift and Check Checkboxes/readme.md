![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day10 Hold Shift to Check Multiple Checkboxes

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey)

#### 定義問題及撰寫程式

1. 第十天介紹了一個類似範圍選取的功能。

### 程式解析

**設定dom 元素,及預設變數**

    const checkboxs = document.querySelectorAll('.inbox input[ type="checkbox"]');
    let lastCheck;

*選取所有的checkbox*

**執行function**

    function shiftClick(e){
      if(lastCheck&&e.shiftKey){
        let inBetween = false;
        checkboxs.forEach(checkbox=> {
          if(lastCheck === checkbox|| checkbox===this){
            inBetween =!inBetween;
          }
          if(inBetween){
            checkbox.checked=true;
          }
        });
      }

      lastCheck = this;
    }

*當點擊checkbox 同時按下shiftKey 時，確認點擊的範圍並將範圍中的checkbox 修改checked = true*

**增加監聽事件**

    checkboxs.forEach(checkbox=> {
      checkbox.addEventListener('click', shiftClick)
    });

*對每一個checkbox 設定點擊監聽事件*
