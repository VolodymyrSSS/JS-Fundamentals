console.log('Topic: Functions');

// =====================Task 1.1 call-apply and this=====================
// UА: В нас є об'єкт "person" у якого визначено два методи: "fullName"
//     та "place of borne". Можете:
//     - застосувати (викликати) метод "fullName", який визначений в
//     об'єкті "person" для об'єкта "person1" та для об'єкта "person2"?
//     - застосувати (викликати) метод "plase of borne" із додатковими
//     параметрами та отримати дані місця народження акторів?
// EN: We have a "person" object that has two methods: "fullName" and
//     "place of borne". Can you:
//     - use (call) the "fullName" method that is defined in the person
//     object on the "person1" object and on the "person2" object?
//     - use (call) the "place of borne" method with additional parameters
//     and get data for the actors?

// const person = {
//   fullName: function() {
//    return "Name: " + this.firstName + " " + this.lastName;
//   },
//   ["place of borne"]: function(city, country) {
//    return this.lastName  + " was born in " + city  + ", " + country
//   }
// }
// const person1 = {
//   firstName:"Matthew",
//   lastName: "McConaughey"
// }

// const person2 = {
//   firstName:"Angelina",
//   lastName: "Jolie"
// }

/*In JavaScript, the "this" keyword refers to an object.
   Which object depends on how "this" is being invoked (used or called).
   In an object method, "this" refers to the object.
   Alone, "this" refers to the global object.
   In a function, "this" refers to the global object.
   In a function, in strict mode, "this" is undefined.
   In an event, "this" refers to the element that received the event.
   Methods like call(), apply(), and bind() can refer "this" to any object.
*/

// solution via call() method and keyword this:
/* Метод call() є попередньо визначеним методом JavaScript.
   Його можна використовувати для виклику методу, що 
   визначений в будь-якому об’єкті. Для цього, потрібно
   в параметри методу call() передати об’єкт, метод якого 
   потрібно застосувати.
*/
// let actor1 = person.fullName.call(person1);
// let actor2 = person.fullName.call(person2);

// console.log(actor1); // Matthew McConaughey
// console.log(actor2); // Angelina Jolie

// let actor1wasBorne = person["place of borne"].call(person1, "Uvalde", "USA (Texas)");
// let actor2wasBorne = person["place of borne"].call(person2, "Los Angeles", "USA (California)");

// console.log(actor1wasBorne); // McConaughey was born in Uvalde, USA (Texas)
// console.log(actor2wasBorne); // Jolie was born in Los Angeles, USA (California)

// solution via apply() method and keyword this:
/* Метод apply() є попередньо визначеним методом JavaScript також.
   За допомогою методу apply() ви можете написати метод, який можна 
   використовувати для різних об’єктів. Метод apply() подібний до 
   методу call(), проте метод apply() приймає аргументи у вигляді 
   масиву, а метод call() приймає аргументи окремо. Давайте, застомуєм
   метод apply() для отримання повного імені актора:
    
*/
// let actor1 = person.fullName.apply(person1);
// let actor2 = person.fullName.apply(person2);

// console.log(actor1); // Matthew McConaughey
// console.log(actor2); // Angelina Jolie

/* Метод apply() дуже зручний, якщо ви хочете використовувати
   масив замість списку аргументів. Це його відмінність від  
   "call()" і для другу частину завдання можна вирішити так:
*/
// let actor1wasBorne = person["place of borne"].apply(person1, ["Uvalde", "USA (Texas)"]);
// let actor2wasBorne = person["place of borne"].apply(person2, ["Los Angeles", "USA (California)"]);

// console.log(actor1wasBorne); // McConaughey was born in Uvalde, USA (Texas)
// console.log(actor2wasBorne); // Jolie was born in Los Angeles, USA (California)
// ======================================================================

// =====================Task 1.2 call and this===========================
// UА: Маємо функцію "introduce", яка використовує спеціальне ключове
//     слово "this" для передачі контенту "title", що визначений в обєктах
//     "lecturer" та "student". Покажіть, як викликати цю функцію із цим
//     контентом для різних аргументів використавши метод call()?
//     Аргументи для задачі надано нижче:
// EN: We have the introduce function, which uses the special keyword
//     'this' to transfer the title content defined in the lecturer
//     and student objects. Show how to call this function with this
//     content for different arguments using the call() method?
//     Arguments:
//     lecturer: firstName = 'Derek', lastName = 'Asencheim'
//     student: firstName = 'Nike', lastName = 'Terner'
//     student: firstName = 'Mark-Andre', lastName = 'Machony'

// function introduce(firstName, lastName) {
// 	console.log(`Hello, I am ${this.title} ${firstName} ${lastName}.`);
// }

// const lecturer = {
// 	title: 'Dr.',
// };

// const student = {
// 	title: 'student',
// };

// solution via call method:
/* The call() method of Function instances calls this function
   with a given "this" value and arguments provided individually. 
   Methods like call(), apply(), and bind() can refer this to any object.
*/
// introduce.call(lecturer, 'Derek', 'Asencheim'); // "Hello, I am Dr. Derek Asencheim."
// introduce.call(student, 'Nike', 'Terner'); // "Hello, I am student Nike Terner."
// introduce.call(student, 'Mark-Andre', 'Machony'); // "Hello, I am student Mark-Andre Machony."
// ======================================================================

// =====================Task 1.3 apply and this==========================
// UА: Оскільки масиви JavaScript не мають методу max(), замість нього
//     можна застосувати метод Math.max(). Покажіть як це можна зробити?
// EN: Since JavaScript arrays do not have a max() method, you can apply
//     the Math.max() method instead. Show how it can be done?

// Math.max(14, 24, 347, 422); // 422

// solution via apply() method:
// const maxNum = Math.max.apply(null, [14, 24, 347, 422]); // 422
// /* Перший аргумент (null) не має значення. Ці рішення дадуть той
//    самий результат: */
// const maxNum2 = Math.max.apply(" ", [14, 24, 347, 422]); // 422
// const maxNum3 = Math.max.apply(0, [14, 24, 347, 422]); // 422
// const maxNum4 = Math.max.apply(Math, [14, 24, 347, 422]); // 422
/* У строгому режимі JavaScript, якщо перший аргумент методу apply() 
   не є об’єктом, він стає власником (об’єктом) викликаної функції. 
   У "нестрогому" режимі він стає глобальним об'єктом.
*/
// ======================================================================

// =====================Task 1.4 apply and this==========================
// UА: Маємо функцію "greet", яка використовує спеціальне ключове слово
//     "this" для передачі контенту "title", що визначений в обєктi "agent".
//     Покажіть, як викликати цю функцію із цим контентом для різних
//     аргументів використавши метод apply? Аргументи для задачі задані нижче.
// EN: We have the introduce function, which uses the special keyword 'this'
//     to transfer the title content defined in the lecturer and student objects.
//     Show how to call this function with this content for different arguments using
//     the apply method?

//     Arguments for the task:
//     salutation = 'Вітання!', name = 'Тарас', salutation = 'Greetings!', name = 'John',
//     salutation = 'Salutation!', name = 'Sharlise', salutation = 'Gruß!', name = 'Fritz',
//     salutation = 'Saludo!', name = 'Carlos', salutation = '挨拶!', name = 'Saki',

// function greet(salutation, name) {
// 	console.log(`${salutation}, ${this.title} ${name}`);
// }
// const agent = {
// 	title: 'real-estate agent',
// };

// solution via apply method:
/* The apply() method of Function instances calls this function with a given
 "this" value, and arguments provided as an array (or an array-like object)./

// greet.apply(agent, ['Вітання!', 'Тарас']); // Вітання!, real-estate agent Тарас
// greet.apply(agent, ['Greetings!', 'John']); // Greetings!, real-estate agent John
// greet.apply(agent, ['Salutation!', 'Sharlise']); // Salutation!, real-estate agent Sharlise
// greet.apply(agent, ['Gruß!', 'Fritz']); // Gruß!, real-estate agent Fritz
// greet.apply(agent, ['Saludo!', 'Carlos']); // Saludo!, real-estate agent Carlos
// greet.apply(agent, ['挨拶！', 'Saki']); // 挨拶!, real-estate agent Saki
// ======================================================================

// =====================Task 1.5 bind and this===========================
// UА: Маємо два об'єкти "person" та "member". В об'єкті "person" визначений
//     метод "fullName".
//     1) Можете використати цей метод для об'єкта "member"?
//     2) А якщо використати метод як колбек функцію, ми отримуєм undefined.
//        Як виправити це та отримати вірне значення? Поясніть?
// EN: We have two objects person and member. The fullName method is defined
//     in the person object.
//     1) Can you use this method on the member object?
//     2) And if we use the method as a callback function, we get undefined.
//        How to fix this and get the correct value? Explain.

// const person = {
//   firstName:"Marthin",
//   lastName: "Luter",
//   fullName: function() {
//    return this.firstName + " " + this.lastName;
//   }
// }
// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// for the 1st - solution via bind() method:
/* The member object borrows the fullname method from person. */

// let memberFullName = person.fullName.bind(member);
// console.log(memberFullName()); // Hege Nilsen

// for the 2nd - solution via bind() method:
// when a function is used as a callback, the keyword "this" is lost. Look:
// const person = {
//   firstName:"Marthin",
//   lastName: "Luter",
//   fullName: function() {
//    return console.log(this.firstName + " " + this.lastName);
//   }
// }
// let personFullName = person.fullName;
// setTimeout(personFullName, 3000); // undefined undefined - in 3sec
/* The bind() method solves this problem. Here, the bind() method 
   is used to bind person.fullName to person.
*/
// let personFullName = person.fullName.bind(person);
// setTimeout(personFullName, 3000); // Marthin Luter - in 3sec
// ======================================================================

// =====================Task 2.1 func params=============================
// UА: Створіть функцію, яка буде підраховувати суму кожен раз із різною
//     кількістю отриманих параметрів. Результати виведіть в консоль.
// EN: Create a function that will calculate the sum each time with a
//     different number of received parameters. Output the results to
//     the console.

// solution via rest(...) parameter and for..of loop:
/* The rest parameter (...) allows a function to treat an indefinite 
number of arguments as an array. */
// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x1 = sum(6, 15, 11);
// let x2 = sum(-2, 4, 35, -25, 22, 74, -14);
// let x3 = sum(4, 9, 16, 25, 29, 100, 66, 77);
// let x4 = sum(0.16, 2.31, 12.4, 64.1,);
// let x5 = sum(-0.31, 8.5, -7.2, 44.5, -0.12,);

// console.log('results: ', x1, x2, x3, x4, x5);
// results:  32 94 326 78.97 45.370000000000005
// ======================================================================

// =====================Task 2.2 func arguments Object===================
// UА: Створіть функцію, яка отримає максимальне значення з отриманих
//     аргументів. Результат виведіть в консоль.
// EN: Create a function that will get the maximum value from the received
//     arguments. Enter the result in the console.

// solution via built-in arguments object and for-loop:
/* JavaScript functions have a built-in object called the "arguments" object.
   The "arguments" object contains an array of the arguments used when the 
   function was called (invoked). */
// function findMax() {
//   let max = -Infinity;
//   for(let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(244, 4, 5, 6, 22, 44)); // 44
// console.log(findMax(-22, -4, -136, -6, -44)); // -4
// console.log(findMax(-20, 4, -111, -16, 2)); // 4
// ======================================================================

// ============================Task 3.1 pureFunc=========================
// UA: У нас є масив об’єктів. Кожен об'єкт символізує домашню тварину.
//     В кожного об'єкта параметрами задані ім'я, вік та його вид.
//     Підрахуйте вік усіх собак, причому у "собачих роках".
//     Чи можете ви рішення показати створивши чисті функції?
// EN: We have an array of objects. Each object represents a pet. The pets
//     have a name, an age, and a type. Sum all of the dogs ages in "dog
//     years". Can you split yor solution to pure functions?

