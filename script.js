//create a 100x100 grid of squares in the html
const rows = 100;
const columns= 100;
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
        console.log(container);
        container.innerHTML="";
    })
}
addResetButton();
//creates grid
columnsOfNum(columns);
hoverListener();
resetListener();


//16 divs with square class, square styled in css