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
