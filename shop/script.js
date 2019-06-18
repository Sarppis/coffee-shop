var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.frombottom-hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'frombottom-hidden',
          'fade-in-text'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();


// DOM MANIPULATION
let basket = {
	coffee: { total: 0 },
	tea: { total: 0 },
	chocolate: { total: 0 },
};

let buttons = document.querySelectorAll('button');
let shopping_basket = document.getElementById('shopping_basket');
shopping_basket.addEventListener('click', function() {
	alert(JSON.stringify(basket));
});

buttons.forEach(button =>
	button.addEventListener('click', function() {
		basket[this.dataset.product].total += 1;
		alert(`${this.dataset.product}  is added to Basket`);
	}),
);
