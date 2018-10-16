![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day7 Array Cardio 💪💪

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some),[every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every),[find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find),[findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex),[splice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

#### 定義問題及撰寫程式

1. 第七天挑戰陣列(Array)的應用2，及了解常用陣列方法(method)。

### 程式解析

**預設陣列**

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

**學習some(),is at least one person 19 or**

    const year = new Date().getFullYear();
    const someOne = people.some(old => year - old.year >= 19);
    console.log(someOne);

*some() 這個方法可以用來查找陣列中是否符合條件，只要有一個符合就符合條件，會return true||false*

**學習every(),is everyone 19 or older?**

    const everyOne = people.every(old => year - old.year >= 19);
    console.log(everyOne);

*every() 這個方法可以用來查找陣列中是否符合條件，只有全部符合才符合條件，同樣會return true||false*

**學習find(),find the comment with the ID of 823423**

    const findId = comments.find(find => find.id == 823423)
    console.log(findId);

*find() 這個方法可以用來查找陣列中是否符合條件，只要符合條件會回傳該物件，如果沒有符合的會回傳undefined*

**學習findIndex(),delete the comment with the ID of 823423**

    const findIdx = comments.findIndex(findx =>
      findx.id == 823423
    )
    console.log(findIdx);
    comments.splice(findIdx, 1);
    console.log(comments);

*findIndex() 這個方法可以用來查找陣列中是否符合條件，只要符合條件會傳回該物件在陣列中第幾個位置，查無傳回-1，在用splice 的方法刪除該物件*
