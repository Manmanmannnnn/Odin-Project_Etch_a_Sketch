const sketchPad=document.querySelector(".container");
const Btns=document.querySelectorAll("button");
const startSketchBtn=Btns[0];
const setRainbowInkBtn=Btns[1];
const setNormalInkBtn=Btns[2];
const setEraserBtn=Btns[3];
const setPencilBtn=Btns[4];
const sketchPadWidthAndHeight=500;

//initial dimension set to 16x16 with coloring not yet enabled
let squareDimension=16;
let squareDimensionValue=16;
let squareSize=sketchPadWidthAndHeight/16;
let gridSquareCount=16*16;
createGrid();

//when clicked gives prompt to enter desired dim and creategrid and color default black
startSketchBtn.addEventListener("click",()=>{
    sketchPad.innerHTML="";
   createGridSpecs();
    createGrid();
    colorEachPixel("black");
})

setRainbowInkBtn.addEventListener("click",()=>colorEachPixel("rainbow"));
setNormalInkBtn.addEventListener("click",()=>colorEachPixel("black"));
setEraserBtn.addEventListener("click",()=>colorEachPixel("erase"));
setPencilBtn.addEventListener("click",()=>colorEachPixel("darkening"));

function createGridSpecs(){
    squareDimension=prompt("Enter grid dimension", "(5-100)");
    squareDimensionValue=parseInt(squareDimension);
    squareSize=sketchPadWidthAndHeight/squareDimensionValue; //gives dimension of each square
    gridSquareCount=squareDimensionValue*squareDimensionValue;
}

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
    if(squareDimensionValue>100||isNaN(squareDimensionValue)||squareDimensionValue<5)
        return alert("Invalid dimension try again and choose between 5-100")
    for( let i=0;i<gridSquareCount;i++){
        createSquare();
    }
}

//create types of color for sketchpad incuding mousehover effect
function colorEachPixel(color){
    let currentColor=color;
    let gridPixels=sketchPad.querySelectorAll(".gridPixels");

    gridPixels.forEach((pixel)=>{
        
        pixel.addEventListener("mouseover",()=>{
            //create types of color
            if(currentColor==="black") return pixel.style.backgroundColor="black";
            
            else if(currentColor==="erase") return pixel.style.backgroundColor="white";

            else if(currentColor==="rainbow"){
                let red=Math.random()*256
                let green=Math.random()*256
                let blue=Math.random()*256
                pixel.style.backgroundColor=`rgb(${red},${green},${blue})`;   
            }

           else return
        
        })
        //create pencil like effect color
        let opacity=0;
        pixel.addEventListener("mouseover",()=>{
            if(currentColor==="darkening"){
                opacity+=0.1;
                pixel.style.backgroundColor=`rgb(0,0,0,${opacity})`
            }
        })
    })
}

// //lesson
// setRainbowInkBtn.addEventListener("click", colorEachPixel("rainbow"));
// This line calls colorEachPixel("rainbow") immediately, which means it runs 
// right away when the code is reached, not when the button is clicked.

// setRainbowInkBtn.addEventListener("click", () => colorEachPixel("rainbow"));
// colorEachPixel only runs when you actually click the button.