console.log('Topic: Primitive Data Types');

// ===========================Task 01======================================================
// UA: Оголосіть дві змінні: admin та name. Надайте значення змінній name
//     ваше ім'я. Скопіюйте це значення змінній admin та виведіть його в консоль.
// EN: Declare two variables: admin and name. Set the variable name to your
//     name. Copy this value to the admin variable and print it to the console.

// solution:
// let name = 'Volodymyr';
// let admin = name;
// console.log(admin); // Volodymyr
// ==========================================================================================

// ===========================Task 02========================================================
// UA: Призначте по загальнопринятим правилам створення констант: константі
//     червоного кольору значення "#F00", константі зеленого кольору
//     значення "#0F0", константі синього колору значення "#00F" і константі
//     оранжевого кольору значення "#FF7F00".
//     Створіть змінну "color" та динамічно задавайте їй різні значення, 
//     виводячи їх кожного разу в консоль. Так, першим значенням задайте 
//     значення оранжевого кольору. Потім присвойте значення зеленого
//     кольору і також виведіть його в консоль.
// EN: According to the generally accepted rules for creating constants, assign
//     the value "#F00" to the red color constant, the value "#0F0" to the green
//     color constant, the value "#00F" to the blue color constant, and the value
//     "#FF7F00" to the orange color constant. 
//     Create a variable "color" and dynamically assign different values ​​to it,
//     printing them to the console each time. So, set the first value to orange.
//     Then assign a value to green and print that to the console as well.

// solution via const:
// const RED_COLOR = '#F00';
// const GREEN_COLOR = '#0F0';
// const BLUE_COLOR = '#00F';
// const ORANGE_COLOR = '#FF7F00

// solution via let:
// let color = ORANGE_COLOR;
// console.log(color); // '#FF7F00'
// color = GREEN_COLOR;
// console.log(color); // '#0F0'
// ==========================================================================================

// ===========================Task 03========================================================
// UA: Із загального курсу математики відомо, що ділити на нуль неможна.
//     Проте в JS це можна зробити і в результаті ми отримаємо значення
//     Infinity. В JS oкрім звичайних чисел, існують так звані «спеціальні
//     числові значення», які такожн належать до цього типу даних до яких крім
//     Infinity, належить -Infinity та NaN. Напишіть, як можна отримати
//     значення -Infinity, покажіть декілька способів як отримати NaN. Ви
//     знаєте виключення для NaN? Усі результати виведіть в консоль.
// EN: It is known from the general course of mathematics that it is impossible
//     to divide by zero. However, in JS this can be done and as a result we
//     will get an Infinity value. In JS, in addition to ordinary numbers,
//     there are so-called "special numerical values" that also belong to
//     this type of data, to which, in addition to Infinity, -Infinity and
//     NaN belong. Write how you can get the value -Infinity, show several
//     ways to get NaN. Do you know the exception for NaN? Output all results
//     to the console.

// solution:
// let res1 = 1 / 0;
// let res2 = 7 / -0;
// let res3 = 'not a number' / 2;
// let res4 = NaN + 1;
// let res5 = NaN * (40 + 2);
// let res6 = NaN ** 0;

// console.log(res1, res2); // Infinity, -Infinity
// console.log(res3, res4, res5); // NaN, NaN, NaN
// console.log(`exeption for NaN is NaN**0 = ${res6}`); // exeption for NaN is NaN**0 = 1
// ==========================================================================================

// ===========================Task 04========================================================
// UA: В JS існують 8 типів даних. Сім з них належать до примітивного типу.
//     Яка є особливість для примітивного типу "null", ви знаєте її?
//     Використовуючи оператор typeof виведіть в консоль усі примітивні типи.
// EN: There are 8 basic data types in JavaScript. Seven primitive data type.
//     What is the peculiarity of the null primitive type, you know it?
//     Using the typeof operator, output all primitive types to the console.

// solution:
// console.log(typeof 'str'); // "string"
// console.log(typeof 0); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof 10n); // "bigint"
// console.log(typeof Symbol('id')); // "symbol"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" -> known mistake!
/* The result of typeof null is "object". That’s an officially recognized error
   in typeof, coming from very early days of JavaScript and kept for compatibility.
   Definitely, null is not an object. It is a special value with a separate type of
   its own. The behavior of typeof is wrong here.
*/
// ==========================================================================================

