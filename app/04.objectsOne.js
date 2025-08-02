console.log('Topic: Objects Part One');

// ============================Task 01================================================
// UA: В нас є об'єкт user, який може мати декілька рівнів вкладеності. Щоб отримати
//     безпечно значення властивості, можна використати оператор &&. Проте, як отримати 
//     доступ до властивостей об'єкта, які можуть мати значення null або undefined, і 
//     так, щоб не викликати помилку?
// EN: We have a user object that can have multiple levels of nesting. To safely get the 
//     value of a property, we can use the && operator. However, how do we access the 
//     properties of an object that can have null or undefined values without causing 
//     an error?

const user = {
  profile: {
    address: {
      street: "Main St"
    }
  }
};
// let streetName;
// safely access nested properties
// if (user && user.profile && user.profile.address) {
//   streetName = user.profile.address.street;
// }
// console.log(streetName); // Output: Main St

// aле, якщо маємо такий об"єкт
const invalidUser = {};
// let invalidStreet;
// if (invalidUser && invalidUser.profile && invalidUser.profile.address) {
//   // тут може бути помилка бо invalidUser.profile - undefined
//   invalidStreet = invalidUser.profile.address.street;
// }
// console.log(invalidStreet); // Output: undefined

// solution via Optional Chaining (?.) operator
const streetName = user.profile?.address?.street;
console.log(streetName); // Output: Main St

const invalidStreet = invalidUser.profile?.address?.street;
console.log(invalidStreet); // Output: undefined
// ===================================================================================

// ============================Task 02================================================
// UA: В нас є об'єкт person. Як з'ясувати, чи існує ключ name в цьому об'єкті? Покажіть
//     щонайменше три варіанти рішення.
// EN: We have an object person. How to find out if the key name exists in this object?
//     Show at least three possible solutions.

const person = {
	name: 'Modest',
	age: 42,
};

// solution via hasOwnProperty() method:
// this method is used to determine whether an object has a specific property
if (person.hasOwnProperty('name')) {
	console.log('The "name" key exists in the person object. ✔️');
} else {
	console.log('The "name" key does not exist in the person object. ❌');
}

// solution via using the in-operator:
if ('name' in person) {
	console.log('The "name" key exists in the person object. ✔️');
} else {
	console.log('The "name" key does not exist in the person object. ❌');
}

// solution via using undefined or null
// this method might not work correctly if the key exists but has a value of undefined or null
if (person.name !== undefined) {
	console.log('The "name" key exists in the person object. ✔️');
} else {
	console.log('The "name" key does not exist in the person object. ❌');
}

// solution via using optional chaining:
/* optional chaining (?.) checks if person exists and then if person.name exists. 
   It returns undefined if any part of the chain is missing */
if (person?.name) {
	console.log('The "name" key exists in the person object. ✔️');
} else {
	console.log('The "name" key does not exist in the person object. ❌');
}
// ===================================================================================

// ============================Task 03================================================
// UA: Маємо об'єкт myObject. Як дізнатись скільки елементів є в цьому об'єкті?
// EN: We have an object myObject. How to find out how many elements there
//     are in this object?

const myObject = {
	channel: 'W3School JavaScript course',
	author: 'W3Consorcium',
};

// solution via Object.keys method and prop length
const myObjKeys = Object.keys(myObject);
console.log(myObjKeys); // ['channel', 'author']
console.log(myObjKeys.length); // 2

// ===================================================================================

// ============================Task 04================================================
// UA: В нас є масив об'єктів. Кожен об'єкт має поле name та age. Потрібно відсортувати
// 		 об'єкти по полю age на збільшення. Потім, відсортуйте об'єкти по полю name. А що
//     буде, якщо перший символ рядка поля name буде починатись з маленької букви?
// EN: We have an array of objects. Each object has a name and age field. You need to 
//     sort the objects by the age field in ascending order. Then, sort the objects
//     by the name field. What if the first character of the name field string starts 
//     with a lowercase letter?

const usersArr = [
	{ name: 'Modest', age: 42 },
	{ name: 'Alex', age: 34 },
	{ name: 'Ellis', age: 29 },
	{ name: 'Christina', age: 35 },
];

// solution for sorting by field age using sort method
/* Для сортування за віком використаєм метод sort та числове порівняння значень 
  властивостей user1.age та user2.age. Але якщо застосувати прияо метод sort то
  він змінює оригінальний/початковий масив по його місцю. Це означає, що коли ви
  сортуєте масив знову (наприклад, за полем name після цього), ви ненавмисно 
  сортуєте вже змінений масив. Тому ось так не вийде відсортувати:
  let ageSortedArr = usersArr.sort((user1, user2) => user1.age - user2.age);
  console.log(ageSortedArr); // [{.., age: 34},{.., age: 35},{.., age: 29},{.., age: 42}]
  І якщо ви очікуєте, що ageSortedArr та nameSortedArr мають бути незалежними 
  відсортованими масивами, то не можна покладатися на сортування по місцю. Щоб 
  уникнути зміни оригінального масиву, потрібно створити його копію і вже потім 
  сортувати, наприклад використавши spred-оператор. 
*/
let ageSortedArr = [...usersArr].sort((user1, user2) => user1.age - user2.age);
console.log(ageSortedArr); // [{..., age: 29},{..., age: 34},{..., age: 35},{..., age: 42}]

