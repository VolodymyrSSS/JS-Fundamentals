console.log("Topic: Functions - Part 2");

// 😒============================== 01 ===================================
/* Дайте коротку характеристику що таке "чиста" функція. Крім того, надано
   дві "нечисті" функції. Зробіть їх рефакторинг, щоб вони стали  "чисті".
   Отже, вам потрібно написати код JavaScript для рефакторингу двох "нечистих"
   функцій у "чисті" функції. Для цього перша функція приймає два аргументи:
   total та amount, а друга функція повинна приймати один аргумент — age.
*/
let total1 = 0;
// Нечиста функція addToTotal1
function addToTotal1(amount) {
  total1 += amount;
  return total1;
}

let userAge1 = 24;
// Impure function celebrateBirthday1
function celebrateBirthday1() {
  userAge1 += 1;
  return userAge1;
}
// Solution:
/* Чисті функції: У JavaScript чистою функцією вважається така, що за
   однакових вхідних даних завжди повертає однаковий результат і не має
   жодних помітних побічних ефектів. Чисті функції не змінюють зовнішній
   стан і не взаємодіють із зовнішніми змінними. Чисті функції особливо
   корисні для:
   Перетворення даних: Ідеально підходять для операцій відображення (mapping),
   фільтрації та згортання (reducing) даних.
   Управління станом: Забезпечують незмінність стану (immutability), що
   особливо важливо у таких фреймворках, як Redux.
    Синтаксис чистої функції:
    function add(a, b) {
      return a + b;
    } - Наведена вище функція `add` є чистою, оскільки вона завжди видає
    однаковий результат для одних і тих самих вхідних даних і не впливає
    на зовнішній стан. А от покажемо синтаксис нечистої функції:
    let counter = 0;
    function increment() {
      return counter++;
    } Ця функція є нечистою, оскільки вона змінює зовнішні змінні або стан,
     спричиняючи побічні ефекти.
*/
// Рефакторинг нечистої функції у чисту де чиста функція (створює нове значення total)
function addToTotal2(total, amount) {
  return total + amount;
} // Тут функція гарантує повернення нового значення без зміни початкового.
console.log(addToTotal2(41, 1)); // 42
// Рефакторінг нечистої функції у чисту
function nextBirthday2(age) {
  return age + 1;
  // age += 1 - так не робити бо одразу напряму вхідні дані у чистих не змінюють
}
console.log(nextBirthday2(41)); // 42

// 😒============================== 02 ===================================
/* Напишіть функцію analyzeBudget, яка: Приймає три аргументи: список цін,
   список назв товарів та  максимальний бюджет на один товар. Приклад:
   prices = [10, 20, 5, 15]
   items = ["Ноутбук", "Ручка", "Гумка", "Сумка"]
   та на один товар budget = 10, a результат має бути таким:
   Доступні товари: "Ноутбук", "Гумка"
   Загальний необхідний бюджет: 15
   Товари поза бюджетом: 2
*/
// Solution via array metgods:
function analyzeBudget(prices, items, budget) {
  let affordableItems = [];
  let sumAffordables = 0;
  let outOfBudgetItems = 0;

  for (let i = 0; i < items.length; i++) {
    // Спочатку очистимо найменування: обріжемо лишній пробіли та видалимо лапки
    let cleanItem = items[i].trim();
    if (cleanItem.startsWith('"') && cleanItem.endsWith('"')) {
      cleanItem = cleanItem.slice(1, -1);
    }
    // або можна і так let cleanItem = items[i].trim().replace(/^"|"$/g, "");

    if (prices[i] <= budget) {
      affordableItems.push(cleanItem);
      sumAffordables += prices[i];
    } else {
      outOfBudgetItems++;
    }
  }

  //console.log(`Affordable items:  ${affordableItems.map(item => `"${item}"`).join(", ")}`);
  //console.log(`Affordable items: ${affordableItems.map(item => '"' + item + '"').join(", ")}`);
  console.log(`Affordable items: "${affordableItems.join('", "')}"`);
  console.log(`Total budget needed: ${sumAffordables}`);
  console.log(`Items out of budget: ${outOfBudgetItems}`);
}
let prices = [10, 20, 5, 15];
let items = ["Notebook", " Pen", "Eraser", " Bag "];
let budget = 10;
analyzeBudget(prices, items, budget);

// 😒============================== 03 ===================================
/* Створіть функцію greetAll, яка приймає масив імен і повертає один рядок.
    З кожним ім'ям функція повертає рядок у форматі Hello, <Ім'я>!, які
    розділені символами нового рядка. Використовуйте шаблонні літерали для
    рядків привітання.
*/

// solution via .map() and template literals:
function greetAll1(names) {
  let greetings = names.map((name) => `Hello, ${name}!`);
  return greetings.join("\n");
}

console.log(greetAll1(["Alice", "Bob", "Charlie"]));
// Hello, Alice! потім на новому рядку Hello, Bob! і на новому - Hello, Charlie!

