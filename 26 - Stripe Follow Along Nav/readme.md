![](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30 day26 Stripe Follow Along Nav

從[wesbos](https://github.com/wesbos/JavaScript30) fork 過來的專案, 開始學習js30.

我是一個Js 新手, 為了提升自己的技能, 我將開始挑戰Js30, 專案github 是 [codeFreeman](https://github.com/codeFreeman/JavaScript30)

## 學習心得

> 學習關鍵字: [setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty), [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

#### 定義問題及撰寫程式

第二十六實作隨滑鼠移動的下拉選單
1. 要符合下拉選單的內容大小去動態調整

### 程式解析

**指定dom 元素**

    const triggers = document.querySelectorAll('.cool > li');
    const dropdownBackground = document.querySelector('.dropdownBackground');
    const nav = document.querySelector('.top');

*指定所有li，預設的隱藏背景及nav 本身*

**滑鼠移入顯示下拉選單**

    function showDropdown(){
      this.classList.add('trigger-enter');
      setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
      const dropdown = this.querySelector('.dropdown')
      const dropdownCoords = dropdown.getBoundingClientRect();
      const navCoords = nav.getBoundingClientRect();

      const coords={
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
      }
      console.log(coords)
      dropdownBackground.classList.add('open');
      dropdownBackground.style.setProperty('width', `${coords.width}px`);
      dropdownBackground.style.setProperty('height', `${coords.height}px`);
      dropdownBackground.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    }

    triggers.forEach(trigger=> trigger.addEventListener('mouseenter', showDropdown));

*透過新增或移除css class 的方法來完成，隨著li 選單移動，將li 選單的相對資訊取得後，透過setProperty 增加到隱藏的背景*

**滑鼠移出隱藏下拉選單**

    function hideDropdown(){
      console.log('hide')
      this.classList.remove('trigger-enter', 'trigger-enter-active');
      dropdownBackground.classList.remove('open');
    }

    triggers.forEach(trigger=> trigger.addEventListener('mouseleave', hideDropdown));

*當滑鼠移出時隱藏下拉選單*
