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
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
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
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
// Result: ['Step 3', 'Step 2', 'Step 1', 'Final Step']


// Q14. sort() strings
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
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

