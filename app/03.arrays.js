console.log('Topic: Arrays');

// ===========================Task 1===================================
// UA: 1. Створіть масив styles з елементами "Jazz", "Blues".
//     2. Додайте в кінець значення "Rock-n-Roll".
//     3. Замініть передостаннє значення з кінця на "Classics".
//     4. Видаліть перший елемент з масиву та виведіть його в консоль.
//     5. Додайте на початок два елементи зі значениями "Rap" та "Reggae".
//     6. Видаліть останній елемент масиву та покажіть його у консолі.
//     Кожен раз виводьте отриманий масив у консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the beforlast but one element with the new value "Classics".
//     4. Remove the first element from the array and display it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Remove the last element of the array and display it in the console.
//     Output the resulting array to the console each time.

// solution via array methods like push(), pop() shift(), unshift() and splice():
// const styles = ['Jazz', 'Blues'];
// console.log('initially created arr > ', styles); // ['Jazz', 'Blues']
// styles.push('Rock-n-Roll');
// console.log('added Rock-n-Roll > ', styles); // ['Jazz', 'Blues', 'Rock-n-Roll']
// // styles.splice(1, 1, "Classics"); // but it depens on the length of an array
// styles.splice(styles.length - 2, 1, 'Classics'); // it is not depens on the length
// console.log('removed and inserted beforlast el > ', styles); // ['Jazz', 'Classics', 'Rock-n-Roll']
// const deletedEl = styles.shift();
// console.log('removed first el > ', deletedEl); // Jazz
// styles.unshift('Rap', 'Reggae');
// console.log('added two els at the begining > ', styles); // ['Rap', 'Reggae', 'Classics', 'Rock-n-Roll']
// console.log('removed last el > ', styles.pop()); // Rock-n-Roll
// console.log('resulting arr > ', styles); // ['Rap', 'Reggae', 'Classics']
// =====================================================================

// ============================Task 2===================================
// UA: Ми маємо масив рядків arrayList. Як очистити масив
//     в JavaScript? Покажіть щонайменше 3 можливих способи?
// EN: We have an array of string arrList. How to empty
//     an array in JavaScript? Show at least 3 possible ways?

// let arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// solution via setting the arrayList variable to a new empty array:
/* this solution is recommended if you don’t have references to
   the original ArrayList elsewhere, as it actually creates a new
   empty array */
// arrayList = []; // []

// solution via setting its prop length to 0:
/* this way of emptying the array also updates all reference 
   variables that point to the original array */
// arrayList.length = 0; // []

// solution via splice() method and prop length:
// arrayList.splice(0, arrayList.length); // []
// =====================================================================

// ============================Task 3===================================
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

// solution via using prop length and not deleting last element:
// console.log(weirdArr[weirdArr.length - 1]); // [7, 9]

// solution via at() method and not deleting last element:
// console.log(weirdArr.at(-1)); // [7, 9]

// console.log(weirdArr); // [[7, [7], 2, 'tralala'], [7, 5, 'test'], [7, 9]];

// solution with deleting last element:
// console.log(weirdArr.pop()); // [7, 9]
// console.log(weirdArr); // [[7, [7], 2, 'tralala'], [7, 5, 'test']];
// =====================================================================

// ============================Task 4===================================
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

// solution via push() method and mutating the current arr:
// console.log('this is arr', arr); // [1, 2, 3, 4, 5];
// arr.push(6);
// console.log('modifiedArrWith6', arr); // [1, 2, 3, 4, 5, 6];

// solution via spred operator and not mutating the current array:
// const arrWith7 = [...arr, 7]; // спочатку зробили копію
// console.log('arrWith7 ', arrWith7); // [1, 2, 3, 4, 5, 6, 7];
// console.log('previousArrWith6', arr); // [1, 2, 3, 4, 5, 6];
// =====================================================================

