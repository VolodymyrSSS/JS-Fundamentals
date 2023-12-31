console.log('Topic: Promises');

// ======================= Task 1 ===================================
// UА: Що представляє собою проміс? Створіть функцію fetchData яка
//     покаже сутність використання промісів. Для симуляції асинхронної
//     операції використайте setTimeout в результаті проміс переходить
//     у стан resolve через 2 скунди та повертає дані, які визначені у
//     змінній const data = { id: 42, name: 'Modest Rampala' }; Отримайте
//     дані промісу та виведіть їх у консоль.
//     У разі якщо проміс відхилений, виведіть повідомлення про помилку
//     'Failed to fetch data' у консолі. Передбачте також виведення
//     повідомлення 'Fetch operation completed' незважаючи на результат
//     виконання промісу.
// EN: What is a propromise? Create a function fetchData which will show
//     the essence of using promises. To simulate an asynchronous operation,
//     use setTimeout as a result, the promise goes into the resolve state
//     after 2 seconds and returns the data defined in the variable
//     const data = { id: 42, name: 'Modest Rampala' }; Get the promise data
//     and output it to the console. If the promise is rejected, display
//     the error message 'Failed to fetch data' in the console. Also provide
//     for the output of the message 'Fetch operation completed' regardless
//     of the result of the promise.

// solution:
// A promise represents the eventual result of an asynchronous operation, which
// can be either a resolved value or a reason for rejection. It has three possible
// states: pending, fulfilled (resolved), or rejected.
// To create a promise, you use the Promise constructor, which takes a callback
// function with two parameters: resolve and reject. Inside this callback, you
// perform your asynchronous task and call either resolve(value) to fulfill the
// promise with a value or reject(reason) to reject it with a reason (typically
// an error object).
// The then() method is used to handle the fulfillment of a promise.
// It takes a callback function that receives the resolved value as its
// argument. You can chain multiple then() calls to perform sequential
// operations or transformations on the resolved value.
// The catch() method is used to handle the rejection of a promise. It
// takes a callback function that receives the reason for rejection (an
// error) as its argument. It’s typically used at the end of the promise
// chain to handle any errors that occurred during the asynchronous operation.
// Promises also provide additional methods such as finally(), which
// allows you to specify a callback that will be called regardless of
// whether the promise is fulfilled or rejected, and Promise.all(), which
// can be used to wait for multiple promises to fulfill.

// function fetchData() {
// 	return new Promise((resolve, reject) => {
// 		// simulating an asynchronous operation (example API request)
// 		setTimeout(() => {
// 			const data = { id: 42, name: 'Modest Rampala' };
// 			resolve(data); // resolve the promise with the fetched data
// 			// reject( new Error('Failed to fetch data')); // uncomment to simulate rej-state
// 		}, 2000);
// 	});
// }

// fetchData()
// 	.then((data) => {
// 		console.log('Fetched data :', data);
// 	})
// 	.catch((error) => {
// 		console.log('Error :', error.message);
// 	})
// 	.finally(() => {
// 		console.log('Fetch operation completed');
// 	});
// ==================================================================

// Task 01
// UA: Створіть проміс, який постійно знаходиться в стані "pending".
//     В конструкторі промису виведіть в консоль повідомлення "Promise is created".
// EN: Create a promise that is constantly in the pending state.
//     In the promise constructor, print the message "Promise is created" to the console

// const pendingPromise = new Promise((resolve, reject) => {
// 	console.log('Promise is created');
// });

// console.log(pendingPromise); // Promise {<pending>} ->
// //              [[Prototype]]: Promise, [[PromiseState]]: "pending", [[PromiseResult]]: undefined