// Solution via for-loop аnd concatenation:
function greetAll2(names) {
  let result = "";
  for (let i = 0; i < names.length; i++) {
    // створюємо рядок привітання у потрібному форматі
    result += `Hello, ${names[i]}!`;
    // перенесення на новий рядок привітання крім останнього
    if (i < names.length - 1) {
      result += "\n";
    }
  }
  return result;
}
console.log(greetAll2(["", "   ", "Bob"])); // На виході отримаємо:
//                                          // Hello, !
//                                          // Hello,    !
//                                          // Hello, Bob!

// 😒============================== 04 ===================================
/* Створіть функцію alternateCase, яка приймає рядок літер на вхід і
   повертає новий рядок, де регістри чергуються. Перший символ має бути
   великим, другий — малим, третій — великим, i т. д. Якщо символи не є
   літерами то їх регістр не змінюється.
*/

// Solution via for-loop and strings concatenation
function alternateCase1(str) {
  let alternated = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // для випадку коли символи є букваи
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (i % 2 === 0) {
        alternated += char.toUpperCase(); // символи з індексами 0, 2, 4, 6... у великий
      } else {
        alternated += char.toLowerCase(); // символи з індексами 1, 3, 5, 7... у малий
      }
    } else {
      alternated += char; // для випадку коли символи є небукви
    }
  }

  return alternated;
}
console.log(alternateCase1("Hello World")); // HeLlO WoRlD
console.log(alternateCase1("12345")); // 12345
console.log(alternateCase1("H")); // H

// Solution via split(), map() and join():
function alternateCase2(str) {
  return str
    .split("") // переводимо в масив символів
    .map((char, i) => {
      // коли символи є букви
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }
      return char; // небукви залишаються як є
    })
    .join(""); // конвертуємо назад в рядок
}
console.log(alternateCase2("development")); // DeVeLoPmEnT
console.log(alternateCase2("b2Ac99")); // B2Ac99
console.log(alternateCase2("Hi")); // Hi

// 😒============================== 05 ===================================
/* Задано два масиви, arr1 та arr2. Напишіть функцію findCommonElements,
   яка знаходить усі унікальні спільні елементи між двома масивами та
   повертає їх як масив. Потрібно оптимізувати рішення так, щоб уникнути
   вкладених циклів (грубої сили). Мета — підвищити ефективність.
*/
const array1 = [1, 2, 2, 3, 4, 4, 5];
const array2 = [3, 4, 9, 4, 8, 5, 6, 7];

function findCommonElements1(arr1, arr2) {
  const commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      /* метод indexOf перевіряє чи поточний елемент з arr1 вже існує в
         масиві commonElements щоб уникнути додавання дублікатів */
      if (arr1[i] === arr2[j] && commonElements.indexOf(arr1[i]) === -1) {
        commonElements.push(arr1[i]);
      }
    }
  }

  return commonElements;
}
console.log(findCommonElements1(array1, array2)); // Output: [3, 4, 5]

// Solution via Set?
/* Колекція Set забезпечить те, що усі елементи масиву будуть унікальними та 
забезпечить швидкість і автоматизацію усіх операцій. Тому метод new Set(arr)
конвертує масив у колекцію унікальних елементів Set. Далі ми можемо конвертувати
назад унікальну колекцію в масив методом [...set], щоб можна було ітеретувати 
по його елементам чи використати методи для масивів. */
const arr1 = ["apple", "banana", "cherry", "apple", "kiwi"];
const arr2 = ["cherry", "banana", "grape", "papaya", "cherry", "grape"];

function findCommonElements2(arr1, arr2) {
  const set1 = new Set(arr1); // конвертуєм arr1 в колекцію унікальних елементів
  const set2 = new Set(arr2); // конвертуєм arr2 в колекцію унікальних елементів

  /* Пошук спільних елементів двох колекцій Sets. Ми фільтруємо кожен елемент
     колекції set1, яку конвертуємо у масив і зараховуємо як спільний елемент.
     Тобто до масиву використовуєм метод .filter() a до колекції використовуємо
     метод .has() і якщо елемент в масиві існує(є) в колекції set2 то елемент
     масиву зараховується до масиву спільних елементів. */

  const commonElements = [...set1].filter((element) => set2.has(element));

  return commonElements;
}
console.log(findCommonElements2(arr1, arr2)); // ['banana', 'cherry']

// 😒============================== 06 ===================================
/* Створіть функцію stringWeaver, яка приймає на вхід два рядки str1 
   та str2 і повертає новий рядок, де:
   1. Ігнорує числа (ніби їх не існує) - тобто видаляє всі числа з
     обох рядків;
   2. Об'єднує очищені рядки, а саме поміщає всі символи з першого
     очищеного рядка, а потім усі символи з другого очищеного рядка
     у визначений об'єднаний рядок;
   3. Перетворює всі голосні літери на верхній регістр у кінцевому
     об'єднаному рядку;
   4. Повертає кінцевий рядок.
*/
// Solution via for..of loops:
function stringWeaver1(str1, str2) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // видаляємо числа з str1
  let cleaned1 = "";
  for (let ch of str1) {
    if (!numbers.includes(ch)) {
      cleaned1 += ch;
    }
  }

  // видаляємо числа з str2
  let cleaned2 = "";
  for (let ch of str2) {
    if (!numbers.includes(ch)) {
      cleaned2 += ch;
    }
  }

  // комбінуємо в один рядок очищені рядки
  let combined = cleaned1 + cleaned2;

  // конвертуємо голосні букви у верхній регістр
  let result = "";
  for (let ch of combined) {
    if (vowels.includes(ch)) {
      result += ch.toUpperCase();
    } else {
      result += ch;
    }
  }
  return result;
}
console.log(stringWeaver1("web2024", "dev2025")); // "wEbdEv"
console.log(stringWeaver1("123hello", "456world")); // "hEllOwOrld"

