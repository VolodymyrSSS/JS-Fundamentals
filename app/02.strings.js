console.log('Topic: Strings');
// Task 01
// UA: Напишіть код, який запитує користувача ввести логін
//     використоуючи "prompt". Якщо відвідувач вводить "Admin",
//     то далі питається пароль, якщо вводить порожній рядок або Esc –
//     показує "Canceled", якщо інший рядок – показує "I don’t know you".
//     Пароль перевіряється наступним чином: якщо він дорівнює "TheMaster",
//     то покажіть 'Welcome!', невірний пароль – покажіть "Wrong password".
//     Для порожнього рядка або скасованого введення відобразіть “Canceled”.
//     Для рішення використовуйте вкладені блоки if. Зверніть увагу на загальну
//     читабельність коду.
// EN: Write the code which asks for a login with prompt.
//     If the visitor enters "Admin", then prompt for a password,
//     if the input is an empty line or Esc – show “Canceled”,
//     if it’s another string – then show “I don’t know you”.
//     The password is checked as follows:
//     If it equals 'TheMaster', then show 'Welcome!',
//     another string – show “Wrong password”.
//     For an empty string or cancelled input, show “Canceled”.
//     For solution use nested if blocks. Mind the overall readability of the code.

// // solution:
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {
// 	let pass = prompt('Password?', '');

// 	if (pass === 'TheMaster') {
// 		alert('Welcome!');
// 	} else if (pass === '' || pass === null) {
// 		alert('Canceled');
// 	} else {
// 		alert('Wrong password');
// 	}
// } else if (userName === '' || userName === null) {
// 	alert('Canceled');
// } else {
// 	alert("I don't know you");
// }

// Task 08
// UA: Намалюйте в консолі піраміду на 10 рівнів, як показано нижче:
// EN: Draw a 10 level pyramid in the console as shown below:
// x
// xx
// xxx
// xxxx
// ...

// // solution via two for-loops:
// 	// construct rows
// for (let i = 1; i <= 10; i++) {
// 	let row = '';
// 	// constructs each row, adding 'x' to the row variable based on the current row number
// 	for (let j = 1; j <= i; j++) {
// 		row += 'x';
// 	}
// 	console.log(row); // move through each iteration of the outer loop, the number of 'x's added to row increases
// }

// Task 09
// UA: Намалюйте в консолі піраміду на 9 рівнів, як показано нижче:
// EN: Draw a 9 level pyramid in the console as shown below:
// 1
// 22
// 333
// 4444
// ...

// // solution via two for-loops:
// // construct the number of rows/levels
// for (let i = 1; i <= 9; i++) {
// 	let row = '';
//  // constructs each row, adding the value of i to the row variable based on the current row number
// 	for (let j = 1; j <= i; j++) {
// 		row += i; // move through each iteration of the outer loop, the number of digits added to row increases
// 	}
// 	console.log(row);
// }

// Task 18
// UA: Напишіть код, який виводить у консоль true, якщо рядок str містить
//     вираз 'viagra' або 'XXX', інакше false. Тестові дані надані нижче.
// EN: Write code that prints true to the console if the string str contains
//     'viagra' or 'XXX' and false otherwise.
//     Test data: 'buy ViAgRA now', 'free xxxxx', 'Red brown fox jumped over the lazy dog'.

// // solution via str.includes('targetSubstr')
// function containsWords(str) {
// 	const loweredCaseStr = str.toLowerCase(); // to make the search case-insensitive
// 	return loweredCaseStr.includes('viagra') || loweredCaseStr.includes('xxx');
// }

// solution via regEx:
// function containsWords(str) {
// 	const regex = /viagra|XXX/i;
// 	return regex.test(str);
// }

// // solution via indexOf()-method:
// function containsWords(str) {
// 	const loweredCaseStr = str.toLowerCase();
// 	return (
// 		loweredCaseStr.indexOf('viagra') !== -1 ||
// 		loweredCaseStr.indexOf('xxx') !== -1
// 	);
// }

// const testString1 = 'buy ViAgRA now';
// const testString2 = 'free xxxxx';
// const testString3 = 'Red brown fox jumped over the lazy dog';

// console.log(containsWords(testString1)); // true
// console.log(containsWords(testString2)); // true
// console.log(containsWords(testString3)); // false

// Task 17
// UA: Оголосіть змінну та проініціалізуйте її значенням у змінній register (Наприклад
//     значенням 'таОоооОддОО').
//     Напишіть код, який перетворює цей рядок на вигляд: перша літера
//     у верхньому регістрі, інші літери у нижньому регістрі. Виведіть
//     результат роботи у консоль. Використовуйте: toUpperCase/toLowerCase,
//     slice та інші.
// EN: Declare a variable and initialize it with a string value in variable
//     register. (For example, so "taOOooOddOO").
//     Write code that converts this string to: first letter in upper case, other
//     letters in lower case. Output the result to the console. Use: toUpperCase/toLowerCase,
//     slice, others...

// const register = 'taOOooOddOO';

// solution via slice()-method
// const convertedString =
// 	register.slice(0, 1).toUpperCase() + register.slice(1).toLowerCase();

// solution via substring()-method
// const firstLetter = register[0].toUpperCase();
// const restOfTheString = register.substring(1).toLowerCase();
// const convertedString = firstLetter + restOfTheString;

// solution via split and for-loop:
// const charArray = register.split(''); // convert the string to an array of characters
// charArray[0] = charArray[0].toUpperCase(); // take the first character and convert to Upper register
// for (let i = 1; i < charArray.length; i++) {
// 	// loop through the rest of the characters and convert them to lowercase
// 	charArray[i] = charArray[i].toLowerCase();
// }
// const convertedString = charArray.join(''); // join the array back into a string

// solution via replace-method and regEx:
// The regular expression captures the first character in a group (.) and the
// rest of the string in another group (.*). The match parameter represents the
// entire matched string. Here is used ^ at the beginning to ensure that the match
// starts from the beginning of the string, and we use $ at the end to ensure that
// the match extends to the end of the string. This way, the regular expression will
// capture the first character and the rest of the string as separate groups, without
// matching any characters outside the beginning and end of the string.
// const convertedString = register.replace(
// 	/^(.)(.*)$/,
// 	(match, firstLetter, restOfString) =>
// 		firstLetter.toUpperCase() + restOfString.toLowerCase()
// );

// console.log(convertedString); // Taoooooddoo

// Task 19
// UA: Напишіть код, який перевіряє довжину рядка str, і якщо вона перевищує
//     maxlength – замінює кінець str на "...", так щоб її довжина дорівнювала
//     maxlength. Результатом має бути (за потреби) обрізаний рядок. Виведіть
//     рядок у консоль. Тестові вирази надаються нижче.
// EN: Write code that checks the length of the string str, and if it exceeds
//     maxlength, replaces the end of str with "..." so that its length becomes
//     equal to maxlength.
//     The result should be (if necessary) a truncated string. Print a string to
//     the console. The test data for this task:
//     "Here's what I would like to say on this subject:", 20
//     "Hello everyone!", 20

// solution via slice()-method and property length:
// str.slice(start, end) - returns the part of the string from start to (but
// not including) end.
// function truncateString(str, maxlength) {
// 	if (str.length > maxlength) {
// 		return str.slice(0, maxlength - 3) + '...';
// 	}
// 	return str;
// }
// // Negative values for start/end are also possible. They mean
// // the position is counted from the string end. Here is one:
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.slice(0, -3) + '...' : str;
// }

// // solution using conditional (ternary) operator '? :' and property length
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.slice(0, maxlength - 3) + '...' : str;
// }

// solution via ternary operator, substring()-method and property length:
// str.substring(start, end) - returns the part of the string between start and
// end (not including end). It allows start to be greater than end (it simply
// swaps start and end). Negative arguments are not supported, they are treated as 0.
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.substring(0, maxlength - 3) + '...' : str;
// }

// solution via ternary operator, substr()-method and property length
// str.substr(start, length]) - returns the part of the string from start,
// with the given length (instead of the ending position).
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.substr(0, maxlength - 3) + '...' : str;
// }

// const testString1 = "Here's what I would like to say on this subject:";
// const testString2 = 'Hello everyone!';
// const maxLength1 = 20;
// const maxLength2 = 20;

// console.log(truncateString(testString1, maxLength1)); // Here's what I wou...
// console.log(truncateString(testString2, maxLength2)); // Hello everyone!

// Task 20
// UA: Напишіть код, який з рядка $100 отримає число та виведе його в консоль.
// EN: Write a code that will get a number from the string $100 and print it to the console.

// solution via parseInt and slice methods:
// function parseInt returns an integer, whilst parseFloat will return a floating-point number
// slice() method to extract the substring starting from the second character (index 1)
// until the end of the string. This removes the "$" symbol from the string, leaving us with "100"
// than, parseInt() function to convert the remaining string "100" into a numeric value.
// const str = '$100';
// const number = parseInt(str.slice(1));
// console.log(number); // 100

// solution via match()-method with a regEx (regular expression):
// regular expression /d+/ matches one or more digits in the string
// match() method returns an array of all the matches found in the string. In this
// case, it will return an array containing one element, which is the numeric part "100".
// parseInt() to convert the extracted numeric string "100" into an actual number
// const str = '$100';
// const number = parseInt(str.match(/\d+/)[0]);
// console.log(number); // 100

// Task 04. includes + index
// RU: Проверить, содержит ли строка второе вхождение подстроки,
//     вернуть true/false.
// EN: Check whether the string contains a second occurrence of a substring,
//     return true / false.

// Task 05. Template literal
// RU: Создать строку: "ten times two totally is 20"
//     используя переменные:
//     const a = 10;
//     const b = 2;
//     и template literal
// EN: Create s string "ten times two totally is 20"
//     using the following variables:
//     const a = 10;
//     const b = 2;
//     and template literal

// Task 06. normalize
// RU: Создайте функцию, которая сравнивает юникод строки.
//     Сравните две строки
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';
// EN: Create a function that compares the unicode strings.
//     Compare 2 strings:
//     var str1 = '\u006d\u0061\u00f1';
//     var str2 = '\u006d\u0061\u006e\u0303';

// Task 07. endsWith
// RU: Создайте функцию, которая на вход получает массив имен файлов и расширение файла
//     и возвращает новый массив, который содержит файлы указанного расширения.
// EN: Create a function that gets an array of file names and a file extension as its parameters
//     and returns a new array that contains the files of the specified extension.

// Task 08. String.fromCodePoint
// RU: Создать функцию, которая выводит в консоль строчку в формате 'символ - код'
//     для кодов в диапазоне 78000 - 80000.
// EN: Create a function that displays a line in the format 'character - code' to the console
//     for codes in the range of 78000 - 80000.

// Task 09
// RU: Создайте функцию, которая должна выводить в консоль следующую пирамиду
//     Пример:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'
// EN: Create a function that should display the next pyramid in the console
//     Example:
//     pyramid(1) = '#'
//
//     pyramid(2) = ' # '
//                  '###'
//
//     pyramid(3) = '  #  '
//                  ' ### '
//                  '#####'

// Task 10
// RU: Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
//     и добавляет знак доллара перед числом в шаблонном литерале.
// EN: Create a currency tag function that forms numbers up to two decimal digits.
//     and adds a dollar sign before the number in the template literal.
