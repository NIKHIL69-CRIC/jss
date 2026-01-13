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

}
chai()