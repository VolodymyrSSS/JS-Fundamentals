console.log("Topic: Promises part1");

// ======================= Task 01 ===================================
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
/* Promise - це кінцевий результат асинхронної операції, який може бути як 
  вирішеним/виконаним значенням, так і причиною відхилення. Він має три можливі 
  стани: очікує виконання (pending), виконано/вирішено (resolved/fulfilled) 
  та відхилено (rejected).
  Щоб створити Promise, використовують конструктор Promise, який приймає функцію
  зворотнього виклику з двома параметрами: resolve та reject. Усередині функції 
  зворотного виклику виконують асинхронне завдання і викликають чи resolve(value), 
  щоб виконати Promise із значенням (value), чи reject(reason), щоб відхилити 
  Promise з вказаною причиною (reason - зазвичай об'єктом помилки).
  Отже new Promise повертає об’єкт promise. В цього об’єкта є дві властивості:
  state і result де state – спочатку має значення "pending" (очікування). А далі
  значення змінюється або на "fulfilled" якщо функція виконавець викликала 
  аргумент resolve, або на "rejected", якщо функція виконавець викликала reject.
  result – спочатку має значення undefined. А далі значення змінюється або на 
  value якщо функція-виконавець викликала resolve(value), або ж на error, якщо
  функція виконавець викликала reject(error).
  Далі метод then() використовується для обробки позитивно виконаного Promise.
  Then() також приймає функцію зворотнього виклику яка аргументом отримує виконане
  (вирішене) значення. Можна об'єднати кілька викликів then() у ланцюжок для 
  виконання послідовних операцій або перетворень над виконаним/вирішеним)
  значенням.
  Далі метод catch() використовують для обробки відхиленого/негативного Promise.
  Сatch() також приймає функцію зворотнього виклику яка аргументом отримує
  причину відхилення (помилку). Зазвичай цей метод використовується в кінці
  ланцюжка Promise для обробки будь-яких помилок, що виникли під час асинхронної
  операції.
  Також, Promise забезпечує додаткові методи як от метод finally(), який дозволяє
  застосувати функцію зворотнього виклику, яка буде викликана незважаючи на те як
  виконався Promise. А такий метод як Promise.all() дозволяє почекати доки усі
  викликані Promise не будуть виконані позитивно.
  Отже, прикладом сутності роботи промісу буде:
  */

