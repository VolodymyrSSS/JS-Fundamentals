// ============================Task 01===================================
// UA: В нас є масив "arr", елементами якого є символи, що можуть
//     повторятись. Створіть об'єкт, що виведе своїми властивостями елемент
//     та його частоту повторювання у масиві. Покажіть щонайменше два способи
//     рішення задачі в залежності від просторово-часової складності.
// EN: We have an array "arr", the elements of which are characters that can
//     be repeated. Create an object that will output the element and its
//     frequency of repetition in the array as its properties. Show at least
//     two ways to solve the problem depending on the space-time complexity.

const arrCharacters = ["a", "b", "a", "c", "a", "b"];

// solution via array method .reduce
const elFriqAppearence = arrCharacters.reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log(elFriqAppearence); // {a: 3, b: 2, c: 1}

// solution via for..of loop
let frequencyAp = {};
for (let ch of arrCharacters) {
  if (frequencyAp[ch]) {
    frequencyAp[ch]++;
  } else {
    frequencyAp[ch] = 1;
  }
}
console.log(frequencyAp); // {a: 3, b: 2, c: 1}

// ============================Task 02===================================
// UA: В нас є масив з трьома рівнями вкладеності - "nestedArr". Перетворіть
//     його в звичайний масив. Додаткова умова - рівнів вкладеності масива може
//     бути більшою або меншюю, тому рішення має бути універсальним. Покажіть
//     щонаймеше два рішення одне з яких має включати рекурсивний метод.
// EN: We have an array with three nesting levels - "nestedArr". Convert it to
//     a regular array. An additional condition is that the nesting levels of
//     the array can be greater or lesser, so the solution must be universal.
//     Show at least two solutions, one of which must include a recursive method.

const nestedArr = [1, [2, 3, [4, 5]]];

// solution via array method .flat()
/* Метод flat() створює новий масив з усіма елементами підмасиву, рекурсивно 
об'єднаними в нього до заданої глибини. А тому, потрібно вказувати рівень глибини
як .flat(2) (для нашого прикладу), або Infinity щоб мати універсальний метод який
може мати більше чи менше рівнів вкладеності. За замовчуванням метод має 1.*/
const simpleArr = nestedArr.flat(Infinity);
console.log(simpleArr); // [1, 2, 3, 4, 5]

// solution via recursive approach
/*Cуть рекурсії - завдання можна спростити до простої дії плюс простіший варіант 
того ж завдання. */
function flatArr(arr) {
  let result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      /* крок рекурсії бо спрощуємо дію: додаєм в масив + виклик  
        функції самої себе доки буде не масив а просте значення */
      result.push(...flatArr(i));
    } else {
      /* база рекурсії бо отримуємо негайний результат - просто 
         додаємо в масив нове значення */
      result.push(i);
    }
  }
  return result;
}
console.log(flatArr(nestedArr)); // [1, 2, 3, 4, 5]

// ============================Task 03===================================
/*
  Create a function named collectShells that receives shells and commands 
  as its parameters. This function aims to simulate collecting shells on 
  a beach based on the given commands.
  The shells parameter represents the shells you have collected so far,
  where each integer represents a unique type of shell. The commands parameter
  represents a sequence of actions to perform. A negative number in commands
  indicates discarding the last collected shell of the corresponding type (if
  it exists), while a positive number indicates collecting a new shell of that 
  type.
  Process each command in the order they appear, modifying the shells array
  accordingly:
  - If the command is negative and a shell of that type was the last one collected,
  remove it from shells using the continue statement.
  - If the command is positive, add it to the end of the shells array.
  - After processing all the commands, return the modified shells array.

  Parameters:
  - shells (array): An array of positive integers representing the types of 
  shells collected so far.
  - commands (array): An array of integers representing the commands to perform.
  Negative numbers indicate discarding a shell, while positive numbers indicate
  collecting a new shell.
  The function returns an array of integers representing the types of shells 
  collected after processing all the commands.
*/
// Solution:
function collectShells(shells, commands) {
  // Handle the empty case
  if (shells.length === 0 && commands.length === 0) {
    return [NaN];
  }

  // Process commands one by one by looping through commands
  /*
    Commands are integers: positive means “collect”, negative means “discard”.
    When discarding, we need the shell type (e.g., -2 means discard type 2).
    So the variable type was just the positive shell type.
    We can use something like const type = Math.abs(cmd) which converts -2 → 2 
    or Instead of storing type, we can directly compare like here:
  */
  for (const cmd of commands) {
    if (cmd > 0) {
      shells.push(cmd);
    } else if (shells[shells.length - 1] === -cmd) {
      // here -cmd flips the negative back to positive like Ex: cmd = -2 → -cmd = 2.
      shells.pop();
      continue;
    }
  }

  return shells;
}

// Tests:
console.log(collectShells([], [])); // [NaN]
console.log(collectShells([], [1, 2, 3])); // [NaN, 1, 2, 3]
console.log(collectShells([1, 2], [3, -1, 4, -2])); // [1, 2, 3, 4]
console.log(collectShells([1, 2, 3], [1, -1, 2, -2, 3, -3])); // [1, 2, 3]

// Solution 2: instead of mutating the shells array directly, we build up the new array
function collectShells2(shells, commands) {
  if (shells.length === 0 && commands.length === 0) {
    return [NaN];
  }

  /*
    We’ll run commands.reduce(...) starting from the initial shells array.
    Inside the reducer:
    - If cmd > 0 → return a new array with cmd appended.
    - If cmd < 0 and the last element matches -cmd → return a new array with the last element removed.
    - Otherwise → return the array unchanged.
  */
  return commands.reduce((acc, cmd) => {
    if (cmd > 0) {
      return [...acc, cmd];
    } else if (acc[acc.length - 1] === -cmd) {
      return acc.slice(0, -1);
    }
    return acc;
  }, shells);
}
// Test:
console.log(collectShells2([1, 2, 3], [-3, 3, -3])); // [1, 2]