// Task 02
// UA: Створіть проміс, який покаже сутність його роботи. Всередині тіла створювваного промісу
//     задайте простиу математичну дію (типу 2 + 2) та помістіть результат у змінну, назвем її sum.
//     В умові if задайте вирази: якщо проміс вирішується успішно, то передається рядок 'Success',
//     а якщо невдача, то передається рядок 'Failed'.
//     Обробіть результати промісу при стані resolve та стані reject та виведіть їх у консоль.
// EN: Create a promise that will show the essence of it's work. Inside the body of the promise
//     to be created, specify a simple mathematical operation (like 2 + 2) and place the result
//     in a variable, let's call it sum. In the if condition, set the expressions: if the promise
//     is resolved successfully, then the string 'Success' is passed, and if there is a failure,
//     then the string 'Failed' is passed.
//     Process the results of the promise in the resolve and reject states and output them to the console.

// const promise = new Promise((resolve, reject) => {
// 	let sum = 2 + 3;

// 	if (sum == 4) {
// 		resolve('Success');
// 	} else {
// 		reject('Failed');
// 	}
// });

// promise
// 	.then((message) => {
// 		console.log('The result of the operation was ' + message); // The result of the operation was Success
// 	})
// 	.catch((message) => {
// 		console.log('This operation is ' + message); // This operation is Failed when 2 + 3
// 	});

// Task 03
// UA: Створіть проміс, який після створення відразу переходить у стан resolve
//     і повертає рядок "Promise Data".
//     Отримайте дані промісу та виведіть їх у консоль.
// EN: Create a promise that, upon creation, immediately transitions to the resolve state
//     and returns the string 'Promise Data'.
//     Get the promise data and print it to the console.

// // via Promise constructor
// const resolvedPromise = new Promise((resolve) => {
// 	resolve('Promise Data');
// });
// resolvedPromise.then((data) => {
// 	console.log(data); // 'Promise Data'
// });

// // via attached handler to settled promise - handler just runs immediately
// const promise = new Promise((resolve) => resolve('Promise Data'));
// promise.then(console.log); // 'Promise Data'

// Task 04
// UA: Створіть проміс, який після створення відразу переходить у стан rejected
//     і повертає рядок 'Promise Error'.
//     Отримайте дані промісу та виведіть їх у консоль.
// EN: Create a promise that, upon creation, immediately transitions to the reject state
//     and returns the string 'Promise Error'.
//     Get the promise data and print it to the console.

// // via Promise constructor and method .catch
// const rejectedPromise = new Promise((resolve, reject) => {
// 	reject('Promise Error');
// });
// rejectedPromise.catch(console.log); // 'Promise Error'

// // via Promise constructor and method .then
// const rejectedPromise = new Promise((resolve, reject) => {
// 	reject('Promise Error');
// });
// rejectedPromise.then(null, console.log); // 'Promise Error'

// Task 05
// UA: Створіть проміс, який переходить у стан resolve через 3 скунди
//     (використайте setTimeout) та повертає рядок 'Promise Data'.
//     Отримайте дані промісу та виведіть їх у консоль.
// EN: Create a promise that goes into "resolve" state after 3 seconds
//     (use setTimeout) and returns the string 'Promise Data'.
//     Get the promise data and output it to the console.

// const promiseIn3Sec = new Promise((resolve) => {
// 	console.log('Promise is created');
// 	setTimeout(() => {
// 		resolve('Promise Data');
// 	}, 3000);
// });

// console.log(promiseIn3Sec); // 'Promise is created'
// promiseIn3Sec.then(console.log); // 'Promise Data'

// Task 242222222222222222222222222222222222222
// UA: Напишіть код, який перевірить, чи змінна є промісом чи ні?
// EN: Write code that checks if a variable is a promise?

// solution via Promise.resolve()-method and checking:
// if the variable has a then method - is a function, which promises have or
// if the variable is an instance of the Promise constructor
// function isPromise(variable) {
// 	return (
// 		variable !== null &&
// 		typeof variable === 'object' &&
// 		(typeof variable.then === 'function' ||
// 			variable.constructor.name === 'Promise')
// 	);
// }

// // to check 1 test
// const myPromise = new Promise((resolve) => {
// 	setTimeout(() => resolve('Done'), 1000);
// });
// console.log(isPromise(myPromise)); // true
// // to check 2 test
// const myVariable = 'Ababagalamaga';
// console.log(isPromise(myVariable)); // false

