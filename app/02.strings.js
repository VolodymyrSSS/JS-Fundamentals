console.log('Topic: Strings-Numbers');

// ===========================Task 01===================================
// UA: Як відомо в JS не існує окремого типу для одного символу. Але як
//     отримати перший символ рядка? А як отримати останній символ рядка?
//     Покажіть декілька варіантів.
// EN: As you know, in JS there is no separate type for single character.
//     But how do you get the first character of a string? And how to get
//     the last character of a string? Show several options.

// let str = 'Hello dude';

// solution via for..of loop:
// for (let char of str) {
// 	console.log(char); // H,e,l,l,o, ,d,u,d,e (char becomes "H", then "e", then "l"..)
// }

// solution via str[pos] for the first character:
// let firstCharacter = str[0];
// console.log(firstCharacter); // H

// solution via str.at(pos) method for the first character:
// let firstChar = str.at(0);
// console.log(firstChar); // H

// solution via prop length for the last character:
// console.log(str.length); // 10
// let lastCharacter = str.length - 1; // index for the last character
// console.log(str[lastCharacter]); // e

// solution via str.at(pos) method for the last character:
// console.log(str.at(-1)); // e
// =====================================================================

// ===========================Task 02===================================
// UA: Знайдіть позиції усіх одинакових підрядків у заданому рядку.
//     Що робити, якщо нам потрібно перевірити тільки наявність підрядку,
//     і не потрібна його позиція?
// EN: Find the positions of all identical substrings in the given string.
//     What if we need to test for the match, but don’t need its position?

// let str = 'As sly as a fox, as strong as an ox';

// solution via indexOf method finding all occurrences:
/* this method looks for the substr in str, starting from the given
   position pos, and returns the position where the match was found
   or -1 if nothing can be found. The optional second parameter allows
   us to start searching from a given position */

// let target = 'as'; // let's look for it
// let pos = 0;
// while (true) {
// 	let foundPos = str.indexOf(target, pos);
// 	if (foundPos == -1) break;
// 	console.log(`Found at ${foundPos}`);
// 	pos = foundPos + 1; // continue the search from the next position
// }

/* keep in mind, that is a slight inconvenience with indexOf in
   the if-tests: if found the match at the starting position, 'if'
   considers 0 to be false. So, we should actually check for -1,
   like in this sample:
   let str = 'Widget with id';
   if (str.indexOf('Widget') != -1) {
    console.log('We found it'); // because here pos = 0
   } */

// so, algorithm for the task can be layed out shorter and using -1:
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
// 	console.log(pos);
// }

/* There is also a similar method str.lastIndexOf(substr, position)
   that searches from the end of a string to its beginning.
   It would list the occurrences in the reverse order */

// solution via includes method if we only need to find the match:
/* This method returns true/false depending on whether str 
   contains substr within */
// console.log(str.includes('as')); // true
/* the optional second argument of str.includes is the position
   to start searching from. So for out task, for example be sure
   to have substing after 16th position*/
// console.log(str.includes('as', 16)); // true
// console.log(str.includes('as', 30)); // false

// solution via startsWith method if we only need to find the match:
// console.log(str.startsWith('as')); // false
// console.log(str.startsWith('As')); // true
// console.log(str.startsWith('as', 17)); // true

// solution via endsWith method if we only need to find the match:
// console.log(str.endsWith('as', 17)); // false
// console.log(str.endsWith('as', 19)); // true
// =====================================================================

// ===========================Task 03===================================
// UA: В нас є рядок символів str. Покажіть 3 методи як можна отримати
//     підрядок. Вкажіть на особливості кожного з них.
// EN: We have a string of characters str. Show 3 methods how you can
//     get a substring. Specify the characteristics of each of them.

// let printingHouse = 'Ababagalamaga';

// solution via slice methods:
// // it returns the part of the string from start to (but not including) end, so:
// let substring1 = printingHouse.slice(0, 5);
// console.log(substring1); // Ababa
// console.log(printingHouse.slice(0, 1)); // from 0 to 1, but not including 1, so only character at 0 -> 'A',
// // if there is no second argument, then slice goes till the end of the string:
// let substring2 = printingHouse.slice(5);
// console.log(substring2); // galamaga
// // negative values for start/end are also possible. They mean the position
// // is counted from the string end:
// let substring3 = printingHouse.slice(-10, -6);
// console.log(substring3); // baga

