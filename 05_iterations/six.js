const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNumers.map( (num) => { return num + 10})

 const newNums = myNumers
                 .map((num) => num * 10 )// after numbers multiply by 10..these number simply goes to next step
                 .map( (num) => num + 1)
                 .filter( (num) => num >= 40)

 console.log(newNums);// here mapchaining is there...