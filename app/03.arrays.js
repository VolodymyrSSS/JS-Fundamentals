console.log('Topic: Arrays');

// =====================Task 01===================================
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

// solution:
// const styles = ['Jazz', 'Blues'];
// console.log(styles); // ['Jazz', 'Blues']
// styles.push('Rock-n-Roll');
// console.log(styles); // ['Jazz', 'Blues', 'Rock-n-Roll']
// // styles.splice(1, 1, "Classics"); // it depens on the length of an array
// styles.splice(styles.length - 2, 1, 'Classics'); // it is not depens on the length
// console.log(styles); // ['Jazz', 'Classics', 'Rock-n-Roll']
// const deletedEl = styles.shift();
// console.log(deletedEl); // 'Jazz'
// styles.unshift('Rap', 'Reggae');
// console.log(styles); // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']

// =====================Task 02===================================
// UA: Ми маємо масив рядкових символів arrayList. Як очистити масив
//     в JavaScript? Покажіть щонайменше 3 можливих способи?
// EN: We have an array of string characters arrList. How to empty
//     an array in JavaScript? Show at least 3 possible ways?

// let arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// // solution via sets the arrayList variable to a new empty array:
// // this solution is recommended if you don’t have references to
// // the original ArrayList elsewhere, as it actually creates a new
// // empty array
// arrayList = []; // []

// // solution via setting its length to 0:
// // This way of emptying the array also updates all reference variables
// // that point to the original array
// arrayList.length = 0; // []

// // solution via splice method:
// arrayList.splice(0, arrayList.length); // []

// =====================Task 03===================================
// UA: Створіть будь-який масивю. Отримайте останній елемент цього
//     масиву, але так, щоб:
//     - без видалення його з масиву;
//     - з видаленням його з масиву.
//    Виведіть результати в консоль.
// EN: Create an array of any elements. Get the last element from this array.
//     - without deleting this element from an array;
//     - with deleting this element from an array.
//     Display them in the console.

// let weirdArr = [
// 	[7, [7], 2, 'tralala'],
// 	[7, 5, 'test'],
// 	[7, 9],
// ];

// // solution without deleting:
// console.log(weirdArr.at(-1)); // [7, 9]
// // or
// console.log(weirdArr[weirdArr.length - 1]); // [7, 9]
// console.log(weirdArr); // [[7, [7], 2, 'tralala'], [7, 5, 'test'], [7, 9]];

// // solution with deleting:
// console.log(weirdArr.pop()); // [7, 9]
// console.log(weirdArr); // [[7, [7], 2, 'tralala'], [7, 5, 'test']];

// =====================Task 03===================================
// UA: Створити  масив любих елементів. Додати елемент в кінець
//     массива, але так, щоб:
//     - модифікувати поточний масив;
//     - створити новий масив на основі попереднього.
//     Виведіть результати в консоль.
// EN: Create an array of any elements. Add new element to the end
//     of this array but in a way
//     - to mutate current array;
//     - to create a new array based on previous one
//     Display them in the console.

// const arr = [1, 2, 3, 4, 5];

// solution with mutation the current arr:
// console.log('this is arr', arr); // [1, 2, 3, 4, 5];
// arr.push(6);
// console.log('arr with added el', arr); // [1, 2, 3, 4, 5, 6];

// solution without mutation:
// const arrTwo = [...arr, 7];
// console.log('arrTwo', arrTwo);
// console.log('this is previous arr', arr);

// =====================Task 04===================================
// UА: Створіть масив будь-яких елементів. Вставте новий елемент
//     під індексом 3, але так, щоб:
//     - модифікувати поточний масив;
//     - без модифікації поточного масиву.
//     Виведіть створені масиви у консоль.
// EN: Create an array of any elements. Insert a new element with index 3:
//     - with mutation of current array;
//     - do not mutate current array;
//     Display created arrays in the console.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// solution via splice-mwthod with mutation of the current arr:
// arr.splice(3, 0, 'test1');
// console.log(arr); // [0, 1, 2, 'test1', 3, 4, 5, 6, 7]

// solution via slice-method/spred operator without mutation of the current arr:
// const withTestArr = [...arr.slice(0, 3), 'test2', ...arr.slice(3)];
// console.log(withTestArr); // [0, 1, 2, 'test2', 'test1', 3, 4, 5, 6, 7]
// console.log(arr); // [0, 1, 2, 'test1', 3, 4, 5, 6, 7]

