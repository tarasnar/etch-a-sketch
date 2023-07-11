//Make the grid size itself accordingly to available width and height of the window
//Create a hover effect which will make squares change color
//Make the grid size its height properly
const mainContainer = document.querySelector('#main-container'); //get main container
let size = +prompt('Enter the preferred size: '); // ask for size
const gridWidth  = (((window.innerWidth / size) / window.innerWidth) * 100) + 'vw'; // calculate width by available width divided by size multiplied by 0.05 and converted into vw
const gridHeight = (((window.innerHeight / size) / window.innerHeight) * 100) + 'vh'; // calculate height by available height divided by size multiplied by 0.1 and converted into vh
console.log(gridWidth, gridHeight);
function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const container = document.createElement('div'); //create container element
        container.classList.add('container'); // add style class
        container.style.height = `${gridHeight}`;
        container.style.width = `${window.innerWidth}`;
        mainContainer.appendChild(container); // append to main-container
        for (let x = 1; x <= size; x++) { // for size fill the container previously created
            const div = document.createElement('div'); //create div element
            div.classList.add('grid'); //add style class
            div.setAttribute('style', `height: ${gridHeight}; width: ${gridWidth};`); // set calculated width and height
            container.appendChild(div); // fill container with div
        }
    }
}
createGrid(size);