// ===========================Task 05========================================================
// UA: Існують випадки, коли потрібно конвертувати один тип даних в інший.
//     1.Покажіть, як явно конвертувати булеве значення в текстовий рядок?
//     2.Покажіть, як явно конвертувати текстовий рядок в число?
//     3.Покажіть декілька прикладів, як явно конвертувати текстовий рядок,
//       число, null/undefined, пустий рядок, пробіл в булеве значення?
// EN: There are times when you need to convert one data type to another.
//     1. Show how to explicitly convert a boolean value to a string?
//     2. Show how to explicitly convert a string into a number?
//     3. Show some examples of how to convert a string, a number,
//        null/undefined, an empty string, a space into a boolean value?

// solution:
// string conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
// we can also call the String(value) function to explicitly convert a value to a string:
// let value = true;
// console.log(typeof value); // boolean
// value = String(value); // explicitly convert value to a string "true"
// console.log(typeof value); // string

// Numeric conversion in mathematical functions and expressions
// happens automatically. For example, when division / is applied
// to non-numbers:
// console.log('6' / '2'); // 3, strings are converted to numbers
// use the Number(value) function to explicitly convert a value to a number:
// let str = '123';
// console.log(typeof str); // string
// let num = Number(str); // explicitly convert value to a number 123
// console.log(typeof num); // number

// Boolean conversion happens in logical operations.
// Values that are intuitively 'empty', like 0, an empty string,
// null, undefined, and NaN, become false, other values become true.
// console.log(Boolean('hello dude')); // true
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false
// but:
// console.log(Boolean('0')); // true - any non-empty string in JS is true
// console.log(Boolean(' ')); // true - any non-empty string in JS is true
// ==========================================================================================

// ===========================Task 06========================================================
// UA: Оголосіть три змінні: a, b, c. Надайте їм такі значення: 10, 2, 5.
//     Оголосіть змінну result1 та обчисліть суму значень змінних a, b, c.
//     Оголосіть змінну min та обчисліть мінімальне значення змінних a, b, c.
//     Виведіть результати у консоль.
// EN: Declare three variables: a, b, c. Give them the following values: 10, 2, 5.
//     Declare a variable result1 and calculate the sum of the values of
//     the variables a, b, c. Declare a variable min and calculate the minimum
//     value of the variables a, b, c. Print the result to the console.

// // solution:
// let a = 10;
// let b = 2;
// let c = 5;
// let result1 = a + b + c;
// let min = Math.min(a, b, c);

// console.log('Sum of a, b, and c: ', result1); // Sum of a, b, and c: 17
// console.log('Minimum value among a, b, and c is ', min); // Minimum value among a, b, and c is 2
// ==========================================================================================

// ===========================Task 07========================================================
// UA: Оголосіть дві змінні, які містять вартість товарів: перший
//     товар – 0.10 USD, другий – 0.20 USD. Обчисліть суму та виведіть
//     у консоль. У рішенні, використайте метод округлення toFixed().
// EN: Declare two variables that contain the cost of goods: first
//     item - 0.10 USD, second item - 0.20 USD. Calculate the sum
//     and output to the console. Consider to use the toFixed() method.

// // solution1 if item's value is number:
// let item1 = 0.1;
// let item2 = 0.2;

// let total = item1 + item2; // 0.30000000000000004
// console.log(total.toFixed(2)); // "0.30" - but typeof total is string!
/* The toFixed() method converts a number to a string. The toFixed() 
   method rounds the string to a specified number of decimals. If the 
   number of decimals are higher than in the number, zeros are added.
*/

// solution if item's value is string:
// let firstItemCost = '0.10 USD';
// let secondItemCost = '0.20 USD';

// here extract numerical parts and convert to numbers:
/* The Number.parseFloat() method parses a value as a string and returns 
   the first number. If the first character cannot be converted, NaN is 
   returned. Leading and trailing spaces are ignored. Only the first 
   number found is returned.
*/
// let firstCostNum = parseFloat(firstItemCost); // 0.1 -> typeof it - number
// let secondCostNum = parseFloat(secondItemCost); // 0.2 -> typeof it - number
// let totalCost = firstCostNum + secondCostNum; // 0.30000000000000004
// console.log('Total cost: ', totalCost.toFixed(2) + ' USD'); // Total cost: 0.30 USD
// ==========================================================================================

// ===========================Task 08========================================================
// UA: Об'явіть змінну 'a'. Якщо значення змінної дорівнює 0, виведіть у
//     консоль "true", інакше "false". Перевірте, що буде виведено в консолі
//     для значень 1, 0, -3.
// EN: Declare a variable 'a'. If the value of the variable is 0, print "true"
//     to the console, otherwise "false". Check what will appear in the console
//     for the values 1, 0, -3.