// data = [
// 	{
// 		name: 'Butters',
// 		age: 3,
// 		type: 'dog',
// 	},
// 	{
// 		name: 'Lizzy',
// 		age: 6,
// 		type: 'dog',
// 	},
// 	{
// 		name: 'Red',
// 		age: 1,
// 		type: 'cat',
// 	},
// 	{
// 		name: 'Joey',
// 		age: 3,
// 		type: 'dog',
// 	},
// ];

// solution via for-loop:
/* To translate dog ages into dog years, someone told that we have 
   to "multiply dog's age or cat's age by seven". */
// function getAges(data) {
// 	let sum = 0;
// 	for (let i = 0; i < data.length; i++) {
// 		if (data[i].type === 'dog') {
// 			let tempAge = data[i].age;
// 			sum += tempAge * 7;
// 		}
// 	}
// 	return sum;
// }
// console.log(getAges(data)); // 84

// solution via chaining arrays methods: filter(), map(), reduce():
// let ages = data
// 	.filter((animal) => {
// 		return animal.type === 'dog'; // return true if its type is equal to dog
// 	})
// 	.map((animal) => {
// 		return animal.age * 7; // to convert the ages of the dogs into dog's iears
// 	})
// 	.reduce((sum, animal) => {
// 		return sum + animal.age; // to sum the ages of all dogs
// 	});
// console.log(ages); // 84

// solution via creation of pure functions:
/* pure function in JavaScript is one that given the same input, will always return
   the same output without side effects. Put simply, pure functions only depend on 
   their input arguments. */
// First, we’ll create a function that checks if an element is a dog.
// It takes our element as input and returns either true or false.
// let isDog = (animal) => {
// 	return animal.type === 'dog';
// };
// Next, we’ll create a function that multiplies the age of an element by seven
// and returns only the age in dog years:
// let dogYears = (animal) => {
// 	return animal.age * 7;
// };
// Finally, we need a function that sums two numbers and returns the result:
// let sum = (sum, animalsY) => {
// 	return sum + animalsY;
// };
// Now that we have our three functions, we can use them with our map(),
// filter(), and reduce() chain:
// let ages = data
//   .filter(isDog)
//   .map(dogYears)
//   .reduce(sum);
// console.log(ages); // 84
// ======================================================================

// =====================Task 4.1 closure ================================
// UА: Що таке замикання (сlosure), і для чого його використовують в
//     JavaScript? Покажіть сутність замикання на прикладax використавши
//     для цього дані:
//     приклад 1: function makeLogger(), function logMessage(),
//     let message = 'Hello';
//     приклад 2: function outerFunction(), function innerFunction(),
//     const outerVariable = 'I am from outer function';
// EN: What is a closure and what is 'closure' used for in JavaScript?
//     Show the essence of the 'closure' with the examples using the
//     following data: for example1: function makeLogger(),
//     function logMessage(), let message = 'Hello';
//     for example2: function outerFunction(), function innerFunction(),
//     const outerVariable = 'I am from outer function';

// solution for first example:
/* A closure in JavaScript is a way for a function to remember and access
   the variables from the environment where it was created. In JavaScript,
   closures are created every time a function is created, at function 
   creation time.
   Here, we define a local variable "message" and an inner function 
   "logMessage". The inner function will preserve access to the variable
   even after "makeLogger" the invocation, that is because "makeLogger(" 
   forms a closure that contains the variable.
*/
// function makeLogger() {
// 	let message = 'Hello';

// 	function logMessage() {
// 		console.log(message);
// 	}

// 	return logMessage;
// }

// const logMessage = makeLogger();
// logMessage(); // "Hello"

// solution for second example:
/* Closures are commonly used to create private variables and encapsulation
   in JavaScript. By defining variables within an outer function and returning
   an inner function that accesses and modifies those variables, you can
   control the visibility and manipulation of data. This allows you to achieve
   information hiding and avoid global namespace pollution.
   Closures are often used in scenarios such as event handlers, callbacks, and
   maintaining state in functional programming. They provide a way to create
   persistent references to variables. So, the second example will be:
*/
// function outerFunction() {
// 	const outerVariable = 'I am from outer function';
// 	function innerFunction() {
// 		console.log(outerVariable);
// 	}
// 	return innerFunction;
// }
// const closure = outerFunction();
// closure(); // I am from outer function
// ====================================================================

// =====================Task 5.1 FDS===================================
// UА: Створіть функцію conc, яка повинна просто конкатенувати значення
//     двух параметрів a і b та повертати рядок.
//     Використовуйте Function Declaration Statement (FDS).
//     Викликайте функцію до її створення. Тестові дані:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'

// let result1 = conc('1', '1');
// console.log(result1); // 11

// let result2 = conc(1, 1);
// console.log(result2); // 11

// solution via глобальний об'єкт String()
// function conc(a, b) {
// 	return String(a) + String(b);
// }

// solution2 via шаблонні строки (завжди повертають рядок символів)
// function conc(a, b) {
// 	return `${a}${b}`;
// }

// solution3 via object creation that returns function
// function createSomeObj() {
// 	return {
// 		conc: conc,
// 	};

// 	function conc(a, b) {
// 		return `${a}${b}`;
// 	}
// }

// console.log(createSomeObj().conc(1, 1)); // 11
// ====================================================================

// =====================Task 5.2 FDS===================================
// UА: Створіть функцію comp, яка повинна порівнювати значення двох
//     параметрів "a" та "b" і повертати 1, якщо вони рівні та -1,
//     якщо вони не рівні. Використовуйте Function Definition Expression
//     (FDE). Викликайте функцію до її створення. Тестові дані:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
// EN: Create a function comp, which should compare the values
//     of two parameters "a" and "b", and return 1, when they equal and
//     return -1, when they are not equal. Use Function Definition
//     Expression (FDE). Call a function before it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1

// const result1 = comp('abc', 'abc');
// console.log(result1); // 1

// const result2 = comp('abC', 'abc');
// console.log(result2); // -1

// solution1 via оператор if:
// function comp(a, b) {
// 	if (a === b) {
// 		return 1;
// 	}
// 	return -1;
// }

// solution2  via "ternary" оператор:
// function comp(a, b) {
// 	return a === b ? 1 : -1;
// }
// ====================================================================

// =====================Task 5.3 FDS===================================
// UA: Створіть масив з цілих чисел. Напишіть функцію, яка на основі
//     створеного масиву, буде відображаи цей масив в бінарному, восьмирічному
//     та шістнадцятирічному форматі. Виведіть ці масиви у консоль.
// EN: Create an array of integers. Write a function that, based on the created
//     array, will display this array in binary, octal and sixteenth format.
//     Output these arrays to the console.

// let arr = [24, 42, 254, 320, 4, 17];

// // solution via toString() method, spred operator and map():
// const convertToStrRadix = (number, radix) => number.toString(radix);
// console.log(convertToStrRadix(6, 2)); // 110 - вірно, працює
// console.log(convertToStrRadix(320, 8)); // 500 - вірно, працює
// console.log(convertToStrRadix(42, 16)); // 2a - вірно, працює

// let arrBinary = [...arr].map(function (item, i, arr) {
// 	return convertToStrRadix(item, 2);
// });
// let arrX8 = [...arr].map(function (item, i, arr) {
// 	return convertToStrRadix(item, 8);
// });
// let arrX16 = [...arr].map(function (item, i, arr) {
// 	return convertToStrRadix(item, 16);
// });
// console.log(arrBinary);
// // ['11000', '101010', '11111110', '101000000', '100', '10001']
// console.log(arrX8); //  ['30', '52', '376', '500', '4', '21']
// console.log(arrX16); // ['18', '2a', 'fe', '140', '4', '11']
// ====================================================================

// =====================Task 6.1 AF ===================================
// UA: Створіть анонімну функцію, яка повинна вивести повідомлення
//     'message in console' в конолі. Використовуйте її як обробник
//     події "click" для кнопки. При цьому виведіть в консоль те, що
//     показує ключове слово "this".
// EN: Create an anonymous function, which should display message
//     'message in console' in console. Use it as an event handler
//     of event "click" of the button. At the same time, display
//     the keyword "this" in the console.

// To define the button-node, we have this line-code:
// const button = document.getElementById('btn-create-promise');

// solution1 via function declaration:
// const handler = function () {
// 	console.log('message in console');
// 	console.log(this); // <button id="btn-create-promise" type="button">Create Promise</button>
// };
// button.addEventListener('click', handler);

// solution2 via arrow function:
// const handler = () => {
// 	console.log('message in console');
// 	console.log(this); // {} because the arrow function is used
// };
// button.addEventListener('click', handler);

// solution3 via IIFE:
// (function () {
// 	const button = document.getElementById('btn-create-promise');
// 	const handler = function () {
// 		console.log('message in console');
// 		console.log(this); // <button id="btn-create-prom...
// 	};
// 	button.addEventListener('click', handler);
// })();
// ====================================================================

// =====================Task 6.2 AF closure ===========================
// UА: Вам потрібно написати функцію "makeCounter". Вона повинна
//     прийняти початкове значення лічильника та повернути об’єкт, який
//     має методи: зменшити значення, збільшити значення та отримати
//     значення. Покажіть в рішенні сутність використання замикання.
// EN: You need to write "makeCounter" implementation. It should accept
//     the initial value of the counter and return an object, which has
//     methods: decrease, increase, and get. Show the essence of closure.

// solution via closure and usage of arrow function:
// const makeCounter = (initialValue = 0) => {
// 	let value = initialValue;

// 	return {
// 		increase: () => ++value,
// 		decrease: () => --value,
// 		get: () => value,
// 	};
// };

// const counter = makeCounter(10);
// console.log(counter.increase()); // 11
// console.log(counter.decrease()); // 10
// console.log(counter.decrease()); // 9
// console.log(counter.decrease()); // 8
// console.log(counter.get()); // 8
// ======================================================================

// ==============Task 7.1 Named Function Expression (NFE) ===============
// UА: Створіть функцію fibo, яка повинна підраховувати числа Фібоначчі
//     по формулі: F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Створіть функцію factorial, яка повинна обрахувати факторіал числа
//     по формулі: Fn = 1 * 2 *..*n.
//     Використовуйте Named Function Expression (NFE).
// EN: Create a function fibo should calculate Fibonacci numbers according
//     to the formula: F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a
//     number according to the formula: Fn = 1 * 2 *..*n.
//     Use Named Function Expression (NFE).

// solution1 for fibo
// const fibo = function fibonacci(n) {
// 	if (n === 0) {
// 		return 0;
// 	} else if (n === 1) {
// 		return 1;
// 	} else {
// 		return fibonacci(n - 1) + fibonacci(n - 2);
// 	}
// };

// console.log(fibo(6)); // 8 (Fibonacci number at index 6)

// solution2 for factorial
// function factorial(n) {
// 	if (n === 0 || n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n - 1);
// 	}
// }

// console.log(factorial(5)); // 120 (Factorial of 5)
// ======================================================================

// ==============Task 8.1 Function Constructor (FC) =====================
// UA: Що таке функція-конструктор, які їх особливості? Приведіть приклад
//     функції-конструктора, що вона повертає, розкрийте сутність її роботи?
// EN: What is a constructor function, what are their features? Give an
//     example of a constructor function, what it returns, reveal the
//     essence of her work?

// solution:
/*The regular {...} syntax allows us to create one object. But often we 
need to create many similar objects - for this, constructor functions are
used. So, the main purpose of constructors – to implement reusable object 
creation code.
Constructor functions technically are regular functions. There are two 
conventions though:
1) they are named with capital letter first,
2) they should be executed only with "new" operator.
We can check whether it was called with "new" or without it, using a special 
"new.target property". It is undefined for regular calls and equals the
function if called with new.
*/
// function User(name) {
// 	this.name = name;
// 	this.isAdmin = false;

// 	new.target;
// }

// let user = new User('Modest');

// console.log(user.name); // Modest
// console.log(user.isAdmin); // false

// // call without "new" operator:
// console.log(User()); // undefined