function fetchData() {
  return new Promise((resolve, reject) => {
    // симуляція асинхронної операції (запит на сервер)
    setTimeout(() => {
      const data = { id: 42, name: "Modest Rampala" };
      resolve(data); // позитивне вирішення промісу (отримання data по запиту)
      // reject( new Error('Failed to fetch data')); // розкоментувати для відхиленого промісу
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Fetched data :", data);
  })
  .catch((error) => {
    console.log("Error :", error.message);
  })
  .finally(() => {
    console.log("Fetch operation completed");
  });
// ===================================================================

// ======================= Task 02 ===================================
// UA: Створіть проміс, який постійно знаходиться в стані "pending".
//     В конструкторі промису виведіть в консоль повідомлення "Promise
//     is created".
// EN: Create a promise that is constantly in the pending state.
//     In the promise constructor, print the message "Promise is created"
//     to the console.

// solution:
const pendingPromise = new Promise((resolve, reject) => {
  console.log("Promise is created");
});

console.log(pendingPromise); // Promise {<pending>} -> [[Prototype]]:
// Promise, [[PromiseState]]: "pending", [[PromiseResult]]: undefined
// ===================================================================

// ======================= Task 03 ===================================
// UA: Створіть проміс, який покаже сутність його роботи. Всередині тіла
//     створювваного промісу задайте просту математичну дію (типу 2 + 2)
//     та помістіть результат у змінну, назвем її sum. В умові if задайте
//     вирази: якщо проміс вирішується успішно, то передається рядок
//     'Success', а якщо невдача, то передається рядок 'Failed'. Обробіть
//     результати промісу при стані resolve та стані reject та виведіть
//     їх у консоль.
// EN: Create a promise that will show the essence of it's work. Inside
//     the body of the promise to be created, specify a simple mathematical
//     operation (like 2 + 2) and place the result in a variable, let's call
//     it sum. In the if condition, set the expressions: if the promise is
//     resolved successfully, then the string 'Success' is passed, and if
//     there is a failure, then the string 'Failed' is passed. Process
//     the results of the promise in the resolve and reject states and
//     output them to the console.

const promise = new Promise((resolve, reject) => {
  let sum = 2 + 3;

  if (sum == 4) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((message) => {
    console.log("The result of the operation was " + message); // The result of the operation was Success
  })
  .catch((message) => {
    console.log("This operation is " + message); // This operation is Failed
  });
// ===================================================================

// ======================= Task 04 ===================================
// UA: Створіть проміс, який після створення відразу переходить у стан
//     resolve і повертає рядок "Promise Data". Отримайте дані промісу
//     та виведіть їх у консоль.
// EN: Create a promise that, upon creation, immediately transitions
//     to the resolve state and returns the string 'Promise Data'.
//     Get the promise data and print it to the console.

// solution via Promise constructor
const resolvedPromiseOne = new Promise((resolve) => {
  resolve("Promise Data");
});
resolvedPromiseOne.then((data) => {
  console.log(data); // 'Promise Data'
});

// solution via attached handler to settled promise - handler just runs immediately
const resolvedPromiseTwo = new Promise((resolve) => resolve("Promise Data"));
resolvedPromiseTwo.then(console.log); // 'Promise Data'
// ===================================================================

// ======================= Task 05 ===================================
// UA: Створіть проміс, який після створення відразу переходить у стан
//     rejected і повертає рядок 'Promise Error'. Отримайте дані промісу
//     та виведіть їх у консоль.
// EN: Create a promise that, upon creation, immediately transitions to
//     the reject state and returns the string 'Promise Error'. Get the
//     promise data and print it to the console.

// solution via Promise constructor and method .then
const rejectedPromiseTwo = new Promise((resolve, reject) => {
  reject("Promise Error");
});
// Якщо хочемо обробити лише помилку, тоді требв використати null як перший аргумент
rejectedPromiseTwo.then(null, console.log); // 'Promise Error'

// або solution via Promise constructor, method .catch and attached handler
const rejectedPromiseOne = new Promise((resolve, reject) => {
  reject("Promise Error");
});
// виклик .catch(f) – це скорочений варіант .then(null, f)
rejectedPromiseOne.catch(console.log); // 'Promise Error' - catch обробляє об’єкт помилки
/* .catch перехоплює усі види помилок в промісах: будь то виклик reject() або помилка,
кинута в обробнику за допомогою throw. */
// ===================================================================

// ======================= Task 06 ===================================
// UA: Створіть проміс i одразу виведіть повідомлення 'Promise is created'.
//     Алу проміс переходить у стан resolve через 3 скунди (використайте
//     метод setTimeout) та повертає рядок 'Promise Data'. Отримайте дані
//     промісу та виведіть їх у консоль.
// EN: Create a promise, and immediately print the message 'Promise is
//     created'. But this promise enters the resolve state after 3 seconds
//     (use the setTimeout method) and returns the string 'Promise Data'.
//     Get the promise data and output it to the console.

// solution via Promise constructor and method .then
const promiseIn3Sec = new Promise((resolve) => {
  console.log("Promise is created");
  setTimeout(() => {
    resolve("Promise Data");
  }, 3000);
});
console.log(promiseIn3Sec); // 'Promise is created'
promiseIn3Sec.then(console.log); // 'Promise Data'

// solution via .finally to print the message first
const pIn3sec = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Data");
  }, 3000);
});
/* тут використано метод .finally щоб показати спочатку повідомлення
 Але самі результати промісу цей метод передає наступному методу .then.  
 Це тому що finally не призначений для обробки результату промісу, а 
 тільки методи then/catch обробляють об’єкт даних чи помилки. */
pIn3sec.finally(() => console.log("Promise is created"));
pIn3sec.then((data) => console.log(data)); // "Promise Data"
// ===================================================================

// ======================= Task 07 ===================================
// UA: Маємо проміс який викидає помилку через 1 секунду. До промісу доданий
//     метод .catch щоб обробити помилку. Як ви думаєте чи буде виведено
//     повідомлення? Або чи виконається .catch? Поясніть свою відповідь.
// EN: We have a promise that throws an error after 1 second. A .catch method
//     is added to the promise to handle the error. Do you think a message
//     will be printed? Or will the .catch be executed? Explain your answer.

const myONoPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Ооооо ні!");
  }, 1000);
}).catch(console.log);