// Task 06
// UA: Створіть літерал об'єтку handlePromise із такими полями:
//     promise, resolve, reject, onSuccess, onError
//     Задайте першим трьом полям значення null,
//     а останні два поля - це функції, які отримують один параметр і виводять
//     у консоль відповідні повідомлення: перша - `Promise is resolved with data: ${paramName}`,
//     друга - `Promise is rejected with error: ${paramName}`.
//     Створіть три обробника подій click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
//     Перший обробник, створює проміс, ззаповнює перші три поля,
//     описаного вище об'єкту: властивість promise отримує новий створений проміс,
//     властивість resolve і reject отримують посилання на відповідні функції
//     resolve і reject. Наступні два обробника запускають методи resolve та reject.
// EN: Create a handlePromise object literal with the following fields: promise, resolve, reject,
//     onSuccess, onError.
//     Set the first three fields to null, and the last two fields are functions that receive one
//     parameter and output corresponding messages to the console: the first - `Promise is resolved
//     with data: ${paramName}', the second - `Promise is rejected with error: ${paramName}`.
//     Create three click event handlers for the buttons "Create Promise", "Resolve Promise",
//     "Reject Promise". The first handler creates a promise and fills in the first three fields
//     of the object described above: the promise property receives the newly created promise,
//     the resolve and reject properties receive references to the corresponding resolve and
//     reject functions. The next two handlers run the resolve and reject methods.

// const handlePromise = {
// 	promise: null,
// 	resolve: null,
// 	reject: null,
// 	onSuccess(value) {
// 		console.log(`Promise is resolved with data: ${value}`);
// 	},
// 	onError(err) {
// 		console.log(`Promise is rejected with error: ${err}`);
// 	},
// };

// document.getElementById('btn-create-promise').addEventListener('click', () => {
// 	handlePromise.promise = new Promise((resolve, reject) => {
// 		console.log('Promise is created');
// 		handlePromise.resolve = resolve; //  для управління промісом ззовні
// 		handlePromise.reject = reject; //  для управління промісом ззовні
// 	})
// 		.then(handlePromise.onSuccess) // для виведення даних
// 		.catch(handlePromise.onError); // для виведення помилки
// });

// document.getElementById('btn-resolve-promise').addEventListener('click', () => {
// 	handlePromise.resolve?.('Some Data');
// });

// document.getElementById('btn-reject-promise').addEventListener('click', () => {
// 	handlePromise.reject?.('Some Error');
// });

// Task 07
// UA: Використовуючи попереднє завдання. Продублюйте рядок з методом then.
// EN: Using the previous task. Duplicate the line with the then method.

// const handlePromise = {
// 	promise: null,
// 	resolve: null,
// 	reject: null,
// 	onSuccess(value) {
// 		console.log(`Promise is resolved with data: ${value}`);
// 	},
// 	onError(err) {
// 		console.log(`Promise is rejected with error: ${err}`);
// 	},
// };

// document.getElementById('btn-create-promise').addEventListener('click', () => {
// 	handlePromise.promise = new Promise((resolve, reject) => {
// 		console.log('Promise is created');
// 		handlePromise.resolve = resolve;
// 		handlePromise.reject = reject;
// 	})
// 		.then(handlePromise.onSuccess) // виведе 'Promise is resolved with data: Some Data', але перший метод ніяких даних не повертає, тому
// 		.then(handlePromise.onSuccess) // в другому методі value = undefined і буде виведено вираз 'Promise is resolved with data: undefined'
// 		.catch(handlePromise.onError);
// });

// document.getElementById('btn-resolve-promise').addEventListener('click', () => {
// 	handlePromise.resolve?.('Some Data');
// });

// document.getElementById('btn-reject-promise').addEventListener('click', () => {
// 	handlePromise.reject?.('Some Error');
// });

