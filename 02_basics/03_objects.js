// object literals...

const mySym=Symbol("key1")

const JsUser= {
    name: "nikhil",
    [mySym]:"myKey1",
    "full name": "Hitesh Choudhary",
    age:20,
    location:"mumbai",
    email:"nik@mail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]

}

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym])// symbol create a unique key
 //Square brackets are mandatory
//Without them, JS treats it as a string key

// hat JS does internally:

// Look at [key]

// Read variable key

// Get its value → "email"

// Use "email" as the property name
const key = "email";

const user = {
  [key]: "abc@gmail.com"
};

console.log(user.email); // abc@gmail.com
console.log(user[key]);  // abc@gmail.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