// solution via if-block
// let a = -3;
// if (a === 0) {
// 	console.log('true');
// } else if (a === 1) {
// 	console.log('false');
// } else if (a === -3) {
// 	console.log('false');
// }

// solution via switch
// let a;
// switch (a) {
// 	case 0:
// 		console.log('true');
// 		break;
// 	case 1:
// 		console.log('false');
// 		break;
// 	case -3:
// 		console.log('false');
// 		break;
// 	default:
// 		console.log('False');
// }
// ==========================================================================================

// ===========================Task 09========================================================
// UA: Сторіть дві змінні: a, b. Обчисліть їх суму та призначте її
//     змінній result. Якщо результат більше 5, виведіть його в консоль,
//     інакше помножте на 10 і виведіть в консоль.
//     Дані для тестування: 2, 5 та 3, 1.
// EN: Declare two variables: a, b. Calculate their sum and assign to the
//     variable result. If the result is greater than 5, print it to the
//     console, otherwise multiply it by 10 and print it to the console.
//     Data for testing: 2, 5 and 3, 1.

// solution via if-block:
// let a = 2;
// let b = 5;

// let a = 3;
// let b = 1;

// let result = a + b;

// if (result > 5) {
// 	console.log(result);
// } else {
// 	console.log(result * 10);
// }
// ==========================================================================================

// ===========================Task 10========================================================
// UA: Запитайте у користувача ввести будь-яке ціле значення і виведіть
//     його в консоль як число.
// EN: Ask the user for some integer value and print it to the console as number type.

// solution via built-in function prompt() and + operator:
// let num = +prompt('Enter the integer number', '42');
// console.log('You entered number > ', num);
// ==========================================================================================

// ===========================Task 11========================================================
// UA: Створіть скрипт, який запропонує відвідувачу ввести два числа, а
//     потім покаже їх суму.
// EN: Create a script that prompts the visitor to enter two numbers and
//     then shows their sum.

// solution via built-in function prompt():
// let a = +prompt('The first number?', '');
// let b = +prompt('The second number?', '');
// alert(a + b);
// ==========================================================================================

// ===========================Task 12========================================================
// UA: В нас є вирази у яких застосовано логічні оператори (АБО)-||, (TA)-&&
//     та (НЕ)-! Дайте відповідь на усі вирази: що буде виведено в консоль?
// EN: We have expressions in which the logical operators (OR)-||, (AND)-&&
//     and (NOT)-! Answer all the expressions: What will be output to the console?

// solution:
// console.log(null || 2 || undefined); // 2 - first truthy value
// console.log(null || 0 || 1); // 1 - the first truthy value
// console.log(undefined || null || 0); // 0 - all falsy, returns the last value
// console.log(alert(1) || 2 || alert(3)); // 1 - shows in alert, but return undefine, 
// // then return 2 - first truthy value

// console.log(1 && 2 && null && 3); // null - first falsy value
// console.log(1 && 2 && 3); // 3, - all truthy, returns the last value
// console.log(alert(1) && alert(2)); // 1, call to alert returns undefined, because undefined
// // is a falsy value and && looks for a first falsy value and returns it, so it’s done.
// console.log(null || (2 && 3) || 4); // 3 - the precedence of && is higher than ||, so it
// // executes first; the result of 2 && 3 = 3, than 3 || 4 = 3 - first truthy value;

// console.log(!true); // false
// console.log(!0); // true
// // a double NOT !! is sometimes used for converting a value to boolean type
// console.log(!!'non-empty string'); // true
// console.log(!!null); // false

// if (-1 || 0) console.log('OK'); // OK -> -1 || 0 = -1, truthy
// if (-1 && 0) console.log('OK'); // doesn't run -> -1 && 0 = 0, falsy
// if (null || -1 && 1) console.log('OK'); // OK -> null || -1 && 1 = null || 1 = 1, truthy
// ==========================================================================================

// ===========================Task 13========================================================
// UA: Напишіть дві умови для if:
//     перша - щоб переконатися, що вік становить від 14 до 90 включно.
//     'Включно' означає, що вік може сягати 14 або 90 років.
//     друга - щоб переконатися, що вік НЕ включає проміжок між 14 і 90 включно.
//     Для другої умови створіть два варіанти: перший з використанням НЕ!,
//     другий – без нього.
// EN: Write two conditions for if:
//     First - to check that age is between 14 and 90 inclusively. “Inclusively”
//     means that age can reach the edges 14 or 90. Second - to check
//     that age is NOT between 14 and 90 inclusively. Create two variants:
//     the first one using (NOT)!, the second one – without it.

