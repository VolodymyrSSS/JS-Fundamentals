console.log('Topic: Objects part two');

// ====================== Task 01 ===================================
// UA: Поясніть концептуальне поняття 'прототип' і 'успадкованість'
//     у JavaScript використовуючи лише функціональний підхід (не класовий).
//     Отже, у нас є дві функції-конструктори: Animal і Dog. Функція-конструктор
//     Animal приймає параметр name і призначає його властивості name
//     новоствореного об’єкта за допомогою this.name. Ми додаємо метод greet
//     до Animal.prototype, який буде спільний для всіх екземплярів, створених
//     за допомогою функції конструктора Animal. Функція конструктора Dog
//     розширює функцію конструктора Animal за допомогою Animal.call(this, name)
//     для успадкування властивостей від конструктора Animal.
//     Вашe завдання:
//     - встановити прототипний ланцюг для Dog;
//     - додати метод bark до прототипу дочірнього елемента, вивести в консолі
//     вираз 'Гав, гав..';
//     - створити екземпляри Animal і Dog: const animal, const dog;
//     - використати успадкований метод для animal і dog:
//     екземпляр animal використовує метод greet, успадкований від Animal.prototype;
//     екземпляр dog використовує як метод greet, успадкований від Animal.prototype,
//     так і метод bark, визначений у Dog.prototype (спеціальний метод для дочірнього).
// EN: Explain what is the Prototypes and Prototypal Inheritance concepts
//     in JavaScript using only functional approach (not Class). So,
//     we have two constructor functions: Animal and Dog. The Animal constructor
//     function takes a name parameter and assigns it to the name property
//     of the newly created object using this.name. We add a greet method
//     to the Animal.prototype, which will be shared by all instances created
//     from the Animal constructor function. The Dog constructor function extends
//     the Animal constructor function using Animal.call(this, name) to inherit
//     properties from the Animal constructor.
//     Your tasks are:
//     - establish the prototype chain for the Dog;
//     - add method bark to the child's prototype - in console: 'Woof, woof..';
//     - create instances of Animal and Dog: const animal, const dog;
//     - use inherited method for animal and dog:
//       the animal instance uses the greet method inherited from Animal.prototype;
//       the dog instance uses both the greet method inherited from Animal.prototype
//       and the bark method defined in Dog.prototype (specific method for the child)

// parent constructor function
// function Animal(name) {
// 	this.name = name;
// }

// adding a methods to the perent's prototype
// Animal.prototype.greet = function () {
// 	console.log(`Hello, my name is ${this.name}`);
// };

// then child constructor function
// function Dog(name, breed) {
// 	Animal.call(this, name);
// 	this.breed = breed;
// }

// solution:
/* Прототип, це є об'єкт від якого інші об'єкти успадковують свої властивості 
   і методи. Коли ми хочемо якусь властивість або метод використати то JS
   спочатку перевіряє чи сам об'єкт має таку властивість/метод. І якщо не має, 
   то йде по ланцюжку в його прототип і якщо знову не має то йде далі в прототип
   прототипу і так далі доки не знайде властивість/метод або не досягне кінця
   ланцюжка.
   Отже, створюючи новий об'єкт, потрібно визначити прототипний ланцюжок 
   і задати його в Dog.prototype. Цей ланщюжок поєднає прототип екземпляра Dog із
   прототипом Animal.prototype, встановивши успадкованість властивостей і методів. 
*/
// establishing the prototype chain and constructor:
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// adding a methods to the childs's prototype:
// Dog.prototype.bark = function () {
// 	console.log('Woof, woof..');
// };

// create instances:
// const animal = new Animal('Max');
// const dog = new Dog('Buddy', 'Labrador');

// // using the inherited methods:
// animal.greet(); // Hello, my name is Max
// dog.greet(); // Hello, my name is Buddy

// using the specific method for the child:
// dog.bark(); // Woof, woof..
/* Prototypes and prototypal inheritance are fundamental concepts 
   in JavaScript. They allow objects to inherit properties and methods  
   from other objects, enabling code reuse and establishing relationships 
  between objects.
*/
// ====================================================================
