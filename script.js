//Make the grid size itself accordingly to available width and height of the window
//Create a hover effect which will make squares change color
const mainContainer = document.querySelector('#main-container');
let size = +prompt('Enter the preferred size: ');
function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const gridWidth  = (((window.innerWidth / size) / window.innerWidth) * 100) + 'vw';
        const gridHeight = (((window.innerHeight / size) / window.innerHeight) * 100) + 'vh';
        const container = document.createElement('div');
        container.classList.add('container');
        container.style.height = `${gridHeight}`;
        container.style.width = `${window.innerWidth}`;
        mainContainer.appendChild(container);
        for (let x = 1; x <= size; x++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.setAttribute('style', `height: ${gridHeight}; width: ${gridWidth};`);
            container.appendChild(div);
        }
    }
}
createGrid(size);