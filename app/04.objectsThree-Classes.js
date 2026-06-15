console.log("Topic: Objects Part Three - Classes");

// =============================== 01 =======================================
/*  1. Create a VendingMachine class that represents a drink vending machine
    with the following properties:
    - location (string): where the machine is located;
    - drinks (number): how many drinks are left;
    - methods getStatus(): returns a string like "Cafe machine: 20 drinks left".
    2. Create the instance cafeMachine and print that phrase.
*/
// Solution:
class VendingMachine {
  constructor(location, drinks) {
    this.location = location;
    this.drinks = drinks;
  }

  getStatus() {
    return `${this.location} machine: ${this.drinks} drinks left`;
  }
}

const cafeMachine = new VendingMachine("Cafe", 20);
console.log(cafeMachine.getStatus()); // "Cafe machine: 20 drinks left"

// =============================== 02 =======================================
/*
 */
// Solution:
// class BankAccount {
//   constructor(owner, balance = 0) {
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }
// }
/* Методами у класах JavaScript зручно модифікувати стани (властивості) об"єктів 
   Це власне одна з ключових особливостей ООП. */
// Аdd more state-modifying methods:
class MyBankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  transfer(amount, toAccount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      toAccount.balance += amount;
    }
  }
}
// створимо екземпляр класу BankAccount і перевіримо стан властивості balance
const johnsAccount = new MyBankAccount("John", 100);
console.log(johnsAccount.balance); // Outputs: 100
// змінимо стан властивості balance для johnsAccount
johnsAccount.deposit(50);
console.log(johnsAccount.balance); // Outputs: 150
// створимо інший екземпляр класу BankAccount і перевіримо стан властивості balance
const marrysAccount = new MyBankAccount("Marry", 450);
console.log(marrysAccount.balance); // Outputs: 450
// змінимо стан властивості balance для marrysAccount
marrysAccount.withdraw(220);
console.log(marrysAccount.balance); // Outputs: 230

// =============================== 03 =======================================
/* In JavaScript classes, we can define two types of class fields: public and
   private. Public fields are accessible from outside the class and can be
   used by anyone. The sample:
    class Student {
      name = '';
      grade = 0;
  
      constructor(name, grade) {
        this.name = name;
        this.grade = grade;
      }
    }
  After that, we can create a student instance:
    const student = new Student('Alice', 95);
  Access public fields from outside the class:
    console.log(student.name); // Output: "Alice"
    student.grade = 98;
    console.log(student.grade); // Output: 98
*/
// Solution:
/*Private fields are denoted with the # symbol and can only be accessed
  from within the class:
*/
class Student {
  name = "";
  #grade = 0;

  constructor(name, grade) {
    this.name = name;
    this.#grade = grade;
  }

  getGrade() {
    return this.#grade;
  }

  updateGrade(newGrade) {
    this.#grade = newGrade;
  }
}
// Using private fields:
const student = new Student("Bob", 87);
console.log(student.name); // Output: "Bob"
// Access private field using a method
console.log(student.getGrade()); // Output: 87
// Update private field using a method
student.updateGrade(92);
console.log(student.getGrade()); // Output: 92
// But this would cause an error:
// console.log(student.#grade); // SyntaxError

// =============================== 04 =======================================
/* You're given a MessageBox class that stores messages. Your task is to add
  a private method called #isValidMessage(text) that validates messages. It 
  should:
  - return true if the text is not empty and less than 100 characters;
  - return false otherwise.
*/
// Solution:
/* Private methods in JavaScript classes allow you to hide implementation 
   details and prevent external access to internal functionality. Starting 
   in ES2022, private methods can be defined using the # prefix. In other
   words, the private methods cannot be accessed from outside the class, so 
   attempting to call it directly throws an error.
*/
class MessageBox {
  #message = "";

  #isValidMessage(text) {
    if (text !== "" && text.length < 100) {
      return true;
    } else {
      return false;
    }
  }
  /* чи проста і скорочена версія, типу:
    #isValidMessage(text) {
      return text !== '' && text.length < 100;
    }
    тут головне пам"ятати, що У JavaScript, якщо функція не має 
    оператора return, вона повертає значення undefined. Отже треба
    явно повертати значення.
  */

  setMessage(text) {
    if (this.#isValidMessage(text)) {
      // A public method inside a class can call
      // a private method defined in the same class.
      this.#message = text;
      return "Message set!";
    }
    return "Invalid message!";
  }

  getMessage() {
    return this.#message;
  }
}

// Test
const box = new MessageBox(); // Using the message box
console.log(box.setMessage("Hello")); // "Message set!" (uses #isValidMessage)
console.log(box.setMessage("")); // "Invalid message!" (uses #isValidMessage)

// =============================== 05 =======================================
/* You're given a GameCharacter class. Your task is to:
   1. Add a private field #isAlive initialized to true
   2. Add a private method #checkIfAlive() that:
     - Sets #isAlive to true if #health > 0
     - Sets #isAlive to false if #health ≤ 0 
*/
// Solution:
class GameCharacter {
  name = "";
  #health = 100;
  // Private field #isAlive initialized to true
  #isAlive = true;

  constructor(name) {
    this.name = name;
  }

  takeDamage(amount) {
    this.#health -= amount;
    this.#checkIfAlive();
  }

  heal(amount) {
    this.#health += amount;
    if (this.#health > 100) {
      this.#health = 100;
    }
    this.#checkIfAlive(); // keep status updated after healing too
  }

  getStatus() {
    return this.#isAlive ? "Alive" : "Defeated";
  }

  // Private method to update #isAlive based on #health
  #checkIfAlive() {
    if (this.#health > 0) {
      this.#isAlive = true;
    } else {
      this.#isAlive = false;
    }
  }
}

// Test:
const warrior = new GameCharacter("Warrior");

warrior.takeDamage(30);
console.log(warrior.getStatus()); // "Alive"
warrior.takeDamage(80);
console.log(warrior.getStatus()); // "Defeated"

// =============================== 06 =======================================
/* Create Furniture Classes Using Inheritance
  1. Create a Chair Class
    Create a Chair class that extends Furniture:
    Use super() in the constructor to inherit material and color from the parent class
    Add property: numberOfLegs
    Add method: sit() that returns "Sitting on the chair"
  2. Create a Table Class
    Create a Table class that extends Furniture:
    Use super() in the constructor to inherit material and color from the parent class
    Add property: shape
    Add method: placeItem() that returns "Item placed on table"
*/
// Solution:
class Furniture {
  constructor(material, color) {
    this.material = material;
    this.color = color;
  }

  describe() {
    return `${this.color} ${this.material} furniture`;
  }
}

class Chair extends Furniture {
  constructor(material, color, numberOfLegs) {
    super(material, color);
    this.numberOfLegs = numberOfLegs;
  }
  sit() {
    return "Sitting on the chair";
  }
}

class Table extends Furniture {
  constructor(material, color, shape) {
    super(material, color);
    this.shape = shape;
  }
  placeItem() {
    return "Item placed on table";
  }
}

// Test
const myChair = new Chair("wood", "brown", 4);
console.log(myChair.describe()); // "brown wood furniture"
console.log(myChair.numberOfLegs); // 4
console.log(myChair.sit()); // "Sitting on the chair"

const myTable = new Table("glass", "clear", "round");
console.log(myTable.describe()); // "clear glass furniture"
console.log(myTable.shape); // "round"
console.log(myTable.placeItem()); // "Item placed on table"

