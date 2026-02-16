// Event — page par koi pan action kare tene ek event rise karshe, 
// page par click, hover, typing all are events

// Event Listener — event nu reaction — give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})// --------------------------------------------

// Common Events : click, input, change, submit, mouseover, keyup
// Click

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode";
        document.body.style.backgroundColor = "black";
    } else {
        btn.textContent = "Dark Mode";
        document.body.style.backgroundColor = "white";
    }
});


// input
// how to know which is typed
let inp = document.querySelector("input");


inp.addEventListener("input", (dets)=>{
    
    if (dets.data !== null){
        console.log(dets.data);
    }
});