![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day4 Array Cardio

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [sort](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), [includes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), [?:](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)


#### 定義問題及撰寫程式

第四天挑戰陣列(Array)的應用，及了解常用陣列方法(method)

### 程式解析

**1. Filter the list of inventors for those who were born in the 1500's。**

    const fifteens = inventors.filter(inventor=>
      inventor.year >= 1500 && inventor.year<1600
    );
    console.table(fifteens);

*使用filter() 限定範圍在出生於16世紀的inventors*

**2. Give us an array of the inventors' first and last names**

    const name = inventors.map(inventor =>
      (`${inventor.first} ${inventor.last}`)
    )
    console.log(name);

*使用map() 將inventors 取出first name及last name並利用template literal(模版字符串)組合出inventors 的全名*

**3. Sort the inventors by birthdate, oldest to youngest**

    const oldToYoung = inventors.sort((a, b)=>
      // a.year - b.year
      a.year > b.year?1:-1
    );
    console.table(oldToYoung);

*將inventors 順序由大排到小， 先設立兩個變數(a, b)進行比較，1. a-b =升冪(數字小到大) b-a=降冪(數字大到小) 2.如果(a>b)=1， a 索引排在 b 後面, if(a>b = 0) 不會改變a b索引的順序， 如果(a>b)=-1， a 索引排在 b 前面。回到題目，希望由年紀大排到小，(a>b)=1*

**4. How many years did all the inventors live?**

    const inventorsLive = inventors.reduce((total, live)=>{
      return total + (live.passed - live.year)
    },0)
    console.log(inventorsLive);

*設定total 為累加器也就是我們所設定的 initialValue(初始值)為0，接著將每個inventors passed - year(為每個人活多久)，一個一個累加，等於所有人活多久。*

**5. Sort the inventors by years lived**

    const lived = inventors.sort((a,b)=>{
      const firstOne = a.passed - a.year;
      const lastOne = b.passed - b.year;
      return firstOne > lastOne? -1 : 1;
    })
    console.table(lived);

*用每個人活多久來做為排序的值，並設定兩個變數分別是firstOne & lastOne 藉由兩個變數做比較來進行排序*

**6. create a list of Boulevards in Paris that contain 'de' anywhere in the name https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris**

    const mwCategory = document.querySelectorAll('.mw-category a');
    const mwCategoryArr = Array.from(mwCategory);
    const de = mwCategoryArr
      .map(arr=>arr.textContent)
      .filter(streetName=> streetName.includes('de'))
    console.log(de)

*這個練習是要在網頁上直接抓取標籤，並找出文字內容裡面有'de'，找到a標籤後，裡用map() 將每個元素中的文字內容用.textContent 取出，再透過filter() includes()找到文字內容有包含'de'，完成這次的練習*

**7. sort Exercise. Sort the people alphabetically by last name**

    const alphaSort = people.sort((lastN,firstN)=>{
      const [aFirst, aLast] = lastN.split(',');
      const [bFirst, bLast] = firstN.split(',');
      return aLast > bLast? -1 : 1;
    })
    console.log(alphaSort);

*這個練習是要在網頁上直接抓取標籤，並找出文字內容裡面有'de'，找到a標籤後，裡用map() 將每個元素中的文字內容用.textContent 取出，再透過filter() includes()找到文字內容有包含'de'，完成這次的練習*

**8. Reduce Exercise. Sum up the instances of each of these**

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const transportCount = data.reduce((transport,index) =>{
      if(!transport[index]){
        transport[index] = 0;
      }
      transport[index]++;
      return transport;
    },{})
    console.log(transportCount);

*這個練習是計算data 這個陣列其中每個值重覆出現幾次，先將預設值設定為一個空的物件，假設物件不存在的話，就建立這個物件為0，存在後就加1，這樣就可以計算出每個物件在陣列中出現幾次*