// // solution via str.substring(start [, end]) methods:
// it returns the part of the string between start and end (not including end).
// let substring4 = printingHouse.substring(0, 5); // Ababa
// console.log(substring4); // Ababa
// console.log(printingHouse.substring(0, 1)); // from 0 to 1, but not including 1, so only character at 0 -> 'A',
// let substring5 = printingHouse.substring(5);
// console.log(substring5); // galamaga
// // this method is almost the same as slice, but it allows start to be greater
// // than end (in this case it simply swaps start and end values):
// let substring6 = printingHouse.substring(3, 7);
// console.log(substring6); // baga
// substring6 = printingHouse.substring(7, 3);
// console.log(substring6); // baga
// // negative arguments are (unlike slice) not supported, they are treated as 0

// // solution via str.substr(start [, length]) methods:
// // this method returns the part of the string from start, with the given length:
// let substring7 = printingHouse.substr(0, 5); // Ababa
// console.log(substring7); // Ababa
// console.log(printingHouse.substr(0, 1)); // from the 0-th position get 1 character -> 'A'
// // the first argument may be negative, to count from the end:
// let substring8 = printingHouse.substr(-8, 8);
// console.log(substring8); // galamaga
// =====================================================================

// ===========================Task 04===================================
// UA: Ми маємо декілька змінних у яких значеннями є цілі числа та
//     десяткові і навіть такі, які є рядками. Як нам вивести в консоль
//     тільки такі змінні, які є числами і мають тільки цілі значення?
// EN: We have several variables whose values are integers and decimals.
//     How can we output to the console only those variables that are
//     numbers and have only integer values?

// const num1 = 4;
// const num2 = 5.2;
// const num3 = 7;
// const num4 = 10.0;
// const num5 = 3.14;
// const num6 = '9.0';
// const num7 = '9.8';

// solution via using the Modulo Operator (%) and typeof:
// we first use typeof to check if the variable is of type
// "number", and then we use the modulo operator - if the
// remainder of the division by 1 is 0, after that we output
// the variable to the console
// if (typeof num1 === 'number' && num1 % 1 === 0) {
// 	console.log(`The ${num1} is an integer`);
// }
// if (typeof num2 === 'number' && num2 % 1 === 0) {
// 	console.log(`The ${num2} is an integer`);
// }
// if (typeof num3 === 'number' && num3 % 1 === 0) {
// 	console.log(`The ${num3} is an integer`);
// }
// if (typeof num4 === 'number' && num4 % 1 === 0) {
// 	console.log(`The ${num4} is an integer`);
// }
// if (typeof num5 === 'number' && num5 % 1 === 0) {
// 	console.log(`The ${num5} is an integer`);
// }
// if (typeof num6 === 'number' && num6 % 1 === 0) {
// 	console.log(`The ${num6} is an integer`);
// }
// if (typeof num7 === 'number' && num7 % 1 === 0) {
// 	console.log(`The ${num7} is an integer`);
// }
// // or we can wrap it in a function like this:
// function isInteger(num) {
// 	if (typeof num === 'number' && num % 1 === 0) {
// 		console.log(`The ${num} is an integer`);
// 	}
// }
// isInteger(num1);
// isInteger(num2);
// isInteger(num3);
// isInteger(num4);
// isInteger(num5);
// isInteger(num6);
// isInteger(num7);
// ====================================================================

// ===========================Task 05===================================
// UA: З теорії JS ми знаємо, що кожен символ має відповідний числовий
//     код. Отже, існують спеціальні методи, які дозволяють отримати
//     символ по його коду і назад. Покажіть, як отримати числовий код
//     по символу та як отримати символ по його числовому коду? Для чого
//     це потрібно? Крім того, виведіть в консоль латинський алфавіт та
//     букви з діакритичними знаками (Á,Ç,É,Ú...), які знаходяться в
//     діапазоні їх числових кодів від 65 до 220. Зробіть висновок за
//     результатами. Врешті, як правильно зробити порівняння, враховуючи
//     відмінності алфавітів різних країн?
// EN: From JS theory we know that each character has a corresponding numeric code.
//     So, there are special methods that allow to get the character for the code
//     and back. Show how to get a numeric code by its symbol, and how to get a
//     character by its code? What is it for?
//     In addition, output to the console the Latin alphabet in both cases and letters
//     with diacritical marks (Á,Ç,É,Ú...) that are in the range of their numeric codes
//     from 65 to 220. Draw a conclusion based on the results.
//     After all, how to properly make a comparison, taking into account the differences
//     in the alphabets of different countries?

