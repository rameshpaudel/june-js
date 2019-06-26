//Dates



setTimeout(function(){
    console.log(Date())
},1000);


var theInterval = setInterval(function(){

    var date = new Date();
    var getSecond = date.getSeconds();
    console.log("This will run forever ", getSecond)
}, 2000)



setTimeout(function(){
    //Stop the forever running interval
    clearInterval(theInterval)
},10000);


// looping objects
var obj =     {
    name: "China man",
    math: 20,
    sciene: 10,
    english:30,
    nepali:60,
    chinese: 80
},