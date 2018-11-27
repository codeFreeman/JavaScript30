![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day14 JS Reference VS Copy

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [call by value], [call by reference], [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

#### 定義問題及撰寫程式

第十四天在介紹傳值及傳址

### 程式解析

**傳值及傳址**

    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    const team = players;
    console.log(players, team)

    const team2 = players.slice();
    const team3 = [].concat(players);
    const team4 = Array.from(players);
    const team5 = [...players];

*要複製出一個陣列而不是參照一個陣列，可以參考底下四種方式*