/* When a function is executed with new, it does the following steps:
A new empty object is created and assigned to "this". 
The function body executes. Usually it modifies "this", adds new 
properties to it. 
The value of "this" is returned.
So, let user = new User("Modest") gives the same result as:
let user = {
  name: "Modest",
  isAdmin: false
};
*/
// Of course, we can add not only properties to "this", but also methods:
// function AnotherUser(name) {
// 	this.name = name;

// 	this.sayHi = function () {
// 		console.log('My name: ' + this.name);
// 	};
// }

// let peter = new AnotherUser('Peter');
// peter.sayHi(); // My name: Peter

/* Usually, constructors do not have a return statement. Constructors   
task is to write all necessary stuff into "this", and it automatically  
becomesthe result. But if there is a return statement, then the rule 
is simple:
If return is called with an object, then the object is returned
instead of "this". If return is called with a primitive, it’s 
ignored and "this" is returned.
*/
// function SomeUser() {
// 	this.name = 'Simon';
// 	return 'Bob'; // <-- повертає this
// 	// чи так
// 	// return; // <-- повертає this
// }
// console.log(new SomeUser().name); // Simon
// ======================================================================

// ==============Task 8.2 Function Constructor (FC) =====================
// UA: Об'явіть дві змінні: "params" і "body" та надайте їм такі значення,
//     які, будуть представляти собою список параметрів та тіло майбутньої
//     функції. Потім створіть функцію, яка буде використовувати цi дані,
//     за допомогою FC. Викличте цю функцію.
// EN: Declare two string variables: params and body and initialize them
//     with string values, which represent the list of parameters and the
//     body of future function. Create function using these variables with
//     the help of FC. Call this function.

// const params = 'a, b';
// const body = 'return a + b;';

// const myFunction = new Function(params, body);

// const result = myFunction(2, 3);
// console.log(result); // 5
// ======================================================================

// ==============Task 8.3 Function Constructor (FC) =====================
// UA: Створіть функцію-конструктор Calculator, яка створює об'єкт із
//     трьома методами:
//     - read() запитує два значення за допомогою prompt та зберігає їх
//       значення у властивостях об'єкта;
//     - sum() повертає суму цих властивостей;
//     - mul() повертає множину цих властивостей.
// EN: Create a Calculator constructor function that creates objects with
//     three methods:
//     - read() requests two values ​​using prompt and stores their value in
//       the properties of the object,
//     - sum() returns the sum of these properties,
//     - mul() returns the product of these properties.

// solution via function-constructor creation:
// function Calculator() {
// 	this.read = function () {
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	};

// 	this.sum = function () {
// 		return this.a + this.b;
// 	};
// 	this.mul = function () {
// 		return this.a * this.b;
// 	};
// }

// let calculator = new Calculator(); // create an instanse
// calculator.read(); // initialize method to get and read the values

// console.log(calculator.sum()); // 1enter 6, 2enter 6, get 12
// console.log(calculator.mul()); // 1enter 6, 2enter 6, get 36
// ======================================================================

// ==============Task 8.4 Function Constructor (FC) =====================
// UA: Створіть функцію-конструктор Accumulator(startingValue). Об'єкт,
//     який вона створює, має вміти таке:
//     - Зберігати "поточне значення" як value. Початкове значення
//       встановлюється в аргументі конструктора StartValue;
//     - Метод read() повинен використовувати prompt для зчитування нового
//       числа та додавання його до value.
//     Іншими словами, властивість value є сумою всіх введених користувачем
//     значень, з урахуванням початкового значення startingValue.
// EN: Create a constructor function Accumulator(startingValue). The object
//     it creates must be able to do the following:
//     - store the “current value” in the value property. The starting value
//       is set in the startingValue constructor argument,
//     - the read() method must use prompt to read the new number and add it
//       to value.
//     In other words, the value property is the sum of all user-entered
//     values, taking into account the startingValue.

// solution via function-constructor creation:
// function Accumulator(startingValue) {
// 	this.value = startingValue;

// 	this.read = function () {
// 		return (this.value += +prompt('How many to add?', 0));
// 	};
// }

// let accumulator = new Accumulator(1); // початкове значення 1

// accumulator.read(); // додає введене користувачем значення до поточного значення
// accumulator.read(); // додає введене користувачем значення до поточного значення

// console.log(accumulator.value); // виведе суму цих значень
// ======================================================================

// =================Task 9.2 Arrow Function (ArF) =======================
// UA: Об'явіть масив arr = [1, 8, 3, 5, 12, 7, 9, 11]. Використовуючи
//     стрілкові функції створіть новий масив з елементів elem * elem,
//     які меньше 100 та відсортуйте цей масив на збільшення. Виведіть
//     результат у консоль.
// EN: Declare an array arr = [1, 8, 3, 5, 12, 7, 9, 11]
//     Using arrow functions create new array which contains elem * elem.
//     These elements should be less than 100, sort it in ascending order.
//     Display the result in the console.

// const arr = [1, 8, 3, 5, 12, 7, 9, 11];

// const squaredArray = arr
// 	.map((elem) => elem * elem)
// 	.filter((elem) => elem < 100)
// 	.sort((a, b) => a - b);

// console.log(squaredArray); // [1, 9, 25, 49, 64, 81]
// ======================================================================

// ================Task 10.1 Callback Function (ClbF) ===================
// UA: Будь ласка, поясніть, як працює функція callback, і наведіть
//     декілька прикладів.
// EN: Please explain what a callback function is and give a few simple
//     examples.

// solution:
/* Функція зворотного виклику — це функція, яка передається як аргумент
іншій функції та виконується після завершення якоїсь попередньої операції.
Нижче наведено приклад простої функції зворотного виклику, яка виводить у
консоль після виконання кількох операцій:
*/
// function modifyArray(arr, callback) {
// 	arr.push(100);
// 	callback(arr); // Pass the 'arr' variable as an argument
// }

// const array = [1, 2, 3, 4, 5];
// modifyArray(array, function (arr) {
// 	// accept 'arr' as a parameter in the callback
// 	console.log('array has been modified: ', arr); // array has been modified: (6) [1, 2, 3, 4, 5, 100]
// });

/*Here is a second example to destinguish high order function and callback function*/
// function add(a, b) {
// 	return a + b;
// }
// function divide(a, b) {
// 	return a / b;
// }
// function calculate(x, y, operation) {
// 	return operation(x, y);
// }
// check usage
// console.log(calculate(40, 2, add)); // 42
// console.log(calculate(40, 2, divide)); // 20
// ======================================================================

// ================Task 11.1 Recursive Function (RcF) ===================
// UA: Створіть функцію pow(x, n), яка підносить число "x" до натурального
//     ступеня "n". Інакше кажучи, множить "x" на себе "n" разів. Поясніть
//     на цьому прикладі обчислення степені числа, що таке рекурсія?
// EN: Create a function pow(x, n) that raises the number "x" to the power
//     of "n". Otherwise, apparently, multiply "x" by itself "n" times.
//     Explain using this example of calculating the power of a number,
//     what is recursion?

// solution via recursion and condition if..else:
/* Рекурсія - це прийом програмування, корисний у ситуаціях, коли завдання
може бути природно розділена на кілька подібних, але більш простих 
завдань. Або коли задача може бути спрощено до нескладних дій плюс простий
варіант тієї самої задачі. У процесі виконання завдання у тілі функції 
можуть бути викликані інші функції для виконання якихось підзавдань. 
Окремий випадок такого виклику – коли функція викликає сама себе. Це якраз 
і називається рекурсією.
Отже, створимо функцію pow(x, n), виклик якої буде мати результатом: 
pow(2, 2) = 4; pow(2, 3) = 8; pow(2, 4) = 16 тому спробуємо розділити
цю задачу на якісь прості дії: нам треба множити число "x" на самого  
себе "n" разів. Тут простою дією - "кроком рекурсії" (або гілкою) буде
запис x * pow(x, n - 1). Як бачимо, таким записом ми зводимо до простої
дії множчення на число "x" та подібного більш простішого завдання (pow із
меньшим "n"). Але виникає питання: скільки кроків ми так будемо робити?
Наступні кроки будуть спрощувати завдання більше і більше доки "n" не 
досягне значення 1. І тут стає зрозуміло, що якщо n==1 то pow(x, 1) 
дорівнює "x". Цю гілку називають "базою рекурсії" бо одразу стає очевидним 
результат. Кажуть, що функція pow рекурсивно викликає саму себе до n == 1. 
Ось давайте подивимось на прикладі, рекурсивного обчислення pow(2, 4) який 
має такі кроки:
pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
Таким чином, рекурсію використовують, коли обчислення функцій можна звести до 
її простого виклику, а його – до ще більш простого і так далі, доки значення 
не стане очевидним. */
// function pow(x, n) {
// 	if (n == 1) {
// 		return x;
// 	} else {
// 		return x * pow(x, n - 1);
// 	}
// }
// console.log(pow(2, 2)); // 4
// console.log(pow(2, 3)); // 8
// console.log(pow(2, 4)); // 16

// solution via recursion and ternary operator:
// function pow(x, n) {
// 	return n == 1 ? x : x * pow(x, n - 1);
// }

// solution via for loop:
// function pow(x, n) {
// 	let result = 1;
// 	// множимо result на x n разів в циклі
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }
// console.log(pow(2, 3)); // 8
// console.log(pow(3, 3)); // 27
// console.log(pow(4, 3)); // 64
// ======================================================================

// ================Task 11.2 Recursive Function (RcF) ===================
// UA: Поясніть на прикладі обчислення факторіалу що таке рекурсія?
// EN: Explain what recursion is on the example of factorial calculation?

// solution via recursion and operator if:
/* Давайте спочатку визначимо що таке факторіал. Факторіал натурального 
числа – це число, помножене на "себе мінус один", потім на "себе мінус два", 
і так далі до 1. Факторіал "n" позначається як "n!". Визначення факторіалу
можне записати як n! = n * (n - 1) * (n - 2) * ... * 1
Ось приклади деяких значень факторіалу та як вони отримані:
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Отже, в нас стоїть задача – написати функцію factorial(n), яка повертає n!, 
використовуючи рекурсію.
   Що ж таке рекурсія в функції? По суті, це техніка, коли функція викликає
сама себе, доки не буде виконано певну умову, а відсутність цієї умови 
призводить до переповнення стеку та збою програми.
   Як ми знаємо, рекурсивна функція складається з двох умов: рекурсивної
та базової. Базова умова - це умова, яка завершує виконання функції в
нескінченому ланцюгу викликів. Кожна рекурсивна функція повинна мати
принаймні одну базову умову виходу, щоб не сталось переповнення стеку
викликів. В нашому випадку - це умова, коли число факторіалу повертає 
одиницю незважаючи не те що множиться на нуль, а на нуль, в математиці,
множити не можна.
   А рекурсивна умова - це умова, яка викликає цю саму функцію знову
- саму себе. В нашому випадку - це результат добутку усіх чисел до 
заданого числа факторіалу (не включаючи самого числа): x * (x - 1)
та сума добутку попередніх чисел:
5 * (5 - 1) = 20 + 
4 * (4 - 1) = 12 +
3 * (3 - 1) = 6 +
2 * (2 - 1) = 2 +
1 * (1 - 1) = 1 +
*/

// function factorial(x) {
// 	// base case
// 	if (x === 0) return 1;

// 	// recursive case (function calls itself)
// 	return x * factorial(x - 1);
// }

// // verify result:
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120
// ======================================================================

// ================Task 11.3 Recursive Function (RcF) ===================
// UA: Маємо масив із вкладеними підмасивами. Напишіть функцію, яка
//     перетворить його в однорідний масив (не має рівнів вкладеності)
//     використавши для цього рекурсію.
// EN: You are given a nested array as input, and you need to write
//     a function to convert it to a one-level array (with no subarrays
//     in it) using recursion for this.

// let input = [25, 42, [14, 72, [64, 92]]];

