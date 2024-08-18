console.log('Topic: Objects - part one');

// =========================== Task 01 ===================================
// UA: Дайте обгрунтовану відповідь, чи можна змінити об'єкт, який був
//     оголошений через "const" ?
// EN: Give a reasoned answer, is it possible to change an object that was
//     declared via "const" ?

// const user = {
// 	name: 'Michael',
// };

// // Will this work?
// user.name = 'Modest';

// solution-explenation:
/* Так, ​​це спрацює.
Оголошення об'єкта через const захищає лише саму змінну від змін а не вміст
об'єкту. Інакше кажучи, user зберігає лише посилання на об'єкт, яке не може 
бути змінено, проте, сам вміст об'єкта можна змінити. 
Визначення const видасть помилку лише якщо ми надамо змінній інше значення,
типу user=.... Давайте покажемо це в консолі: */

// console.log(user.name); // Modest
// console.log((user = 123)); // TypeError: Assignment to constant variable
// =======================================================================

// =========================== Task 02 ===================================
// UA: Покажіть можливі методи як створити об'єкт в JavaScript?
// EN: Show possible methods of creating an object in JavaScript?

// solution via Object literal:
/* З літералом об’єкта ми маємо сутність із конкретними назвами властивостей
   об’єкта та значенням для кожної властивості об’єкта, де все згруповано у 
   фігурних дужках. Ми можемо мати статичні та динамічні властивості всередині
   об’єкту. Імена властивостей можуть бути у вигляді рядків або символів 
   (спеціальний тип для ідентифікаторів. Для звернення до властивостей об'єкту використовується запис «через крапку»: Для властивостей, імена яких складаються
   з кількох слів, доступ до значення «через крапку» не працює, тому потрібно 
   огортати їх в квадратні дужки.
   Для динамічних властивостей або властивостей, імена яких можуть бути результатом
   виразу, використовують тільки квадратні дужки навколо імені змінної властивості
   або виразу. Ми також можемо мати скорочене позначення для імені властивості 
   об’єкта замість name: name, можем писати просто name. Ось приклади:
*/
// const myName = 'John';
// const ageKey = 'age';

// solution via object literal creation:
// const person = {
//   myName, // shorthand notation for myName property
//   // або пишемо стандартну ініціалізацію властивості типу myName: myName,
//   surname: 'Doe', // classic/standard initialization of the surname property
//   [ageKey]: 42, // dynamic property (key) for age property, квадратні скобки дозволяють взяти ключ зі змінної ageKey
//   ['location']: 'New York', // dynamic property with expression for location property
//   // object method where "this" represents the reference to the "person" object
//   getName() {
//     return this.myName;
//   },
//   // arrow function in which the outer context is initialized using keyword "this"
//   showOuterContext: () => {
//     console.log(this);
//   }
// };

// console.log(person); // { myName: 'John', surname: 'Doe', age: 42, location: 'New York',
//                         // getName: ƒ getName(), showOuterContext: f showOuterContext }
// console.log(person.getName()); // John
// console.log(person.age); // 42
// console.log(person.showOuterContext()); // Window { ... } or undefined

// solution via Constructor function:
/* Коли у нас є функція-конструктор, ми передаємо усі властивості як 
   аргументи конструктора, а потім нам потрібно ініціалізувати цей
   об’єкт за допомогою оператора "new".
   Для визначення властивостей нового об'єкту, можна використати метод
   глобального класу об'єктів Object.assign({}, obj1, obj2...)
*/

// function Person(name, surname, age) {
//    Object.assign(this, { name, surname, age });
// }
// const personJohn = new Person('John', 'Doe', 42);
// console.log(personJohn); // { name: 'John', surname: 'Doe', age: 42 }

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
// const personMark = new Person('Mark', 'Robertson', 44);
// console.log(personMark); // Person { name: 'Mark', surname: 'Robertson', age: 44 }

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
// const personJohn = Person('John', 'Doe', 42);
// console.log(personJohn); // { name: 'John', surname: 'Doe', age: 42 }

