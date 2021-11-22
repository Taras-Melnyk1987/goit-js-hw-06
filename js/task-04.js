const counter = {
    counterValue: 0,
    increment() {
      this.counterValue += 1;
    },
    decrement() {
      this.counterValue -= 1;
    },
  };
  
  const btnDecrement = document.querySelector('[data-action="decrement"]');
  const btnIncrement = document.querySelector('[data-action="increment"]');
  const valueEl = document.querySelector('#value');
  
  btnDecrement.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
  });
  
  btnIncrement.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;
  });