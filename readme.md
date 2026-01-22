<h1>Example or Excercise:</h1>

<div>

<h3>Example 1 :</h3>

<p>console.log(nm);</p>

<p>let nm = "name";</p>

<p>Answer or Error: Error </p>

<p>Why :Uncaught ReferenceError: Cannot access 'nm' before initialization </p>

</div>

 

<div>

<h3>Example 2 :</h3>

<p>console.log(b);</p>-

<p>var b = "username";</p>

<p>Answer or Error: undefined</p>

<p>Why :undefined </p>

</div>

 

<div>

<h3>Example 3 :</h3>

<p>var x = 1;</p>

<p>{

    var x= 2;

}

</p>

<p>console.log(x);</p>

<p>Answer or Error:2 </p>

<p>Why : - </p>

</div>

 

<div>

<h3>Example 4 :</h3>

<p>let a = 10; </p>

<p>{

    let a = 20;

    console.log("Inside:", a);

}</p>

<p>

console.log("Outside:", a);

</p>

<p>Answer or Error: Inside: 20 Outside: 10</p>

<p>Why :- </p>

</div>

 

<div>

<h3>Example 5 :</h3>

<p>const person = {name: "demo"}; </p>

on console.log

<p>person.name= "user"; ✅</p>

<p>person = {} ; ❌ </p>

<p>Answer or Error:error</p>

<p>Why : Uncaught TypeError: Assignment to constant variable.
    at variable.js:111:8</p>

</div>

 

---

# 📘 JavaScript Notes

---

## 📗 JavaScript Lecture – 1

### Variables, Scope & Hoisting

---

## 1. Variable Declarations in JavaScript

JavaScript provides **three ways** to declare variables:

| Keyword | Version | Scope    | Redeclare | Reassign |
| ------- | ------- | -------- | --------- | -------- |
| `var`   | ES5     | Function | ✅         | ✅        |
| `let`   | ES6     | Block    | ❌         | ✅        |
| `const` | ES6     | Block    | ❌         | ❌        |

---

### 🔹 var

* Added to the global `window` object
* Function scoped
* Can be redeclared and reassigned

---

### 🔹 let

* Block scoped
* Cannot be redeclared
* Can be reassigned

---

### 🔹 const

* Block scoped
* Cannot be redeclared
* Cannot be reassigned

> ⚠️ **Note:** Object properties can be modified, but the variable itself cannot be reassigned.

---

## 2. Declaration & Initialization

```js
var d;      // Declaration
var d = 12; // Declaration + Initialization
```

---

## 3. Reassignment vs Redeclaration

* **Reassignment** → Changing an existing value
* **Redeclaration** → Declaring the same variable again

---

## 4. Scope Rules

### var Scope

```js
var // Does NOT follow block scope
```

### let Scope

```js
let // Follows block scope
```

---

## 5. Temporal Dead Zone (TDZ)

| Keyword        | Behavior                             |
| -------------- | ------------------------------------ |
| `var`          | No error                             |
| `let`, `const` | Error if accessed before declaration |

---

## 6. Hoisting

| Keyword        | Hoisting Result       |
| -------------- | --------------------- |
| `var`          | Hoisted → `undefined` |
| `let`, `const` | Hoisted → TDZ Error   |

---

## 🧪 Lecture–1 Examples

### Example 1

```js
console.log(nm);
let nm = "name";
```

❌ **Error:** `ReferenceError`
**Reason:** `let` is in the Temporal Dead Zone.

---

### Example 2

```js
console.log(b);
var b = "username";
```

✅ **Output:** `undefined`
**Reason:** `var` is hoisted with default value `undefined`.

---

### Example 3

```js
var x = 1;
{
  var x = 2;
}
console.log(x);
```

✅ **Output:** `2`
**Reason:** `var` ignores block scope.

---

### Example 4

```js
let az = 10;
{
  let az = 20;
  console.log("Inside:", az);
}
console.log("Outside:", az);
```

✅ **Output:**
`Inside: 20`
`Outside: 10`

**Reason:** `let` follows block scope.

---

### Example 5

```js
const person = { name: "demo" };

person.name = "user"; // ✅ allowed
person = {};          // ❌ error
```

❌ **Error:** `TypeError`
**Reason:** `const` variables cannot be reassigned.

---

## 📘 JavaScript Lecture – 2

### Data Types, Coercion & Truthy/Falsy

---

## 1. Data Types in JavaScript

JavaScript has **two categories of data types**:

---

### 1.1 Primitive Data Types

📌 **Copy by value**

```js
let a = 25;
let b = a;
```

**Types:**

* String
* Number
* Boolean
* Null
* Undefined
* Symbol
* BigInt

---

### 1.2 Non-Primitive (Reference) Data Types

