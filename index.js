let i = 1;

while(i<5) {
    console.log("while ", i);
    i += 1; 
}
// i++

let a = 1;

do {
    console.log("do - while ", a);
    a += 1;
} while(a<5);

const groceryList = new Array(30);
console.log(groceryList.length);

var myArray = [2, 3, 4];
var myOtherArray = [5, 6, 7];
var evansArray = [8, 9, 10];

var wholeArray = myOtherArray.concat(myArray);
console.log(wholeArray);

const getTogether = [...myArray, ...myOtherArray, ...evansArray]

console.log("getTogether", getTogether);

const userProfile = {
    first_name: "John",
    last_name: "Okigwe",
    dob: "04-10-2010",
    dp: "https://images.pexels.com/photos/5837501/pexels-photo-5837501.jpeg",
    age: "16",
    ssn: "230234",
    has_crime_rec: false,
    can_go_to_jail: false,
    address: {
        house_no: "47",
        street: "Main Street",
        city: "New York"
    },
    friends: ["Ashley", "Brian", "Ojukwu", "Odumeje", "Cynthia", "Aminat", "Raiden"]
};

// dot notation
console.log(userProfile.first_name + " " + userProfile.last_name);


const print = function(fn) {
    var result = fn();
    console.log(result);
};

class Shirt {
    constructor (name, colour, price, size) {
        this.name = name,
        this.colour = colour,
        this.price = price,
        this.size = size
    }

    wash(){
        console.log("washing machine");
        this.colour = this.colour + " izz gone otilo!";
        return this;
    }

    runDiscount(){
        console.log("Running Discount");
        this.price = this.price - 0.20*this.price;
        return this;
    }
    
    spin(){
        console.log("spinning");
        return this;

    }
}

const okigweMortuaryBrand = new Shirt("Okigwevenci", "marine spirit blue", 2500, "XL")
console.log(okigweMortuaryBrand)

const jamesShirt = new Shirt("Jameson", "red", 70000, "XL")
console.log(jamesShirt.runDiscount().wash());

	


// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. 
// Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor (name, age, country) {
        this.name = name,
        this.age = age,
        this.country = country
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

const badMan = new Person("Osuofia", 979, "United States Of Aba Nwanne");
const zazu = new Person("Portable", 78, "Nigeria");

console.log(badMan);
console.log(zazu);


// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. 
// Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.


class Rectangle {
    constructor (width, height) {
        this.width = width,
        this.height = height
    }

    calculateArea() {
        return this.width * this.height
    }

    calculatePerimeter() {
        return 2 * (this.height  * this.width)
    }
}

const rectangle = new Rectangle(4,9)

console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());

// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
// Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' 
// class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
    constructor (make, model, year) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    displayVehicleDetails() {
         console.log(`make: ${this.make}`);
        console.log(`model: ${this.model}`);
        console.log(`year: ${this.year}`);
    }
}

class car extends Vehicle {
    constructor(make, model, year, numberOfDoors) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    displayVehicleDetails() {
    super.displayVehicleDetails();
    console.log(`Number of doors: $(this.numberOfDoors)`);
    }
}

const myCar = new Vehicle("Mercedes", "Mercedes-Benz Gle phanthom", 2026, 4);

myCar.displayVehicleDetails();


// 4. Write a JavaScript program that creates a class called "BankAccount" 
// with properties for account number and balance. Include methods to deposit 
// and withdraw money from the account. Create some instances of the "BankAccount"
//  class, deposit some money, and withdraw a portion of it.

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        return this;
    }

    withdrawal(amount) {
        this.balance = this.balance - amount;
        return this;
    }
}

const account1 = new BankAccount("21349766632", 10000);

account1.deposit(5000);
account1.withdrawal(12000);

console.log(account1);
console.log(account1.balance);
