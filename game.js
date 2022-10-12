const container = document.querySelector('.container');
let button = document.querySelector('#grid-button');

button.addEventListener("click", function() {
    // alert("he said the line!");
    let gridNumber = prompt("enter how many rows/columns you want");
});
// for 16 rows, make the row. within that row, add 16 grid pieces/columns
for(i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.setAttribute('class', 'row');
    // gridRow.textContent = "general kenobi";

    for(j = 0; j < 16; j++) {
        const gridPiece = document.createElement('div');
        gridPiece.setAttribute('class', 'grid');
        gridPiece.textContent = "hello there";

        gridPiece.addEventListener("mouseover", function() {
            gridPiece.setAttribute("style", "background-color: white;");
            gridPiece.textContent = "general kenobi";
        }, false);

        gridRow.appendChild(gridPiece);
    }

    container.appendChild(gridRow);
}


function drawGrid() {

}

drawGrid();