// solution via codePointAt method for getting the numeric code:
/* it returns a decimal number representing the code for the character 
   at position pos. Here, different case letters have different codes*/
// console.log('Nice'.codePointAt(0)); // 78
// console.log('nice'.codePointAt(0)); // 110
// console.log('nice'.codePointAt(0).toString(16)); // 7e (if we need a hexadecimal value)
// console.log('Nice'.codePointAt(1)); // 105
// console.log('nice'.codePointAt(2)); // 99
// console.log('nice'.codePointAt(2).toString(16)); // 63 (if we need a hexadecimal value)

// solution via fromCodePoint for getting the character by its numeric code:
// // it creates a character by its numeric code:
// console.log(String.fromCodePoint(78)); // N
// console.log(String.fromCodePoint(110)); // n

/* strings are compared character-by-character in alphabetical order. 
   The greater code means that the character is greater. The code for
   'n' (110) is greater than the code for 'N' (78)*/
// console.log('a' > 'Z'); // true
// console.log('Österreich' > 'Zealand'); // true

// solution via of getting the characters with codes 65..220 (the latin alphabet
// // in both cases and letters with diacritical marks) by making a string of them:
// let str = '';
// for (let i = 65; i <= 220; i++) {
// 	str += String.fromCodePoint(i);
// }
// console.log(str); // Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
//  ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»
// ¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
// See? Capital characters go first, then a few special ones,
// then lowercase characters, and Ö near the end of the output.
// Now it becomes obvious why a > Z and why 'Österreich' > 'Zealand'.
// So, all lowercase letters go after uppercase letters because their
// codes are greater. Some letters like Ö stand apart from the main
// alphabet. Here, its code is greater than anything from a to z.

// To do string comparisons is more complex than it may seem,
// because alphabets are different for different languages.
// So, the browser needs to know the language to compare.
// Standard ECMA-402 provides a special method to compare strings in
// different languages.
// The call str.localeCompare(str2) returns an integer indicating
// whether str is less, equal or greater than str2 according to the
// language rules:
// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.
// console.log('Österreich'.localeCompare('Zealand')); // -1
// =====================================================================

// ===========================Task 06===================================
// UA: Напишіть код, який запитує користувача ввести логін використоуючи
//     "prompt". Якщо відвідувач вводить "Admin", то далі запитується
//     пароль, якщо вводить порожній рядок або Esc – показує "Canceled",
//     якщо інший рядок – показує "I don’t know you".
//     Пароль перевіряється наступним чином: якщо він дорівнює "TheMaster",
//     то покажіть 'Welcome!', невірний пароль – покажіть "Wrong password".
//     Для порожнього рядка або скасованого введення відобразіть “Canceled”.
//     Для рішення використовуйте вкладені блоки if. Зверніть увагу на
//     загальну читабельність коду.
// EN: Write the code which asks for a login with prompt.
//     If the visitor enters "Admin", then prompt for a password,
//     if the input is an empty line or Esc – show “Canceled”,
//     if it’s another string – then show “I don’t know you”.
//     The password is checked as follows:
//     If it equals 'TheMaster', then show 'Welcome!',
//     another string – show “Wrong password”.
//     For an empty string or cancelled input, show “Canceled”.
//     For solution use nested if blocks. Mind the overall readability
//     of the code.

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
// =====================================================================

// ===========================Task 07===================================
// UA: Напишіть функцію ucFirst(str), яка повертає рядок str у якого
//     перший символ буде у верхньому регістрі, наприклад:
//     ucFirst("modest") == "Modest";
// EN: Write a function ucFirst(str) that returns the string str with
//     the uppercased first character, for instance:
//     ucFirst("modest") == "Modest";

// // solution via str[pos], and str.slice() and concatenation:
// // we can’t 'replace' the first character, because strings in JavaScript are
// // immutable, but we can make a new string based on the existing one, with
// // the uppercased first character:
// // let newStr = str[0].toUpperCase() + str.slice(1);
// // But, if str is empty, then str[0] is undefined, and as undefined doesn’t
// // have the toUpperCase() method, we’ll get an error.
// // The easiest way out is to add a test for an empty string, like this:
// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

// // solution via str.at() and str.substring() and concatenation:
// function ucFirst(str) {
// 	let firstCharUppercased;
// 	let restStr;
// 	if (!str) return str;

