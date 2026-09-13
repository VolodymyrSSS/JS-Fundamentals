console.log("Topic: Strings,  JS part 2");

// 😒============================== 01 ===================================
/* Як відомо в JS не існує окремого типу для одного символу. Але як
   отримати перший символ рядка? А як отримати останній символ рядка?
   Покажіть декілька варіантів.
*/
const str1 = "Hello dude";

// solution via for..of loop:
for (let char of str1) {
  console.log(char); // H,e,l,l,o, ,d,u,d,e (char becomes "H", then "e", then "l"..)
}

// solution via str[pos] for the first character:
let firstCharacter = str1[0];
console.log(firstCharacter); // H

// solution via str.at(pos) method for the first character:
let firstChar = str1.at(0);
console.log(firstChar); // H

// solution via prop length for the last character:
console.log(str1.length); // 10
let lastCharacter = str1.length - 1; // index for the last character
console.log(str1[lastCharacter]); // e

// solution via str.at(pos) method for the last character:
console.log(str1.at(-1)); // e

// 😒============================== 02 ===================================
/* Створіть рядок message = "ten times two totally is 20", використовуючи 
   такі змінні: a = 10, b = 2 та шаблонний літерал.
*/
// Solution:
let a = 10;
let b = 2;

let message = `${a} times ${b} totally is ${a * b}`;
console.log(message); // "10 times 2 totally is 20"

// 😒============================== 03 ===================================
/*У нас є є два рядки Unicode, які виглядають однаково («mañ»), але
  закодовані по‑різному, ось:
  var str1 = '\u006d\u0061\u00f1';     // "ma" + ñ (U+00F1)
  var str2 = '\u006d\u0061\u006e\u0303'; // "ma" + "n" + ◌̃ (U+0303 combining tilde)
  Тобто, str1 використовує precomposed character (ñ), а str2 використовує
  decomposed form: літера n + комбінуючий символ тильди. Хоч візуально
  вони однакові, але при прямому порівнянні str1 === str2 → false.
  Як можна їх порівняти щоб str1 === str2 → true?
*/
var str22 = "\u006d\u0061\u00f1";
var str23 = "\u006d\u0061\u006e\u0303";
// Solution:
/*  У Unicode одна й та сама літера може бути закодована кількома способами:
  - NFC (Canonical Composition): складена форма, наприклад ñ як один символ U+00F1.
  - NFD (Canonical Decomposition): розкладена форма, наприклад n (U+006E) +
    комбінуючий символ тильди (U+0303).
  Є також NFKC та NFKD, які роблять додаткові сумісні перетворення (наприклад,
  перетворюють символи з різних алфавітів, що виглядають однаково).
  Щоб порівняти такі рядки, треба привести їх до однакової Unicode Normalization
  Form. У JavaScript є метод .normalize():
  "NFC" → нормалізує до складених символів (precomposed).
  "NFD" → нормалізує до розкладених символів (decomposed).
  Тобто метод .normalize() у JavaScript приводить рядки до стандартної форми
  Unicode, або .normalize() дозволяє порівнювати рядки, які виглядають однаково,
  але закодовані по‑різному.
*/
console.log(str22.normalize("NFC") === str23.normalize("NFC")); // true
/* Такий результат тому, що .normalize("NFC") перетворює обидва рядки у
стандартну форму і рядок "mañ" у будь‑якому записі буде порівнюватися як
однаковий рядок. */

// 😒============================== 04 ===================================
/* Знайдіть позиції усіх одинакових підрядків у заданому рядку.
   Що робити, якщо нам потрібно перевірити лише наявність підрядку,
   та не потрібна його позиція?
*/
const str2 = "As sly as a fox, as strong as an ox";

// Solution via indexOf(substr, pos) method finding all occurrences:
/* Цей метод шукає підрядок (або ціль) у рядку str, починаючи з заданої
  позиції pos, і повертає позицію, де було знайдено збіг, або -1, якщо
  нічого не знайдено. Необов'язковий другий параметр (pos) дозволяє нам
  розпочати пошук із заданої позиції.*/