// Task 08
// UA: Створіть проміс, який через 1 секунду повертає рядок "My name is".
//     Створіть функцію onSuccess, яка отримує один параметр, додає до нього ваше ім'я
//     та повертає новий рядок із функції. Створіть функцію print, яка виводить консоль
//     значення свого параметра. Додайте два методи then та зареєструйте створені функції.
// EN: Create a promise that after 1s returns the string "My name is".
//     Create an onSuccess function that takes one parameter, appends your
//     name to it, and returns a new string from the function.
//     Create a print function that prints the value of its parameter to the console.
//     Add two then methods and register the created functions.

// const p8 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'My name is');
// });

// function onSuccess(value) {
// 	return Promise.resolve(`${value} Volodymyr`);
// }

// function print(value) {
// 	console.log(value); // 'My name is Volodymyr'
// }

// p8.then(onSuccess).then(print);

// Task 09
// UA: Використовуйте попередній код. Додайте у функцію onSuccess генерацію помилки.
//     Обробіть цю помилку, використовуючи catch. Зауважте, що метод print при цьому
//     не виконується.
// EN: Use the previous code. Add an exception to the onSuccess function.
//     Handle the given exception using catch. Note that the print method is
//     not executed in this case.

// const p9 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 1000, 'My name is');
// });

// function onSuccess(value) {
// 	throw new Error('Error');

// 	return Promise.resolve(`${value} Volodymyr`);
// }

// function print(value) {
// 	console.log(value); // undefined
// }

// p9.then(onSuccess)
// 	.then(print)
// 	.catch((err) => {
// 		console.log(err); // Error: 'Error' at onSuccess...
// 	})
// 	.then(print);

// Task 10
// UA: Напишіть функцію getPromiseData, яка приймає один параметр – проміс.
//     Функція отримує значення промісу та виводить його в консоль.
//     Оголосіть об'єкт із властивістю name та значенням Anna.
//     Створіть обгортку для цього об'єкта і викличте для нього функцію getPromiseData.
// EN: Write a getPromiseData function that takes one parameter - a promise.
//     The function receives the promise value and prints it to the console.
//     Declare an object with a name property and a value of Anna.
//     Create a wrapper for this object and call the getPromiseData function on it.

// // solution 1
// function getPromiseData(promise) {
// 	console.log(promise); // Promise {<fulfilled>: {…}}

// 	// if (Object.getPrototypeOf(promise).constructor.name !== 'Promise') {
// 	if (promise[Symbol.toStringTag] !== 'Promise') {
// 		return;
// 	}

// 	promise.then(console.log); // {name: 'Anna'}
// }

// const person = {
// 	name: 'Anna',
// };

// getPromiseData(Promise.resolve(person));

// // solution 2
// function getPromiseData(promise) {
// 	promise
// 		.then((data) => {
// 			console.log(data); // { name: 'Anna' }
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// }

// const person = {
// 	name: 'Anna',
// };

// const personPromise = Promise.resolve(person);
// getPromiseData(personPromise); // { name: 'Anna' }

// Task 11
// UA: Створіть два проміси. Перший проміс повертає об'єкт {name: "Anna"} через 2с,
//     а другий проміс повертає об'єкт {age: 16} через 3с.
//     Отримайте результати роботи двох промісів, об'єднайте властивості об'єктів та виведіть їх у консоль.
// EN: Create two promises. The first promise returns the object {name: "Anna"} in 2s,
//     and the second promise returns the object {age: 16} in 3s.
//     Get the results of two promises, merge the properties of the objects
//     and output them to the console.

// const p1 = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve({
// 			name: 'Anna',
// 		});
// 	}, 2000);
// });

// const p2 = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve({
// 			age: 16,
// 		});
// 	}, 3000);
// });

// Promise.all([p1, p2])
// 	.then((res) => {
// 		console.log(res); // [{name: 'Anna'}, {age: 16}]
// 		console.log(`User name is ${res[0].name}, age ${res[1].age}`); // User name is Anna, age 16
// 		return res;
// 	})
// 	.then(([o1, o2]) => {
// 		console.log({ ...o1, ...o2 }); // {name: 'Anna', age: 16}
// 	})
// 	.catch((err) => console.log(`Unexpected err ${err}`));

