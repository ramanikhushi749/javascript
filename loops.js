// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for loop ? when you know how many times you want to repeat a block of code.
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kya thi javanu chhe --> kya sudhi jvanu chhe --> kevi rite jvanu chhe
// for (ex. 1 -> 50 -> increment by 1)
// (start; end; change)

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let j = 9; j >= 1; j--) {
//     console.log(j);
// }

// "hello"                    
// for(let i = 0; i<5; i++) {
//     console.log("hello");
// }


// while loop -- do while loop
// kya thi jvanu chhe --> kya rokvanu chhe --> kevi rite jvanu chhe
// while (ex.1 -> hello world -> stop when condition false)
// start
// while (end) {
//  code
//  change
// }

// let k = 5;
// while (k <=20 ) {
//     console.log("k with while loop : ", k);
//     k++;
// }

// make it true loops
// let k = 50
// while (k >= 20) {
//     console.log(k);
//     k--;
// }

// let a = 60;
// while (a >= 20) {
//     console.log(a);
//     a--;
// }

// let c = 30;
// while (c > 20) {
//     console.log(c);
//     c--;
// }

// let d = 1;
// while (d <= 20) {
//     console.log("Hello");
//     d++;
// }

// let f = 50;
// while (f <= 60) {
//     console.log(f);
//     f++;
// }

// let q = 50;
// while (q <= 60) {
//     console.log(q);
//     ++q;
// }


// do while loop
// do {} while (end);
// start
// do {
// code
// change
// }
// while(condition);

// let j = 12; //start
// do {
//     console.log("do while loop : ", j); //code
//     j++; //change (condition);
// } while(j<20);

// let z = 15; //start
// do {
//     console.log("do while loop error : ", z); //code
//     z++; //change (condition);
// } while(z<10);
// why : it execute code first, then check condition


// break
// for (let k = 1; k <= 201; k++) {
//     console.log("loop with break 1 : ", k);
//     if(k === 24) {
//         break;
//     }
// }

// for (let k = 12; k <=201; k++) {
//     console.log("loop with break 2 : ", k);
//     if(k <= 24) {
//         break;
//     }
// }

// for (let k = 1; k <=201; k++) {
//     console.log("loop with break 3 : ", k);
//     if(k >= 24) {
//         break;
//     }
// }

// for (let k = 1; k <=10; k++) {
//     console.log("loop with break 4 : ", k);
//     if(k == 5) {
//         break;
//     }
// }


// continue
// for (let a = 1; a <= 10; a++) {
//     if(a === 5) {
//         continue;
//     }
//     console.log("a === 5) : ", a);
// }

// for (let b = 1; b <= 10; b++) {
//     if(b <= 5) {
//         continue;
//     }
//     console.log("b <= 5 : ", b);
// }

// for (let c = 1; c <= 10; c++) {
//     if(c >= 5) {
//         continue;
//     }
//     console.log("c >= 5 : ", c);
// }

// exercises
// example 1:
// Print number from 1 to 10 using a for loop.
// for(let a=1; a<=10; a++) {
//     console.log(a);
// }

// example 2:
// Print number from 10 to 1 using while loop.
// let b = 10;
// while(b>=1) {
//     console.log(b);
//     b--;
// }

// example 3:
// Print even numbers from 1 to 20 using for loop.
// for(let i=1; i<=20; i++){
//     if(i%2 ===0){
//     console.log(i);
//     }
// }

// example 4:
// Print odd numbers from 1 to 15 using while loop.
// let i= 1;
// while(i<=15){
//     if(i%2 !==0){ // or (i%2 ===1)
//     console.log(i);
//     }
//     i++;
// }

// example 5:
// Print the multiplication table of 5.
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// example 6:
// Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i=1; i<=100; i++){
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);

// Example 7:
// Print all numbers between 1 to 50 that are divisible by 3.
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

// Example 8:
// Ask the user for a number and print whether each number from 1 to that number is even or odd.
// let num = prompt("give a number");
// for(let i=1; i <=num; i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }

// Example 9:
// Count how many numbers between 1 to 100 are divisible by 3 or 5.
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }

// (Break and Continue)
// Example 10:
// Stop at First Multiple of 7
// Write a Loop from 1 to 100 that:
// Prints Each number
// Stop Completely when it finds the first number divisible by 7
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7===0){
//         break;
//     }
// }

// (Break and Continue)
// Example 11:
// Skip Multiples of 3
// Write a Loop From 1 to 20 that:
// Skip number divisible by 3
// Prints all other numbers
// for(let i=1; i<=20; i++){
//     if(i%3 === 0){
//         continue;
//     }
//     console.log(i);
// }

// (Break and Continue)
// Example 12:
// Print First 5 Odd Numbers
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
// Then stops the loop
// Use Both if, continue and a counter + break
// count = 0;
// for(i=1; i<=100; i++) {
//     if(i%2==1) {
//         console.log(i);
//         count++;
//     }
//     if(count == 5) {
//         break;
//     }
// }