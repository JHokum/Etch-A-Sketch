//create a 16x16 grid of squares in the html
const rows = 16;
const columns= 16;
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
    console.log(column);
    for(let i =0; i<num; i++){
        divRow = document.createElement("div");
        divRow.classList.add("row");
        column.appendChild(divRow);
        
    }
}
//creates grid
columnsOfNum(columns);


//16 divs with square class, square styled in css