![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day2 JS + CSS Clock

fork from [wesbos](https://github.com/wesbos/JavaScript30), start study JavaScript30,

Hi, I'm a new challenger, wants to be a Front-End developer, will finish js30 days, my github is [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## My experience and note

> keyword: [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval),[Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date),[getHours](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours),[getMinutes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes),[getSeconds](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds),[HTMLElement.style](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/style),

#### defind question(function), this projcet have two things to do
1. count time second, minute, hour add to .hand transform rotate deg
2. set every second run

### function analyze

**set dom**

    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

*use querySelector selector UI clock's Hour hand,Minute hand,Second hand then use javascript to change style transform rotate simulation real clock work*

**execution function every seconds**

    setInterval(countTime, 1000);

*setInterval(function, delay(millisecond));*

**create function count time and add style to UI clock**

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

*use Date() api get seconds,minutes,hours after calculate change number to degree style to transform rotate, if second back to 0, remove traisition effect*


