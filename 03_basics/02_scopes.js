var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}



 console.log(a);
//  console.log(b);
 console.log(c);// as var is a global variable...


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     console.log(website);// no run coz one() → cannot access website

     two() // it runs beacuse JS use lexical scoping where inner function can use outer function but 
    //   but vice versa is not same...

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
//in this code it will run smoothly without any error 
// as function declaration is hoisted and JS moves the entire function part tot the top ..


addTwo(5)
var addTwo = function(num){
    return num + 2
}
//add two is declared using const...
//const is hoisted ...and has to be intialized..
//until intilization it will in TDZ( temporal dead zone)...