let target = "as"; // визначимо підрядок, що будем шукати
let pos = 0; // починати пошук з першої позиції
// до тих пір доки є символи в рядку str
while (true) {
  let foundPos = str2.indexOf(target, pos); // визначаємо позицію знайденого підрядка
  if (foundPos == -1) break; // якщо немає виходимо з пошуку
  console.log(`Found at ${foundPos}`); // виводимо позицію підрядка
  pos = foundPos + 1; // продовжуємо пошук підрядка з наступної позиції
}
/* Потрібно мати на увазі, що існує незручність з методом indexOf у if-тестах:
   якщо знайдено збіг у початковій позиції (це 0), отератор if вважає "0" як
   falsy-значення. У такому випадку слід перевірити наявність -1, як у цьому прикладі:
   let str = 'Widget with id';
   if (str.indexOf('Widget') != -1) {
    console.log('We found it'); // бо підрядок знайдений на pos = 0
   } */

// отже рішення з використанням -1 може виглядати так:
let pos2 = -1;
while ((pos2 = str2.indexOf(target, pos2 + 1)) != -1) {
  console.log(pos2);
}

/* Також існує подібний метод str.lastIndexOf(substr, pos), який
  виконує пошук від кінця рядка до його початку. Тобто він проходить
  входження у зворотному порядку. */

// Solution via includes method if we only need to find the match:
/* Цей метод повертає значення true/false залежно від того, чи рядок містить
   підрядок усередині нього. */
console.log(str2.includes("as")); // true
/* Необов'язковий другий аргумент str.includes(target, pos) – це позиція, з якої
  потрібно почати пошук. Наприклад, для нашого завдання переконайтеся, що
  підрядок знаходиться після 16-ї позиції. */
console.log(str2.includes("as", 16)); // true
console.log(str2.includes("as", 30)); // false

// Solution via startsWith method if we only need to find the match:
console.log(str2.startsWith("as")); // false
console.log(str2.startsWith("As")); // true
console.log(str2.startsWith("as", 17)); // true

// solution via endsWith method if we only need to find the match:
console.log(str2.endsWith("as", 17)); // false
console.log(str2.endsWith("as", 19)); // true

// 😒============================== 05 ===================================
/* В нас є рядок символів "Ababagalamaga". Покажіть 3 методи як можна
   отримати підрядок. Вкажіть на особливості кожного з них.
*/
const printingHouse = "Ababagalamaga";

// solution via slice(start, end) methods:
// метод повертає частину рядка від початку start до кінця end (але не враховуючи end), тому:
let substring1 = printingHouse.slice(0, 5);
console.log(substring1); // Ababa
console.log(printingHouse.slice(0, 1)); // від 0 до 1, але не включаючи 1, а тому символ на позиції 0 є 'A'
// якщо не визначений другий аргумент, метод йде до самого кінця рядка, ось приклад:
let substring2 = printingHouse.slice(5);
console.log(substring2); // galamaga
// відємне значення для start/end також можливий. У цьому випадку метод іде від кінця рядка
let substring3 = printingHouse.slice(-10, -6);
console.log(substring3); // baga

// Solution via str.substring(start [, end]) methods:
// метод повертає частиною рядка між start та end (не включаючи end) подібно методу slice.
let substring4 = printingHouse.substring(0, 5); // Ababa
console.log(substring4); // Ababa
console.log(printingHouse.substring(0, 1)); // від 0 до 1, але не включаючи 1, а тому символ на позиції 0 є 'A'
// якщо не визначений другий аргумент, метод йде до самого кінця рядка, ось приклад:
let substring5 = printingHouse.substring(5);
console.log(substring5); // galamaga
// цей метод майже ідентичний методу slice, але він дозволяє значенню start бути більшим ніж end
// У цьому випадку просто здійснюється перекидання між start та end:
let substring6 = printingHouse.substring(3, 7);
console.log(substring6); // baga
let substring7 = printingHouse.substring(7, 3);
console.log(substring7); // baga
// також цей метод не дозволяє використовувати відємні значення (на відміну від slice), значення сприймаються як "0"

// Solution via outdated str.substr(start [, length]) methods:
// Цей метод повертає частину рядка від start на визначену довжину в аргументі length:
let substring8 = printingHouse.substr(0, 5);
console.log(substring8); // Ababa
console.log(printingHouse.substr(0, 1)); // від 0-ї позиції отримати символи до 1го символа -> 'A'
// перший аргумент може мати відємне значення, і метод йде вже від кінця:
let substring9 = printingHouse.substr(-8, 8);
console.log(substring9); // galamaga

