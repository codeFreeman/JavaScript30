![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day21 Geolocation

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator),  [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)

#### 定義問題及撰寫程式

第二十一天實作一個指南針
1. 取得使用者的地理相關資訊
2. 將取得的資訊透過style 動態載入資訊

### 程式解析

**指定dom 元素**

    const arrow  = document.querySelector('.arrow');
    const speed  = document.querySelector('.speed-value');
    const latLog = document.querySelector('.latLog');

*指定等等要變更的羅盤、速度及經緯度*

**取得使用者地理資訊**

    navigator.geolocation.watchPosition((geo) => {
      speed.textContent = geo.coords.speed;
      arrow.style.transform = `rotate(${geo.coords.heading}deg)`
      latLog.textContent = `經度${ geo.coords.longitude}， 緯度:${geo.coords.latitude}`
    }, (err) => {
      console.error(err);
      alert('please allow geolocation!')
    });

*同樣透過navigator 去取得geo 資訊，比較需要注意的是，因為這是透過xcode> simulator去模擬出使用者移動的狀況，並從safari 中的devtool 去console simulator 的結果*
