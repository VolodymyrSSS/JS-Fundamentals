console.log('Topic: Functions');

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

// var 2 - via arrow function
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