// 😒============================== 06 ===================================
/* Напишіть код, який перевіряє довжину рядка str, і якщо вона перевищує
   maxlength – замінює кінець str на "...", так щоб її довжина дорівнювала
   maxlength. Результатом має бути (за потреби) обрізаний рядок. Виведіть
   рядок у консоль.
*/
// Solution via .slice():
function truncateString1(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + "...";
  }
  return str;
}
const testString5 = "Here's what I would like to say on this subject:";
const maxLength1 = 20;
console.log(truncateString1(testString5, maxLength1)); // Here's what I wou...

// відємні значення для методу slice також можливе
function truncateString2(str, maxlength) {
  return str.length > maxlength ? str.slice(0, -3) + "..." : str;
}
const testString6 = "Let's talke about JavaScript and its features.";
const maxLength2 = 20;
console.log(truncateString2(testString6, maxLength2)); // Let's talke about Ja...

// Solution via conditional (ternary) operator:
function truncateString3(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 3) + "..." : str;
}
const testString7 = "Boom in the room.";
const maxLength3 = 20;
console.log(truncateString3(testString7, maxLength3)); // Boom in the room.

function truncateString4(str, maxlength) {
  return str.length > maxlength ? str.substring(0, maxlength - 3) + "..." : str;
}
const testString8 = "Hello everyone!";
const maxLength4 = 8;
console.log(truncateString4(testString8, maxLength4)); // Hello...

// 😒============================== 07 ===================================
/* Оголосіть змінну register та проініціалізуйте її значенням як 
  'таОоооОddОО'. Напишіть код, який перетворює цей рядок на вигляд: 
   перша літера у верхньому регістрі, інші літери у нижньому регістрі.
   Виведіть результат роботи у консоль.
*/
const register = "taOOooOddOO";

// Solution via .slice():
const convertedString1 =
  register.slice(0, 1).toUpperCase() + register.slice(1).toLowerCase();
console.log(convertedString1); // Таооооddоо

// Solution via .charAt() and .slice():
const convertedString2 =
  register.charAt(0).toUpperCase() + register.slice(1).toLowerCase();
console.log(convertedString2); // Таооооddоо

// Solution via .substring():
const firstLetter = register[0].toUpperCase();
const restOfTheString = register.substring(1).toLowerCase();
const convertedString3 = firstLetter + restOfTheString;
console.log(convertedString3); // Таооооddоо

// Solution via .split(), for-loop and .join():
const charArray = register.split(""); // конвертуємо рядок у масив символів
charArray[0] = charArray[0].toUpperCase(); // берем перший символ та переводимо у верхній регістр

// проходимось по решті елементів масиву (решта символів) і переводимо їх у нижній регістр
for (let i = 1; i < charArray.length; i++) {
  charArray[i] = charArray[i].toLowerCase();
}
const convertedString4 = charArray.join(""); // з'єднуємо елементи в єдиний рядок із конвертацією в рядок
console.log(convertedString4); // Таооооddоо

// Solution via spread operator and .join():
const [first, ...rest] = [...register]; // Розпаковуємо рядок у масив символів

// Формуємо новий рядок: перша літера у верхньому регістрі,
// решта у нижньому із одночасною конвертацією у рядок
const convertedString5 = first.toUpperCase() + rest.join("").toLowerCase();
console.log(convertedString5); // Таооооddоо

// 😒============================== 08 ===================================
/* Напишіть код, який запитує користувача ввести логін використоуючи
   "prompt". Якщо відвідувач вводить "Admin", то далі запитується
   пароль, якщо вводить порожній рядок або Esc – показує "Canceled",
   якщо інший рядок – показує "I don’t know you".
   Пароль перевіряється наступним чином: якщо він дорівнює "TheMaster",
   то покажіть 'Welcome!', невірний пароль – покажіть "Wrong password".
   Для порожнього рядка або скасованого введення відобразіть “Canceled”.
   Для рішення використовуйте вкладені блоки if. Зверніть увагу на
   загальну читабельність коду.
*/
// let userName1 = prompt("Who's there?", ""); // запитуєм логін
let userName1 = null;