// solution via method of the Object class - Object.create(obj):
/* Цей метод приймає об’єкт JavaScript, який використовуватиметься 
   як прототип нового об’єкту (результат методу create). Отже,
   спочатку потібно створити об'єкт JS, що буде прототипом.
*/

// const personData = {
//     name: 'Mark',
//     surname: 'Harris',
//     showFullName: function() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// };
// const personMark = Object.create(personData);

// Але "age" є властивістю встановленою в "personMark", а не в
// прототипі об'єкту "personData", тому її окремо задаємо ось так:
// personMark.age = 42;
// console.log(personMark.showFullName()); // Mark Harris
// console.log(personMark); // {age: 42, [[Prototype]: name: "Mark",
// //  showFullName: ƒ (), surname: "Harris", [[Prototype]]: Object}
// =======================================================================

// =========================== Task 03 ===================================
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

// =========================== Task 04 ===================================
// UA: Як з'ясувати, чи об'єкт пустий чи має якісь властивості?
// EN: How to find out whether an object is empty or has some properties?

// const obj = {};
// let schedule = {};
// schedule['8:30'] = 'get up'; // додали властивість в об'єкт

// solution via Object.keys() construction:
// if (Object.keys(obj).length === 0) {
// 	console.log('The object is empty.');
// }

// solution via Object.entries() construction:
// if (Object.entries(obj).length === 0) {
// 	console.log('The object is empty.');
// }

// solution via JSON.stringify() method:
// if (JSON.stringify(obj) === '{}') {
// 	console.log('The object is empty.');
// }

// solution via creating function isEmpty():
/* Відомо, що для перебору усіх властивостей об'єкта використовують цикл for..in.
Причому, всі конструкції "for" дозволяють оголошувати змінну всередині цикла, тут
давайте назвем її "key" (використовують також назву "prop"). Отже, синтаксис циклу:
for (key in object) {
  // тіло циклу виконується для кажної властивості об'єкта
}
Давайте його використаєм і якщо тіло циклу починає виконуватись, значить в
об'єкті є властивості. */
// function isEmpty(myObj) {
// 	for (let key in myObj) {
// 		return false;
// 	}
// 	return true;
// }
// console.log(isEmpty(obj)); // true
// console.log(isEmpty(schedule)); // false
// =======================================================================

// =========================== Task 05 ===================================
// UA: У нас є об'єкт, у якому зберігаються зарплати команди ІТ. Напишіть
//     код для підсумовування всіх зарплат та збережіть результат у змінній
//     sum. Має вийти 390. Також, якщо об'єкт salaries порожній, то результат
//     має бути 0.
// EN: We have an object that stores the salaries of the IT team. Write code
//     to sum all salaries and store the result in the sum variable. The
//     output should be 390. Also, if the salaries object is empty, then the
//     result should be 0.

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };

// solution via for..in loop:
/* Oсобливість JavaScript-об'єктів у тому, що можна отримати
доступ до будь-якої властивості. Навіть якщо такої властивості
не існує – помилки не буде! При зверненні до властивості, якої
немає, повертається undefined.
Також існує спеціальний оператор "in" для перевірки існування
властивостей в об'єкті. Синтаксис оператора: "key" in object
при цьому ліворуч від оператора "in" має бути ім'я властивості.
Зазвичай це рядок у лапках. Приклад;
let user = { name: "John", age: 30 };
console.log( "age" in user ); // true, user.age існує
console.log( "blabla" in user ); // false, user.blabla не існує
А в разі, якщо ми не ставимо лапки - це буде означати, що ми
вказуємо саме змінну, де знаходиться ім'я властивості. Ось приклад: 
let user = {age: 30};
let key = "age";
console.log(key in user); // true, ім'я властивості було взято зі 
змінної key. 
Також, для вирішення потрібно пройтись по всіх властивостях об'єктау
використовують цикл for..in та взяти значення ключа. Синтаксис циклу:
for (key in object) {
  // тіло циклу виконується для кажної властивості об'єкта
}
Таким чином, рішенням буде: */
// let sum = 0;
// for (let prop in salaries) {
// 	sum += salaries[prop];
// }