// solution for sorting by field name using sort and toLowerCase methods
/* Порівняння рядків JavaScript за замовчуванням чутливе до регістру, що означає: великі 
   літери (наприклад, «Modest») йдуть перед усіма малими літерами (наприклад, «alex», 
   «modest») у лексикографічному порядку. Якщо імена починаються з комбінації великих 
   та малих літер, сортування не забезпечить правильний порядок. Тому для правельного
   сортування потрібно привести усі рядки до єдиного регістру.*/
let nameSortedArrOne = [...usersArr].sort((user1, user2) => {
  let name1 = user1.name.toLowerCase(); // конвертуємо рядок до нижнього регістру
  let name2 = user2.name.toLowerCase(); // конвертуємо рядок до нижнього регістру
  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0; // одинакові рядки залишаються незмінними
});
console.log(nameSortedArrOne); // [{name:'Alex',...},{name:'Christina',...},{name:'Ellis',...},{name: 'Modest',...}]

// solution for sorting by field name using sort method with own algorithm
let nameSortedArrTwo = [...usersArr].sort((user1, user2) => {
	if (user1.name < user2.name) return -1;
	if (user1.name == user2.name) return 0;
	if (user1.name > user2.name) return 1;
});
console.log(nameSortedArrTwo); // [{name:'Alex',...},{name:'Christina',...},{name:'Ellis',...},{name: 'Modest',...}]

// solution for sorting by field name using str1.localeCompare(str2) method
/* Щоб врахувати регістр, нам також потрібно врахувати алфавіт. Але алфавіти різні 
  для різних мов. Тому браузеру потрібно знати мову для порівняння. Сучасні браузери 
  підтримують стандарт інтернаціоналізації ECMA-402, який надає спеціальний метод 
  для порівняння рядків різними мовами, а саме str1.localeCompare(str2) 
  повертає ціле число, яке вказує, чи str1 менше, дорівнює чи більше за str2. 
*/
let nameSortedArrThree = usersArr.sort((user1, user2) => {
	return user1.name.localeCompare(user2.name);
});
console.log(nameSortedArrThree); // [{name:'Alex',...},{name:'Christina',...},{name:'Ellis',...},{name: 'Modest',...}]
// ===================================================================================

// ============================Task 05================================================
// UA: Маємо два об'єкти, кожен із двома властивостями. У другий об'єкт додайте ще одну
//     властивість. Потім абороніть розширення обидвох об'єктів і покажіть це. А чи можна
//     видаляти властивості у об'єкта у якого заборонено розширення властивостей?
//     Якщо так то видаліть Видаліть ту додану властивість. Як перевірити що об'єкт є
//     нерозширюваний?
// EN: We have two objects, each with two properties. Add another property to the second 
//     object. Then protect the extension of both objects and show it. Is it possible to 
//     remove properties from an object that does not allow property extension? If so, 
//     then remove it. Remove the added property. How to check if an object is non-extendable?

const criminalOne = {
	name: 'Bonnie',
	lastName: 'Parker',
};

const criminalTwo = {
	name: 'Clyde',
	lastName: 'Barrow',
};

// solution via Object.preventExtensions method
/* Об'єкт є розширюваним, якщо до нього можна додавати нові властивості. 
  Object.preventExtensions позначає об'єкт як такий, що більше не розширюється,
  таким чином, він ніколи не матиме властивостей, окрім тих, які він мав на 
  момент позначення як нерозширюваний. Тобто, метод Object.preventExtensions 
  запобігає додаванню нових властивостей до об'єкта (запобігає майбутнім 
  розширенням об'єкта). Цей метод також запобігає перепризначенню прототипу 
  об'єкта але властивості можна додавати саме до прототипу об'єкта. Хоча 
  зауважте, що властивості нерозширюваного об'єкта, загалом, все ще можуть 
  бути видалені.
*/
try {
  Object.defineProperty(criminalTwo, "age", {
    value: 20,
  });
} catch (e) {
  console.log(e);
}
console.log(criminalTwo); // {name: 'Clyde', lastName: 'Barrow', age: 20}

Object.preventExtensions(criminalOne);
Object.preventExtensions(criminalTwo);

criminalOne.age = 19; // намагаємось додати властивість age
console.log(criminalOne); // {name: 'Bonnie', lastName: 'Parker'} - не вдалось

delete criminalTwo.lastName;
console.log(criminalTwo); // {name: 'Clyde', age: 20}

/* Для перевірки чи об'єкт є нерозширюваним існує метод Object.isExtensible(obj),
який повертає false у разі якщо об'єкт є нерозширюваним, інакше - true */
console.log(Object.isExtensible(criminalOne)); // false
console.log(Object.isExtensible(criminalTwo)); // false
// ===================================================================================

