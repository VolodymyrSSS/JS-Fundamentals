console.log("Topic: JS, Functions, Regular Expression, part 10");

// =================================== 01 ==================================
/*
  Ми маємо довільний рядок string. Створіть функцію findVowels яка підрахує
  число голосних букв у цьому рядку. Якщо немає голосних - виведіть число 0.
  Для рішення використайте тільки регулярні вирази.
*/
// Solution:
const findVowels = (str) => {
  // знайти усі голосні (не зважаємо на регістр)
  const vowelCount = str.match(/[aeiou]/gi);
  /* Пояснення:
      str.match(...) - метод match шукає всі входження у рядку, які відповідають
      регулярному виразу. Якщо знаходить → повертає масив збігів, а якщо не
      знаходить → повертає null;
      /[aeiou]/ - це регулярний вираз, який означає: знайти будь‑яку одну букву
      з набору a, e, i, o, u;
      g (global flag) - без g знайшов би лише перше входження. З g → шукає всі
      входження в рядку;
      i (case‑insensitive flag) - робить пошук нечутливим до регістру (тобто знайде і a, і A)
   */

  // повертаємо кількість: якщо нема -> 0, якщо є -> кількість знайдених голосних
  return vowelCount ? vowelCount.length : 0;
};
// Tests:
const string1 = "Be smart like fox and strong like ox.";
console.log(findVowels(string1)); // 10 бо ['e','a','i','e','o','a','o','i','e','o']
const string2 = "trkwwdn mktjd";
console.log(findVowels(string2));
// 0 - всередині match отримуємо null, але функція повертає 0, бо це явно оброблено тернарним оператором

// =================================== 02 ==================================
/*
    Напишіть функцію containsNumbers яка перевіряє чи рядок містить цифри?
    А як зміниться функція якщо перевіряти чи містяться в рядку тільки цифри?
    Для рішення використайте тільки регулярні вирази.
*/
// Solution via test method:
function containsNumbers1(str) {
  return /\d/.test(str); // \d -> знайти будь-яку цифру (0 - 9) у рядку
  // or can do like: return /[0-9]/.test(str);
}
// Tests:
console.log(containsNumbers1("hello123")); // true
console.log(containsNumbers1("javascript")); // false
console.log(containsNumbers1("3 apples")); // true

// solution via regExp using test method to check only numbers:
function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
  /* Пояснення:
      ^ → символ позначення початку рядку;
      $ → символ позначення кінця рядку;
      + → символ після \d шукає декілька співпадінь бо без + буде шукати тільки одне співпадіння
   */
  // or can do like:  return /^[0-9]+$/.test(str);
}
console.log(containsOnlyNumbers("hello123")); // false
console.log(containsOnlyNumbers("3453")); // true

// solution via RegEx using match method:
/* String match() метод повертає масив усіх співпадінь регулярного виразу в рядку.
   Якщо не знайдено співпадінь, метод поверне null. Але є ньюанс: Якщо рядок містить
   цифру, match повертає масив з першим збігом плюс деякі метадані, такі як індекс,
   вхідні дані, групи). Якщо рядок не містить цифри, match повертає null.
   Отже, str.match(/\d/) не є простим значенням true/false. Це або:
   - масив (truthy), або
   - null (falsy).
*/
function containsNumbers2(str) {
  return str.match(/\d/);
}
console.log(containsNumbers2("hello123")); // [ '1', index: 5, input: 'hello123', groups: undefined ]
console.log(containsNumbers2("javascript")); // null
console.log(containsNumbers2("3 apples")); // [ '3', index: 0, input: '3 apples', groups: undefined ]

/* Обгортання за допомогою Boolean(...) перетворює результат на чисте значення true/false:
Array → truthy → true
null → falsy → false
Це робить повернене значення функції зрозумілим та передбачуваним. */
function containsNumbers3(str) {
  return Boolean(str.match(/\d/));
}
console.log(containsNumbers3("hello123")); // true
console.log(containsNumbers3("javascript")); // false
console.log(containsNumbers3("3 apples")); // true

