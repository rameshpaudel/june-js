//No of student


//Subject -> Marks

var noOfStudents = prompt("Enter the number of students");

var studentList = [];
var studentMarks = [];

var passMarks = 32;
var fullMarks = 100;

for(var i = 0; i < noOfStudents; i++){
    var name = prompt("Enter the name of the student");
    
    var maths = prompt("Enter the scored points in math");
    var science = prompt("Enter the scored points in science");
    var english = prompt("Enter the scored points in english");
    var social = prompt("Enter the scored points in social");

    if(maths > fullMarks || science > fullMarks || english > fullMarks || social > fullMarks){
        console.log("Please input the number between 0 and 100");
        continue;
    }

    if(maths > passMarks){
        console.log(name + " passed in maths")
    }
    if(science > passMarks){
        console.log(name + " passed in science")
    }
    if(english > passMarks){
        console.log(name + " passed in english")
    }
    if(social > passMarks){
        console.log(name + " passed in social")
    }


    studentList.push(name);

    studentMarks.push([maths,science,english,social]);

}


