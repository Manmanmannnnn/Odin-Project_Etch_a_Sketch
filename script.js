const sketchPad=document.querySelector(".container");
const setGridBtn=document.querySelector("button");
const sketchPadWidthAndHeight=500;


let squareDimension=prompt("Enter grid dimension", "(10-100)");
let squareDimensionValue=Number(squareDimension);
let squareSize=sketchPadWidthAndHeight/squareDimensionValue;
let gridArea=squareDimensionValue*squareDimensionValue;


function createSquare(){
    let square=document.createElement("div");
    square.classList.add("gridPixels");
    square.style.width=`${squareSize}px`;
    square.style.height=`${squareSize}px`;
    square.style.border="1px solid black";
    square.style.boxSizing="border-box";
    sketchPad.appendChild(square);
}

function createGrid(){

    for( let i=0;i<gridArea;i++){
        createSquare();
    }
}

createGrid();

//color each pixel as mouse hover
let gridPixels=sketchPad.querySelectorAll(".gridPixels");

gridPixels.forEach((pixel)=>{
    const gridPixelColor=()=>pixel.style.backgroundColor="black";
    pixel.addEventListener("mouseover",gridPixelColor)
})