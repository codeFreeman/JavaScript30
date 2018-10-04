![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day3 Scoped CSS Variables and JS

fork from [wesbos](https://github.com/wesbos/JavaScript30), start study JavaScript30,

Hi, I'm a new challenger, wants to be a Front-End developer, will finish js30 days, my github is [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## My experience and note

> keyword: [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root),[documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement),[setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

#### defind question(function), this projcet have two things to do
1. use javascript to change css :root

### function analyze

**set dom**

    const inputs = Array.from(document.querySelectorAll('.controls input'));

*use querySelector selector all input. note nodeList & Array is different in function we can use, nodeList's function is less than Array's function. we can use Array.from() to change nodeList to Array*

**addEventListener**

    inputs.forEach(input => input.addEventListener('change', handlerControl));
    inputs.forEach(input => input.addEventListener('mousemove', handlerControl));

*there is two ways to execute this function change(for color picker) and mousemove(for handler bar)*

**create function to add style to documentElement(HTML)**

    function handlerControl(){
      const unit = this.dataset.unit || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
    }

*get value from input and the dataset we alright define, if value don't have suffix(color: #ffc600) return '', use setProperty to change value with inputs*


