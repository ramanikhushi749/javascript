// //array-- hold multiple values at same timed
// //["mobile","laptop","tablet",5000,25,588]
// //["a","b","hello"]
// //[2,4,5,6]

// //create
// //variable_name =[values]
// let arr =[1,2,3,4];

// // acesss
// //position =[0 1 2 3]
// //access
// //array_name[position/index]
// arr[0]

// //modify
// // array_name[position] = new value
// arr[0] =10;
// arr[1] =20;
// arr[2] =30;
// arr[3] =40;

// //array methods
// //push ,pop,shift,unshift,splice,slice,reverse,sort
// //push --> enter new value into array -- place it into last 
// let a =[1,2,3,4,5];
// console.log(a)
// a.push(700);
// console.log(a)

// //use case

// let productpop=["leptop","mouses","cpu"];
// console.log(productpop);
// productpop.pop("keybord");
// console.log(productpop);

// //pop
// let b =[10,20,30,40];
// console.log(b)
// b.pop();
// console.log(b)

// //shift -- remove first value into array
// let c =[30,40,50,60];
// c.shift();
// //use case -- remove old product automatic after sometimes

// //unshift -- add value into array -- first
// let d =[52,35,65,85];
// d.unshift(20);

// //splice - rempve value into array -- specific position and specific position and specific number of values
// //into() - first index(position),how many value you want to remove
// let e =[50,60,30,40,10];
// e.splice(3,2);
// //e.splice(3,0,50,100)
// // use case -- select msg and remove multiple msg at on click

// //slice - copy values from array -- specific
// //position and specific number of values
// //new variable = array_name.slice(start index,end index)
// //start index -- include into copy
// // end index -- not include into copy
// let f=[100,50,25,0];
// //let new_f = f.slice(1,3);
// //use case -- copy specific data and save it into new variable
// //generate a report based on date and generate a file or save the file into your local machine

// //splice vs slice
// // splice -- remove values into main array or modify new array
// //slice -- copy value from main array and create a new array that hold the value that you can into 

// // reverse -- revers value of array
// let g = [25,30,35,40,85];
// //g.reverse();
// //use case -- show latest update first into your fronted 

// //sort -- set into ascending order
// let h = [50,20,80,10,40];
// h.sort();
// //let h = [11,62,3,4,25];
// //let sr = h.sort(function(a,b){
// //return a-b; // ascending order
// //})



// excersie

// Q1. push()
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
// Result: ['Wake up', 'Brush teeth', 'Buy milk']


// Q2. pop()
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
// Result: ['Email', 'Message']


// Q3. shift()
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
// Result: ['Customer2', 'Customer3']


// Q4. unshift()
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
// Result: ['Song A', 'Song B', 'Song C']


// Q5. splice()
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
// Result: ['Mike', 'John', 'Sara', 'Emma', 'Sophia']


// Q6. splice()
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
// Result: ['Burger', 'Salad']


// Q7. slice()
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);
// Result: ['Saturday', 'Sunday']


// Q8. reverse()
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
// Result: ['Hard', 'Medium', 'Easy']


// Q9. sort()
let scores1 = [45, 12, 78, 34, 89];
scores1.sort((a, b) => a - b);
// Result: [12, 34, 45, 78, 89]


// Q10. sort() with numbers
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
// Result: [49, 149, 199, 299, 999]


// Q11. slice() vs splice()
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
// Result: ['Laptop', 'Phone', 'Tablet']
// Original array unchanged


// Q12. splice() complex
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
// Result: ['Red', 'Green', 'Purple', 'Orange', 'Yellow']


// Q13. reverse() + push()
let steps1 = ['Step 1', 'Step 2', 'Step 3'];
steps1.reverse();
steps1.push('Final Step');
// Result: ['Step 3', 'Step 2', 'Step 1', 'Final Step']


// Q14. sort() strings
let names1 = ['alice', 'Bob', 'charlie', 'David'];
names1.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// Result: ['alice', 'Bob', 'charlie', 'David']


// Q15. Combination Question
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
// Result: ['Gladiator', 'Inception', 'Titanic']


// Q16. splice() return value
let nums1 = [1, 2, 3, 4];
let removed = nums1.splice(1, 2);
// removed: [2, 3]
// nums1: [1, 4]


// Q17. slice() immutability check
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
// result: [20, 30]
// Original array unchanged


// Q19. reverse() mutation
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
// letters: ['c', 'b', 'a']
// reversedLetters: ['c', 'b', 'a']


// Q21. splice() edge case
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
// Result: ['x', 'new', 'y', 'z']


// Q23. slice() negative index
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
// Result: [300, 400]


// Q24. splice() vs slice()
// a) Update original array: splice()
// b) Keep original array unchanged: slice()


// Q25. Chained methods
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
// Result: [2, 3, 1]



//for each loop
//for each -- array ni darek value mate loop chalse
let i = [10,35,40,68];

foreach((val) => {
    let new_val = val + 10;
    console.log (new_val);
});
[5,58,42,"hello"],foreach(val =>{
    let new_arr = val +2;
    console.log(new_arr)
});

