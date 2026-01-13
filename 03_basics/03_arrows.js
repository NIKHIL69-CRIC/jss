const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);// this tells us the context ..
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this); 
// **if we run this on node.js then it will give us an empty object
// **  run on browser it show us an window object..

function chai(){
    let username="nick"
    console.log(this.username)
    // ****  whenever we run this under the function it will always show undefined.

}
// chai()


 const chai = function () {
 let username = "hitesh"
    console.log(this.username);
}

const chai =  () => {// arrow function..
    let username = "hitesh"
    console.log(this);
}


// chai()

const addTwo = (num1, num2) => {// explicit
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit 

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()