// ============================== 04 ====================================
/*
  Уявіть, що у вас є кошик, повний цукерок різних кольорів. Створіть масив
  candyBasket, що містить п'ять цукерок: "red", "orange", "yellow", "green",
  "blue". Напишіть код JavaScript, щоб знайти цукерку що знаходиться 
  посередині кошика на основі її індексу. А якщо в нас буде парна кількість
  цукерок? Додайте в рішення код для визначення двох цукерок які ділять
  їх кількість пополам.
*/
// Solution:
/*
  Щоб визначити середній елемент масиву по індексу, потрібно мати цей індекс.
  Для отримання індексу - тобто цілого числа в JS треба використати властивість
  довжини масиву яку ділять на 2. А щоб отримати ціле число достатньо використати
  метод Math.floor. Для визначення парної/непарної кількості, будем використовувати
  оператор залишку %. Отже, рішення буде:
*/
const findMiddle = (arr) => {
  if (arr.length % 2 === 1) {
    // непарна кількість → одна цукерка посередині
    let middle = Math.floor(arr.length / 2); // округлюємо вниз до цілого
    console.log("Middle candy:", arr[middle]);
  } else {
    // парна кількість → дві середні що ділять кількість пополам
    let left = arr.length / 2 - 1;
    let right = arr.length / 2;
    console.log("Middle candies:", arr[left], "and", arr[right]);
  }
};
// Tests:
const basket1 = ["red", "orange", "yellow", "green", "blue"];
findMiddle(basket1); // Middle candy: yellow
const basket2 = ["red", "orange", "yellow", "green", "blue", "purple"];
findMiddle(basket2); // Middle candies: yellow and green

// ============================== 04 ====================================

/*
  Давайте створимо масив фруктів та масив цін і використаємо метод forEach() 
  для виведення в консоль їхніх назв та відповідних цін.
*/
// Solution via forEach:
/* Метод forEach() – це вбудована функція для масивів, яка виконує надану 
  функцію один раз для кожного елемента масиву. Ця функція, яка називається 
  функцією зворотного виклику, може виконувати різні операції з елементами, 
  такі як виведення у консоль, модифікація або збір інформації. Порядок виконання 
  – від першого елемента (індекс 0) до останнього.
*/

const myFruits = ["apple", "banana", "orange"];
const prices = [1.5, 0.75, 2.0];

myFruits.forEach((fruit, index) => {
  console.log(`${fruit} - ${prices[index]}`);
});
/* Output:  apple - $1.5
            banana - $0.75
            orange - $2  
*/

// ============================== 05 ====================================
/*
  У нас є група з чотирьох дітей, які тримають 3, 4, 7 та 2 шоколадки 
  відповідно, як зазначено в масиві chocolates. Ваше завдання — написати код 
  JavaScript, щоб подвоїти кількість шоколадок для кожної дитини та 
  виведіть результат у масиві в консоль.
  Додаткова умова: покажіть рішення з використанням методів: forEach та map.
*/
// Solution via forEach:
/*
  Метод forEach не створює новий масив, він просто виконує дію для кожного 
  елемента. Щоб отримати саме масив як у завданні, треба всередині forEach 
  зберігати результати у новий масив. Отже рішення:
*/
let chocolates = [3, 4, 7, 2];

let doubledChocolates1 = [];
chocolates.forEach((item) => {
  doubledChocolates1.push(item * 2);
});
// Test:
console.log(doubledChocolates1); // [6, 8, 14, 4]

// Solution via map:
let doubledChocolates2 = chocolates.map((item) => item * 2);
// Test:
console.log(doubledChocolates2); // [6, 8, 14, 4]

// ============================== 06 ====================================
/*
  Уявіть, що ви працюєте зі списком чисел, що представляють ціни на товари.
  Ви хочете спростити покупки, знайшовши найнижчу ціну та створивши новий
  список для керування своєю стратегією покупок. Упорядкуйте ціни від найнижчої
  до найвищої.
  Зробіть ціни візуально зрозумілішими, округливши їх (наприклад, від 123,456
  до 123). Створіть новий список товарів вартістю до 200 доларів. Запропонуйте
  знижку 10% на відфільтровані ціни та зареєструйте кінцеві ціни зі знижкою 
  (список).
*/
// Solution:
const prices = [199.99, 249.5, 79.99, 12.5, 8.99, 350.75];
// Сортуємо від найменшої до найбільшої
prices.sort((a, b) => a - b);
// Округлюємо до цілих
const roundedPrices = prices.map((p) => Math.round(p));
// Фільтруємо < 200
const filteredUnder200 = roundedPrices.filter((p) => p < 200);
// Застосовуємо 10% знижку і округлюємо до найближчого цілого
const pricesWithDiscount = filteredUnder200.map((p) => Math.round(p * 0.9));
// Test:
console.log(pricesWithDiscount); // [8, 12, 72]
/*
 Ось рішення в ланцюжок:
  const discounted = prices
    .sort((a, b) => a - b)          // Сортуємо від найменшої до найбільшої
    .map(p => Math.round(p))        // Округлюємо до цілих
    .filter(p => p < 200)           // Залишаємо лише ціни < 200
    .map(p => Math.round(p * 0.9)); // Застосовуємо 10% знижку

  console.log(discounted); // [8, 12, 72]
  Це виглядає як «конвеєр»: кожен крок бере результат попереднього й
  трансформує його далі.
*/