// ============================Task 06================================================
// UA: Створіть об'єкт "consumer", який має метод get отримання властивості 
//     name, метод set - встановлення значення властивості і для перевірки властивості
//     name (назва має містити щонайменше 3 символи). Якщо вона занадто коротка, виведіть
//     запис "Name is too short, need at least 3 characters" та забороніть оновлення 
//     значення. Використовуйте внутрішню властивість _name для зберігання назви.
// EN: Create an object called consumer that has a getter for retrieving the name property,
//     a setter for validating the name property, the name must be at least 3 characters 
//     long. If it's too short, log "Name is too short, need at least 3 characters" and 
//     prevent updating the value. Use the internal property _name to store the name.

// solution via accessor properties setter and getter
/* Властивість-аксесорx- це, по суті, функції, які виконуються при отриманні та встановленні 
   значення, але для зовнішнього коду виглядають як звичайні властивості. Властивості 
   аксессора представлені методами «getter» та «setter». У літералі об'єкта вони позначаються
   методами get та set. Ззовні властивість-аксесор виглядає як звичайна. У цьому і полягає 
   ідея властивостей-аксесорів.
*/
let consumer = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 3) {
      console.log("Name is too short, need at least 3 characters");
      return;
    }
    this._name = value;
  }
};

/*При перевірці роботи, деякі інструменти браузера (наприклад, консолі розробки 
  браузера) демонструють асинхронну поведінку виведення результату в Log 
  (console.log(...)) та отриманням властивості (get name()). А тому: */

consumer.name = "Pete"; // Sets the name to Pete
console.log(consumer.name); // Outputs: Pete

consumer.name = ""; // Logs: "Name is too short, need at least 3 characters"
console.log(consumer.name); // Outputs Pete бо _name не змінена, а тому getter бере останнє валідне значення

consumer.name = "Leo"; // Sets the name to "Leo"
console.log(consumer.name); // Outputs: "Leo"

consumer.name = "Li"; // Logs: "Name is too short, need at least 3 characters"
console.log(consumer.name); // Outputs: Leo бо _name не змінена, а тому getter бере останнє валідне значення
// ===================================================================================

// ============================Task 07================================================
// UA: Маємо функцію-конструктор для створення інстансів об'єктів employee із двома 
//     властивостями name та age. Але згодом, почали використовувати більш точні
//     дані з властивістю birthday. Як нам сумістити використання усіх властивостей?  
// EN: We have a constructor function to create instances of worker objects with two 
//     properties, name and age. But later, we started using more precise data with the 
//     birthday property. How do we combine the use of all the properties?

// function Employee(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let michael = new Employee("Michael", 41);
// let christy = new Employee("Christy", 33);
// console.log(michael.name); // Michael
// console.log(christy.age); // 35
// later started to use this function
// function Employee(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
// }
// let michael = new Employee("Michael", new Date(1984, 9, 1));
// let christy = new Employee("Christy", new Date(1992, 6, 6));
// console.log(michael.name); // Michael
// console.log(christy.birthday); // Mon Jul 06 1992 00:00:00 GMT+0300 (за східноєвропейським літнім часом)

// solution via accessor properties setter and getter
/* Одним із чудових застосувань аксессорів є те, що вони дозволяють підмінити 
   "звичайні" властивості об'єктів на геттери та сеттери і налаштувати їх під
   необхідну поведінку. Тому рішшенням буде просто додати властивість age через
   getter (бо нам треба отримати вік який буде вираховуватись по теперішній даті
   та заданим датам у властивості birthday).
*/
function Employee(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  })
}
let michael = new Employee("Michael", new Date(1984, 9, 1));
let christy = new Employee("Christy", new Date(1992, 6, 6));
console.log(michael.name); // Michael
console.log(michael.birthday); // Mon Oct 01 1984 00:00:00 GMT+0300 (за східноєвропейським стандартним часом)
console.log(michael.age); // 41
console.log(christy.name); // Christy
console.log(christy.birthday); // Mon Jul 06 1992 00:00:00 GMT+0300 (за східноєвропейським літнім часом)
console.log(christy.age); // 33
// ===================================================================================

// ============================Task 15================================================
// UA: Розширити прототип об'єкта String методом exclaim, звичайно, якщо його немає в 
//     прототипі. Крім того, метод повинен додавати знак оклику в рядок символів та
//     виводити результат у консоль.
// EN: Extend the prototype of object String with the method exclaim, if it doesn't 
//     exist. As well, method should add exclaimation mark to the string and display it 
//     in the console.

// // Попередження, у разі якщо ми переписуємо існуючий метод
// if (String.prototype.exclaim) {
// 	console.warn(
// 		'Overriding existing Array.prototype.exclaim. ' +
// 		"Possible causes: New API defines the method, there's a framework conflict or 
//     you've got double inclusions in your code."
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
// ====================================================================

// ====================================================================

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
