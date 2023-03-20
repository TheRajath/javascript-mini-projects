let colors = [];
let pickedColor;
let numSquares = 6;
const heading = document.querySelector("h1");
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    //mode buttons event Listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {

    for (let i = 0; i < modeButtons.length; i++) {

        modeButtons[i].addEventListener("click", function () {

            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");

            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
        });
    }
}

function setUpSquares() {

    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];

        //add click listeners to squares
        squares[i].addEventListener("click", function () {

            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            //compare color to the pickedColor
            if (clickedColor === pickedColor) {

                messageDisplay.textContent = "Correct !";
                resetButton.textContent = "Play Again?";

                changeColors(clickedColor);

                heading.style.backgroundColor = clickedColor;

            } else {

                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {

    colors = generateRandomColors(numSquares);

    //pick a new random coolr from array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    //change colors of square
    for (var i = 0; i < squares.length; i++) {

        // add initial colors to squares
        if (colors[i]) {

            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        } else {

            squares[i].style.display = "none";
        }
    }

    heading.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {

    reset();
});


function changeColors(color) {

    //loop through all squares
    for (var i = 0; i < squares.length; i++) {

        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {

    // make an array
    var arr = [];

    //add num random colors to array
    for (var i = 0; i < num; i++) {

        //get random color and push into arr
        arr.push(randomColor());
    }

    //return that array
    return arr;
}

function randomColor() {

    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
