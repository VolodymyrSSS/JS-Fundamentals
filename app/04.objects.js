console.log('Topic: Objects');

// ============================Task 01====================================
// UA: Покажіть можливі методи як створити об'єкт в JavaScript?
// EN: Show possible methods of creating an object in JavaScript?

// solution via Object literal:
/* З літералом об’єкта ми маємо сутність із конкретними назвами властивостей
   об’єкта та значенням для кожної властивості об’єкта, де все згруповано у 
   фігурних дужках. Ми можемо мати статичні та динамічні властивості всередині
   об’єкта. Для динамічних властивостей ми використовуємо квадратні дужки навколо 
   імені змінної властивості або виразу. Ми також можемо мати скорочене 
   позначення для імені властивості об’єкта. Ось приклад:
*/
// const ageKey = 'age';
// const myName = 'John';

// // person object literal
// const person = {
//   myName, // shorthand notation for myName property
//   surname: 'Doe', // classic or standard initialization of the surname property
//   [ageKey]: 42, // dynamic property (key) for age property
//   ['location']: 'New York', // dynamic property with expression for location property
//   // object method where “this” object represents the reference to the person object
//   getName() {
//     return this.myName;
//   },
//   // arrow function where we are showing the outer context where person object is initialized using this object
//   showOuterContext: () => {
//     console.log(this);
//   }
// };

// console.log(person); // { myName: 'John', surname: 'Doe', age: 42, location: 'New York',
// //                       getName: ƒ getName(), showOuterContext: f showOuterContext }
// console.log(person.getName()); // John
// console.log(person.age); // 42
// console.log(person.showOuterContext()); // Window { ... } or undefined

// solution via Constructor function
/* Коли у нас є функція-конструктор, ми передаємо усі властивості як аргументи
   конструктора, а потім нам потрібно ініціалізувати цей об’єкт за допомогою
   оператора "new".
*/
// here, we have object.assign() function call in order to assign all properties to this object using property shorthand notation
// function Person(name, surname, age) {
//    Object.assign(this, { name, surname, age });
// }
// const person = new Person('John', 'Doe', 42);
// console.log(person); // { name: 'John', surname: 'Doe', age: 42 }

// solution via EcmaScript6 Class:
/* ECMAScript 6 (ES6) представив значні вдосконалення JavaScript, і одним 
   із найпомітніших доповнень є синтаксис класу. Класи забезпечують більш 
   структурований та об’єктно-орієнтований спосіб визначення та роботи з 
   об’єктами та прототипами в JavaScript.
*/

// class Person {
//    constructor(name = 'John', surname = 'Doe', age = 42) {
//       Object.assign(this, { name, surname, age });
//    }
// }

// const defaultPerson = new Person();
// console.log(defaultPerson); // Person { name: 'John', surname: 'Doe', age: 42 }
// const person = new Person('Mark', 'Robertson', 44);
// console.log(person); // Person { name: 'Mark', surname: 'Robertson', age: 44 }

// solution via Factory function:
/* По суті, фабрична функція створює об’єкт за допомогою літералу, де ми маємо 
   аргументи функції як властивості об’єкта.
*/

// function Person(name, surname, age) {
//    return {
//       name,
//       surname,
//       age
//    }
// }
// const person = Person('John', 'Doe', 42);
// console.log(person); // { name: 'John', surname: 'Doe', age: 42 }

// solution via method from Object class:
/* Метод Create приймає об’єкт JavaScript, який використовуватиметься 
   як прототип нового об’єкта (результат методу create).
*/

// const personData = {
//     name: 'Mark',
//     surname: 'Harris',
//     showFullName: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// const person = Object.create(personData);

// // "age" is a property set on "person", but not on "personData" object
// person.age = 41;
// console.log(person.showFullName()); // Mark Harris
// console.log(person); // {age: 41, [[Prototype]: name: "Mark", showFullName: ƒ (),
// //                      surname: "Harris", [[Prototype]]: Object}
// =======================================================================