// Solution via if..else operators:
// перевіряєм логін
if (userName1 === "Admin") {
  let pass = prompt("Enter password?", ""); // запитуєм пароль
  // перевіряєм пароль
  if (pass === "TheMaster") {
    console.log("Welcome!");
  } else if (pass === "" || pass === null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if (userName1 === "" || userName1 === null) {
  console.log("Canceled");
} else {
  console.log("I don't know you");
}

// Solution via swith operator:
/* треба пам’ятати: switch порівнює значення з кейсами, і він не вміє
  напряму працювати з умовами типу === "" || === null. Тому найзручніше
  зробити два рівні switch: один для логіна, другий для пароля.
*/
switch (userName1) {
  // Якщо логін "Admin", запитуємо пароль
  case "Admin":
    let pass = prompt("Enter password?", ""); // запитуємо пароль
    switch (pass) {
      case "TheMaster":
        console.log("Welcome!");
        break;
      case "":
      case null:
        console.log("Canceled");
        break;
      default:
        console.log("Wrong password");
    }
    break;

  case "":
  case null:
    console.log("Canceled");
    break;

  default:
    console.log("I don't know you");
}

// 😒============================== 09 ===================================
/* Нижче показаний цикл for. Дайте відповідь що буде виведено в  консоль
   та поясніть чому? 
*/
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0); // 4 -> 4 рази
}
// Solution:
/* Kласичною пасткою тут є нульова затримка. setTimeout(callback, 0) не означає,
  що зворотний виклик спрацює через нуль мілісекунд. 
  Ось що відбувається на стороні циклу подій:
  Поточний стек викликів встановлюється на перший setTimeout(). Але задача
  windows.setTimeout() вважається як веб-API (макрозадача для кращого неблокуючого
  вводу/виводу). Тому стек викликів надсилає цю частину коду до відповідної веб-AP
  задачі: а саме, через 0 мілісекунд зворотний виклик (тут анонімна функція) буде
  надіслана до черги макрозадач (не до стеку викликів). Як тільки стек викликів
  звільнився, цикл for може продовжити до другого setTimeout … (і так повторити до
  i < 4)… Коли цикли завершаться (i === 4), двигун JS може виконувати чергу зворотніх
  викликів одну за одною: кожен console.log(i) виведе 4.
*/

// 😒============================== 10 ===================================
/* Напишіть код, який виводить у консоль true, якщо рядок str містить
   вираз 'viagra' або 'XXX', інакше false. Функція має бути нечутливою
   до регістру.
*/
const testString1 = "Buy ViAgRA now.";
const testString2 = "free xxxxx";
const testString3 = "Red brown fox jumped over the lazy dog";
const testString4 = "To find the reason, go into the root.";

// Solution via .includes("target"):
function containsWords1(str) {
  const loweredCaseStr = str.toLowerCase(); // робимо рядок нечутливий до регістру

  return loweredCaseStr.includes("viagra") || loweredCaseStr.includes("xxx");
}
console.log(containsWords1(testString1)); // true
console.log(containsWords1(testString3)); // false

// Solution via .indexOf():
function containsWords2(str) {
  const loweredCaseStr = str.toLowerCase();
  return (
    loweredCaseStr.indexOf("viagra") !== -1 ||
    loweredCaseStr.indexOf("xxx") !== -1
  );
}
console.log(containsWords2(testString2)); // true
console.log(containsWords2(testString4)); // false

// 😒============================== 11 ===================================
/* Маємо змінну age та умови за якими визначається можливість голосувати
   особі відповідно віку з використанням оператора if..else. Замініть
   багатослівні оператори if..else для простих умов одним рядком.
*/
let age = 18;
let canVote1;
if (age >= 18) {
  canVote1 = "Yes";
} else {
  canVote1 = "No";
}

// Solution via ternary operator:
let canVote2 = age >= 18 ? "Yes" : "No";
console.log("You can vote : " + canVote2); // You can vote : Yes

// 😒============================== 12 ===================================
/* Замініть умову для виконання з оператором if одним рядком щоб умова або
   виконувалась або ні.
*/
let isAdmin = true;
if (isAdmin) {
  console.log("Admin privileges granted.");
}

// Solution via && operator:
isAdmin && console.log("Admin privileges granted."); // Admin privileges granted.

let isGuest = false;
isGuest && console.log("Guest access."); // No output

// 😒============================== 13 ===================================
/* Підрахувати в рядку символів "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
   окрему кількість таких символів як r, k, t та вивести їх в консоль.
*/
let str5 = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";

