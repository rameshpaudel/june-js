var initialNumber = 10;
var finalNumber = 20;

if (initialNumber > finalNumber) {
    alert("The initial Number is greater than the final Number");
}


var firstArray = [
    {
        name: "Smiths",
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
        name: "Testing",
        age: 20,
    }
]
var secondArray = [
    {
        name: "Smith",
        age: 20,
    }
  
]

// if(firstArray.length > secondArray.length ){
//     alert("The first array is greater");
// }

//Double equals checks if the value is same without cheking the data type
// if(firstArray[0].name == secondArray[0].name){
//     alert("The name are same");
// } else {
//     alert("The name are not same");
// }


for(var i = 0; i < firstArray.length; i++){
    if(firstArray[i].name != "Test"){
        console.log("test value is not present in index of", i)
    } else if(firstArray[i].name == "Smith"){
        alert("Hello Smith")
    }else{
        console.log("Test value is present in the index of ", i)
    }
}

//Triple equals === strictly checks for the data type

if(0== false) console.log("This is true ")
if(0 === false) console.log("This is not true because of the difference in data type")

//Numbers from 1 - 100
// If the number is divisible by 3 output fizz
// If the number is divisible by 5 output buzz
// If the number is divisible by 3 & 5 output fizz buzz


//Asking for multiple user data 


// function askStudentInfo( ){
    var numOfUsers = prompt("ENter the no of users");

    var conversionToInt = parseInt(numOfUsers)
    
    if(isNaN(conversionToInt)){
        alert("Enter number only. You entered invalid type of data")
        // askStudentInfo();
    }
    var nameList = [];
    var ageList = [];
    for(var i = 0; i < numOfUsers; i++){
        var name = prompt("Enter the name of student");
        var age = prompt("Enter the age of student");
        console.log("Name of " + (i+1) + " student : "+ name)
        console.log("Age of " + (i+1) + " student : "+ age)
    }
// }





// askStudentInfo()







//Enter the num of students

//Enter the name
//Ask for marks in each subject
//Calclate total marks obtained

//Filter the top scoring student


