![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day29 Countdown Timer

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval), [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now), [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

#### 定義問題及撰寫程式

第二十九天實作倒數計時器，有幾件事情要做
1. 呈現畫面到數秒數及實際結束時間，點擊時計時器重新開始
2. 點擊預設時間及輸入自定義時間
### 程式解析

**指定dom 元素**

    let countdown;
    const timerDisplay = document.querySelector('.display__time-left');
    const endTime = document.querySelector(".display__end-time");
    const button = document.querySelectorAll("[data-time]");

*選擇呈現倒數時間、於幾點幾分結束及所有指定時間[data-time]*

**滑鼠移動時調整音量**

    function timer(seconds) {
      clearInterval(countdown);
      const now = Date.now()
      const then = now + seconds * 1000;
      displayTimeLeft(seconds);
      displayEndTime(then);
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
          clearInterval(countdown);
          alert('times up!');
          return;
        }
        displayTimeLeft(secondsLeft);
      }, 1000);
    }

*主要計算時間的function 首先取得現在的時間並加上秒數，透過setInterval() 在每過一秒更新一次剩餘的時間，並用clearInterval() 清除setInterval() 重新開始計時器，如果剩餘的時間小於0，代表計時器要停止*

**呈現倒數時間**

    function displayTimeLeft(seconds){
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
      document.title = display;
      timerDisplay.textContent = display;
    }

*取得分鐘及秒數，並將網頁的title 及倒數時間都換成組好的倒數時間字串*

**呈現結束時間**

    function displayEndTime(timestamp){
      const end = new Date(timestamp);
      const hour =  end.getHours();
      const minutes =  end.getMinutes();
      const adjustedHour =  hour > 12 ? hour - 12 : hour;
      endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`;
    }

*取得end 時間(格式為timestamp)，轉換成小時及分鐘，並且要處理24 小時制，分鐘少於10 的時候，要在前面加0*

**選取預設時間**

    function startTimer(){
      const seconds = parseInt(this.dataset.time)
      timer(seconds);
    }

    button.forEach(button => button.addEventListener('click',startTimer));

*將每個button 加上click 的監聽事件，點擊後取得dataset.time，得到每個button 的值，再放入timer()*

**自訂時間(分鐘)**

    document.customForm.addEventListener('submit', function(e){
      e.preventDefault();
      const mins = this.minutes.value;
      timer(mins * 60);
      this.reset();
    })

*wesbos 示範了一個小技巧，如果html 標籤內有name 的屬性，可透過選取name 直接選取元素，取得輸入值並轉換成秒數(乘以60)，放入timer()，最後透過.reset()，清除輸入框內容*
