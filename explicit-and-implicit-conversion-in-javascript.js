/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); //this is an example of implicit conversion

//the result is:3


let isValid = Boolean(false); //I deleted the quotation marks, did not use explicit conversion methods to return the 

    console.log(Boolean(isValid)); //I used this to check if the boolean value was falsy or truthy, it returned true orginally


if (isValid) {
    console.log("This is valid!");
}

//false

let age = "25";
let ageNumber = Number(age); //This converts the string age into a number
let totalAge = ageNumber + 5; //Now instead of concatenating, it adds together the sum to produce 30 instead of 255
console.log("Total Age: " + totalAge);
//Total Age: 30


//My examples

//Implicit conversion example
let numberOfApples = 5
let totalOfApples = numberOfApples - 2;
console.log("Apples Eaten: " + totalOfApples);

//Explicit conversion example
let numberOfBananas = "5"
let totalOfBananas = Number(numberOfBananas) + 2;

console.log("Bananas Eaten: " + totalOfBananas); //this returns 52, before using parseInt, after it returns 7

//edge case example

let frogs = 0;
console.log(Boolean(frogs));
