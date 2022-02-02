//create a 16x16 grid of squares in the html
const row = 16;
const columns= 16;



//body selection
const body = document.querySelector("body");
//div to hold columns
const divContainer = document.createElement("div");
divContainer.classList.add("container");



//16 div containers, column display
for (let i = 0; i<16; i++){
    divColumn = document.createElement("div")
    divColumn.classList.add("column");
    divColumn.textContent="meow";
    divContainer.appendChild(divColumn);
}

//append divContainer
body.append(divContainer);
//16 divs with square class, square styled in css