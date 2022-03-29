const refs = {
    decrBtn: document.querySelector('button[data-action=decrement]'),
    incrBtn: document.querySelector('button[data-action=increment]'),
    valeurRef: document.querySelector('#value'),
  };
  
  let newValue = 0;
  
  function onDecrBtnClick() {
    newValue -= 1;
    refs.valeurRef.textContent = newValue;
  }
  
  function onIncrBtnClick() {
    newValue += 1;
    refs.valeurRef.textContent = newValue;
  }
  
  refs.decrBtn.addEventListener('click', onDecrBtnClick);
  refs.incrBtn.addEventListener('click', onIncrBtnClick);