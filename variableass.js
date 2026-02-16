// ===============================
// Assume some values
// ===============================

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;


// 1️⃣ Compare a == "a" and a === "a"
console.log(a == "a");   // true  → value check only
console.log(a === "a");  // true  → value + type check


// 2️⃣ Compare b == c and b === c
console.log(b == c);    
// true → because "10" (string) is converted to 10 (number)

console.log(b === c);   
// false → because types are different (string !== number)


// 3️⃣ Convert b so that b === c becomes true
b = Number(b);   // convert string to number
console.log(b === c);   // true


// 4️⃣ Check whether d is undefined without using typeof
console.log(d === undefined);   // true


// 5️⃣ Safely check both d and e
if (d == null && e == null) {
  console.log("Both are null or undefined");
}
// == null checks both null and undefined safely


// 6️⃣ Prove null == undefined but null !== undefined
console.log(null == undefined);   // true
console.log(null !== undefined);  // true (strict check different types)


// 7️⃣ Show type coercion using c + b and fix it
b = "10";
console.log(c + b);     // "1010" → number + string = string (coercion)

console.log(c + Number(b));  // 20 → fixed


// 8️⃣ Check if c is NaN after doing c / "a"
let result = c / "a";
console.log(result);           // NaN
console.log(isNaN(result));    // true


// 9️⃣ Convert b to number using two approaches
b = "50";

let num1 = Number(b);   // Method 1
let num2 = +b;          // Method 2 (unary plus)

console.log(num1, num2);


// 🔟 Convert c to string using two approaches
c = 100;

let str1 = String(c);     // Method 1
let str2 = c.toString();  // Method 2

console.log(str1, str2);


// 1️⃣1️⃣ Turn any value into boolean
let value = "Hello";

let bool1 = Boolean(value);  // Method 1
let bool2 = !!value;         // Method 2 (double NOT)

console.log(bool1, bool2);


// 1️⃣2️⃣ Const reassignment fails
const num = 5;
// num = 10;  ❌ Error: Assignment to constant variable

// Because const cannot be reassigned


// 1️⃣3️⃣ Copy primitive value (no reference issue)
let x = 20;
let y = x;   // copy

y = 50;

console.log(x);  // 20 (original not changed)
console.log(y);  // 50


// 1️⃣4️⃣ Comparison that looks true but returns false
console.log(0 == false);  // true (coercion)
console.log(0 === false); // false (different types)


// 1️⃣5️⃣ Fix buggy comparison caused by implicit conversion

let input = "5";

// ❌ Buggy
if (input == 5) {
  console.log("Equal (but risky)");
}

// ✅ Fixed
if (Number(input) === 5) {
  console.log("Equal and safe");
}