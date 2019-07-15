var myForm = document.querySelector('form');

var studentList = [
    {
        name: "",
        email: "",
        math: "",
        english: "",
        nepali: ""
    }
]

function validateLength(value, element) {
    if (value.length < 5) {
        element.innerText = "The minimum length of the field must be more than 5 characters"
    }
}

function checkIfNumber(value) {
    if (!isNaN(parseInt(value))) {
        return true;
    }
    return false;
}

function isBetween(value, element) {
    if(!checkIfNumber(value)){
        element.innerText = "The Input type is not a number"
        return;
    }

    if(value < 0 || value > 100){
        element.innerText = "The input is not between 0 and 100"
    }

}
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var myName = document.querySelector('#form-name');
    var nameError = document.querySelector('form .error')
    var myEmail = document.querySelector('#form-email');
    var emailError = document.querySelector('form div:nth-child(2) .error')
    var myMath = document.querySelector('#form-math');
    var mathError = document.querySelector('form div:nth-child(3) .error')
    var myEnglish = document.querySelector('#form-english');
    var englishError = document.querySelector('form div:nth-child(4) .error')
    var myNepali = document.querySelector('#form-nepali');
    var nepaliError = document.querySelector('form div:nth-child(5) .error')

    console.log(e)
    validateLength(myName.value, nameError)
    validateLength(myEmail.value, emailError)

    isBetween(myMath.value, mathError)
    isBetween(myEnglish.value, englishError)
    isBetween(myNepali.value, nepaliError)
})