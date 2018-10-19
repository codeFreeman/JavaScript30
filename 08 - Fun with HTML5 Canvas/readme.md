![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day8 HTML5 Canvas

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [canvas](https://developer.mozilla.org/zh-TW/docs/Glossary/Canvas)

#### 定義問題及撰寫程式

1. 第八天挑戰canvas 實作，完成後會得到一個類似小畫家的功能。

### 程式解析

**指定dom 元素**

    const canvas = document.querySelector('#draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

*設定#draw 為canvas 作用範圍，並將canvas 設定為全螢幕尺寸*

**指定UI 畫面上的#draw 為畫布範圍**

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#000';
    ctx.lineJoin = 'round';
    ctx.lineCap='round';
    ctx.lineWidth= 5;

*設定getContext('2d') 渲染效果，設定筆觸質感*

**綁定事件後執行的draw function**

    let isDraw = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 1;
    let ifDeriction = true;

    function draw(e){
      if(!isDraw) return;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];

      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      hue++;
      if(hue>=360){
        hue = 0;
      }

      if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        ifDeriction = !ifDeriction;
      }
      if(ifDeriction){
        ctx.lineWidth = ctx.lineWidth + 0.5;
      }else{
        ctx.lineWidth = ctx.lineWidth - 0.5;
      }
    }

*hsl(Hue, Saturation, Lightness) 透過調整hue 的數值可以達到一個循環變色的效果*

**事件聆聽**

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e)=> {
      isDraw = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', ()=> isDraw = false);
    canvas.addEventListener('mouseout', ()=> isDraw = false);

*綁定滑鼠事件，只有在mousedown 才會執行function 並將滑鼠所在的位置設定為起始位置*
