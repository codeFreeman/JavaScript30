![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day17 Sort Without Articles

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim), [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

#### 定義問題及撰寫程式

第十七天用sort() 排序
1. 避免冠詞影響排序結果，將冠詞排除
2. 將處理過的資料顯示在畫面上

### 程式解析

**設定dom 元素**

    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    const bandsList = document.querySelector('#bands');

*所操作的陣列及指定產生清單的的ID*

**過濾**

    function filterRegex(text){
      return text.replace(/^(The |Oh |Oh, |An |A )/, '').trim()
    }

*利用正則表達式將開頭的冠詞過濾掉*

**排序**

    const sortBands = bands.sort((a, b)=>(filterRegex(a)>filterRegex(b)) ? 1 : -1);

*透過先前設計的過濾功能在排序時將排序內容替換掉，已達到冠詞過濾的效果*

**產生UI 畫面**

    bandsList.innerHTML = sortBands
    .map(band=>`<li>${band}</li>`)
    .join("");

*利用map() 產生UI畫面*
