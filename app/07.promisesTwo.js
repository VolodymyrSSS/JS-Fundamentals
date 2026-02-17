console.log("Topic: Promises part2");

// ======================= Task 01 ===================================
// UA: Створіть літерал об'єтку handlePromise із такими полями: promise,
//     resolve, reject, onSuccess, onError. Далі задайте першим трьом
//     полям значення null, а останні два поля - це функції, які отримують
//     один параметр і виводять у консоль відповідні повідомлення: перша
//     - `Promise is resolved with data: ${paramName}`, друга
//     - `Promise is rejected with error: ${paramName}`.
//     Створіть три обробника подій click для кнопок "Create Promise",
//     "Resolve Promise", "Reject Promise". Перший обробник, створює проміс,
//     заповнює перші три поля, описаного вище об'єкту: властивість promise
//     отримує новий створений проміс, властивість resolve і reject отримують
//     посилання на відповідні функції resolve і reject. Наступні два
//     обробника запускають методи resolve та reject.
// EN: Create a handlePromise object literal with the following fields:
//     promise, resolve, reject, onSuccess, onError. Set the first three
//     fields to null, and the last two fields are functions that receive one
//     parameter and output corresponding messages to the console: the first
//     - `Promise is resolved with data: ${paramName}', the second
//     - `Promise is rejected with error: ${paramName}`.
//     Create three click event handlers for the buttons "Create Promise",
//     "Resolve Promise", "Reject Promise". The first handler creates a promise
//     and fills in the first three fields of the object described above: the
//     promise property receives the newly created promise, the resolve and reject
//     properties receive references to the corresponding resolve and reject
//     functions. The next two handlers run the resolve and reject methods.

const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess(value) {
    console.log(`Promise is resolved with data: ${value}`);
  },
  onError(err) {
    console.log(`Promise is rejected with error: ${err}`);
  },
};

document.getElementById("btn-create-promise").addEventListener("click", () => {
  handlePromise.promise = new Promise((resolve, reject) => {
    console.log("Promise is created");
    handlePromise.resolve = resolve; //  для управління промісом ззовні
    handlePromise.reject = reject; //  для управління промісом ззовні
  })
    .then(handlePromise.onSuccess) // для виведення даних
    .catch(handlePromise.onError); // для виведення помилки
});

document.getElementById("btn-resolve-promise").addEventListener("click", () => {
  handlePromise.resolve?.("Some Data");
});

document.getElementById("btn-reject-promise").addEventListener("click", () => {
  handlePromise.reject?.("Some Error");
});
// ===================================================================

// ======================= Task 02 ===================================
// UA: Використовуючи попереднє завдання. Продублюйте рядок з методом then.
// EN: Using the previous task. Duplicate the line with the then method.

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
// ===================================================================

// ======================= Task 03 ===================================
// UA: Створіть проміс, який через 1 секунду повертає рядок "My name is".
//     Потім створіть функцію onSuccess, яка отримує один параметр, додає
//     до нього ваше ім'я та повертає проміс із цим новим рядком. Потім
//     створіть функцію print, яка виводить в консоль значення свого
//     параметра. На кінець, додайте два методи then та зареєструйте
//     створені функції. Поясніть отриманий результат.
// EN: Create a promise that after 1s returns the string "My name is".
//     Create an onSuccess function that takes one parameter, appends
//     your name to it, and returns a promise with this new string.
//     Than create a print function that prints the value of its
//     parameter to the console. Add two then methods and register
//     the created functions. Explain the result.

const promiseNamePresent = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "My name is"); // через 1сек проміс вирішується з рядком "My name is"
});
// вирішене значення передається функції onSuccessOne

// це перший метод .then з функцією onSuccessOne, який отримує вирішене знач від створеного проміса
function onSuccessOne(str) {
  return Promise.resolve(`${str} Volodymyr`); // до цього рядка додається Volodymyr і повертається проміс з новим знач
  /* можемо зробити навіть так: return `${str} Volodymyr`; - тобто повертає
  не проміс а просте значення. Aле метод .then є розумним і якщо колбек 
  повертає просте значення (не проміс), автоматично огортає його у вирішений
  проміс. */
}

// це другий метод .then з функцією ргіnt, який отримує на вхід вирішене знач від першого then - "My name is Volodymyr"
function print(value) {
  console.log(value); // 'My name is Volodymyr'
}

