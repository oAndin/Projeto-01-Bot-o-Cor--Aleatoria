console.log("Hello World!");

const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

var colors = ["green","blue","red","orange","yellow","violet",]

bodyEl.style.background = "pink";
// #545454

btnEl.addEventListener("click",addColor);

function addColor(){
    console.log("clicked");
    var color = parseInt(Math.random() * colors.length);
    bodyEl.style.background = colors[color];
    var count = count++;
}
console.log(colors);