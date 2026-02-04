// // function
// // what --> function is a block of code that performs a specific task.
// // why --> to avoid code repetition and to make code modular and reusable.
// // how --> function keyword, name, parameters, body, return, statement

// // type of functions :
// // funciton name(params) {} --> function declaration 
// function abc() {}

// // let fnc = function () {} --> function expression
// let fnc = function () {}

// // let fnc1 = () => {} --> arrow function --> fat arrow function
// let fnc1 = () => {};

// function temp_cart() {
//     console.log("adding product");
// }
// temp_cart();
// temp_cart();
// temp_cart();

// // parameters vs arguments
// // parameters are the name listed in the funciton definition (params --> () ni andr lakheli values)
// // arguments are the real values passed to the function (args --> function call farti () ni andr lakheli (pass) kreli values)

// // funciton name(params)
// //ex.1
// function cartBtn(product) { //product -- params
//     console.log("adding", product, "to cart");
// }
// cartBtn("Dell Laptop"); // Dell Laptop -- args
// cartBtn("Apple 16");
// cartBtn("PS5");

// function cartBtn_price(product, price) {
//     console.log("adding", product, "to cart with", price);
// }
// cartBtn_price("Dell Laptop", 50000); 
// cartBtn_price("Apple 16", 56000);
// cartBtn_price("PS5", 60000);

// //ex.2
// function payment(platform) {
//     console.log(platform + " is a payment platform.");
// }
// payment("google pay");
// payment("phone pe");
// payment("paytm");

// function paymentUser(platform, users) {
//     console.log(
//         platform + " is a payment platform with " + users + " users."
//     );
// }
// paymentUser("google pay", "600+ million");
// paymentUser("phone pee", "508+ million");
// paymentUser("paytm", "333+ million");

// // convert into function expression
// // let fnc = function () {}
// let fnc_cartBtn = function (product) {
//     console.log("adding", product, "to cart");
// }
// fnc_cartBtn("Dell Laptop");
// fnc_cartBtn("Apple 16");
// fnc_cartBtn("PS5");

// // let fnc1 = () => {}
// let fnc_arrow_cartBtn = (product) => {
//     console.log("adding", product, "to cart");
// }
// fnc_arrow_cartBtn("Dell Laptop");
// fnc_arrow_cartBtn("Apple 16");
// fnc_arrow_cartBtn("PS5");


// //rest

// function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10){
//     console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
// }
// abcd(1,2,3,4,5,6,7,8,9,10);

// function abcd1(...numbers){
//     console.log(numbers);
//     }
//     abcd1(1,2,3,4,5,6,7,8,9,10);

//     function abcd2(v1,v2,...numbers){
//         console.log(v1,v2, numbers);
// }
// abcd2(1,2,3,4,5,6,7,8,9,10);

// //return


// function getvalue1(value){
//     if (value<25)return "value is less than 25";
//     else if (value <50) return "value is less than 50";
//     else if (value <75) return "value is less than  75";
//     return "value is 100 or more";
//     }
//     let result = getvalue1(80);
//     console.log(result);

//     //first class function:
//     let buyNow1 = function (product,price){
//         console.log(product,price)
//     }
//     buyNow1("S24 FE",50500);

//     //convert into arrow function
//     // function can be passed as arguments to other functions
// // let fnc = function(){}
// function abc1(v1,v2){
//     console.log(v2);
//     return v1();
// }  
// abc1(function(){
//     console.log("first class function")
// }, "hello")

// function abc2(v1,v2){
//     return v1();
//     console.log(v2);
// }
// abc2(function(){
//     console.log("first class function")
// }, "hello")

//    //function can be returned from other function
// function abc(){
//     return function(){
//         console.log("function within function")
//     }
// }
// abc()();

// function abc2(){
//     return() => {
//         console.log("arrow function within function")

//     }
// }
// abc2()();

// //higher order function (hof)
// //function that takes another funcxtion as an arguments or returns a 
// //function as a result(eva function je return kare ek function athva acpet kare ek function params ma)

// //function abcd(val){val();}
// //-->abcd(function(){console.log("hello")})
// //function abcd(val){}--> higher order function

// //function abcd(){return function(){} } abcd()()-->higher order


// //pure vs impure function
// //pure function --> function je same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
 
// let a = 20;
// function change_a(){
//     return "a not change(pure function)"+a;

// }//---pure function

// console.log(change_a());
// //impure function --> function je same input par different output aapse athva bahar na state ne modify kare (impure function -->je function bahar na state modify kare)
// function change_a1(){
//     a+= 2;
//     return "a change (impure function)" + a;
// }
// console.log(change_a1())

// //closure function 
// // function je potana parent function na variable ne access kari  shake (return thava valo function use karshe parent function na koi variable)(function within function)
// function outer(){
//     let outer_var = "outer function variable";
//     function inner(){
//         console.log(outer_var);

//     }
//     inner();

// }
// outer();

// //lexical scope...

// function outer1(){
//     let outer_var = "outer function variable";
//     function inner1(){
//         console.log(outer_var);
//         let inner_var = " inner function variable";
//         function most_inner (){
//             console.log(outer_var);
//             console.log(inner_var);

//         }
//         most_inner();
//     }
// inner1();
// }
// outer1();

// //IIFE - immediately
// (function(){})();
// (function (){
//     console.log("IIFE ececuted");
//     })();

//     temp_fnc();

