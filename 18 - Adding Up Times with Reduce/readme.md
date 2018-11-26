![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day18 Adding Up Times with Reduce

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

#### 定義問題及撰寫程式

第十八天用reduce() 將時間加總
1. 取得所有時間並轉換成秒數加總
2. 勁過計算轉換成時、分、秒

### 程式解析

**設定dom 元素**

    const time = Array.from(document.querySelectorAll('li[data-time]'));

*選取所有的data-time 並用Array.from()轉成array 等等要使用map() 取出值*

**取得video 總共時間轉換成小時、分鐘、秒**

    const totalTime = time
    .map(time => time.dataset.time)
    .map(timeSplit =>{
      const [min, seconds]= timeSplit.split(":").map(parseFloat)
      return (min * 60) + seconds;
    }).reduce((totalValue, currentValue) => totalValue + currentValue);

    let secondsLeft = totalTime;
    const hours = Math.floor(secondsLeft/3600);
    secondsLeft = secondsLeft % 3600
    const minutes = Math.floor(secondsLeft/60);
    secondsLeft = secondsLeft % 60

    console.log(hours, minutes, secondsLeft);

*用reduce() 加總，取得所有時間(秒數)，經過計算後提取出時、分、秒*