// answer: ні не буде виведено
/* Ми знаємо, що в промісах як би присутній “прихований try..catch” навколо 
 коду функції. Тому обробляються усі синхронні помилки. Але у цьому прикладі 
 помилка генерується не по ходу виконання коду, а пізніше. Тому проміс не може
 обробити її. Ця помилка не викидається всередині виконавця проміса (функції,
 що передається). Вона викидається пізніше, у зворотному виклику. Через це
 помилка виходить за межі контексту проміса — вона стає неперехопленим винятком
 у циклі подій, а не відхиленням дії самого проміса. 
 Як відомо у разі помилки виконання повинне перейти до найближчого
 обробника помилок. Але в прикладі помилка генерується пізніше і не обробляється.
 Тому помилка як би “обминає” метод .catch. 
 У цьому випадку JavaScript-рушій генерує глобальну помилку. У браузері ми можемо
 впіймати такі помилки, використовуючи подію unhandledrejection і відповідний
 об’єкт event містить інформацію про помилку. Щоб побачити помилку потрібно
 додати обробник подій для unhandledrejection ось так
 */
window.addEventListener("unhandledrejection", function (event) {
  // об’єкт події має дві спеціальні властивості:
  console.log(event.promise); // Якщо не приєднати .catch і є reject тоді глоб обробник
  // спрацює, і можна побачити [object Promise] - це проміс, який згенерував помилку
  console.log(event.reason); // Error: Ооооо ні! - об’єкт помилки, яка не була оброблена
});

// Зазвичай такі помилки невідворотні, тому краще всього – інформувати користувача
// про проблему і, можливо, відправити інформацію про помилку на сервер.
// ===================================================================

// ======================= Task 08 ===================================
// UA: Вбудована функція setTimeout використовує колбек-функції. Створіть
//     альтернативу яка базується на промісах. Функція delay(ms) повинна
//     повертати проміс, який перейде в стан resolved через ms мілісекунд,
//     так щоб ми могли додати до нього метод .then().
// EN: The built-in setTimeout function uses callback functions. Create an
//     alternative that is based on promises. The delay(ms) function should
//     return a promise that will go to the resolved state in ms milliseconds,
//     so that we can add a .then() to it.

// solution via constructor newPromise and setTimeout
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  /* Потрібно зауважити, що при такому підході метод resolve викликається без 
  аргументів. Ми нічого не повертаємо з delay, просто гарантуємо затримку.*/
}
delay(3000).then(() => console.log("виконалось через 3 секунди"));
// ===================================================================

// ======================= Task 09 ===================================
// UA: Створіть два проміси. Перший проміс повертає об'єкт {name: "Anna"}
//     через 2с, а другий проміс повертає об'єкт {age: 16} через 3с.
//     Отримайте результати роботи двох промісів та виведіть їх у консоль.
//     Покажіть як можна вивести окремі значення обєктів у консоль. Як
//     об'єднайти властивості об'єктів? Можете передбачити виведення помилки?
// EN: Create two promises. The first promise returns the object {name: "Anna"}
//     in 2s, and the second promise returns the object {age: 16} in 3s.
//     Get the results of two promises and print them to the console. Show
//     how you can print individual object values ​​to the console. How can you
//     merge object properties? Can you predict the error output?

// solution via Promise constructor, method .then and method Promise.аll
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      name: "Anna",
    });
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      age: 16,
    });
  }, 3000);
});

/*Promise.all приймає ітеровуваний об’єкт (зазвичай масив промісів) і повертає новий
проміс. Новий проміс завершиться тоді, коли всі перераховані проміси завершаться, а 
його результатом стане масив їхніх результатів при цьому порядок елементів нового масиву 
буде такий самий, як був у вихідних промісах. Якщо один проміс завершується з помилкою,
то весь Promise.all негайно завершується з нею ж, повністю забувши про інші проміси у 
списку. Їх результати ігноруються. Це підходить для випадків “все або нічого”, коли нам
потрібні всі успішні результати, щоб продовжити працювати далі.
Отже, якщо будь-який з промісів завершується з помилкою, то проміс, що поверне Promise.all,
негайно завершиться з цією ж помилкою. */
Promise.all([p1, p2])
  .then((res) => {
    console.log(res); // [{name: 'Anna'}, {age: 16}]
    console.log(`User name is ${res[0].name}
      and the user's age is ${res[1].age}`); // User name is Anna and the user's age is 16
    return res; // кожний виклик .then повертає новий проміс, тому ми можемо викликати на ньому наступний .then
    /* Коли обробник повертає значення, воно стає результатом його промісу, 
       тому наступний .then викликається з цим значенням. Повернення промісів
       дозволяє нам будувати ланцюжки асинхронних дій. */
  })
  .then(([o1, o2]) => {
    console.log({ ...o1, ...o2 }); // об'єднані властивостей в одному об'єкті {name: 'Anna', age: 16}
  })
  .catch((err) => console.log(`Unexpected error ${err}`));

