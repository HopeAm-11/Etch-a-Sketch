const container = document.querySelector('[data-container]');
const drawBtn = document.querySelector('[data-draw]');
const resetBtn = document.querySelector('[data-reset]');
const blackBtn = document.querySelector('[data-black]');
const ranbowBtn = document.querySelector('[data-ranbow]');
const startBtn = document.querySelector('[data-draw]');


// default 16*16

let i = 0;
let numberOfRows = 16
let total = numberOfRows * numberOfRows;

function grid() {
    for (i = 0; i < 256; ++i) {
        numberOfRows = 16;
        let divSquares = document.createElement('div');
        divSquares.setAttribute('data-divSquares', 'divs');
        divSquares.classList.add("div-squares");
        container.appendChild(divSquares);
        divSquares.textContent = "";
        document.documentElement.style.setProperty("--columns-row", numberOfRows);

        divSquares.addEventListener("mouseover", () => divSquares.style.backgroundColor = "black");

        ranbowBtn.addEventListener('click', () => {
            divSquares.addEventListener("mouseover", () => {
                divSquares.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
            })
        })
        blackBtn.addEventListener('click', () => {
            divSquares.addEventListener("mouseover", () => {
                divSquares.style.backgroundColor = "black";
            })
        })
        resetBtn.addEventListener('click', () => {
            divSquares.style.backgroundColor = "transparent"
        })
    }
}

grid()

// user input 

function game() {

    numberOfRows = parseInt(prompt("Please add number from 1 to 100"));


    container.textContent = '';

    total = numberOfRows * numberOfRows;
    document.documentElement.style.setProperty("--columns-row", numberOfRows);

    if (numberOfRows >= 1 && numberOfRows <= 100) {
        for (let i = 0; i < total; i++) {
            let divSquares = document.createElement('div');
            divSquares.textContent = "";
            divSquares.classList = 'div-squares';
            document.getElementById("container").appendChild(divSquares);
            divSquares.addEventListener("mouseover", function () {
                this.style.backgroundColor = "black";

            });
            ranbowBtn.addEventListener('click', () => {
                divSquares.addEventListener("mouseover", () => {
                    divSquares.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
                })
            })
            blackBtn.addEventListener('click', () => {
                divSquares.addEventListener("mouseover", () => {
                    divSquares.style.backgroundColor = "black";
                })
            })
            resetBtn.addEventListener('click', () => {
                divSquares.style.backgroundColor = "transparent"
            })
        }
    } else if (numberOfRows > 100 || numberOfRows < 1) {
        window.alert("Please enter a number between 1 and 100");
        game();
    } else if (numberOfRows !== parseInt(numberOfRows).toString()) {
        alert("Please enter a number");
        game();
    }

}

startBtn.addEventListener('click', game)