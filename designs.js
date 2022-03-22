// color and size input
let height;
let width;
let color = "colorPicker";
//DOM Elements
const table = document.querySelector("#pixelCanvas");
const pickColor = document.querySelector("#colorPicker");
const size = document.querySelector("#sizePicker");
//listen for user input
size.addEventListener("submit", function(event){
  event.preventDefault();
  width = document.getElementById("inputHeight").value;
  height = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});
//convert input to grid
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
//change color
function changeColor() {
  this.style.background = pickColor.value;}