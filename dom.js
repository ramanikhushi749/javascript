// // Selecting Elements

// // getElementById
// let a = document.getElementById("abc");
// console.log(a);
// // console.dir(a);


// // getElementsByClassName
// let b = document.getElementsByClassName("abc");
// console.log(b);


// // getElementsByTagName
// let temp_c = document.getElementsByTagName("h1");
// console.log(temp_c);


// // querySelector and querySelectorAll
// // most used in project and used by company

// let c = document.querySelector("h1"); 
// // only select first element that find in your html
// console.log(c);

// let d = document.querySelectorAll("h1"); 
// // select all elements in your html
// console.log(d);

// // Text/Content access: innerText, textContent, innerHTML

// let e = document.querySelector("h1");
// console.dir(e);

// e.innerText = "first h1 tag";
// // document.querySelector("h1").innerText = "first h1 tag"

// // e.textContent = "h1 tag"

// e.innerHTML = "<i>first h1 tag</i>";
// // e.outerHTML = "<i>h1 with OuterHTML</i>"
// // e.outerHTML = "h1 with outertext"


// // outer vs inner

// // innerText  → show text between tag — ignore tag
// // outerText  → show text between tag — remove tag

// // innerHTML  → show text between two tag — not tag
// // outerHTML  → show text with tag



//-------------------------------------------------------------------
// attributr manipulation
// getattribute setattribute , removeattribute
let link = document.querySelector("a");
console.dir(link);
console.log(link.href);
console.log("href value", link.getAttribute('href'))

//setattribute
link.setAttribute("href","www.google.com");
console.log("href value", link.getAttribute('href'))

// removeattribute
link.removeAttribute("href");

// ----------------------------------------------------
// dynamic dom manipulation
// createelement , appendchild ,

// Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend
// createElement

let text_h1 = document.createElement("h1");
console.log(text_h1);

text_h1.textContent = "create h1 with JS";

// append / prepend
// document.body.append(text_h1);
document.body.prepend(text_h1);

// appendchild
let outer = document.createElement("div");
outer.classList.add("outer");
document.body.append(outer)

let inner = document.createElement("div");
inner.classList.add("inner");
outer.appendChild(inner)


// append vs appendChild
// remove vs removeChild


// ------------------------------------------------------------
// Style Updates via .style and classList (add, remove, toggle)

console.dir(text_h1);

text_h1.style.backgroundColor = "black";
text_h1.style.color = "white";
text_h1.style.padding = "10px";


// ClassList - add
let card = document.querySelector(".card");
console.dir(card);

card.classList.add("card-style");


// remove
card.classList.remove("card");


// toggle -- class --> available --> remove it
//           class --> not available --> add it
card.classList.toggle("card");


