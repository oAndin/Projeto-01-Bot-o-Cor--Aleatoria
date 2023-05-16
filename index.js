// // Criando três VAR para gerar as cores aleatorias!

// var R = parseInt(Math.random() * 256);
// var G = parseInt(Math.random() * 256);
// var B = parseInt(Math.random() * 256);

// console.log(R,G,B);

// // Criando uma const RGB para gerar a cor aleatoria!

// const RGB = `rgb(${R},${G},${B})`;

// console.log(RGB);

// ----------------------------------------------------------------------------------------------

console.log("Hello World!");

const btnEl = document.querySelector(".btn");
const bodyEl = document.querySelector("body");

bodyEl.style.background = "#545454";
// #545454

btnEl.addEventListener("click",addColor);

function addColor(){
    console.log("clicked");
    var R = parseInt(Math.random() * 256);
    // console.log(R);
    var G = parseInt(Math.random() * 256);
    // console.log(G);
    var B = parseInt(Math.random() * 256);
    // console.log(B);
    const RGB = `rgb(${R},${G},${B})`;
    bodyEl.style.background = RGB;
    // console.log(bodyEl.style.background); 
    var count = count++;
}

// ----------------------------------------------------------------------------------------------


