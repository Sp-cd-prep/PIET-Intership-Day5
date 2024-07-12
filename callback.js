// callback= sample
// callback()

// function demo(callback){
//     console.log("hi")
//     callback()
// }

// function sample(){
//     console.log("hello");
// }
// demo(sample)

//first class function
// const demo = function(){
//     console.log("first class function")
// }
// demo()

//first class function
// function demo(){
//     console.log("good")
//     return function sample(){
//         console.log("morning")
//         return function sampl2(){
//             console.log("hiii")
//         }
//     }
// }
// let value = demo()
// value()
// // demo()()

// callback hell

function demo(callback){
    console.log("hi")
    callback()
}
function demo2(callback){
    console.log("hi2")
    callback()
}
function demo3(callback){
    console.log("hi3")
    callback()
}
function demo4(callback){
    console.log("hi4")
    callback()
}
function demo5(){
    console.log("hi5")
}


demo(()=>{
    demo2(()=>{
        demo3(()=>{
            demo4(()=>{
                demo5()
            })
        })
    })
})