// .map() Method;
//map tyare j use karvu ke jyare ek new array create karvo che
//first map create a black array -- only for understanding
let data = [10,20,50,40,15];
//same like a for each loop but map return a new array 
let temp_data = data.map((val) =>{
    if (val > 20) {
        return val;
    }
})
//use case -- data ma thi specific data new array ma store karvo hoy
//ex. product 

let marks = [10,5,20,25,15]
let final_marks = marks.map((val)=> {
    if (val == 5){
        return val +4;
     }
     return val;
})

// FILTER
// FILTER TYARE USE KARVU KE JYARE EK NEW ARRAY CREATE KARVO CHE WITH CONDITION 
// IF TRUE --> ADD INTO NEW ARRAY 
// IF ELSE(FALSE) --> NOT ADD INTO NEW ARRAY
let laptops_price = [15000,20000,30000,65000,99000,45000];

let expensive_laptops = laptops_price.filter((price )=>{

    if (price > 30000) return true;
});

//
//
let product_type = ["mobile","tablet","laptop","mouse","keyboard"];
let filter_product_type = product_type.filter((type)=>{

    if (type === "tablet" || type ==="mobile")return true;
});

//reduce
let total_price =[15,68,45,58,52,48];

let final_price = total_price.reduce((accumulator,val) =>{
    return accumulator + val;
    },0);//intial value of accumulator
// 0+10=>10
//10+68=>78
//78+45=>123
console.log("final price:",final_price)
//accumulator --> je value function ma return thase te accumulator ma store thase--> accumulator name change kari sako cho
//val -->array ni darek value

//find
//find tyare j use karvu ke jyare array mathi ek value find karvi hoy based on condition
//find() return kare che array no element -->
//callback no return value nahi
//never return what you return inside it 
// returns the array element itself -- not return array
//.find() stops at the first match
//it does not continue looping

let product =["laptop", "mobile","tablet","desktop","smart watch"];
let find_product = product.find((item)=> {
    console.log("can't find product"); 
    if(item == "tablet"){
        return true;
    }else if (item === "desktop"){
        return true;
    } else {
        return "not found";
    }
    });

    // find vs filter
    // real-life scenario: shopping mall  security
    //your are a seacurity guard at a shopping mall 
    // chack the list of visitors
    let people = ["john"]

    //find  -->you are looking for the 

    let person = people.find((name)=> name === "sara");
    console.log(person);

    //filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
    let allsara = people.filter((name)=> name === "sara");
    console.log(allsara);

    //some
    //check kare che ke array ma koi pan ek item condition satisfy kare che ke nahi
     
    let marks1 = [10,20,35,80];
    let any = marks1.some((val)=> {
        if (val > 85) return 12;
        //if (val<85)return "need improvment";
        });

   // destructuring oprator -- give value to variable (ex.we don't use..)
   let arr4 =[1,2,3,4,5]     

   let [, , k]= arr4;

   console.log(k);
   let user_data=["text","text@gmail.com","male","surat"]

   //spread
   let arr8 = [1,2,3,4,5,6,7];

   let arr9 = [...arr8];
   
// ================== JavaScript map() Examples ==================

// 1. Double daily steps count
// Real life: Fitness app doubling step goal
const steps = [1000, 2000, 3000];
const newSteps = steps.map(step => step * 2);
// Output: [2000, 4000, 6000]

// 2. Convert minutes to seconds
// Real life: Video duration calculation
const minutes = [1, 5, 10];
const seconds = minutes.map(min => min * 60);
// Output: [60, 300, 600]

// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
const prices1 = [200, 350, 500];
const finalPrices = prices1.map(price => price + 50);
// Output: [250, 400, 550]

// 4. Convert exam marks to grades
// Real life: Result system
const marks11 = [35, 72, 88, 40];
const grades = marks11.map(marks11 => marks11 >= 40 ? 'Pass' : 'Fail');
// Output: ['Fail', 'Pass', 'Pass', 'Pass']

// 5. Capitalize names
// Real life: Display usernames properly
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(
  name => name[0].toUpperCase() + name.slice(1)
);
// Output: ['Rahul', 'Neha', 'Amit']

// 6. Apply 10% discount
// Real life: Shopping sale
const prices2 = [500, 1000, 1500];
const discounted = prices2.map(price => price - price * 0.10);
// Output: [450, 900, 1350]

// 7. Add bonus points based on condition
// Real life: Game scoring system
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
// Output: [45, 70, 105]

// 8. Convert Celsius to Fahrenheit
// Real life: Weather app
const celsius = [0, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
// Output: [32, 68, 86]

// 9. Generate table of 2
// Real life: Math learning app
const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
// Output: [2, 4, 6, 8]

// 10. Format SMS messages
// Real life: SMS notification system
const balances = [500, 1200, 300];
const messages = balances.map(
  balance => `Your balance is ₹${balance}`
);
// Output:
// [
//   'Your balance is ₹500',
//   'Your balance is ₹1200',
//   'Your balance is ₹300'
// ]



