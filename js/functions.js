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


//Checks to see if the given parameter is indeed an integer
function checkIfInteger(data){
    if (isNaN(parseInt(data))) {
        return false;
    }
    return true;
}

//Asks user for correct input
//Runs infinitly until the user inputs integer
function askUserForCorrectInput(question = "Enter the no of users"){
    let numOfUsers = prompt(question);
    let conversionToInt = parseInt(numOfUsers)

    if (checkIfInteger(conversionToInt)) {
        return conversionToInt;
    }
    alert("Enter number only. You entered invalid type of data")
    return askUserForCorrectInput(question);
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
        var age = askUserForCorrectInput("Enter the age of student");
        var marks = askUserForCorrectInput("Enter the marks of student");
      
        console.log("Name of " + (i + 1) + " student : " + name)
        console.log("Age of " + (i + 1) + " student : " + age)
        console.log("Marks of " + (i + 1) + " student : " + marks)
    }
}

getStudentData();