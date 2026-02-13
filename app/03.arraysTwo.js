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