// Task 12
// UA: Використайте попереднє завдання. Нехай тепер другий проміс переходить в стан
//     rejected зі значенням "Promise Error" . Змініть код, щоб опрацювати цю ситуацію.
// EN: Use the previous task. Now let the second promise go into the rejected state
//     with the value "Promise Error". Change the code to handle this situation.

// const p1 = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve({
// 			name: 'Anna',
// 		});
// 	}, 2000);
// });

// const p2 = new Promise((reject) => {
// 	setTimeout(() => {
// 		reject('Promise Error');
// 	}, 3000);
// });

// Promise.allSettled([p1, p2])
// 	.then((res) => {
// 		console.log(res); // [{status: 'fulfilled', value: {…}}, {status: 'fulfilled', value: 'Promise Error'}]
// 		const arr = res.filter((o) => o.status === 'fulfilled');
// 		console.log(arr[0].value); // {name: 'Anna'}
// 		return res;
// 	})
// 	.then(([o1, o2]) => {
// 		console.log({ ...o1, ...o2 }); // {status: 'fulfilled', value: 'Promise Error'}
// 	})
// 	.catch((err) => console.log(`Unexpected err ${err}`));

// Task 13
// UA: Створіть проміс, який перейде у стан resolve через 5с і поверне
//     рядок 'Promise Data'. Створіть другий проміс, який перейде в стан rejected по кліку
//     на кнопку "Cancel Promise". Додайте обробник для кнопки. Використовуючи метод race,
//     організуйте "скасування промісу".
// EN: Create a promise that will resolve in 5s and return the string 'Promise Data'.
//     Create a second promise, which will go into the rejected state when the "Cancel
//     Promise" button is clicked. Add a button handler.
//     Use the race method to organize the "cancellation of the promise".

// const promise5SecDelay = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve('Promise Data');
// 	}, 5000);
// });

// const promiseCanseled = new Promise((resolve, reject) => {
// 	document
// 		.getElementById('btn-cancel-promise')
// 		.addEventListener('click', () => {
// 			reject('Cancel Promise');
// 		});
// });

// Promise.race([promise5SecDelay, promiseCanseled])
// 	.then(console.log)
// 	.catch(console.log);

// via function creation for delayed promise
// function delayPromise(ms, value) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(value);
// 		}, ms);
// 	});
// }
// const promise1 = delayPromise(5000, 'Promise Data');

// const promise2 = new Promise((resolve, reject) => {
// 	document
// 		.getElementById('btn-cancel-promise')
// 		.addEventListener('click', () => {
// 			reject(new Error('Cancel Promise'));
// 		});
// });

// Promise.race([promise1, promise2])
// 	.then((result) => {
// 		console.log(result); // Цей блок виконається при успішному вирішенні promise1 -> Promise Data
// 	})
// 	.catch((error) => {
// 		console.error(error.message); // Цей блок виконається при відхиленні promise2 -> Error: Cancel Promise
// 	});

// Task 14
// UA: Створіть два проміси. Перший проміс повертає об'єкт { name: "Anna" } через 2с,
//     другий проміс переходить у стан rejected зі значенням "Promise Error".
//     Запустіть обидва ці проміси паралельно і отримайте результати тих, які успішно завершлися.
// EN: Create two promises. The first promise returns the object { name: "Anna" }
//     after 2s, the second promise goes into the rejected state with the value "Promise Error".
//     Run both of these promises in parallel and get the results of the ones that succeed.

// const p1 = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve({
// 			name: 'Anna',
// 		});
// 	}, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('Promise Error');
// 	}, 3000);
// });