// =================================== 03 ==================================
/*
  Напишіть функцію isValidEmail для перевірки, чи є заданий рядок дійсною 
  адресою електронної пошти. При цьому, дійсна електронна адреса – це рядок
  у форматі: {префікс}@{домен}.{суфікс домену} / {prefix}@{domain}.{domain suffix}
  Для рішення використайте тільки регулярні вирази.
*/
// Solution:
function isValidEmail2(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  /* Таке застосування регулярного виразу значить:
    ^ → символ позначення початку рядку;
    [^\s@]+ → один чи декілька символів не є пробілами (\s) чи символом (@);
    Це визначення та перевірка prefix (перед @);
    далі йде літеральний символ @ електронної пошти;
    [^\s@]+ → знову один чи декілька символів не є пробілами (\s) чи символом (@);
    Це визначення та перевірка domain (типу example);
    Далі йде літеральна крапка → \.  (з екрануванням бо просто крапка означає "будь-який символ";
    [^\s@]+ → один чи декілька символів не є пробілами (\s) чи символом (@);
    Це перевіряє і визначає suffix (типу com);
    $ → символ позначення кінця рядку.
  */
  return regex.test(email);
}
console.log(isValidEmail2("example2@example2.com.i")); // false
console.log(isValidEmail2("barby_dolly@example2.org")); // true

// Solution via regular expression to match the strict email pattern prefix@domain.suffix:
function isValidEmail3(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  /* Таке застосування регулярного виразу значить:
    ^ → позначає початок рядка.
    [a-zA-Z0-9._%+-]+ → один або більше символів, які можуть бути:
     - латинські літери (a–z, A–Z),
     - цифри (0–9),
     - спеціальні дозволені символи: . _ % + -.
    Це визначає prefix (частину перед @).
    @ → літеральний символ @.
    [a-zA-Z0-9.-]+ → один або більше символів, які можуть бути:
     - латинські літери,
     - цифри,
     - крапка .,
     - дефіс -.
    Це визначає domain (наприклад, example).
    \. → літеральна крапка (з екрануванням, бо просто . означає "будь-який символ").
    [a-zA-Z]{2,} → два або більше латинських символів.
    Це визначає suffix (наприклад, com, org, ua).
    {2,} означає "мінімум 2 символи".
    $ → позначає кінець рядка.
  */
  return regex.test(email);
}
console.log(isValidEmail3("example3@domain.ua")); // true
console.log(isValidEmail3("bad email3@example3.com")); // false

// =================================== 04 ==================================
/*
  Напишіть функцію assessPlot, яка перевіряє назву садової ділянки та розраховує
  вартість її страхування. Назва ділянки повинна відповідати правилам ідентифікатора 
  JavaScript: вона може містити лише літери, цифри, символи підкреслення (_) або
  знаки долара ($) і не може починатися з цифри. Розрахуйте вартість страхування,
  використовуючи такі рівні: 
   - 2% для перших 1000 доларів;
   - 3% для наступних 4000 доларів;
   - 5% для будь-якої суми понад 5000 доларів.
  Поверніть об'єкт із значенням isValid (логічне значення) та значенням cost (число,
  округлене до 2 знаків після коми). Для рішення використайте тільки регулярні вирази.
*/
// Solution via if-else operator:
function assessPlot1(plotName, plotValue) {
  const isValid = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(plotName);

  let cost = 0;
  if (plotValue <= 1000) {
    cost = plotValue * 0.02;
  } else if (plotValue <= 5000) {
    cost = 1000 * 0.02 + (plotValue - 1000) * 0.03;
  } else {
    cost = 1000 * 0.02 + 4000 * 0.03 + (plotValue - 5000) * 0.05;
  }

  return { isValid, cost: parseFloat(cost.toFixed(2)) };
}
// Tests:
console.log(assessPlot1("gardenPlot", 500)); // { isValid: true, cost: 10 }
console.log(assessPlot1("_plot", 1000)); // { isValid: true, cost: 20 }
console.log(assessPlot1("9thPlot", 2000)); // { isValid: false, cost: 50 }
console.log(assessPlot1("plot123", 2500)); // { isValid: true, cost: 65 }

