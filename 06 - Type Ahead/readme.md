![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day6 Type Ahead 👀

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [RegexOne](https://regexone.com/), [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join), [replace(regexp|substr, newSubstr|function)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), [Fetch_API](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API)

#### 定義問題及撰寫程式

第六天介紹了fetch api，擷取網路上的json 格式，並透過之前學習過的filter()，建立一個簡易的搜尋框。

### 程式解析

**設立一個變數指向網路上的json**

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

*透過XMLHttpRequest() 或這次所學的fetch() 來擷取json*

**fetch**

  const cities =[];

  fetch(endpoint)
    .then(blob => blob.json()
    .then(data => cities.push(...data))
  )

*設立變數cities 存放網路上的json，用fetch api 透過then() 取得promise 物件，經過解析後.josn().then() 得到實際的rawData(json) 並push 到cities(Array)*

**程式 比對資料來源及文字**

    function findMatch(matchWord, cities){
      return cities.filter(place=>{
        const regex = new RegExp(matchWord, 'gi')
        return place.city.match(regex)|| place.state.match(regex)
      })
    }

*這個function 有兩個參數 1.用來比對的文字 2.城市的陣列 使用filter 將城市或州的名稱作為比對得值，如果符合會返回新的陣列，因為你無法得知使用者輸入的文字內容，藉由RegExp 進行比對，'gi'是指全域不分大小寫。*

**程式 將符合條件的內容，顯示在搜尋結果**

    function displayMatch(){
      const cityArr = findMatch(this.value, cities);
      const html = cityArr.map(place=>{
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
          <li>
            <span class="name">${cityName} ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
          </li>
        `
      }).join('');
      suggestionsList.innerHTML = html;
    }

*當執行這個function 時，得到的this.value 會等於input 的value 也就是我們要搜尋的內容，透過findMatch 得到搜尋城市或州的陣列，用Template Literals 組好字串替換掉網頁的搜尋結果，這邊要注意的是，利用replace() 的方法來將關鍵詞上亮高。*
