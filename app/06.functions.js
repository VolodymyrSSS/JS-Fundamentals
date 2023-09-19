console.log('Topic: Functions');

// =====================Task 1 FDS===================================
// UА: Маємо функцію introduce, яка використовує спеціальне ключове
//     слово 'this' для передачі контенту title, що визначений в обєктах
//     lecturer та student. Покажіть, як викликати цю функцію із цим
//     контентом для різних аргументів використавши метод call?
//     Аргументи:
//     lecturer: firstName = 'Derek', lastName = 'Asencheim'
//     student: firstName = 'Nike', lastName = 'Terner'
//     student: firstName = 'Mark-Andre', lastName = 'Machony'
// EN: We have the introduce function, which uses the special keyword
//     'this' to transfer the title content defined in the lecturer
//     and student objects. Show how to call this function with this
//     content for different arguments using the apply method?
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
// the call() method of Function instances calls this function with
// a given this value and arguments provided individually
// introduce.call(lecturer, 'Derek', 'Asencheim'); // "Hello, I am Dr. Derek Asencheim."
// introduce.call(student, 'Nike', 'Terner'); // "Hello, I am student Nike Terner."
// introduce.call(student, 'Mark-Andre', 'Machony'); // "Hello, I am student Mark-Andre Machony."
// ==================================================================

// =====================Task 2 FDS===================================
// UА: Маємо функцію greet, яка використовує спеціальне ключове слово 'this'
//     для передачі контенту title, що визначений в обєктi agent.
//     Покажіть, як викликати цю функцію із цим контентом для різних аргументів
//     використавши метод apply? Аргументи:
//     salutation = 'Вітання!', name = 'Тарас', salutation = 'Greetings!', name = 'John',
//     salutation = 'Salutation!', name = 'Sharlise', salutation = 'Gruß!', name = 'Fritz',
//     salutation = 'Saludo!', name = 'Carlos', salutation = '挨拶!', name = 'Saki',
// EN: We have the introduce function, which uses the special keyword 'this'
//     to transfer the title content defined in the lecturer and student objects.
//     Show how to call this function with this content for different arguments using
//     the apply method? Arguments:
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
// the apply() method of Function instances calls this function with a given
// this value, and arguments provided as an array (or an array-like object)
// greet.apply(agent, ['Вітання!', 'Тарас']); // Вітання!, real-estate agent Тарас
// greet.apply(agent, ['Greetings!', 'John']); // Greetings!, real-estate agent John
// greet.apply(agent, ['Salutation!', 'Sharlise']); // Salutation!, real-estate agent Sharlise
// greet.apply(agent, ['Gruß!', 'Fritz']); // Gruß!, real-estate agent Fritz
// greet.apply(agent, ['Saludo!', 'Carlos']); // Saludo!, real-estate agent Carlos
// greet.apply(agent, ['挨拶！', 'Saki']); // 挨拶!, real-estate agent Saki
// ==================================================================

// =====================Task 3 FDS===================================
// UА: Для чого використовують 'сlosure' (замикання) в JavaScript? Покажіть
//     сутність замикання на прикладі використавши для цього дані:
//     function outerFunction(){}, function innerFunction() {},
//     const outerVariable = 'I am from outer function';
// EN: What is 'closure' used for in JavaScript? Show the essence of
//     the 'closure' with an example using the following data:
//     function outerFunction(){}, function innerFunction() {},
//     const outerVariable = 'I am from outer function';

// solution:
// Closures are commonly used to create private variables and encapsulation
// in JavaScript. By defining variables within an outer function and returning
// an inner function that accesses and modifies those variables, you can
// control the visibility and manipulation of data. This allows you to achieve
// information hiding and avoid global namespace pollution.
// Closures are often used in scenarios such as event handlers, callbacks, and
// maintaining state in functional programming. They provide a way to create
// persistent references to variables. So, the example will be:
// function outerFunction() {
// 	const outerVariable = 'I am from outer function';
// 	function innerFunction() {
// 		console.log(outerVariable);
// 	}
// 	return innerFunction;
// }
// const closure = outerFunction();
// closure(); // I am from outer function

// =====================Task 2 FDS===================================
// Task 1. FDS
// UА: Створіть функцію conc, яка повинна конкатенувати значення
//     двух параметрів a і b та повертати рядок.
//     Використовуйте Function Declaration Statement (FDS).
//     Викликайте функцію до її створення.
//     Тестові дані:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'
// EN: Create a function conc, which should concatenate the values
//     of two parameters a and b and return a string.
//     Use Function Declaration Statement (FDS).
//     Call a function before it declaration.
//     Test data:
//     a = '1', b = '1', result = '11'
//     a = 1, b = 1, result = '11'

// let result1 = conc('1', '1');
// console.log(result1); // 11

// let result2 = conc(1, 1);
// console.log(result2); // 11

// var1 - via глобальний об'єкт String()
// function conc(a, b) {
// 	return String(a) + String(b);
// }

// var2 - via шаблонні строки (завжди повертають рядок символів)
// function conc(a, b) {
// 	return `${a}${b}`;
// }

// var3 - довільний варіант через об'єкт що повертає функцію
// function createSomeObj() {
// 	return {
// 		conc: conc,
// 	};

// 	function conc(a, b) {
// 		return `${a}${b}`;
// 	}
// }

// console.log(createSomeObj().conc(1, 1)); // 11