// 	firstCharUppercased = str.at(0).toUpperCase();
// 	restStr = str.substring(1);
// 	return firstCharUppercased + restStr;
// }

// console.log(ucFirst('modest')); // Modest
// =====================================================================

// ===========================Task 08===================================
// UA: Паліндром — це слово, фраза або інший тип рядка символів, який
//     можна прочитати як прямо так і ззаду наперед. Наприклад, “racecar”
//     і “Anna” є паліндромами. A от “Tisch” і “Juan” не є паліндромами,
//     оскільки вони не читаються однаково зліва направо і справа наліво.
//     Напишіть код, який покаже які з вказаних слів є поліндромом, а які ні.
// EN: A palindrome is a word, phrase, or other type of string that can
//     be read backwards or upside down. For example, “racecar” and
//     “Anna” are palindromes. “Tisch” and “Juan” are not palindromes
//     because they do not read the same from left to right and from
//     right to left. Write code that will show whether a word is
//     a palindrome or not.

// let testWord1 = 'Racecar';
// let testWord2 = 'Tisch';
// let testWord3 = 'Anna';
// let testWord4 = 'Juan';

// // solution via chain of methods toLowerCase/split/reverse/join:
// if (
// 	testWord1.toLowerCase() ===
// 	testWord1.toLowerCase().split('').reverse().join('')
// ) {
// 	console.log(`The ${testWord1} is Palindrome`); // The Racecar is Palindrome
// } else {
// 	console.log(`The ${testWord1} is not Palindrome`);
// }

// if (
// 	testWord2.toLowerCase() ===
// 	testWord2.toLowerCase().split('').reverse().join('')
// ) {
// 	console.log(`The ${testWord2} is Palindrome`);
// } else {
// 	console.log(`The ${testWord2} is not Palindrome`); // The Tisch is not Palindrome
// }
// // ...testWord3...testWord4... or we can wrap it to the function like this:
// const palindrome = (str) => {
// 	// turn the string to lowercase
// 	str = str.toLowerCase();
// 	// convert to arr, reverse, and convert back to string
// 	return str === str.split('').reverse().join('')
// 		? `The ${str} is Palindrome`
// 		: `The ${str} is not Palindrome`;
// };

// console.log(palindrome(testWord1)); // The racecar is Palindrome
// console.log(palindrome(testWord2)); // The tisch is not Palindrome
// console.log(palindrome(testWord3)); // The anna is Palindrome
// console.log(palindrome(testWord4)); // The juan is not Palindrome
// =====================================================================

// ===========================Task 09===================================
// UA: Анаграма рядка — це інший рядок символів, що містить ті
//     самі символи, але порядок символів може бути іншим. Наприклад,
//     "abcd" і "dabc" є анаграмами один одного. Напишіть код, який
//     перевірить, що два слова "Mary" та "Army" є анаграмами один одному.
// EN: An “anagram” of a “string” is another character string containing
//     the same characters, only the order of the characters can be
//     different. For example, “abcd” and “dabc” are anagrams of each
//     other. Write code to verify that the two strings "Mary" and "Army"
//     are anagrams of each other.

// const str1 = 'Mary';
// const str2 = 'Army';

// // solution via for loop and chain of arr methods:
// // manually iterate through the characters of the strings, remove spaces,
// // and convert them to lowercase:
// let cleanedStr1 = '';
// for (let i = 0; i < str1.length; i++) {
// 	if (str1[i] !== ' ') {
// 		cleanedStr1 += str1[i].toLowerCase();
// 	}
// }
// let cleanedStr2 = '';
// for (let i = 0; i < str2.length; i++) {
// 	if (str2[i] !== ' ') {
// 		cleanedStr2 += str2[i].toLowerCase();
// 	}
// }
// // sort the characters in the cleaned strings and convert back
// const sortedStr1 = cleanedStr1.split('').sort().join(''); // amry
// const sortedStr2 = cleanedStr2.split('').sort().join(''); // amry
// // Check if the sorted strings are equal
// if (sortedStr1 === sortedStr2) {
// 	console.log(`${str1} and ${str2} are anagrams`);
// } else {
// 	console.log(`${str1} and ${str2} are not anagrams`);
// }
// // or we can wrap it into the function and make more simple like this:
// console.log(areAnagrams(str1, str2)); // true
// function areAnagrams(first, second) {
// 	// for case insensitivity, change both words to lowercase.
// 	let a = first.toLowerCase();
// 	let b = second.toLowerCase();
// 	// Sort the strings, and join the resulting array to a string. Compare the results
// 	a = a.split('').sort().join('');
// 	b = b.split('').sort().join('');
// 	return a === b;
// }
// // or using func with regEx:
// function areAnagrams(str1, str2) {
// 	// Remove spaces and convert both strings to lowercase for a case-insensitive comparison
// 	const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
// 	const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();
// 	// Sort the characters in the strings and compare them
// 	const sortedStr1 = cleanedStr1.split('').sort().join('');
// 	const sortedStr2 = cleanedStr2.split('').sort().join('');
// 	return sortedStr1 === sortedStr2;
// }
// if (areAnagrams(str1, str2)) {
// 	console.log(`${str1} and ${str2} are anagrams.`);
// } else {
// 	console.log(`${str1} and ${str2} are not anagrams.`);
// }

