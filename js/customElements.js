
var container = document.createElement('div');
container.classList.add('card');
container.innerText = "Lorem ipsum dolor sit amet";

//Creating a p tag
var paragraph = document.createElement('p');
//Adding some text to the paragraph
paragraph.innerText = "Hello World"

//Creating a img tag
var image = document.createElement('img');
//Assigning the src attribute to the img element
image.setAttribute('src','http://lorempixel.com/200/200/tech')

//Adding the element inside another element
container.append(paragraph, image)
//Fetching the attribute
// console.log(container.getAttribute('class'))


//Adding the container to the body
document.body.append(container)

