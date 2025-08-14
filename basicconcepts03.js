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
