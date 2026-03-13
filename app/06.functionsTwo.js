console.log("Topic: Functions - Part 2");

// ============================Task 01===================================
// UA: Напишіть функцію з іменем analyzeBudget, яка: Приймає три аргументи:
//     список цін, список назв товарів та бюджет на кожен товар. Приклад:
//     prices = [10, 20, 5, 15],
//     items = ["Ноутбук", "Ручка", "Гумка", "Сумка"] та
//     budget = 10,
//     і результат має бути саме таким:
//     Доступні товари: "Ноутбук", "Гумка"
//     Загальний необхідний бюджет: 15
//     Товари поза бюджетом: 2
// EN: Write a function named analyzeBudget that: Takes three
//     arguments: a list of prices, a list of item names, and
//     a budget per item. Example:
//     prices = [10, 20, 5, 15],
//     items = ["Notebook", "Pen", "Eraser", "Bag"], and
//     budget = 10,
//     and the output should be exactly:
//     Affordable items: "Notebook", "Eraser"
//     Total budget needed: 15
//     Items out of budget: 2

// solution via array metgods:
function analyzeBudget(prices, items, budget) {
  // Write code here
  let affordableItems = [];
  let sumAffordables = 0;
  let outOfBudgetItems = 0;

  for (let i = 0; i < items.length; i++) {
    // Спочатку очистимо найменування: обріжемо лишній пробіли та видалимо лапки
    let cleanItem = items[i].trim();
    if (cleanItem.startsWith('"') && cleanItem.endsWith('"')) {
      cleanItem = cleanItem.slice(1, -1);
    }
    // або можна так
    // let cleanItem = items[i].trim().replace(/^"|"$/g, "");
    // логіка вирішення
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
// working check:
let prices = [10, 20, 5, 15];
let items = ["Notebook", " Pen", "Eraser", " Bag "];
let budget = 10;
analyzeBudget(prices, items, budget);
// ======================================================================
// ============================Task 02===================================
// UA: Створіть функцію з іменем greetAll, яка приймає масив імен і
//     повертає один рядок. Кожне ім'я в масиві має створювати рядок у
//     форматі Hello, <Ім'я>!, об'єднані в один рядок, розділені символами
//     нового рядка. Використовуйте шаблонні літерали для рядків привітання.
// EN: Create a function named greetAll that takes an array of names and
//     returns one string. Each name in the array should produce a line
//     with the format Hello, <Name>! joined together into a single string,
//     separated by newlines. Use template literals for the greeting lines.

// solution via array method .map() and template literals
function greetAll1(names) {
  // Write your code here
  let greetings = names.map((name) => `Hello, ${name}!`);
  return greetings.join("\n");
}

console.log(greetAll1(["Alice", "Bob", "Charlie"])); // the output is like:
//                                                    // Hello, Alice!
//                                                    // Hello, Bob!
//                                                    // Hello, Charlie!

// solution via for-loop, concatenation, property length and template literals
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
console.log(greetAll2(["", "   ", "Bob"])); // the output is like:
//                                          // Hello, !
//                                          // Hello,    !
//                                          // Hello, Bob!
// ======================================================================
// ============================Task 03===================================
// UA: Створіть функцію з назвою alternateCase, яка приймає рядок на вхід
//     і повертає новий рядок, де регістри чергуються. Перший символ має
//     бути великим, другий — малим, третій — великим, i т. д.
// EN: Create a function named alternateCase that takes a string as input
//     and returns a new string where the cases are alternated. The first
//     character should be uppercase, the second lowercase, the third
//     uppercase, and so on.

// solution via for-loop and strings concatenation
function alternateCase1(str) {
  let alternated = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // для випадку коли символи є буквами
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
// the working check:
console.log(alternateCase1("Hello World")); // HeLlO WoRlD
console.log(alternateCase1("12345")); // 12345
console.log(alternateCase1("H")); // H

// solution via split(), map() and join() methods
function alternateCase2(str) {
  return str
    .split("") // переводимо в масив символів
    .map((char, i) => {
      // коли символи є буквами
      if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }
      return char; // небукви залишаються як є
    })
    .join("");
}
// the working check:
console.log(alternateCase2("development")); // DeVeLoPmEnT
console.log(alternateCase2("b2Ac99")); // B2Ac99
console.log(alternateCase2("Hi")); // Hi

// solution via RegEx
function alternateCase3(str) {
  return str.replace(/./g, (char, i) => {
    // якщо символи букви
    if (/[a-zA-Z]/.test(char)) {
      return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }
    return char; // якщо символи небукви
  });
}
console.log(alternateCase3("BARABULKA")); // BaRaBuLkA
// ======================================================================
// =========================== Task 04 ==================================
// UA: Вам задано два масиви, arr1 та arr2. Напишіть функцію findCommonElements,
//     яка знаходить усі унікальні спільні елементи між двома масивами та
//     повертає їх як масив. Ви повинні оптимізувати своє рішення, щоб
//     уникнути вкладених циклів (грубої сили). Мета — підвищити ефективність.
// EN: You are given two arrays, arr1 and arr2. Write a function findCommonElements
//     that finds all the unique common elements between the two arrays and
//     returns them as an array. You must optimize your solution to avoid
//     nested loops (brute force). The goal is to improve efficiency.

const array1 = [1, 2, 2, 3, 4, 4, 5];
const array2 = [3, 4, 9, 4, 8, 5, 6, 7];

function findCommonElements1(arr1, arr2) {
  const commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      /* indexOf is checking whether the current element from arr1 already exists in
         the commonElements array (to avoid adding duplicate elements */
      if (arr1[i] === arr2[j] && commonElements.indexOf(arr1[i]) === -1) {
        commonElements.push(arr1[i]);
      }
    }
  }
  return commonElements;
}
console.log(findCommonElements1(array1, array2)); // Output: [3, 4, 5]

