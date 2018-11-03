![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day15 LocalStorage

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [call by value],[call by reference],[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage),[matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches),[JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse),[JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify),[event delegation]

#### 定義問題及撰寫程式

1. 第十五天介紹LocalStorage 並完成一個類似備忘錄的小工具

### 程式解析

**設定dom 元素**

    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items'))||[];
    const claerBtn = document.querySelector('.btn__clear');
    const checkStatusBtn = document.querySelectorAll('.btn__status');

*資料來源有兩種localStorage 或[]*

**新增物件**

    function addNetItems(e){
      e.preventDefault();
      const text = this.querySelector('[name="item"]').value;
      const item = {
        text,
        done: false
      }
      items.push(item);
      showPlates(items, itemsList);
      localStorage.setItem('items', JSON.stringify(items));
      this.reset();
    }

    addItems.addEventListener('submit', addNetItems);

*監聽submit 事件，將輸入框的值，傳到設計好的物件中，推到預設的資料陣列，用showPlates() 更新畫面，同時也更新localStorage 的資料.reset() 可以將輸入框還原未輸入狀態*

**UI 畫面更新**

    function showPlates(plates=[], platesList){
      platesList.innerHTML = plates.map((plate, i) =>
      {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done?"checked":""} />
            <label for="item${i}">${plate.text}</label>
          </li>
        `;
      }).join('');
    }

*監聽submit 事件，將輸入框的值，傳到設計好的物件中，推到預設的資料陣列，用showPlates() 更新畫面，同時也更新localStorage 的資料.reset() 可以將輸入框還原未輸入狀態*

**選取狀態紀錄**

    function toggleDone(e){
      if(!e.target.matches('input')) return;
      const el = e.target;
      const index = el.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem('items', JSON.stringify(items));
      showPlates(items, itemsList);
    }

    itemsList.addEventListener('click', toggleDone);

*在UI 畫面更新時所產生新的子元素是沒有事件綁定的，必須將事件綁定在父層透過父層傳遞監聽的事件，當點擊偽checkbox 時，將.done 的資訊更新後同步到localStorage 在更新一次UI 畫面*

**wesbos 挑戰題，清除清單**

    function clearItem(){
      if(items.length == 0) return;
      // items.length = 0;
      items.splice(0);
      // localStorage.removeItem('items');
      localStorage.clear();
      showPlates(items, itemsList);
    }

    claerBtn.addEventListener('click', clearItem);

*兩種方式可以清除陣列裡的內容1. array.length = 0; 2. array.splice(0); 兩種分飾清除localStorage 裡的內容1. 全部清空localStorage.clear(); 2.直接清除透過setItem 設定的名稱localStorage.removeItem() 最後一樣將UI 畫面更新*

**wesbos 挑戰題2，全選及反全選**

    function checkStatus(){
      if(items.length == 0) return;
      const status = this.dataset.check;
      items.forEach(i => i.done = (status == 'true') ? true : false);
      localStorage.setItem('items', JSON.stringify(items));
      showPlates(items, itemsList);
    }

    checkStatusBtn.forEach(btn => {
      btn.addEventListener('click', checkStatus)
    });

*這兩個狀態是顛倒的，所以我設計在同一個function 裡面，透過自定義的dataset.check 得值來修改done 得值，並更新到localStorage 及UI 畫面*

**預設更新UI 畫面**

    showPlates(items, itemsList);

*一開始就要執行，否則會沒有畫面*
