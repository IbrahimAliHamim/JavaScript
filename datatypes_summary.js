// Primitive Data Types are 7 in number:

/**
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Symbol
 * 7. BigInt
 */

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 2345324523454352345234n;

// if(id === anotherId){
//     console.log("These two are equal")
// }else{
//     console.log("These two are not equal");
// }


// Non Primitive Data Type(Reference Type):

/**
 * 1. Array
 * 2. Objects
 * 3. Function
 */

const heros = ["Spiderman", "IronMan", "Batman", "Supperman"];
let myObj = {
    name : "Ibrahim",
    roll : "405880",
};

const myFunction = function (){
    console.log("This is a function.");
};

console.log(typeof myObj);