// solution for first if:
// if (age >= 14 && age <= 90) console.log('the age is self reliable');

// solution for second if variant1:
// if (!(age >= 14 && age <= 90)) console.log('the age requires help');
// solution for second if variant2:
// if (age < 14 || age > 90) console.log('the age requires help');
// ==========================================================================================

// ===========================Task 14========================================================
// UA: Перепишіть if використавши тернарний операторю
// EN: Rewrite if using the ternary operator
// if (a + b < 4) {
//   result = 'Not enough';
// } else {
//   result = 'Too many';
// }

// // solution:
// const result = (a + b < 4) ? 'Not enough' : 'Too many';
// console.log(result);
// ==========================================================================================

// ===========================Task 15========================================================
// UA: Перепишіть if..else, використовуючи кілька тернарних операторів:
// EN: Rewrite if..else using multiple ternary operators:
// var message;
// if (login == 'Вob') {
//   message = 'Hello';
// } else if (login == 'Manager') {
//   message = 'Hello sir!';
// } else if (login == '') {
//   message = 'login was not provided!';
// } else {
//   message = '';
// }

// // solution:
// var message =
// 	login == 'Вob'
// 		? 'Hello'
// 		: login == 'Manager'
// 		? 'Hello sir!'
// 		: login == ''
// 		? 'login was not provided!'
// 		: '';
// ==========================================================================================

// ===========================Task 16========================================================
// UA: Які остаточні значення всіх змінних a, b, c і d після наведеного
//     нижче коду? Поясніть.
// EN: What are the final values of all variables a, b, c and d after
//     the code below? Explain it.
// let a = 1,
// 	b = 1;
// let c = ++a;
// let d = b++;

// Expllanation: 
// If the result of increment/decrement is not used immediately there is no difference in which form to use it:
// let counter = 0;
// counter++;
// ++counter;
// console.log('counter > ', counter); // counter > 2
// if we’d like to increase a value and immediately use the result, we need the prefix form:
// let counter1 = 3;
// console.log('counter1 > ', ++counter1); // counter1 > 4
// If we’d like to increment a value but use its previous value we need the postfix form:
// let counter2 = 3;
// console.log('counter2 > ', counter2++); // counter2 > 3

// solution:
// console.log('a > ', a); // 2 incremented once
// console.log('b > ', b); // 2 incremented once
// console.log('с > ', c); // 2 - prefix form returns the new value
// console.log('d > ', d); // 1 - postfix form returns the old value
// ==========================================================================================

// ===========================Task 17========================================================
// UA: В нас є два цикла while, які використовують: один - префіксну (++і),
//     інший - постфіксну (і++) форми для наступної ітерації.
//     Дайте відповідь, які значення будуть виведені в консоль кожним циклом?
// EN: We have two while loops that use: one - the prefix (++i), the other
//     - the postfix (i++) form for the next iteration.
//     Answer what values will be output to the console by each loop?

// let i = 0;
// while (++i < 5) console.log('prfix f > ', i); // 1,2,3,4

// let j = 0;
// while (j++ < 5) console.log('postfix f > ', j); // 1,2,3,4,5

// solution for the  prefix form ++i:
// The first value is i = 1, because ++i first increments i and then returns
// the new value. So the first comparison is 1 < 5 and the alert shows 1.
// Then follow 2, 3, 4… – the values show up one after another. The comparison
//  always uses the incremented value, because ++ is before the variable.
// Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and
// the loop stops. So 5 is not shown.

// solution for the  postfix form i++:
// The first value is again i = 1. The postfix form of i++ increments i and then
// returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).
// But the console.log call is separate. It’s another statement which executes after the
// increment and the comparison. So it gets the current i = 1. Then follow 2, 3, 4…
// Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison.
// But here we have the postfix form i++. So it increments i to 5, but returns the old
// value. Hence the comparison is actually while(4 < 5) – true, and the control goes 
// on to alert.The value i = 5 is the last one, because on the next step while(5 < 5) is 
// false.
// ==========================================================================================