// solution via operator typeof and converting to number:
/* Щоб переконатися, що значення, що додаються, є числовими, і уникнути
неочікуваних результатів через неправильні типи даних, можна явно 
перетворити значення на числа. */
// let sum = 0;
// for (let key in salaries) {
// 	if (typeof salaries[key] === 'number') {
// 		sum += Number(salaries[key]); // Use Number() to ensure the value is treated as a number
// 	}
// }

// solution via checking Object.keys(obj).length beforehand:
/* Якщо потрібно явно обробити випадок, коли об’єкт порожній (чи для 
читабельності чи для логічного наголосу), можна спочатку додати умову 
перед виконанням циклу. Такою умовою може бути попередня перевірка на 
те чи об'єкт пустий (або наявність властивостей в об'єкті). Якщо розмір
об'єкта > 0, що значить є хоча б одна властивість, то тоді проходитись 
по властивостях об'єкту та брати їх значення, а якщо ні, то вивести 
повідомлення що немає значень для підрахунку. Отже, рішенням буде: */
// let sum = 0;
// if (Object.keys(salaries).length > 0) {
// 	for (let key in salaries) {
// 		sum += salaries[key];
// 	}
// } else {
// 	console.log('No salaries to sum.');
// }

// solution via Object.values(obj) and method Array.reduce:
/* За допомогою Object.values(salaries) ми отримуємо всі значення 
властивостей з об’єкта salaries як масив [100, 160, 130];
Метод reduce накопичує ці значення починаючи з 0, крім того, порожній
об’єкт salaries безпосередньо призводить до результату 0. Рішення: */
// let sum = Object.values(salaries).reduce(
// 	(accumulator, currentValue) => accumulator + currentValue,
// 	0
// );

// Перевірка результату:
// console.log(sum); // 390
// =======================================================================

// =========================== Task 06 ===================================
// UA: Як перевірити, чи значення об'єкта є об'єктом чи ні?
// EN: How to check whether the object value is an object or not?

// solution via typeof operator:
// typeof anyVariable === 'object' && anyVariable !== null;
/* перевірку на ноль також потрібно проводити бо 
   typeof null = object - загальнопризнана помилка JS
*/
// =======================================================================

// =========================== Task 07 ===================================
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
// 	console.log('✔️ The "name" key exists in the person object.');
// } else {
// 	console.log('❌ The "name" key does not exist in the person object.');
// }
/* Але цей метод не працює для об’єктів, створених за допомогою
   Object.create(obj), оскільки він не успадковує Object.prototype,
   що робить hasOwnProperty() недоступним для створеного об’єкту.
   Використовуючи hasOwnProperty(), об’єкт викине помилку, типу:
   const user = Object.create({ name: 'Gantz' });
   console.log(user.hasOwnProperty('name')); // false

   Ось чому ми маємо статичний метод hasOwn() всередині глобального 
   класу Object. Тому Object.hasOwn() є більш рекомендованим для 
   застосування ніж метод hasOwnProperty(), звичайно в браузерах де
   він підтримується. Таким чином, Object.hasOwn() є альтернативним
   методом що може бути успадкованим.
*/
// const hasAge = Object.hasOwn(person, 'age');
// if (hasAge) {
//   console.log(`✔️ We have age property with value ${person.age}.`);
// } else {
//   console.log("❌ We don't have age property.");
// }

// or let's apply directly method Object.hasOwn, like:
// const user = Object.create({ name: 'Gantz' });
// console.log(Object.hasOwn(person, 'name')); // true

// solution via using the 'in' operator:
// if ('name' in person) {
// 	console.log('✔️ The "name" key exists in the person object.');
// } else {
// 	console.log('❌ The "name" key does not exist in the person object.');
// }