// solution via recursion and methods: reduce and Array.isArray:
/* Ми знаємо, що рекурсію використовують, коли обчислення функції 
можна звести до її простішому виклику, а його – до ще простішого і
аж доки значення не стане очевидним.
Тому очевидним є те, що нам треба конканувати кожен наступний 
елемент масиву до попереднього щоб отримати однорідний масив - це 
і буде базою рекурсії. Отже, база рекурсії - конкатенація елементів 
у простий/однорідний масив, що і буде повертати ця функція.
А рекурсивна умова тут буде перевірка елемента на його належність
до масиву, і якщо - так, то конканувати елементи цього масиву до 
попередніх елементів, що робить база рекурсії у цій самій функції.
Отже треба викликати її знову, або викликати саму себе щоб звести  
вирішення до бази рекурсії, яка власне і конкатенує елементи масиву. */

// function flatArray(array) {
// 	return array.reduce((accum, item) => {
// 		// recursive case
// 		if (Array.isArray(item)) {
// 			return accum.concat(flatArray(item));
// 		}

// 		// return base case
// 		return accum.concat(item);
// 	}, []);
// }

// solution via recursion, method reduce and ternary operator:
// function flatArray(array) {
// 	return array.reduce((accum, item) => {
// 		return accum.concat(Array.isArray(item) ? flatArray(item) : item);
// 	}, []);
// }

// console.log(flatArray(input)); // [25, 42, 14, 72, 64, 92]
// ======================================================================

// ==========================Task 08=====================================
// UA: Ми маємо рядок string як речення. Створіть функцію findVowels
//     яка підрахує число голосних букв у цьому реченні.
// EN: We have the string. Create a function findVowels that
//     counts the number of vowels in this string.

// let string = 'As sly as a FOX, as strong as an OX';