// =============================== 07 =======================================
/* As we know, all objects traditionally inherit from Object.prototype
    and support access to common object methods. This is shown in the example
    below with the RabbitOne class. 
    class RabbitOne {
      constructor(name) {
        this.name = name;
      }
    }
    let rabbitOne = new RabbitOne("Coco");
    console.log(rabbitOne.hasOwnProperty("name")); // true

    But if we write the class creation explicitly - like: 
    class RabbitTwo extends Object {
      constructor(name) {
        this.name = name;
      }
    }
    let rabbitTwo = new RabbitTwo("Sari");
    console.log(rabbitTwo.hasOwnProperty("name")); // ReferenceError
    the result of using the method from Object.prototype will be an error.
    Explain the difference between them and how to fix the error? 
*/
// Solution:
/* У конструкторі класу, що успадковується потрібно визначити
   явно метод super, інакше "this" буде не визначено. Крім того, 
   цей метод обовязково потрібно визначити перед this, ось так:
*/
class RabbitThree extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbitThree = new RabbitThree("Bilbo");
console.log(rabbitThree.hasOwnProperty("name")); // true
/*Також важливо зазначити ще важливу різницю між літералом та класом з 
    розширенням, це те, що синтаксис “extends” встановлює два прототипи:
    1. Між "prototype" функцій-конструкторів (для методів), типу
        Rabbit.prototype.__proto__ === Object.prototype ); // true
        або Rabbit.__proto__ === Object ); // true
    2. Між самими функціями-конструкторами (для статичних методів). I в
        літеральній формі Rabbit.__proto__ === Function.prototype
*/

// =============================== 08 =======================================
/* In JavaScript classes, there are two distinct levels of properties and 
   methods:
   - Instance-level: Properties and methods that belong to each individual 
     object created from the class.
   - Class-level: Properties and methods that belong to the class itself, 
    not to instances.
   Can you explain the difference?
*/
// Solution:
// Спочатку треба подивитись на екземпляри класу (instance-level members) і
// як вони використовують методи класу.

class Car {
  constructor(make) {
    this.make = make;
  }

  drive() {
    return `The ${this.make} is driving`;
  }
}
// далі створимо екземпляри класу Car:
const myCar1 = new Car("Toyota");
const myCar2 = new Car("Honda");
console.log(myCar1.drive()); // "The Toyota is driving"
console.log(myCar2.drive()); // "The Honda is driving"
/*Помітили: кожен екземпляр має свою власну копію методу та має доступ 
до своїх власних властивостей через "this". */

// Тепер подивимось на методи внутрішнього ріня класу (class-level members).
// Для цього, ми додамо статичний метод в класі. Тут використаєм ключове
// слово "static" перед методомю що належить тільки самому класу, а не
// екземплярам класу.

class Car2 {
  constructor(make) {
    this.make = make;
  }

  drive() {
    return `The ${this.make} is driving`;
  }

  static compareModels(car1, car2) {
    return `Comparing ${car1.make} with ${car2.make}`;
  }
}
const car3 = new Car("BMW");
const car4 = new Car("Audi");
console.log(Car2.compareModels(car3, car4)); // "Comparing BMW with Audi"
/* Статичні методи корисні для utility functions, які не залежать від даних,
  які передаються в екземплярах класу. Отже, статичні методи викликаються на
  самому класі а не на екземплярах класу. А якщо викликати статичний метод 
  для екземпляру класу, то буде помилка, як от тут:
  car3.compareModels(car3, car4); // Error: car3.compar
*/

// =============================== 09 =======================================
/*
  Create a class named StringUtils with a static method called capitalize that
  takes a string as an argument and returns the same string with the first letter
  capitalized. For example, if the input is "javascript", the method should
  return "Javascript". Export this class.
  1. Check if the string is empty: if (!str || str.length === 0) (Without this
    check an empty string could cause issues).
    - !str checks for null/undefined (prevents errors)
    - str.length === 0 checks for empty string (returns "" instead of crashing)
  2. Get the first character: str.charAt(0)
  3. Make it uppercase: .toUpperCase()
  4. Get the rest of the string: str.slice(1) (from position 1 to end)
  5. Combine: uppercase first character + rest of string
*/
// Solution:
export class StringUtils {
  static capitalize(str) {
    if (!str || str.length === 0) {
      return ""; // safe fallback for null/undefined/empty
    }
    const firstCharacter = str.charAt(0).toUpperCase();
    const rest = str.slice(1);
    return firstCharacter + rest;
  }
}
// Test:
console.log(StringUtils.capitalize("programming")); // "Programming"
console.log(StringUtils.capitalize("")); // ""
console.log(StringUtils.capitalize(null)); // ""

// =============================== 09 =======================================
/*
  You're given a ShoppingCart class. Your task is to add:
  Static properties:
    1. taxRate set to 0.08 (8% tax)
    2. currency set to "USD"
  Static method:
    1.calculateTax(amount) that returns amount * taxRate
*/
// Solution:
class ShoppingCart {
  // add static properties which belong to the class itself, not to individual carts
  static taxRate = 0.08; // add a static property taxRate
  static currency = "USD"; // add a static property currency

  constructor() {
    // Initialize instance properties items and total
    // those ones are unique to each cart, managed by addItem()
    this.items = [];
    this.total = 0;
  }

  // add a static method called calculateTax
  static calculateTax(amount) {
    return amount * ShoppingCart.taxRate;
  }
  /*
    Можна зробити метод calculateTax більш гнучким і повертати загальну  
    суму яка враховує таксу а не просто одну таксу:

    static calculateTotalWithTax(amount) {
      return amount + (amount * ShoppingCart.taxRate);
    }
    а викликати потім так:
    console.log(ShoppingCart.calculateTotalWithTax(cart.total)); // 81 (75 + 6)
  */

  // Add instance method addItem
  addItem(price) {
    this.total += price;
    this.items.push(price);
    return this.total;
  }
}

// Test
console.log(ShoppingCart.currency); // "USD"
console.log(ShoppingCart.calculateTax(100)); // 8 (100 * 0.08)

const cart = new ShoppingCart();
console.log(cart.addItem(25)); // 25
console.log(cart.addItem(50)); // 75
console.log(ShoppingCart.calculateTax(cart.total)); // 6 (75 * 0.08)

// =============================== 10 =======================================
/*
  You have a notification system with a parent class Notification and two
  child classes. Your task is to add the send(message) method to each child
  class with different implementations.
  1. In the EmailNotification class, the method should return the string: 
  "Sending '(message)' via Email";
  2. In the SMSNotification class, the method should return the string: 
  "Sending '(message)' via SMS";
*/
// Solution:
/*
  Polymorphism is a core principle of object-oriented programming that allows
  objects of different classes to respond to the same method in different ways.
  In JavaScript, polymorphism is most commonly seen when child classes override
  methods from parent classes.
*/
class Notification {
  send(message) {
    return `Sending '${message}' via Notification`;
  }
}
// Each child class implements the send() method differently. This is polymorphism in action!
class EmailNotification extends Notification {
  send(message) {
    return `Sending '${message}' via Email`;
  }
}
class SMSNotification extends Notification {
  send(message) {
    return `Sending '${message}' via SMS`;
  }
}

// Test:
const email = new EmailNotification();
const sms = new SMSNotification();

console.log(email.send("Hello!")); // Sending 'Hello!' via Email
console.log(sms.send("Hello!")); // Sending 'Hello!' via SMS