/* Отже, через 1 секунду, перший проміс вирішується з рядком "My name is "
    потім функція onSuccessOne додає "Volodymyr"
    потім функція print виводить у консоль результуючий рядок "My name is Volodymyr"
*/
promiseNamePresent.then(onSuccessOne).then(print);
// ===================================================================

// ======================= Task 04 ===================================
// UA: Використовуйте попередній код. Додайте у функцію onSuccess
//     генерацію помилки. Обробіть цю помилку, використовуючи catch.
//     Зауважте, що метод print при цьому не виконується.
// EN: Use the previous code. Add an exception to the onSuccess function.
//     Handle the given exception using catch. Note that the print
//     method is not executed in this case.

function onSuccessTwo(str) {
  throw new Error("Error"); // одразу викидає помилку - це еквівалентно до Promise.reject

  return Promise.resolve(`${str} Volodymyr`); // сюда код не дойде бо попередній результат is rejected
}

promiseNamePresent
  .then(onSuccessTwo)
  .then(print) // цей крок також оминається бо ланцюжок промісів в стані reject
  .catch((err) => {
    // тут ловиться помилка
    console.log(err); // Error: 'Error' at onSuccessTwo...
  }) // важлива деталь: .catch також повертає проміс чи будь-яке значення - в цьому випадку нічого тому
  .then(print); // в консоль виводиться undefined

/* Отже, через 1 секунду, перший проміс вирішується з рядком "My name is "
    потім функція onSuccessTwo одразу викидає помилку (error)
    потім функція print оминається через помилку
    потім метод .catch обробляє помилку і виводить в консоль помилку але не повертає нічого значення = undefined
    потім функцiя print виводить в консоль undefined
*/
// ===================================================================

// ======================= Task 05 ===================================
// UA: Напишіть код, який перевірить, чи змінна є промісом чи ні?
// EN: Write code that checks if a variable is a promise?

/* solution via resolve() method and checking: if the variable 
   has a .then method (it is a function, which promises have) or
   if the variable is an instance of the Promise constructor.
*/
function isPromise(variable) {
  return (
    variable !== null &&
    typeof variable === "object" &&
    (typeof variable.then === "function" ||
      variable.constructor.name === "Promise")
  );
}

// to check 1 test
const myTestPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Done"), 1000);
});
console.log(isPromise(myTestPromise)); // true

// to check 2 test
const myTestVariable = "Ababagalamaga";
console.log(isPromise(myTestVariable)); // false
// ===================================================================

// ======================= Task 06 ===================================
// UA: Напишіть функцію getPromiseData, яка приймає один параметр – проміс.
//     Функція отримує значення промісу та виводить його в консоль.
//     Оголосіть об'єкт із властивістю name та значенням Anna. Створіть
//     обгортку для цього об'єкта і викличте для нього функцію getPromiseData.
// EN: Write a getPromiseData function that takes one parameter - a promise.
//     The function receives the promise value and prints it to the console.
//     Declare an object with a name property and a value of Anna. Create
//     a wrapper for this object and call the getPromiseData function on it.

// solution 1
function getPromiseDataOne(promise) {
  console.log(promise); // Promise {<fulfilled>: {…}}

  // if (Object.getPrototypeOf(promise).constructor.name !== 'Promise') {
  if (promise[Symbol.toStringTag] !== "Promise") {
    return;
  }
  promise.then(console.log); // {name: 'Anna'}
}

const person = {
  name: "Anna",
};

getPromiseDataOne(Promise.resolve(person));

// solution 2
function getPromiseDataTwo(promise) {
  promise
    .then((data) => {
      console.log(data); // { name: 'Anna' }
    })
    .catch((error) => {
      console.error(error);
    });
}

const personPromise = Promise.resolve(person);
getPromiseDataTwo(personPromise); // { name: 'Anna' }
// ===================================================================

// ======================= Task 07 ===================================
// UA: Створіть проміс, який перейде у стан resolve через 5с і поверне
//     рядок 'Promise Data'. Створіть другий проміс, який перейде в стан
//     rejected по кліку на кнопку "Cancel Promise". Додайте обробник для
//     кнопки. Використовуючи метод race, організуйте "скасування промісу".
// EN: Create a promise that will resolve in 5s and return the string
//     'Promise Data'. Create a second promise, which will go into the
//     rejected state when the "Cancel Promise" button is clicked. Add
//     a button handler. Use the race method to organize the "cancellation
//     of the promise".

const promise5SecDelay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Data");
  }, 5000);
});