// solution via using undefined or null:
/* Зауваження: цей метод може не працювати належним чином, якщо хоч ключ і
   існує, але має значення "undefined" або "null".*/
// if (person.name !== undefined) {
// 	console.log('✔️ The "name" key exists in the person object.');
// } else {
// 	console.log('❌ The "name" key does not exist in the person object.');
// }

// solution via using optional chaining operator:
/* optional chaining (?.) checks first if person exists and then if person.name  
   exists. It returns 'undefined' if any part of the chain is missing */
// if (person?.name) {
// 	console.log('✔️ The "name" key exists in the person object.');
// } else {
// 	console.log('❌ The "name" key does not exist in the person object.');
// }

// solution via Object.keys() and Array.prototype.some() methods:
/* Basically, we are converting the object to the array of properties, and then
   we have some method with predicate function where we are checking the presence
   of the target property 'name'. But this method has the same drawback as the 
   Object.prototype.hasOwnProperty() because we can’t find the object property
   if the object is created with Object.create(obj) method.
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

// =========================== Task 08 ===================================
// UA: Як порівняти два об’єкти та їх значення, щоб побачити, чи мають вони
//     однаковий вміст, навіть якщо вони вкладені в інші об’єкти чи масиви?
// EN: How to compare two objects and their values to see if they have the
//     same content, even if they are nested within other objects or arrays?

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

// =========================== Task 09 ===================================
// UA: В нас є об'єкт "myObj". Виведіть тільки властивості, що стосуються
//     "cars" в потрібному виді типу: назва бренду авто : через кому, назви
//      моделей цього бренду. Приклад формату надано нижче.
// EN: We have an object "myObj". Output only the properties related to
//     "cars" in the desired type: car brand name : commas, model names of
//     this brand. An example entry is provided below.

// You need to get exactly in the following structure:
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
/* Інструкція JavaScript for..in циклично переглядає властивості об’єкту
   - тобто блок коду всередині циклу for..in буде виконано один раз для 
   кожної властивості об'єкту. Доступ до вкладених об’єктів можна робити
   за допомогою нотації: "через крапку" або "через-квадратні дужки".
   Отже буде два цикла: спочатку проходитись циклом for..in по властивостях
   назви бренду, а потім так само циклом for..in по назвам моделей, типу: 
*/
// let x = '';
// for(let i in myObj.cars) {
//    x += myObj.cars[i].name + ' -> ';
//    for (let j in myObj.cars[i].models) {
//       x += '-' + myObj.cars[i].models[j] + ',' + ' ';
//    }
// }

// console.log(x);
// =======================================================================

// =========================== Task 10 ===================================
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

// solution via Array.map method:
// let newArr = myArr.map((val, i, arr) => {
// 	return {
// 		value: val,
// 		index: i,
// 	};
// });
// console.log(newArr);
// =======================================================================

// =========================== Task 11 ===================================
// UA: Маємо масив об'єктів "data". Потрібно створити новий масив об'єктів
//     який буде мати лише об'єтки з країнами, які мають населення понад
//     500 мільйонів.
//     Дрге завдання: підрахуйте кількість населення яке проживає в усіх
//     країнах, крім Китаю.
// EN: We have an array of objects "data". It is necessary to create a new
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

// =========================== Task 12 ===================================
// UA: Ми маємо об'єкт "obj" у якого параметрами є змінна 'location' та метод
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

// =========================== Task 13 ==================================
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

// =========================== Task 14 ==================================
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

// =========================== Task 15 ===================================
// UA: Розширити прототип об'єкта String методом exclaim(), звичайно, якщо
//     його немає в прототипі. Метод повинен додавати знак оклику в рядок
//     символів скільки потрібно раз та виводити результат у консоль.
// EN: Extend the prototype of object String with the method exclaim(), if
//     it doesn't exist. Method should add exclaimation mark to the string
//     and display it in the console.

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
// =======================================================================

