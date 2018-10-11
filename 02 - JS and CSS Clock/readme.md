![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day2 JS + CSS Clock

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval),[Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date),[getHours](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours),[getMinutes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes),[getSeconds](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds),[HTMLElement.style](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/style),

#### 定義問題及撰寫程式

1. 第二天的挑戰是利用js Date() 日期方法擷取時分秒，並加到css transform rotate 模擬時鐘運作
2. 每秒鐘都要執行這個程式

### 程式解析

**指定dom 元素**

    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

*使用querySelector() 選擇UI 上的時針、分針及秒針，接著會透過程式操作transform rotate*

**每秒都要執行這個城市**

    setInterval(countTime, 1000);

*setInterval的語法是 setInterval(function, delay(millisecond));*

**計算時間並動態調整UI 畫面的程式**

    function countTime(){
      const now = new Date();
      const seconds = now.getSeconds();
      // console.log(second);
      secondHand.style.transform = `rotate(${((seconds / 60) * 360)}deg)`;
      const minutes = now.getMinutes();
      // console.log(min);
      minHand.style.transform = `rotate(${((minutes / 60) * 360) + ((seconds / 60) * 6)}deg)`;
      const hours = now.getHours();
      // console.log(hour);
      hourHand.style.transform = `rotate(${((hour / 12) * 360) + ((minutes / 60) * 30)}deg)`;

      if(seconds == 0){
        secondHand.style.transition = 'none';
      }else{
        secondHand.style.transition = 'all .5s';
      }
    }

*使用Date() 方法取得時分秒經過計算後動態載入到css transform rotate*


