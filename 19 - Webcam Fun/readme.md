![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day19 unreal webcam fun

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [navigator](https://developer.mozilla.org/zh-TW/docs/Web/API/Navigator), [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), [Data_URIs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), [toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL), [canplay](https://developer.mozilla.org/en-US/docs/Web/Events/canplay)

#### 定義問題及撰寫程式

第十九天實作視訊攝影機功能
1. 取得影像並傳遞到canvas
2. 截圖(拍照)並提供下載
3. 建立不同濾鏡風格

### 程式解析

**設定dom 元素**

    const video = document.querySelector('.player');
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    const strip = document.querySelector('.strip');
    const snap = document.querySelector('.snap');

*將取得的視訊影像，傳遞到canvas 裡面，會透過canvas 做些有趣的功能*

**取得視訊影像**

    function getVideo(){
      navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(localMediaSteam =>{
          video.src = window.URL.createObjectURL(localMediaSteam);
          video.play();
        })
        .catch(err=>{
          console.error(`OH NO!!`, err);
        });
    }

*取得視訊鏡頭的使用透過navigator.mediaDevices.getUserMedia({video: true, audio: false}) 裡面內容一定要取得影像或音源，否則無法執行*

**將取得的影像傳到canvas**

    function takePhoto(){
      // play sound
      snap.currentTime = 0;
      snap.play();
      // take data out of canvas
      const data = canvas.toDataURL('image/jpeg',1);
      const link = document.createElement('a');
      link.href = data;
      link.setAttribute('download', 'handsome');
      link.innerHTML = `<img src="${data}" alt="Handsome Man"/>`;
      strip.insertBefore(link, strip.firstChild);
    }

*將實際取得影像的寬度高度，設定至canvas，透過setInterval() 每0.016秒更新一次畫面，將canvas 元素轉換成dataURL，建立一個新的a 連結，並將路徑指定到 dataURL，設定屬性下載作為檔案名稱，每執行一次就會新增img 至畫面。備註canvas.toDataURL('image/jpeg',1)，後面帶的參數是畫面品質0最低 1最高*

**不同濾鏡效果**

    function redEffect(pixels){
      console.log(pixels.data);
      for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100 //red
        pixels.data[i + 1] = pixels.data[i + 1] - 50 //green
        pixels.data[i + 2] = pixels.data[i + 2] * .5 //blue
      }
      return pixels;
    }

    function rgbSplit(pixels) {
      for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 250] = pixels.data[i + 0]; //red
        pixels.data[i + 500] = pixels.data[i + 1]; //green
        pixels.data[i - 250] = pixels.data[i + 2]; //blue
      }
      return pixels;
    }

    function greenScreen(pixels) {
      const levels = {};

      document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
      });

      for (i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
          && green >= levels.gmin
          && blue >= levels.bmin
          && red <= levels.rmax
          && green <= levels.gmax
          && blue <= levels.bmax) {
          // take it out!
          pixels.data[i + 3] = 0;
        }
      }

      return pixels;
    }

*將data的值修改過，建立不同風格的濾鏡*

**監聽事件**

    getVideo();
    video.addEventListener("canplay", paintToCanavas);

*一開始就預設執行getVideo() 才會有影像，如果是可以播放的影像，才執行paintToCanavas()*