// =============================== 11 =======================================
/*
  You're given a Shape parent class and a Circle child class. The parent
   class has a calculateArea() method that returns 0.
   Your task is to override the calculateArea() method in the Circle class
   to calculate the actual area of a circle.
   (The formula for circle area is: π × radius² In JavaScript: 
   Math.PI * this.radius * this.radius)
*/
// Solution:
class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // override the calculateArea() method to calculate and return  the actual area of a circle
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Test
const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // 78.53981633974483

// =============================== 12 =======================================
/*
  You're given a Shape class with a calculateArea() method and a Rectangle
  class that extends it. You have to override the calculateArea() method
  in Rectangle using super. 
  So, your task is to complete the calculateArea()  method in the Rectangle
  class to:
  1. Call the parent's calculateArea() method using super and store the result;
  2. Calculate the rectangle's actual area: width × height;
  3. Return a combined string: parent's message + rectangle area. Example: 
    Calculating area... Rectangle area: 50.
*/
// Solution:
/*
  When you override a method, you can still access the parent's original version
  using super.methodName(). This lets you extend or modify parent behavior instead
  of completely replacing it.
*/
class Shape2 {
  calculateArea() {
    return "Calculating area...";
  }
}

class Rectangle extends Shape2 {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    /*The super keyword allows you to call the parent class's 
    methods while still adding your own functionality in 
    the child class.*/
    const parentShape = super.calculateArea();
    let actualArea = this.width * this.height; // calculate the rectangle's actual area
    return `${parentShape} Rectangle area: ${actualArea}`;
  }
}

// Test
const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea()); // "Calculating area... Rectangle area: 50"

// =============================== 13 =======================================
/*
  Modify the Shape class to track how many shapes have been created using 
  static properties and methods. Your task:
  1. Add a static property called totalShapes initialized to 0
  2. Increment the counter in the constructor: Shape.totalShapes++;
  3. Add a static method called getTotalCreated() that returns the current 
     count of total shapes.
*/
// Solution:
class Shape3 {
  static totalShapes = 0; // add a static property and initializes it

  constructor(color) {
    this.color = color;
    Shape3.totalShapes++; // Increment the counter
  }

  describe() {
    return `A ${this.color} shape`;
  }

  // add a static method that returns the current count of total shapes
  static getTotalCreated() {
    return Shape3.totalShapes;
  }
}

class Circle2 extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} (Circle with radius ${this.radius})`;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Tests
console.log(`Initial count: ${Shape3.getTotalCreated()}`); // 0

const shape1 = new Shape3("red");
const shape2 = new Shape3("green");
const circle1 = new Circle2("blue", 5);
const circle2 = new Circle2("yellow", 10);

console.log(`After creating 4 shapes: ${Shape3.getTotalCreated()}`); // 4

// =============================== 14 =======================================
/* 
   1. Explain what are the setters and getters? Give an example and explain
   the difference between _ and #?
*/
// Solution:
/* Getters and setters are special methods that look like properties but are
   actually functions. They give you control over how properties are accessed
   and modified. Let's create a simple Person class:
*/
// Solution:
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter for fullName
  set fullName(value) {
    const parts = value.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}
// Now we can use these getters and setters like properties:
const person = new Person("John", "Doe");
console.log(person.fullName); // Output: John Doe
person.fullName = "Jane Smith";
// The setter has updated the internal properties
console.log(person.fullName); // Output: Jane Smith
/* Notice that we don't call these methods with parentheses. They behave 
   just like properties but execute code when accessed or modified.*/

/* The underscore (_) is a long-standing convention in the JavaScript 
   community used to signal that a property is "private" or intended
   for internal use only. While JavaScript didn't always have true private
   variables (like some other languages), developers used the underscore
   to tell others: "Please don't touch this directly; use the methods I 
   provided instead."
  1. Avoiding Naming Collisions (Recursion)
  The most practical reason to use _firstName when you have a getter or 
  setter named firstName is to prevent an infinite loop.
  If your code looked like this:
  get firstName() {
    return this.firstName; // This calls the getter again... which calls the getter...
  }
  2. Encapsulation and Control
  By using the underscore convention, you are telling other developers (and
  your future self) that they shouldn't bypass your logic.
  The underscore (_) is a long-standing convention in the JavaScript community used to signal that a property is "private" or intended for internal use only.

While JavaScript didn't always have true private variables (like some other languages), developers used the underscore to tell others: "Please don't touch this directly; use the methods I provided instead."

Here is the breakdown of why you’d use it in your specific code:

1. Avoiding Naming Collisions (Recursion)
The most practical reason to use _firstName when you have a getter or setter named firstName is to prevent an infinite loop.

If your code looked like this:

JavaScript
get firstName() {
  return this.firstName; // This calls the getter again... which calls the getter...
}
The program would crash with a "Maximum call stack size exceeded" error because the getter keeps trying to call itself. By using _firstName, you create a separate "backing variable" to store the actual data, while firstName acts as the public interface.

2. Encapsulation and Control
By using the underscore convention, you are telling other developers (and
your future self) that they shouldn't bypass your logic.
In your fullName setter, you are performing a split(' '). If someone ignores
the underscore and manually changes _firstName, they might break the consistency
of the fullName output without you knowing. 

The "Modern" Way: True Private Fields
If you want the computer to actually enforce privacy (instead of just using 
the underscore as a "pretty please don't touch" sign), modern JavaScript 
(ES2020+) uses the # prefix, like:
  class Person {
    #firstName; // Declaring a true private field
    #lastName;

    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }

    get fullName() {
      return `${this.#firstName} ${this.#lastName}`;
    }
  }

  const user = new Person('Jane', 'Doe');
  console.log(user.#firstName); // Error: Private field '#firstName' must be declared in an enclosing class
*/

// =============================== 15 =======================================
/* 
   You're given a User class with an age property. Your task is to add a getter
   and setter for age that:
   1. Getter get age(): returns the stored age;
   2. Setter set age(newAge): validates that age is between 0 and 120:
    - If valid (0-120): store it in this._age;
    - If invalid: don't change it and log "Invalid age!".
*/
// Solution:
class User2 {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Store age privately and internal
  }

  // Getter
  get age() {
    return this._age;
  }

  // Setter
  set age(newAge) {
    if (newAge >= 0 && newAge <= 120) {
      this._age = newAge; // safe assignment
    } else {
      console.log("Invalid age!");
    }
  }
}
// Test
const user2 = new User2("Alice", 25);
console.log(user2.age); // 25

user2.age = 30;
console.log(user2.age); // 30

user2.age = 150; // "Invalid age!"
console.log(user2.age); // still 30

// In modern JavaScript, you could also use private fields with #age, which
// enforces privacy at the language level:
class User3 {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge >= 0 && newAge <= 120) {
      this.#age = newAge;
    } else {
      console.log("Invalid age!");
    }
  }
}

// =============================== 16 =======================================
/* 
   You're given a UserProfile class with the username property already implemented.
   Your task is to complete the implementation for the email property using getters
   and setters:
   1. Add a getter for email that returns the current email value;
   2. Add a setter for email that:
    - Validates the email contains the '@' character
    If valid:
      - Updates the email to the new value
      - Logs exactly: Email updated to [newEmail]
    If invalid:
      - Logs exactly: Invalid email!
      - Does NOT update the email
*/
// Solution:
class UserProfile {
  constructor(username, email) {
    this._username = username;
    this._email = email;
  }

  // Username getter/setter
  get username() {
    return this._username;
  }

  set username(newName) {
    if (newName.length < 3) {
      console.log("Username must be at least 3 characters!");
      return;
    }
    this._username = newName;
    console.log(`Username updated to ${newName}`);
  }

