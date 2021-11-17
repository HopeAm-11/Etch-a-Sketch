let container = document.getElementById("container");
let i = 0;
let numberOfRows = 16;
let total = numberOfRows * numberOfRows;

// create 16x 16 grid 
function grid() {
  for (i = 0; i < 256; ++i) {
    numberOfRows = 16;
    let divSquares = document.createElement('div');
    divSquares.classList = 'div-squares'; // added class 
    container.appendChild(divSquares);
    divSquares.textContent = "";
    document.documentElement.style.setProperty("--columns-row", numberOfRows);
    divSquares.addEventListener("mouseover", () => divSquares.style.backgroundColor = "black");
  }
}

grid();

function game() {

  container = document.getElementById("container");
  numberOfRows = prompt("How many rows do you want?");
  container.textContent = '';

  total = numberOfRows * numberOfRows;
  document.documentElement.style.setProperty("--columns-row", numberOfRows);

  if (numberOfRows >= 0 && numberOfRows <= 100) {
    for (let i = 0; i < total; i++) {
      container = document.getElementById("container");
      var divSquares = document.createElement('div');
      divSquares.textContent = "";
      divSquares.classList = 'div-squares';
      document.getElementById("container").appendChild(divSquares);
      divSquares.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black"
      });
    }
  } else if (numberOfRows > 100 || numberOfRows < 0) {
    window.alert("enter a number please btween 1 and 100");
    game();
  } else {
    console.log("sad")
  }
}

let btn = document.getElementById("btn")
btn.addEventListener("click", game);