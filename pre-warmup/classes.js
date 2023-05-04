/**Classes in JavaScript
Classes were introduced in ES6 as a way to create objects using a more 
traditional class-based syntax. A class is essentially a blueprint for 
creating objects 
*/

//class Animal creates animal objects
class Animal {
    //set the initial state of an object created from this class
    constructor(name, age, sound){
        this.name = name;
        this.age = age;
        this.sound = sound;
    };

    //logs a message to the console.
    speak (){
        /**
         * ES6 introduced a new syntax for creating STRING LITERALS 
         * using BACKTICKS (``), which can contain placeholders for 
         * variable values using ${}.
         */
        console.log(`I am ${this.name} ,  ${this.sound} ! , living ${this.age} years can have its drawbacks`);
    };
};

const cat = new Animal('Tom', 3, 'Meeow');
cat.speak();


/**Inheritance in JavaScript
Inheritance is a way to create a new class that is a modified version 
of an existing class. 
In JavaScript, one can use the --extends keyword-- to create a 
new class that inherits from an existing class. 
*/
class Cat extends Animal{
    /**
     * 'constructor' method calls the super method to call the constructor 
     * of the parent Animal class, and sets an additional breed property. 
     * The Cat class also has a new method called purr.
     */
    constructor (name, age, sound, breed) {
        super(name, age, sound);
        this.breed = breed;
    }
    purr (){
        console.log(`Proud ${this.breed} cats purr like this: ${this.sound}!!`);
    }
}

var anotherCat = new Cat('Garfield', 2, 'Moewakanda!', 'African Feline');
anotherCat.speak();
anotherCat.purr();
