//for of
const array=[1,2,3,4,5]

for (const val of array) {
    console.log(val)
}

const greeting="hello world"

for (const greet of greeting){
    console.log(`each char is ${greet}`)
}

const map=new Map()
map.set('IN','INDIA')
map.set('BAN','BANGLADESH')
map.set('PAK','PAKISTAN')
map.set('IN','INDIA')

console.log(map)// here map only contain unique element not the duplicate....

for (const [key, value] of map) {
     console.log(key, ':-', value); 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
 }// using map myobject is not iterable..
