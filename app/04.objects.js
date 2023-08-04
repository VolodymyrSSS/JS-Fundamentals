console.log('Topic: Objects');

// Task 01
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Method should return the concatenation of values of properties title and artist.
//     Create a few objects. Call their method concat().

// function Tune(title, artist) {
// 	this.title = title;
// 	this.artist = artist;

// 	this.concat = function () {
// 		return this.title + this.artist;
// 	};
// }

// let john1 = new Tune('Leon', 'Killer');
// let john2 = new Tune('Sister', 'Carry');
// let john3 = new Tune('Tam', 'Tadam');
// console.log(john1.concat()); // LeonKiller
// console.log(john2.concat()); // SisterCarry
// console.log(john3.concat()); // TamTadam

// Task 02
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Method should return the concatenation of values of properties title and artist.
//     Create a few objects. Call their method concat().

// class

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

// Task 03
// UA: Розширити прототип об'єкта String методом exclaim(), звичайно, якщо його немає в прототипі.
//     Метод повинен додавати знак оклику в рядок символів скільки потрібно раз та виводити результат у консоль.
// EN: Extend the prototype of object String with the method exclaim(), if it doesn't exist.
//     Method should add exclaimation mark to the string and display it in the console.

// // Попередження, у разі якщо ми переписуємо існуючий метод
// if (String.prototype.exclaim) {
// 	console.warn(
// 		'Overriding existing Array.prototype.exclaim. ' +
// 			"Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
// 	);
// }
// // додаємо .exclaim-метод до прототипу Strings щоб можна було його викликати з будь-яким рядком символів
// String.prototype.exclaim = function (n = 1) {
// 	// if an empty, return
// 	if (!this.valueOf()) {
// 		return false;
// 	}
// 	console.log('==відпрацював метод з прототипу==');
// 	console.log(this.valueOf() + '!'.repeat(n));
// };
// // Ховаємо метод від проходження його циклом for...in
// Object.defineProperty(String.prototype, 'exclaim', { enumerable: false });

// // Перевіряємо роботу методу
// 'якийсьРядокСловоВиразу'.exclaim();
// 'щеОдинСловоВираз'.exclaim(2);
// const str = 'abcdef';
// str.exclaim(3);

// Task 04
// UA: Створіть функцію-конструктор Book(title, author).
//     Додайте методи: getTitle, getAuthor, getFullBookName та спробуйте додати статичний метод getGreeting.
//     Створіть функцію-конструктор BookData(title, author, category, publishingHouse).
//     Передайте значення title, author функції-конструктору Book.
//     Додайте три методи: getCategory, getPublishingHouse та метод getBookData, що повертає рядок символів, які є значеннями усіх отриманих параметрів.
//     Для реалізації успадкованості, використовуйте:
//     1. Object.create() або Object.setPrototypeOf()
//     2. Class
// EN: Create function-constructor Book(title, author).
//     Add methods: getTitle, getAuthor, getFullBookName and try to add static method getGreeting.
//     Create function-constructor BookData(title, author, category, publishingHouse).
//     Pass the value of title, author to the function-constructor Book.
//     Add three methods: getCategory, getPublishingHouse and method getBookData - returns the string with values of all parameters.
//     Implement inheritance using:
//     1. Object.create() or Object.setPrototypeOf()
//     2. Class

// const Book = (function () {
// 	// constructor
// 	function Book(title, author) {
// 		this.title = title;
// 		this.author = author;
// 	}
// 	// methods
// 	Book.prototype.getTitle = function () {
// 		return this.title;
// 	};
// 	Book.prototype.getAuthor = function () {
// 		return this.author;
// 	};
// 	Book.prototype.getFullBookName = function () {
// 		return this.title + ' автор: ' + this.author;
// 	};
// 	Book.getGreeting = function () {
// 		return 'Статичний метод не викликається на екземплярі класу, а тільки на імені самого класу';
// 	};
// 	return Book;
// })();

// // варіант-1.1 коли 'зашили' що Book буде прототипом
// const BookData = (function () {
// 	// constructor
// 	function BookData(title, author, category, publishingHouse) {
// 		Book.call(this, title, author); // тут зашили що Book буде прототипом
// 		this.category = category;
// 		this.publishingHouse = publishingHouse;
// 	}
// 	// встановлюємо потрібний прототип щоб отримати методи від нього:
// 	// BookData.prototype = Object.create(Book.prototype); // тут зашили що Book буде прототипом
// 	// або так:
// 	Object.setPrototypeOf(BookData.prototype, Book.prototype); // тут зашили що Book буде прототипом

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
// })();

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

// // перевірка роботи
// const book1 = new Book('Green Mile', 'Steven King');
// const book2 = new Book('The Mysterious Island', 'Jules Verne');
// console.log(book1);
// console.log(book2);

// // Виклик методів:
// console.log(book1.getTitle());
// console.log(book2.getFullBookName());