  // Email getter
  get email() {
    return this._email;
  }

  // Email setter
  set email(newEmail) {
    if (!newEmail.includes("@")) {
      console.log("Invalid email!");
      return;
    }
    this._email = newEmail;
    console.log(`Email updated to ${newEmail}`);
  }
}
// Test
const user = new UserProfile("alice123", "alice@email.com");
user.email = "bob@email.com"; // "Email updated to bob@email.com"
console.log(user.email); // bob@email.com
user.email = "invalid-email"; // logs "Invalid email!"
console.log(user.email); // still bob@email.com

// =============================== 17 =======================================
/*
  You're given the component classes (Processor, Memory) and most of the Computer 
  class. Your task is to complete the constructor in the computer.js file:
  1. Create a processor property using the Processor class;
  2. Create a memory property using the Memory class
  3. Pass processorSpeed to the Processor constructor and memorySize to the 
  Memory constructor.
*/
// Solution:
class Memory {
  constructor(size) {
    this.size = size;
  }

  load() {
    console.log(`Loading ${this.size} GB of data`);
  }
}

class Processor {
  constructor(speed) {
    this.speed = speed;
  }

  compute() {
    console.log(`Processing at ${this.speed} GHz`);
  }
}

class Computer {
  constructor(processorSpeed, memorySize) {
    // Create a processor property using the Processor class
    // and pass the processorSpeed to the Processor constructor
    this.processor = new Processor(processorSpeed);
    // Create a memory property using the Memory class
    // and pass the memorySize to the Memory constructor
    this.memory = new Memory(memorySize);
  }

  start() {
    console.log("Computer starting up...");
    this.processor.compute();
    this.memory.load();
  }
}

const myComputer = new Computer(3.5, 16);
myComputer.start(); // Computer starting up... Processing at 3.5 GHz Loading 16 GB of data

// =============================== 18 =======================================
/*
  Complete the SmartBulb methods in the SmartBulb.js file. 
  1. Implement the activate() method to turn on the light.
  2. Implement the adjustBrightness() method to set the brightness and log 
    exactly: Brightness set to ${this.brightness.level}%.
*/
// Solution:
class LightSource {
  constructor(color) {
    this.color = color;
  }

  turnOn() {
    console.log(`${this.color} light is ON`);
  }

  turnOff() {
    console.log("Light is OFF");
  }
}

class BrightnessController {
  constructor() {
    this.level = 50; // Default 50% brightness
  }

  setBrightness(level) {
    this.level = Math.max(0, Math.min(100, level)); // Keep between 0-100
  }
}

class SmartBulb {
  constructor(color) {
    // Create instances of the two components
    this.light = new LightSource(color);
    this.brightness = new BrightnessController();
  }

  activate() {
    // Call turnOn() method on the light instance
    this.light.turnOn();
  }

  adjustBrightness(level) {
    // Set the brightness to the given level
    this.brightness.setBrightness(level);
    // Log the new brightness level exactly: Brightness set to ${this.brightness.level}%
    console.log(`Brightness set to ${this.brightness.level}%`);
  }
}

// Test:
const bedroomLight = new SmartBulb("warm white");

console.log("1. Activating light:");
bedroomLight.activate();

console.log("\n2. Adjusting brightness:");
bedroomLight.adjustBrightness(75);

// =============================== 19 =======================================
/* 
   In this project we'll build a library system where books track authors and 
   availability.
   1. Create first an Author class with: a constructor that takes one parameter: 
   name. It should store the name as: this.name = name.
   2. Create Book Class with Composition: create private fields: #title, #author,
   #isCheckedOut. Constructor that takes title and author. Two getters: title and
   authorInfo that returns the author's name. In main.js, add the import for 
   Book class.
   3. Than Improve the Book class constructor by adding validation. Currently, 
   the Book accepts any value for the author parameter, but it should only accept 
   an Author instance.
     In the Book constructor, add an if-else check:
      - If the author is valid (an instance of Author class) using author instanceof 
      Author, set this.#author = author;
      - Otherwise (author is invalid): Log exactly “Invalid author: must be Author 
      instance”. Set this.#author = null;
   In this way, the book should still be created even with an invalid author.
*/
// Solution:
// If we remember, composition means "has-a" relationship.
class Author {
  constructor(name) {
    this.name = name;
  }
}

export class Book {
  #title;
  #author; // Composition: Book HAS-AN Author
  #isCheckedOut = false;

  // constructor(title, author) {
  //   this.#title = title;
  //   this.#author = author; // composition: Book has-an Author
  //   this.#isCheckedOut = false; // default availability
  // }

  constructor(title, author) {
    this.#title = title;

    // Validation: must be an Author instance
    if (author instanceof Author) {
      this.#author = author;
    } else {
      console.log("Invalid author: must be Author instance");
      this.#author = null;
    }
  }

  // Getter for title
  get title() {
    return this.#title;
  }

  // Getter for author info
  get authorInfo() {
    // Guard against null author
    return this.#author ? this.#author.name : null;
  }
}

// Tests
// const author = new Author("J.K. Rowling");
// console.log(author.name); // "J.K. Rowling"
// const book = new Book("Harry Potter", "J.K. Rowling");
// console.log(book.title); // "Harry Potter"
// console.log(book.authorInfo); // "J.K. Rowling"

const rowling = new Author("J.K. Rowling");
// Valid case
const validBook = new Book("Harry Potter", rowling);
console.log("Author:", validBook.authorInfo);
// Author: J.K. Rowling

// Invalid case
const invalidBook = new Book("Fake Book", "String Author");
// Logs: Invalid author: must be Author instance
console.log("Author:", invalidBook.authorInfo); // Author: null

// =============================== 20 =======================================
/* 
  This is a simple game character system where characters can equip weapons 
  and engage in combat. Your task is to add these two methods to the Character
  class:
  Method 1: takeDamage(amount). This method reduces the character's health by 
  the amount. Logs: ${this.name} takes ${amount} damage.
  Method 2: equipWeapon(weapon). This method gives the character a weapon 
  (composition: "has-a" relationship). Logs: ${this.name} equipped ${weapon.name}.
*/
// Solution:
class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}
// Here we have composition: the Character has-a Weapon, not is-a weapon.
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapon = null; // Composition: Character can have a weapon
  }

  takeDamage(amount) {
    this.health -= amount; // update health
    console.log(`${this.name} takes ${amount} damage`);
  }

  equipWeapon(weapon) {
    this.weapon = weapon; // Set character's weapon to the given weapon
    console.log(`${this.name} equipped ${weapon.name}`);
  }

  attack() {
    if (this.weapon) {
      console.log(
        `${this.name} attacks with ${this.weapon.name} for ${this.weapon.damage} damage`,
      );
    } else {
      console.log(`${this.name} punches for 5 damage`);
    }
  }
}

const hero = new Character("Knight");
const sword = new Weapon("Sword", 10);

hero.equipWeapon(sword); // "Knight equipped Sword"
hero.takeDamage(20); // "Knight takes 20 damage"
console.log(hero.health); // 80