// solution via Set
/* Колекція Set забезпечить те, що усі елементи масиву будуть унікальними та 
забезпечить швидкість і автоматизацію усіх операцій. Тому метод new Set(arr)
конвертує масив у колекцію унікальних елементів Set. Далі ми можемо конвертувати
назад унікальну колекцію в масив методом [...set], щоб можна було ітеретувати 
по його елементам чи використати методи для масивів.
 */
const arr1 = ["apple", "banana", "cherry", "apple", "kiwi"];
const arr2 = ["cherry", "banana", "grape", "papaya", "cherry", "grape"];

function findCommonElements2(arr1, arr2) {
  const set1 = new Set(arr1); // Convert arr1 to a Set for fast lookups and get uniques collection
  const set2 = new Set(arr2); // Convert arr2 to a Set for fast lookups and get uniques collection

  /* пошук спільних елементів двох масивів Sets. Так ми перевіряємо, що кожен
      елемент колекції set1 існує(є) в колекції set2. Якщо це true, то присвоюється
      такий елемент в масив спільних елементів.
   */
  const commonElements = [...set1].filter((element) => set2.has(element));

  return commonElements;
}
console.log(findCommonElements2(array1, array2)); // [3, 4, 5]
console.log(findCommonElements2(arr1, arr2)); // ['banana', 'cherry']
// ======================================================================
// =========================== Task 05 ==================================
// UA: Створіть функцію з назвою stringWeaver, яка приймає два рядки та
//     повертає новий рядок, де:
//     1. Ігнорує числа, ніби їх не існує - Спочатку видаляє всі числа з
//     обох рядків;
//     2. Об'єднує очищені рядки - Поміщає всі символи з першого очищеного
//     рядка, а потім усі символи з другого очищеного рядка;
//     3. Перетворює всі голосні літери на верхній регістр - У кінцевому
//     об'єднаному рядку;
//     Повертає кінцевий рядок.
// EN: Create a function named stringWeaver that takes two strings and
//     returns a new string where:
//     1. Ignore numbers as if they don't exist - Remove all numbers from
//     both strings first;
//     2. Combine the cleaned strings - Put all characters from the first
//     cleaned string, followed by all characters from the second cleaned string;
//     3. Convert all vowels to uppercase - In the final combined string;
//     Return the final string.

// solution via for..of-loops
function stringWeaver1(str1, str2) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Step 1: видаляємо числа з str1
  let cleaned1 = "";
  for (let ch of str1) {
    if (!numbers.includes(ch)) {
      cleaned1 += ch;
    }
  }

  // Step 2: видаляємо числа з str2
  let cleaned2 = "";
  for (let ch of str2) {
    if (!numbers.includes(ch)) {
      cleaned2 += ch;
    }
  }

  // Step 3: комбінуємо в один рядок очищені рядки
  let combined = cleaned1 + cleaned2;

  // Step 4: конвертуємо голосні букви у верхній регістр
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
// working check
console.log(stringWeaver1("web2024", "dev2025")); // "wEbdEv"
console.log(stringWeaver1("123hello", "456world")); // "hEllOwOrld"

