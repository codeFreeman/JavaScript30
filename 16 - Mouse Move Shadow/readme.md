![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day16 Mouse Move Shadow

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), [text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

#### 定義問題及撰寫程式

第十六天實作文字陰影移動的特效
1. 取得滑鼠在畫面上的位置
2. 將文字陰影的style 加上動態的值

### 程式解析

**設定dom 元素**

    const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');
    const moveRange = 100;

*指定範圍及文字，並設定陰影移動的範圍*

**陰影移動的功能**

    function textShadowMove(e){
      const { offsetWidth: width, offsetHeight: height} = hero;
      let {offsetX: x, offsetY: y} = e;
      if(this != e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }
      const moveRangeX = Math.ceil((x / width * moveRange)-(moveRange / 2));
      const moveRangeY = Math.ceil((y / height * moveRange)-(moveRange / 2));
      let milliSecond = Math.ceil(new Date().getUTCMilliseconds()/ 3);
      text.style.textShadow = `${moveRangeX*-1}px ${moveRangeY*-1}px 4px hsl(${milliSecond}, 100%, 50%)`;
    }
    hero.addEventListener('mousemove', textShadowMove);

*首先建立移動範圍，並將同步到滑鼠移動的座標，透過運算將座標(0,0) 從左上角移至畫面正中央，並修改屬性textShadow 得值*