//     function temp_fnc(){
//         console.log("hoisting in function")
//     };
//     temparrow_fnc();
//     const temparrow_fnc = () => {
//         console.log("hoisting in function");
//     };


// ______________________________________________________________________________?


/***********************************
 Example 1:
 Difference between Function Declaration
 and Function Expression (Hoisting)
************************************/

/*
Function Declaration:
- Fully hoisted
- Can be called before definition

Function Expression:
- Not hoisted
- Cannot be called before definition
*/


/***********************************
 Example 2:
************************************/

greet(); // ✅ Works because function declaration is hoisted

function greet() {
    console.log("Hello!");
}

// Ans: Hello!
// Why: Function declaration is hoisted


/***********************************
 Example 3:
 Convert normal function to Arrow
************************************/

// Normal function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // 8

// How: function keyword removed, => used


/***********************************
 Example 4:
 Parameters vs Arguments
************************************/

function welcome(name) { // name → parameter
    console.log("Welcome " + name);
}

welcome("user"); // "user" → argument

// Why:
// Parameter → variable in function definition
// Argument → actual value passed while calling function


/***********************************
 Example 5:
************************************/

function temp(a, b, c) {
    console.log(a, b, c);
}

temp(1, 2);

// Ans: 1 2 undefined
// Why:
// Parameters = 3 (a,b,c)
// Arguments = 2 (1,2)
// Missing parameter becomes undefined


/***********************************
 Example 6:
 Default Parameter
************************************/

function temp_user(name = "Guest") {
    console.log("Hello " + name);
}

temp_user();

// Ans: Hello Guest
// Why: Default value is used when no argument is passed


/***********************************
 Example 7:
 Rest Operator (...)
************************************/

function number(...numbers) {
    console.log(numbers);
}

number(1, 2, 3, 4, 5);

// Ans: [1, 2, 3, 4, 5]
// Why:
// ... operator collects multiple arguments into an array
// Used when number of arguments is unknown


/***********************************
 Example 8:
 Rest Parameters + Total
************************************/

// ❌ Wrong loop (error because <= length)
function calculateTotalWrong(...scores) {
    let total = 0;
    for (let i = 0; i <= scores.length; i++) {
        total += scores[i]; // last value undefined
    }
    return total;
}

// ✅ Correct version using forEach
function calculateTotal(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    });
    return total;
}

let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);

// Ans: 150
// Why: forEach safely iterates over array values


/***********************************
 Example 9:
 Early Return
************************************/

function checkAge(age) {
    if (age < 18) {
        return "Too Young"; // early return
    }
    return "Access Granted";
}

console.log(checkAge(16));
console.log(checkAge(22));

// How:
// Early return stops function execution immediately


/***********************************
 Example 10:
 Return Value
************************************/

function f() {
    return;
}

console.log(f());

// Ans: undefined
// Why:
// return without value returns undefined

/***********************************
 Example 11:
 Functions are first-class citizens
************************************/

/*
Meaning:
Functions in JavaScript can be:
1. Stored in variables
2. Passed as arguments
3. Returned from other functions
*/


/***********************************
 Example 12:
 Assign function to variable
************************************/

let a = function () {
    console.log("Hello");
};

a(); // Output: Hello

// Yes, functions can be stored inside variables


/***********************************
 Example 13:
 Pass function into another function
************************************/

function abcd(val) {
    val();
}

abcd(function () {
    console.log("Hello");
});

// Why:
// Functions can be passed as arguments
// This is called callback function


/***********************************
 Example 14:
 Higher Order Function
************************************/

/*
Definition:
A function that:
1. Accepts another function as argument OR
2. Returns another function
*/

function higher(fn) {
    fn();
}

higher(() => console.log("Higher Order Function Example"));


/***********************************
 Example 16:
 Pure or Impure Function
************************************/

let total = 5;

function num(num) {
    total += num;
}

num(3);
console.log(total);

// Ans: Impure Function
// Why:
// Function modifies external variable "total"


/***********************************
 Example 17:
 Convert into Pure Function
************************************/

function pureNum(total, num) {
    return total + num;
}

console.log(pureNum(5, 3));

// Pure Function:
// Same input → Same output
// No external variable modified


/***********************************
 Example 18:
 Closure
************************************/

/*
Definition:
Closure is when inner function remembers
outer function variables even after
outer function execution ends.
*/

function outerClosure() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const closureExample = outerClosure();
closureExample();


/***********************************
 Example 19:
************************************/

function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter(); // 1
counter(); // 2

// Why:
// Closure remembers "count" variable


/***********************************
 Example 20:
 Convert into IIFE
************************************/

(function () {
    console.log("Initialized");
})();

// IIFE = Immediately Invoked Function Expression
// Runs immediately after creation


/***********************************
 Example 21:
 Use of IIFE (Private Variables)
************************************/

let fun = (function () {
    let score = 0; // private variable

    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        }
    };
})();

fun.getScore(); // 0
fun.setScore(50);
fun.getScore(); // 50

// Real world use:
// Data privacy / Encapsulation


/***********************************
 Example 22:
************************************/

// temp_var(); ❌ Uncomment to see error

var temp_var = function () {
    console.log("Hello");
};

/*
Ans: Error
Why:
Variable is hoisted but function expression is NOT initialized yet.
temp_var becomes undefined initially.
*/


/***********************************
 Example 23:
************************************/

temp_var2(); // ✅ Works

function temp_var2() {
    console.log("Hello");
}

/*
Ans: Hello
Why:
Function declaration is fully hoisted
*/