// =========================== Task 16 ===================================
// UA: Маємо об'єкт "person". Додайте дві властивості: "marriage status"
//     та "hasChildren"; перевірте наявність в цьому об'єкті ключа "name";
//     потім видаліть ключ "hasChildren"; отримайте розмір об'єкту або
//     кількість в ньому ключів; проітеруйте по власних властивостях об'єкту
//     та виведіть їх в консоль.
//     Покажіть як можна оптимізувати роботу з цим об'єктом?
// EN: We have a 'person' object. Add two properties: "marriage status" and
//     "hasChildren"; check the existence of the "name" key in this object;
//     then delete the "hasChildren" key; get the size of the object or the
//     number of keys in it; iterate over the object's own properties and
//     output them to the console.
//     Show how you can optimize work with this object?

// const person = {
// 	name: 'Modest',
// 	age: 42,
// 	car: 'Audi A6 allroads',
// };

// solution for first task:
// person['marriage status'] = 'divorced'; // додали властивість
// person.hasChildren = true; // додали властивість

// const isHasKey = 'name' in person; // true - перевіряємо наявність властивості 'name'

// delete person['hasChildren']; // видалили властивість

// const objSize = Object.keys(person).length; // отримали кількість ключів (розмір) об'єкту
// console.log('number of keys - ', objSize); // 4

// // ітеруємось по власних властивостях об'єкту:
// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log('object key ' + key + ' with value ' + person[key]); // object key name with value Modest, object key age with value 42 ...
// 	}
// }

// solution for second task:
// const person = new Map([
// 	['name', 'Modest'],
// 	['age', 42],
// 	['car', 'Audi A6 allroads'],
// ]); // створили об'єкт через структуру Map
// console.log('object Person ', person);

// person.set('marriage status', 'divorced'); // додали властивість із значенням
// person.set('hasChildren', true); // додали властивість із значенням

// const isHasKey = person.has('name'); // перевірили наявність властивості 'name'
// console.log(isHasKey); // true

// person.delete('hasChildren'); // видалили властивість

// const objSize = person.size; // отримали кількість ключів (розмір) об'єкту
// console.log('number of keys - ', objSize); // 4

// // ітеруємось по власних властивостях об'єкту
// for (let [key, value] of person) {
// 	console.log(key + ' - ' + value);
// }
// =======================================================================

// =========================== Task 17 ===================================
// UA: Створіть літерал об'єкта із двома властивостями. Забороніть
//     розширення об'єкту.
// EN: Create object literal with two properties. Deny extend the object.

// solution via method Object.preventExtensions(obj):
// const person = {
// 	name: 'Matthew',
// 	lastName: 'McConaughey',
// };
// console.log(person); // {name: 'McConaughey', lastName: 'McConaughey'}

/* Статичний метод Object.preventExtensions() запобігає додаванню
нових властивостей до об’єкта (тобто запобігає майбутнім розширенням
об’єкта). Цей метод також запобігає повторному призначенню прототипу
об’єкта. 
Спроба додати нові властивості до нерозширюваного об’єкта завершиться
невдачею: або "тихо", або, у строгому режимі, викине TypeError. Але
при цьому слід зауважити, що метод Object.preventExtensions() лише
запобігає додаванню власних властивостей. Властивості все ще можна
додавати до прототипу об’єкта. Також, прототип нерозширюваного 
об'єкта незмінний. Ну і крім того, властивості нерозширюваного
об’єкта, як правило, можуть бути видалені. Давайте покажемо це: */
// Object.preventExtensions(person); // заборонили розширення об'єкту

// перевірка неможливості додавання власних властивостей:
// person.age = 54; // намагаємось додати власну властивість

// console.log(person); // {name: 'McConaughey', lastName: 'McConaughey'}
// console.log(Object.isExtensible(person)); // false

