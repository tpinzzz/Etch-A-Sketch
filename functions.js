//Create a webpage with a 16x16 grid of square divs


const canvascontainer = document.createElement("div");
canvascontainer.classList.add(`canvascontainer`);

body = document.querySelector("body");
body.appendChild(canvascontainer);

let numberofsquares = 16;

const adjustcanvas = document.querySelector(".adjustcanvas");

createGrid(numberofsquares);

function createGrid(numberofsquares){



    for (let i = 0; i < numberofsquares; i++){
    //create div for each row 
    const r = document.createElement("div");
    r.classList.add(`rowcontainer`);
    canvascontainer.appendChild(r);

        for (let j = 0; j < numberofsquares; j++) {
            const square = document.createElement("div");
            square.textContent = "";
            //add class for each row and column
            const list = square.classList;
            list.add(`rowitem`);
            list.add(`col${j}`);

            //row = document.querySelector("body");
            r.appendChild(square);


            //add event listeners for hovering functionality to each square
            square.addEventListener("mouseenter", (e) => {
                e.target.style.background = randomcolor();
            })
        }

    }
}





adjustcanvas.addEventListener("click", () => {
    let numberofsquares = prompt("Please enter a number between 0 and 100");
    if (numberofsquares !== null) {
        numberofsquares = parseInt(numberofsquares);
        if (!isNaN(numberofsquares) && numberofsquares > 0 && numberofsquares <= 100) {
            console.log("test")
            //delete current grid
            canvascontainer.innerHTML = '';
            //create
            createGrid(numberofsquares);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
});



//random color function

//standard JS approach
function random(min,max) {
    return Math.floor((Math.random())*(max-min+1))+min;
   }

//random color funciton

function randomcolor() {
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    return rgb;
}

