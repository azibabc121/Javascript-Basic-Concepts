console.log("<-----------Object's Concept---------->")


// There are two way's to declare an object
//1 - Object created from constructor is singleton bject 
//2-  object created from literals is not singleton


const personalInfo = {
    id : 231676,
    name : "umar",
    "username": "umerfarooq",
    age : 13, 
    email : "umerfarooq@gmail.com",
    
}

// there arae two way's to access an array
console.log(personalInfo.name)
// console.log(personalInfo[name])  // error: name is not defined 
console.log(personalInfo["name"])   // correct syntax to print the name 
console.log(personalInfo["username"])

//<------------Nested Objects-------------->

const user = {
  name: "Aiman",
  address: {
    city: "sadiqabad",
    town: "Ali Town",
    zip: "44000"
  }
};

console.log(user.address.city); // "sadiqabad"



//<---------------Object with functions----------------->

const person = {
  name: "Azib",
  greet: function() {
    console.log("Hello!!! My name is " + this.name);
  }
};

person.greet(); 

// shorthand Concept

const secFunction = {
    greet(){
        console.log("second way to write functions in javascript")
    }
}

secFunction.greet()

//Multiple Functions in javascript

const calculator ={
    add(x, y){
        console.log(x+y)
      },

    subtract(x, y){
     console.log(x-y)
      },

      Multiply(x, y){
     console.log(x*y)
      },

      Divide(x, y){
     console.log(x/y)
      }
}

calculator.add(3,5)
calculator.subtract(4,6)




//<------------------- SetTimeOut and SetInterval Concept------------>


//Syntax
// SetTimeout(function , timeInterval)
 
  const sum = (a,b)=>{
    console.log("sum of a and b " + (a+b))
    
  }
   
  setTimeout(sum, 1000 , 1, 2)

 
   console.log("Starts")
 
   setTimeout(()=>{
     console.log("This code Will run after Two seconds")
   }, 2000)

    console.log("End")

    //OUTPUT
    //1-Start  => 2-End => 3- This code will run after 2 seconds




    //----------SetInterval-------


    let counter = 0 ;

     const setCounterValue = setInterval(()=>{
        counter = counter+1;
         console.log(counter)

         if(counter === 5){
            clearInterval(setCounterValue);
         }
     } , 1000)

     /// one more example with settimeout and of SetInterval
  
     let countdown = 4;

      const countDownInterval = setInterval(()=>{
            console.log("countodown " + countdown--);
      })

     setTimeout(()=>{
         clearInterval(countDownInterval)
         console.log('CountDown End')
     },20)