/*Однак це не запобігає зміні існуючих властивостей або видаленню
властивостей. Це лише зупиняє пряме додавання нових властивостей до
самого об’єкта person, ось приклад: */
// Object.defineProperty(person, 'lastName', {
// 	// 'lastName' already exists, so we can redefine it or change its descriptor.
// 	value: 'Lincoln',
// 	writable: true, // Ensuring property can still be written
// 	configurable: true, // Ensuring property can still be deleted or changed
// });
// console.log(person); // {name: 'Matthew', lastName: 'Lincoln'}

// delete person.lastName; // видалили власну властивість
// console.log(person); // {name: 'Matthew'}

// А так можна показати що прототип нерозширюваного об'єкта незмінний:
// person.__proto__ = { age: 54 }; // TypeError: #<Object> is not extensible

// тут намагаємось додати власну властивість через Object.defineProperty()
// Object.defineProperty(person, 'age', {
//  //'age' doesn't exists, so we cannot add it to non-extensible object
// 	value: 54,
// }); // TypeError: Cannot define property age, object is not extensible

/* Навіть після виклику Object.preventExtensions для об’єкта все ще можна 
змінити прототип об’єкта, припускаючи, що сам прототип є розширюваним.
Але для того щоб показати таку можливість, потрібно створити інстанс об'єкту
через оператор new функції-конструктора і вже додати властивості до 
прототипу об'єкта, ось так: */
// function Person(name) {
// 	this.name = name;
// }
// const metthewMcConaughey = new Person('Matthew'); // додали власну властивість
// Person.prototype.lastName = 'McConaughey'; // додали властивість в прототипі
// console.log(metthewMcConaughey.lastName); // McConaughey - взяли з прототипу

// Object.preventExtensions(metthewMcConaughey); // заборонили розширення об'єкту
// console.log(Object.isExtensible(metthewMcConaughey)); // false

// // Adding property to the prototype affects all instances
// Person.prototype.age = 54; // додали іншу властивість в прототип
// console.log(metthewMcConaughey.age); // 54
// =======================================================================

// =========================== Task 18 ===================================
// UA: Створіть об'єкт "data" та потім задайте конфігурацію його властивостей:
//     1. id: значення = 1, можна змінювати,
//     2. type: значення = 'primary', можливе для перерахування,
//     3. category: getter повертає значення поля _category,
//                  setter встановлює значення поля _category, можливе для
//                  перерахування, можливе для конфігурування полів.
//     Використовуючи for...in які властивості будуть виведені у консоль?
// EN: Create an object "data" and configure its properties:
//     1. id: value = 1, writable
//     2. type: value = 'primary', enumerable
//     3. category: getter returns the value of the property _category,
//                  setter sets the value if the property _category,
//                  enumerable,configurable.
//     Using for...in what properties will be output to the console?

// const data = {};

// solution via method Object.defineProperty:
// Object.defineProperty(data, 'id', {
// 	value: 1,
// 	writable: true,
//  // слід пам'ятати? що за замовчуванням тут enumerable: false,
//  // а тому id не буде відображатись як властивість в for..in loop
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
// 	configurable: true, // this means you can later delete the property or change its attributes.
// });

// solutions via method Object.defineProperties:
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

// перевірка роботи
// data.category = 'Science'; // It automatically becomes an enumerable property
// of data. This is because simple property assignments (without defineProperty
// or defineProperties) create enumerable properties by default.

// console.log('Data object properties:');
// for (const field in data) {
// 	console.log(field + ': ' + data[field]); // type:.. , category:.. and _category:..
// }
/*Тут, властивість "_category" відображається як перелічувана властивість,
що свідчить про те, що їй було безпосередньо призначено значення в певній
точці коду. Тому, якщо _category визначена просто як резервне сховище для
властивості "category" і не призначене для прямого доступу або перерахування,
то його потрібно задати додатково з окремим дескриптором, у якого задати
enumerable: false, типу:
 _category: { 
        value: undefined,
        writable: true,
        enumerable: false, // Defining _category as a non-enumerable property
        configurable: true
    }
*/
// =======================================================================