// Solution via tier‑based version (loop):
/* Тут ми визначаємо рівні в масиві та перебираємо їх у циклі. Таким чином,
  якщо правила страхування змінюються, то коригуємо лише корекцією визначення
  рівнів.
*/
function assessPlot2(plotName, plotValue) {
  const isValid = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(plotName);

  const tiers = [
    { limit: 1000, rate: 0.02 },
    { limit: 4000, rate: 0.03 },
    { limit: Infinity, rate: 0.05 },
  ];

  let remaining = plotValue;
  let cost = 0;

  for (let tier of tiers) {
    const amount = Math.min(remaining, tier.limit);
    cost += amount * tier.rate;
    remaining -= amount;
    if (remaining <= 0) break;
  }

  return { isValid, cost: parseFloat(cost.toFixed(2)) };
}
console.log(assessPlot2("$myPlot1", 5000)); // { isValid: true, cost: 140 }
console.log(assessPlot2("plot_A1", 3500)); // { isValid: true, cost: 95 }
console.log(assessPlot2("myGarden$", 7500)); // { isValid: true, cost: 265 }
console.log(assessPlot2("best-plot", 1500)); // { isValid: false, cost: 35 }

// =================================== 05 ==================================
/*
  Напишіть функцію countWords, яка підраховує кількість слів у реченні. При
  цьому в реченні може бути між словами декілька пробілів. У своєму рішенні
  використайте регулярні вирази.
*/
// Solution via loop:
function countWordsSimple(sentence) {
  // розібємо на слова з врахуванням декількох пробілів між словами
  const words = sentence.trim().split(/\s+/);

  return words.length;

  /* можна ускладнити собі життя і зробити так:
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    count++; // збільшуємо лічильник
  }
  return count; */
}
console.log(
  countWordsSimple("Can you count  the number of stars  in the night sky?"),
); // 11

// =================================== 06 ==================================
/* Напишіть код, який з рядка $100 отримає число та виведе його в консоль.
   Для рішення використайте тільки регулярний вираз.
*/
// Solution:
/* Застосування регулярного виразу str.match(/d+/) показує, якщо у рядку знайдено
   одну або декілька цифр, метод match() повертає масив усіх знайдених у рядку
   збігів, а індекс 0 - перший елемент масиву. У цьому випадку він поверне масив,
   що містить один елемент, який є числовою частиною "100" рядка "$100". А метод
   parseInt() конвертує витягнутий числовий рядок "100" у фактичне число.
*/
const myStr = "$100";
const myNumber = parseInt(myStr.match(/\d+/)[0]);
console.log(myNumber); // 100

// =============================== 07 ===================================
/* Оголосіть змінну register та проініціалізуйте її значенням як 
  'таОоооОddОО'. Напишіть код із використанням регулярного виразу, який
  перетворює цей рядок на вигляд: перша літера у верхньому регістрі, інші
  літери у нижньому регістрі. Виведіть результат роботи у консоль.
*/
const register = "taOOooOddOO";

// Solution via replace-method and regEx:
/*
  Регулярний вираз бере перший символ у першій групі (.) та решту символів в іншій 
  групі (.*). Параметр match представляє весь рядок, що збігся. Тут ^ використовується
  на початку, щоб гарантувати, що збіг починається з початку рядка, а $ використовується
  в кінці, щоб гарантувати, що збіг поширюється до кінця рядка. Таким чином, регулярний
  вираз захоплюватиме перший символ та решту рядка як окремі групи, не знаходячи жодних
  символів поза межами початку та кінця рядка.
*/
// const firstLetter = register[0].toUpperCase();
// const restOfTheString = register.substring(1).toLowerCase();
// const convertedString = firstLetter + restOfTheString;

const convertedString = register.replace(
  /^(.)(.*)$/,
  (match, firstLetter, restOfString) =>
    firstLetter.toUpperCase() + restOfString.toLowerCase(),
);
console.log(convertedString); // Taoooooddoo

// =============================== 08 ===================================
/* 
  Напишіть код, який виводить у консоль true, якщо рядок str містить
   вираз 'viagra' або 'XXX', інакше false. Функція має бути нечутливою
   до регістру.
*/
const testString1 = "Buy ViAgRA now.";
const testString2 = "free xxxxx";
const testString3 = "Red brown fox jumped over the lazy dog";

// Solution:
function containsWords(str) {
  const regex = /viagra|XXX/i;
  return regex.test(str);
}
console.log(containsWords(testString1)); // true
console.log(containsWords(testString2)); // true
console.log(containsWords(testString3)); // false

// =============================== 09 ===================================
/* Є рядок символів представлений у форматі rgb-кольору, наприклад
   'rgb(255, 255, 78)'. Необхідно вичленити з цього рядка символів
   одні числа та вивести їх у консоль через роздільник "-". Вирішення має
   бути реалізоване за допомогою регулярного виразу.
*/

let str2 = "rgb(255, 255, 78)";