// ===========================Task 18========================================================
// UA: Давайте припустимо, що у нас є дані користувача в змінних firstName,
//     lastName та nickName. Якісь з них можуть бути не визначені, а якісь ні,
//     якщо користувач вирішив не заповнювати усі значення.
//     Ми хотіли б відобразити ім’я користувача за допомогою однієї з цих змінних
//     або показати "Anonymous", якщо усі змінні мають значення "null/undefined".
//     Вирішіть завдання двома способами - використовуючи оператор (АБО)-|| та
//     (нульовий оператор об'єднання)-??.
// EN: Let’s say we have a user’s data in variables firstName, lastName
//     or nickName. All of them may be not defined, if the user decided
//     not to fill in the corresponding values.
//     We’d like to display the user name using one of these variables, or show
//     "Anonymous" if all of them are null/undefined.
//     Solve the problem in two ways - using the operator (OR)-|| and (Nullish
//     coalescing operator)-??.

// solution via оператор (OR) - ||:
// let firstName = null;
// let lastName = null;
// let nickName = 'IT dude';
// console.log(firstName || lastName || nickName || 'Anonymous'); // IT dude -first truthy value

// solution via Nullish coalescing operator ??:
/* Оператор об’єднання з null ?? сприймає значення null і undefined одинаково.
   Давайте припустимо, що значення буде мати значення “визначено” коли воно не є null
   та undefined. Результатом виразу a ?? b є: 
   - а якщо a є визначене,
   - b якщо а не є визначене.
   Іншими словами, оператор ?? повертає перший аргумент якщо значення не дорівнює null/undefined,
   в інакшому разі - повертається другий аргумент. Це просто зручний синтаксис отримати 
   перше "визначене" значення з двох наявних.
   Основним застосуванням оператора ?? є визначення дефолтного значення. Для прикладу,
   тут ми показуємо ім"я користувача якщо його значення не є null/undefined, а в інакшому
   разі користувач буде називатись "Anonymous":
   let user;
   console.log(user ?? 'Anonymous'); // Anonymous (бо тут user має значення undefined)
*/

// let firstName = null;
// let lastName = null;
// let nickName = 'IT dude';
// console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // IT dude-the first defined value
// ==========================================================================================

// ===========================Task 19========================================================
// UA: Виведіть у консоль усі числа від 1 до 10.
// EN: Print all numbers from 1 to 10 to the console.

// solution via for-loop:
/* Loops are a way to repeat the same code multiple times */
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// solution via while-loop:
/* While the condition is truthy, the code from the loop body is executed */
// let i = 1;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// solution via do-while-loop:
// let i = 1;
// do {
// 	console.log(i);
// 	i++;
// } while (i <= 10);

// solution via for..of-loop:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const num of numbers) {
// 	console.log(num);
// }

// solution via forEach array method:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((num) => console.log(num));

// solution via recursion-function:
// function printNumbersRecursive(num) {
// 	if (num > 10) {
// 		return;
// 	}
// 	console.log(num);
// 	printNumbersRecursive(num + 1);
// }
// printNumbersRecursive(1);

// solution via for..in-loop:
// Як відомо, такий цикл використовують для виведення усіх властивостей об'єкта
// const numbers = {
// 	1: true,
// 	2: true,
// 	3: true,
// 	4: true,
// 	5: true,
// 	6: true,
// 	7: true,
// 	8: true,
// 	9: true,
// 	10: true,
// };
// for (const num in numbers) {
// 	console.log(num);
// }

// solution via Array.from-method:
/*Статичний метод Array.from() створює справжній Array з ітерованого об’єкту або псевдомасиву obj, 
і тоді ми можемо використовувати на ньому методи масиву. Необов’язкові аргументи mapFn таthisArg 
дозволяють нам застосовувати функції до кожного елемента. 
Нагадаємо, що ітеровані об'єкти це ті, які можна використовуватися у for..of, або це об’єкти, які 
реалізують метод Symbol.iterator. Псевдомасиви - це такі, які мають індексовані властивості та length.
Його синтаксис може бути: 
Array.from(items), або Array.from(items, mapFn), або Array.from(items, mapFn, thisArg). 
Array.from також дозволяє нам надати додаткову функцію “трансформації” - mapFn. Ось приклади:
Array.from("foo") // ["f", "o", "o"]
Array.from([1, 2, 3], (x) => x + x) // [2, 4, 6]
let str = '𝒳😂';
// розіб’ємо рядок на масив символів
let chars = Array.from(str);
console.log(chars[1]); // 😂
console.log(chars.length); // 2
*/

