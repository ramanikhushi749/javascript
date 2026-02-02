// var, 
//  var (ES5)
//var a ="temp";
//var _123 = "Hello";
//var $123 = "Hello";
 
//var = "number"
//b = 24;// never use

//let (ES6)
let temp ="abc";

//cost
const temp_cost = "Hello world!!";

//declaration and initialization
var d; // declare
var temp_d = 12; // declare and initialize for first time
// var add value into window
// var is function scoped
// var can be redeclared and resigned
var name = "user name";
let name1 = "uese name";

// Ressignment, redeclartion
var temp1 =12;
//temp1 = "number"; // reassignment
//var temp1 = "text"; // redeclaration
// let temp_a = 24;
// var temp_a =34; // you can't redeclar let variable
const temp_b ="name"
//temp_b = "username"// you can't reassign const variable

//scope (global,block,functional)
var e = 23;//global scope
console.log("Global Scope" + e);
{
    var e=25;// block scope
    console.log("block Scope" +e);
}
function abc(){
    var e =30;//functional scope
    console.log("functional scope" +e);
}
abc();
console.log("Outside" +e);

let f =23;//global scope
console.log("global scope let variable" +f);
{
    let f =25;//block scope
    console.log("block scope" +f);
}
function abc(){
    var f =30;//functional scope
    console.log("functional scope" +f);
}
abc();
console.log("Outside" +f);

//temporal  dead zone (tdz)
console.log(h);
var h =24;

//console.log(g);
//console.log(j);
let j =12;
//hoisting impact
//hoisting --->when your create a variable into js that break into two part first is declare part that go to up and there initialization part that go down
var temp_d=12;
//var temp_d; --> undefined; --> that go to 
// temp_d = 12; ---> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined;
let temp_d_let =24;
// let variable not use before initialization
// if you use console.log before initialization that give you erroe;
//hoisting impact on var,let,const
/*
var--> hoist -->undefined
let --> hoist --> error
const --> hoist-->error
*/

//console.log(nm);
//let nm = "name";
//
//console.log(b);
//var b = "username";
//
// var x = 1;
// {
// var x= 2;

// }
// console.log(x);

//
// let a = 10;
// {

//     let a = 20;

//     console.log("Inside:", a);
//     }
// console.log("Outside:", a);

// //
const person = {name: "demo"};
//on console.log
person.name= "user"; 
person = {} ; 3 