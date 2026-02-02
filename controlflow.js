// // controlflow statements in JavaScript

// // if-else statement (if, if else, if else if else)
// //  if (condition) {} --> condition true hoy to {} code run
 if (12<13) {
    console.log(true);
}

if (15<13) {
  console.log(true);
 } //condition is false that why if statement not run

if (!12) {
   console.log("number");
 }// condition is false that why if statement not run

if(!0) {
 console.log("number");
}

// // if-else statement
if (12<13) {
console.log(true);
} else {
   console.log(false);
}

 if (15<13) {
    console.log(true); //condition is false that why if statement not run
 } else {
     console.log(false); // if if statement condition is false than run this code
 }

 if (!12) {
    console.log("number");
 } else {
     console.log("not a number");
 }

 
 let loggedIn = true;
let admin = true;
 if (loggedIn && admin) {
     console.log("welcome admin");
 } else if (loggedIn) {
    console.log("welcome user");
     } else {
     console.log("go ot login page");
 }

 let userRole = "organizer";
let admin1 = true;
if (userRole === "admin") {
    console.log("Access all events and users.");
}
else if (userRole === "organizer") {
    console.log("You can create and manage events.");
}
else {
    console.log("You can view and register for events.");
}


// // switch case statement 
 switch ("Blackfriday") //value --> case value sathe match krva ane code run thase
 {
    case "First50" :
         console.log("50% off on first order");
         break;

    case "BOGO" :
        console.log("buy one, get one");
         break;
     case "Blackfriday" :
         console.log("it's black friday sale - get at rs. 50");
        break;

     default :
         console.log("offer not valid");
 }

// Switch Case for Event Type example
let eventType = "wedding";

switch (eventType) {
  case "wedding":
    console.log("Wedding event selected.");
    break;

  case "birthday":
    console.log("Birthday event selected.");
    break;

  case "conference":
    console.log("Conference event selected.");
    break;

  case "concert":
    console.log("Concert event selected.");
    break;

  default:
    console.log("Unknown event type.");
}

// // early return pattern
 function score(value) {
     if(value>90) {
         return "value is more than 90";
     } else if(value<80) {
        return "value is less than 80";
     } else if(value<70) {
         return "value is less than 70";
     } else if(value<60) {
        return "value is less than 60";
     } else {
         return "value is less than 60";
     }
 }
 score(100);
console.log(score(100))

 function score1(value) {
     if (value > 90) return "value is more than 90";
     else if (value >= 80) return "value is between 80 and 90";
    else if (value >= 70) return "value is between 70 and 79";
    else if (value >= 60) return "value is between 60 and 69";
    else return "value is less than 60";
 }

 function score2(value) 
 {
     if(value < 60) return "value is less than 60";
    else if(value < 70) return "value is less than 70";
     else if(value < 80) return "value is less than 80";
     else if(value < 90) return "value is less than 90";
     else return "value is more than 90"
 }

//controll flow example