// // solution via uincludes() method and for..of loop:
// const findVowels = (str) => {
// 	let count = 0;
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	for (let char of str.toLowerCase()) {
// 		if (vowels.includes(char)) {
// 			count++;
// 		}
// 	}
// 	return count;
// };
// findVowels(string); // 9

// // solution via regEx:
// const findVowels = (str) => {
// 	// to match vowels (case-insensitive)
// 	const foundVowels = str.match(/[aeiou]/gi);
// 	console.log(foundVowels); // ['A', 'a', 'a', 'O', 'a', 'o', 'a', 'a', 'O']

// 	// check if vowelCount is null (no matches found) or get its length
// 	return foundVowels ? foundVowels.length : 0;
// };

// const vowelCount = findVowels(string);
// console.log(vowelCount); // 9

// Task 7. IIFE
// UA: Створіть конструкцію, за допомогою якої буде виконана раніше реалізована
//     функція conc.
// EN: Create a construction which allows to run the above function conc.

// const conc = (a, b) => String(a) + String(b);

// solution via IIFE:
/* the purpose of a self-executing function or IIFE - it’s all about variable 
   scoping. By default, variables declared in the self-executing function are 
   only available to code within the self-executing function. This allows code 
   to be written without concern of how variables are named in other blocks of 
   JavaScript code. Here is example:
   (function() {
      var foo = 3;
      console.log(foo); // 3
   })();
   console.log(foo); // error - 'foo' is not defined
*/

// (function conc(a, b) {
// 	console.log(`${a}${b}`);
// })(4, 2);

// (function conc(a, b) {
// 	console.log(`${a}${b}`);
// })('4', '2');

// ==========================Task 08=====================================
// UA: Створіть функцію, яка приймає на вхід два аргумента: масив унікальних
//     цілих чисел та суму у виді цілого числа. Якщо сума двух чисел масиву
//     з першого аргументу дорівнює сумі числа яке прийшло як другий аргумент,
//     то функція повинна повернути масив цих чисел в любому порядку, а якщо
//     рішення не має, то функція повинна повернути пустий масив.
// EN: Create a function that takes two arguments: an array of unique integers
//     and an integer sum. If the sum of two array numbers from the first argument
//     is equal to the sum of the number that came as the second argument, then
//     the function must return an array of these numbers in any order, and if
//     there is no solution, then the function must return an empty array.

// const myNumbers1 = [3, 5, -4, 8, 11, 1, -1, 6];
// const myNumbers2 = [3, 5, -4, 8, 11, 1, -12, 6];
// const sum = 10;

// const geNumbersForSum = (nums, target) => {
// 	for (let i = 0; i < nums.length; i++) {
// 		const firstNum = nums[i];

// 		for (let j = i + 1; j > nums.length; j++) {
// 			const secondNum = nums[j];
// 		}

// 		if (firstNum + secondNum === target) {
// 			return [firstNum, secondNum];
// 		}
// 	}
// 	return [];
// };

// console.log(geNumbersForSum(myNumbers1, sum)); // [11, -1]
// console.log(geNumbersForSum(myNumbers2, sum)); // []
// =======================================================================

// Task 8. Arguments Object, Rest
// UA: Створіть функцію parts, яка отримує невідому кількість параметрів.
//     Кожен параметр – це група слово-виразів (речення).
//     Функція повинна вирізати з параметра підрядок, починаючи з символу двікрапки - (:)
//     та закінчуватись символом крапка - (.).
//     Функція повинна повертати масив з таких вирізаних підрядків.
//     Використовуйте Function Definition Expression (FDE).
//     Дані для перевірки роботи:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
// EN: Create a function parts, which takes unknown quantity of parameters.
//     Each parameter is a group of sentances.
//     The function should cut out the substring from the parameter, starting with the colon (:)
//     and ending with a period (.) character.
//     The function should return an array of substrings.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     param1 = "This is the first sentence. This is a sentence with a list of items:
//               cherries, oranges, apples, bananas."
//     param2 = "This is the second sentence. This is a sentence with a list of items:
//               red, blue, yellow, black."
//     result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].

// const param1 =
// 	'This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.';
// const param2 =
// 	'This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.';

// // solution via 'arguments'
// const parts = function () {
// 	const result = [];

// 	for (let i = 0; i < arguments.length; i++) {
// 		const param = arguments[i];
// 		const startIndex = param.indexOf(':') + 1; // взяти з наступного після ':'
// 		const endIndex = param.indexOf('.', startIndex); // може закінчуватись як на '.' так і на ':'
// 		console.log(endIndex);
// 		const substring = param.substring(startIndex, endIndex).trim();
// 		result.push(substring);
// 	}
// 	return result;
// };

// console.log(parts(param1, param2));

// // other solution via 'arguments'
// const parts = function () {
// 	// console.log(arguments);
// 	// console.log([...arguments]); // у виді масиву
// 	// console.log(Array.from(arguments)); // у виді масиву
// 	// Array.prototype.forEach.call(arguments, (a) => console.log(a)); // у виді масиву

// 	const res = [];

// 	// ітеруємо по елементам 'arguments'
// 	for (let a of arguments) {
// 		// console.log(a);
// 		const tmp = a.split(': ')[1]; // масив елементів по роздільнику ': ' та берем вираз після ':'
// 		res.push(tmp.split('.')[0]); // масив елементів по роздільнику '.' та берем вираз до '.' і додаєм до новостворюваного масиву
// 	}
// 	console.log(res);
// };

// console.log(parts(param1, param2));

// via ...rest

// ============================Task ??===================================
// UA: Напишіть функцію яка перевіряє чи рядок містить цифри? А як зміниться
//     функція якщо перевіряти чи містяться в рядку тільки цифри?
// EN: Write a function that checks whether a string contains numbers? And
//     how will the function change if you check whether the string contains
//     only numbers?

// solution via RegEx using test method:
// function containsNumbers(str) {
// 	return /\d/.test(str); // the \d metacharacter matches any digit (0 - 9) in the string
// 	// or can use [0-9] like:
// 	// return /[0-9]/.test(str);
// }

// usage check
// console.log(containsNumbers('hello123')); // true
// console.log(containsNumbers('javascript')); // false
// console.log(containsNumbers('3 apples')); // true

// solution via regExp using test method to check only numbers:
/* the ^ character marks the beginning of the string input, and
   the $ character marks the end of it. Adding the + character 
   after the \d makes regex match one or more occurrences of the
   \d pattern.*/
// function containsOnlyNumbers(str) {
// 	return /^\d+$/.test(str); //
// 	// or can use [0-9] like:
// 	// return /^[0-9]+$/.test(str);
// }
// usage check:
// console.log(containsOnlyNumbers('hello123')); // false
// console.log(containsOnlyNumbers('3453')); // true
// console.log(containsOnlyNumbers('3 apples')); // false

// solution via RegEx using String match() method:
/* the String match() method returns an array of all the matches
   of a regular expression in a string. If there are no matches, 
   it returns null. */
// function containsNumbers(str) {
// 	return str.match(/\d/);
// }
// console.log(containsNumbers('hello123')); // [ '1', index: 5, input: 'hello123', groups: undefined ]
// console.log(containsNumbers('javascript')); // null
// console.log(containsNumbers('3 apples')); // [ '3', index: 0, input: '3 apples', groups: undefined ]

/* That's why we pass the result of match() to the Boolean() constructor
 to convert it to a Boolean value. Boolean() converts truthy values to true, 
 and falsy values to false. */
// function containsNumbers(str) {
// 	return Boolean(str.match(/\d/));
// }
// console.log(containsNumbers('hello123')); // true
// console.log(containsNumbers('javascript')); // false
// console.log(containsNumbers('3 apples')); // true
// ======================================================================

// =====================Task 09===================================
// UА: Є масив fruits з елементами які повторяються. Потрібно дізнатись,
//     скільки разів кожний елемент зустрічається у цьому масиві.
//     Для цього створіть функцію countFruits яка буде
//     повертати об'єкт у якого ключем буде елемент масиву,
//     а його значенням - число повторень цього елементу в масиві.
// EN: There is an array of fruits with repeating elements in it.
//     You need to find out how many times each element occurs in this
//     array. To do this, create the countFruits function, which will
//     return an object whose key will be an element of the array, and
//     its value will be the number of repetitions of this element in
//     the array.

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// // solution via forEach-method:
// const countFruits = (arrList) => {
// 	const count = {};
// 	arrList.forEach((fruit) => {
// 		if (!count[fruit]) {
// 			count[fruit] = 1;
// 		} else {
// 			count[fruit]++;
// 		}
// 	});
// 	return count;
// };

// // solution via reduce-method:
/*Inside the reduce() method, the accumulator count is initialized
as an empty object {}. For each fruit in the array, we check if the
fruit key exists in the count object. If it does not exist (count[fruit]
is falsy), we initialize it to 1. If it already exists, we increment its
value by 1*/
// const countFruits = (arrList) => {
// 	return arrList.reduce((count, fruit) => {
// 		count[fruit] = (count[fruit] || 0) + 1;
// 		return count;
// 	}, {});
// };

// console.log(countFruits(fruits));

// =====================Task 10===================================
// UA: Маємо масив з дублюючими елементами. Напишіть функцію findRepeatedEl
//     яка буде шукати перший елемент, який дублюється. Потім замініть цей
//     елемент і всі його копії на символ '*'. Виведіть отриманий масив у консоль.
// EN: We have an array with duplicate elements. Write a function findRepeatedEl
//     that will search for the first element that is duplicated. Then replace
//     this element and all copies of it with the '*' character. Output the
//     resulting array to the console.

// const duplicatedElArr = ['hp', 'sony', 'dell', 'hp', 'apple', 'hp', 'toshiba'];

// // solution via for-loop and methods indexOf/lastIndexOf:
// function findRepeatedEl(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		// If the same element exists in different positions, return it
// 		if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
// 			return arr[i];
// 		}
// 	}
// }
// let repeatedEl = findRepeatedEl(duplicatedElArr);
// console.log(repeatedEl); // hp
// to iterate through the array and replace the repeated element with '*'
// duplicatedElArr.forEach((item, index, array) => {
// 	if (item === repeatedEl) {
// 		array[index] = '*';
// 	}
// });
// or
// for (let i = 0; i < duplicatedElArr.length; i++) {
// 	if (duplicatedElArr[i] === repeatedEl) {
// 		duplicatedElArr[i] = '*';
// 	}
// }

// console.log(duplicatedElArr); // ['*', 'sony', 'dell', '*', 'apple', '*', 'toshiba']

// Task 9. Optional Arguments
// RU: Создайте функцию find(testString, test), которая должна возвращать позицию
//     строки test в строке testString.
//     Если второй параметр не задан, используйте test = testString.
//     Используйте Function Definition Expression (FDE).
//     Тестовые данные:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0
// EN: Create a function find(testString, test), which should return the position
//     of test string within testString.
//     If the second parameter is omitted, use default value  test = testString.
//     Use Function Definition Expression (FDE).
//     Test Data:
//     testString = 'abc', test ='b', result = 1
//     testString = 'abc', result = 0
//     testString = 'abc', test = 'd', result = -1
//     testString = 'abc', test='a', test2='b', result = 0

// const find = function (testString, test = testString) {
// 	return testString.indexOf(test);
// };

// // Test Data
// const testString1 = 'abc',
// 	test1 = 'b'; // Result: 1
// const testString2 = 'abc'; // Result: 0
// const testString3 = 'abc',
// 	test3 = 'd'; // Result: -1
// const testString4 = 'abc',
// 	test4 = 'a',
// 	test2 = 'b'; // Result: 0

// // Call the function
// const result1 = find(testString1, test1);
// const result2 = find(testString2);
// const result3 = find(testString3, test3);
// const result4 = find(testString4, test4, test2);

// console.log(result1); // Output: 1
// console.log(result2); // Output: 0
// console.log(result3); // Output: -1
// console.log(result4); // Output: 0

// Task 10. Function as an Object
// RU: Создайте функцию str(), которая принимает один строчный параметр и
//     выводит в консоль 'String is non empty', если параметр - непустая строка и
//     'String is empty', если параметр – пустая строка.
//     Создайте функцию str.isNonEmptyStr(), как свойство функции str. Эта функция должна
//     принимать один параметр и возвращать true, если параметр непустая строка,
//     иначе false. Используйте эту функцию для реализации условия в основной функции.
//     Тестовые данные:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')
// EN: Create a function str(), which takes one string parameter and display in the console
//     string 'String is non empty' if the paramer is not empty string, otherwise it
//     should display 'String is empty'.
//     Create a function str.isNonEmptyStr() as a property of function str. This function
//     should take one parameter and return true, when the value of parameter is not empty
//     string, otherwise it should return false. Use this function to implement if statement
//     in the str() funtion.
//     Test Data:
//     str.isNonEmptyStr(), result = false
//     str.isNonEmptyStr(''), result = false
//     str.isNonEmptyStr('a'), result = true
//     str.isNonEmptyStr(1), result = false
//     str(), console.log('String is empty')
//     str('a'), console.log('String is non empty')

// function str(stringParam) {
//   if (str.isNonEmptyStr(stringParam)) {
//     console.log('String is non empty');
//   } else {
//     console.log('String is empty');
//   }
// }

// str.isNonEmptyStr = function(value) {
//   return (typeof value === 'string' && value !== '');
// };

// // str.isNonEmptyStr = function(inputStr) {
// //   return (typeof inputStr === 'string') && (inputStr.length > 0);
// // };

// // Test Data
// console.log(str.isNonEmptyStr()); // Result: false
// console.log(str.isNonEmptyStr('')); // Result: false
// console.log(str.isNonEmptyStr('a')); // Result: true
// console.log(str.isNonEmptyStr(1)); // Result: false

// str(); // Output: String is empty
// str('a'); // Output: String is non empty

// Task 11. Function as a Parameter
// RU: Создайте функцию toConsole с одним параметром. Функция должна выводить
//     значение параметра в консоль.
//     Создайте функцию toAlert с одним параметром. Функция должна выводить значение
//     параметра используя alert().
//     Создайте функцию splitToWords с двумя параметрами: msg и callback.
//     Функция должна разделять строку на слова и использовать колбек для отображения слов.
//     Если второй параметр не задан, функция должна возвращать массив слов.
// EN: Create a function toConsole with one parameter. The function should display
//     the value of the parameter in the console.
//     Create a function toAlert with one parameter. The function should display
//     the value of the parameter using alert.
//     Create a function splitToWords, which takes two parameters: msg и callback.
//     The function should split the value of parameter msg by the words and use callback
//     to display these words.
//     If the second parameter is omitted, the function should return array of words.
//     Test Data:
//     splitToWords("My very long text msg", toConsole);
//     result:
//     My
//     very
//     long
//     text
//     msg
//     splitToWords("My very long text msg", toAlert);
//     result = alert(My), ….
//     console.log( splitToWords("My very long text msg") );
//     result = ['My', 'very', 'long', 'text', 'msg']

// function toConsole(parameter) {
// 	console.log(parameter);
// }

// function toAlert(parameter) {
// 	alert(parameter);
// }

// function splitToWords(msg, callback = null) {
// 	const words = msg.split(' ');

// 	if (callback) {
// 		words.forEach(callback);
// 	} else {
// 		return words;
// 	}

// 	// alternative
// 	// if (callback) {
// 	// 	words.forEach((w) => callback(w));
// 	// } else {
// 	// 	return words;
// 	// }
// }

// splitToWords('My very long text msg', toConsole);
// splitToWords('My very long text msg', toAlert);
// console.log(splitToWords('My very long text msg'));

// Task 12. Function as a Result
// RU: Создайте функцию copyright, которая должна возвращать другую функцию с
//     одним параметром. Возращаемая функция должна прибавлять знак © ('\u00A9')
//     вначале своего параметра и возвращать результат. Объявите этот знак в функции copyright.
//     Тестовые данные:
//     console.log( copyright()('EPAM') ); result = © EPAM.
// EN: Create a function copyright, which should return another function with one parameter.
//     This returned function should prepend sign © ('\u00A9') to its parameter and
//     return the result. Declare the sign © ('\u00A9') inside copyright function.
//     Test Data:
//     console.log( copyright()('EPAM') ); result = © EPAM.

// const copyright = () => {
// 	const copysign = '\u00A9';
// 	return (word) => `${copysign} ${word}`;
// };

// // function copyright() {
// //   const copysign = "\u00A9";
// //   return function (word) {
// //     return `${copysign} ${word}`;
// //   };
// // }

// console.log(copyright()('EPAM'));

// Task 13. Function as a Result
// RU: Задание аналогично предыдущему, но в этот раз функция copyright получает знак
//     как свой параметр.
// EN: This task is similar to the previous one, but in this case the function copyright takes
//     one parameter - sign (© ('\u00A9')).

// const copyright = () => {
//   const copysign = "\u00A9";
//   return word => `${copysign} ${word}`;
// };

// function copyright() {
//   const copysign = "\u00A9";
//   return function (word) {
//     return `${copysign} ${word}`;
//   };
// }
// console.log( copyright()('EPAM') );

// const copyright = (copysign) => {
// //   const copysign = "\u00A9";
//   return word => `${copysign} ${word}`;
// };

// console.log( copyright("\u00A9")('EPAM') );
// console.log( copyright("!")('EPAM') );

// Task 14. Function as a Method
// RU: Создайте литерал объекта employee со следующими свойствами:
//     name: 'Ann',
//     work – функция, которая выводит в консоль сообщение "I am Ann. I am working..."
//     Тестовые данные
//     employee.work()  результат в консоле "I am Ann. I am working..."
// EN: Create an object literal employee with the following properties:
//     name: 'Ann',
//     work – function, which displays in the console the following string
//     "I am Ann. I am working..."
//     Test Data:
//     employee.work()  result in the console "I am Ann. I am working..."

// const employee = {
// 	name: 'Ann',
// 	work: function () {
// 		console.log(`I am ${this.name}. I am working...`);
// 	},
// };

// employee.work(); // Output: "I am Ann. I am working..."

// Task 15. Borrow Method
// RU: Создайте литерал объекта person со свойством name.
//     Вызовите метод work объекта employee из предыдущего задания.
// EN: Create an object literal person with property name.
//     Call the method work of the object employee from the previous task.

// const person = {
//   name: 'Boris',
// };

// змінюємо прототипний ланцюг
// Object.setPrototypeOf(person, employee);

// via method call/apply
// employee.work.call(person);

// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.
// EN: Create a function fiboMemo for calculating Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. The function should store the values computed earlier.
//     Using methods console.time(), console.timeEnd() calculate the time for function fibo
//     and fiboMemo.

// const fiboMemo = (function () {
// 	const memo = [0, 1];
// 	const fibo = function fibo_(n) {
// 		let result = memo[n];
// 		if (typeof result !== 'number') {
// 			result = fibo_(n - 1) + fibo_(n - 2);
// 			memo[n] = result;
// 		}
// 		return result;
// 	};
// 	return fibo;
// })();

// console.time('non-memo');

// for (let i = 0; i <= 20; i++) {
// 	console.log(fibo(i));
// }

// console.timeEnd('non-memo');

// console.time('memo');

// for (let i = 0; i <= 20; i++) {
// 	console.log(fiboMemo(i));
// }

// console.timeEnd('memo');

// ===========================Task tag-func===================================
// UA: Що собою представляє тег-функція у JavaScript? Поястніть як працює
//     тег-функція для цього створіть тег-функцію myTag, яка виводить у
//     консоль відформатований слово-вираз у шаблоні 'My name is MODEST
//     and I am 42 years old.' у якому ім'я трансформовано у верхній регістр.
// EN: Create a currency tag function that forms numbers up to two decimal digits.

/* У JavaScript тег-функція — це функція, пов’язана з шаблонами літералів. 
  Шаблон літералів — це спосіб визначення рядкових літералів із більш гнучким
  і потужним синтаксисом. Тег-функція — це функція JavaScript, яку можна 
  використовувати для обробки вмісту шаблону літералів. 

  Тег-функція працює наступним чином:
  - cпочатку потрібно визначити функцію, яка буде тег-функцією. Ця функція 
  приймає два аргументи: масив літералів (часто називають str) і довільну
  кількість значень (називають values);
  - коли використовується тег-функція з шаблоном літералів, потрібно розмістити
  назву тег-функції перед шаблоном літералів за допомогою зворотніх лапок (``);
  - всередині тег-функція надає доступ до масиву літералів та інтерпольованих значень;
  - далі можна маніпулювати або обробляти рядки та значення і за потреби повертати
   відформатований або змінений рядок;
  */

// function myTag(strings, ...values) {
// 	// strings is an array of string literals
// 	// values is an array of interpolated values
// 	let result = '';
// 	for (let i = 0; i < strings.length; i++) {
// 		result += strings[i];
// 		if (i < values.length) {
// 			// check if the value is a string before using .toUpperCase()
// 			if (typeof values[i] === 'string') {
// 				result += values[i].toUpperCase();
// 			} else {
// 				result += values[i]; // use the value as is if not a string
// 			}
// 		}
// 	}
// 	return result;
// }
// // usage
// const myName = 'Modest';
// const age = 42;
// const formatted = myTag`My name is ${myName} and I am ${age} years old.`;
// console.log(formatted); // "My name is MODEST and I am 42 years old."
// =====================================================================

// ===========================Task tag-func===================================
// UA: Створіть тег-функцію currency, яка формує числа до двох знаків післея коми
//     і додає знак долара перед числом в шаблонному літералі.
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.

// function currency(strings, ...values) {
// 	// initialize an empty result string
// 	let result = '';

// 	// iterate over the strings array
// 	for (let i = 0; i < strings.length; i++) {
// 		// add the current string segment to the result
// 		result += strings[i];
// 		// if there is a corresponding value, format it as a currency with two decimal digits
// 		if (i < values.length) {
// 			result += `$${values[i].toFixed(2)}`;
// 		}
// 	}
// 	return result;
// }

// // Usage
// const price = 42.567;
// const formattedPrice = currency`The total cost is: ${price}`;

// console.log(formattedPrice); // "The total cost is: $42.57"
// =====================================================================

// ===========================Task 21===================================
// UA: Створіть функцію, яка повинна вивести в консоль таку піраміду:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
// EN: Create a function that should display the next pyramid in the console:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'

// solution via two for loops:
// function pyramid(levels) {
// 	for (let i = 0; i < levels; i++) {
// 		let line = '';
// 		// add spaces on the left
// 		for (let j = 0; j < levels - i - 1; j++) {
// 			line += ' ';
// 		}
// 		// add '#' characters
// 		for (let k = 0; k < 2 * i + 1; k++) {
// 			line += '#';
// 		}
// 		// output the current line
// 		console.log(line);
// 	}
// }

// // solution via determing width for characters and spaces needed:
// function pyramid(levels) {
// 	// Determine the maximum width of the pyramid (the base)
// 	const maxWidth = 2 * levels - 1;
// 	// Iterate through each level of the pyramid
// 	for (let i = 1; i <= levels; i++) {
// 		// Calculate the number of '#' characters for the current level
// 		const numChars = 2 * i - 1;
// 		// Calculate the number of spaces needed on both sides
// 		const numSpaces = (maxWidth - numChars) / 2;
// 		// Create the line for the current level
// 		let line = '';
// 		// Add spaces on the left
// 		for (let j = 0; j < numSpaces; j++) {
// 			line += ' ';
// 		}
// 		// Add '#' characters
// 		for (let j = 0; j < numChars; j++) {
// 			line += '#';
// 		}
// 		// Add spaces on the right
// 		for (let j = 0; j < numSpaces; j++) {
// 			line += ' ';
// 		}
// 		// Output the current line
// 		console.log(line);
// 	}
// }

// pyramid(1);
// pyramid(2);
// pyramid(3);
// =====================================================================

// ===========================Task ??===================================
// Task 08. String.fromCodePoint
// UА: Створіть функцію, яка виведе в консоль рядок в форматі 'символ - код'
//     для числових кодів у діапазоні 78000 - 80000.
// EN: Create a function that displays a line in the format 'character - code' to the console
//     for codes in the range of 78000 - 80000.

// solution via String.fromCodePoint(code) method:
// function displayCharacterCodes() {
// 	for (let code = 78000; code <= 80000; code++) {
// 		// Convert the Unicode code to a character
// 		const character = String.fromCodePoint(code);

// 		// Display the character and its code
// 		console.log(`${character} - ${code}`); // ...𓡲 - 79986, 𓡳 - 79987 ...
// 	}
// }

/* NB! Certain Unicode characters may not render correctly in the console. 
   This can happen due to limitations in the console's font or encoding support.
   So, let's show how to modify code that explicitly checks if the character  
   is printable and, if not, displays a placeholder, like this: */

// function isPrintableCharacter(code) {
// 	// Check if the character is printable
// 	return (
// 		(code >= 32 && code <= 126) ||
// 		(code >= 160 && code <= 55295) ||
// 		(code >= 57344 && code <= 65535)
// 	);
// }
// // but show anyway despite the range we have in the task is out of the check and not apply to our solution
// function displayCharacterCodes() {
// 	for (let code = 78000; code <= 80000; code++) {
// 		// Check if the character is printable
// 		if (isPrintableCharacter(code)) {
// 			// Convert the Unicode code to a character
// 			const character = String.fromCodePoint(code);

// 			// Display the character and its code in the specified format
// 			console.log(`${character} - ${code}`);
// 		} else {
// 			// Display a placeholder for non-printable characters
// 			console.log(`Character Not Supported - ${code}`); // ..Character Not Supported - 79986, ...
// 		}
// 	}
// }

// lets's try code check by comparing the code point of the character using codePointAt method:
// function displayCharacterCodes() {
// 	for (let code = 78000; code <= 80000; code++) {
// 		// attempt to convert the code to a character
// 		let character = String.fromCodePoint(code);

// 		// check if the conversion was successful, or if the character is not printable
// 		if (!character || character.codePointAt(0) !== code) {
// 			// if not successful, display the code point directly
// 			character = String(code);
// 		}

// 		// Display the character and its code in the specified format
// 		console.log(`${character} - ${code}`); // ...𓡲 - 79986, 𓡳 - 79987 ...
// 	}
// }

/* but in this code, if a character is not supported or not printable in the
   console's font, it will display the "REPLACEMENT CHARACTER" (U+FFFD) along
   with the Unicode code point 65533. This unicode code point is often used as
   a placeholder for characters that cannot be displayed or are not supported
   in certain environments, including console outputs that have limitations in
   rendering specific Unicode characters. This should ensure that you see the 
   'character - code' format for the entire specified range, even for unsupported 
   characters */

// function displayCharacterCodes() {
// 	for (let code = 78000; code <= 80000; code++) {
// 		// convert the Unicode code to a character
// 		const character = String.fromCodePoint(code);

// 		// display the character and its code in the specified format
// 		console.log(`${character || String.fromCodePoint(65533)} - ${code}`);
// 	}
// }

// display the character codes in the range
// displayCharacterCodes();
// =====================================================================

// Task 16666666666666666666666666666666666666666666
// UA: В нас є масиви чисел nums1 та nums2. Потрібно вивести в консоль усі можливі варіанти
//     підмасиву від заданого. Для прикладу:
//     task case1: const nums1 = [1, 2, 3];
//     Expected outputs: [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]
//     task case2: const nums2 = [0];
//     Expected outputs: [[], 0];
// EN: We have an array of numbers nums. It is necessary to output to the console
//     all possible variants of the subarray from the given one. For example:
//     task case1: const nums1 = [1, 2, 3];
//     Expected outputs: [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]
//     task case2: const nums2 = [0];
//     Expected outputs: [[], 0];

// // solution:
// var subsets = function (nums) {
// 	let result = [[]];

// 	function recurse(index, currentArr) {
// 		for (let i = index; i < nums.length; i++) {
// 			currentArr.push(nums[i]);
// 			result.push([...currentArr]);
// 			recurse(i + 1, currentArr);
// 			currentArr.pop(); // backtrack
// 		}
// 	}
// 	recurse(0, []);
// 	return result; // backtrack
// };

// // task case1:
// const nums1 = [1, 2, 3];
// console.log(subsets(nums1)); // [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]

// // task case2:
// const nums2 = [0];
// console.log(subsets(nums2)); // [], [[], 0]

// Task 20
// UA: Ми маємо відсортований масив чисел arr. Створіть функцію
//     binarySearch(arr, value), яка отримує на вхід цей масив
//     та будь-яке значення зі створеного масиву. В результаті роботи
//     функції, отримаємо індекс заданого значення або -1.
//     Робота функції повинна здійснюватись на бінарному пошуку.
//     Результат покажіть в консолі.
// EN: We got an array of numbers in sorted order. Implement
//     function binarySearch(arr, value), which takes an array
//     and a value from the array and returns the index of this
//     value or -1. Function should use binary search.
//     Display the result in the console.

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 12, 13];