// ============================Task 02====================================
// UA: В нас є об'єкт 'myObj'. Виведіть властивості об'єкта в структурі
//     типу: заголовок з назвою бренду авто, який включає модельний ряд,
//     цього бренуд; один з прикладів надано нижче:
// EN: We have an object 'myObj'. Display the properties of the object in
//     a structure of the type: a title with the name of the car brand,
//     which includes the model range of this car brend; one of еру example:
// Ford -> -Fiesta, -Focus, -Mustang,
// BMW -> -320, -X3, -X5,
// Fiat -> -500, -Panda,

// const myObj = {
//   name: "Modest",
//   age: 50,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// solution via for..in loop:
/* Інструкція JavaScript for..in циклично переглядає властивості об’єкту -
   тобто блок коду всередині циклу for..in буде виконано один раз для кожної
   властивості об'єкту. А найкраще отримати доступ до вкладених об’єктів за 
   допомогою нотації: "через крапку" або "через-квадратні дужки".
*/
// let x = "";
// for(let i in myObj.cars) {
//    x += myObj.cars[i].name + '->';
//    for (let j in myObj.cars[i].models) {
//       x += '-' + myObj.cars[i].models[j] + ',' + ' ';
//    }
// }

// console.log(x);
// =======================================================================

// ============================Task 03====================================
// UA: В нас є об'єкт 'person'. Як з'ясувати, чи існує ключ 'name' в цьому
//     об'єкті?
// EN: We have an object 'person'. How to find out if the key 'name' exists
//     in this object?

// const person = {
// 	name: 'Modest',
// 	age: 42,
// };

// solution via hasOwnProperty() method:
// this method is used to determine whether an object has a specific property
// if (person.hasOwnProperty('name')) {
// 	console.log('The "name" key exists in the person object. ✔️');
// } else {
// 	console.log('The "name" key does not exist in the person object. ❌');
// }
/* BUT, this method does not work for objects created using 
   Object.create(null) as it does not inherit from Object.prototype, 
   which makes the hasOwnProperty() unreachable for the created object.
   Using hasOwnProperty(), the object will throw an exception, like:
   const user = Object.create({ name: 'Gantz' });
   console.log(user.hasOwnProperty('name')); // false

   That is why, we have static hasOwn() method inside the Object class.
   Object.hasOwn() is recommended over hasOwnProperty(), in browsers where 
   it is supported. Object.hasOwn() is the intended alternative for the 
   Object.prototype.hasOwnProperty() method.
*/
// const hasAge = Object.hasOwn(person, 'age');
// if (hasAge) {
//   console.log(`We have age property ✔️ value ${person.age}`);
// } else {
//   console.log("We don't have age property ❌");
// }
// or let's apply directly, like:
// const user = Object.create({ name: 'Gantz' });
// console.log(Object.hasOwn(person, 'name')); // true

// solution via using the 'in' operator:
// if ('name' in person) {
// 	console.log('The "name" key exists in the person object. ✔️');
// } else {
// 	console.log('The "name" key does not exist in the person object. ❌');
// }

// solution via using undefined or null
/* this method might not work correctly if the key exists but has
 a value of 'undefined' or 'null' */
// if (person.name !== undefined) {
// 	console.log('The "name" key exists in the person object. ✔️');
// } else {
// 	console.log('The "name" key does not exist in the person object. ❌');
// }

// solution via using optional chaining operator:
/* optional chaining (?.) checks first if person exists and then if person.name  
   exists. It returns 'undefined' if any part of the chain is missing */
// if (person?.name) {
// 	console.log('The "name" key exists in the person object. ✔️');
// } else {
// 	console.log('The "name" key does not exist in the person object. ❌');
// }

// solution via Object.keys() and Array.prototype.some() methods:
/* Basically, we are converting the object to the array of properties, and then
   we have some method with predicate function where we are checking the presence
   of the target property 'name'. But this method has the same drawback as the 
   Object.prototype.hasOwnProperty() because we can’t find the object property
   if the object is created with Object.create() method.
*/
// const hasName = Object.keys(person).some(key => key === 'name');
// console.log(hasName); // true

// const user = Object.create({ name: 'Thomas' });
// const hasName = Object.keys(user).some(property => property === 'name');
// console.log(hasName); // false