// ============================Task 5===================================
// UА: Створіть масив будь-яких елементів. Вставте новий елемент
//     'test1' під індексом 3, але так, щоб:
//     - модифікувати поточний масив;
//     - без модифікації поточного масиву.
//     Виведіть створені масиви у консоль.
// EN: Create an array of any elements. Insert a new element 'test1' with
//      index 3: - with mutation of current array;
//               - do not mutate current array;
//     Display created arrays in the console.

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];

// solution via splice() method and mutating the current arr:
// arr.splice(3, 0, 'test1');
// console.log(arr); // [0, 1, 2, 'test1', 3, 4, 5, 6, 7]

// solution via slice() method, spred operator and not mutating the current arr:
// const withTestArr = [...arr.slice(0, 3), 'test1', ...arr.slice(3)];
// console.log(withTestArr); // [0, 1, 2, 'test1', 3, 4, 5, 6, 7]
// console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7]
// =====================================================================

// ============================Task 6===================================
// UА: Ми маємо масив fruits елементами якого є рядки. Замініть його
//     другий елемент на слово 'kiwi', але так, щоб:
//     - модифікувати поточний масив (покажіть щонайменше 2 способи);
//     - без модифікації поточного масиву (покажіть щонайменше 3 способи).
//     Виведіть змінений масив та початковий масив у консоль.
// EN: We have an array fruits whose elements are strings. Replace its
//     second element with the word 'kiwi', but so that:
//     - with mutation of current array (show 2 ways at least);
//     - do not mutate current array (show 3 ways at least);
//     Output the modified array and the original array to the console.

// const fruits = ['mango', 'apple', 'banana'];

// solution via replase by index with mutation:
// fruits[1] = 'kiwi';
// console.log('fruits tropical > ', fruits); // ['mango', 'kiwi', 'banana']

// solution via splice() method with mutation:
// fruits.splice(1, 1, 'kiwi');
// console.log('fruits tropical > ', fruits); // ['mango', 'kiwi', 'banana']

// solution via spred operator and not mutating the current arr:
// const tropicalFruits = [...fruits]; // зробили спочатку копію масиву
// tropicalFruits[1] = 'kiwi';

// solution via map-method and not mutating the current arr:
// const tropicalFruits = fruits.map((fruit, index) => {
// 	if (index === 1) {
// 		return 'kiwi';
// 	}
// 	return fruit;
// });

// solution via with() method and not mutating the current arr:
/* the with() method changes the value of a given index in the array, 
   returning a new array with the element at the given index replaced
   with the given value. The original array is not modified */
// const tropicalFruits = fruits.with(1, 'kiwi');

// solution via toSpliced() method and not mutating the current arr:
// const tropicalFruits = fruits.toSpliced(1, 1, 'kiwi');

// usage check:
// console.log('fruits tropical > ', tropicalFruits); // ['mango', 'kiwi', 'banana']
// console.log('fruits original > ', fruits); // ['mango', 'apple', 'banana'];
// =====================================================================

// ============================Task 7===================================
// UA: В нас є масив arr з різними типами елементів та матриця (масив
//     масивів). Напишіть код який об'єднає усі елементи масиву, по
//     визначеному роздільнику.
// EN: We have an array arr with different types of elements and a matrix
//    (an array of arrays). Write the code that will unite all elements
//    of the array by the specified separator.

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

// const matrix = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// solution via join() method:
/* The join() method of Array instances creates and returns a new string by 
   concatenating all of the elements in this array, separated by commas or 
   a specified separator string. If the array has only one item, then that 
   item will be returned without using the separator.*/
// const string1 = arr.join('; ');
// console.log(string1); // abracadabra; 1,2,3,4; lalala; 123; {}; function(){return 42}
/* join recursively converts each element, including other arrays, to strings. But you
   can only control the separator of the first level, while deeper levels always use 
   the default comma */
