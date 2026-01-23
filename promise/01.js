// a promise is a object that eventually failed or pass...

// const promiseone=new Promise(function(resolve, reject){

//     setTimeout(function() {

//         console.log("async is completed")
//         resolve();// whenver the async task is done or it resolved thenafter it will call resolve
        
//     }, 1000);
// })// no need to create  any variable to contain promise....

// promiseone.then(function(){// it directly connected to resolve
//     console.log("promise is consumed")
// })

// how data consumption is occur...

const promiseThree= new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username: "nikhil",emial:"nikhil@gmial.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)

})


const promiseFour= new Promise(function(resolve,reject){

    setTimeout(function(){
        let error= false;
        if(!error){
            resolve({username: "nikhil",emial:"nikhl@gmail.com"})
        }
        else{
            reject('there must be error')
        }
    },1000)

})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){// there is a chaining  of then funciton
    console.log(username)
}).catch(function(error){// catch directly connect to reject
    console.log(error)
})

const promiseFive=new Promise(function(resolve,reject){
    let error=true;
    if(!error){
        resolve({username:"javascript", password:"1234"})
    }
    else{
        reject("js is not recognize")
    }
})

//in this we r using async function instead of then..

async function consumepromiseFive(){
   try{
    const response=await promiseFive // waiting for the promise
   console.log(response)
   }
   catch{
    console.log(errror)
   }
}

consumepromiseFive();// as async function  have some diificulities for error thats why we use try and catch

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json// convert the string into object
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log("Error is detected")
})












