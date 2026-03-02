// setTimeOut , clearTimeOut 

// setTimeOut --> run only one time 
// timeout --> in ms
setTimeout(() => {
    console.log("hello word");
}, 2000);

// setInterval , clearInterval
// setInterval --> run into loop(infinet times)

let timmer = setInterval(() => {
    console.log("hii, set interval");
}, 2000);

// clear Interval
clearInterval(timmer);

// let count = 0;
// let counter = setInterval(() => {
//     count++;
//     if (count <= 10) {
//         console.log(count);
//     }else {
//         console.log("stop counter");
//         clearInterval();
//     }

// }, 1000);

// popup window

let button = document.querySelector("button");
let card = document.querySelector(".card");
setTimeout(() => {
    card.style.display = "block"
},5000);

button.addEventListener("click", () =>{
    card.style.display = "none";
})

// Real USe : delaying UI actions , auto-refresh 

// Downloading card

let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let h2 = document.querySelector("h2");
let count = 0;
setInterval(() => {
    
  if(count <= 1000){
      bar.style.width =`${count}%`;
      percent.textContent = `${count}%`
      count++;
      console.log(count);
  } 
  if (count === 100){
    h2.textContent = "Dowmloaded";
  } 
if(count <= 1000){
  document.querySelector(".photo").style.height = `${count}px`;
}
},100 );