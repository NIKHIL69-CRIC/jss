let name="niks"
let repocount=50

//console.log(name+ repocount+ "value")

//console.log(`hello my name is ${name} and my repocount is ${repocount}`)
// this the best way to write any string

const gameName=new String('nikhil')
const regex=/nikhil/i

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.substring(0, 4))
console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))
console.log(gameName.substring(-8,4))
console.log(gameName.slice(2,4))
console.log(gameName.replace("niksil","niks"))
console.log(gameName.replace(regex,"niks99"))
