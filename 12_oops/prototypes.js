 let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);// only array get this method cz particularly apply on array
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
 heroPower.heyHitesh()

//  ********** imp points from this code***********

// Every object in JS inherits from Object.prototype

// So ALL objects, arrays, functions get hitesh()
// Object.prototype affects EVERYTHING

// Adding anything here:

// Object.prototype.xyz = ...


// ➡️ Available to:

// objects

// arrays

// functions