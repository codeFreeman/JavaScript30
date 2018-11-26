![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day4 Array Cardio

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root), [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement), [setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

#### 定義問題及撰寫程式

第三天使用javaScript 去修改css原生語法 :root

### 程式解析

**指定dom 元素**

    const inputs = Array.from(document.querySelectorAll('.controls input'));

*使用querySelectorAll 選取在.controls 底下所有input. 筆記：nodeList 和 Array 所提供的方法是不同的, nodeList 提供相當少的方法. 我們可以使用Array.from() 將nodeList 轉換成Array*

**綁定監聽事件**

    inputs.forEach(input => input.addEventListener('change', handlerControl));
    inputs.forEach(input => input.addEventListener('mousemove', handlerControl));

*在這邊掛載了兩種類型的監聽事件change for color input(用於顏色選擇器) 及 mousemove for handler input(用於拖拉處理器)*

**create function to add style to documentElement(HTML)**

    function handlerControl(){
      const unit = this.dataset.unit || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
    }

*這時候會運用到已經定義好的dataset 取得'px' 後輟字，假如沒有的話返回空字串，同時也取得value 裡的值，運用setProperty() 這個方法將變數名稱及變數得值設定到HTML 標籤*