// // Виклик статичного методу можна зробити так:
// console.log(Book.getGreeting());
// // або так:
// console.log(book2.constructor.getGreeting());

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

// // перевірка роботи
// const book3 = new BookData(
// 	'Headhunters',
// 	'Jo Nesbo',
// 	'Thriller/Mystery',
// 	'Свічадо'
// );
// console.log(book3);
// console.log(book3.getTitle());
// console.log(book3.getAuthor());
// console.log(book3.getCategory());
// console.log(book3.getPublishingHouse());
// console.log(book3.getFullBookName());
// console.log(book3.getBookData());

// Task 05
// UА: Створіть клас Shape із статичною властивістю count.
//     Ініціалізуйте цій властивості 0.
//     В конструкторі класу збільшуйте count на 1.
//     Створіть похідний клас Rectangle. Додайте метод для обчислення площі прямокутника.
//     Результат обчислення повинен мати не більше ніж 2 знаки після коми.
//     Створіть декілька об'єктів. Виведіть в консоль число створених об'єктів.
// EN: Create class Shape with static property count.
//     Initialize the property count with 0.
//     Increment the value of count by 1 in the constructor.
//     Create derived class Rectangle. Add method to calculate area.
//     The result of calculation must have no more than 2 digits after the decimal point.
//     Create a few objects. Display the number of created objects in the console.

// class Shape {
// 	static count = 0;

// 	constructor() {
// 		Shape.count++;
// 	}
// }

// // const s1 = new Shape();
// // const s2 = new Shape();

// // console.log(Shape.count);

// class Rectangle extends Shape {
// 	constructor(width, height) {
// 		super();
// 		this.width = width;
// 		this.height = height;
// 	}

// 	calculateArea() {
// 		return +(this.width * this.height).toFixed(2);
// 	}
// }

// // перевірка роботи
// const rect1 = new Rectangle(15, 24);
// console.log(rect1);
// console.log(rect1.calculateArea());
// console.log(Shape.count);

// const rect2 = new Rectangle(22.4, 12.7);
// console.log(rect2);
// console.log(rect2.calculateArea());
// console.log(Shape.count);

// Task 06
// UA: Створити функцію-конструктор Person() для створення нових об'єктів.
//     Додайте два методи: setFirstName() та setLastName().
//     Методи повинні викликатись в ланцюгу, наприклад obj.setFirstName(...).setLastName(...)
//     Зробіть це саме за допомогою класів.
// EN: Create function-constructor Person() for creating objects.
//     Add two methods: setFirstName() and setLastName().
//     These methods should be called in chain like this obj.setFirstName(...).setLastName(...)
//     Do exactly that with the help of classes.

// // using function-constructor
// function Person() {}

// Person.prototype.setFirstName = function (firstName) {
// 	this.firstName = firstName;
// 	return this;
// };

// Person.prototype.setLastName = function (lastName) {
// 	this.lastName = lastName;
// 	return this;
// };

// // using class
// class Person {
// 	setFirstName(firstName) {
// 		this.firstName = firstName;
// 		return this;
// 	}
// 	setLastName(lastName) {
// 		this.lastName = lastName;
// 		return this;
// 	}
// }

// const person1 = new Person();
// console.log(person1.setFirstName('John').setLastName('Doe'));
// console.log(person1.firstName);
// console.log(person1.lastName);

// const person2 = new Person();
// console.log(person2.setFirstName('Modest').setLastName('Opakhan'));
// console.log(person2.firstName);
// console.log(person2.lastName);

// Task 07
// UA: Створіть об'єкт data та потім задати конфігурацію його властивостей:
//     1. id: значення = 1, можна змінювати,
//     2. type: значення = 'primary', можливе для перерахування,
//     3. category: getter повертає значення поля _category,
//                  setter встановлює значення поля _category, можливе для перерахування, можливе для конфігурування полів.
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

// Task 08
// UA: Створіть літерал об'єкта із двома властивостями. Забороніть розширення об'єкту.
// EN: Create object literal with two properties. Deny extend the object.

// const person = {
// 	name: 'John',
// 	lastName: 'Doe',
// };
// console.log(person);
// Object.preventExtensions(person);

// person.age = 50;
// console.log(person);

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

// Task 10 Transform Array into Map (Maksym Koval1 <Maksym_Koval1@epam.com>)
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

const entries = [
	{ key: 'FIRST_KEY', value: 'FIRST_KEY_VALUE' },
	{ key: 'FIRST_KEY', value: 'FIRST_KEY_NOT_SAME_VALUE' },
	{ key: 'SECOND_KEY', value: 'value1' },
	{ key: 'SECOND_KEY', value: 'value4' },
	{ key: 'THIRD_KEY', value: 'value6' },
	{ key: 'FOURTH_KEY', value: 'value1' },
];

const resultMap = entries.reduce();
console.log(set);
