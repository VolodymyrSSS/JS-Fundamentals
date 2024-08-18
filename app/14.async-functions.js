console.log('Topic: Async Functions');
// Task 01
// UA: Створіть асинхронну функцію f1, використовуючи FDS (Function Declaration Statement).
//     Функція повинна отримувати два параметри a та b і повертати суму a+b.
//     Виведіть значення, яке поверне функція у консолі.
//     Перетворіть проміс та виведіть значення в консоль.
// EN: Create an async function f1 as a Function Declaration Statement.
//     The function should take two parameters a and b and return a sum a+b.
//     Display the result of function in the console.
//     Process a promise and display value in the console.

// async function f1(a, b) {
// 	return a + b;
// }

// const res = f1(2, 3);
// console.log(res); // Promise {<fulfilled>: 5}
// res.then(console.log); // 5

// Task 02
// UA: Створіть асинхронну функцію f2, використовуючи FDE (Function Definition Expression).
//     Функція повинна повертати 'Promise Data', використовуючи Promise.resolve()
//     Виведіть значення, яке верне функція у консоль.
//     Перетворіть проміс та виведіть значення у консоль.
// EN: Create an async function f2 as a Function Definition Expression.
//     The function should return the string 'Promise data' using Promise.resolve() method.
//     Display the result of function in the console.
//     Process a promise and display value in the console.

// const f2 = async function () {
// 	return Promise.resolve('Promise Data');
// };

// const res = f2();
// console.log(res); // Promise {[[Prototype]]: Promise, [[PromiseState]]:"fulfilled", [[PromiseResult]]: "Promise Data"]}
// res.then(console.log); // 'Promise Data'

// Task 03
// UA: Створіть клас C1. Додайте асинхронний метод f3.
//     Метод повинен генерувати виключення 'Error occurs in f3 method'.
//     Створіть екземпляр класу і викличте метод f3.
//     Обробіть проміс.
// EN: Create a class C1. Add async method f3.
//     Method should throw an exception 'Error occurs in f3 method'.
//     Create an instance of the class and call the method f3.
//     Process a promise and display value in the console.

// class C1 {
// 	async f3() {
// 		throw new Error('Error occurs in f3 method');
// 	}
// }

// const obj = new C1();
// obj.f3().catch(console.log); // Error: Error occurs in f3 method

// Task 04
// UA: Створіть функцію makeRequest, використовуючи FDS (Function Declaration Statement).
//     Функція повинна отримувати один параметр - url та повертати проміс,
//     який переходить в стан resolved через 2 секунди і повертає значення параметру.
//     Першим рядком в функції виведіть повідомлення 'makeRequest is called'.
//     Cтворіть функцію f4, використовуючи FDS (Function Declaration Statement).
//     Функція повинна викликати функцію makeRequest, отримати результат її работи і вывести у консоль.
// EN: Create a functiom makeRequest as a Function Declaration Statement.
//     The function should take one parameter - url and return a promise,
//     which should be resolved after 2s and it should return the value of the parameter url.
//     The first line of code in the function should display message 'makeRequest is called' in the console.
//     Create a function f4 as a Function Declaration Statement.
//     The function f4 should call the function makeRequest, get its result and display it in the console.

// function makeRequest(url) {
// 	console.log('makeRequest is called');

// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 2000, url);
// 	});
// }

// function f4() {
// 	const result = makeRequest('http://example.com');
// 	console.log(result); // Promise: [[Prototype]]:Promise, [[PromiseState]]:"fulfilled", [[PromiseResult]]:"http://example.com"
// }

// f4();

// Task 05
// UA: Зробіть зміни в функції f4 з попереднього завдання так, щоби в консолі з'явилось
//     значення переданого параметра функції makeRequest.
// EN: Make changes to the function f4 from the previous task. This function should display the value
//     of the parameter of the function makeRequest in the console.

// function makeRequest(url) {
// 	console.log('makeRequest is called');

// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 2000, url);
// 	});
// }

// async function f5() {
// 	const result = await makeRequest('http://example.com');
// 	console.log(result); // http://example.com
// }

// f5();

// Task 06
// UA: Створіть асинхронну функцію f6, використовуючи FDS (Function Declaration Statement).
//     Функція повинна викликати два раза функцію makeRequest із різними значеннями параметра.
//     Перед викликом та після кажного виклику makeRequest функція повинна виводити у консоль будь-яке повідомлення.
//     Створити та повернути масив, який повинен містити значення передані функції makeRequest.
//     Обробіть результат работи функції f6.
// EN: Create an async function f6 as a Function Declaration Statement.
//     This function should call the function makeRequest two times with different values of its parameter.
//     The function f6 should display any message in the console before and after each call
//     of the function makeRequest.
//     Create and return the array from the function f6, which should contains the values of the
//     parameter of the function makeRequest.
//     Process the result of the function f6.

// function makeRequest(url) {
// 	console.log('makeRequest is called');

// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 2000, url);
// 	});
// }

// async function f6() {
// 	const arr = [];

// 	console.log('--first--');
// 	arr.push(await makeRequest('http://example1.com'));
// 	console.log('--second--');
// 	arr.push(await makeRequest('http://example2.com'));
// 	console.log('--third--');

// 	console.log(arr);
// }