// =============================== 21 =======================================
/* 
  This is an online store product system. Products have prices, and physical
  products (like laptops) calculate shipping based on their weight. Digital
  products (like ebooks) would have free shipping. Your task is to complete 
  the missing methods in the product system:
  1: Complete the Product class in product.js:
  - Add method getPrice() that returns this.#price
  - Add method getDescription() that returns ${this.name} - $${this.#price}
  2: Complete the PhysicalProduct class in physicalProduct.js:
  - Add method calculateShipping() that:
  - Calculates this.weight * 0.5 (50 cents per pound)
  - Returns the shipping cost
*/
// Solution:
class Product {
  #price;

  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }

  /* This getter lets you access the private field like a normal 
  property: console.log(product.price). It’s idiomatic when you 
  want the field to behave like a property but still enforce encapsulation. */
  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > 0) {
      this.#price = newPrice;
    } else {
      console.log("Price must be positive");
    }
  }

  /* This is a regular method. You call it like a function:
    console.log(product.getPrice()); // looks like a method.
    It’s useful if you want to emphasize that you’re doing 
    something (like computing or formatting) rather than just 
    exposing a field. */
  getPrice() {
    return this.#price;
  }

  getDescription() {
    return `${this.name} - $${this.#price}`;
  }
}
class PhysicalProduct extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }

  getDescription() {
    return `${this.name} - $${this.price} (${this.weight} lbs)`;
  }

  calculateShipping() {
    return this.weight * 0.5; // no mutation like this.weight *= 0.5
  }
}

const book = new Product("Book", 20);
const laptop = new PhysicalProduct("Laptop", 1000, 5);

console.log(book.getDescription()); // "Book - $20"
console.log(laptop.getDescription()); // "Laptop - $1000  (5 lbs)"
console.log(`Shipping cost for laptop: $${laptop.calculateShipping()}`); // "Shipping cost for laptop: $2.5"
console.log(`Book price: $${book.getPrice()}`); // "Book price: $20"
console.log(`Laptop price: $${laptop.getPrice()}`); // "Laptop price: $1000"

// =============================== 22 =======================================
/* In this challenge, we have a university system with different types of people 
   (students, professors) who have different roles and behaviors.
  1. Complete Person class:
     - Add introduce() method returning "Hi, I'm ${name}"
  2. Complete Student class:
     - Override introduce() to return ${super.introduce()}, a ${this.major} student.
     Example: "Hi, I'm Alice, a Computer Science student".
     - Add addGrade(grade) method that takes a grade between 0 and 100
     - Validation: Check if grade is between 0 and 100
       If valid: Add to this.grades array
       If invalid: Log: "Grade must be between 0 and 100"
  3. Complete Professor class: Override introduce() to return “Prof. ${name} from 
     ${department}”. Example: “Prof. Smith from Computer Science”. 
*/
// Solution:
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}`;
  }
}
class Student2 extends Person2 {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
    this.grades = [];
  }

  getGPA() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / this.grades.length;
    return (average / 25).toFixed(2); // Convert to 4.0 scale
  }

  // Override introduce()
  introduce() {
    return `${super.introduce()}, a ${this.major} student`;
  }

  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grade must be between 0 and 100");
    }
  }
}

class Professor2 extends Person2 {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  // Professor-specific method
  teach(course) {
    return `${this.name} is teaching ${course}`;
  }

  // Override introduce()
  introduce() {
    return `Prof. ${this.name} from ${this.department}`;
  }
}

// Create people
const student22 = new Student2("Alice", 20, "Computer Science");
const prof22 = new Professor2("Dr. Johnson", 50, "Mathematics");

console.log(student22.introduce()); // "Hi, I'm Alice, a Computer Science student"
console.log(prof22.introduce()); // "Prof. Dr. Johnson from Mathematics"

student22.addGrade(85);
student22.addGrade(90);
student22.addGrade(95);
console.log(`${student22.name}'s GPA: ${student22.getGPA()}`); // ~3.6

student22.addGrade(105); // Should log: "Grade must be between 0 and 100"

// =============================== 22 =======================================
/* 
  In this challenge you have to add static tracking to the SmartDevice system
  so we can monitor how many devices are in our smart home.
  1. Add static property to SmartDevice class:
     Add: static totalDevices = 0; at the top of the class
  2. Increment the counter in constructor:
    In the SmartDevice constructor, add: SmartDevice.totalDevices++;
  3. Add static method to get count:
    Add: static getDeviceCount() { return SmartDevice.totalDevices; }
*/
// Solution:
class SmartDevice {
  // TODO: Add static property totalDevices = 0
  static totalDevices = 0;

  constructor(name) {
    this.name = name;
    this.isOn = false;
    SmartDevice.totalDevices++; // Increment the counter
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  getStatus() {
    return `${this.name} is ${this.isOn ? "ON" : "OFF"}`;
  }

  // Add static method
  static getDeviceCount() {
    return SmartDevice.totalDevices;
  }
}
// Test:
console.log(`Device count: ${SmartDevice.getDeviceCount()}`); // Device count: 0
const basicDevice1 = new SmartDevice("Smart Plug");
const basicDevice2 = new SmartDevice(" Thermostat");
console.log(`Total devices now: ${SmartDevice.getDeviceCount()}`); // Total devices now: 2

// ========================== Task 23 ===================================
/* 
  Подібно до літералів об’єктів, класи можуть включати геттери/сеттери,
  обчислені атрибути, поля тощо. Можете показати приклад для user.name,
  що реалізований за допомогою get/set. Крім того, додайте поле name
  та метод sayHi, що виводить в консоль "Привіт, Marianna!". Покажіть
  що важливою відмінністю полів класу є те, що вони задаються в окремих
  об’єктах, а не в User.prototype як то геттери/сеттери та методи класу.
*/

// solution:
class User {
  _name = "Marianna"; // задали поле класу

  constructor(name = "Marianna") {
    this.name = name; // викликає сеттер
  }
  // визначили getter
  get name() {
    return this._name; // повертає значення поля
  }
  // визначили setter
  set name(value) {
    if (value.length < 2) {
      console.log("Ім’я занадто коротке.");
      return;
    }
    this._name = value;
  }

  // визначили метод класу
  sayHi() {
    console.log(`Привіт, ${this.name}!`);
  }
}

// Tests:
let userModest = new User("Modest"); // constructor() викликається автоматично за допомогою new
console.log(userModest.name); // Modest

userDeviant = new User("L");
// Тут Marianna зберігається як дефолтне знач, але setter відкидає "L" як незадовільн умову
console.log(userDeviant.name); // Ім’я занадто коротке. Викликаємо як звичайну властивість об'єкта

new User().sayHi(); // Привіт, Marianna! Викликаємо як метод об'єкта (з дужками)

// покажемо, що важливою відмінністю полів класу є те, що вони задаються в окремих об’єктах, а не в User.prototype:
let userM = new User();
console.log(userM._name); // Marianna (значення поля береться в instance класу)
console.log(User.prototype._name); // undefined (такої властивості немає в прототипі бо то є поле а не метод)
console.log(User.prototype.sayHi); // function... (метод визначений в прототипі)

// ========================== Task 24 ===================================
/* 
  Створіть клас Validator, який надає статичні допоміжні методи для перевірок
  вводу електронної пошти та номеру телефону користувачів.
  Вимоги:
  1. Використайте regExp для перевірки формату електронної пошти та номеру телефону.
  2. Визначте статичний метод isValidEmail(email: string), який повертає true,
     якщо електронна адреса відповідає стандартному шаблону (something@domain.com),
     інакше false.
  3. Визначте статичний метод isValidPhone(phone: string), який повертає true
     якщо номер телефону складається рівно з 10 цифр, інакше false.
  4. Продемонструйте використання, статичних методів класу Validator.
*/
// Solution:
/*
 Особливістю статичних методів є те, що вони належать класу, а не його екземплярам.
 Це означає, що ви можете викликати їх без створення об'єкта класу. Вони ідеально 
 підходять для утилітарних функцій, які не потребують доступу до властивостей конкретного
 об'єкта. У цьому випадку, методи isValidEmail та isValidPhone є допоміжними функціями 
 для перевірки форматів вводу, і вони не залежать від стану конкретного екземпляра 
 Validator. Тому їх реалізація як статичних методів є логічним вибором.
*/
class Validator {
  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Простий шаблон для перевірки формату електронної пошти
  }