// const string2 = matrix.join(' + ');
// const string3 = matrix.join('-');
// console.log(string2); // 1,2,3 + 4,5,6 + 7,8,9
// console.log(string3); // 1,2,3-4,5,6-7,8,9
// =====================================================================

// ============================Task 8===================================
// UA: В нас є масив чисел. Знайдіть max чи мin елемент масиву.
// EN: We have an array of numbers. Find the max or min element of the array.

// const arr = [2, 24, -2, 12, 7, -2, 9, 4];

// solution for max via built in Math-func and spred operator:
// let maxEl = Math.max(...arr);
// or
// let maxEl = Math.max.apply(null, arr);

// solution for max via array reduce() method and ternary operator:
// let maxEl = arr.reduce((prevNum, currentNum) =>
// 	prevNum > currentNum ? prevNum : currentNum
// );

// // solution for max via for-loop and if operator:
// let maxEl = arr[0];
// for (let i = 1; i < arr.length; i++) {
//  if (arr[i] > maxEl) {
// 	  maxEl = arr[i];
//  }
// }

// solution for max via for-loop and ternary operator:
// for (let i = 1; i < arr.length; i++) {
// 	maxEl = arr[i] > maxEl ? arr[i] : maxEl;
// }

// solution for max via for-loop and built in Math func:
// for (let i = 1; i < arr.length; i++) {
// 	maxEl = Math.max(arr[i], maxEl);
// }
// console.log(maxEl);

// solution for max via func and while loop:
/* This function loops through an array comparing each value with 
   the highest value found */
// function myArrayMax(arr) {
// 	let len = arr.length;
// 	let max = -Infinity;
// 	while (len) {
// 		if (arr[len] > max) {
// 			max = arr[len];
// 		}
// 		len--;
// 	}
// 	return max;
// }
// console.log(myArrayMax(arr)); // 24

// solution for min via built in Math-func and spred operator:
// let minEl = Math.min(...arr);
// or
// let minEl = Math.min.apply(null, arr);

// solution for min via reduce() method and built in Math-func:
// let minEl = arr.reduce((acc, next) => Math.min(acc, next));

// solution for min via sort() method and built in Math-func:
/* if you sort the array in descending order, the last element
   will have the smallest value */
// arr.sort((num1, num2) => num2 - num1);
// let minEl = arr[arr.length - 1];
// or
// let minEl = arr.pop(); // when arr can be mutable
// console.log(minEl); // -2

// solution for min via func and while loop:
/* This function loops through an array comparing each value with 
   the lowest value found */
// function myArrayMin(arr) {
// 	let len = arr.length;
// 	let min = Infinity;
// 	while (len--) {
// 		if (arr[len] < min) {
// 			min = arr[len];
// 		}
// 	}
// 	return min;
// }
// console.log(myArrayMin(arr)); // -2

// =====================================================================

// ============================Task 9===================================
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
// =====================================================================

// ============================Task 9===================================
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

/* arr.pop is a function that removes the last element from the array
   and returns it. map is used to call arr.pop on each element of the
   array. However, as you pop elements from arr, the array itself is
   modified. The key point to note here is that map iterates over
   the original length of the array, but the array's length is modified
   as elements are popped, leading to unexpected behavior. */

// ============================Task 10===================================
// UA: В нас є масив arr з довільними типами елементів в ньому.
//     Відфільтруйте усі елементи, які мають falsy значення.
//     Зробіть це декількома способами.
// EN: We have an array with arbitrary types of elements in it.
//     Filter out all elements that have a value of falsy.
//     Do this in several ways.

// const arr = [{}, 0, true, false, 'gang nam style', '', 42, NaN, [], undefined];

// solution via for-loop, push-method and !!-operator:
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
// ======================================================================

// ============================Task 11===================================
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

// // solution via indexOf-method and &&-operator for odd position:
// let otherIndex = arr.findIndex((value, index, arr) => {
// 	return value === el2 && index % 2 === 1;
// });
// console.log(otherIndex); // 11
// ======================================================================

