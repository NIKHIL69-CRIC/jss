let name="nikhil"

let username=name;
username="niks99"
console.log(name)
console.log(username)

// here we change in the copy not the actual one

// if we take the example in case of non primitve eg.. objects

let user1={
    email: "niks9@google.com",
    upi:"niks@ybl",
}

console.log()

let user2=user1

user2.email="niks99@google.com"

console.log(user1.email)
console.log(user2.email)

// Here it take reference if we change it will change in real one also
// as it goes into the heap the object we created