// solution via custom JavaScript util function:
/* This hasKey() function accepts object and target property 'name' arguments 
   and if both arguments are defined we have for-in loop through the object
   and inside each iteration we have a check if current property key is equals
   to the target one (input parameter). Implementation will be like:
*/
// const user = Object.create({ name: 'Kevin' });

// function hasKey(object, target) {
//   if (object && target) {
//     for (const key in object) {
//       if (key === target) {
//         return true;
//       }
//     }
//     return false;
//   } else {
//     return false;
//   }
// }

// console.log(hasKey(person, 'name')); // true
// console.log(hasKey(person, 'location')); // false
// console.log(hasKey(user, 'name')); // true
// =======================================================================

// ============================Task 02====================================
// UA: Як з'ясувати, чи об'єкт пустий чи має якісь властивості?
// EN: How to find out whether an object is empty or has some properties?

// const obj = {};

// solution via Object.keys() construction:
// if (Object.keys(obj).length === 0) {
// 	console.log('The object is empty. ✔️');
// }

// solution via Object.entries() construction:
// if (Object.entries(obj).length === 0) {
// 	console.log('The object is empty. ✔️');
// }

// solution via JSON.stringify() method:
// if (JSON.stringify(obj) === '{}') {
// 	console.log('The object is empty. ✔️');
// }
// =======================================================================

// ============================Task 03====================================
// UA: Маємо об'єкт 'myObject'. Як дізнатись скільки елементів є в цьому
//     об'єкті?
// EN: We have an object 'myObject'. How to find out how many elements
//     there are in this object?

// const myObject = {
// 	channel: 'W3School JavaScript course',
// 	author: 'W3Consorcium',
// };

// solution via Object.keys() method and prop length:
// const myObjKeys = Object.keys(myObject);
// console.log(myObjKeys); // ['channel', 'author']
// console.log(myObjKeys.length); // 2
// =======================================================================

// ============================Task 04====================================
// UA: Ми маємо масив 'myArr'. На його основі, створіть об'єкт ключами
//     якого є елементи масиву а значеннями - індекси.
//     Виведіть цей об'єкт в консоль.
// EN: We have an array 'myArr'. Based on it, create an object whose keys
//     are array elements and values are indices.
//     Print this object to the console.

// let myArr = [1, 2, 3, 4];
// have to get a new array like:
// [
//   {value: 1, index: 0},
//   {value: 2, index: 1},
//   {value: 3, index: 2},
//   {value: 4, index: 3}
// ]

// solution via map() method:
// let newArr = myArr.map((val, i, arr) => {
// 	return {
// 		value: val,
// 		index: i,
// 	};
// });
// console.log(newArr);
// =======================================================================

// ============================Task 05====================================
// UA: Маємо масив об'єктів 'data'. Потрібно створити новий масив об'єктів
//     який буде мати лише об'єтки з країнами, які мають населення понад
//     500 мільйонів.
//     Дрге завдання: підрахуйте кількість населення яке проживає в усіх
//     країнах, крім Китаю.
// EN: We have an array of objects 'data'. It is necessary to create a new
//     array of objects that will have only objects with countries with a
//     population of more than 500 million.
//     The second task: count the number of people living in all countries
//     except China.

// let data = [
// 	{
// 		country: 'China',
// 		population: 1_409_517_397,
// 	},
// 	{
// 		country: 'India',
// 		population: 1_339_180_127,
// 	},
// 	{
// 		country: 'USA',
// 		population: 324_459_463,
// 	},
// 	{
// 		country: 'Indonesia',
// 		population: 263_991_379,
// 	},
// ];

// for the first: we have to get a new array like:
// [
//   {country: "China", population: 1409517397},
//   {country: "India", population: 1339180127}
// ]

// solution via filter() method:
// let hugeCountries = data.filter((objVal) => {
// 	return objVal.population > 500_000_000;
// });
// console.log(hugeCountries);

// for the second: population living in those countries is 1_927_630_969

