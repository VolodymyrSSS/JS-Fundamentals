console.log('Topic: Objects Two');


// ============================Task 01================================================
// UA: Створити функцію-конструктор Tune(title, artist) для створення об'єктів з приватними
//     властивостями title, artist та публічним методом concat. Метод повинен повертати 
//     конкатенацію значень властивостей title та artist. Створити кілька об'єктів. Викликати
//     їх метод concat.
// EN: Create a constructor function Tune(title, artist) to create objects with private 
//     properties title, artist and a public method concat. The method should return a 
//     concatenation of the values of the properties title and artist. Create several objects. 
//     Call their concat method.

// solution via creating new instances and concat method
function Tune(title, artist) {
	this.title = title;
	this.artist = artist;

	this.concat = function () {
		return this.title + this.artist;
	};
}
      
let assassin = new Tune('Leon', 'Killer');
let sister = new Tune('Sister', 'Carry');
let tammi = new Tune('Tam', 'Tadam');

console.log(assassin.concat()); // LeonKiller
console.log(sister.concat()); // SisterCarry
console.log(tammi.concat()); // TamTadam

// solution via WeakMap and set/get
// const Tune = (function () {
// 	// constructor
// 	const priv = new WeakMap();

// 	function Tune(title, artist) {
// 		const privateMemebers = { title, artist };

// 		priv.set(this, privateMemebers);
// 	}

// 	// method

// 	Tune.prototype.concat = function () {
// 		return `${priv.get(this).title} ${priv.get(this).artist}`;
// 	};

// 	return Tune;
// })();
// ===================================================================================
      
// ============================Task 02================================================
// UA: Поясніть концептуальне поняття 'прототип' і 'успадкованість' у JavaScript за 
//     допомогою лише функціонального підходу (не класового).
//     Є дві функції-конструктори: Animal і Dog. Функція-конструктор Animal отримує 
//     параметр name. Ми додаємо метод greet до Animal.prototype, який буде загальним 
//     для всіх екземплярів, створених за допомогою функції конструктора Animal. Функція 
//     конструктор Dog розширює функцію конструктора Animal.
//     Ваше завдання:
//     - встановити прототипний ланцюг для Dog;
//     - додати метод bark до прототипу дочірнього елемента, що виводить в консолі
//     вираз 'Гав, гав..';
//     - створити екземпляри Animal і Dog;
//     - використати успадкований метод greet для animal і dog;
//     - використати спеціальний метод bark для dog.
// EN: Explain the conceptual notion of 'prototype' and 'inheritance' in JavaScript using 
//     only a functional approach (not a class approach).
//     There are two constructor functions: Animal and Dog. The constructor function Animal 
//     takes a name parameter. We add a greet method to Animal.prototype, which will be common 
//     to all instances created using the Animal constructor function. The Dog constructor 
//     function extends the Animal constructor function.
//     Your task:
//     - establish the prototype chain for the Dog;
//     - add method bark to the child's prototype - in console: 'Woof, woof..';
//     - create instances of Animal and Dog;
//     - use the inherited greet method for animal and dog;
//     - use the special bark method for dog.

function Animal(name) {
	this.name = name;
}

function Dog(name, breed) {
	Animal.call(this, name);
	this.breed = breed;
}