// =====================Task 05===================================
// UA: Створіть масив з різними типами елементів. На основі цього
//     масиву створіть рядок – об'єднайте усі елементи масиву,
//     використовуючи визначений роздільник.
// EN: Create an array of different types of elements. Create a string
//     on the basis of this array. This string should contain all elements
//     from an array separated by certain delimeter.

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

// =====================Task 05===================================
// UA: В нас є масив чисел. Знайдіть max чи мin елемент масиву.
// EN: We have an array of numbers. Find the max or min element of the array.

// const arr = [2, 24, -2, 12, 7, -2, 9, 4];

// solution for max via built-in Math-func and spred-operator:
// let maxEl = Math.max(...arr);
// or
// let maxEl = Math.max.apply(null, arr);

// // solution for max via for-loop and if-operator:
// let maxEl = arr[0];
// for (let i = 1; i < arr.length; i++) {
// if (arr[i] > maxEl) {
// 	maxEl = arr[i];
// }
// }
// solution for max via for-loop and ternary-operator:
// for (let i = 1; i < arr.length; i++) {
// 	maxEl = arr[i] > maxEl ? arr[i] : maxEl;
// }
// solution for max via for-loop and built-in Math func:
// for (let i = 1; i < arr.length; i++) {
// 	maxEl = Math.max(arr[i], maxEl);
// }
// console.log(maxEl);

// solution for min via reduce-method and built-in Math func:
// let minEl = arr.reduce((acc, next) => Math.min(acc, next));
// solution for min via sort-method and built-in Math func:
// if you sort the array in descending order, the last element
// will have the smallest value:
// arr.sort((num1, num2) => num2 - num1);
// let minEl = arr[arr.length - 1];
// or
// let minEl = arr.pop(); // when arr can be mutable
// console.log(minEl); // -2

// =====================Task 06===================================
// UA: В нас є масив чисел. Підрахуйте суму чисел масиву.
// EN: We have an array of numbers. Calculate the sum of the
//     numbers in the array.

// const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6];

// // solution via for-loop:
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }

// // solution via reduce-method:
// let sum = arr.reduce((acc, next) => acc + next, 0);

// console.log(sum);

// =====================Task 07===================================
// UA: В нас є масив чисел. Поміняйте порядок елементів на протилежний.
//     Спробуйте зробити це декількома способами.
// EN: We have an array of numbers. Reverse the order of the elements.
//     Try to do this in several ways.

// const arr = [1, 1, 2, 3, 4, 5, 6, 7, 7];

// // solution via reverse-method:
// const reversedArr = arr.reverse(); // but mutate the original arr
// so we can take the copy of original one like this:
// const reversedArr = [...arr].reverse();
// console.log(reversedArr); // [7, 7, 6, 5, 4, 3, 2, 1, 1];

// // solution via toReversed-method:
// const reversedArr = arr.toReversed();
// console.log(reversedArr); // [7, 7, 6, 5, 4, 3, 2, 1, 1];

// // solution via for-loop and push-method:
// const reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
// 	reversedArr.push(arr[i]);
// }
// console.log(reversedArr); // [7, 7, 6, 5, 4, 3, 2, 1, 1];

// // solution via map-method, length and index:
// const reversedArr = arr.map(
// 	(element, index, array) => array[array.length - index - 1]
// );
// console.log(reversedArr); // [7, 7, 6, 5, 4, 3, 2, 1, 1];

// // solution via spred-operator and pop-method:
// const reversedArr = [...arr].map(arr.pop, arr);
// or const reversedArr = [...arr].map([].pop, arr);
// console.log(reversedArr); // [7, 7, 6, 5, 4, 3, 2, 1, 1];
// arr.pop is a function that removes the last element from the array
// and returns it. map is used to call arr.pop on each element of the
// array. However, as you pop elements from arr, the array itself is
// modified. The key point to note here is that map iterates over
// the original length of the array, but the array's length is modified
// as elements are popped, leading to unexpected behavior.

// =====================Task 08===================================
// UA: В нас є масив arr з довільними типами елементів в ньому.
//     Відфільтруйте усі елементи, які мають falsy значення.
//     Зробіть це декількома способами.
// EN: We have an array with arbitrary types of elements in it.
//     Filter out all elements that have a value of falsy.
//     Do this in several ways.