// solution via .split(), .filter(), .map(), and .join() methods
function stringWeaver2(str1, str2) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Step 1: видаляємо числа з обох рядків
  const cleaned1 = str1.split("").filter((ch) => !numbers.includes(ch));
  const cleaned2 = str2.split("").filter((ch) => !numbers.includes(ch));

  // Step 2: сомбінуємо в єдиний масив
  const combined = cleaned1.concat(cleaned2);

  // Step 3: конвертуємо голосні букви у верхній регістр
  const result = combined.map((ch) =>
    vowels.includes(ch) ? ch.toUpperCase() : ch,
  );

  // Step 4: конвертуємо назад у рядок
  return result.join("");
}
// working check
console.log(stringWeaver2("a1b2c3", "u9v0")); // "AbcUv"
console.log(stringWeaver2("7buffalo", "L8io253ness")); // "bUffAlOLIOnEss"
// ======================================================================
// =========================== Task 06 ==================================
// UA: Створіть функцію з назвою getColumn, яка приймає три аргументи:
//     двовимірний масив матриці, ціле число numberOfRows та ціле число
//     colIndex. Функція повинна повертати масив, що містить усі елементи
//     у вказаному стовпці colIndex.
// EN: Create a function named getColumn that takes three arguments: a 2D
//     array matrix, an integer numberOfRows, and an integer colIndex. The
//     function should return an array containing all elements in the
//     specified column colIndex.

// solution via for-loop
function getColumn1(matrix, numberOfRows, colIndex) {
  // TODO: Return an array containing elements from the specified column index
  let result = [];
  for (let i = 0; i < numberOfRows; i++) {
    result.push(matrix[i][colIndex]);
  }
  return result;
}
// working check
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(getColumn1(matrix, 3, 0)); // [1, 4, 7]
console.log(getColumn1(matrix, 3, 1)); // [2, 5, 8]
console.log(getColumn1(matrix, 3, 2)); // [3, 6, 9]

// solution via .slice() and .map() methods
function getColumn2(matrix, numberOfRows, colIndex) {
  return matrix
    .slice(0, numberOfRows) // взяти тільки ці рядки для роботи
    .map((row) => row[colIndex]); // взяти елемент по його індексу (в colIndex) з кожного рядка
}
// working check
console.log(getColumn2(matrix, 3, 0)); // [1, 4, 7]
console.log(getColumn2(matrix, 3, 1)); // [2, 5, 8]
console.log(getColumn2(matrix, 3, 2)); // [3, 6, 9]
// ======================================================================
// =========================== Task 07 ==================================
// UA: Створіть функцію з назвою countOccurrences, яка приймає двовимірний
//     масив матриці рядків та рядок target. Вона має повертати, скільки
//     разів target з'являється у всіх рядках та стовпцях.
// EN: Create a function named countOccurrences that takes a 2D array of
//     strings matrix and a string target. It should return how many times
//     target appears across all rows and columns.

// solution via nested for-loops
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
// working check
let matrix2 = [
  ["apple", "banana", "apple"],
  ["pear", "apple", "grape"],
  ["apple", "pear", "apple"],
];
console.log(countOccurrences1(matrix2, "apple")); // 5
console.log(countOccurrences1(matrix2, "banana")); // 1
console.log(countOccurrences1(matrix2, "pear")); // 2

// solution via flattens the 2D array into 1D, filters for matches, and counts them
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

// solution via .reduce()
/* В цьому випадку зовнішня функція .reduce() проходить по 
   кожному рядку. А внутрішня функція .reduce() підраховує
   збіги в цьому рядку. І врешті обидві функції підсумовуються
   в один підсумок. Цей варіант не використовує циклів, а
   лише здійснює скорочення.
*/
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
// working check
console.log(countOccurrences3(matrix3, "f")); // 2
// ======================================================================
// =========================== Task 08 ==================================
// UA: Створіть функцію mirrorRows, яка приймає двовимірний масив матриці
//     як аргумент і повертає новий двовимірний масив, у якому кожен рядок
//     перевернутий.
// EN: Create a function mirrorRows that takes a 2D array matrix as an
//     argument and returns a new 2D array in which each row is reversed.

