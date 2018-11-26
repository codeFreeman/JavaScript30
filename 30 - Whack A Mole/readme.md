![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day30 Whack A Mole

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random), [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), [isTrusted](https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted)

#### 定義問題及撰寫程式

第三十天實作打地鼠的小遊戲，有幾件事情要做
1. 地鼠要在隨機且不連續的洞穴中出現，出現的時間長短也不一定
2. 點擊地鼠計分板會加1分，每次按開始遊戲計分板歸0

### 程式解析

**指定dom 元素**

    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    let lastHole;
    let timeUp = false;
    let score = 0;

*指定頁面上的元素，選擇所有的洞、地鼠及計分板數字*

**產生隨機時間**

    function randomTime(min, max) {
      return Math.round(Math.random()*(max - min) + min);
    }

*設定參數最大級最小值，並透過Math.random() 產生時間(秒數)，最後用Math.round() 四捨五入*

**產生隨機亂數(洞穴)**

    function randomHole(holes) {
      const idx =  Math.floor(Math.random()* holes.length);
      const hole = holes[idx];
      if(hole === lastHole){
        console.log('same num')
        return randomHole(holes)
      }
      lastHole = hole;
      return hole;
    }

*idx 一樣透過Math.random() 產生隨機不超過hloes.length 最大值的整數，將hole 儲存在lastHole 裡，如果hloe === lastHole 就重覆一次randomHole(holes) 產生新的亂數*

**地鼠出現/消失**

    function peep(){
      const time = randomTime(500, 1000);
      const hole = randomHole(holes);
      hole.classList.add('up');
      setTimeout(()=>{
        hole.classList.remove('up')
        if(!timeUp) peep();
      },time);
    }

*peep 有窺視/緩緩出現的意思，隨機產生出來的hole 加上class'up'，用setTimeout() 裡面會執行移除class'up' 並重覆執行peep()*

**開始遊戲**

    function startGame(){
      scoreBoard.textContent = 0;
      timeUp = false;
      score = 0;
      peep();
      setTimeout(()=> timeUp = true ,10000);
    }

*將呈現計分板得值修改為0及預設分數為0，時間flag = false，然後開始執行peep() 並且在十秒後將時間flag = true 已停止遊戲*

**計分功能**

    function bonk(e){
      if(!e.isTrusted) return;
      score++;
      this.classList.remove('up');
      scoreBoard.textContent = score;
    }

    moles.forEach(mole => mole.addEventListener('click', bonk));

*當click 事件觸發時啟動bonk()，這邊有個event 屬性要提"isTrusted" 代表使用者用滑鼠點擊，如果不是的話就return，每點擊一次地鼠scroe +1，同時也要移除class'up'隱藏地鼠，並且修改計分板的分數*
