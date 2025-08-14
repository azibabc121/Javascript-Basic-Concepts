console.log("<-----------Object's Concept---------->")
// Object is a collection of key, pair values

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