// Solution via .split():
let chars = [...str5]; // конвертуємо рядок у масив символів
// можна і так Array.from(str5);
// Метод .split("r") розбиває рядок на частини, де роздільником виступає символ "r".
const splitedArray = str5.split("r"); // ["dskjdhfkjshdfkjhsdkju", "eytei", "uyiqywehjkh"]
console.log(splitedArray.length - 1); // 2
console.log(str5.split("k").length - 1); // 6
console.log(str5.split("t").length - 1); // 1

// Solution via function using .filter():
/* [...] перетворює рядок у масив символів. Наприклад: "abc" → ["a","b","c"].
.filter(symbol => symbol === char) залишає тільки ті елементи, які збігаються 
з потрібним символом. А властивість .length рахує кількість таких елементів.*/
const charTypeCount = (str, char) =>
  [...str].filter((symbol) => symbol === char).length;
console.log(charTypeCount(str5, "r"));
console.log(charTypeCount(str5, "k"));
console.log(charTypeCount(str5, "t"));

// 😒============================== 14 ===================================
/* Є речення як рядок слів string. Напишіть код, який переставить
   кожне слово речення та кожен символ слова навпаки.
*/
let string1 = "Welcome to this Javascript task!";

// Solution via for loop:
/* Логіка через два рівні циклів — один для речення, другий для слова:
  1. Зовнішній цикл: іде по кожному символу речення, збирає слово.
  2. Внутрішній цикл: коли слово закінчилось (пробіл або кінець
     рядка), реверсує символи цього слова.
  3. Потім додаємо реверсоване слово до результату у зворотному порядку.
  4. Після завершення зовнішнього циклу ще раз реверсуємо останнє слово
     бо після нього немає пробілу.
  5. Виводимо перевернуте речення у консоль.
*/
let reversedSentence1 = ""; // тут буде зберігатись реверсоване речення
let currentWord = ""; // тут буде зберігатись поточне слово

// проходимо по кожному символу речення
for (let i = 0; i < string1.length; i++) {
  // якщо символ не пробіл, додаємо його до поточного слова
  if (string1[i] !== " ") {
    // збираємо слово символ за символом
    currentWord += string1[i];
  } else {
    // коли зустріли пробіл — реверсуємо слово другим циклом
    let reversedWord = ""; // тут буде зберігатись реверсоване слово
    // проходимо по кожному символу поточного слова у зворотньому порядку
    for (let j = currentWord.length - 1; j >= 0; j--) {
      reversedWord += currentWord[j]; // додаємо символи у зворотньому порядку
    }
    // додаємо реверсоване слово на початок речення тим самим реверсуємо порядок слів у реченні
    reversedSentence1 = reversedWord + " " + reversedSentence1;

    currentWord = ""; // обнуляємо для наступного слова
  }
}
// ще обробляємо останнє слово (бо після нього немає пробілу)
let reversedWord = "";
for (let j = currentWord.length - 1; j >= 0; j--) {
  reversedWord += currentWord[j];
}
reversedSentence1 = reversedWord + " " + reversedSentence1;

console.log(reversedSentence1.trim()); // !ksat tpircsavaJ siht ot emocleW

// Solution via for loop and .split():
/* Тут зовнішній цикл працює саме з масивом слів (а не символів).
   Внутрішній цикл реверсує символи кожного слова.
   Логіка проста й прозора: слова → символи.*/
let words = string1.split(" "); // розділяємо речення на слова
let reversedSentence2 = ""; // тут буде зберігатись реверсоване речення

// зовнішній цикл — по словах у зворотному порядку
for (let i = words.length - 1; i >= 0; i--) {
  let word = words[i];
  let reversedWord = "";

  // внутрішній цикл — реверс символів у слові
  for (let j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }

  // додаємо перевернуте слово до речення у зворотному порядку тим самим реверсуємо порядок слів у реченні
  reversedSentence2 += reversedWord + " ";
}
console.log(reversedSentence2.trim()); // !ksat tpircsavaJ siht ot emocleW

// Solution via chain of arrays methods:
/* 1. Конвертуєм речення в масив слів з пробілами;
   2. Інвертуємо порядок слів речення;
   3. Конвертуєм символи в слові на масив символів (букв);
   4. Інвертуємо порядок символів у слові;
   5. об'єднуємо назад  у рядок;
*/
let reversedSentence3 = string1
  .split(" ")
  .reverse()
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
console.log(reversedSentence3); // !ksat tpircsavaJ siht ot emocleW

