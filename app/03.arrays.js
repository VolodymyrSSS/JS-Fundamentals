console.log('Topic: Arrays');

// Task 011111111111111111111111111111111
// UА: Є масив fruits з елементами які повторяються.
//     Потрібно дізнатись, скільки разів кожний елемент зустрічається
//     в масиві. Виведіть результати в консолі у виді об'єкта де ключем
//     буде елемент, а його значенням - число повторень його в масиві.
// EN: There is an array of fruits with repeating elements.
//     You need to find out how many times each element occurs
//     in array Display the results in the console as an object where
//     by key will be an element, and its value is the number of repetitions
//     of it in the array.

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// // solution via forEach-method:
// const countFruits = (arrList) => {
// 	const count = {};
// 	arrList.forEach((fruit) => {
// 		if (!count[fruit]) {
// 			count[fruit] = 1;
// 		} else {
// 			count[fruit]++;
// 		}
// 	});
// 	return count;
// };

// // solution via reduce-method:
/*Inside the reduce() method, the accumulator count is initialized
as an empty object {}. For each fruit in the array, we check if the
fruit key exists in the count object. If it does not exist (count[fruit]
is falsy), we initialize it to 1. If it already exists, we increment its
value by 1*/
// const countFruits = (arrList) => {
// 	return arrList.reduce((count, fruit) => {
// 		count[fruit] = (count[fruit] || 0) + 1;
// 		return count;
// 	}, {});
// };

// console.log(countFruits(fruits));

// Task 01
// UA: Створіть будь-який масивю. Отримайте останній елемент цього масиву, але щоб:
//     1.    Без видалення цього елементу з масиву;
//     2.    З видаленням його з масиву.
//    Виведіть результати в консоль.
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.

// let weirdArr = [
// 	[7, [7], 2, 'tralala'],
// 	[7, 5, 'test'],
// 	[7, 9],
// ];
// // Без видалення:
// console.log(weirdArr.at(-1)); // or console.log(weirdArr[weirdArr.length - 1]);
// console.log(weirdArr);
// // З видаленням:
// console.log(weirdArr.pop());
// console.log(weirdArr);

// Task 02
// UA: Створити  масив любих елементів. Додати елемент в кінець массива, але так, щоб:
//     - модифікувати поточний масив;
//     - створити новий масив на основі попереднього.
//     Виведіть результати в консоль.
// EN: Create an array of any elements. Add new element to the end of this array but in a way
//     - to mutate current array;
//     - to create a new array based on previous one
//     Display them in the console.

// const arr = [1, 2, 3, 4, 5];

// console.log('this is arr', arr);
// arr.push(6); // з модифікацією поточного масиву arr
// console.log('arr with added el', arr);
// const arrTwo = [...arr, 7];
// console.log('arrTwo', arrTwo);
// console.log('this is previous arr', arr);

// Task 03
// UА: Створіть масив будь-яких елементів. Вставте новий елемент під індексом 3.
//     1. модифікуючи поточний масив;
//     2. без модифікації поточного масиву.
//     Виведіть створені масиви у консоль.
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. with mutation of current array;
//     2. do not mutate current array;
//     Display created arrays in the console.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// arr.splice(3, 0, 'test');
// console.log(arr); // модифікований
// const withTestArr = [...arr.slice(0, 3), 'test', ...arr.slice(3)];
// console.log(withTestArr);
// console.log(arr); // немодифікований!

// Task 04
// UA: Згенеруйте масив чисел в діапазоні від 0 до 100.
//     Підрахуйте та виведіть в консоль суму тих елементів, значення яких більше 50.
// EN: Generate an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// Array.range = function (start, count) {
// 	return Array.from(Array(count), () => start++);
// 	//return Array(count).fill().map( x => start++ ); // possible way
// };
// let arr = Array.range(0, 101);
// console.log(arr);

// const sumNumsMoreThan50 = arr
// 	.filter((num) => num > 50)
// 	.reduce((acc, curr) => acc + curr);
// console.log(sumNumsMoreThan50);

// Task 05
// UA: Створіть масив різних типів елементів. На основі цього масиву створіть рядок –
//     об'єднайте усі елементи масиву, використовуючи визначений роздільник.
// EN: Create an array of different types of elements. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

// const arr = [
// 	'abracadabra',
// 	[1, 2, [3, 4]],
// 	'lalala',
// 	123,
// 	{
// 		toString() {
// 			return '{}';
// 		},
// 	},
// 	function () {
// 		return 42;
// 	},
// ];
// const string = arr.join('; ');
// console.log(string);

