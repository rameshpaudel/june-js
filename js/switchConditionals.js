var question = prompt("Enter the name of the property to display")

var car = {
    model: "T1",
    madeYear: 2019,
    madeIn: "China",
    price: 400000000000,
    description: "One of the best cars available on the market",
    mileage: '20km/l',
    height: 5.10,
    width: 5,
    length: 10,
    weight: '2000kg',

    area: function () {
        return car.width * car.length
    },
    formattedPrice: function () {
        return "Rs." + car.price
    }
}


switch (typeof car[question]) {
    case "string":
        console.log("The value is ", car[question])
        break;
    case "function":
        console.log("The property was a function with value  ", car[question]() )
        break;
    case "number":
        console.log("The number is ", car[question])
        break;
    default:
        console.log("Hello there you entered a keyword thats not in our database")
        break;
}