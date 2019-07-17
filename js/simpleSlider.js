var leftBtn = document.querySelector("#left")
var rightBtn = document.querySelector("#right")
var currentImage = document.querySelector('img')


var currentIndex = 1;

var images = [
    "http://lorempixel.com/1366/350/sports",
    "http://lorempixel.com/1366/350/nature",
    "http://lorempixel.com/1366/350/abstract",
    "http://lorempixel.com/1366/350/food"
]

function resetCurrentIndex(){
    if(currentIndex + 1 > images.length || currentIndex < 0){
        currentIndex = 0
    }
}

function changeSliderImage(src){
    
    currentImage.setAttribute('src', src)
}

function slideLeft(){
    
    currentIndex = currentIndex - 1
    
    resetCurrentIndex()
    
    changeSliderImage(images[ currentIndex ])
}

function slideRight(){
    //Incrementing the current Index
    currentIndex = currentIndex + 1
    //Reseting the current index if required
    resetCurrentIndex()

    //Change the image from the page
    changeSliderImage(images[ currentIndex ])
}

leftBtn.addEventListener('click', slideLeft)

rightBtn.addEventListener('click', slideRight)


var dragStartPosition = 0;
var dragEndPosition = 0;

currentImage.addEventListener("dragstart", function(e){
    
    console.log('start PageX',e.pageX)
    console.log('start PageY',e.pageY)
    
    dragStartPosition = e.clientX;
})
currentImage.addEventListener("dragend", function(e){
    dragEndPosition = e.clientX;
    console.log('end PageX',e.pageX)
    
    console.log('end clientX',e.clientY)
    
})

currentImage.addEventListener('dragleave', function(){
    if(dragStartPosition > dragEndPosition){
        console.log("Dragged to the left")
        slideLeft()
    } else {
        console.log("Dragged to the right")
        slideRight()
    }
})