// =========================== Task 19 ===================================
// UA: Напишіть функцію, яка приймає масив об'єктів та повертає масив імен
//     з тих об'єктів, у яких така властивість "name" існує.
// EN: Write a function that accepts an array of objects and returns an array
//     of the names from those objects that have such a "name" property.

// let arr = [
// 	{ a: 42 },
// 	{ name: 'Modest', ['marriage status']: 'divorced' },
// 	{},
// 	{ name: 'Ellis', age: 38 },
// 	{ surname: 'Mitchel', age: 52 },
// 	{ a: 12, b: 24 },
// 	{ name: 'Matthieu', age: 60, ['marriage status']: married },
// ];

// solution via forEach and push methods:
// function getObjWithName(array) {
// 	let result = [];
// 	array.forEach((item) => {
// 		if (item.name !== undefined) {
// 			result.push(item.name);
// 		}
// 	});
// 	return result;
// }

// solution via Array.reduce method and in-operator:
/* Цей метод виконує ітерацію по масиву та умовно накопичує імена 
   в масив на основі наявності властивості "name".*/
// function getNamesFromObjs(array) {
// 	return array.reduce((acc, item) => {
// 		if ('name' in item) acc.push(item.name); // Can also use item.hasOwnProperty('name')
// 		return acc;
// 	}, []);
// }

// solution via methods: Object.hasOwnProperty, array chain methods:
// function getNamesFromObjs(array) {
// 	return array
// 		.filter((item) => item.hasOwnProperty('name'))
// 		.map((item) => item.name);
// }

/* Aле, працюючи з об’єктами, які можуть не успадковуватись від 
Object.prototype, безпечніше уникати методів, які можуть бути 
недоступними, як то hasOwnProperty(), а тому скористаємся іншими
підходами, які безпечно перевірятимуть наявність властивості в 
об’єктах, які можуть не успадковуватись від Object.prototype, тим 
самим роблячи вирішення більш універсальним і менш схильним до 
помилок, пов’язаних зі структурою об’єкта. Це такі підходи:*/

// solution via methods: call and map:
/*Це гарантує, що можна безпечно отримати доступ до hasOwnProperty
безпосередньо з Object.prototype незалежно від структури чи 
успадкування прототипу об’єкта, який перевіряється. */
// function getNamesFromObjs(array) {
// 	return array
// 		.filter((item) => Object.prototype.hasOwnProperty.call(item, 'name'))
// 		.map((item) => item.name);
// }

// solution via in-operator and method Array.map:
/*Оператор in перевіряє, чи властивість існує в об’єкті або будь-де
 в його ланцюжку прототипів, що охоплює випадки, коли об’єкт може 
 бути створено за допомогою Object.create(null) або подібних методів,
 які призводять до того, що об’єкти не успадковуються від Object.prototype.*/
// function getNamesFromObjs(array) {
// 	return array.filter((item) => 'name' in item).map((item) => item.name);
// }

// solution via method Object.hasOwn and for-loop:
// function getNamesFromObjs(array) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (Object.hasOwn(array[i], 'name')) {
// 			result.push(array[i].name);
// 		}
// 	}
// 	return result;
// }

// console.log(getNamesFromObjs(arr)); //  ['Modest', 'Ellis', 'Matthieu']
// =======================================================================

// =========================== Task 20 ===================================
// UA: Створіть функцію, яка згрупує студентів по віку. В результаті
//     роботи повинні отримати об'єкт де ключами буде вік, а значеннями
//     масив у якому елементи - це студенти із цим віком.
// EN: Create a function that groups students by age. As a result, the
//     work should receive an object where the keys will be age, and the
//     values are an array in which the elements are students with this age.

// const students = [
// 	{ name: 'Anna', age: 20 },
// 	{ name: 'Mike', age: 24 },
// 	{ name: ' Bob', age: 20 },
// 	{ name: 'Sem', age: 19 },
// 	{ name: 'Keti', age: 23 },
// 	{ name: 'Polly', age: 20 },
// 	{ name: 'Elly', age: 23 },
// ];

