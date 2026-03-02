// 1. select --> event --> function (change)
// 2. show form and close form
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show all data into HTML
// 7. create UP and DOWN buttons  


// select --> event --> function (change)
let addBtn = document.querySelector("#add-note");
let container = document.querySelector(".form-container");
let closeBtn = document.querySelector(".closeForm");
let form = document.querySelector("form");
let img = document.querySelector("input[placeholder = 'https://example.com/photo.jpg']");
let uname = document.querySelector("input[placeholder = 'Enter full name']");
let home = document.querySelector("input[placeholder = 'Enter home town']");
let purpose = document.querySelector("input[placeholder = 'e.g., Quick appointment note']");
let category = document.querySelectorAll("input[name='category']");

// open form --> add name cards
addBtn.addEventListener("click", () => {
    container.style.display = "block";
})

// close form
closeBtn.addEventListener("click", () => {
    container.style.display = "none";
})

// save to local storage
function SaveToStorage(obj) {
    // save new data
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
}

// form validation, submit, reset
form.addEventListener("submit", (e) => {

    e.preventDefault();

    let imgUrl = img.value.trim();
    let fullName = uname.value.trim();
    let town = home.value.trim();
    let task = purpose.value.trim();
    let selected = false;

    category.forEach((cat) => {
        if (cat.checked) {
            selected = cat.value;
        }
    });

    if (imgUrl === "") {
        alert("Please Enter Image URL");
        return;
    }
    if (fullName === "") {
        alert("Please Enter Full Name")
        return;
    }
    if (town === "") {
        alert("Please Enter Home Town")
        return;
    }
    if (task === "") {
        alert("Please Enter Purpose")
        return;
    }
    if (!selected) {
        alert("Please Select Category");
        return;
    }

    SaveToStorage({
        imgUrl, fullName, town, task, selected,
    });

    container.style.display = "none";
    form.reset();
    showCards
});

// createElement and show data
let stack = document.querySelector(".stack");
function showCards() {

    stack.innerHTML = "";
    let allData = JSON.parse(localStorage.getItem('data'));

    allData.forEach((data) => {
        console.log(data);

        // card container
        let card = document.createElement("div");
        card.classList.add("card");

        // image
        let img = document.createElement("img");
        img.classList.add("avatar");
        img.setAttribute("src", data.imgUrl);

        // name
        let h2 = document.createElement("h2");
        h2.textContent = data.fullName;

        // home town
        let homeInfo = document.createElement("div");
        homeInfo.classList.add("info");

        // spans
        let home = document.createElement("span");
        home.textContent = "Home Town";
        let town = document.createElement("span");
        town.textContent = data.town;

        // purpose
        let purpose = document.createElement("div");
        purpose.classList.add("info");

        // spans
        let head_note = document.createElement("span");
        head_note.textContent = "Purpose";
        let note = document.createElement("span");
        note.textContent = data.task;

        // buttons div
        let btnDiv = document.createElement("div");
        btnDiv.classList.add("buttons")

        // buttons -- button div
        let call = document.createElement("button");
        call.classList.add("call");
        call.innerHTML = `<i class="ri-phone-line"></i> Call`;
        let msg = document.createElement("button");
        msg.classList.add("msg");
        msg.innerHTML = `<i class="ri-chat-1-line"></i> Message`;

        // add to HTML
        stack.appendChild(card);
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(homeInfo);
        homeInfo.appendChild(home);
        homeInfo.appendChild(town);
        card.appendChild(purpose);
        purpose.appendChild(head_note);
        purpose.appendChild(note);
        card.appendChild(btnDiv);
        btnDiv.appendChild(call);
        btnDiv.appendChild(msg);

        console.log(stack);
    });

}

showCards();

// up down btn
let upbtn = document.querySelector("#upbtn");

upBtn.addEventListener("click",() => {
    let lastchild= stack.lastElementChild;

    if (lastchild){
        stack.append(lastchild,stack.firstElementChild);
    }
});

//down btn
let downBtn = document.querySelector("#downbtn");

downBtn.addEventListener("click", ()=> {
    let firstchild = stack.firstElementChild;

    if(firstchild){
        stack.append(firstchild, stack.firstElementChild);
    }
});