// щоб уникнути в першому методі проміжний "return res;" можна оптимізувати ще і так
Promise.all([p1, p2])
  .then(([o1, o2]) => {
    console.log(`User name is ${o1.name} and the user's age is ${o2.age}`);
    console.log({ ...o1, ...o2 });
  })
  .catch((err) => console.log(`Unexpected error ${err}`));

// ===================================================================

// ======================= Task 10 ===================================
// UA: Cтворіть два проміси: один що вирішуються позитивно із даними у
//     виді обєкта, а інший вирішується негативно із помилкою. Використайте
//     відповідний метод щоб вивести обидва результати від промісів.
//     Покажіть як можна вивести дані від вирішеного промісу та як вивести
//     помилку від другого.
// EN: Create two promises: one that resolves successfully with some
//     data, and another that rejects with an error. Use appropriate
//     promise-handling method to handle both outcomes. Show how to extract
//     the successful data from the first promise and how to display
//     the error from the second.

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      name: "Anna",
    });
  }, 2000);
});

// якщо так написати const p4 = new Promise((reject) => { ... }); - то конструктор
// проміс сприйме його як перший аргумент призначений для вирішення промісу, тому
// статус буде "fulfilled" замість "rejected". А отже треба писати так:
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Error");
  }, 3000);
});

/* У методі Promise.all - якщо будь-який з промісів завершується з помилкою, 
  то проміс, що поверне Promise.all, негайно завершиться з цією ж помилкою.
  У нашому випадку другий проміс завершується з помилкою, тому цей метод не
  підходить. Для рішення використаємо метод Promise.allSettled, який просто
  чекає, коли всі проміси завершаться, незалежно від результату. В отриманому
  масиві можливі такі варіанти:
  {status:"fulfilled", value:result} для успішних відповідей,
  {status:"rejected", reason:error} для помилок.
  Тобто, для кожного проміса ми отримуємо його статус і value/error.
  Отже, метод Promise.allSettled можна використовувати, щоб отримати результати всіх
  наданих промісів, навіть якщо деякі з них повертаються з помилкою. В завданні метод 
  Promise.allSettled чекає доки обидва проміси закінчать своє виконання незалежно від
  того чи будуть вирішені чи буде помилка.
*/
Promise.allSettled([p3, p4])
  .then((res) => {
    console.log("All settled results: ", res);
    // [
    //   { status: 'fulfilled', value: { name: 'Anna' } },
    //   { status: 'rejected', reason: 'Promise Error' }
    // ]
    // Отже можимо розділити/відфільтрувати результати по їх статусу та вивести їх в консоль

    const fulfilled = res.filter((o) => o.status === "fulfilled");
    console.log(fulfilled[0].value); // {name: 'Anna'}

    const rejected = res.filter((o) => o.status === "rejected");
    console.log(rejected[0].reason); // "Promise Error"

    return res;
  })
  .catch((err) => console.log(`Unexpected error ${err}`));
// ===================================================================

// ======================= Task 11 ===================================
// UA: Маємо два проміси. Перший проміс повертає дефолтний об'єкт
//     {name: "Unknown"} через 2с, другий проміс повертає об'єкт
//     {name: "Modest"} через 1с. Запустіть обидва ці проміси
//     паралельно та отримайте результат вирішеного промісу, який
//     відпрацює першим.
// EN: We have two promises. The first promise returns a default object
//     { name: "Unknown" } after 2s, the second promise returns an object
//     { name: "Modest" } after 1s. Run both of these promises in
//     parallel and get the result of the positive resolved one that
//     runs first.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Unknown" });
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Modest" });
  }, 1000);
});

