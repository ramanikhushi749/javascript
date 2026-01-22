// operators
// arithmatic, comparison, logical, assignment,  unary, ternary

// arithmatic
    // +, -, /, *, **, %    
    
    // + --> add and concatenation
    // ex. 1+2 --> add
    // ex. "user" + "name" --> concat
    // ex. 5 + "5" --> concat

    // -
    // ex. 2-1

    // /,*
    // ex. 240/2, 25*2

    // % (Modulus/sheshfal/reminder)
    // ex. 12%4 --> 0
    // ex. 9%2 --> 1

    // ** (sqare)(exponentiation)
    // ex. 2**3 --> 8


// comparison (ans: true, false)
    // ==
    // ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
    
    // ===
    // ex. 12 === "12" (check type and value, strict comparison)

    // !=
    // ex. 12 !=13 (reverse of ==, not strict comparison)

    // !==
    // ex. 12 !== "12" (reverse of ===)

    // >=
    // ex. 22 >= 22

    // <=
    // ex. 13 <= 13

    // <
    // ex. 12 < 113, 12 < 9, 22 < 22

    // > 
    // ex. 12 > 113, 12 > 9, 13 > 13


// assignment
    // =
    // give a value, value assignment operator
    // ex. let a = 12;

    // +=
    // ex. a += 3; (add value into old value and save it into a)

    // -=
    // ex. a -= 4; (substract value into old value and save it into a)

    // *= 
    // ex. a *= 2;

    // /=
    // ex. a /= 2;

    // %=
    // ex. a %= 2; (give reminder)


// logical
    // & (and)
    // ex. true && true --> true 12<14 && 14<15 --> true
    // false && true --> false 12<10 && 14<15 --> false
    // true && false --> false
    // false && false --> false

    // || (or)
    // ex. true || true --> true
    // false || true --> true
    // true || false --> true
    // false || false --> false

    // ! (not)
    // ex. !true --> false
    // !false --> true
    // !12 --> false, !!12 --> true


// unary operator 
    // +, -, !, typeof, ++, --

    // +
    // convert string  to number
    // ex. +"5" --> 5
    // "5" + 5 --> 55
    // +"5" + 5 --> 10

    // -
    // ex. -5

    // !
    // ex. !12 --> false

    // typeof
    // ex. typeof "name" --> string
    
    // ++
    // ex. let abc = 12
    // abc++ --> 12 //post ex. abc++ + abc => 25
    // ++abc --> 13 //pre ex/ abc++ + abc => 26

    // --
    // ex. let abcc = 3;
    // abcc--
    // abcc++


// ternary
    // ? :
    // condition ? true thase to print thase : false thase to print thase
    // let a = 12>13 ? console.log("true") : console.log("false");


// type of null --> object
// type of [] --> object, let a = []; a instanceof Array --> true
    // instanceof --> check type of reference datatype // don't use typeof for reference datatype
// typeof NaN --> number
// typeof --> premitive datatype mate use krvo
// instanceof --> reference data type mate use krvo