  static isValidPhone(phone) {
    return /^\d{10}$/.test(phone); // Перевіряє, що номер телефону складається рівно з 10 цифр
  }
}
// Tests:
const emailCheck = Validator.isValidEmail("test@example.com");
console.log(emailCheck); // true
const phoneCheck = Validator.isValidPhone("1234567890");
console.log(phoneCheck); // true
const invalidEmailCheck = Validator.isValidEmail("invalid-email");
console.log(invalidEmailCheck); // false
const invalidPhoneCheck = Validator.isValidPhone("12345");
console.log(invalidPhoneCheck); // false

// ========================== Task 25 ===================================
/*
  Implement the prepareForFlight() method in the Airplane class so that it:
  1. Prints a message indicating the airplane is preparing for flight.
  2. Starts the engine by calling its start() method.
  3. Deploys the wings’ flaps by calling their deployFlaps() method.
*/
// Solution:
class Engine {
  constructor(power) {
    this.power = power;
  }
  start() {
    console.log("Engine starting...");
  }
}
class Wings {
  constructor(span) {
    this.span = span;
  }
  deployFlaps() {
    console.log("Flaps deploying...");
  }
}
class Airplane {
  constructor(model) {
    this.model = model;
    this.engine = new Engine(1000); // використання компоненту двигуна з потужністю 1000
    this.wings = new Wings(50); // використання компоненту крил з розмахом 50 метрів
  }

  /*
    Це демонструє композицію: Airplane не здійснює сам запуск або визначення крил 
    — він делегує ці обов'язки своїм компонентам Engine та Wings.
  */
  prepareForFlight() {
    console.log(`${this.model} preparing for flight.`);
    this.engine.start(); // використовуємо Engine компонент
    this.wings.deployFlaps(); // використовуємо Wings компонент
  }
}

// ========================== Task 26 ===================================
/*
  Створіть клас Stack з основними операціями та окремими функціями, які 
  демонструють, як використовувати стек для вирішення практичних завдань.
  1. Отже спочатку створіть клас Stack з методами:
  - push(value): додати елемент зверху
  - pop(): видалити та повернути верхній елемент
  - top(): повернути верхній елемент без видалення
  - size(): повернути кількість елементів
  - empty(): повернути true, якщо стек порожній, інакше false
  2. Потім, напишіть окремо функцію яка приймає на вхід масив arr та використовує 
    методи класу Stack для його реверсу і повертає новий реверсний масив.
  3. Напишіть окремо функцію nse, яка отримує цілочисельний масив і повертає
    масив, що містить найближчий менший елемент кожного елемента (ліворуч).
    Якщо ліворуч віделемента немає меншого елемента, повертається -1. Використайте
    методи класу Stack, щоб вирішити цю підзадачу!
  3. Напишіть функцію isBalancedParentheses, яка отримує на вхід різні дужки: 
    круглі, квадратні, фігурні та повертає true, якщо кількість відкриваючих дрівнює
    кількості закриваючих дужок, а інакше false. Тобто, кожен символ дужки відкриття 
    повинен мати відповідний символ дужкизакриття. Використайте клас Stack, щоб 
    вирішити цю проблему! Приклади:
    Input: "({[]})" → Output: true
    Input: "({[)})]" → Output: false
  4. Напишіть функцію isPalindrome, яка отримує рядок і повертає значення true,
    якщо рядок є паліндромом, інакше false. Паліндром — це слово або фраза, яка
    читається однаково як у зворотному, так і в прямому порядку.
*/
// Solution:
class Stack {
  constructor() {
    this.elements = [];
  }

  push(value) {
    this.elements.push(value);
  }

  pop() {
    if (this.elements.length === 0) return undefined;
    return this.elements.pop();
  }

  top() {
    if (this.elements.length === 0) return undefined;
    return this.elements[this.elements.length - 1];
  }

  size() {
    return this.elements.length;
  }

  empty() {
    return this.elements.length === 0;
  }
}
// функція для реверсу масиву за допомогою класу Stack
function reverseArrayByStack(arr) {
  const stack = new Stack(); // створюємо новий екземпляр стеку

  // передаємо всі елементи в стек використовуючи метод push класу Stack
  for (const element of arr) {
    stack.push(element);
  }

  const result = []; // створюємо новий масив для збереження реверсованих елементів
  // поки стек не порожній, виводимо елементи з нього і додаємо їх до результуючого масиву
  while (!stack.empty()) {
    result.push(stack.pop());
  }

  return result;
}

// функція nse для знаходження найближчого меншого елемента зліва
function nse(arr) {
  const stack = new Stack(); // створюємо новий екземпляр стеку
  const result = []; // створюємо масив для збереження результатів

  // проходимо по кожному елементу вхідного масиву
  for (const element of arr) {
    // видаляємо елементи, які більші або рівні поточному елементу
    while (!stack.empty() && stack.top() >= element) {
      stack.pop();
    }

    // якщо стек порожній, то немає меншого елемента зліва, тому додаємо -1
    if (stack.empty()) {
      result.push(-1);
    } else {
      result.push(stack.top()); // додаємо найближчий менший елемент зліва
    }

    // додаємо поточний елемент для майбутніх порівнянь бо наступний
    // елемент не знав би про те, що було раніше
    stack.push(element);
  }

  return result;
}

// функція для перевірки збалансованості дужок варіант 1
/*
  1. Створюємо пустий стек для зберігання дужок;
  1. Проходимось по рядку дужок: символ за символом;
  2. Додаємо символ відкритих дужок ((, [, {) в стек;
  3. А коли виявляємо символ закритих дужок (), ], }), спочатку перевіряємо чи 
    стек порожній і чи верхній елемент стеку відрізняється від відповідного символу
    для відкриваючої дужки. Якщо так - повертаєм false;
  4. Якщо закриваючадужка підходить відкриваючій, то видаляєм відкриваючу дужку зі стеку;
  5. У кінці, якщо стек порожній - це значить усі відкриваючі дужки знайшли відповідні 
    закриваючі дужки - повертаємо true, інакше - повертаємо false.
*/
function isBalancedParentheses1(s) {
  const stack = new Stack(); // створюємо новий екземпляр стеку
  // проходимо по кожному символу в рядку
  for (const ch of s) {
    // якщо це відкриваюча дужка, додаємо її в стек
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
      // якщо це закриваюча дужка, перевіряємо верхній елемент стеку
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.empty()) return false; // якщо стек порожній, то немає відкриваючої дужки для цієї закриваючої
      // перевіряємо чи верхній елемент стеку - відкриваюча дужка підходить для цієї закриваючої
      const top = stack.top();
      if (
        (ch === ")" && top !== "(") ||
        (ch === "]" && top !== "[") ||
        (ch === "}" && top !== "{")
      ) {
        return false;
      }
      stack.pop(); // якщо закриваюча дужка підходить відкриваючій, то видаляємо відкриваючу дужку зі стеку
    }
  }

  return stack.empty(); // якщо в кінці стек порожній, то всі дужки збалансовані
}