// Solution via .split(), .filter(), .map(), and .join():
function stringWeaver2(str1, str2) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Step 1: видаляємо числа з обох рядків
  const cleaned1 = str1.split("").filter((ch) => !numbers.includes(ch));
  const cleaned2 = str2.split("").filter((ch) => !numbers.includes(ch));

  // сомбінуємо в єдиний масив
  const combined = cleaned1.concat(cleaned2);

  // конвертуємо голосні букви у верхній регістр
  const result = combined.map((ch) =>
    vowels.includes(ch) ? ch.toUpperCase() : ch,
  );

  return result.join(""); // конвертуємо назад у рядок
}
console.log(stringWeaver2("a1b2c3", "u9v0")); // "AbcUv"
console.log(stringWeaver2("7buffalo", "L8io253ness")); // "bUffAlOLIOnEss"

// 😒============================== 07 ===================================
/* Створіть функцію getColumn, яка приймає три аргументи:двовимірний масив
   матриці, ціле число numberOfRows та ціле число colIndex. Функція повинна
   повертати масив, що містить усі елементи у вказаному стовпці colIndex.
*/
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Solution via for-loop:
function getColumn1(matrix, numberOfRows, colIndex) {
  let result = [];
  for (let i = 0; i < numberOfRows; i++) {
    result.push(matrix[i][colIndex]);
  }
  return result;
}
console.log(getColumn1(matrix, 3, 0)); // [1, 4, 7]
console.log(getColumn1(matrix, 3, 1)); // [2, 5, 8]

// Solution via .slice() and .map():
function getColumn2(matrix, numberOfRows, colIndex) {
  return matrix
    .slice(0, numberOfRows) // взяти тільки ці рядки для роботи
    .map((row) => row[colIndex]); // взяти елемент по його індексу (в colIndex) з кожного рядка
}
console.log(getColumn2(matrix, 3, 0)); // [1, 4, 7]
console.log(getColumn2(matrix, 3, 2)); // [3, 6, 9]

// 😒============================== 08 ===================================
/* Створіть функцію countOccurrences, яка приймає двовимірний масив
   матриці рядків та рядок target. Вона має повертати, скільки разів
   target з'являється у всіх рядках та стовпцях.
*/
let matrix2 = [
  ["apple", "banana", "apple"],
  ["pear", "apple", "grape"],
  ["apple", "pear", "apple"],
];

// Solution via nested for-loops:
function countOccurrences1(matrix, target) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        count++;
      }
    }
  }
  return count;
}
console.log(countOccurrences1(matrix2, "apple")); // 5
console.log(countOccurrences1(matrix2, "banana")); // 1
console.log(countOccurrences1(matrix2, "pear")); // 2

// Solution via flattens the 2D array into 1D, filters for matches, and counts them
function countOccurrences2(matrix, target) {
  return matrix.flat().filter((el) => el === target).length;
}
// working check
let matrix3 = [
  ["a", "b", "a"],
  ["c", "a", "f"],
  ["a", "e", "f"],
];
console.log(countOccurrences2(matrix3, "a")); // 4

// Solution via two .reduce():
/* Цей варіант не використовує циклів, а лише здійснює скорочення.
   Зовнішня функція .reduce() проходить по кожному рядку. А внутрішня
   функція .reduce() підраховує збіги в цьому рядку. І врешті обидві
   функції підсумовуються в один підсумок. */
function countOccurrences3(matrix, target) {
  return matrix.reduce((rowAcc, row) => {
    return (
      rowAcc +
      row.reduce((colAcc, el) => {
        return colAcc + (el === target ? 1 : 0);
      }, 0)
    );
  }, 0);
}
console.log(countOccurrences3(matrix3, "f")); // 2
console.log(countOccurrences3(matrix3, "a")); // 4

// 😒============================== 09 ===================================
/* Створіть функцію mirrorRows, яка приймає двовимірний масив матриці як
   аргумент і повертає новий двовимірний масив, у якому кожен рядок
   перевернутий.
*/
let matrix4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Solution via spred operator and .reverse():
function mirrorRows1(matrix) {
  let reversed = [];
  for (let i = 0; i < matrix.length; i++) {
    reversed.push([...matrix[i]].reverse()); // спочатку копіюємо ряд і вже потім перевертаємо
  }
  return reversed;
}
console.log(mirrorRows1(matrix4)); // [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]