// маємо отримати такий об'єкт в консолі:
// {
//    19: [{ name: 'sem', age: 19 } ],
//    20: [{ name: 'anna', age: 20 }, { name: 'bob', age: 20 }, { name: 'polly', age: 20 }],
//    23: [{ name: 'keti', age: 23 }, { name: 'elly', age: 23 }],
//    24: [{ name: 'mike', age: 24 }]
// }

// solution via Array.forEach method in a function:
/* Тут будемо будувати новий об'єкт через ітерацію по елементам списку
та створення ключа нового об'єкту взявши значення віку студента, а його
значенням - масив куда додається відповідні елементи зі списку. */
// const groupedByAge = (arrList) => {
// 	const grouped = {}; // створюємо новий об'єкт;
// 	arrList.forEach((student) => {
// 		// якщо немає такого ключа 'grouped[student.age]' в новому об'єкті
// 		if (!grouped[student.age]) {
// 			grouped[student.age] = [student]; // створюємо і додаєм цей ключ
// 		} else {
// 			grouped[student.age].push(student); // додати об'єкт 'student до масиву
// 		}
// 	});
// 	return grouped;
// };

// solution via method Array.reduce:
/* Він працює в одному виразі для кожного елемента. Цей метод
скорочує список до одного вихідного значення (у цьому випадку
згрупованого об’єкта).
Метод reduce — це потужний інструмент у JavaScript, який 
використовується для перетворення масиву в якесь одне значення.
Значення може бути будь-якого типу: число, об’єкт, масив тощо.
Функція reduce приймає два обов’язкових параметри:
1.Функція зворотного виклику, яка виконується для кожного елемента
в масиві. 2.Початкове значення для акумулятора, тут – {} (порожній
об’єкт). Цей об’єкт буде заповнений і врешті повернений. */
// const groupedByAge = (students) => {
// 	return students.reduce((acc, student) => {
// 		const age = student.age; // можна через дестрк const { age } = student;
// 		// ініціалізація масиву для віку, якщо такий масив не був створений
// 		// для кожного студента робимо перевірку чи ключ для його віку існує в акумуляторі?
// 		if (!acc[age]) {
// 			acc[age] = []; // ініціалізація масиву
// 		}
// 		// додавання поточного студента в масив значень для його віку
// 		acc[age].push(student);
// 		return acc;
// 	}, {});
// };

// solution via special Object construction Map:
/* Використання Map може зробити код більш зрозумілим за рахунок
необхідності кроку перетворення Map на звичайний об’єкт. Цей метод
є ефективним, якщо keys(ages) не є суто рядком чи числом, оскільки
об'єкт Мар може мати ключі будь-якого типу.
Map — це набір даних з ключами, як і об’єкт. Однак, на відміну від
об’єктів, Map дозволяють ключі будь-якого типу. Ось як 
він зазвичай використовується: 
let map = new Map();
map.set(key, value); // To add items
map.get(key); // To retrieve items
map.has(key); // To check if a key exists
*/
// const groupedByAge = (students) => {
// 	const ageGroups = new Map();

// 	students.forEach((student) => {
// 		const { age } = student; // або так: const age = student.age;
// 		if (!ageGroups.has(age)) {
// 			ageGroups.set(age, []); //якщо немає запису для цього віку, створити порожній масив
// 		}
// 		ageGroups.get(age).push(student); // додати студента в масив відповідного віку
// 	});

// 	// Перетворення структури Map у звичайний об'єкт
// 	return Array.from(ageGroups).reduce((obj, [age, people]) => {
// 		obj[age] = people;
// 		return obj;
// 	}, {});
// };

// перевірка роботи:
// console.log(groupedByAge(students));
// {19: Array(1), 20: Array(3), 23: Array(2), 24: Array(1)}
// =======================================================================