// функція для перевірки збалансованості дужок варіант 2
function isBalancedParentheses2(s) {
  const stack = new Stack(); // створюємо новий екземпляр стеку
  // словник для відповідності закриваючих дужок їх відкриваючим аналогам
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // проходимо по кожному символу в рядку
  for (const char of s) {
    // якщо це відкрита дужка, додаємо її в стек
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
      // якщо це закрита дужка, перевіряємо верхній елемент стеку
    } else if ([")", "]", "}"].includes(char)) {
      // якщо стек порожній або верхній елемент не відповідає відкриваючій дужці, то рядок не збалансований
      if (stack.empty() || stack.pop() !== pairs[char]) {
        return false; // не збалансовано
      }
    }
  }

  return stack.empty(); // якщо після обробки всіх символів стек порожній, то рядок збалансований
}

// функція для перевірки чи є рядок паліндромом
function isPalindrome(s) {
  const stack = new Stack(); // створюємо новий екземпляр стеку

  // проходимо по кожному символу в рядку та додаємо його в стек
  for (const ch of s) {
    stack.push(ch);
  }

  // створюємо новий рядок у реверсованому порядку, витягуючи символи зі стеку
  let reversed = "";
  while (!stack.empty()) {
    reversed += stack.pop();
  }

  // порівнюємо оригінальний рядок з реверсованим
  return s === reversed;
}

// Tests:
let stack1 = new Stack();
console.log(stack1.empty()); // true
stack1.push(10);
stack1.push(20);
console.log(stack1.size()); // 2
console.log(stack1.top()); // 20
console.log(stack1.pop()); // 20
console.log(stack1.top()); // 10
console.log(stack1.empty()); // false

