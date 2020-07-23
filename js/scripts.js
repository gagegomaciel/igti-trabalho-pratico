let inputRangeRed;
let inputRangeGreen;
let inputRangeBlue;

let inputTextRed;
let inputTextGreen;
let inputTextBlue;

let squarecolor;

let r = '0';
let g = '0';
let b = '0';

window.addEventListener('load', () => {
  mapElements();
  syncDiv();
});

function mapElements() {
  inputRangeRed = document.querySelector('#inputRangeRed');
  inputRangeGreen = document.querySelector('#inputRangeGreen');
  inputRangeBlue = document.querySelector('#inputRangeBlue');

  inputTextRed = document.querySelector('#inputTextRed');
  inputTextGreen = document.querySelector('#inputTextGreen');
  inputTextBlue = document.querySelector('#inputTextBlue');

  squarecolor = document.querySelector('#squarecolor');

  inputRangeRed.addEventListener('change', handleInputRangeChange);
  inputRangeGreen.addEventListener('change', handleInputRangeChange);
  inputRangeBlue.addEventListener('change', handleInputRangeChange);
}


function handleInputRangeChange(e) {
  const value = e.target.value;
  const id = e.target.id;

  switch (id) {
    case 'inputRangeRed':
      r = value;
      break;
    case 'inputRangeGreen':
      g = value;
      break;
    case 'inputRangeBlue':
      b = value;
      break;
  } 
  syncDiv();
}

function syncDiv() {
  squarecolor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  inputTextRed.value = r;
  inputTextGreen.value = g;
  inputTextBlue.value = b;
}