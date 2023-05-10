console.log("Hello World!");

const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

var colors = ["green","blue","red","orange","yellow","violet",]

bodyEl.style.background = "pink";
// #545454

btnEl.addEventListener("click",addColor);

function addColor(){
    console.log("click");
    var color = parseInt(Math.random()*VideoColorSpace.lenght);
    bodyEl.style.background = colors[color];
    count++;
}
console.log(colors);