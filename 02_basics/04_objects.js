const tinderUser={}
tinderUser.id="112abc"
tinderUser.name="nun"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    name: "nikhil",
    email:"name@gmal.com",
    fullName:{
        userfullName:{
            firstName:"nikhil",
            lastName:"yadav"
        }

    }

}

// console.log(regularUser.fullName.userfullName.lastName)

const obj1={1:"a" ,2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={5:"e", 6:"f"}

// const obj4=Object.assign({}, obj1, obj2, obj3)// to merge the object
// console.log(obj4)

const obj4={...obj1,...obj2,...obj3}// spread method .
console.log(obj4)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
// if we want to access keys and values it will show in array

// array of objects

const user=[
    {
        id:"1122abc",
        email:"email@agmial.com",
    }
]

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course// de structuring of object {}

// console.log(courseInstructor);
console.log(instructor);