// Task 06
// UA: Створити масив чисел від 1 до 20 в рандомному порядку.
//     Відсортувати масив по збільшенню. Вивести його в консоль.
//     Отримати масив, відсортований у зворотньому порядку, та вивести його в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Display it in the console.

// const arr = [
// 	2, 5, 3, 16, 8, 4, 1, 9, 11, 18, 7, 12, 10, 19, 13, 6, 17, 14, 20, 15,
// ]; // manually created array

// Create an array with random values from 0 to 19 without any repeats
// let arr = new Array(20)
// 	.fill()
// 	.map((a, i) => (a = i))
// 	.sort(() => Math.random() - 0.5);
// let arr = Array.from(Array(20).keys()).sort((_) => Math.random() - 0.5);
// console.log('original- ', arr);

// const sortedArr = arr.sort((a, b) => a - b); // arr is mutated
// console.log('sorted- ', sortedArr);
// const reversedArr = sortedArr.reverse(); // sortedArr is mutated
// console.log('reversed- ', reversedArr);

// alternative:
// const sortedArr = arr.toSorted((a, b) => a - b);
// console.log('sorted- ', sortedArr);
// console.log('original- ', arr); // arr is not mutated
// const reversedArr = sortedArr.toReversed(); // sortedArr is not mutated
// console.log('reversed- ', reversedArr);

// Task 07
// UA: В нас є масив [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2]
//     На його основі створити новий масив [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2].
//     перша частина - від'ємні числа у тій самій послідовності
//     друга частина - нулі
//     третя частина - від'ємні числа у тій самій послідовності
// EN: We have an array: [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2].
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

// const arr = [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2];
// const negativeSubArr = arr.filter((num) => num < 0);
// console.log('negativeSubArr- ', negativeSubArr);
// const withNullSubArr = arr.filter((num) => num === 0);
// console.log('withNullSubArr- ', withNullSubArr);
// const positiveSubArr = arr.filter((num) => num > 0);
// console.log('positiveSubArr- ', positiveSubArr);
// const shuffledArr =
// 	negativeSubArr + ',' + withNullSubArr + ',' + positiveSubArr; // a lot to write
// const shuffledArr = [...negativeSubArr, ...withNullSubArr, ...positiveSubArr];
// console.log(shuffledArr);

// alternative:
// const shuffledArr = (array) => {
// 	return array
// 		.filter((num) => num < 0)
// 		.concat(
// 			array.filter((num) => num === 0),
// 			array.filter((num) => num > 0)
// 		);
// };
// console.log(shuffledArr(arr));

// Task 08
// UA: 1. Створіть масив styles з елементами "Jazz", "Blues".
//     2. Додайте в кінець значення "Rock-n-Roll".
//     3. Замініть передостаннє значення з кінця на "Classics".
//     4. Видаліть перший елемент з масиву та виведіть його в консоль.
//     5. Додайте на початок два елементи зі значениями "Rap" та "Reggae".
//     6. Виведіть масив у консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the beforlast but one element with the new value "Classics".
//     4. Remove the first element from the array and display it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

// const styles = ['Jazz', 'Blues'];
// console.log(styles);
// styles.push('Rock-n-Roll');
// console.log(styles);
// // styles.splice(1, 1, "Classics"); // it depens on the length of an array
// styles.splice(styles.length - 2, 1, 'Classics'); // it is not depens on the length
// console.log(styles);
// const deletedEl = styles.shift();
// console.log(deletedEl);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);

// Task 09
// UA: Підрахувати в рядку символів "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     окрему кількість таких символів як r, k, t та вивести їх в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// let str = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';

// let chars = [...str]; // or Array.from(str);
// console.log(chars.split('r'));
// console.log(str.split('k').length - 1);
// console.log(str.split('t').length - 1);

// alternative:
// const charTypeCount = (str, char) =>
// 	[...str].filter((symbol) => symbol === char).length;
// console.log(charTypeCount(str, 'r'));
// console.log(charTypeCount(str, 'k'));
// console.log(charTypeCount(str, 't'));

