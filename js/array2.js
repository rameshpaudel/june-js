var arr = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < arr.length; i++){
    // console.log(i)//, arr[i]);         
}

function mapEveryItem(value,index){
    if(index  == 5){
        return null;
    }
    return value;
}

function isGreater(value,index){
    return value > 5;
}

var generatedArray = arr.map(mapEveryItem)


var filterdArray = arr.filter(isGreater)




var studentList = [
    {
        name: "Harry",
        age:20
    },
    {
        name: "John",
        age:25
    },
    {
        name: "Jane",
        age:45
    },
    {
        name: "Joe",
        age:15
    }
]

var students = studentList.filter(function(value,index){
    return value.age < 25
})
// console.log(students);

function mappings(value,index){
    return {
        name: value.name,
        age: value.age *5
    }
}

var mappedData = studentList.map(mappings)


var loopData = studentList.forEach(function(value,index){
    console.log(value.age)
})


var names = ['John','Jane','June','Joe','Harry'];


var searchData = names.find(function(value,index){
    return value == "test"
})




var multiArr = [
    [1,2,3],
    [2,3,4],
    [3,4,5]
]

var multiLoopData = multiArr.forEach(function(value,index){

    let mappedData = value.map(function(data,position){
        return data * 2;
    })

    console.log(mappedData);
})



//Rest spread operator => ...
//ARRAY Destructuring

var allData = [...arr,...names]

//Objects

var allObjs = {
    occupation: "Student",
    dob: '2019-10-12',
    ...studentList[0],
}