// Solution via regEx:
let dashedNums = str2.match(/\d+/g).join("-");
console.log(dashedNums); // 255-255-78

// =============================== 13 ===================================
/* Підрахувати в рядку символів "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
   окрему кількість таких символів як r, k, t та вивести їх в консоль. 
   Вирішення має включати регулярний вираз.
*/
let str3 = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

console.log((str3.match(/r/g) || []).length); // 2 = кількість 'r'
console.log((str3.match(/k/g) || []).length); // 6 = кількість 'k'
console.log((str3.match(/t/g) || []).length); // 1 = кількість 't'

// Solution via function countChars:
function countChars(str, char) {
  // Створюємо регулярний вираз для пошуку символу char у рядку str. Флаг "g" означає глобальний пошук
  const regex = new RegExp(char, "g"); // Створюємо регулярний вираз для пошуку символу char
  /* Використовуємо match для пошуку всіх входжень символу char у рядку str.
    Якщо входження не знайдено, повертаємо порожній масив, щоб уникнути помилки
    при виклику length. Повертаємо довжину масиву, що відповідає кількості
    входжень символу char у рядку str.*/
  return (str.match(regex) || []).length;
}
console.log(countChars(str3, "r")); // 2
console.log(countChars(str3, "k")); // 6
console.log(countChars(str3, "t")); // 1

// =============================== 14 ===================================
/* Маємо рядок символів як слово-вираз str. Деякі слова в ньому
   повторяються. Замініть усі слова що повторяються 'apple' на 'orange'.
   Вирішення має бути через регулярний вираз.
*/
let str1 =
  "I like apple, I eat apple sometimes, moreover eating apple every day is good for health.";

// Solution:
let newStr = str1.replace(/apple/gi, "orange"); // 'g' - глобальний пошук, 'i' - ігнорування регістру
console.log(newStr);
// I like orange, I eat orange sometimes, moreover eating orange every day is good for health.

// =============================== 17 =================================
/*Анаграма рядка — це інший рядок символів, що містить ті амі символи,
  але порядок символів може бути іншим. Наприклад, abcd" і "dabc" є
  анаграмами один одного. Напишіть код, який еревірить, що два слова 
  "Mary" та "Army" є анаграмами один одному. Вирішення має включати
  обов'язково регулярні вирази.
*/
const str4 = "Mary";
const str5 = "Army";

// Solution via function areAnagrams:
function areAnagrams(str1, str2) {
  // Перетворюємо обидва рядки на нижній регістр та видаляємо всі пробіли
  const normalizedStr1 = str1.toLowerCase().replace(/\s+/g, "");
  const normalizedStr2 = str2.toLowerCase().replace(/\s+/g, "");
  // Сортуємо символи в обох рядках
  const sortedStr1 = normalizedStr1.split("").sort().join("");
  const sortedStr2 = normalizedStr2.split("").sort().join("");
  // Порівнюємо відсортовані рядки
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams(str4, str5)); // true
// або можна зробити так:
if (areAnagrams2(str4, str5)) {
  console.log(`${str4} and ${str5} are anagrams.`);
} else {
  console.log(`${str4} and ${str5} are not anagrams.`);
}

// =============================== 12 ===================================
/* Є рядок символів представлений у форматі rgb-кольору, наприклад
   'rgb(255, 255, 78)'. Необхідно вичленити з цього рядка символів
   одні числа та вивести їх у консоль через роздільник "-". Вирішення має
   бути через регулярний вираз.
*/
let str6 = "rgb(255, 255, 78)";

// Solution:
const filteredStr = (string) =>
  string.replace(/, /g, "-").replace(/rgb/g, "").replace(/[()]/g, "");

let dashedStr = filteredStr(str6);
console.log(dashedStr); // 255-255-78

// 😒============================== 04 ===================================
/* Створіть функцію alternateCase, яка приймає рядок літер на вхід і
   повертає новий рядок, де регістри чергуються. Перший символ має бути
   великим, другий — малим, третій — великим, i т. д. Якщо символи не є
   літерами то їх регістр не змінюється. Задачу вирішіть з використанням
   регулярних виразів.
*/
// Solution:
function alternateCase3(str) {
  return str.replace(/./g, (char, i) => {
    // якщо символи букви
    if (/[a-zA-Z]/.test(char)) {
      return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }
    return char; // якщо символи є небукви
  });
}
console.log(alternateCase3("BARABULKA")); // BaRaBuLkA