// ============================Task 12===================================
// UA: Отримайте з рядка символів 'a big brown fox jumps over the lazy
//     dog' новий масив слово-виразів, який містить елементи, довжина
//     яких не більше 3 символів. Результат покажіть в консолі.
// EN: Get the new array of words from the string 'a big brown fox
//     jumps over the lazy dog'. This array should contain only words,
//     the length of which is 3 or less characters. Display it in the
//     console.

// let str = 'a big brown fox jumps over the lazy dog';

// // solution via filter-method:
// const myArr = str.split(' '); // ['a', 'big', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// const shortStrArr = myArr.filter((el) => el.length <= 3);
// console.log(shortStrArr); // ['a', 'big', 'fox', 'the', 'dog']
// ======================================================================

// ============================Task 13===================================
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
// ======================================================================

// ============================Task 14===================================
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
// ======================================================================

// ============================Task 15===================================
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

// solution via filter method:
// const negativeSubArr = arr.filter((num) => num < 0);
// console.log('negativeSubArr- ', negativeSubArr); // [-1, -2, -4]
// const withNullSubArr = arr.filter((num) => num === 0);
// console.log('withNullSubArr- ', withNullSubArr); // [0, 0]
// const positiveSubArr = arr.filter((num) => num > 0);
// console.log('positiveSubArr- ', positiveSubArr); // [3, 12, 100001, 7, 2]

// console.log(negativeSubArr + withNullSubArr + positiveSubArr); // -1,-2,-40,03,12,100001,7,2
/* but this is wrong because we've got a string. Here is concatenating arrays
   and strings together which results in a string representation of the arrays
   being concatenated with commas: */
// const shuffledArr =
// 	negativeSubArr + ',' + withNullSubArr + ',' + positiveSubArr;
// console.log(shuffledArr); // -1,-2,-4,0,0,3,12,100001,7,2

// solution via concat method:
// here we concatenate the arrays themselves instead of their string representations
// const shuffledArr = negativeSubArr.concat(withNullSubArr, positiveSubArr);
// or
// const shuffledArr = [...negativeSubArr, ...withNullSubArr, ...positiveSubArr];
// console.log(shuffledArr); // [-1, -2, -4, 0, 0, 3, 12, 100001, 7, 2]

// solution via func creation using chain of array methods:
// const shuffledArr = (array) => {
// 	return array
// 		.filter((num) => num < 0)
// 		.concat(
// 			array.filter((num) => num === 0),
// 			array.filter((num) => num > 0)
// 		);
// };
// console.log(shuffledArr(arr));
// ======================================================================

// ============================Task 16===================================
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

// solution via join and flat methods:
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
// console.log(flattenArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]z
// ======================================================================

// ============================Task 17===================================
// UA: Створіть масив з елементами що повторюються. На його основі створіть
//     новий масив унікальних елементів (видаліть дублі). Виведіть новий
//     масив у консоль.
// EN: Create an array with duplicate elements. Create new one on the basis
//     of the originl array but remove duplicated elements. Display it in
//     the console.

// const arr = ['sony', 'hp', 'apple', 'sony', 'dell', 'sony', 'hp', 'dell', 'hp'];

// solution via newSet:
// const set = new Set(arr);
// const uniq = [...set]; // or const uniq = Array.from(set);
// console.log(uniq); // ['sony', 'hp', 'apple', 'dell']

// solution viaObject.valuesn method:
// const uniqObj = {};
// for (let el of arr) {
// 	uniqObj[el] = el; // об'єкт не може містити два одинакових ключа
// }
// const uniq = Object.values(uniqObj);
// console.log(uniq); // ['sony', 'hp', 'apple', 'dell']
// ======================================================================