// Solution via spred operator and .map():
function mirrorRows2(matrix) {
  return matrix.map((row) => [...row].reverse());
}
console.log(mirrorRows2(matrix4)); // [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]

// 😒============================== 10 ===================================
/* Створіть функцію з назвою combineMatrices, яка приймає три аргументи:
   matrixA, matrixB та рядок op, який може бути як "+", так і "-". Для
   кожної комірки, якщо op дорівнює "+", результат має бути
   matrixA[r][c] + matrixB[r][c]. В іншому випадку, якщо op дорівнює "-",
   результат має бути matrixA[r][c] - matrixB[r][c].
*/
let A = [
  [1, 2, 3],
  [4, 5, 6],
];
let B = [
  [7, 8, 9],
  [10, 11, 12],
];

// Solution via nested for-loops and .push():
/* З теорії відомо, щоб додати або відняти дві матриці, вони повинні
   мати однакову розмірність (тобто однакову кількість рядків і стовпців).
   Операція виконується поелементно, тобто ви додаєте або віднімаєте
   відповідні елементи в кожній матриці. Але ми не можемо просто додати
   чи відняти цілу матрицю, бо в JavaScript ця операція просто перетворює 
   матриці на рядки і конкатенує їх (тобто не здійснює матиматичну операцію)
   або отримаємо NaN. Потрібно опрацювати комірку за коміркою окремо.
   Отже, для вирішення завдання потрібно пройтися циклом for по рядках
   і вкладеним циклом for по стовпцях і далі застосувати операцію до
   кожної комірки окремо, типу:
*/
function combineMatrices1(matrixA, matrixB, op) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      if (op === "+") {
        row.push(matrixA[i][j] + matrixB[i][j]);
      } else if (op === "-") {
        row.push(matrixA[i][j] - matrixB[i][j]);
      }
    }
    result.push(row);
  }
  return result;
}
console.log(combineMatrices1(A, B, "+")); // [ [8, 10, 12], [14, 16, 18] ]
console.log(combineMatrices1(A, B, "-")); // [ [-6, -6, -6], [-6, -6, -6] ]

// Solution via nested .map()
function combineMatrices2(matrixA, matrixB, op) {
  return matrixA.map((row, i) =>
    row.map((val, j) =>
      op === "+" ? val + matrixB[i][j] : val - matrixB[i][j],
    ),
  );
}
console.log(combineMatrices2(A, B, "+")); // [ [8, 10, 12], [14, 16, 18] ]
console.log(combineMatrices2(A, B, "-")); // [ [-6, -6, -6], [-6, -6, -6] ]

// 😒============================== 11 ===================================
/* Створіть функцію з назвою sumJagged, яка отримує "зубчатий" масив
   із чисел і повертає загальну суму всіх елементів у кожному рядку,
   незалежно від довжини рядка.
*/
let jagged = [
  [1, 2, 3],
  [4, -5, 42.2, 11],
  [6],
  [7, 8, -9, 10, 12, 77.3],
  [],
  [23.8, 44.52],
];

// Solution via nested for-loops:
/* Відомо, що зубчастий масив — це просто масив масивів різної довжини. Або
   так - це 2D масив де кожен ряд має різну довжину. Для вирішення задачі
   потрібно лише два рівня ітерації: рядки та елементи.
*/
function sumJagged1(jaggedArray) {
  let sum = 0;

  for (let i = 0; i < jaggedArray.length; i++) {
    for (let j = 0; j < jaggedArray[i].length; j++) {
      sum += jaggedArray[i][j];
    }
  }

  return sum;
}
console.log(sumJagged1(jagged)); // 237.82000000000002

// Solution via .reduce():
function sumJagged2(jaggedArray) {
  return jaggedArray.reduce(
    (rowAcc, row) => rowAcc + row.reduce((colAcc, val) => colAcc + val, 0),
    0,
  );
}
console.log(sumJagged2(jagged)); // 237.82

// Solution via .flat() and .reduce():
function sumJagged3(jaggedArray) {
  return jaggedArray.flat().reduce((acc, val) => acc + val, 0);
}
console.log(sumJagged3(jagged)); // 237.82000000000002

