// let promise1=new Promise((resolve,reject)=>{

// });
// let promise2=new Promise((resolve,reject)=>{});
// let promise3=new Promise((resolve,reject)=>{});
// let promise4=new Promise((resolve,reject)=>{});
// let promise5=new Promise((resolve,reject)=>{});
// promises
console.log('a');

console.log('b');

// function c(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('c');   
//         } ,3000)
//     })
// }

// function d(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('d');
//         }, 0)
//     })
// }

// function e(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('e');
//         }, 0)
//     })
// }

// Promise.all([c(),d(),e()]).then((res)=>{for(let i of res){
//     console.log(i)
// }})
// async await
const cde=async()=>{
    const c= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("c");
        },3000);
    })
    console.log(await c);
    const d=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("d");
        },0);
    })
    console.log(await d)
    return("e");
}
cde().then((val)=>console.log(val));