📌 **Copy by reference**

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
```

**Types:**

* Array `[]`
* Object `{}`
* Function `()`

---

## 2. Primitive Type Examples

### String

```js
let name = "name";
name = "username";
name = `firstname`;
```

### Number

```js
let num = 12;
num = 12.25;
num = -25;
```

### Boolean

```js
let isActive = true;
isActive = false;
```

### Null

```js
let data = null;
```

### Undefined

```js
let value;
```

### Symbol

```js
let u1 = Symbol("uid");
let u2 = Symbol("uid");

u1 === u2 // false
```

### BigInt

```js
Number.MAX_SAFE_INTEGER

let num1 = 9007199254740991;
let num2 = 9007199254740991n;
```

---

## 3. Non-Primitive Examples

### Array

```js
let users = ["user1", "user2", "user3"];
```

### Object

```js
let user = { name: "test", age: 9 };
```

### Array of Objects

```js
let profiles = [
  { name: "test1", age: 10 },
  { name: "test2", age: 15 }
];
```

---

## 4. Dynamic Typing

JavaScript allows variables to change data types.

```js
let user = "name";
user = 123;
user = {};
```

👉 **TypeScript** helps prevent this.

---

## 5. typeof Operator & Quirks

```js
typeof NaN   // number
typeof null  // object
```

```js
"hello" - 5 // NaN
```

---

## 6. Type Coercion

```js
"5" + 1 // "51"
"5" - 1 // 4
```

---

## 7. Truthy & Falsy Values

### ❌ Falsy Values

`0`, `false`, `""`, `null`, `undefined`, `NaN`, `document.all`

```js
!!0   // false
!!-1  // true
```

✔️ Everything else is **truthy**.

---

## 🧪 Lecture–2 Examples

```js
true + false    // 1
null + 1        // 1
"12" + 12       // "1212"
!!undefined     // false
"12" - 1        // 11
```

---

# 📘 JavaScript Lecture – 3

### Operators · Comparison · Logical · Assignment · Unary · Ternary

---

## 1. Operators in JavaScript

JavaScript operators can be grouped as:

1. **Arithmetic**
2. **Comparison**
3. **Assignment**
4. **Logical**
5. **Unary**
6. **Ternary**

---

## 2. Arithmetic Operators

| Operator | Description                   | Example                                                           |
| -------- | ----------------------------- | ----------------------------------------------------------------- |
| `+`      | Addition / Concatenation      | `1 + 2` → 3, `"user" + "name"` → `"username"`, `5 + "5"` → `"55"` |
| `-`      | Subtraction                   | `2 - 1` → 1                                                       |
| `*`      | Multiplication                | `25 * 2` → 50                                                     |
| `/`      | Division                      | `240 / 2` → 120                                                   |
| `%`      | Modulus / Sheshfal / Reminder | `12 % 4` → 0, `9 % 2` → 1                                         |
| `**`     | Exponentiation / Square       | `2 ** 3` → 8                                                      |

---

## 3. Comparison Operators

Return **true / false**

| Operator | Example       | Explanation                 |
| -------- | ------------- | --------------------------- |
| `==`     | `12 == "12"`  | Value check, type ignored   |
| `===`    | `12 === "12"` | Value + Type check (strict) |
| `!=`     | `12 != 13`    | Not equal, value only       |
| `!==`    | `12 !== "12"` | Not equal, strict           |
| `>`      | `12 > 9`      | Greater than                |
| `<`      | `12 < 113`    | Less than                   |
| `>=`     | `22 >= 22`    | Greater than or equal       |
| `<=`     | `13 <= 13`    | Less than or equal          |

---

## 4. Assignment Operators

| Operator | Example       | Explanation       |
| -------- | ------------- | ----------------- |
| `=`      | `let a = 12;` | Value assignment  |
| `+=`     | `a += 3;`     | Add & assign      |
| `-=`     | `a -= 4;`     | Subtract & assign |
| `*=`     | `a *= 2;`     | Multiply & assign |
| `/=`     | `a /= 2;`     | Divide & assign   |
| `%=`     | `a %= 2;`     | Modulus & assign  |

---

## 5. Logical Operators

| Operator | Example          | Result |        |   |       |      |
| -------- | ---------------- | ------ | ------ | - | ----- | ---- |
| `&&`     | `12<14 && 14<15` | true   |        |   |       |      |
| `&&`     | `12<10 && 14<15` | false  |        |   |       |      |
| `        |                  | `      | `false |   | true` | true |
| `!`      | `!true`          | false  |        |   |       |      |
| `!!`     | `!!12`           | true   |        |   |       |      |

> **Note:** Logical operators are used in conditions & loops.

---

## 6. Unary Operators

| Operator | Example                  | Explanation              |
| -------- | ------------------------ | ------------------------ |
| `+`      | `+"5"` → 5               | Convert string to number |
| `-`      | `-5`                     | Negation                 |
| `!`      | `!12` → false            | Negation                 |
| `typeof` | `typeof "name"` → string | Type of primitive        |
| `++`     | `abc++ / ++abc`          | Increment (post / pre)   |
| `--`     | `abcc-- / --abcc`        | Decrement (post / pre)   |

**Examples:**

```js
let a = 5;
+"5" + 5 // 10
"5" + 5  // "55"