// додавання методу в батьківьский прототип
Animal.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name}`);
};

// solution via Object.create
/* Прототип — це об'єкт, від якого інші об'єкти успадковують властивості та методи. Коли 
   здійснюється доступ до властивості або методу об'єкта, JavaScript спочатку перевіряє,
   чи має сам об'єкт цю властивість. Якщо ні, процес рухається по ланцюжку прототипів та
   шукає властивість в його прототипі, потім в прототипі прототипу і так далі, доки не
   знайде властивість або не досягне кінця ланцюжка.
   Прототипи та прототипне успадкування – це фундаментальні концепції в JavaScript. Вони 
   дозволяють об'єктам успадковувати властивості та методи від інших об'єктів, що дозволяє 
   повторне використання коду та встановлення зв'язків між об'єктами.
   Отже, при створенні нового об'єкту dog ми повинні визначити його прототип Dog.prototype
   та повязати його з батьківським прототипом Animal.prototype.
*/
// встановлення ланцюжка прототипів для дочірного прототипу
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// додавання cпеціального методу в дочірний прототип
Dog.prototype.bark = function () {
	console.log('Woof, woof..');
};

// створюємо зразки об'єктів
const animal = new Animal('Max');
const dog = new Dog('Buddy', 'Labrador');
// успадкування методу з батьківського прототипу
animal.greet(); // Hello, my name is Max
dog.greet(); // Hello, my name is Buddy

// використання власного спеціального методу дочірнього прототипу
dog.bark(); // Woof, woof..
// ===================================================================================

// ============================Task 03================================================
// UA: Створіть функцію-конструктор Book(title, author). Додайте методи: getTitle, 
//     getAuthor, getFullBookName та спробуйте додати статичний метод getGreeting.
//     Створіть функцію-конструктор BookData(title, author, category, publishingHouse).
//     Передайте значення title, author функції-конструктору Book. Додайте три методи: 
//     getCategory, getPublishingHouse та метод getBookData, що повертає рядок символів, 
//     які є значеннями усіх отриманих параметрів. Для реалізації успадкованості, 
//     використовуйте:
//     1. Object.create() або Object.setPrototypeOf()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add methods: getTitle, getAuthor, getFullBookName and try to add static method 
//     getGreeting. Create function-constructor BookData(title, author, category, 
//     publishingHouse). Pass the value of title, author to the function-constructor Book.
//     Add three methods: getCategory, getPublishingHouse and method getBookData - returns 
//     the string with values of all parameters. Implement inheritance using:
//     1. Object.create() or Object.setPrototypeOf()
//     2. Class

const Book = (function () {
	// constructor
	function Book(title, author) {
		this.title = title;
		this.author = author;
	}
	// methods
	Book.prototype.getTitle = function () {
		return this.title;
	};
	Book.prototype.getAuthor = function () {
		return this.author;
	};
	Book.prototype.getFullBookName = function () {
		return this.title + ' автор: ' + this.author;
	};
	Book.getGreeting = function () {
		return 'Статичний метод не викликається на екземплярі класу, а тільки на імені самого класу';
	};
	return Book;
})();

// варіант-1.1 коли 'зашили' що Book буде прототипом
const BookData = (function () {
	// constructor
	function BookData(title, author, category, publishingHouse) {
		Book.call(this, title, author); // тут зашили що Book буде прототипом
		this.category = category;
		this.publishingHouse = publishingHouse;
	}
	// встановлюємо потрібний прототип щоб отримати методи від нього:
	// BookData.prototype = Object.create(Book.prototype); // тут зашили що Book буде прототипом
	// або так:
	Object.setPrototypeOf(BookData.prototype, Book.prototype); // тут зашили що Book буде прототипом

	// own methods
	BookData.prototype.getCategory = function () {
		return this.category;
	};
	BookData.prototype.getPublishingHouse = function () {
		return this.publishingHouse;
	};
	BookData.prototype.getBookData = function () {
		return `${this.title} від автора ${this.author} (категорія: ${this.category}), видавництва ${this.publishingHouse};`;
	};
	return BookData;
})();

// // варіант-1.2 коли можна змінювати прототип
// const BookData = (function (_super) {
// 	// constructor
// 	function BookData(title, author, category, publishingHouse) {
// 		_super.call(this, title, author); // тут зашили що Book буде прототипом
// 		this.category = category;
// 		this.publishingHouse = publishingHouse;
// 	}
// 	// встановлюємо потрібний прототип щоб отримати методи від нього:
// 	// BookData.prototype = Object.create(_super.prototype); // тут зашили що Book буде прототипом
// 	// або так:
// 	Object.setPrototypeOf(BookData.prototype, _super.prototype); // тут зашили що Book буде прототипом

// 	// own methods
// 	BookData.prototype.getCategory = function () {
// 		return this.category;
// 	};
// 	BookData.prototype.getPublishingHouse = function () {
// 		return this.publishingHouse;
// 	};
// 	BookData.prototype.getBookData = function () {
// 		return `${this.title} від автора ${this.author} (категорія: ${this.category}), видавництва ${this.publishingHouse};`;
// 	};
// 	return BookData;
// })(Book); // тут вказуємо вибраний прототип

// class Book {
// 	constructor(title, author) {
// 		this.title = title;
// 		this.author = author;
// 	}
// 	getTitle() {
// 		return this.title;
// 	}
// 	getAuthor() {
// 		return this.author;
// 	}
// 	getFullBookName() {
// 		return this.title + ' автор: ' + this.author;
// 	}
// 	static getGreeting() {
// 		return 'Статичний метод не викликається на екземплярі класу, а тільки на імені самого класу';
// 	}
// }

// перевірка роботи
const book1 = new Book('Green Mile', 'Steven King');
const book2 = new Book('The Mysterious Island', 'Jules Verne');
console.log(book1);
console.log(book2);

// Виклик методів:
console.log(book1.getTitle());
console.log(book2.getFullBookName());

// Виклик статичного методу можна зробити так:
console.log(Book.getGreeting());
// або так:
console.log(book2.constructor.getGreeting());

// class BookData extends Book {
// 	constructor(title, author, category, publishingHouse) {
// 		super(title, author);

// 		this.getFullBookName = super.getFullBookName;

// 		this.category = category;
// 		this.publishingHouse = publishingHouse;
// 	}
// 	getCategory() {
// 		return this.category;
// 	}
// 	getPublishingHouse() {
// 		return this.publishingHouse;
// 	}
// 	getBookData() {
// 		return `${this.title} від автора ${this.author} (категорія: ${this.category}), видавництва ${this.publishingHouse};`;
// 	}
// }

// перевірка роботи
const book3 = new BookData(
	'Headhunters',
	'Jo Nesbo',
	'Thriller/Mystery',
	'Свічадо'
);
console.log(book3);
console.log(book3.getTitle());
console.log(book3.getAuthor());
console.log(book3.getCategory());
console.log(book3.getPublishingHouse());
console.log(book3.getFullBookName());
console.log(book3.getBookData());
// ===================================================================================

// ============================Task 04================================================
// UА: Створіть клас Shape із статичною властивістю count. Ініціалізуйте цій властивості 0.
//     В конструкторі класу збільшуйте count на 1. Створіть похідний клас Rectangle. 
//     Додайте метод для обчислення площі прямокутника. Результат обчислення повинен 
//     мати не більше ніж 2 знаки після коми. Створіть декілька об'єктів. Виведіть в 
//     консоль число створених об'єктів.
// EN: Create class Shape with static property count. Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor. Create derived class Rectangle. 
//     Add method to calculate area. The result of calculation must have no more than 2 
//     digits after the decimal point. Create a few objects. Display the number of created 
//     objects in the console.

class Shape {
	static count = 0;

	constructor() {
		Shape.count++;
	}
}

const s1 = new Shape();
const s2 = new Shape();
console.log(Shape.count);

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	calculateArea() {
		return +(this.width * this.height).toFixed(2);
	}
}

// перевірка роботи
const rect1 = new Rectangle(15, 24);
console.log(rect1);
console.log(rect1.calculateArea());
console.log(Shape.count);

const rect2 = new Rectangle(22.4, 12.7);
console.log(rect2);
console.log(rect2.calculateArea());
console.log(Shape.count);
// ===================================================================================

// ============================Task 05================================================
// UA: Створити функцію-конструктор Person() для створення нових об'єктів. Додайте два 
//     методи: setFirstName() та setLastName(). Методи повинні викликатись в ланцюгу, 
//     наприклад obj.setFirstName(...).setLastName(...) Зробіть це саме за допомогою класів.
// EN: Create function-constructor Person() for creating objects. Add two methods: 
//     setFirstName() and setLastName(). These methods should be called in chain like this 
//     obj.setFirstName(...).setLastName(...) Do exactly that with the help of classes.

// using function-constructor
function Person() {}

Person.prototype.setFirstName = function (firstName) {
	this.firstName = firstName;
	return this;
};

Person.prototype.setLastName = function (lastName) {
	this.lastName = lastName;
	return this;
};

// using class
class Person {
	setFirstName(firstName) {
		this.firstName = firstName;
		return this;
	}
	setLastName(lastName) {
		this.lastName = lastName;
		return this;
	}
}

const person1 = new Person();
console.log(person1.setFirstName('John').setLastName('Doe'));
console.log(person1.firstName);
console.log(person1.lastName);

const person2 = new Person();
console.log(person2.setFirstName('Modest').setLastName('Opakhan'));
console.log(person2.firstName);
console.log(person2.lastName);
// ===================================================================================

// ============================Task 06================================================
// UA: Створіть об'єкт data та потім задати конфігурацію його властивостей:
//     1. id: значення = 1, можна змінювати,
//     2. type: значення = 'primary', можливе для перерахування,
//     3. category: getter повертає значення поля _category, setter встановлює значення 
//     поля _category, можливе для перерахування, можливе для конфігурування полів.
//     Використовуючи for...in виведіть властивості у консоль
// EN: Create an object data and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category, enumerable, configurable.
//     Using for-in display properties of an object in the console.

// // варіант з Object.defineProperty()
// const data = {};

// Object.defineProperty(data, 'id', {
// 	value: 1,
// 	writable: true,
// });

// Object.defineProperty(data, 'type', {
// 	value: 'primary',
// 	enumerable: true,
// });

// Object.defineProperty(data, 'category', {
// 	get: function () {
// 		return this._category;
// 	},
// 	set: function (value) {
// 		this._category = value;
// 	},
// 	enumerable: true,
// 	configurable: true,
// });

// // варіант з Object.defineProperties()
// Object.defineProperties(data, {
// 	id: {
// 		value: 1,
// 		writable: true,
// 	},
// 	type: {
// 		value: 'primary',
// 		enumerable: true,
// 	},
// 	category: {
// 		get: function () {
// 			return this._category;
// 		},
// 		set: function (value) {
// 			this._category = value;
// 		},
// 		enumerable: true,
// 		configurable: true,
// 	},
// });

// // перевірка роботи
// data.category = '123';

// for (const field in data) {
// 	console.log(field);
// }

// ============================Task ??===================================
// UA: В нас є клас Car, в конструкторі якого задано властивості для
//     створення на його основі 3х об'єктів (інстанси автомобілів). Якщо
//     вивести в консоль усі створені об'єкти, то вони будуть відображати
//     усі поля та їх значення, якщо використати табличну консоль, то в
//     першій колонці будемо мати індкси цих інстансів, а в інших їх
//     поля та їх значення. Як виправити, щоб відобразити в таблиці
//     консолі інстанси без їх індексних номерів.
// EN: We have a Car class, in the constructor of which properties are set
//     for creating 3 objects (instances of cars) based on it. If you display
//     all the created objects in the console, they will display all the
//     fields and their values, if you use the tabular console, then in the
//     first column we will have the indexes of these instances, and in the
//     others their fields and their values. How to fix to display instances
//     without their index numbers in the console table.

// class Car {
//    constructor(make, model) {
//       this.make = make;
// 		this.model = model;
// 	}
// }
// const hisCar = new Car('Maserati', 'A6');
// const yourCar = new Car('Audi', 'A4');
// const myCar = new Car('BMV', 'X5');

// solution via console.table({}):
// console.log(hisCar, yourCar, myCar); // Car {make: 'Maserati', model: 'A6'}, Car {make: 'Audi',...
// console.clear();
// console.table([hisCar, yourCar, myCar]); // in column 'index' will be 0, 1, 2
// console.clear();
// console.table({ hisCar, yourCar, myCar }); // in column 'index' will be hisCar, yourCar, myCar
// ======================================================================

// ============================Task ??===================================
// UA: У нас є масив, який містить елементи, що повторяються. Напишіть код,
//     який буде отримувати  масив, що містить тільки унікальні значення, але
//     щоб ці значення були також і ключами об'єкту.
//     Виведіть у консолі масив, унікальних значень.
// EN: We have an array that contains repeating elements. Write code that will
//     receive an array containing only unique values, but so that these values
//     are also the keys of the object.
//     Display an array of unique values in the console.

// const arr = ['sony', 'hp', 'apple', 'sony', 'dell', 'sony', 'hp', 'dell', 'hp'];

// solution via forEach and Object.keys methods:
// Create an empty object to store unique values as keys
// const uniqueBrands = {};

// Loop through each element in the input array
// arr.forEach((brand) => {
// 	// set each element as a key in the uniqueBrands object with a value of true
// 	// this effectively removes duplicate elements because object keys are unique
// 	uniqueBrands[brand] = true;
// });
// Get an array of the keys (unique values) from the uniqueBrands object
// const result = Object.keys(uniqueBrands);
// console.log(result); // ['sony', 'hp', 'apple', 'dell']

// the solution via func creation:
// const uniqueBrands = (list) => {
// 	const uniqueBrands = {};

// 	list.forEach((brand) => {
// 		uniqueBrands[brand] = true;
// 	});

// 	return Object.keys(uniqueBrands);
// };
// console.log(uniqueBrands(brands)); // ['sony', 'hp', 'apple', 'dell']

// solution via reduce method:
// const uniqueBrands = arr.reduce((accumulator, brand) => {
// 	if (!accumulator.includes(brand)) {
// 		accumulator.push(brand);
// 	}
// 	return accumulator;
// 	// initialize an empty array as the accumulator
// }, []);
// ======================================================================

// Task 09 TodoList Application
// UA: Створіть класи 'Завдання' и 'Список завдань' з таким функціоналом:
//     1. Додати завдання в список;
//     2. Отримати та вивести в консоль список усіх завдань
//        у форматі "[new] Task 1", "[completed] Task2";
//     3. Помітити вказане завдання як виконано;
//     4. Видалити завдання зі списку;
//     5. Відсортувати завдання по алфавіту на збільшення чи на зменшення;
//     6. Видалити усі завдання зі списку;
// EN: Create classes 'task' and 'task list' with the following features:
//     1. Add task to the list
//     2. Get and display the list of all tasks in the console
//        using the following format "[new] Task 1", "[completed] Task2"
//     3. Check task as a completed task
//     4. Remove task from the list of tasks.
//     5. Sort tasks alphabetically in asc or desc order
//     6. Clear the list of tasks.

// class Task {
// 	constructor(action) {
// 		this.action = action;
// 		// this.state = state;
// 	}

// 	// переписати/підняти метод з прототипу
// 	toString() {
// 		return `[${this.state}] ${this.action}`;
// 	}

// 	setCompleted() {
// 		this.state = 'completed';
// 	}
// }

// Task.prototype.state = 'new';

// class TaskList {
// 	addTask() {}

// 	printTask() {}

// 	setCompleted(task) {
// 		task.setCompleted();
// 	}

// 	removeTask(task) {}

// 	sortTasks() {}

// 	clearTasks() {}
// }

// const task1 = new Task('Create');
// console.log(task1);
// console.log(task1.toString());

// Task 10 Transform Array into Map
// UА: Претворити масив в меп по зразку
// EN: Transform array into map according to pattern
// const entries = [
//     { key:'FIRST_KEY', value: 'FIRST_KEY_VALUE'},
//     { key:'FIRST_KEY', value: 'FIRST_KEY_NOT_SAME_VALUE'},
//     { key:'SECOND_KEY', value:'value1'},
//     { key:'SECOND_KEY', value:'value4'},
//     { key:'THIRD_KEY', value: 'value6'},
//     { key:'FOURTH_KEY', value:'value1'},
// ];

// ==>

// Map {
//     'FIRST_KEY': ['FIRST_KEY_VALUE', 'FIRST_KEY_NOT_SAME_VALUE'],
//     'SECOND_KEY': ['value1', 'value4'],
//     'THIRD_KEY': 'value6',
//     'FOURTH_KEY': 'value1'
// }

// const entries = [
// 	{ key: 'FIRST_KEY', value: 'FIRST_KEY_VALUE' },
// 	{ key: 'FIRST_KEY', value: 'FIRST_KEY_NOT_SAME_VALUE' },
// 	{ key: 'SECOND_KEY', value: 'value1' },
// 	{ key: 'SECOND_KEY', value: 'value4' },
// 	{ key: 'THIRD_KEY', value: 'value6' },
// 	{ key: 'FOURTH_KEY', value: 'value1' },
// ];

// const resultMap = entries.reduce();
// console.log(set);
