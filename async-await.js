// const pro = new Promise((res, rej) => {
//   res("Payment is Done");
// });
// async function demo() {
//   const result = await pro;
//   console.log(result);

//   let payment = "done ";
//   if (payment === "done");
//   {
//     console.log("Hotel accepted your order");
//   }
// }
// demo();


// setTimeout(()=>{
//     console.log("Payment is done ")
// },4000)

// console.log("Dashboard acess given")


const pro = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Payment is done ")
    },4000)
})

async function sample(){
    const result = await pro;
    console.log(result);

    console.log("Dashboard acess given")
}
sample()
