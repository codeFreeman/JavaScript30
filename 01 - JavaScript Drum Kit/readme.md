![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day1 JS Drum Kit

fork from wesbos, start study JavaScript30,

Hi, I'm a new challenger, wants to be a Front-End developer, will finish js30 days, my github is [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## My experience and note

#### keyword: ES6 Template Literals & Arrow functions, event keydown & transitionend, addEventListener, dataset

#### defind question(function), this projcet have two things to do
1. when keydown play relate drum audio and add effect in UI
2. when effect finished remove effect class

#### function analyze

    function keydownPlaySound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
    }
