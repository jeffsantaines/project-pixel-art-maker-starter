
// Select color input
const mBody = document.getElementsByTagName('body')[0];
// Select size input
const myParagraph = document.createElement('p');
//const myCustomDiv = document.createElement('div');
const myTable = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const submitBtn = document.getElementById('sizePicker');
submitBtn.addEventListener('submit', makeGrid, false);

function makeGrid() {
    //Your code goes here!
    const tableBody = document.createElement('tbody');   
    const height = parseInt(document.getElementById('inputHeight').value);
    const width = parseInt(document.getElementById('inputWidht').value);
         
    for (let row = 1; row <= height; row++) {
        const newRow = document.createElement('tr');
        for(let col =1; col<= width; col++){
            const newColumn = document.createElement('td');
            newRow.appendChild(newColumn);
        }
        tableBody.appendChild(newRow)[row];
        
    }
    myTable.appendChild(tableBody);
    mBody.appendChild(myTable);
    myTable.addEventListener('click', respondToTheClick);
    
}


function addParagraph() {
    myParagraph.textContent = "Added paragraph";
    document.body.appendChild(myParagraph);
}

function respondToTheClick(evt) {
const color = document.getElementById('colorPicker').value;
    
    evt.target.bgColor = color ;
}



