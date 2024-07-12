// setTimeout(callback,timelimit)

setTimeout(()=>{
    alert("Please Register First!!")
},5000)

console.log("hello")

// const pro = new Promise((resolve,reject)=>{
//     let payment = true;
//     if(payment  ==  true){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// pro.then(()=>{
//     console.log("Dashboard Access Given !")
// })
// .catch(()=>{
//     console.log("Dasboard Access Denied!!")
// })



function pro(){
    return new Promise((res,rej)=>{
        res();
    })
}
pro() 
.then(()=>console.log("hii"))
.then(()=>console.log("hii2"))
.then(()=>console.log("hii3"))
.then(()=>console.log("hii4"))
.then(()=>console.log("hii5"))
.catch(()=>console.log("error"))