/* варіанат створення вирішеного промісу з затримкою через функцію
  function delayPromise(ms, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, ms);
    });
  }
  потім треба викликати функцію щоб мати вирішений проміс
  const promise5SecDelay = delayPromise(5000, 'Promise Data');
*/

const promiseCanceled = new Promise((resolve, reject) => {
  document
    .getElementById("btn-cancel-promise")
    .addEventListener("click", () => {
      reject("Cancel Promise");
    });
});

/* Метод Promise.allSettled можна використовувати, щоб отримати результати всіх
  наданих промісів, навіть якщо деякі з них повертаються з помилкою. Цей метод
  прочто чекає, коли всі проміси завершаться, незалежно від результату. У нашому
  випадку його не можна використати бо необхідно щоб упродовж 5 секунд повинна
  бути натиснута кнопка "Cancel Promise". А якщо кнопка не буде натиснута то
  через 5 секунд виконається проміс з затримкою і в консолі отримаємо "Promise
  Data", що не відповідає задачі.
  Для вирішення задачі надійніше використати метод Promise.race. Cутністю його
  є виконання першого виконаного промісу незалежно від результатів їх виконання.
*/
Promise.race([promise5SecDelay, promiseCanceled])
  .then(console.log)
  .catch(console.log);
// ===================================================================

// ======================= Task 08 ===================================
// UA: Створіть два проміси. Перший проміс повертає об'єкт { name:"Anna" }
//     через 2с, другий проміс переходить у стан rejected зі значенням
//     "Promise Error". Запустіть обидва ці проміси паралельно і отримайте
//     результати тих, які успішно завершлися.
// EN: Create two promises. The first promise returns the object { name:"Anna" }
//     after 2s, the second promise goes into the rejected state with
//     the value "Promise Error". Run both of these promises in parallel
//     and get the results of the ones that succeed.

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      name: "Anna",
    });
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Error");
  }, 0);
});

// solution via Promise.allSettled method:
/* Оскільки нас цікавлять лише успішно виконані проміси, можемо використати метод
Promise.all разом з методом .catch для обробки помилок. Але компроміс полягає в
тому, що цей метод швидко завершує роботу, якщо будь-який promise буде відхилено.
Також інший метод Promise.race() поверне ту проміс, який буде виконаний першим,
незалежно від того, чи проміс був виконаний, чи відхилений. Ось чому найкраще
підійде метод Promise.allSettled, який отримує як виконані, так і відхилені проміси.
*/
Promise.allSettled([p1, p2]).then((res) => {
  console.log("All results are: ", res);
  // [
  //   { status: 'fulfilled', value: {name: 'Anna'} },
  //   { status: 'rejected', reason: {name: 'Promise Error'} }
  // ]

  const fulfilledPromises = res.filter((o) => o.status === "fulfilled"); // відфільтруємо тільки вирішені проміси

  const fulfilledValues = fulfilledPromises.map((o) => o.value); // отримаємо значення вирішених промісів
  console.log(fulfilledValues); // [{ name: 'Anna' }] - єдине значення (об'єкт) в масиві

  // var1 - через перевірку довжини та взяття єдиного значення через fulfilledPromises[0].value (вручну)
  if (fulfilledValues.length === 1) {
    console.log(fulfilledPromises[0].value); // { name: 'Anna' }
  }

  // var2 - коли є значення від багатьох виконаних промісів, то треба пройтись по усіх таких значеннях:
  const setOfFulfilledSamples = [
    { name: "Tony" },
    { name: "Bob" },
    { name: "Elis" },
  ];
  setOfFulfilledSamples.forEach((val) => console.log("Fulfilled value:", val));
  // кожне значення на окремому рядку { name: 'Tony' }{ name: "Bob" }{ name: "Elis" },
});
// .catch((err) => console.log(`Unexpected err ${err}`)); // цей метод тут не потрібний бо Promise.allSettled ніколи не відхиляє

// solution via destruction approach
// оптимізований варіант рішення - замість постійного звертання та доступу до .value, можна зробити деструктуризацію:
Promise.allSettled([p1, p2]).then((results) => {
  console.log("All results:", results);

  const fulfilledValues = results
    .filter(({ status }) => status === "fulfilled") // відфільтруємо тільки вирішені проміси
    .map(({ value }) => value); // взяли значення як обєкт в масиві [{ name: "Anna" }]

  console.log("First fulfilled values:", fulfilledValues[0]); // перше і єдине значення { name: "Anna" }
});
// ===================================================================