// 😒============================== 15 ==================================
/* Маємо рядок символів як слово-вираз str. Деякі слова в ньому
   повторяються. Замініть усі слова що повторяються 'apple' на 'orange'.
*/
let str6 =
  "I like apple, I eat apple sometimes, moreover eating apple every day is good for health.";

// Solution via .replaceAll():
let newStr2 = str6.replaceAll("apple", "orange");
console.log(newStr2);

// Solution via for-loops and .split(), .includes(), .replace():
let words2 = str6.split(" "); // split the string into words
console.log(words2); // ['I', 'like', 'apple,', 'I', 'eat', 'apple', 'sometimes'...]
// iterates through the words
for (let i = 0; i < words2.length; i++) {
  // Check if the word contains 'apple'
  if (words2[i].includes("apple")) {
    // Replace 'apple' with 'orange' in the current word
    words2[i] = words2[i].replace("apple", "orange");
    // or
    // words2[i] = words2[i].replace(/apple/g, 'orange');
  }
}
// joins the words back into a string
newStr3 = words2.join(" ");
console.log(newStr3);
// I like orange, I eat orange sometimes, moreover eating orange every day is good for health.

// 😒============================== 16 ==================================
/* Паліндром — це слово, фраза або інший тип рядка символів, який можна
   прочитати як з ліва направо так і з права на ліво. Наприклад, “racecar”
   і “Anna” є паліндромами. A от “Tisch” і “Juan” не є паліндромами,
   оскільки вони не читаються однаково з ліва направо і з права наліво.
   Напишіть код, який покаже які з вказаних слів є поліндромом, а які ні.
*/

let testWord1 = "Racecar";
let testWord2 = "Tisch";
let testWord3 = "Anna";
let testWord4 = "Juan";

// Solution via chain of methods like .split(), .reverse(), .join(""):
if (
  testWord1.toLowerCase() ===
  testWord1.toLowerCase().split("").reverse().join("")
) {
  console.log(`The ${testWord1} is Palindrome`); // The Racecar is Palindrome
} else {
  console.log(`The ${testWord1} is not Palindrome`);
}
if (
  testWord2.toLowerCase() ===
  testWord2.toLowerCase().split("").reverse().join("")
) {
  console.log(`The ${testWord2} is Palindrome`);
} else {
  console.log(`The ${testWord2} is not Palindrome`); // The Tisch is not Palindrome
}

// Solution via arrow function and ternary operator:
const palindrome = (str) => {
  str = str.toLowerCase(); // приводимо рядок до нижнього регістру, щоб не враховувати регістр

  // конвертуємо в масив, перевертаємо та конвертуємо назад в рядок
  return str === str.split("").reverse().join("")
    ? `The ${str} is Palindrome`
    : `The ${str} is not Palindrome`;
};

console.log(palindrome(testWord3)); // The anna is Palindrome
console.log(palindrome(testWord4)); // The juan is not Palindrome

// 😒============================== 17 =================================
/*Анаграма рядка — це інший рядок символів, що містить ті амі символи,
  але порядок символів може бути іншим. Наприклад, abcd" і "dabc" є
  анаграмами один одного. Напишіть код, який перевірить, що два слова 
  "Mary" та "Army" є анаграмами один одному.
*/
const str3 = "Mary";
const str4 = "Army";

// Solution via for-loop and chain of arr methods:
let cleanedStr3 = ""; // тут буде зберігатись рядок без пробілів та в нижньому регістрі
// очищаємо рядки від пробілів та переводимо у нижній регістр
for (let i = 0; i < str3.length; i++) {
  if (str3[i] !== " ") {
    cleanedStr3 += str3[i].toLowerCase();
  }
}
let cleanedStr4 = "";
for (let i = 0; i < str4.length; i++) {
  if (str4[i] !== " ") {
    cleanedStr4 += str4[i].toLowerCase();
  }
}
// тепер можна конвертувати в масив і відсортувати символи в очищених рядках та конвертувати назад у рядок
const sortedStr3 = cleanedStr3.split("").sort().join(""); // amry
const sortedStr4 = cleanedStr4.split("").sort().join(""); // amry

// перевіримо чи відсортовані рядки однакові
if (sortedStr3 === sortedStr4) {
  console.log(`${str3} and ${str4} are anagrams`);
} else {
  console.log(`${str3} and ${str4} are not anagrams`);
}