// const arr = [{}, 0, true, false, 'gang nam style', '', 42, NaN, [], undefined];

// // solution via for-loop, push-method and !!-operator:
// let isNotFalsyArr = [];
// for (let i = 0; i < arr.length; i++) {
// 	if (!!arr[i]) {
// 		isNotFalsyArr.push(arr[i]);
// 	}
// }

// // solution via filter-method and !!-operator:
// let isNotFalsyArr = arr.filter((el) => !!el);
// or
// let isNotFalsyArr = arr.filter((el) => Boolean(el));
// or
// let isNotFalsyArr = arr.filter(Boolean);

// console.log(isNotFalsyArr); // [{}, true, 'gang nam style', 42, []];

// =====================Task 09===================================
// UA: Створіть масив arr з будь-яких елементів рядків та чисел.
//     Потрібно знайти індекс вказаного елементу масиву el та вивести
//     його в консоль. А тепер знайдіть індекс такого самого елементу
//     далі (з наступної позиції). Чи можете знайти індекс другого
//     вказаного елементу, але який стоїть тільки на непарній позиції?
// EN: Create an array of any elements of strings and numbers. Find
//     the index of a particular element in the array and display it
//     in the console. Than find the index of the same element further,
//     from the next position. Can you find the index of the second
//     specified element, but the one that stands only in an odd position?

// const arr = [23, 'rgb', 2, 'jt', 'qq', 2.44, 'af', 4.6, 7, 'qq', 'ew', 'af'];
// let el = 'qq';
// let el2 = 'af';

// // solution via indexOf-method:
// let foundIndex = arr.indexOf(el);
// console.log(foundIndex); // 4
// foundIndex = arr.indexOf(el, 5);
// console.log(foundIndex); // 9

// // solution via indexOf-method and &&-operator:
// let otherIndex = arr.findIndex((value, index, arr) => {
// 	return value === el2 && index % 2 === 1;
// });
// console.log(otherIndex); // 11

// =====================Task 10===================================
// UA: Отримайте з рядка символів 'a big brown fox jumps over the lazy
//     dog' новий масив слово-виразів, який містить елементи, довжина
//     яких не більше 3 символів. Результат покажіть в консолі.
// EN: Get the new array of words from the string 'a big brown fox
//     jumps over the lazy dog'. This array should contain only words,
//     the length of which is 3 or less characters. Display it in the
//     console.

// let str = 'a big brown fox jumps over the lazy dog';

// // solution via filter-method:
// const myArr = str.split(' ');
// const shortStrArr = myArr.filter((el) => el.length <= 3);
// console.log(shortStrArr); // ['a', 'big', 'fox', 'the', 'dog']

// =====================Task 11===================================
// UA: Створіть масив, який містить як рядки символів так і числа.
//     Перевірте чи містить масив лише раядки символів?
//     Результат покажіть в консолі.
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

// const arr1 = ['sony', 'hp', 'apple', 'dell', 'accer'];
// const arr2 = [24, 17, 344, 32, 8, 5422, 4, 42];
// const arr3 = ['24', '17', '8', '5422', '4', '42'];
// const arr4 = ['asus', 22, '17', 'sony', 'hp', '18', 'apple', 42, 'asus'];

// // solution via typeof-operator:
// const myStrArr1 = arr1.every((el) => typeof el === 'string');
// const myStrArr2 = arr2.every((el) => typeof el === 'string');
// const myStrArr3 = arr3.every((el) => typeof el === 'string');
// const myStrArr4 = arr4.every((el) => typeof el === 'string');
// console.log(myStrArr1); // true
// console.log(myStrArr2); // false
// console.log(myStrArr3); // true
// console.log(myStrArr4); // false

// =====================Task 12===================================
// UA: Отримайте об'єднаний рядок символів з масиву arr елементами
//     якого є окремі символи рядка використовуючи метод reduce.
// EN: Get a united string of characters from the array whose elements
//     are individual characters of the string using the reduce method.

// const arr = ['h', 'e', 'l', 'l', 'o'];

// // solution via reduce-method:
// const greeting = arr.reduce((acc, letter) => {
// 	const currentStr = acc + letter;
// 	return currentStr;
// }, '');

// console.log(greeting); // hello

