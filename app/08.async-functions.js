console.log("Topic: Async Functions");

// ======================= Task 01 ===================================
// UA: Поясніть для чого застосовують спеціальний синтаксис async/await?
//     Наведіть простий приклад застосування цього ситнаксису.
// EN: In which sequence the result will be outputted? Explain the result.

// answer:
/* Існує спеціальний синтаксис для більш зручної роботи з промісами,
   який називається “async/await”. Слово async перед функцією означає одну
   просту річ: функція завжди повертає проміс. Інші значення автоматично
   загортаються в успішно виконаний проміс.
   Ключове слово await змушує JavaScript чекати, поки проміс не виконається,
   та повертає його результат. await, працює лише всередині async-функцій. 
   await буквально призупиняє виконання функції до тих пір, поки проміс 
   не виконається, а потім відновлює її з результатом проміса. Це не вимагає
   жодних ресурсів ЦП, тому що рушій JavaScript може тим часом робити інші
   завдання: виконувати інші скрипти, обробляти події тощо. Ось простий
   приклад з промісом, який виконується за 3 секунди:
*/
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 3000);
  });

  let result = await promise; // чекатиме, поки проміс не виконається

  console.log(result); // "готово!"
}
f();
/* Не можна використовувати await у звичайних функціях. Якщо ми спробуємо
використати await у не-асинхронній функції, виникне синтаксична помилка. */
// ===================================================================

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

// ======================= Task 09 ===================================
// UA: Можете показати як правельно використовувати fetch з промісами,
//     щоб передбачити обробку основних помилок статусу?
// EN: Can you show how to correctly use fetch with promises to predict
//     the handling of basic status errors?

// solution via if-condition and switch directive:
/* При цьому завжди потрібно пам’ятати: fetch відхиляє лише помилки мережі
 (наприклад, відсутність інтернету або збій DNS). Він не відхиляє помилки 
 HTTP — саме тому потрібно перевірити властивість res.ok. 
*/
fetch("/user")
  .then((res) => {
    if (!res.ok) {
      switch (res.status) {
        case 400:
          /* 400 – Неправильний запит. Це означає, що клієнт (ваш код) надіслав
           запит, який сервер не зміг зрозуміти. Приклад: неправильно сформований
           JSON у тілі запиту, відсутні обов'язкові параметри запиту або недійсний
           синтаксис у запиті. При цьому клієнту можна показати повідомлення типу
          */
          console.log(
            "Bad Request: Your request was invalid. Please check the input.",
          );
          break;
        case 401:
          /* 401 – Неавторизовано. Запит вимагає автентифікації, але або облікові
           дані не були надані, або вони були недійсними. Приклад: виклик API без
           дійсного токена або з обліковими даними, термін дії яких минув. Для
           обробки можна перенаправити на сторінку входу, оновити токен або запитати
           користувача на повторну автентифікацію.
          */
          console.log(
            "Unauthorized: Authentication required or invalid credentials.",
          );
          break;
        case 403:
          /* 403 Заборонено. Ви автентифіковані, але сервер відмовляє в доступі.
           Приклад: спроба доступу до кінцевої точки лише для адміністратора зі
           звичайним обліковим записом користувача. Обробка: Показати що доступ
           заборонено або перенаправити на безпечну сторінку.
          */
          console.log("Forbidden: Access denied.");
          break;
        case 404:
          /* 404 – Не знайдено. Сервер не зміг знайти запитуваний вами ресурс.
           Приклад: запит, коли кінцева точка не існує, або запит ідентифікатора
           користувача, якого немає в базі даних. Обробка: Відображення повідомлення
           "Не знайдено" або коректне погіршення інтерфейсу користувача (наприклад, 
           приховування недоступного контенту).
          */
          console.log("Not Found: I cannot find the source of your request.");
          break;
        case 429:
          /* 429 Забагато запитів. Клієнт надіслав забагато запитів за короткий 
           період. Приклад: повторне звернення до кінцевої точки API без дотримання
           обмежень швидкості. Обробка: Реалізуйте логіку повторних спроб з експоненціальним
           відкладенням або повідомте користувача про необхідність зачекати.
          */
          console.log("Forbidden: Access denied.");
          break;
        case 500:
          /* 500 – Внутрішня помилка сервера. На стороні сервера сталася помилка.
           Це не ваша вина як клієнта. Приклад: помилка в коді серверної частини,
           збій підключення до бази даних або неочікуваний виняток. Для обробки
           можна показати клієнту загальне повідомлення про помилку та розглянути 
           можливість реєстрації/повідомлення про проблему.
          */
          console.log(
            "Server Error: An error occurred on server side. Please try again later.",
          );
          break;
      }
    }
    return res.json();
  })
  .catch((error) => {
    console.error(error);
  });

