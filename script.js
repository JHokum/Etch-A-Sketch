//create a 100x100 grid of squares in the html
let rows = 16;
let columns= 16;
let divContainer;
let divColumn;

//div container
divContainer = document.createElement("div");
divContainer.classList.add("container");
//body selection
const body = document.querySelector("body");



//16 div containers, column display
function columnsOfNum(num){
    
    for (let i = 0; i<num; i++){
        divColumn = document.createElement("div")
        divColumn.classList.add("column");
        rowsOfNum(divColumn,rows);
        // divColumn.textContent="meow";
        divContainer.appendChild(divColumn);
    }
    body.append(divContainer);
}
//16 rows
function rowsOfNum(column,num){
    
    for(let i =0; i<num; i++){
        divRow = document.createElement("div");
        divRow.classList.add("row");
        column.appendChild(divRow);
        
    }
}

//grab row array
function getRowArray(){
    const rowArr = Array.from(document.querySelectorAll(".row"));
    
    return rowArr;
}

//row event listeners for hovering
function hoverListener(rowArr=getRowArray()){
    rowArr.forEach(row => row.addEventListener("mouseenter",function (e){
        e.target.style.backgroundColor="red";
    }))
    rowArr.forEach(row => row.addEventListener("mouseleave",function (e){
        e.target.style.backgroundColor="cyan";
    }))
}

//add reset button
function addResetButton(){
    const button = document.createElement("button");
    button.textContent="RESET";
    body.append(button);
}


//event listener to clear grid when button pressed
function resetListener(){
    const button = document.querySelector("button");
    button.addEventListener("click", function(e){
        const container = document.querySelector(".container");
        
        container.innerHTML="";//clears container div
        gridPrompt();
        hoverListener();
    })
}



//prompt to select rows and columns
function gridPrompt(){
    columns = prompt("Please Enter number of squares per side.")
    rows = columns;
    columnsOfNum(columns);
}
addResetButton();
//creates grid
columnsOfNum(columns);
hoverListener();
resetListener();


//16 divs with square class, square styled in css