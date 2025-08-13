// console.log("Hello World") 

const credentials = "Aiman";
// credentials = "shahid"          // assign to constant variable
console.log(credentials)


//scoped concept
// 1- Block Scope  (let, const )
// 2- Functional Scope (var)


let user = "Shahid"

function  login(){
    let status = "logged in";
    console.log(user + " is " + status);

}

login()
// console.log(status)    Eroor: status is not defined , because let is blocked scope

function signup(){
    var data = "Ahmad"
    console.log(data);
}

// console.log(data)       error: data is not defined , because  var is functional scope




if(true){
     var age = 25;
}
console.log(age)



// <---------Hoistig Concept------>    

// javascript deafult behaviour , to declare variables at the top of the scope without being intialiazed ,in short only declaration are hoisted not initialization 

 console.log(x)   // variable x initialized with undefined 
 var x = 5;
 console.log(x)



  // console.log(y) //  Reference Error: Cannot access 'y' before initialization
  let y= 35;
  console.log(y)

//

greet()

function greet(){
    console.log("Javascript Concepts");
 }



 // myfunction() //  Error: myfunction() is not a function

// in case of let and const we have two errors 
// 1- cannot access' myfunction' before initialization
//2- same myfunction is not a  function 


 var myfunction = ()=>{          // function expression
    console.log("Javascript Concepts");
 }

myfunction()



   // <----------Temporal dead Zone (TDZ) concept ------------>:
  // The time period between
  // variable hoisted ---------- to -------actually declared in the code
  
  {
    // TDZ start here
    // TDZ coninues here 
    // TDZ coninues here 
    // console.log(bestfood)  ReferenceError: Cannot access 'bestfood' before initialization  ---> TDZ continues here
    let bestfood ;  // TDZ end here
    console.log(bestfood)
    bestfood = "golgappy"
    console.log(bestfood)

  }







  // // <-------- Data Type Conversions ------->
  
// Two types of conversions
//1-Implicit (operationla Based)
//2-explicit
  
// " - "  operation always try to do numeric operation , so javascript try to convert string to a number and perform subtraction
// Except " + "  factor favous string concatenation if either side side is string

console.log("5"+ 1)    // "51" string concatenation
console.log("5"- 1)    //4
console.log("5" - "7")  // -2
console.log("5" * 3)   //15
console.log(true + 1)  //1 
console.log("hello" + false )  // "hellofalse"

console.log(1 + 2 + "4") // js evaluates expression from left to right 
// 1+2  => 3
//3 + "4" => "34"     implicit conversion , so 1 + 2 + "4" = "32"

let sum1 = null
console.log(typeof sum1)  // object


let sumValue = "123"
let con_sumValue = Number(sumValue)
console.log(con_sumValue);  // print 123 , when sumvalue = "123" 
console.log(con_sumValue);  //NaN
 
console.log(typeof con_sumValue);  // number

let word = "Drink"
let convertedWord = Number(word)
console.log(convertedWord)      // NaN

// 1 => true
// 0 => false
// "" =>false
// "Aiman" => true

let loggedIn = "Aiman"
let con_LoggedIn = Boolean(loggedIn)
console.log(con_LoggedIn) // true

 
