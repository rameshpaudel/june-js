//Document is an object which parses our HTML file


// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.URL);


//querySelector selects first element that matches the param
var heading = document.querySelector("h1")
var container = document.querySelector(".container")
var firstContainer = document.querySelector("#first")
var anchorTag = document.querySelector("a")

//======================================================

var headingTag = document.getElementsByTagName('h1')
var theIDSelector = document.getElementById('first')
console.log("The headings", headingTag)
console.log("The id selector",theIDSelector)

//======================================================
var allContainers = document.querySelectorAll('.container')
heading.style = "color:#2f2f2f;background:#ededed"

heading.classList.add("test")

setTimeout(function(){
    heading.classList.remove('test');
},5000)


allContainers[0].style="background: black; color: white";
allContainers[1].style="background: blue; color: white";


function containerClicked(e){
    console.log(e)
    e.style = "background:green"
}


setTimeout(function(){

    allContainers[0].children[1].style="color:red"
    allContainers[0].children[0].innerText = "Test this out" 

},5000)
console.log(allContainers)



// heading.onmouseover = 
heading.addEventListener('mouseover', function(e){
    console.log("Hovering the tag")
})

heading.onclick = function(e){
    console.log(e)
    //srcElement gives the source which fired the event
    let clickedElement = e.srcElement
    console.log(clickedElement.style="padding: 20px")
}

var test = {
    name: "Test"
}

test.fullName = "Something"


var originalPosition = window.scrollY;
var changedPosition = 0;
window.onscroll = function(e){
//   console.log(e)

    changedPosition = window.scrollY
    // console.log(changedPosition)
    if (originalPosition > changedPosition){
        console.log("Scrolling ups ")
    }

    // console.log(e.srcElement.children[0].children[1].children[0].scrollHeight)
    if(window.scrollY  > 500){
        heading.style = 'position: fixed;background: #ccc; top:'+ (window.scrollY /2  -500)+'px;left:0;right:0;bottom:0'
    }else{
        heading.style = 'postion:relative'
    }
}

function random(i){
    return Math.floor(Math.random()*i) +1 ;
}
function generateRandomBg(){
    document.body.style= `background: rgba(${random(255)},${random(255)},${random(255)},${Math.random()})`
}

window.addEventListener('keypress',function(e){
    console.log(e)
    console.log(e.keyCode, e.key)
    if(e.keyCode === 13){
        generateRandomBg()   
    }
})

