const mainContainer = document.querySelector('#main-container');
function getSize() {
    let size = +prompt('Enter the preferred size: ');
    if (size > 100 || size < 2) {
        getSize();
    } else {
        createGrid(size);
    }
}
getSize();
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
function getRandomNumber() {
    let randomNumber = Math.round(Math.random() * 255);
    console.log(randomNumber);
    return randomNumber;
}
const divs = document.querySelectorAll('.grid');
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    })
})