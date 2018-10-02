![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day1 JS Drum Kit

fork from [wesbos](https://github.com/wesbos/JavaScript30), start study JavaScript30,

Hi, I'm a new challenger, wants to be a Front-End developer, will finish js30 days, my github is [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## My experience and note

> keyword: ES6 [Template Literals](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals) & [Arrow functions](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions), event [keydown](https://developer.mozilla.org/en-US/docs/Web/Events/keydown) & [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend), [addEventListener](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener), [dataset](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLElement/dataset)

#### defind question(function), this projcet have two things to do
1. when keydown play relate drum audio and add effect in UI
2. when effect finished remove effect class

#### function analyze

1. when keydown will play audio & add effect
    function keydownPlaySound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
**use querySelector get audio[data-key],but how do we know we get the right keyCode,use e(event).keyCode to get the key we pressed, then use HTMLMediaElement.play() to play audios, set HTMLMediaElement.currentTime = 0; make audio reset everytime, last thing is use classList function to add class**

2. when mouse click will play audio & add effect
    function clickPlaySound(e){
      e.stopPropagation();
      if(e.target.nodeName !=  "KBD" ) return;
      const clickKey = e.target.parentNode.dataset.key;
      const audio = document.querySelector(`audio[data-key="`+clickKey+`"]`);
      const key = document.querySelector(`.key[data-key="` + clickKey +`"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
**this function is same as first function, but use mouseEvent, watch e(event) and get dataset value, if this value same as data-key's value, we can confirm mouse is over the right UI button, then we can play audio, add effect to UI**

3. when effect finfish remove effect class
    function removeEffect(e){
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }
**watch transitionend event, we will find every transition css attributes, if e.propertyName not equal those attributes, we will return, if e.propertyName is equal, we can confirm we reomve the right effect class from this element**
4. set dom
    const keys = Array.from(document.querySelectorAll('.key'));
**Array.from(); this function can make a new array. use querySelectorAll select all element have class 'key' frome web UI**
5. addEventListener
    window.addEventListener('keydown', keydownPlaySound);
    keys.forEach(key => key.addEventListener('click', clickPlaySound));
    keys.forEach(key => key.addEventListener('mouseover', clickPlaySound));
    keys.forEach(key => key.addEventListener('transitionend', removeEffect));
**add EventListener to watch event type being activation, then run function already define**