// Promise.race() method will return whichever promise settles first, regardless
// of whether it's fulfilled or rejected, that is why Promise.allSettled() method
// is getting only the fulfilled promises.
// Promise.allSettled([p1, p2])
// 	.then((res) => {
// 		console.log(res); // [{status: 'fulfilled', value: {…}}, {status: 'rejected', reason: 'Promise Error'}]
// 		const fulfilledPromises = res.filter((o) => o.status === 'fulfilled'); // filtering the fulfilled promises and storing them in fulfilledPromises
// 		const fulfilledValues = fulfilledPromises.map((o) => o.value); // extract values from fulfilled promises
// 		if (fulfilledValues.length === 1) {
// 			console.log(fulfilledPromises[0].value); // { name: 'Anna' }
// 		}
// 		console.log(fulfilledValues); // [{ name: 'Anna' }]
// 	})
// 	.catch((err) => console.log(`Unexpected err ${err}`));

// Task 15
// UA: Створіть два проміси. Перший проміс повертає об'єкт {name: "Anna"}
//     через 2с, другий проміс повертає дефолтний об'єкт {name: "Unknown"}
//     через 1с. Запустіть обидва ці проміси паралельно та отримайте результат
//     того, який відпрацює першим.
// EN: Create two promises. The first promise returns the object { name: "Anna" }
//     after 2s, the second promise returns the default object { name: "Unknown" } after 1s.
//     Run both of these promises in parallel and get the result of the one that runs first.

// subcode0
// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ name: 'Anna' });
// 	}, 2000);
// });

// subcode1
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve({ name: 'Unknown' });
// 	}, 1000);
// });

// subcode2
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject({ name: 'Unknown' });
// 	}, 1000);
// });

// subcode3
// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject({ name: 'Anna' });
// 	}, 2000);
// });

// via race method
// Promise.race([promise1, promise2])
// 	.then((result) => {
// 		console.log(result); // {name: "Anna"} when subcode1
// 	})
// 	.catch((error) => {
// 		console.log(error); // {name: "Unknown"} when subcode0 and subcode1; when subcode0 and subcode2; when subcode1 and subcode3;
// 	});

// via any method
// Promise.any([promise1, promise2])
// 	.then((result) => {
// 		console.log(result); // {name: "Anna"} when subcode0 and subcode2
// 	})
// 	.catch((error) => {
// 		console.log(error); // "All promises were rejected" when subcode2 and subcode3; {name: "Unknown"} when subcode1 and subcode3; when subcode0 and subcode1;
// 	});

// ============================Task ??===================================
// UA: Можете показати як правельно використовувати fetch з промісами, щоб
//     передбачити обробку основних помилок статусу?
// EN: Can you show how to correctly use fetch with promises to predict
//     the handling of basic status errors?

// solution via if-condition, switch:
// fetch('/user')
// 	.then((res) => {
// 		if (!res.ok) {
// 			switch (res.status) {
// 				case 400:
// 					break;
// 				case 401:
// 					break;
// 				case 404:
// 					break;
// 				case 500:
// 					break;
// 			}
// 		}
// 		return res.json();
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});
// ======================================================================

// Task 16
// UA: Отримайте перелік користувачів в списку використавши метод для запиту
//     на сервер fetch та для роботи з асинхронним кодом promise. При цьому,
//     безкоштовний сервіс для отимання даних (користувачів) за посиланням
//     'https://jsonplaceholder.typicode.com/users'.
//     Перший рядок коду виводить у консолі вираз "Request started". Після запиту
//     fetch виведіть у консолі рядок "Data received". Далі створіть код з використанням
//     promise, обробіть його та виведіть результат у консоль.
// EN: Get the list of users in the list using the fetch method to request the server
//     and to work with asynchronous promise code. At the same time, a free service for
//     obtaining data (users) at the link 'https://jsonplaceholder.typicode.com/users'.
//     The first line of code displays the expression "Request started" in the console.
//     After the fetch request, display the line "Data received" in the console. Next,
//     create code using a promise, process it, and output the result to the console.

// console.log('Request started');

// const promiseUsersList = fetch('https://jsonplaceholder.typicode.com/users');