// solution via reduce() method and ternary operator:
/* If the the country name of the current element matches 'China', I  return
   the accumulator unchanged — this essentially skips China. If the country 
   is anything other than China, I return the accumulator plus the population
   of the current country. So implementation is like: 
*/
// let topCountryPopulationWithoutChina = data.reduce((acc, val) => {
// 	return val.country == 'China' ? acc : acc + val.population;
// }, 0);

// console.log(topCountryPopulationWithoutChina); // 1_927_630_969
// =======================================================================

// ============================Task 06====================================
// UA: Ми маємо об'єкт 'obj' у якого параметрами є змінна 'location' та метод
//     'getLocation' що використовує ключеве слово 'this' для доступу до цієї
//     змінної. Далі ми присвоюємо метод змінній 'myLocation' та виводимо в
//     консоль значення, яке буде undefined. Чому так сталось? Як вирішити
//     завдання, щоб все ж таки отримати значення змінної 'getLocation'?
// EN: We have an 'obj' object whose parameters are the 'location' variable and
//     a 'getLocation' method that uses the 'this' keyword to access the variable.
//     Next, we assign the method to the variable 'myLocation' and output the
//     value to the console, which will be undefined. Why did this happen? How
//     to solve the task to still get the value of the 'getLocation' variable?

// let obj = {
// 	location: 'New York',
// 	getLocation: function () {
// 		return this.location;
// 	},
// };

// let myLocation = obj.getLocation;
// console.log(myLocation()); // undefined

/* This happened because of myLocation call references to the global scope, but
we need to have a reference to 'obj' object. Here we lost context of 'this'. */

// solution via bind() method to refer to the obj:
// let myLocation = obj.getLocation.bind(obj);
// console.log(myLocation()); // New York

// solution via direct method call:
// console.log(obj.getLocation()); // New York
// ======================================================================

// ============================Task 07===================================
// UA: В нас є масив об'єктів. Кожен об'єкт має поле name та age. Відсортуйте
// 	 об'єкти на збільшення по полю age. А потім відсортуйте об'єкти по полю
// 	 name. А що буде, якщо перший символ рядка поля name буде починатись з
// 	 маленької букви?
// EN: We have an array of objects. Each object has a name and age field.
// 	 Sort the objects in ascending order by the age field. And then sort
//		 the objects by the name field. And what will happen if the first
//		 character of the name field string starts with a small letter?

// const usersArr = [
// 	{ name: 'Modest', age: 42 },
// 	{ name: 'Alex', age: 34 },
// 	{ name: 'Ellis', age: 29 },
// 	{ name: 'Christina', age: 35 },
// ];

// we have to get sorted array by age like:
// [
// 	{ name: 'Ellis', age: 29 },
// 	{ name: 'Alex', age: 34 },
// 	{ name: 'Christina', age: 35 },
// 	{ name: 'Modest', age: 42 },
// ];
// we have to get sorted array by name like:
// [
// 	{ name: 'Alex', age: 34 },
// 	{ name: 'Christina', age: 35 },
// 	{ name: 'Ellis', age: 29 },
// 	{ name: 'Modest', age: 42 },
// ];

// solution via sort() method for field age:
// let ageSortedArr = usersArr.sort((user1, user2) => user1.age - user2.age);
// console.log(ageSortedArr);

// solution via sort() method for field name using own algorithm:
// let nameSortedArr = usersArr.sort((user1, user2) => {
// 	if (user1.name < user2.name) return -1;
// 	if (user1.name == user2.name) return 0;
// 	if (user1.name > user2.name) return 1;
// });
// console.log(nameSortedArr);

// solution via str.localeCompare(str2) method for field name:
/* To consider the register we need to take into accoult as well an alphabet. But
   alphabets are different for different languages. So, the browser needs to know
   the language to compare. Modern browsers support the internationalization
   standard ECMA-402 which provides a special method to compare strings in
   different languages that is str.localeCompare(str2) returns an integer indicating
   whether str is less, equal or greater than str2.
*/
// let nameSortedArr = usersArr.sort((user1, user2) => {
// 	return user1.name.localeCompare(user2.name);
// });

// console.log(nameSortedArr);
// ======================================================================

