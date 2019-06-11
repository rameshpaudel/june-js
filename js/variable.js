 //Variables 

// If we use var then we can redeclare the variable
// let and const will throw an error while reassigning the variable
var test = "test this"
console.log(test);

var test = "Some changed value";

console.log("Changed", test)

let another = "Another test this"
console.log(another);

another = "Some changed value";
console.log("another ", another)



const someConstant = "Constant test this"
console.log(someConstant);

console.warn("Warning will be thrown")
console.error("Error will be thrown")



// Numbers and Basic Arithmetic Operations

var sum =  10 * 10 / 2 + 20 + 3  ;

var testArr = [];
var testObj = {};

// sum++;
console.log(typeof sum);
console.log(typeof another);

console.log("Type of Array" ,typeof testArr);
console.log("Type of Object" ,typeof testObj);

//-----------------------------------------------------------
// Loops
//for(initializer; condition ; expression)
for(var i = 0; i < 10; i = i+2){
    console.log("Value from the loop",i);
}

//While loop uses initializer outside the loop
var index = 10;
while(index < 20){
    console.log("While loop data", index);
    index = index + 2;
}

//-------------------------------------------------------------------

var arr = [1,2,3,4,5,6,7,8];

var anotherArr = [
    {
        name: "Test",
        age: 20,
    },
    {
        name: "Super test",
        age: 23,
    },
    {
        name: "Test",
        age: 20,
    },
    {
        name: "Test",
        age: 20,
    }
]

// console.log("Length", anotherArr.length)
// console.log("First Length", arr.length)

// console.log("The first value of arr", arr[0], arr[1])
// console.log("The second array", anotherArr[0], anotherArr[1])

for(var i = 0; i < anotherArr.length; i++){
    console.log("Index Position "+ (i + 1), anotherArr[i]);
}



for(var i = 0; i < 10; i+=2){
    console.warn(i);
}





