// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keyword, name, parameters, body, return, statement

// type of functions :
// funciton name(params) {} --> function declaration 
function abc() {}

// let fnc = function () {} --> function expression
let fnc = function () {}

// let fnc1 = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {};

function temp_cart() {
    console.log("adding product");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the name listed in the funciton definition (params --> () ni andr lakheli values)
// arguments are the real values passed to the function (args --> function call farti () ni andr lakheli (pass) kreli values)

// funciton name(params)
//ex.1
function cartBtn(product) { //product -- params
    console.log("adding", product, "to cart");
}
cartBtn("Dell Laptop"); // Dell Laptop -- args
cartBtn("Apple 16");
cartBtn("PS5");

function cartBtn_price(product, price) {
    console.log("adding", product, "to cart with", price);
}
cartBtn_price("Dell Laptop", 50000); 
cartBtn_price("Apple 16", 56000);
cartBtn_price("PS5", 60000);

//ex.2
function payment(platform) {
    console.log(platform + " is a payment platform.");
}
payment("google pay");
payment("phone pe");
payment("paytm");

function paymentUser(platform, users) {
    console.log(
        platform + " is a payment platform with " + users + " users."
    );
}
paymentUser("google pay", "600+ million");
paymentUser("phone pee", "508+ million");
paymentUser("paytm", "333+ million");

// convert into function expression
// let fnc = function () {}
let fnc_cartBtn = function (product) {
    console.log("adding", product, "to cart");
}
fnc_cartBtn("Dell Laptop");
fnc_cartBtn("Apple 16");
fnc_cartBtn("PS5");

// let fnc1 = () => {}
let fnc_arrow_cartBtn = (product) => {
    console.log("adding", product, "to cart");
}
fnc_arrow_cartBtn("Dell Laptop");
fnc_arrow_cartBtn("Apple 16");
fnc_arrow_cartBtn("PS5");


//rest

function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){
    console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
}
abcd(1,2,3,4,5,6,7,8,9,10);

function abcd1(...numbers){
    console.log(numbers);
    }
    abcd1(1,2,3,4,5,6,7,8,9,10);

    function abcd2(v1,v2,...numbers){
        console.log(v1,v2, numbers);
}
abcd2(1,2,3,4,5,6,7,8,9,10);

//return


function getvalue1(value){
    if (value<25)return "value is less than 25";
    else if (value <50) return "value is less than 50";
    else if (value <75) return "value is less than  75";
    return "value is 100 or more";
    }
    let result = getvalue1(80);
    console.log(result);