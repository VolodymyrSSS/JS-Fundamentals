console.log('Topic: Primitive Data Types');

// Task 01
// UA: Оголосіть дві змінні: admin та name. Надайте значення змінній name
//    ваше ім'я. Скопіюйте це значення змінній admin та виведіть його в консоль.
// EN: Declare two variables: admin and name. Set the variable name to your
//     name. Copy this value to the admin variable and print it to the console.

// let name = 'Volodymyr';
// let admin = name;
// console.log(admin); // Volodymyr

// Task 02
// UA: Оголосіть три змінні: a, b, c. Надайте їм такі значення: 10, 2, 5.
//     Оголосіть змінну result1 та обчисліть суму значень змінних a, b, c.
//     Оголосіть змінну min та обчисліть мінімальне значення змінних a, b, c.
//     Виведіть результати у консоль.
// EN: Declare three variables: a, b, c. Give them the following values: 10, 2, 5.
//     Declare a variable result1 and calculate the sum of the values of variables a, b, c.
//     Declare a variable min and calculate the minimum value of variables a, b, c.
//     Print the result to the console.

// // solution:
// let a = 10;
// let b = 2;
// let c = 5;

// let result1 = a + b + c;

// let min = Math.min(a, b, c);

// console.log('Sum of a, b, and c: ', result1);
// console.log('Minimum value among a, b, and c is ', min);

// Task 03
// UA: Оголосіть дві змінні, які містять вартість товарів:
//     перший товар – 0.10 USD, другий – 0.20 USD
//     Обчисліть суму та виведіть у консоль. Використайте
//     при цьому метод toFixed().
// EN: Declare two variables that contain the cost of goods:
//     first item - 0.10 USD, second item - 0.20 USD
//     Calculate the sum and output to the console. Consider
//     to use the toFixed() method.

// // solution1 item's value is number:
// let item1 = 0.1;
// let item2 = 0.2;

// let total = item1 + item2;
// console.log(total.toFixed(2)); // 0.30

// // solution item's value is string:
// let firstItemCost = '0.10 USD';
// let secondItemCost = '0.20 USD';
// // Extract numerical parts and convert to numbers
// let firstCostNum = parseFloat(firstItemCost);
// let secondCostNum = parseFloat(secondItemCost);
// let totalCost = firstCostNum + secondCostNum;
// console.log('Total cost:', totalCost.toFixed(2) + ' USD');

// Task 04
// UA: Оголосіть змінну a. Якщо значення змінної дорівнює 0, виведіть у консоль
//     "True", інакше "False". Перевірте, що буде виведено в консолі для значень 1, 0, -3.
// EN: Declare a variable a. If the value of the variable is 0, print "True"
//     to the console, otherwise "False". Check what will appear in the console
//     for the values 1, 0, -3.

// // solution via if-block
// let a = -3;
// if (a === 0) {
// 	console.log('True');
// } else if (a === 1) {
// 	console.log('False');
// } else if (a === -3) {
// 	console.log('False');
// }

// // solution via switch
// let a;
// switch (a) {
// 	case 0:
// 		console.log('True');
// 		break;
// 	case 1:
// 		console.log('False');
// 		break;
// 	case -3:
// 		console.log('False');
// 		break;
// 	default:
// 		console.log('False');
// }

// Task 05
// UA: Оголосіть дві змінні: a, b. Обчисліть їх суму та призначте її
//     змінній result. Якщо результат більше 5, виведіть його в консоль,
//     інакше помножте на 10 і виведіть в консоль.
//     Дані для тестування: 2, 5 та 3, 1.
// EN: Declare two variables: a, b. Calculate their sum and assign to the
//     variable result. If the result is greater than 5, print it to the
//     console, otherwise multiply it by 10 and print it to the console.
//     Data for testing: 2.5 and 3.1.

// let a = 3;
// let b = 1;
// let result = a + b;
// if (result > 5) {
// 	console.log(result);
// } else {
// 	console.log(result * 10);
// }

// Task 06
// UA: Виведіть у консоль усі числа від 1 до 10.
// EN: Print all numbers from 1 to 10 to the console.

// // solution via for-loop:
// for (let i = 1; i <= 10; i++) {
// 	console.log(i);
// }

// // solution via while-loop:
// let i = 1;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// // solution via do-while-loop:
// let i = 1;
// do {
// 	console.log(i);
// 	i++;
// } while (i <= 10);

// // solution via for..of-loop:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of numbers) {
// 	console.log(number);
// }

// // solution via forEach array method:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((number) => console.log(number));

// // solution via recursion-function:
// function printNumbersRecursive(num) {
// 	if (num > 10) {
// 		return;
// 	}
// 	console.log(num);
// 	printNumbersRecursive(num + 1);
// }
// printNumbersRecursive(1);

// // solution via for..in-loop:
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
// for (const number in numbers) {
// 	console.log(number);
// }

// // solution via Array.from-method:
// const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
// console.log(numbers.join('\n'));

// // solution via custom iterator function along with the Symbol.iterator:
// const numbersIterable = {
// 	[Symbol.iterator]: function* () {
// 		let current = 1;
// 		while (current <= 10) {
// 			yield current++;
// 		}
// 	},
// };
// for (const number of numbersIterable) {
// 	console.log(number);
// }