// // solution via flag - check if the cleaned strings have the same characters:
// // Remove spaces and convert both strings to lowercase for a case-insensitive comparison
// const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase(); // using RegEx
// const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase(); // using RegEx
// // check if the strings have the same length:
// if (cleanedStr1.length !== cleanedStr2.length) {
// 	console.log(`${str1} and ${str2} are not anagrams`);
// } else {
// 	let areAnagrams = true;
// 	for (let i = 0; i < cleanedStr1.length; i++) {
// 		// check if the cleaned strings have the same characters
// 		if (cleanedStr1.indexOf(cleanedStr2[i]) === -1) {
// 			areAnagrams = false;
// 			break;
// 		}
// 	}
// 	if (areAnagrams) {
// 		console.log(`${str1} and ${str2} are anagrams`);
// 	} else {
// 		console.log(`${str1} and ${str2} are not anagrams`);
// 	}
// }
// =====================================================================

// ===========================Task 10===================================
// UA: Намалюйте в консолі піраміду на 10 рівнів, як показано нижче:
// EN: Draw a 10 level pyramid in the console as shown below:
// x
// xx
// xxx
// xxxx
// ...

// solution via two for loops and empty row:
// 	// constructing rows
// for (let i = 1; i <= 10; i++) {
// 	let row = '';
// 	// adding 'x' to the row variable based on the current row number
// 	for (let j = 1; j <= i; j++) {
// 		row += 'x';
// 	}
// 	console.log(row); // move through each iteration of the outer loop,
//                    // the number of 'x's added to row increases
// }

// solution via two for loops and char x:
// for (let i = 1; i <= 10; i++) {
// 	let charX = 'x';
// 	for (let j = 1; j < i; j++) {
// 		charX += 'x';
// 	}
// 	console.log(charX);
// }

// solution via repeat() method:
// for (let i = 1; i <= 10; i++) {
// 	console.log('x'.repeat(i));
// }
// =====================================================================

// ===========================Task 11===================================
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
//  // constructs each row, adding the value of i to the row
//  // variable based on the current row number
// 	for (let j = 1; j <= i; j++) {
// 		row += i; // move through each iteration of the outer loop,
//              // the number of digits added to row increases
// 	}
// 	console.log(row);
// }
// =====================================================================

// ===========================Task 12===================================
// UA: Нижче показаний цикл for. Дайте відповідь що буде виведено в
//     консоль та поясніть чому?
// EN: The for loop is shown below. Answer what will be displayed in
//     console and explain why?

// for (var i = 0; i < 4; i++) {
// 	setTimeout(() => console.log(i), 0); // simultaniously 4 times by 4
// }

// Explanation: the classic pitfall here is the Zero delays. setTimeout(callback, 0)
// doesn’t mean that the callback will be fire after zero milliseconds.

// Here’s what happen on the event loop side:
// Current Call Stack is set to the first setTimeout().
// windows.setTimeout() is considered as a Web APIs (for better Non-Blocking
// I/O). So the call stack sends this part of code to correct Web APIs. After
// 0 milliseconds, the callback (here an anonymous function) would be sent to
// the Queue (not to the call stack).
// As the call stack is free, for-loop can continue to the second setTimeout
// …(repeat after we meet this condition i < 4)… Now the loop is over and
// i === 4. JS can now execute the callback queue one by one. Each console.log(i)
// will print the 4.
// =====================================================================

// ===========================Task 13===================================
// UA: Напишіть код, який виводить у консоль true, якщо рядок str містить
//     вираз 'viagra' або 'XXX', інакше false. Тестові дані надані нижче.
//     Функція має бути нечутливою до регістру.
// EN: Write code that prints true to the console if the string str contains
//     'viagra' or 'XXX' and false otherwise. The function must be case-insensitive:
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
// =====================================================================

