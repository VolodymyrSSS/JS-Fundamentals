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
