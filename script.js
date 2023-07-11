//Get mainContainer for future use
const mainContainer = document.querySelector('#main-container');
//Create buttonDiv and resizeButton for simpleUI
const buttonDiv = document.createElement('div');
const resizeButton = document.createElement('button');
//Style buttonDiv and resizeButton
buttonDiv.style.width = `${window.innerWidth}`;
resizeButton.textContent = 'create';
buttonDiv.classList.add('button-div');
resizeButton.classList.add('resize');
//Append resizeButton to buttonDiv
buttonDiv.appendChild(resizeButton);
//Insert buttonDiv at the start of body element
document.body.insertBefore(buttonDiv, mainContainer);

//Function to get grid size from the user
function getSize() {
    //Prompt user for size
    const size = +prompt('Enter the desirable grid size between 2 and 100');

    //If size is bigger than 100 or less than 2
    if (size > 100 || size < 2) {
        //Prompt again
        getSize();
    } else {
        //If size correct, initialize createGrid function
        createGrid(size);
    }
}

//Add event listener to resizeButton so grid could be initialized
resizeButton.addEventListener('click', () => {
    //Clear old grid
    mainContainer.replaceChildren();
    //Re-prompt for size of new grid
    getSize();
});

//Function to create the grid
function createGrid(size) {
    //Create grid vertically
    for (let i = 1; i <= size; i++) {
        //Calculate width and height for each grid square and convert it into viewport units
        const gridWidth  = ((window.innerWidth / size) / window.innerWidth) * 100 + 'vw';
        const gridHeight = (((window.innerHeight - buttonDiv.offsetHeight) / size) / window.innerHeight) * 100 + 'vh';

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
}

//Function to get random number in RGB range
function getRandomNumber() {
    return Math.round(Math.random() * 255);
}