// ============================Task 18===================================
// UA: Створити масив з будь-яких елементів який включає і числа і символи
//     рядка. Отримати випадковий елемент масиву та вивести його в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// const arr = ['scss', 42, 2, 'JavaScript', 'px', 4, 7, 'html', 'node', 8, 9, 0];

// solution via built-in methods:
// let randomEl = arr[Math.floor(Math.random() * arr.length)];
// console.log(randomEl);

// solution via randomly shuffle a whole arr and than pick un any elenent:
// arr.sort(function () {
// 	return 0.5 - Math.random();
// });

/* But array.sort(), is not accurate. It will favor some elements over the
 others. The most popular correct method, is called the Fisher Yates shuffle,  
 and was introduced in data science as early as 1938!
*/

// for (let i = arr.length - 1; i > 0; i--) {
// 	let j = Math.floor(Math.random() * (i + 1));
// 	let k = arr[i];
// 	arr[i] = arr[j];
// 	arr[j] = k;
// }

// console.log(arr[1]); // let's take a second element
// ======================================================================

// ============================Task 19===================================
// UA: Створіть масив чисел без повторень від 1 до 20 в рандомному
//     порядку. Відсортувати масив на збільшенню. Виведіть його в консоль.
//     Отримайти у консолі масив, відсортований у зворотньому порядку.
// EN: Create an array of numbers in the range from 1 to 20 in random
//     order without any repeats. Sort this array in ascending order.
//     Display it in the console. Create a copy of the previous array
//     in reverse order. Display it in the console.

// solution via manually array creation:
// const arr = [
// 	2, 5, 3, 16, 8, 4, 1, 9, 11, 18, 7, 12, 10, 19, 13, 6, 17, 14, 20, 15,
// ];

// solution via array chain methods fill, map, sort and built in Math func
// Create an array with random values from 0 to 19 without any repeats
// let arr = new Array(20)
// 	.fill()
// 	.map((a, i) => (a = i))
// 	.sort(() => Math.random() - 0.5);

// solution via array chain methods fill, map, sort
// let arr = Array.from(Array(20).keys()).sort((_) => Math.random() - 0.5);

// console.log('original- ', arr); // [17, 8, 3, 11, 18, 6, 1, 13, 9, 0, 7, 4, 5, 2, 10, 14, 12, 16, 15, 19]
// const sortedArr = arr.sort((a, b) => a - b); // arr is mutated
// console.log('sorted- ', sortedArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// const reversedArr = sortedArr.reverse(); // sortedArr is mutated
// console.log('reversed- ', reversedArr); // [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// solution via using toSorted toReversed methods:
// const sortedArr = arr.toSorted((a, b) => a - b); // arr is NOT mutated
// console.log('sorted- ', sortedArr);
// console.log('original- ', arr); // arr is not mutated
// const reversedArr = sortedArr.toReversed(); // sortedArr is not mutated
// console.log('reversed- ', reversedArr);
// ======================================================================

// ============================Task 20===================================
// UA: Ми маємо довгий рядок символів str. Як розділити цей рядок на підрядки
//     довжиною n-символів, для прикладу по 4 символи? Результат отримайте у
//     виді масиву, елементами якого є отримані підрядки.
// EN: We have the long string str. How to split this string into substrings
//     each N characters long, for example 4 characters each? Get the result
//     in the form of an array, the elements of which are the received substrings.

// const str = 'codingbeautydev';

// solution via for loop:
// const arr = []; // визначаємо результуючий масив
// let n = 4; // визначаємо n - кількість символів в підрядку
// // перебираємо рядок з кроком n
// for (let i = 0; i < str.length; i += n) {
// 	// отримати підрядок між індексом i та індексом i + n, виключаючи його з загального рядка
// 	arr.push(str.substring(i, i + n)); // додавання підрядка до результуючого масиву
// }
// console.log(arr); // ['codi', 'ngbe', 'auty', 'dev']