// function binarySearch(arr, value) {
// 	let leftIndex = 0;
// 	let rightIndex = arr.length - 1;
// 	let midIndex;

// 	// перевірка якщо значення виходить за межі діапазону заданого масиву
// 	if (value > arr[rightIndex] || value < arr[leftIndex]) {
// 		return -1;
// 	}

// 	// пошук індекса шляхом збігання його із середнім значенням для імплементації бінарного пошуку
// 	while (leftIndex <= rightIndex) {
// 		midIndex = Math.floor((leftIndex + rightIndex) / 2);
// 		console.log(`midIndex: ${midIndex}`);

// 		if (value === arr[midIndex]) {
// 			return midIndex; // середній індекс збігся із заданим значенням для пошуку
// 		} else if (value > arr[midIndex]) {
// 			// шукаємо в правій половині
// 			leftIndex = midIndex + 1; // наступний крок для пошуку (рухаємось вправо)
// 		} else {
// 			// шукаємо в лівій половині
// 			rightIndex = midIndex - 1; // наступний крок для пошуку (рухаємось вліво)
// 		}
// 	}

// 	return -1;
// }

// console.log(binarySearch(arr, 5));
// console.log(binarySearch(arr, -3));
// console.log(binarySearch(arr, 16));
// console.log(binarySearch(arr, 8));
// console.log(binarySearch(arr, 2));

// =====================Task 05===================================
// UA: Згенеруйте масив чисел в діапазоні від 0 до 100.
//     Підрахуйте та виведіть в консоль суму тих елементів, значення яких більше 50.
// EN: Generate an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// Array.range = function (start, count) {
// 	return Array.from(Array(count), () => start++);
// 	//return Array(count).fill().map( x => start++ ); // possible way
// };
// let arr = Array.range(0, 101);
// console.log(arr);

// const sumNumsMoreThan50 = arr
// 	.filter((num) => num > 50)
// 	.reduce((acc, curr) => acc + curr);
// console.log(sumNumsMoreThan50);

// Task 07. endsWith
// RU: Создайте функцию, которая на вход получает массив имен файлов и расширение файла
//     и возвращает новый массив, который содержит файлы указанного расширения.
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.

// ============================Task ??===================================
// UA: В нас є функція getDayNum(), яка повертає порядковий номер дня тижня
//     починаючи з понеділка: для понеділка - 1, для вівторка - 2 і т. д.
//     Для створення цієї функції було використано умову if-else, для
//     оптимізації - switch. Можете ще більше оптимізувати цю функцію
//     використавши структуру Map?
// EN: We have a getDayNum() function that returns the ordinal number of
//     the day of the week starting from Monday: 1 for Monday, 2 for Tuesday,
//     and so on. An if-else condition was used to create this function,
//     and a switch was used for optimization. Can you further optimize
//     this function by using the Map structure?

// function getDayNum(day) {
// 	if (day == 'Понеділок') {
// 		return 1;
// 	}
// 	if (day == 'Вівторок') {
// 		return 2;
// 	}
// 	if (day == 'Середа') {
// 		return 3;
// 	}
// 	if (day == 'Четверг') {
// 		return 4;
// 	}
// 	if (day == "П'ятниця") {
// 		return 5;
// 	}
// 	if (day == 'Субота') {
// 		return 6;
// 	}
// 	if (day == 'Неділя') {
// 		return 7;
// 	}
// }
// console.log(getDayNum('Вівторок')); // 2

// optimisation via switch:
/*A switch statement can replace multiple if checks.
   It gives a more descriptive way to compare a value with 
   multiple variants.
   switch(x) {
     case 'value1':  // if (x === 'value1')
      ...
      [break]
     case 'value2':  // if (x === 'value2')
      ...
      [break]
     default:
      ...
      [break]
   }
   The value of x is checked for a strict equality to the value from the first 
   case (that is, value1) then to the second (value2) and so on. If the equality
   is found, switch starts to execute the code starting from the corresponding 
   case, until the nearest break (or until the end of switch). If no case is 
   matched then the default code is executed (if it exists).
*/
// function getDayNum(day) {
// 	switch (day) {
// 		case 'Понеділок':
// 			console.log(1);
// 			break;
// 		case 'Вівторок':
// 			console.log(2);
// 			break;
// 		case 'Середа':
// 			console.log(3);
// 			break;
// 		case 'Четверг':
// 			console.log(4);
// 			break;
// 		case "П'ятниця":
// 			console.log(5);
// 			break;
// 		case 'Субота':
// 			console.log(6);
// 			break;
// 		case 'Неділя':
// 			console.log(7);
// 			break;
// 	}
// }
// console.log(getDayNum('Четверг')); // 4

