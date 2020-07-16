let actualColor = "SteelBlue";

let board = document.querySelector('.drawing-board');

for(let i = 0; i < 64; i++){
  const pixelDiv = document.createElement('div');
  pixelDiv.classList.add('pixel');
  pixelDiv.addEventListener("click", function() {
  setPixelColour(pixelDiv);
  });
  board.appendChild(pixelDiv);
}


function setColor(clickedColor) {
  actualColor = clickedColor;
}

function setPixelColour(pixel) {
  pixel.style.backgroundColor = actualColor;
}