// Task 10. Aleh Hupalo
// UA: Створити рядок символів, який складається як з букв так і з цифр (не чисел).
//     Як отимати найбільше за велечиною число, яке створене лише з наявних цифр створеного рядка символів.
//     Дані для перевірки:
//     - 'sd231gt04' -> 43210
//     - '00HT00jtr' -> 0
// EN: Create a string containing letters and digits (are not numbers).
//     Get the maximum value number consisting of digits existing in the created string.
//     Test data:
//     - 'sd231gt04' -> 43210
//     - '00HT00jtr' -> 0000

// let str1 = 'sd231gt04';
// let str2 = '00HT00jtr';

// let maxValueNum = str1
// 	.split('')
// 	.filter((el) => !Number.isNaN(+el))
// 	.sort()
// 	.reverse()
// 	.join('');
// console.log(maxValueNum);

// Task 11. (Maksym Koval1 <Maksym_Koval1@epam.com>)
// UA: Є рядок символів представлений у виді rgb-кольору, наприклад 'rgb(255, 255, 78)'.
//     Необхідно вичленити з цього рядка символів одні числа та вивести їх у консоль через роздільник "-".
// EN: There is a string representing the rgb color, for example 'rgb(255, 255, 78)'.
//     It is necessary to extract the numbers of colors from the string and output
//     them to the console through the "-" separator.

// let str = 'rgb(255, 255, 78)';

// let dashedNums = str.slice(4, -1).split(', ').join('-');
// console.log(dashedNums);

// alternative
// let depictedNums = str.slice('rgb('.length, -1);
// let dashedNums = depictedNums.replaceAll(', ', '-');
// console.log(dashedNums);

// using regExp:
// let str = 'rgb(255, 255, 78)';
// const filteredStr = (string) =>
// 	string.replace(/, /g, '-').replace(/rgb/g, '').replace(/[()]/g, '');
// let dashedStr = filteredStr(str);
// console.log(dashedStr);

// console.log('rgb(255, 255, 78)'.slice(4, -1).split(', ').join('-'));

// Task 12
// UA: Створити масив з будь-яких елементів який включає і числа і символи рядка.
//     Отримати випадковий елемент масиву та вивести його в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// const arr = ['SCC', 1, 2, 'elem', 3, 'px', 4, 5, 6, 7, 'num', 'str', 8, 9, 0];

// let randomEl = arr[Math.floor(Math.random() * arr.length)];
// console.log(randomEl);

// Task 13
// UА: Створіть двумірний масив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Виведіть його в консоль саме в такому виді як показано вище.
//     Перетворіть цей двомірний масив в одномірний.
//     Виведіть його в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console it looks like it was shown upwords.
//     Transform an array from two-dementional into one-dementional array.
//     Display it in the console.

// const arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// console.log(arr); // але буде виведено так [Array(3), Array(3), Array(3)], а треба по іншому, тому
// arr.forEach((el) => console.log(el.join(' ')));
// const flattenArr = arr.flat();
// console.log(flattenArr);

// Task 14
// UA: Створіть масив з будь-яких елементів.
//     Потрібно знайти індекс вказаного елементу масиву та вивести його в консоль.
//     А тепер знайдіть індекс цього самого елементу далі, з наступної позиції.
//     Можете знайти індекс другого вказаного елементу, але того, що стоїть тільки на непарній позиції?
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and display it in the console.
//     Than find the index of the same element further, from the next position.
//     Can you find the index of the second specified element, but the one that stands only in an odd position?

// const arr = [23, 'rgb', 2, 'jt', 'qq', 2.44, 'af', 4.6, 7, 'qq', 'ew', 'af'];
// let el = 'qq';
// let el2 = 'af';

// let foundIndex = arr.indexOf(el);
// console.log(foundIndex);
// foundIndex = arr.indexOf(el, 5);
// console.log(foundIndex);

// let otherIndex = arr.findIndex((value, index, arr) => {
// 	return value === el2 && index % 2 === 1;
// });
// console.log(otherIndex);

// Task 15
// UA: Створіть масив з елементами що повторюються. На його основі створіть новий масив
//     унікальних елементів (видаліть дублі).
//     Вивести новий масив у консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// const arr = ['sony', 'hp', 'apple', 'sony', 'dell', 'sony', 'hp', 'dell', 'hp'];

// const set = new Set(arr);
// const uniq = [...set]; // or const uniq = Array.from(set);
// console.log(uniq);

// alternative:
// const uniqObj = {};
// for (let el of arr) {
// 	uniqObj[el] = el; // об'єкт не може містити два одинакових ключа
// }
// const uniq = Object.values(uniqObj);
// console.log(uniq);