// ===========================Task 14===================================
// UA: Оголосіть змінну та проініціалізуйте її значенням у змінній
//     register (Наприклад значенням 'таОоооОддОО').
//     Напишіть код, який перетворює цей рядок на вигляд: перша літера
//     у верхньому регістрі, інші літери у нижньому регістрі. Виведіть
//     результат роботи у консоль. Використовуйте: toUpperCase/toLowerCase,
//     slice та інші.
// EN: Declare a variable and initialize it with a string value in
//     variable register. (For example, so "taOOooOddOO").
//     Write code that converts this string to: first letter in upper
//     case, other letters in lower case. Output the result to the console.
//     Use: toUpperCase/toLowerCase, slice, others...

// const register = 'taOOooOddOO';

// solution via slice() method:
// const convertedString =
// 	register.slice(0, 1).toUpperCase() + register.slice(1).toLowerCase();

// solution via substring() method:
// const firstLetter = register[0].toUpperCase();
// const restOfTheString = register.substring(1).toLowerCase();
// const convertedString = firstLetter + restOfTheString;

// solution via split and for loop:
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
// =====================================================================

// ===========================Task 15===================================
// UA: Як ми знаємо звичайні числа в JavaScript зберігаються в 64-розрядному
//     форматі і звичайне ціле число не може перевищувати позитивне
//     значення 2 в степені 53-1, або для відємних значень бути меншим
//     ніж -2 в степені 53-1. Отже все що виходить за ці межі можуть мати
//     помилки при обчисленнях. От і у нас є вираз, який повинен показати
//     результат falsy проте в консолі виводиться truthy значення через те
//     що було порушено вищезазначені умови. Як виправити це?
//     let v = Math.pow(2, 55) === Math.pow(2, 55) + 1;
//     console.log(v); // true -> але це не правельно!
// EN: As we know ordinary numbers in JavaScript are stored in 64-bit format
//     and an ordinary integer cannot exceed a positive value of 2 to the
//     power of 53-1, or for negative values be less than -2 to the power
//     of 53-1. Therefore, everything that goes beyond these limits may have
//     errors in calculations. So we have an expression that should be falsy
//     however, the truthy value is displayed in the console. How to fix this?
//     let v = Math.pow(2, 55) === Math.pow(2, 55) + 1;
//     console.log(v); // true -> but it is not!

// let v = Math.pow(2, 55) === Math.pow(2, 55) + 1;
// console.log(v); // true

// // solution via BigInt:
// let v2 = BigInt(Math.pow(2, 55));
// console.log(v2); //36028797018963968n
// let v3 = BigInt(Math.pow(2, 55)) + BigInt(1);
// console.log(v3); //36028797018963969n
// console.log(v2 === v3); // false
// // or shoter
// let v4 = BigInt(Math.pow(2, 55)) === BigInt(Math.pow(2, 55)) + BigInt(1);
// console.log(v4); // false
// =====================================================================

// ===========================Task 16===================================
// UA: Є речення як рядок слів string. Напишіть код, який переставить
//     кожне слово речення та кожен символ слова навпаки.
// EN: There is a sentence as a string of words. Write code that
//     reverses each word of a sentence and each character in a word
//     from front to back.

// let string = 'Welcome to this Javascript task!';

// solution via chain of arrays methods:
// split the sentence into words using space as the separator,
// reverse the order of words, then split each word into an array of characters,
// reverse the characters within each word, and finally join everything back together.
// let reversedSentence = string
// 	.split(' ')
// 	.reverse()
// 	.map((word) => word.split('').reverse().join(''))
// 	.join(' ');

// // or wrap into function like this:
// function reverseBySeparator(string, separator) {
// 	return string.split(separator).reverse().join(separator);
// }
// // reverses the entire sentence
// let reverseEntireSentence = reverseBySeparator(string, '');
// console.log(reverseEntireSentence); // !ksat tpircsavaJ siht ot emocleW
// // reverses each word within the sentence
// let reverseEachWord = reverseBySeparator(reverseEntireSentence, ' ');
// console.log(reverseEachWord); // emocleW ot siht tpircsavaJ !ksat