// solution via function creation in centralize helper file:
/* В реалії, для продакшн-коду краще централізувати обробку помилок у 
  допоміжній функції, щоб не повторювати switch в кожному запиті fetch.*/
// Centralized response handler
function handleResponse(res) {
  if (!res.ok) {
    switch (res.status) {
      case 400:
        throw new Error(
          "Bad Request: The server could not understand the request.",
        );
      case 401:
        throw new Error(
          "Unauthorized: Authentication required or invalid credentials.",
        );
      case 403:
        throw new Error(
          "Forbidden: You are authenticated but not allowed to access this resource.",
        );
      case 404:
        throw new Error("Not Found: The requested resource does not exist.");
      case 429:
        throw new Error(
          "Too Many Requests: You have sent too many requests in a given time. Rate limiting applies.",
        );
      case 500:
        throw new Error(
          "Internal Server Error: Something went wrong on the server.",
        );
      default:
        throw new Error(`Unexpected status: ${res.status}`);
    }
  }
  return res.json(); // Only runs if res.ok === true
}
// приклад використання
fetch("/user")
  .then(handleResponse)
  .then((data) => {
    console.log("User data:", data);
  })
  .catch((err) => {
    console.error("Fetch error:", err.message);
  });

// solution via created API
// Якщо часто викликaється API, тоді це все можна обгорнути в утиліту типу:
// async function apiFetch(url, options = {}) {
//   const res = await fetch(url, options);
//   return handleResponse(res);
// } або навіть краще
// Створена обгортка навколо fetch яка відловлює ще і помилки мережі
async function apiFetch(url, options = {}) {
  try {
    const res = await fetch(url, options);
    return await handleResponse(res);
  } catch (err) {
    // Distinguish between network errors and HTTP status errors
    if (err instanceof TypeError) {
      // fetch throws TypeError on network failures
      throw new Error(
        "Network Error: Unable to reach the server or you are offline.",
      );
    }
    throw err; // rethrow HTTP status errors
  }
}
// приклад використання
apiFetch("/user")
  .then((data) => console.log("User data:", data))
  .catch((err) => console.error("API error:", err.message));

// ======================================================================

// ========================== Task 01 ===================================
// UA: Маєм рішення отримання списку імен користувачів із використанням
//     методу для запиту на сервер fetch та обробки даних promise. Перепишіть
//     рішення з використанням async/await.
// EN: I have a solution to get a list of usernames using a fetch method
//     to query the server and a promise to process the data. Rewrite
//     the solution using async/await.

//     The sample solution:
//     let promiseUsersList = fetch("https://jsonplaceholder.typicode.com/users");
// promiseUsersList
//   .then((data) => data.json())
//   .then((allData) => {
//     console.log("All data ", allData); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}])
//     return allData.map((user) => user.name);
//   })
//   .then((names) => console.log("Names: ", names)) // (10) ['Leanne Graham', 'Ervin Howell',..., 'Clementina DuBuque']
//   .catch((err) => {
//     console.error("Error: ", err.message);
//   });

// solution via async/await:
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const allUsersData = await res.json();

    console.log("All users data:", allUsersData);

    const userNames = allUsersData.map((user) => user.name);
    console.log("Names list:", userNames);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
getUsers();
// ======================================================================
