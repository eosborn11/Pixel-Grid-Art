let height;
let width;
let color = "colorPicker";

const table = document.querySelector("#pixelCanvas");
const pickColor = document.querySelector("#colorPicker");
const size = document.querySelector("#sizePicker");

size.addEventListener("submit", function(event){
  event.preventDefault();
  width = document.getElementById("inputHeight").value;
  height = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});

function makeGrid(height, width) {
  table.innerHTML = "";
  for (let row = 0; row < width; row++) {
    let newRow = table.insertRow();
    for (let cell = 0; cell < height; cell++) {
      let newCell = newRow.insertCell();
      newCell.onclick = changeColor;
    }
  }
}

function changeColor() {
  this.style.background = pickColor.value;}