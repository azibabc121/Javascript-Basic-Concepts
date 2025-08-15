//<------------------------Aync Await----------------------->
//  async function getData(){

//     // simulate getting data from a server
//   return new Promise ((resolve , reject)=>{
//    setTimeout(()=>{
//       resolve(455)
//    },2000)
//   })
// }


 async function getData(){
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   let data = await x.json()
   return data
 
}

// async  function main(){
// console.log("Data Prepared")
// console.log("Fetch Data")
// console.log("Load Data")

// let data = await getData()
// console.log(data)
// console.log("Fetch Data")

// }

// main()

// second way to print 


(async()=>{
console.log("Data Prepared")
console.log("Fetch Data")
console.log("Load Data")

let data = await getData()
console.log(data)
console.log("Fetch Data")

})()


// function App() {
//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return <h1>Welcome, Aiman!</h1>;
//   } else {
//     return <h1>Please log in</h1>;
//   }
// }




const isDarkMode = false;

console.log(isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled");

const showMessage = true;

showMessage && console.log("This is a conditional message!");


// //<-------------------------Promises in javascipt---------------->

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("✅ Data loaded!");
//   }, 2000);
// });

// myPromise.then((result) => {
//   console.log(result); // ✅ Data loaded!
// });


// const failPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("❌ Something went wrong!");
//   }, 1000);
// });

// failPromise
//   .then((res) => {
//     console.log("Success:", res);
//   })
//   .catch((err) => {
//     console.log("Error:", err); // Error: ❌ Something went wrong!
//   });

//   const chainedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1000);
// });

// chainedPromise
//   .then((num) => {
//     console.log("First:", num); // 10
//     return num * 2;
//   })
//   .then((num) => {
//     console.log("Second:", num); // 20
//     return num + 5;
//   })
//   .then((num) => {
//     console.log("Third:", num); // 25
//   });