// ============================Task 08====================================
// UA: Маємо масив об'єктів 'users'. Відсортуйте об'єкти за їх булевими
//     значеннями так, щоб спочатку в масиві були об'єкти, у яких булеве
//     значення було true, потім об'єкти з булевим значенням false.
//     А можете відсортувати так, щоб вихідний масив об'єктів не змінювався?
// EN: We have an array of objects 'users'. Sort the objects by their boolean
//     values so that the array first contains the objects with the boolean
//     value true, then the objects with the boolean value false.
//     And can you sort so that the original array of objects is not mutated?

// const users = [
// 	{ name: 'Kate', premium: false },
// 	{ name: 'Bob', premium: true },
// 	{ name: 'Jeff', premium: false },
// 	{ name: 'Samantha', premium: true },
// ];

// solution via sort() method but with mutation:
/* If the returned value is negative, 'a' is placed before 'b' in the sorted
   array. If the value is positive, 'b' is placed before 'a'. If the value  
   is 0, the order of 'a' and 'b' is not changed.
   The subtraction operator (-) on the boolean values, they are coerced to 
   numbers before the subtraction happens. Truthy values are coerced to 1, 
   and falsy values to 0. 
   console.log(true + true); // 2       
   console.log(true + false); // 1
   console.log(false + false); // 0
*/
// const premiumFirst1 = users.sort((a, b) => b.premium - a.premium);
// console.log(premiumFirst1);
// [
//     { name: 'Bob', premium: true },
//     { name: 'Samantha', premium: true },
//     { name: 'Kate', premium: false },
//     { name: 'Jeff', premium: false }
//   ]

// solution via spred operator and sort() method without modification:
/* The sort() method sorts the array in place, which means it gets modified. 
   To prevent this, we can use the spread syntax (...) to create a shallow copy 
   of the array for the sort. By avoiding mutations, we can make our code more 
   readable, predictable, and modular. So, solution is:
*/
// const premiumFirst2 = [...users].sort((a, b) => b.premium - a.premium);
// console.log(premiumFirst2);
// [
//     { name: 'Bob', premium: true },
//     { name: 'Samantha', premium: true },
//     { name: 'Kate', premium: false },
//     { name: 'Jeff', premium: false }
//   ]
// Original array is not modified:
// console.log(users);
// const users = [
// 	{ name: 'Kate', premium: false },
// 	{ name: 'Bob', premium: true },
// 	{ name: 'Jeff', premium: false },
// 	{ name: 'Samantha', premium: true },
// ];
// =======================================================================

// ============================Task 09====================================
// UA: Як перевірити, чи значення об'єкта є об'єктом чи ні?
// EN: How to check whether the object value is an object or not?

// solution via typeof operator:
// typeof anyVariable === 'object' && anyVariable !== null;
/* перевірку на ноль також потрібно проводити бо 
   typeof null = object - загальнопризнана помилка JS
*/
// =======================================================================

// ============================Task 10====================================
// UA: У нас є масив, який містить елементи, що повторяються. Напишіть код:
//     1) який підрахує скільки разів кожен елемент зустрічається в масиві.
//        Виведіть результат у виді об'єкту у якому для кожного ключа буде
//        елемент масиву а його значенням, число скільки кожен елемент
//        зустрічається у цьому масиві, типу {'sony': 3, 'dell': 2, ...}
//     2) який буде отримувати  масив, що містить тільки унікальні значення.
//        Виведіть у консолі масив цих унікальних значень.
// EN: We have an array that contains repeating elements. Write code:
//     1) that will receive an array containing only unique values. Display
//        an array of these unique values in the console;
//     2) which will count how many times each element occurs in the array.
//        Output the result in the form of an object in which the keys will
//        be the elements of the array and their value will be the number of
//        times each element occurs in this array, such as {'sony': 3, ...}.

// const brands = [
// 	'sony',
// 	'hp',
// 	'apple',
// 	'sony',
// 	'dell',
// 	'sony',
// 	'hp',
// 	'dell',
// 	'hp',
// ];

// for1) solution via forEach() method in a function:

