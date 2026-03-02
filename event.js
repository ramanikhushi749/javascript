// Event — page par koi pan action kare tene ek event rise karshe, 
// page par click, hover, typing all are events

// Event Listener — event nu reaction — give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})


// --------------------------------------------

// Common Events : click, input, change, submit, mouseover, keyup
// Click

let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode";
        document.body.style.backgroundColor = "black";
    } else {
        btn.textContent = "Dark Mode";
        document.body.style.backgroundColor = "white";
    }
});

// let btn001 = document.querySelector(".btn");

// btn001.addEventListener("click", () => {
//     if (btn001.textContent === "Color change"){
//         btn001.textContent = "Light Mode";
//         document.body.style.border = "2px solid black";
//     } else {
//         btn001.textContent = "color change";
//         document.body.style.border = "red";
//     }
// });

let card = document.querySelector(".color-card");
let btn001 = document.querySelector(".btn");

btn001.addEventListener("click", () => {

    if (card.style.borderColor === "black") {
        card.style.border = "1px solid red";
    } else {
        card.style.border = "1px solid black";
    }

});

// input
// how to know which is typed ?
let inp = document.querySelector("input");

inp.addEventListener("input", (dets) => {
    if(dets.data !== null){
        console.log(dets.data);
    }
});

// change -- when you change elements state
let select = document.querySelector(".sel");
let device = document.querySelector(".device");

select.addEventListener("change", (dets) => {
  console.log(dets.target.value);
  device.textContent = dets.target.value;
});

// event task

let box = document.querySelector(".box");
let bg_inp = document.querySelector(".bg-inp");
let color_inp = document.querySelector(".color-inp");

bg_inp.addEventListener("change", (dets) => {
    box.style.backgroundColor = dets.target.value;
});

color_inp.addEventListener("change", (dets) => {
    box.style.borderColor = dets.target.value;
});

//submit
let form = document.querySelector("form");
form.addEventListener("submit", () => {
    document.body.style.backgroundColor = "red";
});

// // mousemove and mouseout
// let box2 = document.querySelector(".box2");

// let box2.addEventListener("mousemove", () => {
//     box2.style.backgroundColor = "red";
//     box2.style.width = "300px";
// });

// box2.addEventListener("mouseout", () => {
//     box2.style.backgroundColor = "white";
//     box2.style.width = "100px";
// }):

// Mousemove & Mouseout (FIXED)
let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove", () => {
    box2.style.backgroundColor = "red";
    box2.style.width = "300px";
});

box2.addEventListener("mouseout", () => {
    box2.style.backgroundColor = "white";
    box2.style.width = "200px";
});

// key Down
let text = document.querySelector(".keydown");

text.addEventListener("keydown", () => {
    text.style.backgroundColor="black";
    text.style.color="white";
    text.style.width="5rem";
});

//