// const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
// console.log(numbers.join('\n'));

// solution via custom iterator function along with the Symbol.iterator:
// const numbersIterable = {
// 	[Symbol.iterator]: function* () {
// 		let current = 1;
// 		while (current <= 10) {
// 			yield current++;
// 		}
// 	},
// };
// for (const num of numbersIterable) {
// 	console.log(num);
// }
// ==========================================================================================

// ===========================Task 20========================================================
// UA: Виведіть у консоль усі парні числа від 1 до 15.
// EN: Print to the console all even numbers from 1 to 15.

// solution via use the modulo operator % to check if i is even:
// for (let i = 1; i <= 15; i++) {
// 	// if the result of i % 2 is 0, it means that i is even, and we print it to the console
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// solution via use  the continue statement to skip odd numbers in a for-loop:
// for (let i = 1; i <= 15; i++) {
//    // if the result of i % 2 is not 0, it means that i is odd, and 
//    // we leave it and continue to the next loop
// 	if (i % 2 !== 0) {
// 		continue;
// 	}
//    // we print i to the console
// 	console.log(i);
// }

// solution via while-loop:
/* In each iteration, we print the current value of i (which is even) 
to the console, and then we increment i by 2 using i += 2.
This ensures that we only consider even numbers */
// let i = 2;
// while (i <= 15) {
// 	console.log(i);
// 	i += 2;
// }
// ==========================================================================================

// ===========================Task 21========================================================
// UA: Замініть for на while без зміни поведінки циклу.
// EN: Replace for with while without changing the behavior of the loop.

// for (var i = 0; i < 3; i++) {
//   console.log( "number " + i + "!" );
// }

// solution via while-loop and increment:
// var i = 0;
// while (i < 3) {
// 	console.log('number ' + i + '!');
// 	i++; // if i++ was missing, the loop would repeat (in theory) forever
// }

// solution via while-loop and decrement:
/* a shorter way to write while (i != 0) is while (i); when i 
   becomes 0, the condition becomes falsy, and the loop stops */
// let i = 3;
// while (i) {
// 	console.log('number ' + i + '!');
// 	i--;
// }

// solution via do..while-loop:
// var i = 0;
// do {
// 	console.log('number ' + i + '!');
// 	i++;
// } while (i < 3);
// ==========================================================================================

// ===========================Task 22========================================================
// UA: Напишіть цикл, який пропонує prompt ввести число більше 100.
//     Якщо користувач ввів інше число – попросити ввести ще раз, і так далі.
//     Цикл повинен запитувати число доки відвідувач не введе число,
//     більше 100, або не натисне кнопку Cancel (ESC).
//     Передбачати обробку нечислових рядків у цій задачі необов'язково.
// EN: Write a loop that prompts prompt to enter a number greater than 100.
//     If the user entered a different number, ask to enter again, and so on.
//     The loop should ask for a number until either the visitor enters
//     a number greater than 100 or presses the Cancel (ESC) button.
//     It is not necessary to provide for the processing of non-numeric
//     strings in this task.

// solution via using while-loop with the prompt() function:
/* цикл while з аргументом true буде працювати безкінечно до тих пір
   доки user введе число більше 100 чи клікне cancels в функції prompt */
// let userInput;
// while (true) {
// 	userInput = prompt('Enter a number greater than 100:');

// 	// перевірка чи user клікнув на Cancel чи ESC
// 	if (userInput === null) {
// 		console.log('Canceled');
// 		break;
// 	}

// 	// перевірка чи user ввів число більше за 100
// 	const number = Number(userInput); // конвертуємо в number
// 	if (number > 100) {
// 		console.log('User entered a number greater than 100: ', number);
// 		break; // виходимо з циклу якщо число більше 100 чи дорівнює 100
// 	}
// }

// solution via recursion function:
// function askForNumberGreaterThan100() {
// 	const userInput = prompt('Enter a number greater than 100:');
// 	if (userInput === null) {
// 		console.log('Canceled');
// 	} else {
// 		const number = Number(userInput); // конвертуємо в number
// 		if (number > 100) {
// 			console.log('User entered a number greater than 100: ', number);
// 		} else {
// 			askForNumberGreaterThan100(); // recursive call until the condition is met
// 		}
// 	}
// }

// askForNumberGreaterThan100();

// solution in case we need to handle non-numeric strings with do..while-loop:
/* notice: isNaN() returns true for values that are not the value NaN but 
are not numbers either, and Number.isNaN() doesn't attempt to convert
the parameter to a number, so non-numbers always return false.*/