// Solution via flag - check if the cleaned strings have the same characters:
// перевірка довжини очищених рядків
if (cleanedStr3.length !== cleanedStr4.length) {
  console.log(`${str3} and ${str4} are not anagrams`);
} else {
  let areAnagrams = true;
  for (let i = 0; i < cleanedStr3.length; i++) {
    // перевірка чи рядок має той самий символ що і в іншому рядку
    if (cleanedStr3.indexOf(cleanedStr4[i]) === -1) {
      areAnagrams = false;
      break;
    }
  }
  if (areAnagrams) {
    console.log(`${str3} and ${str4} are anagrams`);
  } else {
    console.log(`${str3} and ${str4} are not anagrams`);
  }
}

// Solution via arrow function creation and ternary operator:
const areAnagrams1 = (first, second) => {
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
};
console.log(areAnagrams(str3, str4)); // true

// 😒============================== 18 =================================
/* Намалюйте 7-рівневу піраміду з символів "х" або цифр в консолі, як
   показано нижче:
                  x        або   1
                  xx       або   22
                  xxx      або   333
                  xxxx     або   4444
                  ....     або   ....
*/

// Solution via two for loops:
for (let i = 1; i <= 7; i++) {
  let row = ""; // будуємо 7 рядків/рівнів
  // додаємо до кожного рядка символи 'x' відповідно до поточного номера рядка
  for (let j = 1; j <= i; j++) {
    row += "x";
  }
  console.log(row); // виводимо рядок у консоль
}

/*або можна зробити так
 for (let i = 1; i <= 10; i++) {
    let charX = 'x';
    for (let j = 1; j < i; j++) {
      charX += 'x';
    }
    console.log(charX);
 } */

// Solution via .repeat() method:
for (let i = 1; i <= 7; i++) {
  console.log("x".repeat(i));
}

// для відображення цифр замість символів 'x' можна зробити так:
for (let i = 1; i <= 7; i++) {
  let row = "";
  //  будуємо кожен ряд додаючи значення номера рядка "і"
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}
/* переміщаючись через кожну ітерацію зовнішнього циклу, кількість цифр, 
  доданих до рядка, збільшується на 1, а значення цифри відповідає номеру
  поточного рядка.*/

// 😒============================== 19 ===================================
/* Дано рядок. Вам потрібно вивести лише буквенні символи, ігноруючи інші,
   символи та знаки. Напишіть програму, яка зчитує рядок зі стандартного
   вводу та виводить лише алфавітно-буквені символи.
   Отже, якщо на вхід отримаємо рядок типу: He-ll0,W0rl#d! то на виході
   ми повинні отримати рядок HellWrld - тільки літери без цифр та знаків.
*/
// Solution:
/* Підключаємо модуль fs для читання вводу для середовища Node.js як 
   const fs = require("fs"); і далі зчитуємо ввід як рядок типу
   const input = fs.readFileSync(0, "utf8").trim();   або: */
const input5 = "He-ll0,W0rl#d!";
let result2 = ""; // Змінна для результату

// Перебираємо кожен символ рядка
for (let i = 0; i < input5.length; i++) {
  const ch = input5[i]; // поточний символ

  // Перевіряємо, чи символ є літерою (A–Z або a–z)
  if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
    result2 += ch; // додаємо до результату
  }
}
console.log(result2); // HellWrld

