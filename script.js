const colorObj = {
  colors: ['black', 'red', 'yellow', 'blue'],
  'selected color': '',
};

const theColors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const clearBtn = document.querySelector("#clear-board");

for (let i = 0; i < theColors.length; i++) {
  theColors[0].classList.add('selected');
  theColors[i].style.backgroundColor = colorObj['colors'][i];
  theColors[i].addEventListener('click', selectColor);
}

for (let i = 25; i > 0; i--) {
  const indvPixel = document.createElement('div');
  indvPixel.classList.add('pixel');
  indvPixel.addEventListener("click", e => {
    e.target.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
  })
  pixelBoard.appendChild(indvPixel);
}

for (let i = 0; i < theColors.length; i++) {
  theColors[i].addEventListener('click', (e) => {
    for (let color of theColors) {
      if (color.classList.contains('selected')) {
        color.classList.remove('selected');
      }
    }
    e.target.classList.add('selected');
  });
}

function selectColor(e) {
  colorObj['selected color'] = e.target.style.backgroundColor;
  e.target.classList.add('selected');
}

clearBtn.addEventListener("click", () => {
    const thePixels = document.querySelectorAll(".pixel");
    for(let pixel of thePixels) {
        pixel.style.backgroundColor = "white";
    }
})