// Task 16
// UA: Створіть масив з дублями. Знайдіть перший елемент, який дублюється.
//     Замініть цей елемент і всі його копії на символ '*'.
//     Виведіть отриманий масив у консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// const myArr = ['hp', 'sony', 'dell', 'hp', 'apple', 'hp', 'dell'];

// function findRepeatedEl(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return arr[i];
// 	}
// }
// let repeatedEl = findRepeatedEl(myArr);
// console.log(repeatedEl);
// myArr.forEach(function (item, i, arr) {
// 	if (item == repeatedEl) arr[i] = '*';
// });
// console.log(myArr);

// Task 17
// UA: Створіть масив з цілих чисел. На його основі створіть масиви–відображення
//     цих чисел в бінарному, восьмирічному та шістнадцятирічному виді.
//     Виведіть ці масиви у консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

// let arr = [24, 42, 254, 320, 4, 17];

// const convertToStrRadix = (number, radix) => number.toString(radix);
// console.log(convertToStrRadix(6, 2)); // 110 - вірно, працює

// let arrBinary = [...arr].map(function (item, i, arr) {
// 	return convertToStrRadix(item, 2);
// });
// let arrX8 = [...arr].map(function (item, i, arr) {
// 	return convertToStrRadix(item, 8);
// });
// let arrX16 = [...arr].map(function (item, i, arr) {
// 	return convertToStrRadix(item, 16);
// });
// console.log(arrBinary);
// console.log(arrX8);
// console.log(arrX16);

// Task 18
// UA: Отримайте з рядка символів 'a big brown fox jumps over the lazy dog' масив слово-виразів,
//     який містить елементи, довжина яких не більше 3 символів.
//     Результат покажіть в консолі.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

// let str = 'a big brown fox jumps over the lazy dog';

// const myArr = str.split(' ');
// const shortStr = myArr.filter((el) => el.length <= 3);
// console.log(shortStr);

// Task 19
// UA: Створіть масив, який містить як рядки символів так і числа.
//     Перевірте чи містить масив лише раядки символів?
//     Результат покажіть в консолі.
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// const arr1 = ['sony', 'hp', 'apple', 'dell', 'accer'];
// const arr2 = [24, 17, 344, 32, 8, 5422, 4, 42];
// const arr3 = ['24', '17', '344', '32', '8', '5422', '4', '42'];
// const arr4 = ['asus', 22, 17, 'sony', 'asus', 'hp', 18, 'apple', 42, 'asus'];

// const myStrArr = arr4.every((el) => typeof el === 'string');
// console.log(myStrArr);

// Task 20
// UA: Створіть відсортований масив чисел. Далі, потрібно створити
//     функцію binarySearch(arr, value), яка отримує на вхід цей масив
//     та будь-яке значення зі створеного масиву. В результаті роботи
//     функції, отримаємо індекс заданого значення або -1.
//     Функція повинна здійснювати бінарный пошук.
//     Результат покажіть в консолі.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 12, 13];

// function binarySearch(arr, value) {
// 	let leftIndex = 0;
// 	let rightIndex = arr.length - 1;
// 	let midIndex;

// 	// перевірка якщо значення виходить за межі діапазону заданого масиву
// 	if (value > arr[rightIndex] || value < arr[leftIndex]) {
// 		return -1;
// 	}

// 	// пошук індекса шляхом збігання його із середнім значенням для імплементації бінарного пошуку
// 	while (leftIndex <= rightIndex) {
// 		midIndex = Math.floor((leftIndex + rightIndex) / 2);
// 		console.log(`midIndex: ${midIndex}`);

// 		if (value === arr[midIndex]) {
// 			return midIndex; // середній індекс збігся із заданим значенням для пошуку
// 		} else if (value > arr[midIndex]) {
// 			// шукаємо в правій половині
// 			leftIndex = midIndex + 1; // наступний крок для пошуку (рухаємось вправо)
// 		} else {
// 			// шукаємо в лівій половині
// 			rightIndex = midIndex - 1; // наступний крок для пошуку (рухаємось вліво)
// 		}
// 	}

// 	return -1;
// }

// console.log(binarySearch(arr, 5));
// console.log(binarySearch(arr, -3));
// console.log(binarySearch(arr, 16));
// console.log(binarySearch(arr, 8));
// console.log(binarySearch(arr, 2));
