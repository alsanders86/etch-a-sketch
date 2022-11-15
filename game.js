const container = document.querySelector('.container');
let button = document.querySelector('#grid-button');
let gridNumber = 16;

// button will clear the current grid and make a new grid
button.addEventListener("click", function() {
    clearGrid();

    do {
        gridNumber = parseInt(window.prompt("enter how many rows/columns you want. (a number between 1-100)", ""));
    } while(isNaN(gridNumber) || gridNumber > 100 || gridNumber < 1);

    drawGrid(gridNumber);
});



function drawGrid(gridNumber) {
    // for 16 rows, make the row. within that row, add 16 grid pieces/columns
    for(i = 0; i < gridNumber; i++) {
        const gridRow = document.createElement('div');
        gridRow.setAttribute('class', 'row');
        // gridRow.textContent = "general kenobi";

        for(j = 0; j < gridNumber; j++) {
            const gridPiece = document.createElement('div');
            gridPiece.setAttribute('class', 'grid');
            // gridPiece.textContent = "hello there";

            gridPiece.addEventListener("mouseover", function() {
                gridPiece.setAttribute("style", "background-color: white;");
                // gridPiece.textContent = "general kenobi";
                console.log(randomRGB());
            }, false);

            gridRow.appendChild(gridPiece);
        }

        container.appendChild(gridRow);
    }
}

function clearGrid() {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function randomRGB() {
    let red, green, blue;
    red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    return (`${red}, ${green}, ${blue}`);
}

drawGrid(gridNumber);
