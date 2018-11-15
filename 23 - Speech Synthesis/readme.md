![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day23 Speech Synthesis

從 [wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 希望能成為前端工程師, 我將會開始挑戰Js30, 專案的github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect),
[wesbos 所參考的網站](https://stripe.com/)

#### 定義問題及撰寫程式

1. 第二十二天製作了一個滑入提示效果

### 程式解析

**指定dom 元素**

    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector('#speak');
    const stopButton = document.querySelector('#stop');

    msg.text = document.querySelector('[name="text"]').value;

*建立new SpeechSynthesisUtterance()(中文直譯為語音合成話語)的物件，並取得輸入框內的文字設定到msg.text 的屬性*

**建立語音選單**

    function popVoices(){
      voices = this.getVoices();
      voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`)
        .join()
    }

    speechSynthesis.addEventListener('voiceschanged', popVoices);

*speechSynthesis 還需要搭配事件 "voiceschanged"，透過.getVoices() 取得內建的所有語音並產生下拉選單*

**設定語音**

    function setVoice(){
      msg.voice = voices.find(voice => voice.name === this.value);
      toggleSpeech();
    }

    voicesDropdown.addEventListener('change', setVoice);

*針對下單選單建立"change"事件，並用find() 比對後，更新到msg.voice 的屬性*

**暫停/播放音效**

    function toggleSpeech(startOver = true){
      speechSynthesis.cancel();
      if(startOver){
        speechSynthesis.speak(msg);
      }
    }

*每次播放音效之前都先停止播放*

**設定參數**

    function setOption(){
      msg[this.name] = this.value;
      toggleSpeech();
    }

    options.forEach(option => option.addEventListener('change',setOption));

*將msg 裡面的參數，對應到options 的change 事件，所取得的input value*

**播放/停止**

  speakButton.addEventListener('click', toggleSpeech);
  stopButton.addEventListener('click', ()=> toggleSpeech

*最後完成播放/停止按鈕*