// // solution via for loop:
// let reversedSentence = ''; // initialize an empty string to store the reversed sentence
// let currentWord = ''; // initialize an empty string to store the current word being processed
// // loop through each character in the input sentence
// for (let i = 0; i < string.length; i++) {
// 	// check if the current character is not a space
// 	if (string[i] !== ' ') {
// 		// build the current word in reverse order by prepending characters to it
// 		currentWord = string[i] + currentWord; // build the word in reverse
// 	} else {
// 		// if a space is encountered, it means the end of the current word
// 		// add the reversed current word to the beginning of the reversed sentence
// 		// and include a space after it
// 		reversedSentence = currentWord + ' ' + reversedSentence; // add the reversed word to the sentence
// 		currentWord = ''; // reset the current word for the next word
// 	}
// }
// // Add the last word (there might not be a space after the last word)
// // Include a space before the reversed last word
// reversedSentence = currentWord + ' ' + reversedSentence;

// console.log(reversedSentence); // !ksat tpircsavaJ siht ot emocleW
// =====================================================================

// ===========================Task 17===================================
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

// solution via slice method and prop length:
/* method str.slice(start, end) returns the part of the string from start to (but
   not including) end.*/
// function truncateString(str, maxlength) {
// 	if (str.length > maxlength) {
// 		return str.slice(0, maxlength - 3) + '...';
// 	}
// 	return str;
// }

/* negative values for start/end are also possible. They mean
   the position is counted from the string end */
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.slice(0, -3) + '...' : str;
// }

// // solution via conditional (ternary) operator and prop length:
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.slice(0, maxlength - 3) + '...' : str;
// }

// solution via ternary operator, substring method and prop length:
// str.substring(start, end) - returns the part of the string between start and
// end (not including end). It allows start to be greater than end (it simply
// swaps start and end). Negative arguments are not supported, they are treated as 0.
// function truncateString(str, maxlength) {
// 	return str.length > maxlength ? str.substring(0, maxlength - 3) + '...' : str;
// }

// const testString1 = "Here's what I would like to say on this subject:";
// const testString2 = 'Hello everyone!';
// const maxLength1 = 20;
// const maxLength2 = 20;

// console.log(truncateString(testString1, maxLength1)); // Here's what I wou...
// console.log(truncateString(testString2, maxLength2)); // Hello everyone!
// =====================================================================

// ===========================Task 18===================================
// UA: Напишіть код, який з рядка $100 отримає число та виведе його
//     в консоль.
// EN: Write a code that will get a number from the string $100 and
//     print it to the console.

// solution via parseInt and slice methods:
/* function parseInt returns an integer, whilst parseFloat will return
   a floating-point number slice() method to extract the substring starting
   from the second character (index 1) until the end of the string. This
   removes the "$" symbol from the string, leaving us with "100"
   than, parseInt() function to convert the remaining string "100" into a
   numeric value.*/
// const str = '$100';
// const number = parseInt(str.slice(1));
// console.log(number); // 100

// solution via regEx (regular expression) using match method:
/* regular expression /d+/ matches one or more digits in the string
   match() method returns an array of all the matches found in the string.
   In this case, it will return an array containing one element, which
   is the numeric part "100". parseInt() to convert the extracted numeric
   string "100" into an actual number.*/
// const str = '$100';
// const number = parseInt(str.match(/\d+/)[0]);
// console.log(number); // 100
// =====================================================================

// ===========================Task 19===================================
// UA: Маємо рядок символів як слово-вираз str. Деякі слова в ньому
//     повторяються. Замініть усі слова що повторяються 'apple' на 'orange'.
// EN: We have a string of characters as the word-expression str. Some words
//     in it are repeated. Replace all words repeating 'apple' with 'orange'.

// let str =
// 	'I like apple, I eat apple sometimes, moreover eating apple every day is good for health.';

// solution via replaceAll method:
// let newStr = str.replaceAll('apple', 'orange');

// solution via regEx:
// let newStr = str.replace(/apple/g, 'orange');

// solution via split, includes, replace methods and for-loop:
// split the string into words
// let words = str.split(' ');
// console.log(words); // ['I', 'like', 'apple,', 'I', 'eat', 'apple', 'sometimes'...]
// // iterates through the words
// for (let i = 0; i < words.length; i++) {
// 	// Check if the word contains 'apple'
// 	if (words[i].includes('apple')) {
// 		// Replace 'apple' with 'orange' in the current word
// 		words[i] = words[i].replace('apple', 'orange');
// 		// or
// 		// words[i] = words[i].replace(/apple/g, 'orange');
// 	}
// }
// // joins the words back into a string
// let newStr = words.join(' ');