// console.log('Data received');

// promiseUsersList
// 	.then((data) => data.json())
// 	.then((users) => {
// 		console.log(users);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// Task 17
// UA: Ми маємо видавництво та декілька журналістів, які працюють в ньому.
//     Кожен журналіст написав свій пост з заголовком та якоюсь інформацією в цьому пості.
//     Потрібно написати дві функції: getJournalist - шукає журналіста з даними по його id,
//     а друга функція getPublisherPost - виводить інформацію поста, який був написаний цим
//     журналістом. Отримайте потрібні дані використовуючи проміси та безкоштовний сервіс
//     для отимання інформації постів за посиланням 'https://jsonplaceholder.typicode.com/posts'.
//     Дані на журналістів видавництва надані в змінній publishingHouse.
// EN: We have a publishing house and several journalists who work in it. Each journalist
//     wrote their own post with a headline and some information in that post.
//     It is necessary to write two functions: getJournalist - searches for a journalist with
//     data by his id, and the second function getPublisherPost - displays information about
//     the post that was written by this journalist. Get the data you need using promises and
//     a free post information service at 'https://jsonplaceholder.typicode.com/posts'.
//     Data on the journalists of the publishing house are provided in the publishingHouse variable.
// const publishingHouse = [
// 	{
// 		journalist: 'Mariana',
// 		id: 24,
// 		title: 'autem hic labore sunt dolores incidunt',
// 	},
// 	{ journalist: 'Modest', id: 47, title: 'quibusdam cumque rem aut deserunt' },
// 	{
// 		journalist: 'Aram',
// 		id: 68,
// 		title: 'odio quis facere architecto reiciendis optio',
// 	},
// 	{
// 		journalist: 'Elis',
// 		id: 81,
// 		title: 'tempora rem veritatis voluptas quo dolores vero',
// 	},
// ];

// // solution
// const getPublisherPost = (journalist) => {
// 	const promisePosts = fetch('https://jsonplaceholder.typicode.com/posts');
// 	return promisePosts
// 		.then((data) => data.json())
// 		.then((posts) => {
// 			const writtenPost = posts.find(
// 				(result) => result.title == journalist.title
// 			);
// 			// console.log(writtenPost.body); // his post is about >  voluptatem assumenda ut ...
// 			return {
// 				...journalist,
// 				body: writtenPost.body,
// 			};
// 		});
// };

// const getJournalist = (id) => {
// 	return new Promise((resolve, reject) => {
// 		// server delay imitation - asynchronous operation
// 		setTimeout(() => {
// 			const journalistData = publishingHouse.find(
// 				(publisher) => publisher.id === id
// 			);

// 			if (journalistData) {
// 				resolve(journalistData);
// 			} else {
// 				reject(Error('Journalist is not fond'));
// 			}
// 		}, 1500);
// 	});
// };

// getJournalist(47)
// 	.then((data) => {
// 		console.log(data); // {journalist: 'Modest', id: 47, title: 'quibusdam cumque rem aut deserunt'}
// 		return getPublisherPost(data);
// 	})
// 	.then((publisherPost) => {
// 		console.log('The post is > \n', publisherPost.body);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// Task 18
// UA: Ми маємо функцію watchTutorialCallback, яка на вхід отримує два колбека: callback
//     та errorCallback. В залежності від значення змінних userLeft та userWatchingCartoon
//     в консолі ми отримуєм відповідний результат. Змініть функцію watchTutorialCallback
//     на watchTutorialPromise використовуючи проміси замість колбеків та застосуйте методи
//     промісів .then/.catch.
// EN: We have a watchTutorialCallback function that receives two callbacks as input: callback
//     and errorCallback. Depending on the value of the userLeft and userWatchingCartoon
//     variables in the console, we get the corresponding result. Change the watchTutorialCallback
//     function on watchTutorialPromise using promises instead of callbacks and use the .then/.catch
//     promise methods.

// const userLeft = false;
// const userWatchingCartoon = false;

