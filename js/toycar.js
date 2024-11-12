//All code either built off of lesson code or used in previous assignment 2 (code largely similar to my code for assignment 2)

const scale = document.getElementById('scaleInput');
const button = document.getElementById('button');
//toyCar class
class toyCar {
    //constructor for toyCar class, 11 properties, based on toy car models
    constructor(sku, upc, brand, model, decade, color, scale, packaging, vehicleType, price, imageSrc) {
        this.sku = sku;
        this.upc = upc;
        this.brand = brand;
        this.model = model;
        this.decade = decade;
        this.color = color;
        this.scale = scale;
        this.packaging = packaging;
        this.vehicleType = vehicleType;
        this.price = price;
        this.imageSrc = imageSrc;
    }

    //Change size of image based on scale
    changeSize (newSize) {
        this.scale = newSize;
    }

    //method to set size of image based on scale
    imageSize() {
        const carImage = document.getElementById('carImage');
        carImage.setAttribute('src', this.imageSrc);

        //switch case to determine size of image
        let size;
        switch (this.scale) {
            case '1/24':
                size = 150;
                break;
            case '1/18':
                size = 200;
                break;
            case '1/12':
                size = 250;
                break;
            default:
                size = 100;
                break;
        }
        //set size of image
        carImage.setAttribute('width', size);
    }

    //method to change price based on scale
    //added 6 or 9 to price rather than set values to allow for different toy cars with different prices
    newPrice() {
        switch (this.scale) {
            case '1/24':
                return this.price;
            case '1/18':
                return this.price + 6;
            case '1/12':
                return this.price + 9;
            default:
                return this.price;
        }
    }
}

//New toyCar object for Ford Bronco
let fordBronco = new toyCar('31530BU-MAI-BLUE', '680334694771', 'Ford', 'Bronco', 'After 2000', 'blue', '1/24', 'Window Box', 'SUV', 15.99, 'images/fordbronco.jpg');

//Added a new toyCar object for Chevy Camaro to give user choice of cars
let chevyCamaro = new toyCar('99085-JADA-RED', '694365739752', 'Chevy', 'Camaro', '60s', 'red', '1/24', 'Window Box', 'Muscle Car ', 18.99, 'images/chevycamaro.png');

//function to display toy car
function displayToyCar(car) {
    document.getElementById('carName').innerText = `${car.brand} ${car.model} ${car.decade}`;
    document.getElementById('brand').innerText = car.brand;
    document.getElementById('model').innerText = car.model;
    document.getElementById('price').innerText = car.newPrice().toFixed(2);
    document.getElementById('color').innerText = car.color;
    document.getElementById('scaleInput').value = car.scale;

    // calling function to display toy car image
    car.imageSize();
}

const selectCar = document.getElementById('selectCar');

// Event listener to handle car selection changes
selectCar.addEventListener('change', function() {
    const selectedCar = selectCar.value;
    if (selectedCar === 'fordBronco') {
        displayToyCar(fordBronco);
    } else if (selectedCar === 'chevyCamaro') {
        displayToyCar(chevyCamaro);
    }
});

// calls displayToyCar function to display the Bronco
displayToyCar(fordBronco);

//Event listener to change size of image and price based on scale user selects
//updated to use if statement to update based on which toy object is selected
button.addEventListener('click', function() {
    const newSize = scale.value;
    //display bronco
    if (selectCar.value === 'fordBronco') {
        fordBronco.changeSize(newSize);
        displayToyCar(fordBronco);
        //display camaro
    } else if (selectCar.value === 'chevyCamaro') {
        chevyCamaro.changeSize(newSize);
        displayToyCar(chevyCamaro);
    }
});