// function askForNumberGreaterThan100() {
// 	let userInput;
// 	do {
// 		userInput = prompt('Enter a number greater than 100:');
// 		if (userInput === null) {
// 			console.log('Canceled');
// 			return;
// 		}
// 		const number = Number(userInput);
// 		/* перевірка чи конвертація успішна і чи 
// 		   значення числа більше за 100 */
// 		if (!Number.isNaN(number) && number > 100) {
// 			console.log('User entered a number greater than 100: ', number);
// 			return;
// 		}
// 		console.log('Invalid input. Please enter a valid number greater than 100.');
// 	} while (true);
// }

// askForNumberGreaterThan100();
// ==========================================================================================

// ===========================Task 23========================================================
// UA: Переписати наступний код за допомогою switch.
// EN: Rewrite the following code using switch.

// var a = +prompt('a?', '');
// if (a == 0) {
//   console.log( 0 );
// }
// if (a == 1) {
//   console.log( 1 );
// }
// if (a == 2 || a == 3) {
//   console.log( '2, 3' );
// }

// solution:
// var a = +prompt('a?', '');
// switch (a) {
// 	case 0:
// 		console.log(0);
// 		break;
// 	case 1:
// 		console.log(1);
// 		break;
// 	case 2:
// 	case 3:
// 		console.log('2, 3');
// 		break;
// 	default:
// 		// If none of the cases match, this block is executed
// 		break;
// }
// ==========================================================================================

// ===========================Task 24========================================================
// UA: Напишіть код за допомогою if..else, який відповідатиме заданому
//     варіанту switch. Зауважте: тут було згруповано кілька варіантів
//     case, які мають однаковий код.
// EN: Write the code using if..else which would correspond to the following
//     switch. Notice: Several variants of case which share the same code
//     were grouped here.

// let browser = 'Chrome';
// switch (browser) {
// 	case 'Edge':
// 		console.log("You've got the Edge!");
// 		break;

// 	case 'Chrome':
// 	case 'Firefox':
// 	case 'Safari':
// 	case 'Opera':
// 		console.log('Okay we support these browsers too');
// 		break;

// 	default:
// 		console.log('We hope that this page looks ok!');
// }

// solution:
/* To precisely match the functionality of switch, the if must use a strict
// comparison '==='. For given strings though, a simple '==' works too */

// let browser = 'Chrome';
// if (browser == 'Edge') {
// 	console.log("You've got the Edge!");
// } else if (
// 	browser == 'Chrome' ||
// 	browser == 'Firefox' ||
// 	browser == 'Safari' ||
// 	browser == 'Opera'
// ) {
// 	console.log('Okay we support these browsers too');
// } else {
// 	console.log('We hope that this page looks ok!');
// }
// ==========================================================================================

// ===========================Task 25========================================================
// UA: Ціле число, більше 1, називається простим, якщо воно не може бути
//     розділене без залишку ні на що, крім 1 і самого себе. Іншими словами,
//     n > 1 є простим числом, якщо його не можна поділити ні на що, крім 1 і n.
//     Наприклад, 5 є простим числом, тому що його не можна без залишку поділити
//     на 2, 3 і 4. Напишіть код, який виводить прості числа в інтервалі від 2 до n.
//     Для n = 10 результат буде 2,3,5,7.
// EN: An integer number greater than 1 is called a prime if it cannot be
//     divided without a remainder by anything except 1 and itself. In other words,
//     n > 1 is a prime if it cannot be evenly divided by anything except 1 and n.
//     For example, 5 is a prime, because it cannot be divided without a remainder
//     by 2, 3 and 4. Write the code which outputs prime numbers in the interval
//     from 2 to n. For n = 10 the result will be 2,3,5,7.

// let n = 10;
// solution via boolean variable to keep track of whether the current number i is prime or not:
// for (let i = 2; i <= n; i++) {
// 	let isPrime = true; // to keep track of whether the current number i is prime or not,
// 	// and breaks out of the inner loop as soon as a divisor is found
// 	for (let j = 2; j < i; j++) {
// 		if (i % j === 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	if (isPrime) {
// 		console.log(i);
// 	}
// }

// // solution via using labels:
// nextPrime: for (let i = 2; i <= n; i++) {
// 	// for each i...
// 	for (let j = 2; j < i; j++) {
// 		// look for a divisor..
// 		if (i % j == 0) continue nextPrime; // not a prime, go next i
// 	}
// 	console.log(i); // a prime
// }
// ==========================================================================================

