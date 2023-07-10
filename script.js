const resizeButton = document.querySelector('#resize');
resizeButton.addEventListener('click', createGrid);
function createGrid() {
    for (let i = 1; i <= 16; i++) {
        const container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
        for (let x = 1; x <= 16; x++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            container.appendChild(div);
        }
    }
}