/* Якщо використати метод Promice.all, то ми отримаємо уci виконані
   проміси. Більше того, порядок елементів масиву такий самий, як у
   вихідних промісах. Навіть якщо для завершення першого проміса потрібно
   буде найбільше часу, його результат все одно буде першим в масиві.
   У завданні потрібно вивести тільки перший успішно виконаний проміс.
   Цей метод для вирішення цього завдання не підійде.
*/
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // [{ name: 'Unknown' }, {name: 'Modest'}]
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// Solution via Promice.race method:
/* Promice.race чекає лише на перший проміс, який закінчив “гонку” (як
  успішним завершенням, так і помилкою. Головне щоб завершився першим,
  а чим завершився – без різниці) та отримує його результат (або помилку).
  Всі інші проміси після цього ігноруються, бо “гонка” вже завершилась.
  Серед вихідних промісів ми маємо тільки вирішені проміси і цей метод
  виведе перший завершиний проміс, що відповідає умовам завдання. Але
  таке рішення є ненадійне, бо якщо буде наприклад відхилений проміс 
  типу як promise3 (в наступному завданні), цей метод виведе результатом
  його, а в завданні потрібно вивести перший вирішений проміс.
*/
Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
    /* {name: 'Modest'} - Найшвидший проміс, тому він і став результатом.
      Після того, як перший завершений проміс “перемагає”, всі подальші
      результати/помилки ігноруються. */
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// Solution via Promice.any method:
/* Promice.any чекає лише на перший успішно завершений проміс і отримує
  його результат. Якщо ж всі надані проміси завершуються з помилкою, то
  повертається проміс, що завершується з помилкою за допомогою AggregateError
  – спеціального об’єкта помилки, який зберігає всі помилки промісів у своїй 
  властивості errors.
*/
Promise.any([promise1, promise2])
  .then((result) => {
    console.log(result); // {name: 'Modest'} - перший успішно завершений проміс
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
// ===================================================================

// ======================= Task 12 ===================================
// UA: Виходячи з попереднього завдання, до двох промісів додали ще два.
//     Один проміс відхиляє об'єкт {name: "Javed"}, інший проміс відхиляє
//     дефолтний об'єкт {name: "Unknown rejected"} через 500 ms. Запустіть
//     ці проміси в комбінації з двома першими щоб отримайти:
//     а) результат першого виконаного промісу;
//     b) результат першого відхиленого промісу;
//     c) результат другого відхиленого промісу;
// EN: Based on the previous task, two more promises were added to the two
//     promises. One promise rejects the object {name: "Javed"}, the other
//     promise rejects the default object {name: "Unknown rejected"} after
//     500 ms. Run these promises in combination with the first two to get:
//     a) the result of the first promise executed;
//     b) the result of the first rejected promise;
//     c) the result of the second rejected promise;

const promise3 = new Promise((resolve, reject) => {
  reject({ name: "Javed" });
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ name: "Unknown rejected" });
  }, 500);
});

// solution for subtask a:
Promise.any([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log(result); // {name: 'Modest'} - другий успішно завершений проміс але найшвидший
    /* promise3 тут був першим, але був відхилений. Потім завершився promise4 але він
   також був відхиленим, тож результатом став promise1, який був вирішений найшвидше з двох
   (promise1 та promise2) вирішених промісів. Після того, як перший завершений проміс 
   "перемагає", усі подальші результати ігноруються.*/
  })
  // відпрацює тільки тоді, коли усі проміси при використанні цим методом (Promise.any) будуть відхилені
  .catch((err) => console.log(`All promises rejected: ${err}`));

// solution for subtask b:
Promise.race([promise1, promise2, promise3, promise4])
  .then((result) => {
    console.log("First settled and fulfilled ", result);
  })
  .catch((err) => console.log("First settled but rejected :", err)); // First settled but rejected : {name: 'Javed'}
/*Promice.race чекає лише на перший проміс, який закінчив “гонку” (як
  успішним завершенням, так і помилкою. Тут найпершим завершиним хоч і
  відхиленим промісом є promise3, тому і він буде результатом. */

// solution for subtask с:
Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((res) => {
    console.log("All settled results: ", res);
    // [
    //   { status: "fulfilled", value: { name: "Unknown" } },
    //   { status: "fulfilled", value: { name: "Modest" } },
    //   { status: "rejected", reason: { name: "Javed" } },
    //   { status: "rejected", reason: { name: "Unknown rejected" } }
    // ] - тобто ми маємо результат роботи усіх промісів у масиві

    // var1 - взяти значення по індексу:
    const rejected = res.filter((o) => o.status === "rejected"); // відфільтрували тільки відхилені проміси
    console.log(rejected[1].reason); // {name: 'Unknown rejected'}
    // взяв значення другого rejected[1].reason відхиленого промісу бо він був відхиленим другим
    // var2 - взяти значення по назві з умовою при використанні оператором &&:
    const rejectedUnknown = res.filter(
      (r) => r.status === "rejected" && r.reason.name === "Unknown rejected",
    ); // відфільтрували тільки відхилені проміси і тільки з елем масиву із значенням "Unknown rejected"
    console.log(rejectedUnknown[0].reason); // {name: 'Unknown rejected'}
  })
  .catch((err) => console.log(`Error: ${err}`));
// ===================================================================