// f6();

// Task 07
// UA: Змініть асинхронну функцію f6 з попереднього завдання так, щоб виклики функциії
//     makeRequest виконувались паралельно.
// EN: Make changes to the async function f6 from the previous task. This function should
//     call the function makeRequest with different values of its parameter simultaneously.

// function makeRequest(url) {
// 	console.log('makeRequest is called');

// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 2000, url);
// 	});
// }

// async function f7() {
// 	const arr = [];

// 	console.log('--first--');
// 	arr.push(makeRequest('http://example1.com'));
// 	console.log('--second--');
// 	arr.push(makeRequest('http://example2.com'));
// 	console.log('--third--');

// 	console.log(arr); // [Promise {<fulfilled>: 'http://example1.com'}, Promise {<fulfilled>: 'http://example2.com'}]

// 	const promises = await Promise.all(arr);
// 	console.log(promises); // ['http://example1.com', 'http://example2.com']
// }

// f7();

// Task 08
// UA: Створіть масив урлів ['http://a', 'http://b'].
//     Створіть функцію sendRequest, яка отримує один параметр - url.
//     Функція у першому рядку повинна виводити в консоль повідомлення 'sendRequest is called'
//     і повертати через 2 секунди для першого урла об'єкт { name: 'Ann' }, а для другого
//     урла об'єкт { age: 16 }.
//     Створіть асинхронну функцію f8 яка повинна викликати функцію sendRequest для кажного урла
//     та повертати об'єкт {name: 'Ann', age: 16}.
//     Обробіть результат работи функції f8.
// EN: Create the array of urls ['http://a', 'http://b'].
//     Create the function sendRequest which should take one parameter - url.
//     The function should display the message 'sendRequest is called' in the console
//     in its first line of code. Then the function should return the object { name: 'Ann' } for the
//     first url after 2s and the object { age: 16 } for the second url after 2s.
//     Create the async function f8, which should call the function sendRequest with each value
//     from the array and return the object {name: 'Ann', age: 16}.
//     Process the reuslt of the function f8

// const urls = ['http://a', 'http://b'];

// function sendRequest(url) {
// 	const db = new Map([
// 		['http://a', { name: 'Ann' }],
// 		['http://b', { age: 16 }],
// 	]);

// 	return new Promise((resolve) => {
// 		setTimeout(resolve, 2000, db.get(url));
// 	});
// }

// async function f8() {
// 	const arrOfPromises = urls.map((url) => sendRequest(url));
// 	console.log(arrOfPromises); // [Promise {<fulfilled>: {…}}, Promise {<fulfilled>: {…}}]
// 	const [obj1, obj2] = await Promise.all(arrOfPromises);
// 	console.log({ ...obj1, ...obj2 }); // {name: 'Ann', age: 16}
// }
// f8();

// Task 09
// UA: В нас є дві функції. Перша функція makeRequest повертає проміс який у разі
//     передачі значення 'Google' в параметрі location успішно вирішується та повертає
//     вираз 'Google says hi!', якщо вираз інший - проміс відхиляється та повертає
//     вираз 'We can only talk to Google'.
//     Друга функція processRequest завжди успішно вирішується і просто додає умовну
//     додаткову інформацію у виді рядка 'Extra information' до значення параметру response.
//     Обробляємо результати роботи функцій використавши методи .then/.catch. Перевірте, які
//     вирази отримує у консолі при позитивному вирішенні промісів та при їх відхиленні.
//     Перепишіть запуск цих функцій так, щоб не використовувати методи .then/.catch. Натомість
//     використайте вирази async/await при цьому ви повинні отримати ті самі значення в консолі.
// EN: We have two functions. The first makeRequest function returns a promise that, if the
//     value 'Google' is passed in the location parameter, is successfully resolved and returns
//     the expression 'Google says hi!', if the expression is different, the promise is rejected
//     and returns the expression 'We can only talk to Google'.
//     The second function processRequest always resolves successfully and simply adds conditional
//     extra information in the form of an 'Extra information' string to the value of the response
//     parameter.
//     We process the results of the functions using the .then/.catch methods. Check what
//     expressions are received in the console when the promises are resolved positively
//     and when they are rejected.
//     Rewrite the execution of these functions to not use the .then/.catch methods. Use async/await
//     expressions instead and you should get the same values in the console.

// function makeRequest(location) {
// 	return new Promise((resolve, reject) => {
// 		console.log(`Making request to ${location}`);
// 		if (location === 'Google') {
// 			resolve('Google says hi!');
// 		} else {
// 			reject('We can only talk to Google');
// 		}
// 	});
// }

// function processRequest(response) {
// 	return new Promise((resolve) => {
// 		console.log(`Processing response`);
// 		resolve(`Extra information + ${response}`);
// 	});
// }

// makeRequest('Google') // Making request to Google
// 	.then((response) => {
// 		console.log('Response received'); // Response received
// 		return processRequest(response); // Processing response
// 	})
// 	.then((processedResponse) => {
// 		console.log(processedResponse); // Extra information + Google says hi!
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// // solution:
// async function f9 {
// 	try {
// 		const response = await makeRequest('Facebook');
// 		console.log('Response received');
// 		const processedResponse = await processRequest(response);
// 		console.log(processedResponse);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// f9();