let b = 12;
b++       // 12 (post)
++b       // 13 (pre)
```

---

## 7. Ternary Operator

```js
condition ? exprIfTrue : exprIfFalse
```

**Example:**

```js
let a = 12 > 13 ? console.log("true") : console.log("false"); 
// Output → "false"
```

> Conditional shorthand for `if-else`.

---

Perfect 😎, main ye **type-checking notes** ko Lecture–3 README me **professional section** ke roop me add kar dunga, jisse **GitHub-ready aur clean** lage, aur jo guj-english style hai, wo preserve rahe.

Yeh raha updated **Lecture–3 README** ka Type Checking section:

---

## 8. Type Checking Notes

> JavaScript me **primitive** aur **reference** data types check karna thoda tricky ho sakta hai.

| Concept      | Usage                                                      |
| ------------ | ---------------------------------------------------------- |
| `typeof`     | Use for **primitive data types** only                      |
| `instanceof` | Use for **reference data types** (Array, Object, Function) |

**Examples:**

```js
typeof null         // object
typeof []           // object
let a = [];         // a instanceof Array --> true
a instanceof Array  // true
instanceof          // check type of reference datatype // don't use typeof for reference datatype
typeof NaN          // number
typeof              // premitive datatype mate use krvo
instanceof          // reference data type mate use krvo
```

> ⚠️ Tips:
>
> * `instanceof` → check **reference data type**
> * `typeof` → premitive datatype mate use krvo

---

# 🧪 JavaScript Lecture–3 Exercises

### Operators · Logical · Unary · Ternary

---

### Example 1 – Logical AND `&&`

```js
let x = 10;
let y = 20;
if(x>5 && y>5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}
```

**Output:**

```
Both are greater than 5
```

**Why:**
`true && true` → `true`, both conditions satisfied.

---

### Example 2 – Logical OR `||`

```js
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Access granted");
}else{
    console.log("Access Denied");
}
```

**Output:**

```
Access granted
```

**Why:**
`true || false` → `true`, at least one condition satisfied.

---

### Example 3 – Logical NOT `!`

```js
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}
```

**Output:**

```
Pleasant day
```

**Why:**
`temp > 30` → `true`, but `!` reverses it → `false`.

---

### Example 4 – Truthy / Falsy

```js
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}
```

**Output:**

```
Falsy value
```

**Why:**
`0` is a falsy value.

---

### Example 5 – Ternary Operator

```js
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);
```

**Output:**

```
Grade: C
```

**Why:**
Ternary operator returns first true value. Score 78 ≥ 70 → Grade = `"C"`.

---

### Example 6 – Nested Ternary

```js
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
```

**Output:**

```
Status: Gold
```

**Why:**
120 ≥ 100 → first condition true → `"Gold"`.

---

### Example 7 – Logical AND in Ternary

```js
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
```

**Output:**

```
access: Deny
```

**Why:**
`loggedIn && hasToken` → `true && false` → `false`, so `"Deny"`.

---

### Example 8 – Unary Post Increment `a++`

```js
let a = 5;
a++;
console.log(a);
```

**Output:**

```
6
```

**Why:**
`a++` increments after returning value → `a` becomes 6.

---

### Example 9 – Unary Pre Increment `++a`

```js
let a = 8;
++a;
console.log(a);
```

**Output:**

```
9
```

**Why:**
`++a` increments before returning value → `a` becomes 9.

---

### Example 10 – Post Increment Assignment

```js
let b = 4;
let c = b++;
console.log(b, c);
```

**Output:**

```
5 4
```

**Why:**
`b++` returns 4 first, then increments `b` to 5.

---

### Example 11 – Pre Increment Assignment

```js
let b = 4;
let c = ++b;
console.log(b, c);
```

**Output:**

```
5 5
```

**Why:**
`++b` increments first → both `b` and `c` = 5.

---

### Example 12 – Post Decrement `m--`

```js
let m = 10; 
console.log(m--);
console.log(m);
```

**Output:**

```
10
9
```

**Why:**
`m--` prints 10 first, then decreases `m` to 9.

---

### Example 13 – Mixed Increment

```js
let n = 5;
let result = n++ + ++n;
console.log(result);
```

**Output:**

```
12
```

**Why:**
`n++` → 5 (n=6), `++n` → 6+1=7, 5+7=12

---

### Example 14 – Function with Increment

```js
let likes = 100;
function likePost() {
    return ++likes;
}
console.log(likePost());
console.log(likes);
```

**Output:**

```
101
101
```

**Why:**
`++likes` increments global variable first → both outputs 101.

---

### Example 15 – Post Decrement in Condition

```js
let count = 5;
if(count-- === 5){   
    console.log("Matched");
}else{
    console.log("Not Matched"); 
}
```

**Output:**

```
Matched
```

**Why:**
`count--` returns 5 before decrement → condition true.

---