// function watchTutorialCallback(callback, errorCallback) {
// 	if (userLeft) {
// 		errorCallback({
// 			name: 'user Left',
// 			message: ':(',
// 		});
// 	} else if (userWatchingCartoon) {
// 		errorCallback({
// 			name: 'user watching cartoon',
// 			message: "cartoon's name - Mikey Mouse",
// 		});
// 	} else {
// 		callback('Thumbs up and Subscribe');
// 	}
// }

// thret to get 'callback hell'
// watchTutorialCallback(
// 	(message) => {
// 		console.log('Success! ' + message); // Success! Thumbs up and Subscribe
// 	}, (error) => {
// 		console.log(error.name + ' ' + error.message);
// 	}
// );

// // solution
// function watchTutorialPromise() {
// 	return new Promise((resolve, reject) => {
// 		if (userLeft) {
// 			reject({
// 				name: 'user Left',
// 				message: ':(',
// 			});
// 		} else if (userWatchingCartoon) {
// 			reject({
// 				name: 'user watching cartoon',
// 				message: "cartoon's name - Mikey Mouse",
// 			});
// 		} else {
// 			resolve('Thumbs up and Subscribe');
// 		}
// 	});
// }

// watchTutorialPromise()
// 	.then((message) => {
// 		console.log('Success! ' + message); // Success! Thumbs up and Subscribe
// 	})
// 	.catch((error) => {
// 		console.log(error.name + ' ' + error.message);
// 	});

// =====================Task ??===================================
// UA: Що собою представляє цикл подій? Наведіть приклад, як працює
//     цикл подій працює в JavaScript.
// EN: What is the event loop? Give an example of how the event loop
//     works in JavaScript.

/*
  Цикл подій є невід’ємною частиною середовища виконання JavaScript. Цикл   
  подій показує порядок обробки виконання асинхронних завдань, гарантуючи, 
  що вони не блокують основне виконання і дозволяють JavaScript бути постійно    
  дієвим. Давайте наведемо приклад, як цикл подій працює в JavaScript, 
  імітуючи асинхронну поведінку. Ось у якій черзі програма виконається:
*/

// console.log('Start'); // 1

// setTimeout(() => {
// 	console.log('Timeout1'); // 4
// }, 0);

// setTimeout(() => {
// 	console.log('Timeout2'); // 5
// }, 0);

// Promise.resolve().then(() => {
// 	console.log('Promise resolved'); // 3
// });

// console.log('End'); // 2

/*
  Програма запускається шляхом виводу 'Start' в консоль.
  Дві функції setTimeout() викликаються із затримкою в 0 мілісекунд.
  Хоча затримка кожної встановлена у значення 0, JavaScript розглядає 
  цю затримку як мінімальну, і яка додасть функцію callback спочатку до 
  черги завдань/подій і вже потім до стеку викликів (або стеку поточного 
  контексту виконання). Далі, викликається Promise.resolve().then(), 
  додаючи виклик callback до черги мікрозадач. Мікрозадачі, такі як  
  promise, мають вищий пріоритет ніж ті, які знаходяться у звичайній 
  черзі завдань/подій, тому promise буде виконуватись раніше і цикл 
  подій коли буде перевіряти чергу мікрозадач виконає зворотний виклик 
  Promise.resolve().then() та виведе в консоль 'Promise resolved'.
  Програма виводить 'End' в консоль.
  Далі цикл подій перевіряє стек викликів і виявляє, що він порожній.
  Потім цикл подій перевіряє чергу завдань і вибирає найстаріше завдання
  (в нашому випадку, це перший callback для виконання - перший setTimeout()).
  'Timeout1' виводиться у консоль.
  Цикл подій знову перевіряє стек викликів і виявляє, що він порожній.
  Цикл подій переходить до наступного завдання в черзі завдань і виконує
  другий зворотний виклик setTimeout(). 'Timeout2' виводиться у консоль.
  Цикл подій знову перевіряє стек викликів і виявляє, що він порожній.
*/