// Task 2. FDE
// UА: Створіть функцію comp, яка повинна порівнювати значення
//     двох параметрів a та b і повертати 1, якщо вони рівні та -1, якщо вони не рівні.
//     Використовуйте Function Definition Expression (FDE).
//     Викликайте функцію до її створення.
//     Тестові дані:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1
// EN: Create a function comp, which should compare the values
//     of two parameters a and b, and return 1, when they equal and return -1,
//     when they are not equal.
//     Use Function Definition Expression (FDE).
//     Call a function before it declaration.
//     Test data:
//     a = 'abc', b = 'abc', result = 1
//     a = 'abC', b = 'abc', result = -1

// const result1 = comp('abc', 'abc');
// console.log(result1); // 1

// const result2 = comp('abC', 'abc');
// console.log(result2); // -1

// var 1 - via оператор if
// function comp(a, b) {
// 	if (a === b) {
// 		return 1;
// 	}
// 	return -1;
// }

// var 2 -  via ternary оператор
// function comp(a, b) {
// 	return a === b ? 1 : -1;
// }

// Task 3. AF
// UA: Створіть анонімну функцію, яка повинна
//     вивести повідомлення 'message in console' в конолі.
//     Використовуйте її як обробник події click для кнопки.
//     При цьому виведіть в консоль що показує ключове слово this.
// EN: Create an anonymous function, which should display
//     message 'message in console' in console.
//     Use it as an event handler of event click of the button.
//     At the same time, display the keyword this in the console.

// const button = document.getElementById('btn-create-promise'); // define the button-node

// var 1 - via function declaration
// const handler = function () {
// 	console.log('message in console');
// 	console.log(this); // <button id="btn-create-promise" type="button">Create Promise</button>
// };
// button.addEventListener('click', handler);

// solution via arrow function
// const handler = () => {
// 	console.log('message in console');
// 	console.log(this); // {} because the arrow function is used
// };
// button.addEventListener('click', handler);

// var 3 - via IIFE
// (function () {
// 	const button = document.getElementById('btn-create-promise');
// 	const handler = function () {
// 		console.log('message in console');
// 		console.log(this); // <button id="btn-create-promise" type="button">Create Promise</button>
// 	};
// 	button.addEventListener('click', handler);
// })();

// Task 4. NFE
// UА: Створіть функцію fibo, яка повинна підраховувати числа Фібоначчі по формулі
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Створіть функцію factorial, яка повинна обрахувати факторіал числа по формулі
//     Fn = 1 * 2 *..*n.
//     Використовуйте Named Function Expression (NFE).
// EN: Create a function fibo should calculate Fibonacci numbers according to the formula
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
//     Create a function factorial which should calculate factorial of a number n
//     according to the formula Fn = 1 * 2 *..*n.
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

// // solution1 for factorial
// function factorial(n) {
// 	if (n === 0 || n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n - 1);
// 	}
// }

// console.log(factorial(5)); // 120 (Factorial of 5)

// Task 5. FC
// UA: Об'явіть дві змінні для рядкових символів: params і body та надайте їм такі значення,
//     які  будуть представляти собою список параметрів та тіло майбутньої функції.
//     Потім створіть функцію, яка використовує цю інформацію, за допомогою
//     Function Constructor (FC).
//     Викличте цю функцію.
// EN: Declare two string variables: params and body and initialize them with string values,
//     which represent the list of parameters and the body of future function.
//     Create function using these variables with help of Function Constructor (FC).
//     Call this function.

// const params = 'a, b';
// const body = 'return a + b;';

// const myFunction = new Function(params, body);

// const result = myFunction(2, 3);
// console.log(result);

// Task 6. ArF
// UA: Об'явіть масив arr = [1, 8, 3, 5, 12, 7, 9, 11].
//     Використовуючи стрілкові функції створіть новий масив з елементів elem * elem,
//     які меньше 100 та відсортуйте цей масив по збільшенню.
//     Виведіть результат у консоль.
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

// =====================Task 07===================================
// UA: Будь ласка, поясніть, як працює функція callback, і наведіть
//     простий приклад.
// EN: Please explain what a callback function is and give a simple
//     example.

// solution:
/* A callback function is a function that is passed as an argument 
  to another function and executed after an operation completes. Below 
  is an example of a simple callback function that logs into the console
  after performing a few operations:
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

// =====================Task 08===================================
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
// 	const vowelCount = str.match(/[aeiou]/gi);
// 	console.log(vowelCount); // ['A', 'a', 'a', 'O', 'a', 'o', 'a', 'a', 'O']

// 	// check if vowelCount is null (no matches found) or get its length
// 	return vowelCount ? vowelCount.length : 0;
// };
// const vowelCount = findVowels(string);
// console.log(vowelCount); // 9

// Task 7. IIFE
// UA: Створіть конструкцію, за допомогою якої буде виконана раніше реалізована
//     функція conc.
// EN: Create a construction which allows to run the above function conc.

// const conc = (a, b) => String(a) + String(b);

// (function conc(a, b) {
// 	console.log(`${a}${b}`);
// })(4, 2);

// (function conc(a, b) {
// 	console.log(`${a}${b}`);
// })('4', '2');

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
// UA: Створіть функцію, яка повинна вивести в консоль таку піраміду
//     Приклад:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
// EN: Create a function that should display the next pyramid in the console
//     Example:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'

// // solution via two for loops:
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
