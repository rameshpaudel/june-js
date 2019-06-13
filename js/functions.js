//Functions are used to encapsulate certain functionalities

//They help us to reuse our code

//The a,b,c are the parameters that are passed to the function
//The equals to oprator assigns the default value if the value is not passed as parameter
function sum(a, b, c = 0, d = 0, e = 0) {
    return a + b + c + d + e;


}

function substract(a, b) {
    return a - b;
}

//Asks user for correct input
//Runs infinitly until the user inputs integer
function askUserForCorrectInput(){
    var numOfUsers = prompt("ENter the no of users");

    var conversionToInt = parseInt(numOfUsers)

    if (isNaN(conversionToInt)) {
        alert("Enter number only. You entered invalid type of data")
        askUserForCorrectInput();
    }
    return conversionToInt;
}

//Checks to see if the given parameter is indeed an integer
function checkIfInteger(data){
    if (isNaN(parseInt(data))) {
        return false;
    }
    return true;
}


var test1 = checkIfInteger(20);
var test2 = checkIfInteger("asdkfj");


// Ask the user for student datas
function getStudentData() {
    var numOfUsers = askUserForCorrectInput()
    var nameList = [];
    var ageList = [];
    for (var i = 0; i < numOfUsers; i++) {
        var name = prompt("Enter the name of student");
        var age = prompt("Enter the age of student");
        var marks = prompt("Enter the age of student");
        if(!checkIfInteger(age)){
            alert("Age is not a number")
        }
        
        console.log("Name of " + (i + 1) + " student : " + name)
        console.log("Age of " + (i + 1) + " student : " + age)
    }
}

// getStudentData();