// const countBrend = (list) => {
// 	const count = {}; // об'єкт для встановлення 'ключ/бренд : значення/число-з'являння'
// 	list.forEach((brand) => {
// 		// якщо об'єкт count не містить ключ з назвою поточного бренду
// 		if (!count[brand]) {
// 			// додати цей ключ із встановленим значенням "1"
// 			count[brand] = 1;
// 		} else {
// 			// збільшити значення на одиницю
// 			count[brand]++;
// 		}
// 	});
// 	return count;
// };

// console.log(countBrend(brands)); // {sony: 3, hp: 3, apple: 1, dell: 2}

// for2) solution via forEach() and Object.keys() methods in a function:

// const uniqueBrands = (list) => {
// 	const uniques = {}; // кладем сюди унікальні ключі
// 	list.forEach((brand) => {
// 		/* встановити кожному ключу значення true і при кожній ітерації
// 		значення елементу буде перезаписуватись на це true. Так ефективно
// 		можна позбутись дублікатів бо ключі об'єктів є унікальними */
// 		uniques[brand] = true;
// 	});
// 	// але в результаті ми отримаємо об'єкт тільки з унікальними ключами типу
// 	// {sony: true, hp: true, apple: true, dell: true}
// 	// щоб отримати масив з унікальними ключами використаємо цей метод:
// 	return Object.keys(uniques);
// };
// console.log(uniqueBrands(brands)); // ['sony', 'hp', 'apple', 'dell']

// for2) solution via reduce() method:

// const uniqueBrands = arr.reduce((accumulator, brand) => {
// 	if (!accumulator.includes(brand)) {
// 		accumulator.push(brand);
// 	}
// 	return accumulator;
// 	// initialize an empty array as the accumulator
// }, []);
// =======================================================================

// ============================Task 11====================================
// UA: Створіть функцію, яка згрупує студентів по віку. В результаті
//     роботи повинні отримати об'єкт де ключами буде вік, а значеннями
//     масив у якому елементи - це студенти із цим віком.
// EN: Create a function that groups students by age. As a result, the
//     work should receive an object where the keys will be age, and the
//     values are an array in which the elements are students with this age.

// const students = [
// 	{ name: 'anna', age: 20 },
// 	{ name: 'mike', age: 24 },
// 	{ name: 'bob', age: 20 },
// 	{ name: 'sem', age: 19 },
// 	{ name: 'keti', age: 23 },
// 	{ name: 'polly', age: 20 },
// 	{ name: 'elly', age: 23 },
// ];

// маємо отримати такий об'єкт в консолі:
// {
//    19: [{ name: 'sem', age: 19 } ],
//    20: [{ name: 'anna', age: 20 }, { name: 'bob', age: 20 }, { name: 'polly', age: 20 }],
//    23: [{ name: 'keti', age: 23 }, { name: 'elly', age: 23 }],
//    24: [{ name: 'mike', age: 24 }]
// }

// solution via forEach() method in a function:

// const groupedByAge = (arrList) => {
// 	const grouped = {} // створюємо об'єкт;
// 	arrList.forEach((student) => {
// 		// якщо немає такого ключа 'grouped[student.age]' в об'єкті 'grouped'
// 		if (!grouped[student.age]) {
// 			// додати цей ключ до цього об'єкту із встановленим значенням - масив об'єктів
// 			grouped[student.age] = [student];
// 		} else {
// 			// додати об'єкт 'student' до масиву
// 			grouped[student.age].push(student);
// 		}
// 	});
// 	return grouped;
// };

// console.log(groupedByAge(students));
// =======================================================================

// ============================Task 12====================================
// UA: Як порівняти два об’єкти та їх значення, щоб побачити, чи мають вони
//     однаковий вміст, навіть якщо вони вкладені в інші об’єкти чи масиви?
// EN: How to compare two objects and their values to see if they have the same
//     content, even if they are nested within other objects or arrays?

// solution via a deep equality function that traverses objects and arrays recursively:

