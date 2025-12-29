console.log(null>0)
console.log(null==0)
console.log(null>=0)

// in case of comparisons operator null treated as 0

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

//When JavaScript compares using <, >, <=, >=, it tries to convert values to numbers.
//NUMBER(undefined)=NaN
//If we compare with anything toNaN it result out to be false...
// undefined == null its true...