// solution via new Map()
/* Map is a collection of keyed data items, just like an Object. But
   the main difference is that Map allows keys of any type. So, here
   to optimise the code, we need methods:
   const map = new Map() – creates the map;
   map.set(key, value) – stores the value by the key;
   map.get(key) – returns the value by the key, undefined if key doesn’t exist in map;
*/
// function getDayNum(day) {
// 	const dayMap = new Map();
// 	dayMap.set('Понеділок', 1);
// 	dayMap.set('Вівторок', 2);
// 	dayMap.set('Середа', 3);
// 	dayMap.set('Четверг', 4);
// 	dayMap.set("П'ятниця", 5);
// 	dayMap.set('Субота', 6);
// 	dayMap.set('Неділя', 7);
// or shoter version:
// const dayMap = new Map([
// 	['Понеділок', 1],
// 	['Вівторок', 2],
// 	['Середа', 3],
// 	['Четверг', 4],
// 	["П'ятниця", 5],
// 	['Субота', 6],
// 	['Неділя', 7],
// ]);
// 	return dayMap.get(day);
// }
// console.log(getDayNum('Неділя')); // 7
// ======================================================================

// ============================Task ??===================================
// UA: В нас є такі масиви які складаються з унікальних елементів і такі,
//     які мають дублюючі елементи. Напишіть функцію, яка буде виводити в
//     консоль true, коли масив має дублі, і false - коли немає і є унікальним.
// EN: We have such arrays that consist of unique elements and those that
//     have duplicate elements. Write a function that will output true to
//     the console when the array has duplicates, and false when there are
//     none and is unique.

// const arr1 = [1, 2, 3, 4];
// const arr2 = ['a', 'b', 'b', 'a'];
// const arr3 = [7, 4, 2, 4];
// const arr4 = ['id', 'css', 'url', 'js'];

// // solution via set construction
// function containsDuplicate(array) {
// 	const set = new Set(); // колекція містить тільки унікальниі елементи

// 	// перевіримо чи містить масив дублі
// 	for (const el of array) {
// 		if (set.has(el)) {
// 			return true; // масив містить дублі
// 		} // а інакше
// 		set.add(el); // додати в колекцію елемент
// 	}

// 	return false; // масив містить унікальні елементи
// }

// console.log(containsDuplicate(arr1)); // false
// console.log(containsDuplicate(arr2)); // true
// console.log(containsDuplicate(arr3)); // true
// console.log(containsDuplicate(arr4)); // false
// ======================================================================

// ============================Task ??===================================
// UA: Як розбити рядок на підрядки довжиною по N символів?
// EN: How to split a string into substrings each N characters long?

// const str = 'codingbeautydev';

// solution via for-loop:
/* On each iteration, we call the String substring() method to get a substring
   between index i and index i + N exclusive in the string, and add the substring
   to the resulting array. 
   The expression 'i += N' means increment the value of i by N. In the context of
   this loop, it's saying "move the index i ahead by N characters in each iteration"
   For example, if N is 4, in the first iteration, i starts at 0. After the iteration,
   i becomes 4. In the next iteration, it starts at 4 and becomes 8, and so on. This 
   way, the loop processes the string in chunks of length N. */

// function splitString(str, N) {
// 	const arr = [];
// 	// Loop through the characters of the input string with a step size of N
// 	for (let i = 0; i < str.length; i += N) {
// 		arr.push(str.substring(i, i + N)); // Push the substring of length N into the array
// 	}
// 	return arr; // Return the array containing the substrings
// }
// console.log(splitString('codingbeautydev', 4)); // [ 'codi', 'ngbe', 'auty', 'dev' ]

// Solution via array method using reduce():
/* This code uses the reduce function to iterate over an array of characters,
   building an array of substrings based on the specified length N. The 
   ternary operator is used to determine whether to update the last substring
   or add a new one, and the spread operator is used to create new arrays. The
   result is an array of substrings. */
// const splitString = (str, N) =>
// 	// use the spread operator to convert the string into an array of characters
// 	[...str].reduce(
// 		// to process each character in the array
// 		(substrings, ch) =>
// 			(substrings.at(-1)?.length ?? N) < N // check if the last substring exists and its length is less than N
// 				? // if true, update the last substring by concatenating the current character
// 				  [...substrings.slice(0, -1), substrings.at(-1) + ch]
// 				: // if false, add a new substring with the current character
// 				  [...substrings, ch],
// 		[] // initial value for the reduce function is an empty array
// 	);
// console.log(splitString('codingbeautydev', 4)); // [ 'codi', 'ngbe', 'auty', 'dev' ]

/* Якщо довжина останнього підрядка в підрядках менше N, це означає ми можемо 
   додати поточний символ ch до останнього підрядка. Якщо це так, то повертається
   вираз [...substrings.slice(0, -1), substrings.at(-1) + ch]. Це створює новий 
   масив з усіма елементами, крім останнього, а останній елемент оновлюється 
   шляхом додавання до нього поточного символу ch. Якщо довжина не менше N, це 
   означає, що нам потрібно почати новий підрядок. У цьому випадку повертається 
   вираз [...substrings, ch], в результаті створюється новий масив з усіма існуючими
   підрядками, а новий підрядок починається з поточного символу ch.
*/

// Solution via regEx using match() method:
/* the "." (dot) metacharacter matches any single character in the string. The
braces in the form {min, max} match at least min characters and at most max 
characters of the pattern preceding it. In our case, that pattern is the "."
character, min is 1, and max is 4, meaning that .{1, 4} matches between 1 and 
4 characters in the string. We use the g (global) flag to make every occurrence
of the pattern in the string get matched. It makes the regex keep splitting 
the string by the N characters until it gets to the end. Without the g flag, 
only the first instance of the pattern will be matched. If there are no matches
for the regex in the string, match() returns null. This is why we use the null
coalescing operator (??) to return an empty array ([]) in such a case */
// const result = str.match(/.{1,4}/g) ?? [];
// console.log(result); // [ 'codi', 'ngbe', 'auty', 'dev' ]; // last item is less than 4 characters long
// ======================================================================

// =====================Task ?? currying ================================
// UА: Ми маємо функцію "sum", яка просто додає два числа "a" та "b".
//     Виклик sum(a, b), виведе суму цих чисел. Проте, потрібно створити
//     іншу функцію, яка буде трансформувати функцію "sum": тобто ми
//     зможемо викликати функцію з аргументами як разом так і окремо. В
//     програмуванні це відомо під словом "карування".
// EN: We have a "sum" function that simply adds two numbers "a" and "b".
//     Calling sum(a, b) will output the sum of these numbers. However, it
//     is necessary to create another function that will transform the
//     "sum" function: namely, we can select a function with arguments both
//     together and individually. In programming this is known as "currying".

// function sum(a, b) {
// 	return a + b;
// }
// sum(2, 0); // 2
// sum(0, 2); // 2

// solution via currying:
/* Каррування – просунута техніка для роботи з функціями. Вона використовується
не лише у JavaScript, а й в інших мовах. Каррування – це трансформація функцій 
в такий спосіб, що вони приймали аргументи разом як f(a, b), так і окремо як 
f(a)(b). Карування не викликає функції, воно її тільки трансформує. По суті, 
каррінг бере функцію з кількома аргументами та перетворює її на послідовність 
функцій, кожна з яких має один аргумент. 
Отже, мета полягає в тому, щоб створити таку функцію, яку можна викликати з  
одним аргументом замість такої, яка буде викликатись з усіма аргументами 
одночасно. Давайте назвемо її sumTransformed(f) і вона буде отримувати 
параметром функцію, яку потрібно трансформувати в функцію, що викликаються 
тільки з одним аргументом; або ряд таких послідовних функцій. Іншими словами, 
ця функція повертає функцію з одним аргументом. У разі якщо є два аргументи,  
то повертає спочатку одну функцію з першим аргументом, потім повертає другу 
функцію з другим аргументом, ну і потрібно також передбачити повернення функції
з усіма аргументами одночасно, отже маємо: */

// function sumTransformed(func) {
// 	return function (a) {
// 		return function (b) {
// 			return func(a, b);
// 		};
// 	};
// }
// let curriedSum = sumTransformed(sum);

// перевіримо роботу створеної функції:
// console.log(curriedSum(2)(0)); // 2
// console.log(curriedSum(0)(2)); // 2
// console.log(curriedSum(0, 2)); // ƒ (b) {return func(a, b) }
// console.log(curriedSum(2, 0)); // ƒ (b) {return func(a, b) }

/* Хоча виклик фунції по одному аргументу працює, але звичайний 
виклик одночасно з усіма аргументми тут не працює бо у подібних
випадках ми отримаємо ось це:
  ƒ (b) {
	   return func(a, b);
  }, це означає, що другий аргумент "b" не визначиний і повертається тіло
функції. Тобто потрібно мати випадок коли другий аргумент невизначений.

Вирішення може бути таким: коли спочатку повертати функцію яка має 
два аргументи, а далі повертати функції, що мають один аргумен при цьому
спочатку робити перевірку чи функція отримала два аргументи чи тільки один.
Якщо функція отримала два аргументи, то повертати ту саму функцію з двума
аргументами, а якщо функція отримала тільки один аргумент, то повернути
функцію з одним аргументом яка повертає одразу ту саму функцію з двома
аргументами. 
Отже, перевіряючи чи b == undefined, функція може визначити, чи вона 
викликається з одним чи двума. Тут є технологія Partial Application.
В нашому випадку, якщо "b" не визначено, то функція викликається в 
частково застосованій формі, де перший аргумент "a" вже надано, і вона 
очікує на другий аргумент "b". Ця технологія дозволяє викликати функцію
з другим аргументом пізніше і повертати знову функцію з двума аргументами.
Ось саме тут і впроваджується технологія "карування".
Тому рішення буде таким: */

// function sumTransformed(func) {
// 	return function (a, b) {
// 		if (typeof b === 'undefined') {
// 			return function (b) {
// 				return func(a, b);
// 			};
// 		}
// 		return func(a, b);
// 	};
// }
// let curriedSum = sumTransformed(sum);

// перевіримо роботу функції карування:
// console.log(curriedSum(2)(0)); // 2
// console.log(curriedSum(0)(2)); // 2

// console.log(curriedSum(2, 0)); // 2
// console.log(curriedSum(0, 2)); // 2
// ======================================================================

// =====================Task ?? currying ================================
// UА: Ми маємо функцію sum, яка додає три числа "a", "b" та "с".
//     Створіть функцію sumTransformed, яка буде карувати функцію sum.
// EN: We have a "sum" function that simply adds two numbers "a" and "b".
//     Calling sum(a, b) will output the sum of these numbers. However, it
//     is necessary to create another function that will transform the
//     "sum" function: namely, we can select a function with arguments both
//     together and individually. In programming this is known as "currying".

// function sum(a, b, c) {
// 	return a + b + c;
// }

// function sumTransformed(func) {
// 	// ваш код ...
// }

// let curriedSum = sumTransformed(sum);

// curriedSum(1)(2)(3); // 6
// curriedSum(1, 2)(3); // 6
// curriedSum(1)(2, 3); // 6
// curriedSum(1, 2, 3); // 6