/* This function is a valuable tool for comparing complex JS objects and
   values for deep equality, but have limitations:
   - it may not work as expected when objects have different prototypes;
   - when comparing very large data structures, the recursive approach might 
   result in a stack overflow (than use Lodash’s _.isEqual);
*/

// function deepEqual(obj1, obj2) {
// 	// база рекурсії: якщо обидва об'єкти ідентичні то повернути true
// 	if (obj1 === obj2) {
// 		return true;
// 	}

// 	// перевірка чи об'єкти належать до типу 'object' та недорівнюють null
// 	if (
// 		typeof obj1 !== 'object' ||
// 		typeof obj2 !== 'object' ||
// 		obj1 === null ||
// 		obj2 === null
// 	) {
// 		return false;
// 	}

// 	// отримаємо масив ключів обох об'єктів для подальшого порівняння
// 	const keys1 = Object.keys(obj1);
// 	const keys2 = Object.keys(obj2);

// 	// перевірка чи кількість ключів обох об'єктів одинакова
// 	if (keys1.length !== keys2.length) {
// 		return false;
// 	}

// 	// ітеруємо по ключам та рекурсивно порівнюєм їх значення - умова з рекурсією
// 	for (const key of keys1) {
// 		if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
// 			return false;
// 		}
// 	}

// 	// якщо усі перевірки пройшли, то об'єкти ідентичні на всіх рівнях - глубоке порівняння
// 	return true;
// }

// const movie1 = {
// 	name: 'Sisu',
// 	genre: ['action', 'war', 'drama'],
// 	actors: [
// 		{ name: 'Jorma Tommila', gender: 'male' },
// 		{ name: 'Aksel Hennie', gender: 'male' },
// 		{ name: 'Mimosa Willamo', gender: 'female' },
// 	],
// }; reverse()

// const movie2 = {
// 	name: 'Sisu',
// 	genre: ['action', 'war', 'drama'],
// 	actors: [
// 		{ name: 'Jorma Tommila', gender: 'male' },
// 		{ name: 'Mimosa Willamo', gender: 'female' },
// 		{ name: 'Aksel Hennie', gender: 'male' },
// 	],
// };

// console.log(deepEqual(movie1, movie2)); // false
// =======================================================================

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
// ====================================================================

// =====================Task ??===================================
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

// ============================Task ??====================================
// UA: Маємо об'єкт 'person'. Ми працюємо з ним: додаємо властивості,
//     перевіряєм наявність якихось ключів, видаляємо неактуальну властивість,
//     отримали розмір об'єкту, ітеруємо по власних властивостях об'єкту і т.д.
//     А чи можемо ми оптимізувати роботу з цим об'єктом?
// EN: We have a 'person' object. We work with it: we add properties, check
//     the presence of some keys, delete an irrelevant property, get the size
//     of the object, iterate on the object's own properties, etc.
//     But can we optimize work with this object?
// const person = {
// 	name: 'Modest',
// 	age: 42,
// 	car: 'Audi A6 allroads',
// };
// person['married status'] = 'divorced'; // додали властивість
// person.hasChildren = true; // додали властивість
// const isHasKey = 'name' in person; // перевіряємо наявність властивості 'name'
// delete person['hasChildren']; // видалили неактуальну властивість
// const size = Object.keys(person).length; // отримали кількість ключів (розмір) об'єкту
// console.log('number of keys - ', size); // 4
// ітеруємось по власних властивостях об'єкту
// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(key + ' - ' + person[key]);
// 	}
// }

// solution via Map structure
// const person = new Map([
// 	['name', 'Modest'],
// 	['age', 42],
// 	['car', 'Audi A6 allroads'],
// ]);
// person.set('married status', 'divorced'); // додали властивість
// person.set('hasChildren', true); // додали властивість
// const isHasKey = person.has('name'); // перевіряємо наявність властивості 'name'
// person.delete('hasChildren'); // видалили неактуальну властивість
// const size = person.size; // отримали кількість ключів (розмір) об'єкту
// console.log('number of keys - ', size); // 4
// // ітеруємось по власних властивостях об'єкту
// for (let [key, value] of person) {
// 	console.log(key + ' - ' + value);
// }
// =======================================================================
