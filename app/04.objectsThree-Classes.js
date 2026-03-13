console.log("Topic: Objects Part Three - Classes");

// ========================== Task 01 ===================================
// UA: Подібно до літералів об’єктів, класи можуть включати геттери/сеттери,
//     обчислені атрибути, поля тощо. Можете показати приклад для user.name,
//     що реалізований за допомогою get/set. Крім того, додайте поле name
//     та метод sayHi, що виводить в консоль "Привіт, Marianna!". Покажіть
//     що важливою відмінністю полів класу є те, що вони задаються в окремих
//     об’єктах, а не в User.prototype як то геттери/сеттери та методи класу.
// EN: Like object literals, classes can include getters/setters, computed
//     attributes, fields, etc. You can show an example for user.name that
//     is implemented using get/set. Also, add a name field and a sayHi method
//     that prints "Hello, Marianna!" to the console. Show that an important
//     difference between class fields is that they are defined in individual
//     objects, not in User.prototype like getters/setters and class methods.

// solution via class and getter/setter
class User {
  _name = "Marianna"; // задали поле класу

  constructor(name = "Marianna") {
    // викликає сеттер
    this.name = name;
  }
  // визначили getter
  get name() {
    return this._name;
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

// перевірка роботи
let userModest = new User("Modest"); // constructor() викликається автоматично за допомогою new
console.log(userModest.name); // Modest

userDeviant = new User("L");
// Тут Marianna зберігається як дефолтне знач, але setter відкидає "L" як незадовільн умову
console.log(userDeviant.name); // Ім’я занадто коротке.

new User().sayHi(); // Привіт, Marianna!

// покажемо, що важливою відмінністю полів класу є те, що вони задаються в окремих об’єктах, а не в User.prototype:
let userM = new User();
console.log(userM._name); // Marianna (значення поля береться в instance класу)
console.log(User.prototype._name); // undefined (такої властивості немає в прототипі бо то є поле а не метод)
console.log(User.prototype.sayHi); // function... (метод визначений в прототипі)

// ========================== Task 02 ===================================
// UA: Як ми знаємо, всі обʼєкти зазвичай успадковуються від Object.prototype
//     й отримують доступ до загальних методів обʼєкта. Це показано на
//     прикладі нижче з класом RabbitOne. Але якщо ми пропишемо створення класу
//     явно, типу: class RabbitTwo exstends Object, то результатом використання
//     методу від Object.prototype буде помилка. Поясніть різницю між ними
//     і як виправити помилку?
// EN: As we know, all objects traditionally inherit from Object.prototype
//     and support access to common object methods. This is shown in the example
//     below with the RabbitOne class. But if we write the class creation
//     explicitly, type: class RabbitTwo extends Object, the result of using
//     the method from Object.prototype will be an error. Explain the difference
//     between them and how to fix the error?

class RabbitOne {
  constructor(name) {
    this.name = name;
  }
}
// Створюється новий об’єкт та constructor запускається з даним аргументом і присвоює його в this.name
let rabbitOne = new RabbitOne("Coco");
// можемо перевірити наявність власної властивості методом
// hasOwnProperty від Object.prototype ось так:
console.log(rabbitOne.hasOwnProperty("name")); // true

class RabbitTwo extends Object {
  constructor(name) {
    this.name = name;
  }
}
let rabbitTwo = new RabbitTwo("Sari");
// console.log(rabbitTwo.hasOwnProperty("name")); // ReferenceError

// solution via use super method:

/* У конструкторі класу, що успадковується потрібно визначити
   метод super, інакше "this" буде не визначено. Крім того, цей
   метод обовязково потрібно визначити перед визначенням this,
   ось так:
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

// ======================================================================