// 😒============================== 12 ===================================
/* Створіть функцію printPatterns, яка приймає квадратний двовимірний 
   масив цілих чисел (матрицю) на вхід та друкує такі шаблони:
   1. Головна діагональ: Вивести всі елементи, де індекс рядка дорівнює
    індексу стовпця.
   2. Антидіагональ: Вивести всі елементи, де сума індексів рядка та стовпця
    дорівнює розміру матриці мінус 1.
   3. Межі: Вивести елементи верхньої, нижньої, лівої та правої меж матриці.
*/
let matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Solution via for-loop:
function printPatterns(matrix) {
  let mainDiagonal = [];
  /* Для головної діагоналі не потрібено використовувати якісь
    вкладені цикли. Діагональ — це просто всі елементи, де 
    рядок === стовпець. Тож можна використати лише один цикл:
  */
  for (let i = 0; i < matrix.length; i++) {
    mainDiagonal.push(matrix[i][i]);
  }
  console.log("Main Diagonal :", mainDiagonal.join(" ")); // 1, 6, 11, 16

  let antiDiagonal = [];
  /* - Антидіагональна умова: [рядок] + [стовпець = розмірМатриці - 1].
    Для кожного [рядка] i індекс стовпця має [розмірМатриці - 1 - i].
  - Приклад з матрицею 4×4:
  - Рядок 0 → стовпець = 3 → матриця[0][3]
  - Рядок 1 → стовпець = 2 → матриця[1][2]
  - Рядок 2 → стовпець = 1 → матриця[2][1]
  - Рядок 3 → стовпець = 0 → матриця[3][0]
  */
  let size = matrix.length; // визначаєм розмір матриці

  for (let i = 0; i < matrix.length; i++) {
    antiDiagonal.push(matrix[i][size - 1 - i]);
  }
  console.log("Anti-Diagonal:", antiDiagonal.join(" ")); // 4, 7, 10, 13

  let topBorder = [];
  /* Для того щоб брати елементи по кордонам матриці, потрібно зберігати
    один індекс постійним (0 або розмірМатриці - 1) в той час як ітерувати
    по іншому. Так от щоб отримати доступ до елементів верхнього ряду матриці
    потрібно проітеруватись по елементам стовпцях, а індекс рядка тримати
    фіксованим на 0.
  */
  let i = 0;
  for (let j = 0; j < matrix.length; j++) {
    topBorder.push(matrix[i][j]);
  }
  console.log("Top Border:", topBorder.join(" ")); // 1, 2, 3, 4

  let bottomBorder = [];
  let lastRow = matrix.length - 1; // останній рядок
  for (let j = 0; j < matrix.length; j++) {
    bottomBorder.push(matrix[lastRow][j]);
  }
  console.log("Bottom Border:", bottomBorder.join(" ")); // 13, 14, 15, 16

  let leftBorder = [];
  let j = 0; // ліва колонка
  for (let i = 0; i < matrix.length; i++) {
    leftBorder.push(matrix[i][j]);
  }
  console.log("Left Border:", leftBorder.join(" ")); // 1, 5, 9, 13

  let rightBorder = [];
  let lastCol = matrix.length - 1; // індекс останнього елем рядка - остання колонка)
  for (let i = 0; i < matrix.length; i++) {
    rightBorder.push(matrix[i][lastCol]);
  }
  console.log("Right Border:", rightBorder.join(" ")); // 4, 8, 12, 16,
}

printPatterns(matrix5); // викликаємо функцію з визначеною матрицею

// 😒============================== 13 ===================================
// UA: Створіть функцію stackMatrices, яка отримує масив двовимірних масивів
//     matrixList (який по суті є тривимірним масивом). Усі ці масиви мають
//     однакову кількість стовпців. Функція повинна об'єднати їх вертикально
//     в один двовимірний масив, додаючи рядки з кожного двовимірного масиву
//     по черзі.

let matrix6 = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [[7, 8, 9]],
];

let matrix7 = [
  [
    [12, 24],
    [36, 48],
    [60, 72],
  ],
  [
    [84, 96],
    [108, 120],
  ],
];

// Solution via for-loop:
/*Для рішення потрібно лише два цикли:
  - Перебрати кожну матрицю в matrixList.
  - Перебрати кожен рядок цієї матриці та помістити 
    весь рядок у resultArr.
*/
function stackMatrices1(matrixList) {
  let resultArr = [];

  for (let i = 0; i < matrixList.length; i++) {
    for (let j = 0; j < matrixList[i].length; j++) {
      resultArr.push(matrixList[i][j]); // тут додаєм цілий ряд
    }
  }

  return resultArr;
}
console.log(stackMatrices1(matrix6));

// Solution via .flat()
function stackMatrices2(matrixList) {
  return matrixList.flat();
}
console.log(stackMatrices2(matrix7));

// 😒============================== 14 ===================================
/* Допускається виправити тільки дві помилки. Надається сигнал у вигляді
   послідовності нулів та одиниць. Через сильні електромагнітні перешкоди
   іноді (досить часто) замість одиниці можна отримати нуль. Припускаючи, що
   в сигналі може бути щонайбільше два помилкові біти (тобто два нулі замість
   одиниць), потрібно визначити довжину найдовшої послідовності, яка могла
   бути надіслана. Ось декілька прикладів:
    Приклад 1:
    Вхідні дані: 111100111011101110
    Очікуваний результат: 11 бо обидва нулі між двома послідовностями довжиною 3
    можуть бути помилками, це об'єднує їх у послідовність довжиною 11. А якщо
    взяти перші нулі після 4х одиниць, то довжина послідовності буде тільки 9.
    Приклад 2:
    Вхідні дані: 0011110010110
    Очікуваний результат: 7 бо два нулі праворуч від послідовності довжиною 4
    можуть бути помилками, це об'єднує її з наступною одиницею, утворюючи
    послідовність довжиною 7.
*/
// Solution:
/* Ми хочемо знайти найдовшу послідовність 1‑ь, якщо дозволено перетворити тільки
   два нулі (0) на дві одиниці (1).
   Алгоритм:
  1. Використовуємо ковзне вікно (sliding window)
     - визначаємо межі вікна: left і right.
  2. Ідемо по рядку послідовності зліва направо (рухаємо правий індекс right по рядку).
  3. Рахуємо кількість нулів у поточному вікні:
    - Якщо нулів ≤ 2 → це допустимий підрядок, оновлюємо максимум.
    - Якщо нулів > 2 → зсуваємо лівий індекс left, поки кількість нулів знову ≤ 2.
  4. Повертаємо максимальну довжину. */
