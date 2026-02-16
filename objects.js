//create
//varible = {}
// key : value --> key -value struture
let user = {
    name:"test",
    email: "test@gmail.com",
    roll_no :70
}

//access (dot vs square notation)
user.name;
user.email;


// Nesting and Deep Access
const user1 = {
  name: "test",
  address: {
    city: "Surat",
    pin: 395009,
    locations: {
      lat: 24.2,
      lng: 77.4,
    },
  },
  email: "test@gmail.com",
}; // nested Object

// Deep Access
user1.address.locations.lat;
// user1.address.location.lng;


// Object destructuring:
let { lat, lng} = user1.address.locations;
let { name, email, address } = user1;
let { city } = user1.address;
let { lat: abc_lat } = user1.address.locations;
// destructure and rename variable name




let demo = {
  first_name: "Demo",
  last_name: "User",
  age: 45,
  email: "demo@user.com",
};



// Looping (for-in loop)
// for (varible name in object_name) {
// }

for (const key in demo) {
  // console.log(key);
  // obj_key --> not working
  // console.log(demo[key]);
  console.log(key, ":", demo[key]); // log whole object
}



// Copying Objects: Spread, Object.assign, deep-clone

// Spread
let user_data = { ...demo };

// add key-value and copy object
let user_data2 = { gender: "Male", role: "user", ...demo };

// const user_state_update
// const user = {
//   name: "Amit",
//   age: 30
// }

// const updatedUser = {
//   ...user,
//   age: 31
// }
// console.log(updatedUser);



// Object.assign → copy and add keys-value
let user_data_assign = Object.assign({}, demo); 
// nothing will be add just copy

let user_data_assign2 = Object.assign(
  { phone_number: 7894567894 },
  demo
); // add and copy



// Use case: Default settings - user settings merge
// const defaultSettings = {
//   theme: "light",
//   language: "en"
// }

// const userSettings = {
//   theme: "dark"
// }

// const finalSettings = Object.assign({}, defaultSettings, userSettings);
// console.log(finalSettings);



// Object.assign vs spread
// Object.assign() → Method - ES5 old version, Less used
// Spread → operator - state updated, most used in react application, clean code



// deep clone
let user1_clone = { ...user1 };
user1_clone.address.city = "Valsad";  
// that will change value of user1 too

// issue: when you clone & copy nested object using spread or object.assign
// nested object pass only reference not copy

// deep clone

let temp_user1_clone = { ...user1 };

// user1_clone.address.city = "Valsad" 
// → that will change value of user1 too


// issue: when you clone & copy nested object using spread or Object.assign
// into new variable that copy all value but nested object pass only reference not copy

// (child object) reference pass karse — value copy thase nahi

// How to clone that → use deep clone

// first convert your object to string

// JSON – JavaScript Object Notation
// JSON.stringify(obj_name) → convert object into string
// JSON.parse(stringifyObject) → convert string to object

let clone_user1 = JSON.parse(JSON.stringify(user1));

// Deep clone = completely new memory


// use case:
// Real time use:
// API response handling
// Avoid data mutation bugs



// Object.keys() → add all keys into array format

// object.key -- add all keys into arrays formate 
let key_arr = Object.keys(demo);
// use case : user profile form valdiation
// ex. website prthi user form ma data add kre chhe ane te data backend pase object formate ma aave chhe
const userProfile = {
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 25
};
// now check how many field user fill up
const keys = Object.keys(userProfile);
console.log(keys);
console.log(keys.length);
// object.entries -- add key and value into array formate
// give array of arrays
let key_value_arr = Object.entries(demo);
// use case: display user details dynamically (UI)
// ex. backend give you data into object formate
const user3 = {
    name: "Priya",
    city: "Ahmedabad",
    role: "Admin"
};
// print key and value both in profile page
Object.entries(user3).forEach(([key,value]) => {
    console.log(`${key} : ${value}`);
});
// object.entries(user) ==> convert into arrays
// forEach ==> Array loop


// looping (for-in loop)
// for (variable name in object_name) {}
for (const key in demo) {
    // console.log(key);
    // obj.key --> not working
    // console.log(demo[key]);
    console.log(key, ": ", demo[key]); // -- log whole object
}


// copying objects: spread, object.assign, deep-clone
// spread
// let user_data = {...demo};
let user_data1 = { gender: "Male", role: "user", ...demo} // add key-value and copy object
// use case: state update
const userD = {
    name: "Amit",
    age: 30
};

const updateUser = {
    ...userD,
    age: 31
}


// object.assign -- copy and add key-value
let user_data_assign11 = Object.assign({}, demo); // nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number: 7412580369}, demo); // add and copy
// use case: default setting + user setting merge
const defaultSetting = {
    theme: "light",
    language: "en"
};

const userSetting = {
    theme: "dark"
}

const finalSettings = Object.assign({}, defaultSetting, userSetting);


// Object.assing vs spred
// Object.assing() -- Method -- ES5 Old version, Less used
// Spred -- operator -- state updated, most used in react application, clean code 


// deep clone
let temp_user18_clone = {...user1}
// user1_clone.address.city = "Valsad" --> that will change value of user1 too
// issue : when you clone & copy the nested objects using spread or object.assign into new variable that copy all value but nested object pass only reference not copy
// (jyare tme nested object (parant obj.) spread na upyog thi copy kro tyare nested obj. (chile obj.) reference pass krse -- value copy thase nhi)
// how to clone that -- use deep clone
// first convert your object to string
// json - javascript object notation
// JSON.stringify(obj._name) -- convert object into string
// JSON.parse(stringify_Object) -- convert string to object
let clone_user18 = JSON.parse(JSON.stringify(user1))
// deep clone = completely new memory
// use case : 
// real time use: 
// API response handling
// avoid data mutation bugs


// optional chaining, computed properties
// user1.address.location.lng;
user1?.address?.address?.lng; // -- ? optional chaining
// use case :
// without optional chaining -> app crash
// backend data incomplete
// API response safety
const apiResponse = {
    user: {
        profile: {
            name: "Neha"
        },
    },
};
console.log(apiResponse.user?.profile?.name);
console.log(apiResponse.user?.address?.city);


// computed properties
let role = "admin";
let user2 = {
    name: "test",
    age: 26,
    email: "test@gmail.com",
    address: {
        city: "surat"
    },
    [role]: "test"
}
// use case: dynamic object keys
const fieldName = "email";
const userE = { 
    name: "Ravi",
    [fieldName]: "ravi@gmail.com"
};
console.log(userE);