let matrix4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// solution via spred operator for copy the row and .reverse()
function mirrorRows1(matrix) {
  let reversed = [];
  for (let i = 0; i < matrix.length; i++) {
    reversed.push([...matrix[i]].reverse()); // спочатку копіюємо ряд і вже потім перевертаємо
  }
  return reversed;
}
// working check
console.log(mirrorRows1(matrix4)); // [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]

// solution via spred operator for copy the row and .map()
function mirrorRows2(matrix) {
  return matrix.map((row) => [...row].reverse());
}
// working check
console.log(mirrorRows2(matrix4)); // [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]
// ======================================================================
// =========================== Task 09 ==================================
// UA: Створіть функцію з назвою combineMatrices, яка приймає три аргументи:
//     matrixA, matrixB та рядок op, який може бути як "+", так і "-". Для
//     кожної комірки, якщо op дорівнює "+", результат має бути
//     matrixA[r][c] + matrixB[r][c]. В іншому випадку, якщо op дорівнює "-",
//     результат має бути matrixA[r][c] - matrixB[r][c].
// EN: Create a function named combineMatrices that takes three arguments:
//     matrixA, matrixB, and a string op which can be either "+" or "-".
//     For each cell, if op is "+", the result should be
//     matrixA[r][c] + matrixB[r][c]. Otherwise, if op is "-", the result
//     should be matrixA[r][c] - matrixB[r][c].

let A = [
  [1, 2, 3],
  [4, 5, 6],
];
let B = [
  [7, 8, 9],
  [10, 11, 12],
];

