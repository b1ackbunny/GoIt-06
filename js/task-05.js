const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
  };
  
  refs.inputEl.addEventListener('input', onInputElChange);
  
  function onInputElChange(e) {
    
    if(refs.inputEl.value === '') {
      refs.spanEl.textContent = 'Anonymous';
    } else {
      refs.spanEl.textContent = e.currentTarget.value
    }
  }