// solution via currying:
/* Спочатку давайте визначимо як можна визначити загальну кількість
параметрів які отримує функція. Для цього в JS існує властивість length
і визначається як func.length що і покаже їх загальну кількість.
Вирішення задачі можна почати з останнього випадку, коли функція отримує
усі аргументи одразу і повертає їх суму. 

function sumTransformed(func) {
   return (...args) => {
      return func(...args);
   }
}

А тепер повернемо результат карування у випадку передачі спочатку двох 
аргументів та потім одного, чи спочатку одного, а потім двох. Для цього
потрібно перевірити, якщо кількість аргументів заданих для функції більша
від кількості аргументів які отримала функція, то повертаємо функцію з 
цією іншою кількістю аргументів, причому початкова функція повертається
із розподіленою іншою кількістю аргументів як було задано при її виклику
(спочатку з двома аргументами та потім одним аргументом, або навпаки. Це
можна показати так:

function sumTransformed(func) {
	return (...args) => {
		if (args.length < func.length) {
			return (...otherArgs) => {
				return func(...args, ...otherArgs);
			};
		}
		return func(...args);
	};
}

Проте якщо розглядати останній кейс, коли функція здійснює карування 
в результаті якого можна передавати аргументи по одному, тоді потрібно
застосувати рекурсію, коли функція викликає сама себе. У цьому випадку
базою рекурсії можна вважати випадок, коли аргументи передаються усі
разом і повертається така сама кількість аргументів типу:
 return func(...args);
А гілку рекурсії будемо визначати коли ми розглянули попередній кейс
коли кількість аргументів отриманих функцією менша за кількість, яка
була визначена на початку. При цьому рекурсивні виклики будуть зменшуватись
до бази рекурсії на число, яке визначається як length - args.length, і
гілка рекурсії буде мати вид:
 return sumTransformed (
	(...otherArgs) => func(...args, ...otherArgs),
	length - args.length
);
Тобто, тут передаючи також довжину, ми каруємо функцію на один аргумент
менше. Або так, кожен раз коли ми викликаємо sumTransformed ми вказуємо
скільки аргументів залишилось. Але треба пам'ятати одну річ, коли ми 
використовуємо спред-оператор, то початкова length = 0 і тому потрібно
обовязково передавати дефолтну кількість параметрів як 
sumTransformed(func, length = func.lengts).
Таким чином, рішення буде:
*/

// function sumTransformed(func, length = func.length) {
// 	return (...args) => {
// 		if (args.length < length) {
// 			return sumTransformed(
// 				(...otherArgs) => func(...args, ...otherArgs),
// 				length - args.length
// 			);
// 		}
// 		return func(...args);
// 	};
// }

// let curriedSum = sumTransformed(sum);

// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
// console.log(curriedSum(1, 2, 3)); // 6

// =====================Task ?? cookies==============================
// UА: Що таке cookies? Покажіть як можна отримати доступ до cookies
//     безпосередньо з браузера? Виведіть наявні cookies в консоль.
//     А тепер створіть функцію для отримання значення cookies за його
//     ім'ям?
// EN: What are cookies? Show how you can access cookies directly from
//     the browser? Output existing cookies to the console. Now create
//     a function to get the cookie value by its name?

// solution via property document.cookie
/* Cookies are small strings of data that are stored directly in 
   the browser. They are part of the HTTP protocol. Cookies are 
   typically set by the web server. The browser will then automatically 
   add them to (almost) every request to the same domain using the 
   Cookie header. One of the most common uses of cookies is for 
   authentication.
   The value of document.cookie consists of key=value pairs separated 
   by ";". Each pair represents a separate cookie. So, lets see:
*/
// console.log(document.cookie);

// solution to get value by it name via function creation
/* To find a specific cookie, just split the string from document.cookie
   by ";", and then find the desired key. To do this, we can use both 
   regular expressions and functions to process arrays.
   Зверніть увагу, значення cookie кодується, тому getCookie використовує 
   вбудовану функцію decodeURIComponent для декодування.
*/

// const getCookie = (name) => {
//   const nameString = name + "="
//   const value = document.cookie.split(";").filter(item => {
//     return item.includes(nameString)
//   })
//   console.log('value', value); // ['refresh_token=eyJhbGciO...5it-7lrDPaRt4']

//   if (value.length) {
//     return decodeURIComponent(value[0].split('=')[1])
//   } else {
//     return ""
//   }
// }
// console.log(getCookie('refresh_token')) // eyJhbGciO...

// solution to get value by it name via regular expresions:

/* Узагалі, найкоротший спосіб отримати доступ до cookie – це використати 
   регулярні вирази. Функція getCookie(name) повертає значення cookie по його 
   назві. Тут new RegExp генерується динамічно, щоб знаходити "; name=<value>".
*/
// function getCookie(name) {
//   let matches = document.cookie.match(new RegExp(
//     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//   ));
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }
// console.log(getCookie("refresh_token")); // eyJhbGciO...
// ======================================================================

// ==================Task ## Map-collection Object.values() =============
// UА: В нас є масив слів arr у якому містяться анаграми (групи анаграм).
//     Напишіть функцію "aclean", яка повертає масив слів очищений від
//     анаграм. В дійсності, з кожної групи анаграм повинно залишитись
//     тільки одне слово (не важливо яке).
// EN: We have an array of words, which has anagram (or anagram groups).
//     Create the function "aclean", which returns the array of words,
//     cleaned from anagrams. Actualy, should be remains only one word
//     from the each group of anagram (doesn't matter which one).

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// The anagrams - they are words, which have the same letters, the same
// quantity of letters but the letters stays in different orders.
// nap - pan; ear - are - era; cheaters - hectares - teachers

// solution via Map-structure and method Array.from():
/* The solution concept is to iterate over each word of the arr
with for..of, divide each word to letters, sort them and
convert back to word. Though, all anagrams will be the same form.
After that, we can use that sorted anagrams as keys in Map-collection
object in order to be able to reassign the different values to a one
same key. We can say that different words/anagram groups would 
have the one sorted form. So, if we meet again the word in sorted 
form, this word will rewrite the value to the same key in the 
Map-collection object. We can use Map-method set() to assign
different words to the same key, or each word/anagram rewrite the new
value to the same key in the Map-collection object. At the end, the
method Array.from() pick up the values and returns them as array.*/

// function aclean(arr) {
// 	let map = new Map();

// 	for (let word of arr) {
// 		let sorted = word.toLowerCase().split('').sort().join('');
// 		map.set(sorted, word);
// 	}

// 	return Array.from(map.values());
// }

// // check the result:
// console.log(aclean(arr)); // ['PAN', 'hectares', 'era']

// solution via Object creation and method Object.values(obj):
/* As we can see the keys are the simple strings, therefore
we can use a simple object insted of Map-collection. But the concept
of solution remains the same. Here for iteration we can apply
for-loop, and to take the values we can use the method for global
Object to take the values - Object.values(obj). */

// function aclean(arr) {
// 	let obj = {};

// 	for (let i = 0; i < arr.length; i++) {
// 		let sorted = arr[i].toLowerCase().split('').sort().join('');
// 		obj[sorted] = arr[i]; // assign the value to the same sorted key
// 	}

// 	return Object.values(obj);
// }

// // check the result:
// console.log(aclean(arr)); // ['PAN', 'hectares', 'era']
// ======================================================================

// =================Task # Set-collection ===============================
// UА: У кафе заходять різні відвідувачі, одні прийшли вперше, інші
//     заходили декілька разів. Потрібно створити список відвідувачів при
//     цьому цікавлять тільки відвідувачі а не кількість їх відвідувань,
//     або імена відвідувачів не повинні повторятись.
// EN: Many clients visit the cafe. Some of them visit cafe many times, but
//     others visit it only ones. We need to create the visitor's list and
//     not to take into account the quantity of their visits. Namely, the
//     visitor's name doesn't appear more than one time.

// let john = { name: 'John' };
// let pete = { name: 'Pete' };
// let mary = { name: 'Mary' };
// let simon = { name: 'Simon' };
// let ellis = { name: 'Ellis' };

// // solution via Set-collection:
// /* Object Set it is the special type of collection or multiplay set of values
// (without the keys), where each value can appear only ones.
// To create this multiplay set of values we use method new Set(iterable);
// To add a new value to the set of values we can use set.add(value) and if the
// value is in the set, nothing happens but returns the same Object set.
// We can use set.size() method to check the quantity of values in the set. */

// let set = new Set();

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(ellis);
// set.add(simon);
// set.add(john);
// set.add(mary);

// for (let visitor of set) {
//  console.log(visitor.name); // John, Pete, Mary, Ellis, Simon - each on a new line
// }
// // We also can iterate over set object with forEach method:
// // set.forEach((visitor, visitorAgain, set) => {
// //    console.log(visitor.name);
// // });
// // Here, visitor and visitorAgain values appear twice for the suit with Map.

// // let's make another check:
// console.log(set.size); // 5

// // solution via arr.find() method and created array for visitors:
// /* Here, rather than simply adding the visitor to the list, we run
// a function that checks if the visitor is already in the list. If they
// are not, we add them.
// The Array.find() function will return the first element in the array
// that satisfies the provided testing function; otherwise it will return
// undefined.*/

// let visitorsList = [];

// function addVisitor(visitor) {
// 	const alreadyVisited = visitorsList.find((v) => v.name === visitor.name);

// 	if (!alreadyVisited) {
// 		visitorsList.push(visitor);
// 	}
// }

// addVisitor(john);
// addVisitor(pete);
// addVisitor(mary);
// addVisitor(ellis);
// addVisitor(simon);
// addVisitor(john);
// addVisitor(mary);

// visitorsList.forEach((visitor) => console.log(visitor.name));
// // John, Pete, Mary, Ellis, Simon - each on a new line

// console.log('Total unique visitors:', visitorsList.length); // 5

// /* Please note that the Array method has time complexity of O(n)
// to find an element, making it less efficient than using a Set,
// particularly when dealing with larger data sets.*/
// ======================================================================

// =================Task # Set-collection ===============================
// UА: Створіть функцію "unique", яка буде повертати масив унікальних
//     не повторюючих значень з масиву "values".
// EN: Create a function "unique" which returns the array of unique values
//     from the "values" array.

// let values = [
// 	'Hare',
// 	'Krishna',
// 	'Hare',
// 	'Krishna',
// 	'Krishna',
// 	'Krishna',
// 	'Hare',
// 	'Hare',
// 	':-O',
// ];

// // solution via Set-collection:
// /* Object Set it is the special type of collection or multiplay set of values
// (without the keys), where each value can appear only ones. It is an iterable
// object.
// To create this multiplay set of values we use method new Set(iterable) but as
// we need to return the array, we can use the global method as Array.from, so: */

// function unique(arr) {
// 	return Array.from(new Set(arr));
// }

// // let's check:
// console.log(unique(values)); // ['Hare', 'Krishna', ':-O']
// ======================================================================

// ==================Task ## Map-collection Array.from() =============
// UА: Ми хотіли б мати масив ключів map.keys() в змінній і далі працювати
//     з цим масивом, наприклад застосувати метод .push(). Але в нас це
//     не виходить. Ось подивіться нижче:
// EN: We would like to get an array of map.keys() keys into a variable
//     and then work with them, for example, use the push() method. But this
//     doesn't work, have a look:

// let map = new Map(); // створили колекцію Мар

// // Застосували метод map.set(key, value), який записує по ключу key значення value
// map.set('john', 'John');
// map.set('ellis', 'Ellis');
// map.set('marry', 'Marry');
// map.set('sofiya', 'Sofiya');

// // Далі застосували метод map.keys(), який повертає ітеруємий об'єкт по ключам
// // let keys = map.keys();

// // Спробували додати новий ключ в масив
// // keys.push('bob'); // Error: keys.push is not a function

// //Why? What needs to be corrected in the code for the keys.push call to work?

// // solution via method Array.from():
// /*Проблема полягає в тому, що метод map.keys() повертає ітеруємий об'єкт а
// не масив, а значить застосувати будь-який метод для масивів немає змоги.
// Тому потрібно ітеруємий об'єкт перетворити на масив. Це можна за допомогою
// глобального метода масивів Array.from() і тільки тоді зможемо отримати масив
// і робити подальші дії з ним.*/
// let keys = Array.from(map.keys());

// keys.push('bob');
// console.log(keys); // ['john', 'ellis', 'marry', 'sofiya', 'bob']
// ======================================================================

const p1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve({
			name: 'Anna',
		});
	}, 2000);
});

const p2 = new Promise((reject) => {
	setTimeout(() => {
		reject('Promise Error');
	}, 3000);
});

Promise.allSettled([p1, p2])
	.then((res) => {
		console.log(res);
		const arr = res.filter((o) => o.status === 'fulfilled');
		console.log(arr[0].value); // {name: 'Anna'}
		return res;
	})
	.then(([o1, o2]) => {
		console.log({ ...o1, ...o2 }); // {status: 'fulfilled', value: 'Promise Error'}
	})
	.catch((err) => console.log(`Unexpected err ${err}`));