console.log(reverseArrayByStack([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

console.log(nse([4, 5, 2, 10, 8])); // [-1, 4, -1, 2, 2]
/*
  Because when we process 8, the nearest smaller element to its left 
  is not 10 (since 10 ≥ 8, it gets popped).
  The next candidate left in the stack is 2, which is smaller than 8.
  So the correct nearest smaller element is 2, not -1. Nearest smaller
  element to the left, not necessarily the immediate neighbor.
*/
console.log(nse([5, 4, 3, 2, 1])); // [-1, -1, -1, -1, -1]
console.log(nse([2, 1, 3, 4, 2])); // [-1, -1, -1, 3, -1 ]

console.log(isBalancedParentheses1("({[]})")); // true
console.log(isBalancedParentheses1("({[)})]")); // false
console.log(isBalancedParentheses1("())")); // false
console.log(isBalancedParentheses1("()")); // true
console.log(isBalancedParentheses2("({[]}")); // false
console.log(isBalancedParentheses2("([)]")); // false
console.log(isBalancedParentheses2("(){}[]")); // true

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("algorithm")); // false
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("deified")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("1221")); // true

// ========================== Task 27 ===================================
/*
  Створіть клас Stack2, який буде мати усі методи класу Stack, але з
  додатковими функціями:
  1. min - повертає мінімальне число в стеку на даний момент.
  2. max - повертає максимальне число в стеку на даний момент.
 Проте, для вирішення цієї задачі намагайтеся не перебирати всі елементи 
 стеку під час кожного додавання (push) чи видалення (pop) елементу з стеку.
*/
// Solution:
/*
  Ми можемо реалізувати min() та max() безпосередньо всередині методів min/max, але 
  тоді кожен виклик повинен буде сканувати всі елементи стеку, щоб знайти мінімум або
  максимум. Це означає часову складність O(n) замість O(1). Ось як це виглядає, якщо
  буде збережено все автономно:

  min() {
    if (this.empty()) return undefined;
    let minVal = this.elements[0];
    for (const el of this.elements) {
      if (el < minVal) minVal = el;
    }
    return minVal;
  }

  max() {
    if (this.empty()) return undefined;
    let maxVal = this.elements[0];
    for (const el of this.elements) {
      if (el > maxVal) maxVal = el;
    }
    return maxVal;
  }
  Але в завданні є додаткова умова: "...намагайтеся не перебирати всі елементи 
  стеку...". Це означає, що ми повинні підтримувати мінімум та максимум в O(1) 
  часі. Для цього ми можемо створити два додаткові стеки: один для мінімумів і
  один для максимумів. Коли ми додаємо новий елемент, ми порівнюємо його з 
  поточним мінімумом чи максимумом і оновлюємо відповідний стек. Коли ми видаляємо
  елемент, ми також порівнюємо його з поточним мінімумом або максимумом, і 
  видаляємо його з відповідного стеку. Таким чином, ми завжди матимемо доступ
  до поточного мінімуму чи максимуму за O(1) час.
*/
class Stack2 {
  constructor() {
    this.elements = [];
    this.minStack = []; // стек для збереження і утримання мінімальних значень
    this.maxStack = []; // стек для збереження і утримання максимальних значень
  }

  push(element) {
    this.elements.push(element);

    // підтримака мінімального значення в minStack
    if (this.minStack.length === 0) {
      this.minStack.push(element); // якщо стек мінімумів порожній, то поточний елемент є мінімумом
    } else {
      // порівнюємо поточний елемент з останнім мінімумом і додаємо менший з них в minStack
      this.minStack.push(
        Math.min(element, this.minStack[this.minStack.length - 1]),
      );
    }

    // підтримка максимального значення в maxStack
    if (this.maxStack.length === 0) {
      this.maxStack.push(element); // якщо стек максимумів порожній, то поточний елемент є максимумом
    } else {
      // порівнюємо поточний елемент з останнім максимумом і додаємо більший з них в maxStack
      this.maxStack.push(
        Math.max(element, this.maxStack[this.maxStack.length - 1]),
      );
    }
  }

  pop() {
    if (this.elements.length === 0) return undefined; // якщо стек порожній, повертаємо undefined
    this.minStack.pop(); // видаляємо верхній елемент з minStack, оскільки він відповідає верхньому елементу в elements
    this.maxStack.pop(); // видаляємо верхній елемент з maxStack, оскільки він відповідає верхньому елементу в elements
    return this.elements.pop(); // видаляємо і повертаємо верхній елемент з основного стеку
  }

  top() {
    return this.elements[this.elements.length - 1];
  }

  size() {
    return this.elements.length;
  }

  empty() {
    return this.elements.length === 0;
  }

  min() {
    if (this.minStack.length === 0) return undefined; // якщо стек мінімумів порожній, то немає мінімального значення
    return this.minStack[this.minStack.length - 1]; // повертаємо останній елемент в minStack який є поточним мінімумом
  }

  max() {
    if (this.maxStack.length === 0) return undefined; // якщо стек максимумів порожній, то немає максимального значення
    return this.maxStack[this.maxStack.length - 1]; // повертаємо останній елемент в maxStack який є поточним максимумом
  }
}
// Tests:
const stack2 = new Stack2();
stack2.push(3);
stack2.push(5);
console.log(stack2.min()); // 3
console.log(stack2.max()); // 5
stack2.push(7);
console.log(stack2.pop()); // 7
console.log(stack2.max()); // 5
stack2.push(2);
console.log(stack2.min()); // 2
console.log(stack2.pop()); // 2
console.log(stack2.min()); // 3

// ========================== Task 28 ===================================
/*
  Створіть клас Queue з основними операціями та окремими функціями, які 
  демонструють, як використовувати queue (чергу) для вирішення практичних
  завдань.
  1. Реалізуйте клас Queue з методами:
    - enqueue(value): додати елемент у кінець черги
    - dequeue(): видалити елемент з початку черги
    - front(): повернути перший елемент без видалення
    - rear(): повернути останній елемент без видалення
    - size(): повернути кількість елементів у черзі
  2. Напишіть окремо функцію reverse, яка приймає масив arr та використовує
  методи класу Queue для його реверсу і повертає новий реверсний масив.
  3. Напишіть функцію maxWindowSum, яка отримує масив цілих чисел (a) та розмір
  ковзаючого вікна (k), і яка повертає максимальну суму у ковзаючого вікна.
  4. Напишіть функцію hotPotato, яка отримує список імен та кількість кидків,
  імітуючи гру в «гарячу картоплю»: кидайте картоплю кілька разів (кожен кидок
  переміщує особу, яка сидить попереду, на задню), потім особа, яка сидить 
  попереду, вибуває. Повторюйте, доки не залишиться одна особа, і врешті 
  поверніть її ім'я.
*/
// Solution:
/*
  Черга є протилежністю стеку з точки зору порядку: вона дотримується 
  принципу FIFO (перший прийшов, перший вийшов). Це означає, що елементи
  додаються в кінці та видаляються з початку.
*/
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.shift();
  }

  front() {
    if (this.items.length === 0) return undefined;
    return this.items[0];
  }

  rear() {
    if (this.items.length === 0) return undefined;
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

// функція для реверсу масиву за допомогою класу Queue
function reverse(a) {
  const q = new Queue();

  // ставимо всі елементи в чергу використовуючи метод enqueue класу Queue
  for (const element of a) {
    q.enqueue(element);
  }

  // витягуємо елементи з черги і додаємо їх в результативний масив у зворотному порядку
  const result = []; // створюємо новий масив для збереження реверсованих елементів
  while (q.size() > 0) {
    const front = q.front(); // отримуємо перший елемент з черги (який є найстарішим)
    q.dequeue(); // видаляємо цей елемент з черги
    result.unshift(front); // додаємо його на початок результативного масиву, щоб отримати реверсований порядок
  }

  return result;
}

// функція для знаходження максимальної суми у ковзаючому вікні розміру k
/*
  Алгоритм вирішення задачі може бути наступним:
  1. Будемо використовувати чергу для зберігання поточного вікна розміром k;
  2. Будемо Відстежувати суму елементів у вікні та максимальну суму, знайдену на даний момент.
  3. Для кожного нового елемента:
  - ставимо його в чергу та додаємо до суми;
  - якщо розмір черги буде перевищувати k, тоді вилучаємо з черги найстаріший елемент і
    одночасно віднімаємо його від суми;
  - відстежуємо максимальну суму, знайдену на даний момент.
*/
function maxWindowSum(a, k) {
  const q = new Queue(); // створюємо нову чергу для зберігання поточного вікна
  let currentSum = 0; // змінна для відстеження суми поточного вікна
  let maxSum = -Infinity; // змінна для збереження максимальної суми можна і так let maxSum = null;

  for (const num of a) {
    q.enqueue(num); // додаємо новий елемент до черги
    currentSum += num; // додаємо його значеннядо поточної суми

    // якщо розмір черги перевищує k, видаляємо найстаріший елемент
    if (q.size() > k) {
      const removed = q.front(); // отримуємо значення найстарішого елементу з черги
      q.dequeue(); // видаляємо найстаріший елемент з черги
      currentSum -= removed; // віднімаємо його значення від поточної суми
    }
    /* якщо написати так то буде помилка, бо метод dequeue() не повертає видалений елемент, а просто видаляє його з черги.
      if (q.size() > k) {
        const removed = q.dequeue();
        currentSum -= removed;
      }
      ось тут ми в класі Queue не маємо слова return a просто видаляємо елемент (не повертаємо!)
      dequeue() {
        this.items.shift(); 
      }    
    */

    // оновлюємо максимальну суму, якщо поточна сума більша
    if (q.size() === k && currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// функція для гри в hotPotato
/*
  Для вирішення потрібно:
  1. Додати всі імена до черги;
  2. Далі слідкуємо, поки залишається більше однієї людини:
    - виконайте кидки: кожен кидок = візьміть людину попереду, перемістіть 
    її назад (enqueue(front); dequeue()).
    - після кидків видаліть людину попереду (dequeue()).
  3. Коли залишається лише одна людина, поверніть її ім'я (front()).
*/
function hotPotato(names, tosses) {
  const q = new Queue();

  for (const name of names) {
    q.enqueue(name); // додаємо усі імена в чергу
  }

  while (q.size() > 1) {
    // кидаємо визначену кількість разів
    for (let i = 0; i < tosses; i++) {
      const person = q.front(); // отримати ім'я персони спереду
      q.dequeue(); // видалити пеосону спереду
      q.enqueue(person); // перемістити ім'я персони назад
    }
    q.dequeue(); // видалити персону спереду
  }

  return q.front(); // повертаєм останнє ім'я персони
}

// Tests:
const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
console.log(queue1.front()); // 1
console.log(queue1.rear()); // 4
console.log(queue1.dequeue()); // 1
console.log(queue1.front()); // 2
console.log(queue1.size()); // 3

console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

console.log(maxWindowSum([2, 1, 5, 4, 3, 6], 3)); // 12 (5 + 4 + 3)
console.log(maxWindowSum([1, 2, 3, 4, 5], 2)); // 9 (4 + 5)
console.log(maxWindowSum([4, -2, 1, 3, -1, 2], 4)); // 6 (4 + (-2) + 1)
console.log(maxWindowSum([1, 2, 3], 1)); // 3 (максимальний елемент)

console.log(hotPotato(["Alice", "Bob", "Charlie", "Dave", "Eve"], 3)); // Alice
/*
  Toss 3 → Alice → Bob → Charlie → eliminated → [Dave,Eve,Alice,Bob]
  Toss 3 → Dave → Eve → Alice → eliminated → [Bob,Dave,Eve]
  Toss 3 → Bob → Dave → Eve → eliminated → [Bob,Dave]
  Toss 3 → Bob → Dave → Bob → eliminated → [Dave]  
  Result: Alice.
*/
console.log(hotPotato(["John", "Jane", "Jim", "Jill", "Jeff", "Jerry"], 5)); // Jill
// ========================== Task 29 ===================================
/*
  Переробіть клас Queue для підтримки циклічної черги та перейменуйте його
  на CircularQueue. Конструктор приймає ціле число — максимальний розмір
  циклічної черги. Коли черга заповнюється і в чергу ставиться новий елемент,
  найстаріший елемент (початковий) видаляється, щоб звільнити місце. Оновіть
  при потребі інші методи для підтримки такої циклічності.
*/

// Solution:
/*
  Сутністю рішення є таке: коли черга заповнена і ви додаєте до черги новий
  елемент, найстаріший елемент (початковий) автоматично видаляється, щоб звільнити
  місце. Реалізуємо це так:
*/
class CircularQueue {
  constructor(size) {
    this.items = [];
    this.maxSize = size;
  }

  enqueue(item) {
    // якщо черга заповнена, видаляємо найстаріший елемент (той що спереду)
    if (this.items.length === this.maxSize) {
      this.dequeue();
    }
    this.items.push(item); // додаєм новий елемент в чергу
  }

  dequeue() {
    this.items.shift();
  }

  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

// Tests:
const queue2 = new CircularQueue(3);
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
queue2.enqueue(4);
// Enqueue 1,2,3 → [1,2,3] than Enqueue 4 → queue full, remove 1 → [2,3,4]
console.log(queue2.front()); // 2