// Solution via .split(), .filter() and .join():
const input6_1 = "C8*od,dy@.Te#c4h";
const result3 = input6_1
  .split("") // розбиваємо рядок на масив символів
  .filter((ch) => (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) // залишаємо тільки літери
  .join(""); // з’єднуємо назад у рядок

console.log(result3);

// 😒============================== 20 ===================================
/* Створення мистецької рамки використовуючи символи @, % та . . Отже, дано
  завдання створити мистецьку картинну рамку. Довжина та ширина рамки будуть
  задані як ціле число, і ви повинні намалювати заданий візерунок типу цього:
      %@@@@@%
      %.....%
      %.....%
      %.....%
      %.....%
      %@@@@@%
  Напишіть програму, яка зчитує довжину та ширину картини як натуральне число
  зі стандартного вводу. В результаті виведіть потрібний візерунок для картини
*/
// Solution:
/* Це приклад ASCII‑графіки, де треба побудувати рамку з символів %, @ і .
  залежно від заданої довжини. 
  ASCII‑графіка (або ASCII‑art) — це мистецтво створення зображень, малюнків чи
  візерунків за допомогою звичайних символів тексту — літер, цифр і знаків пунктуації.
  Назва походить від ASCII — стандарту кодування символів, який визначає, як
  комп’ютери зберігають і відображають текст. Раніше такі малюнки часто використовували
  в консолях, старих іграх або для прикрас у програмному коді. Сьогодні це радше
  творчий спосіб показати, що навіть простий текст може бути «візуальним».
  Тобто, коротко: ASCII‑графіка — це малювання символами замість пікселів.  
  Алгоритм рішення:
  1. Зчитати число n — розмір картини (кількість рядків і стовпців).
  2. Перший і останній рядок складаються з %, потім @ повторюється n‑2 рази, і знову %.
  3. Усі проміжні рядки мають %, потім . повторюється n‑2 рази, і знову %.
  4. Вивести всі рядки послідовно.
*/
/* Підключаємо модуль fs для читання вводу як const fs = require("fs");
далі зчитуєм дані як const input = fs.readFileSync(0, "utf8").trim().split("\n");
і потім зчитуємо розмір картини як const n = parseInt(input[0]); або: */

const n = 7; // задаємо вручну розмір мистецької рамки

// Формуємо верхній рядок: % + @ повторюється (n-2) разів + %
const top = "%" + "@".repeat(n - 2) + "%";

// Формуємо середній рядок: % + . повторюється (n-2) разів + %
const middle = "%" + ".".repeat(n - 2) + "%";

// Виводимо верхній рядок
console.log(top);

// Виводимо (n - 2) середніх рядків
for (let i = 0; i < n - 2; i++) {
  console.log(middle);
}

// Виводимо нижній рядок (такий самий, як верхній)
console.log(top);
/*    %@@@@@%  - отримаємо ось таку рамку
      %.....%
      %.....%
      %.....%
      %.....%
      %.....%
      %@@@@@%  */

// 😒============================== 21 ===================================
/*Пари голосних. Завдання — підрахувати кількість пар голосних у послідовності
  рядків. Ви продовжуватимете вводити рядки, доки не буде введено символ
  решітки (#). Для кожного рядка підрахуйте всі пари послідовних голосних,
  враховуючи як великі, так і малі літери. Виведіть кожну пару на новому рядку,
  а потім загальну кількість пар у кінці. Отже, якщо на вхід отримуємо рядок
  типу Why so serious? а на іншому символ #, то на виході отримаємо пари голосних
  io та ou і їх кількість у кінці - 2.
*/
// Solution:
/* Алгоритм рішення:
   1. Зчитати всі рядки з вводу, розділені символом нового рядка.
   2. Перевіряти кожен рядок, поки не зустрінемо #.
   3. Для кожного рядка:
      - пройтись по символах від початку до кінця;
      - перевірити кожну пару сусідніх символів;
      - якщо обидва символи — голосні (a, e, i, o, u, незалежно від регістру),
      то вивести пару.
   4. Підрахувати кількість пар і вивести це число після всіх пар.
*/
/* Зчитуємо весь ввід як один рядок, розділяємо на масив рядків
  const fs = require("fs");
  const input = fs.readFileSync(0, "utf8").trim().split("\n"); або: */

const input6 = ["Heelloo, Woorld!", "Learning to Coode on Coody, Tech", "#"];

// Допоміжна функція для перевірки, чи символ є голосним
function isVowel(ch) {
  return "aeiouAEIOU".includes(ch);
}

let totalPairs = 0; // загальний лічильник пар голосних

// Проходимо по кожному рядку вводу
for (let line of input6) {
  if (line === "#") break; // Якщо рядок дорівнює "#", зупиняємо цикл

  // Перевіряємо всі сусідні символи в рядку
  for (let i = 0; i < line.length - 1; i++) {
    let first = line[i]; // Перший символ пари
    let second = line[i + 1]; // Другий символ пари

    // Якщо обидва символи — голосні
    if (isVowel(first) && isVowel(second)) {
      console.log(first + second); // Виводимо пару
      totalPairs++; // Збільшуємо лічильник
    }
  }
}
// Після завершення обробки всіх рядків виводимо загальну кількість пар
console.log(totalPairs);