function getLongestRepeatingOnes(s) {
  let left = 0; // ліва межа вікна
  let zeros = 0; // кількість нулів у поточному вікні
  let maxLen = 0; // максимальна довжина

  // рухаємо праву межу вікна
  for (let right = 0; right < s.length; right++) {
    if (s[right] === "0") {
      zeros++; // додаємо нуль
    }

    // якщо нулів більше ніж 2 → зсуваємо left
    while (zeros > 2) {
      if (s[left] === "0") {
        zeros--; // забираємо один нуль
      }
      left++; // зсуваємо ліву межу вправо
    }

    // довжина поточного допустимого вікна
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
console.log(getLongestRepeatingOnes("111100111011101110")); // 11
/*Три блоки 111 можна об’єднати, використавши два нулі як помилки → довжина 11 */
console.log(getLongestRepeatingOnes("0011110010110")); // 7
/* Тут блок 1111 + два нулі + ще один 1 → довжина 7 */

// 😒============================== 15 ===================================
/* Напишіть функцію isValidEmail для перевірки, чи є заданий рядок дійсною 
   адресою електронної пошти. При цьому, дійсна електронна адреса – це
   рядок у форматі:
   {префікс}@{домен}.{суфікс домену} / {prefix}@{domain}.{domain suffix}
*/
// Solution via .split():
/* Алгоритм рішення може бути:
  1. Потрібно переконайтеся, що є рівно один символ @.
  2. Розділяємо на префікс та domainPart, якщо немає одної частини то одразу false
  3. Потрібно переконатися, що префікс не порожній.
  4. У domainPart переконуємся, що є принаймні один символ це "." і по обидві сторони
     крапки рядки не порожні.
  5. Повертаємо true, лише якщо всі умови виконано.
*/
function isValidEmail1(email) {
  // розділяємо на частини та перевірка чи рядок містить тільки один символ "@"
  const parts = email.split("@");

  // перевіряємо чи є символи по обидва боки "@"
  if (parts.length !== 2) return false;

  // деструкторизацією розділяємо на prefix та domainPart
  const [prefix, domainPart] = parts;

  // префікс не повине бути порожній
  if (prefix.length === 0) return false;

  // правельний домен повинен містити "."
  const domainParts = domainPart.split(".");
  if (domainParts.length < 2) return false;

  // визначаємо в домені частини domain та suffix і вони не повинні бути порожні
  const domain = domainParts[0];
  const suffix = domainParts[1];
  if (domain.length === 0 || suffix.length === 0) return false;

  return true;
}
// Tests:
console.log(isValidEmail1("user@example.com"));
// true -> "user@example.com" → prefix = "user", domain = "example", suffix = "com" → valid.
console.log(isValidEmail1("me.write@com"));
// false -> "me.write@com" → domainPart = "com" → no dot → invalid

// 😒============================== 16 ===================================
/* Напишіть функцію countWords, яка підраховує кількість слів у реченні.
   При цьому в реченні може бути між словами декілька пробілів.
*/
// Solution via .split() and for loop:
function countWordsSimple1(sentence) {
  const words = sentence.split(" "); // розібємо на масив слів з роздільником одного пробілу
  /* Якщо речення має тільки один пробіл між словами, то рішення буде:
    return words.length, але якщо між словами є декілька пробілів типу:
    "Hello   world".split(" ")); то ми отримаємо ["Hello", "", "", "world"]
    а тому рішення буде як: */

  let count = 0; // змінна-лічильник для підрахунку слів

  // ітеруємо по елементах (які можуть бути як слова так і пробіли)
  for (let i = 0; i < words.length; i++) {
    // у разі якщо елемент масиву - це пустий рядок (або пробіл) - ігноруємо їх
    if (words[i] !== "") {
      count++; // збільшуємо лічильник
    }
  }

  return count; // повертаємо кількість
}
console.log(countWordsSimple1("Hello   world")); // 2;

// Solution via reduce method:
function countWordsReduce(sentence) {
  const words = sentence.split(" ");

  return words.reduce((count, word) => {
    // збільшуємо лічильник тільки якщо рядок не порожній
    if (word !== "") {
      count++;
    }
    return count;
  }, 0);
}
console.log(countWordsReduce("Hello, how are   you today?")); // 5

// Solution via manually scan the string and count transitions from “non‑space” to “space”:
function countWordsTransitions(sentence) {
  let count = 0; // змінна для підрахунку кількості слів
  let inWord = false; // прапорець: чи ми зараз всередині слова

  // перебираємо кожен символ у рядку
  for (let char of sentence) {
    // якщо символ не пробіл і ми ще не в слові → починається нове слово
    if (char !== " " && !inWord) {
      inWord = true; // позначаємо, що тепер ми всередині слова
      count++; // збільшуємо лічильник слів
    } else if (char === " ") {
      // якщо символ пробіл → виходимо зі слова
      inWord = false; // позначаємо, що ми більше не в слові
    }
  }

  return count; // повертаємо загальну кількість слів
}
console.log(countWordsTransitions("   spaced   out   ")); // 2

// 😒============================== 17 ===================================
/* Напишіть функцію reverseInteger, яка перетворює цифри цілого числа на
   протилежні.
*/
// Solution:
function reverseInteger(num) {
  // перетворюємо число у рядок
  const str = String(num);

  // розбиваємо на символи, розвертаємо і з’єднуємо назад
  const reversedStr = str.split("").reverse().join("");

  // перетворюємо назад у число
  return Number(reversedStr);
}
// Tests:
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(555)); // 555
console.log(reverseInteger(100)); // 1  (leading zeros disappear)

// 😒============================== 18 ===================================
/* Створіть функцію compareAppleNames, яка отримує параметри variety1,
  variety2 та appleCount. Вона порівнює дві назви сортів яблук та обчислює
  їхню схожість в назвах. А отже,
  1. Порівнюйте дві назви сортів яблук посимвольно, збільшуючи лічильник для
  кожного збігу символів. Якщо назви мають різну довжину, зупиніть порівняння
  в кінці коротшої назви.
  2. Обчисліть «оцінку схожості», поділивши кількість збігів символів на
  довжину коротшої назви та помноживши на 100.
  Параметри:
  variety1 (рядок): Назва першого сорту яблук.
  variety2 (рядок): Назва другого сорту яблук.
  appleCount (число): Кількість яблук для порівняння.
  Функція повертає рядок, який містить назви обох сортів яблук, кількість
  порівнюваних яблук та оцінку схожості (округлену до двох знаків після коми).
*/
// Solution:
/* Алгоритм рішення буде:
  1. Визначаємо довжину коротшої назви яблук.
  2. Ітеруємо символи обох назв до цієї довжини.
  3. Збільшуємо лічильник, якщо символи збігаються.
  4. Обчислюємо відсоток схожості:
    similarity = (matches / shorterLength) × 100
  5. Формуємо рядок результату з округленням до двох знаків після коми.
*/
function compareAppleNames(variety1, variety2, appleCount) {
  // визначаємо довжину коротшої назви
  const minLength = Math.min(variety1.length, variety2.length);

  let matches = 0;
  // порівнюємо символи посимвольно
  for (let i = 0; i < minLength; i++) {
    if (variety1[i] === variety2[i]) {
      matches++;
    }
  }

  // обчислюємо відсоток схожості
  const similarity = (matches / minLength) * 100;

  // формуємо результат
  return `Comparing ${appleCount} ${variety1} apples with ${variety2} apples: ${similarity.toFixed(2)}% similarity`;
}
// Tests:
console.log(compareAppleNames("Granny Smith", "Granny", 20));
// Comparing 20 Granny Smith apples with Granny apples: 100.00% similarit
console.log(compareAppleNames("Red Delicious", "Golden Delicious", 25));
// Comparing 25 Red Delicious apples with Golden Delicious apples: 0.00% similarity
console.log(compareAppleNames("Pink Lady", "Pink", 35));
// Comparing 35 Pink Lady apples with Pink apples: 100.00% similarity
console.log(compareAppleNames("McIntosh", "Macoun", 6));
// Comparing 6 McIntosh apples with Macoun apples: 16.67% similarity
console.log(compareAppleNames("Cripps Pink", "Cox's Orange Pippin", 1));
// Comparing 1 Cripps Pink apples with Cox's Orange Pippin apples: 18.18% similarity

// 😒============================== 19 ===================================
/* Дано масив цілих чисел. Знайдіть загальну кількість послідовних підмасивів,
  (не можна розглядати елементи на початку і десь з кінця чи середини, тільки
  розглядати елементи один за одним) сума яких дорівнює визначеній довжині "k".
*/
// Solution:
/* Алгоритм рішення буде:
  1. Ітеруємо всі можливі початкові індекси масиву.
  2. Для кожного початку обчислюємо суму елементів до кінця, поки не перевищимо
    довжину.
  3. Якщо сума дорівнює k, збільшуємо лічильник.
  4. Повертаємо загальну кількість знайдених підмасивів.
*/
function subarraySum(nums, k) {
  let count = 0; // лічильник довжин підмасивів

  // проходимо по всіх можливих початках - зовнішній цикл
  for (let start = 0; start < nums.length; start++) {
    let sum = 0; // сума для поточного підмасиву

    // поступово додаємо елементи від start до кінця - внутрішній цикл
    for (let end = start; end < nums.length; end++) {
      sum += nums[end];
      /* На кожному кроці додаємо поточний елемент до змінної sum.
        Таким чином ми поступово нарощуємо суму підмасиву:
        коли end = start, маємо підмасив із одного елемента;
        коли end = start+1, маємо підмасив із двох елементів;
        і так далі. */
      if (sum === k) {
        count++; // знайшли підмасив із сумою k - збільшили лічильник
      }
    }
  }

  return count; // повертаємо кількість можливих послідовних підмасивів
}
/* Зовнішній цикл фіксує початок підмасиву (start).
  Внутрішній цикл поступово розширює цей підмасив вправо (end).
  Змінна sum накопичує суму елементів від start до end.
  Кожного разу, коли сума збігається з k, ми реєструємо знайдений підмасив. */
// Tests:
console.log(subarraySum([1, 1, 1], 2)); // 2 -> [1, 1], [1, 1]
console.log(subarraySum([1, 2, 3, 4], 5)); // 1 -> [2, 3], бо [1, 4] - не послідовний!

// 😒============================== 20 ===================================
/* Послідовність "порахуй і скажи" – це серія рядків, де кожен рядок
   генерується на основі попереднього рядка. Напишіть функцію для генерації
   n-го рядка в послідовності "порахуй і скажи".
    Вхідні дані: 4   Очікуваний вихідний дані: «1211»
*/
// Solution:
/*
  Послідовність "порахуй і скажи" – це ряд чисел, де кожен член описує
  кількість послідовних цифр у попередньому члені. Вона починається з
  початкового члена «1» і продовжується наступним чином:
  Початковий член: «1»
  Перший член: Одна «1» - «11»
  Другий член: Дві «1» - «21»
  Третій член: Одна «2», а потім одна «1» - «1211»
  Четвертий член: Одна «1», одна «2» та дві «1» - «111221»
  П'ятий член: Три «1», дві «2» та одна «3» - «312211»
  ... і так далі.
  Кожен член утворюється шляхом зчитування попереднього члена та підрахунку
  послідовних входжень кожної цифри. Послідовність демонструє закономірність
  того, як числа описуються словесно, звідси й назва послідовності «порахуй
  і скажи».

  Отже, можливим алгоритмом рішення буде:
  1. Починаємо з базового рядка "1".
  2. Для кожного наступного кроку:
    - Читаємо попередній рядок символ за символом.
    - Рахуємо кількість однакових цифр поспіль.
    - Формуємо новий рядок у форматі "кількість + цифра".
  3. Повторюємо цей процес n-1 разів.
*/
function countAndSay1(n) {
  // якщо n дорівнює 1, повертаємо базовий випадок "1"
  if (n === 1) return "1";

  // початковий результат — рядок "1"
  let result = "1";

  // цикл від 2 до n, щоб побудувати кожний наступний терм
  for (let i = 2; i <= n; i++) {
    // якщо n дорівнює 1, повертаємо базовий випадок "1"
    if (n === 1) return "1";

    // початковий результат — рядок "1"
    let result = "1";

    // цикл від 2 до n, щоб побудувати кожний наступний терм
    for (let i = 2; i <= n; i++) {
      // створюємо масив для поточного терму
      let current = [];
      // лічильник повторів цифри
      let count = 1;

      // проходимо по символах попереднього результату
      for (let j = 1; j < result.length; j++) {
        // 👈 тут < замість <=
        // якщо поточний символ такий самий як попередній — збільшуємо лічильник
        if (result[j] === result[j - 1]) {
          count++;
        } else {
          // додаємо до масиву кількість та сам символ
          current.push(count.toString(), result[j - 1]);
          // обнуляємо лічильник для нової цифри
          count = 1;
        }
      }

      // додаємо останню групу цифр, яку цикл не охопив
      current.push(count.toString(), result[result.length - 1]);

      // об’єднуємо масив у рядок
      result = current.join("");
    }

    // повертаємо остаточний результат
    return result;
  }
}
// Tests:
console.log(countAndSay1(1)); // "1"
console.log(countAndSay1(3)); // "21"
console.log(countAndSay1(5)); // "111221"

// Solution via array and join method:
function countAndSay2(n) {
  // якщо n дорівнює 1, повертаємо базовий випадок "1"
  if (n === 1) return "1";

  // початковий результат — рядок "1"
  let result = "1";

  // цикл від 2 до n, щоб побудувати кожний наступний терм
  for (let i = 2; i <= n; i++) {
    // створюємо масив для поточного терму
    let current = [];
    // лічильник повторів цифри
    let count = 1;

    // проходимо по символах попереднього результату
    for (let j = 1; j <= result.length; j++) {
      // якщо поточний символ такий самий як попередній — збільшуємо лічильник
      if (result[j] === result[j - 1]) {
        count++;
      } else {
        // додаємо до масиву кількість та сам символ
        current.push(count.toString(), result[j - 1]);
        // обнуляємо лічильник для нової цифри
        count = 1;
      }
    }

    // об’єднуємо масив у рядок
    result = current.join("");
  }

  // повертаємо остаточний результат
  return result;
}
console.log(countAndSay2(2)); // "11"
console.log(countAndSay2(4)); // "1211"
