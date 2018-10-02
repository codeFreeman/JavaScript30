![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day1 JS Drum Kit

fork from [wesbos](https://github.com/wesbos/JavaScript30), start study JavaScript30,

Hi, I'm a new challenger, wants to be a Front-End developer, will finish js30 days, my github is [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## My experience and note

> keyword: ES6 Template Literals & Arrow functions, event keydown & transitionend, addEventListener, dataset

#### defind question(function), this projcet have two things to do
1. when keydown play relate drum audio and add effect in UI
2. when effect finished remove effect class

#### function analyze

    // when keydown will play audio & add effect
    function keydownPlaySound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
    //when mouse click will play audio & add effect
    function clickPlaySound(e){
      e.stopPropagation();
      if(e.target.nodeName !=  "KBD" ) return;
      var clickKey = e.target.parentNode.dataset.key;
      const audio = document.querySelector(`audio[data-key="`+clickKey+`"]`);
      const key = document.querySelector(`.key[data-key="` + clickKey +`"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
    //when effect finfish remove effect class
    function removeEffect(e){
      if (e.propertyName !== 'transform') return;
      e.target.classList.remove('playing');
    }
    // set dom
    const keys = Array.from(document.querySelectorAll('.key'));
    // addEventListener
    window.addEventListener('keydown', keydownPlaySound);
    keys.forEach(key => key.addEventListener('click', clickPlaySound));
    keys.forEach(key => key.addEventListener('mouseover', clickPlaySound));
    keys.forEach(key => key.addEventListener('transitionend', removeEffect));
