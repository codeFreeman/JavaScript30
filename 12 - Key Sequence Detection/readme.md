![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day12 Key Detection

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [splice](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#### 定義問題及撰寫程式

1. 第十二設計一個密碼監測小工具。

### 程式解析

**設定dom 元素**

    const password = "0000";
    const typeword = [];

*設定一個密碼，及比對用的陣列*

**增加監聽事件**

    window.addEventListener('keyup',(e)=>{
      typeword.push(e.key)
      typeword.splice(-password.length - 1, typeword.length- password.length);
      if(typeword.join('').includes(password)){
        cornify_add();
      }
    })

*在window 上增加鍵盤事件，把每個輸入的內容推進去比對陣列中，並用splice() 限制陣列的長度等於密碼的長度，最後利用join('') 組成一個字串，用includes() 比對，如果true 執行cornify_add() 增加一堆獨角獸的套件!!*
