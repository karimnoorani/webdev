const makeBigger = () => {
   let elements = document.querySelectorAll("h1, p");
   for (let i = 0; i < elements.length; i++){
      var style = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      elements[i].style.fontSize = (currentSize + 1) + 'px';
   }
};

const makeSmaller = () => {
   let elements = document.querySelectorAll("h1, p");
   for (let i = 0; i < elements.length; i++){
      var style = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      elements[i].style.fontSize = (currentSize - 1) + 'px';
   }
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

