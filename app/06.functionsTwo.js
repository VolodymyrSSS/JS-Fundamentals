console.log('Topic: Functions - second Part');

// ============================Task 01================================================
// UA: В нас є функція greet(), яка повертає дефолтне значення у разі, якщо
//     не було отримано аргумент.
//     Перепишіть її в іншому варіанті використавши оператор АБО (||)?
// EN: We have a greet() function that returns a default value if no argument 
//     is received. Rewrite it in another way using the OR operator (||)?

// function greet(name) {
//   let displayName;
//   if (name === null || name === undefined || name === "") {
//     displayName = "Guest";
//   } else {
//     displayName = name;
//   }
//   console.log(`Hello, ${displayName}!`);
// }
// greet("Alice"); // Output: Hello, Alice!
// greet(null);    // Output: Hello, Guest!

// solution via || operator
/*We can use the logical OR operator to assign a default value if the first operand 
is falsy (null, undefined, 0, "", false).*/

function greet(name) {
   let displayName = name || "Guest";
   console.log(`Hello, ${displayName}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet(null);    // Output: Hello, Guest!
greet("");      // Output: Hello, Guest!

// ===================================================================================

// ============================Task 02================================================
// UA: Замініть багатослівні оператори if/else для простих умов одним рядком.
// EN: Replace verbose if/else statements for simple conditions with a single line.

let age = 18;
// let canVote;
// if (age >= 18) {
//   canVote = "Yes";
// } else {
//   canVote = "No";
// }

// solution via ternary operator
let canVote = (age >= 18) ? "Yes" : "No";
console.log( "You can vote : " + canVote); // You can vote : Yes
// ===================================================================================

// ============================Task 03================================================
// UA: Замініть умову для виконання з оператором if одним рядком.
// EN: Replace the condition for execution with an if statement in one line.

let isAdmin = true;
// if (isAdmin) {
//   console.log("Admin privileges granted.");
// }

// solution via && operator
/*We can use the logical AND operator to execute code only if a condition is true.*/
isAdmin && console.log("Admin privileges granted."); // Output: Admin privileges granted.

let isGuest = false;
isGuest && console.log("Guest access."); // No output
// ===================================================================================

// ============================Task 04================================================
// UA: У нас є функція doubled. Можете більш лаконічним способом переписати 
// функціональний вираз?
// EN: We have the "doubled" function. Can you rewrite the function expression 
// in a more concise way?

const numbers = [1, 2, 3];
// const doubled = numbers.map(function(num) {
//   return num * 2;
// });
// console.log(doubled); // Output: [2, 4, 6]

// solution via arrow function
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
// ===================================================================================

// ============================Task 05================================================
// UA: Вам задано два масиви, arr1 та arr2. Напишіть функцію findCommonElements, яка 
//     знаходить усі унікальні спільні елементи між двома масивами та повертає їх як 
//     масив. Ви повинні оптимізувати своє рішення, щоб уникнути вкладених циклів (грубої 
//     сили). Мета — підвищити ефективність.
// EN: You are given two arrays, arr1 and arr2. Write a function findCommonElements that 
//     finds all the unique common elements between the two arrays and returns them as 
//     an array. You must optimize your solution to avoid nested loops (brute force). 
//     The goal is to improve efficiency.

const array1 = [1, 2, 2, 3, 4, 4, 5];
const array2 = [3, 4, 4, 5, 6, 7];

// function findCommonElementsarray1, array2) {
//    const commonElements = [];

//    for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//          /* indexOf is checking whether the current element from arr1 already exists in 
//          the commonElements array (to avoid adding duplicate elements */
//          if (arr1[i] === arr2[j] && commonElements.indexOf(arr1[i]) === -1) {
//             commonElements.push(arr1[i]);
//          }
//       }
//    }
//    return commonElements;
// }
// console.log(findCommonElements(arr1, arr2)); // Output: [3, 4, 5]

// solution via Set
/* Колекція Set забезпечить те, що усі елементи масиву будуть унікальними та 
забезпечить швидкість і автоматизацію усіх операцій. Тому метод new Set(arr)
конвертує масив у колекцію унікальних елементів Set. Далі ми можемо конвертувати
назад унікальну колекцію в масив методом [...set], щоб можна було ітеретувати 
по його елементам чи використати методи для масивів.
 */
const arr1 = ['apple', 'banana', 'cherry', 'apple'];
const arr2 = ['cherry', 'banana', 'grape', 'cherry', 'grape'];
function findCommonElements(arr1, arr2) {
   const set1 = new Set(arr1); // Convert arr1 to a Set for fast lookups and get uniques collection
   const set2 = new Set(arr2); // Convert arr2 to a Set for fast lookups and get uniques collection

   /* пошук спільних елементів двох масивів Sets. Так ми перевіряємо, що кожен
      елемент колекції set1 існує(є) в колекції set2. Якщо це true, то присвоюється
      такий елемент в масив спільних елементів.
   */ 
   const commonElements = [...set1].filter(element => set2.has(element));

   return commonElements;
}
console.log(findCommonElements(array1, array2)); // [3, 4, 5]
console.log(findCommonElements(arr1, arr2)); // ['banana', 'cherry']
// ===================================================================================

// ============================Task 06================================================
// UA: Оптимізація маніпуляцій DOM. Ви створюєте веб-сторінку, яка динамічно відображає 
//     список фруктів у списку (<ul>). Нижче наведено фрагмент коду, який виконує це 
//     завдання. Хоча цей код працює належним чином для невеликих наборів даних, він має 
//     проблеми з продуктивністю під час обробки великої кількості елементів (наприклад, 
//     понад 10 000 фруктів). Рендеринг стає неефективним, що призводить до затримки 
//     роботи користувача.
// EN: Optimize DOM Manipulation. You’re building a webpage that dynamically displays 
//     a list of fruits in an unordered list (<ul>). Below is the code snippet that 
//     accomplishes the task. While this code works properly for small datasets, it has 
//     a performance issue when processing a large number of items (e.g., 10,000+ fruits). 
//     Rendering becomes inefficient, leading to a laggy user experience.

// const fruits = ['apple', 'orange', 'banana', 'mango', 'maraqua', 'grapes'];
// const ul = document.querySelector('#fruit-list');
// items.forEach((fruit) => {
//    const li = document.createElement('li');
//    li.textContext = fruit;
//    ul.appendChild(li);
// });

// solution via Document Fragment
/* In this snippet, we're appending a <li> to the <ul> directly in each iteration of 
the loop. This leads to multiple unnecessary reflows (when the browser recalculates 
the layout of the page) and repaints (when the visual appearance of elements is updated)
in the browser. It means every call to ul.appendChild(li) triggers: 1) DOM modification;
2) A recalculation of layout (reflow); 3) A repaint in the browser. If the list has 
1000+ items, the browser will perform these expensive DOM operations 1000 times in a row, 
one for each <li> element. This costs a lot of CPU, making the page rendering slow.
To solve this problem, we can use a Document Fragment.
A DocumentFragment is a lightweight, in-memory container for DOM nodes. It allows you 
to build a collection of elements without rendering them on the DOM immediately. You can 
append the DocumentFragment to the actual DOM only once, which minimizes reflows/repaints.
*/
// const fruits = ['apple', 'orange', 'banana', 'mango', 'maraqua', 'grapes'];
// const ul = document.querySelector('#fruit-list');

// const fragment = document.createDocumentFragment(); // Step 1: Create a Document Fragment

// fruits.forEach((fruit) => {
//    const li = document.createElement('li'); // Step 2: Create the <li> element
//    li.textContent = fruit;
//    fragment.appendChild(li); // Step 3: Append <li> to the Fragment
// });

// ul.appendChild(fragment); // Step 4: Append the entire Fragment to the <ul>

/* Modern Alternative (Using Template Literals and innerHTML):
   If you prefer a more concise solution and are not concerned about potential 
   security risks (e.g., XSS), you can use innerHTML to batch update the DOM instead:

   const fruits = ['apple', 'orange', 'banana', 'mango', 'maraqua', 'grapes'];
   const ul = document.querySelector('#fruit-list');

   ul.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join('');
*/
// ===================================================================================

// ============================Task 07================================================
// UA: Залишкові параметри: збір Arguments. В нас є функція sumAll яка збирає невизначену 
//     кількість аргументів у масив та підсумовує їх. Потрібно оптимізувати рішення з 
//     використанням синтаксису ES6. 
// EN: Rest Parameters: Collect Arguments. We have a function sumAll that collects an 
//     indefinite number of arguments into an array and sums them. We need to optimize 
//     the solution using ES6 syntax.

// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// sumAll(1, 2, 3, 4); // Output: 10

// solution via rest parameters and array method reduce
/*We can use for better redability and ES6 syntax for..of loop like
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num; // Add each number to the total
  }
  return total;
} but let's take rest parameters and reduce method which
 are more efficient and concise */
function sumAll(...numbers) {
   return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
/*If you want to add a default argument so that the function works even if no 
arguments are passed like:
function sumAll(...numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll()); // Output: 0
console.log(sumAll(10, 20, 30)); // Output: 60*/
// ===================================================================================

// ============================Task 08================================================
// UA: Вкажіть значення за замовчуванням для параметрів функції, якщо вони не визначені 
//     або не надані.
// EN: Provide default values for function parameters if they are undefined or not 
//     provided.

// function greet(name, greeting) {
//   name = name || "Guest";
//   greeting = greeting || "Hello";
//   console.log(`${greeting}, ${name}!`);
// }
// greet();       // Output: Hello, Guest!
// greet("Eve");  // Output: Hello, Eve!

// solution via assigning default values in the parameters
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}
console.log(greet());             // Output: Hello, Guest!
console.log(greet("Frank"));      // Output: Hello, Frank!
console.log(greet("Grace", "Hi")); // Output: Hi, Grace!
// ===================================================================================
