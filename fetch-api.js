// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data=>console.log(data))


// fetch

// the fetch function used to make a network Request. It takes an URL as its argument and returns a Promsie that resolves to the response Object.


// fetch('https://jsonplaceholder.typicode.com/todos/1')

//       .then(response => console.log(response)) //used to handel the resolves value of promise

//       output

//     Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users', redirected: false, status: 200, ok: true, …}
//     body: (...)
//     bodyUsed:false
//     headers: 
//     Headers {}
//     ok: true
//     redirected: false
//     status: 200
//     statusText: ""
//     type: "cors"
//     url: "https://jsonplaceholder.typicode.com/users"
//    }

//       .then(response=>console.log(response.json()))// it is a method of response object that reads the response and returns a promise. It basically parse the JSON data from the response and return it

//       output

// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Array(10)


// .then(data=>console.log(data)) this method is chained to handel the promise which is returned by response.json()


// async function getData(){
//     const response = await fetch('https://jsonplaceholder.picode.com/users')
//     const data     = await response.json()
//     return data;

//     //   .then(response => response.json())
//     //   .then(data=>console.log(data))
// }
// getData()
// .then((data)=>console.log(data))
// .catch((error)=>console.error(error),"Error 404 not found")