// solution via nested for-loops and .push()
/* З теорії відомо, щоб додати або відняти дві матриці, вони повинні
   мати однакову розмірність (тобто однакову кількість рядків і стовпців).
   Операція виконується поелементно, тобто ви додаєте або віднімаєте
   відповідні елементи в кожній матриці. Але ми не можемо просто додати
   чи відняти цілу матрицю, бо в JavaScript ця операція просто перетворює 
   матриці на рядки і конкатенує їх (тобто не здійснює матиматичну операцію)
   або отримаємо NaN. Потрібно опрацювати комірку за коміркою окремо.
   Отже, для вирішення завдання потрібно пройтися циклом for по рядках
   і вкладеним циклом for по стовпцях і далі застосувати операцію до
   кожної комірки окремо, типу;
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
// working check
console.log(combineMatrices1(A, B, "+")); // [ [8, 10, 12], [14, 16, 18] ]
console.log(combineMatrices1(A, B, "-")); // [ [-6, -6, -6], [-6, -6, -6] ]

// solution via nested .map()
function combineMatrices2(matrixA, matrixB, op) {
  return matrixA.map((row, i) =>
    row.map((val, j) =>
      op === "+" ? val + matrixB[i][j] : val - matrixB[i][j],
    ),
  );
}
// working check
console.log(combineMatrices2(A, B, "+")); // [ [8, 10, 12], [14, 16, 18] ]
console.log(combineMatrices2(A, B, "-")); // [ [-6, -6, -6], [-6, -6, -6] ]
// ======================================================================
// =========================== Task 10 ==================================
// UA: Створіть функцію з назвою sumJagged, яка отримує "зубчатий" масив
//     із чисел і повертає загальну суму всіх елементів у кожному рядку,
//     незалежно від довжини рядка.
// EN: Create a function named sumJagged that receives a jagged array of
//     numbers and returns the total sum of all elements across every row,
//     regardless of row length.

let jagged = [
  [1, 2, 3],
  [4, -5, 42.2, 11],
  [6],
  [7, 8, -9, 10, 12, 77.3],
  [],
  [23.8, 44.52],
];

// solution via nested for-loops
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
// working check
console.log(sumJagged1(jagged)); // 237.82000000000002

// solution via .reduce() method
function sumJagged2(jaggedArray) {
  return jaggedArray.reduce(
    (rowAcc, row) => rowAcc + row.reduce((colAcc, val) => colAcc + val, 0),
    0,
  );
}
// working check
console.log(sumJagged2(jagged)); // 237.82

// solution via .flat() and .reduce() methods
function sumJagged3(jaggedArray) {
  return jaggedArray.flat().reduce((acc, val) => acc + val, 0);
}
// working check
console.log(sumJagged3(jagged)); // 237.82000000000002
// ======================================================================
// =========================== Task 11 ==================================
// UA: Створіть функцію з назвою printPatterns, яка приймає квадратний
//     двовимірний масив цілих чисел (матрицю) на вхід та друкує такі шаблони:
//     1. Головна діагональ: Вивести всі елементи, де індекс рядка дорівнює
//     індексу стовпця.
//     Антидіагональ: Вивести всі елементи, де сума індексів рядка та стовпця
//     дорівнює розміру матриці мінус 1.
//     Межі: Вивести елементи верхньої, нижньої, лівої та правої меж матриці.
// EN: Create a function named printPatterns that takes a square 2D array
//     of integers (matrix) as input and prints the following patterns:
//     Main Diagonal: Print all elements where the row index equals
//     the column index.
//     Anti-Diagonal: Print all elements where the sum of the row and column
//     indices equals the size of the matrix minus 1.
//     Borders: Print the elements of the top, bottom, left, and right borders
//     of the matrix.
let matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// solution via for-loop
function printPatterns(matrix) {
  let mainDiagonal = [];
  /* Для головної діагоналі не потрібено використовувати якісь
    вкладені цикли. Діагональ — це просто всі елементи, де 
    рядок === стовпець. Тож можна використати лише один цикл:
  */
  for (let i = 0; i < matrix.length; i++) {
    mainDiagonal.push(matrix[i][i]);
  }
  console.log("Main Diagonal:", mainDiagonal.join(" "));

  let antiDiagonal = [];
  /* - Антидіагональна умова: рядок + стовпець = розмірМатриці - 1.
- Для кожного рядка i індекс стовпця має розмірМатриці - 1 - i.
  - Приклад з матрицею 4×4:
  - Рядок 0 → стовпець = 3 → матриця[0][3]
  - Рядок 1 → стовпець = 2 → матриця[1][2]
  - Рядок 2 → стовпець = 1 → матриця[2][1]
  - Рядок 3 → стовпець = 0 → матриця[3][0]
  */
  let size = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    antiDiagonal.push(matrix[i][size - 1 - i]);
  }
  console.log("Anti-Diagonal:", antiDiagonal.join(" "));

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
  console.log("Top Border:", topBorder.join(" "));

  let bottomBorder = [];
  let lastRow = matrix.length - 1; // останній рядок
  for (let j = 0; j < matrix.length; j++) {
    bottomBorder.push(matrix[lastRow][j]);
  }
  console.log("Bottom Border:", bottomBorder.join(" "));

  let leftBorder = [];
  let j = 0; // ліва колонка
  for (let i = 0; i < matrix.length; i++) {
    leftBorder.push(matrix[i][j]);
  }
  console.log("Left Border:", leftBorder.join(" "));

  let rightBorder = [];
  let lastCol = matrix.length - 1; // індекс останнього елем рядка - остання колонка)
  for (let i = 0; i < matrix.length; i++) {
    rightBorder.push(matrix[i][lastCol]);
  }
  console.log("Right Border:", rightBorder.join(" "));
}
printPatterns(matrix5);
// ======================================================================
// =========================== Task 12 ==================================
// UA: Створіть функцію stackMatrices, яка отримує масив двовимірних масивів
//     matrixList (який по суті є тривимірним масивом). Усі ці масиви мають
//     однакову кількість стовпців. Функція повинна об'єднати їх вертикально
//     в один двовимірний масив, додаючи рядки з кожного двовимірного масиву
//     по черзі.
// EN: Create a function stackMatrices that receives an array of 2D arrays
//     matrixList (which is essentially a 3D array). All these arrays share
//     the same number of columns. The function should combine them vertically
//     into one 2D array, appending rows from each 2D array in sequence.

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

// solution via for-loop
/*Для рішення потрібно лише два цикли:
  - Перебрати кожну матрицю в matrixList.
  - Перебрати кожен рядок цієї матриці та помістити 
    весь рядок у resultArr.
*/
function stackMatrices1(matrixList) {
  let resultArr = [];

  for (let i = 0; i < matrixList.length; i++) {
    for (let j = 0; j < matrixList[i].length; j++) {
      resultArr.push(matrixList[i][j]); // тут пушимо цілий ряд
    }
  }

  return resultArr;
}
console.log(stackMatrices1(matrix6));

// solution via .flat()
function stackMatrices2(matrixList) {
  return matrixList.flat();
}
console.log(stackMatrices2(matrix7));
// ======================================================================
