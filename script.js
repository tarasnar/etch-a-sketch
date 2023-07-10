//Make the grid size itself accordingly to available width and height of the window
//Create a hover effect which will make squares change color
const mainContainer = document.querySelector('#main-container');
const createButton = document.querySelector('#create');
createButton.addEventListener('click', () => {
    mainContainer.replaceChildren();
    let size = +prompt('Enter the preferred size: ');
    createGrid(size);
});
function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const container = document.createElement('div');
        container.classList.add('container');
        mainContainer.appendChild(container);
        for (let x = 1; x <= size; x++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);
        }
    }
}