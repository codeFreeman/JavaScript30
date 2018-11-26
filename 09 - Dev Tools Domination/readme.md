![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day9 Console Tricks!

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [console](https://developer.mozilla.org/en-US/docs/Web/API/Console)

#### 定義問題及撰寫程式

第九天介紹了devtools 除錯功能及console 小技巧。

### 程式解析

**範例預設條件**

    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

*設定了一個陣列及點擊後調整文字顏色尺寸的function*

**cosole 小技巧**

    // Regular
      console.log('regular');
      // Interpolated
      console.log('oh don\'t say %s','💩');

      // Styled
      console.log('%c style me','font-size: 20px;color: red');

      // warning!
      console.warn('somethin wrong');
      // Error :|
      console.error('wrong');

      // Info
      console.info('read frist');

      // Testing
      console.assert(9>8,'wrong');
      console.assert(9<8,'wrong');

      // clearing
      // console.clear();

      // Viewing DOM Elements
      console.dir(p);

      // Grouping together

    dogs.forEach(dog=>{
        console.group(`${dog.name}`);
        console.log(`dog's name is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.groupEnd(`${dog.name}`);
      })

      // counting
        console.count('yo');
        console.count('yo');
        console.count('yo');
        console.count('yo');
        console.count('yo');

      // timing
        console.time();
        for (let i = 0; i < 9; i++) {
          console.log(i);
        }
        console.timeEnd();
      // table
        console.table(dogs);

*對於console 有更近一步的了解，之後可以應用在工作上*