// solution via reduce method:
// Необхідно зауважити, що цей метод у 30 разів повільніший ніж попередній
// let copiedStr = [...str]; // конвертуємо в масив символів convert
// let n = 4; // визначаємо n - кількість символів в підрядку
// console.log(copiedStr); // ['c', 'o', 'd', 'i', 'n', 'g', 'b', 'e', 'a', 'u', 't', 'y', 'd', 'e', 'v']
// let result = copiedStr.reduce((substrings, char) => {
// 	(substrings.at(-1)?.length ?? n) < n
// 		? [...substrings.slice(0, -1), substrings.at(-1) + char]
// 		: [...substrings, char],
// 		[];
// });
// console.log(result); // ['codi', 'ngbe', 'auty', 'dev']
// ======================================================================

// ============================Task 21===================================
// UA: Маємо два одинакових масива. Проте коли їх порівнювати нестрогим
//     порівнянням, то отримаємо false. Як нам все ж таки порівняти ці масиви
//     щоб результат був true?
// EN: We have two identical arrays. However, when they are compared by a
//     not strict comparison, we will get false. How should we compare these
//     arrays so that the result is true?

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// console.log(arr1 == arr2); // false

// solution via JSON.stringify() method:
// console.log(JSON.stringify(arr1) == JSON.stringify(arr2)); // true
// ======================================================================

// ============================Task 22===================================
// UA: Маємо одне рішення, що створює масив з п'яти елементів по заданій 
//     довжині і далі ланцюговим методом перетворює масив помноживши кожен 
//     елемент на 2. Вдоскональте метод і для цього використайте другий 
//     параметер Array.from. А можете використати цей параметер для 
//     створення матриці з трьох рядів? Покажіть рішення.
// EN: We have one solution that creates an array of five elements of a 
//     given length and then chain-transforms the array by multiplying each 
//     element by 2. Improve the method and use the second parameter of 
//     Array.from for this. Can you use this parameter to create a matrix 
//     with three rows? Show the solution.

// const range = Array.from({length: 5}).map((_, i) => i * 2); 
// // Result: [0, 2, 4, 6, 8]

// solution via Array.from() method using second parameter:
/* Відомо, існує універсальний метод Array.from, який приймає ітероване або 
   масивоподібне значення та створює з нього "справжній" масив. Синтаксис 
   Array.from(obj[, mapFn, thisArg]) створює справжній масив (Array) з 
   ітерованого або масивоподібного об'єкта obj, і ми можемо використовувати 
   для нього методи масивів. Необов'язковий другий аргумент mapFn може бути 
   функцією, яка буде застосована до кожного елемента перед додаванням його 
   до масиву, а thisArg дозволяє нам встановити для нього це значення. 
   Хоча більшість розробників знають Array.from() для перетворення масивоподібних 
   об'єктів, його другий параметр — це потужня річ, яка поєднує створення та 
   перетворення в один крок. Рішення з використанням другого параметру будe:
*/
// const range = Array.from({length: 5}, (_, i) => i * 2);
// console.log(range); // [0, 2, 4, 6, 8]

/* Для матриці спочатку потрібно сформувати ряд у якому будуть три елементи
   а кожен елемент представляє собою колону - тобто кожен ряд має три колони
   і таких рядів має бути три.
*/
// const matrix = Array.from({length: 3}, (_, row) => 
//    Array.from({length: 3}, (_, col) => col * 3 + row)
// );
// console.log(matrix); // [[0,1,2], [3,4,5], [6,7,8]]

// Ось ще подібний приклад із застосуванням другого параметра метода 
// Array.from - це генерація 10 значень унікальних id:
// const uniqueIds = Array.from({length: 10}, () => 
//   Math.random().toString(36).substring(2, 9)
// );
// console.log(uniqueIds); // ["1vtlq36","z9h4p0y","bz7782o","ksm4bg5","vjgzdqh","i8u43t2","r2rek8s","v8e2h7w","7263k7q","zdz6tsd"]
// ======================================================================