// =====================Task 13===================================
// UA: В нас є масив [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2]. На його
//     основі створити новий масив [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2]:
//     перша частина - від'ємні числа у тій самій послідовності;
//     друга частина - усі наявні нулі;
//     третя частина - позитивні числа у тій самій послідовності;
// EN: We have an array: [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2].
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2]:
//     first part - negative values from the original array in the same order;
//     second part - all existing zeros;
//     third part - positive values from the original array in the same order.

// const arr = [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2];

// // solution via filter and concat methods and spred-operators:
// const negativeSubArr = arr.filter((num) => num < 0);
// console.log('negativeSubArr- ', negativeSubArr); // [-1, -2, -4]
// const withNullSubArr = arr.filter((num) => num === 0);
// console.log('withNullSubArr- ', withNullSubArr); // [0, 0]
// const positiveSubArr = arr.filter((num) => num > 0);
// console.log('positiveSubArr- ', positiveSubArr); // [3, 12, 100001, 7, 2]
// this is wrong because we've got a string. Here is concatenating arrays
// and strings together which results in a string representation of the arrays
// being concatenated with commas:
// const shuffledArr =
// 	negativeSubArr + ',' + withNullSubArr + ',' + positiveSubArr;
// this is right because concatenate the arrays themselves instead of
// their string representations:
// const shuffledArr = negativeSubArr.concat(withNullSubArr, positiveSubArr);
// or
// const shuffledArr = [...negativeSubArr, ...withNullSubArr, ...positiveSubArr];

// console.log(shuffledArr); // [-1, -2, -4, 0, 0, 3, 12, 100001, 7, 2]

// solution via function creation:
// const shuffledArr = (array) => {
// 	return array
// 		.filter((num) => num < 0)
// 		.concat(
// 			array.filter((num) => num === 0),
// 			array.filter((num) => num > 0)
// 		);
// };
// console.log(shuffledArr(arr));

// =====================Task 14===================================
// UA: Є рядок символів представлений у виді rgb-кольору, наприклад
//     'rgb(255, 255, 78)'. Необхідно вичленити з цього рядка символів
//      одні числа та вивести їх у консоль через роздільник "-".
// EN: There is a string representing the rgb color, for example
//     'rgb(255, 255, 78)'. It is necessary to extract the numbers of
//     colors from the string and output them to the console through
//     the "-" separator.

// let str = 'rgb(255, 255, 78)';

// // solution via methods chaining slice, split and join:
// let dashedNums = str.slice(4, -1).split(', ').join('-');
// console.log(dashedNums); // 255-255-78

// // solution via slice and replaceAll methods:
// let depictedNums = str.slice('rgb('.length, -1);
// extract the substring that starts right after 'rgb(' and
// ends at the second-to-last character of the string
// console.log(depictedNums); // '255, 255, 78'
// let dashedNums = depictedNums.replaceAll(', ', '-');
// replace all of the occurrences of ', ' with '-'
// console.log(dashedNums); // 255-255-78

// // using regExp:
// const filteredStr = (string) =>
// 	string.replace(/, /g, '-').replace(/rgb/g, '').replace(/[()]/g, '');
// let dashedStr = filteredStr(str);
// console.log(dashedStr); // 255-255-78

// =====================Task 15===================================
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

// // solution via join and flat methods:
// const arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log(arr); // [Array(3), Array(3), Array(3)]
// arr.forEach((el) => console.log(el.join(' '))); // get this look
// //     1 2 3
// //     4 5 6
// //     7 8 9
// const flattenArr = arr.flat();
// console.log(flattenArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// =====================Task 16===================================
// UA: Створіть масив чисел без повторень від 1 до 20 в рандомному порядку.
//     Відсортувати масив по збільшенню. Виведіть його в консоль.
//     Отримайти у консолі масив, відсортований у зворотньому порядку.
// EN: Create an array of numbers in the range from 1 to 20 in random
//     order without any repeats. Sort this array in ascending order.
//     Display it in the console. Create a copy of the previous array
//     in reverse order. Display it in the console.

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

// Task 12
// UA: Створити масив з будь-яких елементів який включає і числа і символи рядка.
//     Отримати випадковий елемент масиву та вивести його в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// const arr = ['scss', 42, 2, 'JavaScript', 'px', 4, 5, 6, 7, 'html', 'node', 8, 9, 0];

// let randomEl = arr[Math.floor(Math.random() * arr.length)];
// console.log(randomEl);

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