// ===========================Task 26========================================================
// UA: Створіть функцію randomInteger(min, max), яка генерує випадкове ціле
//     число від min до max, включаючи min і max як можливі значення.
//     Будь-яке число з інтервалу min..max має з’являтися з однаковою ймовірністю.
// EN: Create a function randomInteger(min, max) that generates a random integer
//     number from min to max including both min and max as possible values.
//     Any number from the interval min..max must appear with the same probability.

// solution via Math.random() method along with Math.floor() to round down the resul:
/*The formula Math.floor(Math.random() * (max - min + 1))
generates a random floating-point number between 0 (inclusive) and (max - min + 1) (exclusive).
The Math.floor() function then rounds down this number to the nearest integer.
By adding min to the result, we shift the range from [0, (max - min + 1)] to [min, max]*/

// function randomInteger(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInteger(1, 3));

// simplest, but wrong solution would be to generate a value from min to max and round it:
// function randomInteger(min, max) {
// 	let rand = min + Math.random() * (max - min);
// 	return Math.round(rand);
// }
// console.log(randomInteger(1, 3));
// The function works, but it is incorrect. The probability to get edge values min and max
// is two times less than any other. If you run the example above many times, you would
// easily see that 2 appears the most often. That happens because Math.round() gets random
// numbers from the interval 1..3 and rounds them as follows:
// values from 1    ... to 1.4999999999  become 1
// values from 1.5  ... to 2.4999999999  become 2
// values from 2.5  ... to 2.9999999999  become 3

// another correct solutions is to adjust interval borders. To ensure the same intervals,
// we can generate values from 0.5 to 3.5, thus adding the required probabilities to the edges:

// function randomInteger(min, max) {
// 	// now rand is from  (min-0.5) to (max+0.5)
// 	let rand = min - 0.5 + Math.random() * (max - min + 1);
// 	return Math.round(rand);
// }
// console.log(randomInteger(1, 3));

// Again, one alternative way could be to use Math.floor for a random number from min to max+1:
// function randomInteger(min, max) {
// 	// here rand is from min to (max+1)
// 	let rand = min + Math.random() * (max + 1 - min);
// 	return Math.floor(rand);
// }
// console.log(randomInteger(1, 3));
// ==========================================================================================

// ===========================Task 27========================================================
// UA: Як перевірити, що число це ціле число?
// EN: How to check that a number is an integer?

// let num1 = 42;
// let num2 = 42.34;

// solution via Number.isInteger() method (not supported in IE):
/* The Number.isInteger() method returns true if the argument is an integer */
// console.log(Number.isInteger(num1)); // true
// console.log(Number.isInteger(num2)); // false

// solution via operator === and parseInt() method:
// console.log(num1 === parseInt(num1, 10)); // true
// console.log(num2 === parseInt(num2, 10)); // false

// solution via operator %:
/* Ця частина Number(num) === num перевіряє, що num є 
   лише числом, а інша частина перевіряє що після ділення
   на 1 ми не маємо ніякого залишку і число є цілим, а 
   число 42.34 має залишок 34 - то це не ціле число */
// console.log(Number(num1) === num1 && num1 % 1 === 0); // true
// console.log(Number(num2) === num2 && num2 % 1 === 0); // false

// solution via short form in condition:
/*Якщо ціле число при діленні на 1 немає залишку (або = 0) то 
  в умові це буде означати falsy значення, проте оператор 
  заперечення "!"" перетворює його в truthy, і навпаки */
// console.log(!(num1 % 1)); // true
// console.log(!(num2 % 1)); // false

// solution via Bitwise OR:
/* Ця частина num1 === +num1 перевіряє, що num є 
   лише числом, а частина (num | 0) здійснює в
   дійсності truncate(обрізання) та перевіряє на строгу рівність */
// console.log(num1 === +num1 && num1 === (num1 | 0)); // true
// console.log(num2 === +num2 && num2 === (num2 | 0)); // false

// solution via creation a polifil(variant with use Math.floor()) method:
// Number.isInteger =
// 	Number.isInteger ||
// 	function (value) {
// 		return (
// 			typeof value === 'number' &&
// 			isFinite(value) && // check for number is not infinity number
// 			Math.floor(value) === value // strict check after round value
// 		);
// 	};

// console.log(Number.isInteger(num1)); // true
// console.log(Number.isInteger(num2)); // false
// ==========================================================================================
