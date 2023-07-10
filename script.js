const createButton = document.querySelector('#create');
createButton.addEventListener('click', () => {
    let size = +prompt('Enter the preferred size: ');
    createGrid(size);
});
function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
        for (let x = 1; x <= size; x++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);
        }
    }
}