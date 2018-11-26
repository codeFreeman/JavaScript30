![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day20 Speech Detection

從 [wesbos](https://github.com/wesbos/JavaScript30)fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition), [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild), [event result], [event end]

#### 定義問題及撰寫程式

第二十天實作即時語音辨識功能
1. 取得web api 開啟語音辨識功能
2. 將擷取到的語音更新在畫面上

### 程式解析

**環境建置**

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

*今天的功能是屬於web api的一種，但只支援google chrome，而且並非原生功能需加上webkit 前綴詞*

**取得語音功能**

    const recognition = new SpeechRecognition();
    recognition.interimResults=true;

*透過new 取得一個新的實體物件，並將及時提供結果設定為true*

**建立要新增的元素**

    let p = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(p)

*之後會將偵測到的內容新增到網頁畫面上*

**監聽事件**

    recognition.addEventListener('result', e=>{
      const transcript = Array.from(e.results)
        .map(result=>result[0])
        .map(result=>result.transcript).join("")
      p.textContent = transcript;
      if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p)
      }
    })

    recognition.addEventListener('end', recognition.start);

    recognition.start();

*這次監聽的是產生的結果，並從巢狀結構裡取出transcript(實際擷取到的內容)，並將內容新增到剛剛建立的元素，要特別注意的是這邊有一個key isFinal=true時，當如果是true的時候，在原本的p 標籤後面，再新增一個p 標籤，這樣就能新增，另外也要監聽end 事件，當發生時就再次執行*


