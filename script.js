//Function to get grid size from the user
function getSize() {
    //Prompt user for size
    const size = +prompt('Enter the preferred size: ');

    //If size is bigger than 100 or less than 2
    if (size > 100 || size < 2) {
        //Prompt again
        getSize();
    } else {
        //If size correct, initialize createGrid function
        createGrid(size);
    }
}

//Initialize getSize function
getSize();

//Function to create the grid
function createGrid(size) {
    //Create grid vertically
    for (let i = 1; i <= size; i++) {
        const mainContainer = document.querySelector('#main-container');

        //Calculate width and height for each grid square and convert it into viewport units
        const gridWidth  = ((window.innerWidth / size) / window.innerWidth) * 100 + 'vw';
        const gridHeight = ((window.innerHeight / size) / window.innerHeight) * 100 + 'vh';

        //Create vertical container for grid squares
        const container = document.createElement('div');

        //Style container and set width and height
        container.classList.add('container');
        container.setAttribute('style', `height: ${gridHeight}; width: ${window.innerWidth};`);

        //Add container to mainContainer in DOM
        mainContainer.appendChild(container);

        //Create grid horizontally
        for (let x = 1; x <= size; x++) {

            //Create grid squares horizontally
            const div = document.createElement('div');

            //Style grid squares and set width and height
            div.classList.add('grid');
            div.setAttribute('style', `height: ${gridHeight}; width: ${gridWidth};`);

            //Add grid squares to container in DOM
            container.appendChild(div);
        }
    }
}

//Function to get random number in RGB range
function getRandomNumber() {
    return Math.round(Math.random() * 255);
}

//Get node list of all grid squares
const divs = document.querySelectorAll('.grid');

//Iterate through node list
divs.forEach((div) => {
    //Add event listener for hover on each square
    div.addEventListener('mouseover', () => {
        //Change background color of square to random RGB value
        div.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    });
});