// Task 07
// UA: Виведіть у консоль усі парні числа від 1 до 15.
// EN: Print to the console all even numbers from 1 to 15.

// // solution via use the modulo operator % to check if i is even:
// for (let i = 1; i <= 15; i++) {
// 	// if the result of i % 2 is 0, it means that i is even, and we print it to the console
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// // solution via use  the continue statement to skip odd numbers in a for-loop:
// for (let i = 1; i <= 15; i++) {
// 	if (i % 2 !== 0) {
// 		continue;
// 	}
// 	console.log(i);
// }

// // solution via while-loop:
/* In each iteration, we print the current value of i (which is even) 
to the console, and then we increment i by 2 using i += 2.
This ensures that we only consider even numbers */
// let i = 2;
// while (i <= 15) {
// 	console.log(i);
// 	i += 2;
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
// for (let i = 1; i <= 10; i++) {
// 	// number of rows
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

// Task 10
// UA: Запитайте у користувача ввести будь-яке ціле значення і виведіть його в консоль.
// EN: Ask the user for some integer value and print it to the console.

// // solution via built-in function prompt():
// let num = +prompt('Enter the integer number', '42');
// console.log('You entered number > ', num);

// Task 11
// UA: Створіть скрипт, який запропонує відвідувачу ввести два числа, а потім покаже їх суму.
// EN: Create a script that prompts the visitor to enter two numbers and then shows their sum.

// // solution via built-in function prompt():
// let a = +prompt('The first number?', '');
// let b = +prompt('The second number?', '');
// alert(a + b);

// Task 12
// UA: Перепишіть if використавши тернарний операторю
// EN: Rewrite if using the ternary operator
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// // solution:
// const result = a + b < 4 ? 'Not enough' : 'Too many';
// console.log(result);

// Task 13
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

// Task 14
// UA: Замініть for на while без зміни поведінки циклу:
// EN: Replace for with while without changing the behavior of the loop:
// for (var i = 0; i < 3; i++) {
//   console.log( "number " + i + "!" );
// }

// var i = 0;
// // solution via while-loop:
// while (i < 3) {
// 	console.log('number ' + i + '!');
// 	i++;
// }

// // solution via do..while-loop:
// do {
// 	console.log('number ' + i + '!');
// 	i++;
// } while (i < 3);

// Task 15
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
// the while loop runs indefinitely using while (true) until
// the user enters a number greater than 100 or cancels the prompt
// let userInput;
// while (true) {
// 	userInput = prompt('Enter a number greater than 100:');

// 	// check if user pressed the Cancel button or ESC key
// 	if (userInput === null) {
// 		console.log('Canceled');
// 		break;
// 	}

// 	// user entered a number greater than 100
// 	const number = Number(userInput); // convert it to a number
// 	if (number > 100) {
// 		console.log('User entered a number greater than 100: ', number);
// 		break; // should break out of the loop if the number is more than or equal to 100
// 	}
// }

// // solution via recursion:
// function askForNumberGreaterThan100() {
// 	const userInput = prompt('Enter a number greater than 100:');
// 	if (userInput === null) {
// 		console.log('Canceled');
// 	} else {
// 		const number = Number(userInput); // convert it to a number
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
// 		// check if the conversion is successful and
// 		// if the resulting number is greater than 100
// 		// using Number.isNaN(number) and number > 100, respectively
// 		if (!Number.isNaN(number) && number > 100) {
// 			console.log('User entered a number greater than 100: ', number);
// 			return;
// 		}
// 		console.log('Invalid input. Please enter a valid number greater than 100.');
// 	} while (true);
// }

// askForNumberGreaterThan100();

// Task 16
// UA: Переписати наступний код за допомогою switch:
// EN: Rewrite the following code using switch:
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

// // solution:
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

// Task 18
// UA: Напишіть код, який виводить у консоль true, якщо рядок str містить
//     вираз 'viagra' або 'XXX', інакше false. Тестові дані надані нижче.
// EN: Write code that prints true to the console if the string str contains
//     'viagra' or 'XXX' and false otherwise.
//     Test data: 'buy ViAgRA now', 'free xxxxx', 'Red brown fox jumped over the lazy dog'.

// // solution via str.includes('targetSubstr')""
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

// Task 21
// UA: Створіть функцію randomInteger(min, max), яка генерує випадкове ціле число
//     від min до max, включаючи min і max як можливі значення.
//     Будь-яке число з інтервалу min..max має з’являтися з однаковою ймовірністю.
// EN: Create a function randomInteger(min, max) that generates a random integer
//     number from min to max including both min and max as possible values.
//     Any number from the interval min..max must appear with the same probability.

// solution via Math.random() method along with Math.floor() to round down the resul:
// The formula Math.floor(Math.random() * (max - min + 1))
// generates a random floating-point number between 0 (inclusive) and (max - min + 1) (exclusive).
// The Math.floor() function then rounds down this number to the nearest integer.
// By adding min to the result, we shift the range from [0, (max - min + 1)] to [min, max]

// function randomInteger(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInteger(1, 3));

// // simplest, but wrong solution would be to generate a value from min to max and round it:
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