// console.log(newStr);
// // I like orange, I eat orange sometimes, moreover eating orange every day is good for health.
// =====================================================================

// ===========================Task 20===================================
// UA: Підрахувати в рядку символів "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     окрему кількість таких символів як r, k, t та вивести їх в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// let str = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';

// solution via arr-method split:
// // convert into array
// let chars = [...str]; // or Array.from(str);
// console.log(chars.split('r'));
// console.log(str.split('k').length - 1);
// console.log(str.split('t').length - 1);

// solution via func using filter method and length prop:
// const charTypeCount = (str, char) =>
// 	[...str].filter((symbol) => symbol === char).length;
// console.log(charTypeCount(str, 'r'));
// console.log(charTypeCount(str, 'k'));
// console.log(charTypeCount(str, 't'));
// =====================================================================

// ===========================Task 21===================================
// UA: Ми маємо рядок символами якого є букви і цифри. Напишіть код
//     як з такого рядка отимати найбільше за велечиною число? Тобто
//     число створене лише з символів цифр цього рядка а не букв. Дані для
//     перевірки: 'sd231gt04' -> 43210, '00HT00jtr' -> 0000.
// EN: We have a string whose characters are letters and digits. Write
//     the code how to extract the largest number from such string? That
//     is, the number is created only from the digit characters of this
//     string. Test data: 'sd231gt04' -> 43210, '00HT00jtr' -> 0000.

// let testStr1 = 'sd231gt04';
// let testStr2 = '00HT00jtr';

// solution via chain of array methods and depict digits with Number.isNaN():
/* from theory: the global isNaN() coerces its parameter to a number:
   isNaN("37")->false, this is coerced to 37
   isNaN(true)->false, this is coerced to 1
   isNaN(null)->false, this is coerced to 0
   isNaN("")->false, this is coerced to 0
   isNaN("blabla")->true, isNaN(undefined)->true

   but Number.isNaN() returns boolean value true if the given value is
   a number with value NaN; otherwise, false: Number.isNaN(NaN)->true
   Number.isNaN(0 / 0); // true, Number.isNaN(37); // false

   Number.isNaN() doesn't attempt to convert the parameter to a number,
   so non-numbers always return false: Number.isNaN(undefined)->false,
   Number.isNaN("37")->false, Number.isNaN("blabla")->false, Number.isNaN(null)->false,
   Number.isNaN("")->false, Number.isNaN(" ")->false; Number.isNaN(true)->false */

// let maxValueNum = testStr1
// 	.split('') // convert to array ['s', 'd', '2', '3', '1', 'g', 't', '0', '4']
// 	.filter((el) => !Number.isNaN(+el)) // pick up only digit chars ['2', '3', '1', '0', '4']
// 	.sort() // sort the digit characters ['0', '1', '2', '3', '4']
// 	.reverse() // revers to get max number  ['4', '3', '2', '1', '0']
// 	.join(''); // convert to the string '43210'

// console.log(maxValueNum); // '43210'
// =====================================================================

// ============================Task 22==================================
// UA: Є рядок символів представлений у форматі rgb-кольору, наприклад
//     'rgb(255, 255, 78)'. Необхідно вичленити з цього рядка символів
//      одні числа та вивести їх у консоль через роздільник "-".
// EN: There is a string representing the rgb color, for example
//     'rgb(255, 255, 78)'. It is necessary to extract the numbers of
//     colors from the string and output them to the console through
//     the "-" separator.

// let str = 'rgb(255, 255, 78)';

// solution via chain methods like slice, split and join:
// let dashedNums = str.slice(4, -1).split(', ').join('-');
// console.log(dashedNums); // 255-255-78

// solution via slice and replaceAll methods:
/* extract the substring that starts right after 'rgb(' and
   ends at the second-to-last character of the string */
// let depictedNums = str.slice('rgb('.length, -1);
// console.log(depictedNums); // '255, 255, 78'
// let dashedNums = depictedNums.replaceAll(', ', '-');
// replace all of the occurrences of ', ' with '-'
// console.log(dashedNums); // 255-255-78

// using regExp:
// const filteredStr = (string) =>
// 	string.replace(/, /g, '-').replace(/rgb/g, '').replace(/[()]/g, '');
// let dashedStr = filteredStr(str);
// console.log(dashedStr); // 255-255-78
// =====================================================================

// ============================Task ??==================================

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
