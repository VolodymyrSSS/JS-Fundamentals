console.log('Topic: Date object');

// ===========================Task 01===================================
// UA: Задайте змінну days та проініціалізуйте її числом від 1 до 10.
//     Спробуйте ініціалізувати кількість днів рандомно. І далі,
//     перетворіть це число на кількість секунд та виведіть його в консоль.
// EN: Declare a variable days and initialize it with a number from 1 to
//     10. Try initializing the number of days randomly. And then, convert
//     this number to the number of seconds and output it to the console.

// solution via manual initializing the quantity of days:
// let days = 7;
// const msInMinute = 1000 * 60;
// const msInHour = msInMinute * 60;
// const msInDay = msInHour * 24;
// const msInYear = msInDay * 365; // we don't need it here
// // so
// let msIn7days = days * msInDay;
// console.log(msIn7days); // // 604800000

// solution via rendomly initialising the days:
// initialize variable days with a random number between 1 and 10.
// const days = Math.floor(Math.random() * 10) + 1;

// const secondsInADay = days * 24 * 60 * 60 * 1000; // calculate the number of seconds in a day
// console.log(`There are ${secondsInADay} seconds in ${days} day(s).`);
// There are 518400000 seconds in 6 day(s). or
// There are 604800000 seconds in 7 day(s). or ...
// =====================================================================

// Task 1
// RU: Создать текущую дату и вывести ее в формате dd.mm.yyyy и dd Month yyyy
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy и dd Month yyyy

// Task 2
// RU: Создать объект Date из строки '15.03.2025'.
// EN: Create an object Date from the string '15.03.2025'.

// Task 01111111111111111111111111111111111111111111 padStart
// RU: Объявите три переменных: hour, minute, second.
//     Присвойте им следующие значения: 4, 35, 5.
//     Выведите в консоль время в формате 04:35:05.
// EN: Declare three variables: hour, minute, second.
//     Assign them the following values: 4, 35, 5.
//     Display the time in the format 04:35:05 in the console.

// Task 3
// RU: Создать объект Date, который содержит:
//     1. завтрашнюю дату,
//     2. первое число текущего месяца,
//     3. последнее число текущего месяца
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month

// Task 044444444444444444444444444444444444444444444444
// Объявите три переменных: hour, minute, second. Присвойте им следующие значения:
// 10, 40, 25. Выведите в консоль время в формате 10:40:25.

// Task 4
// RU: Подсчитать время суммирования чисел от 1 до 1000.
// EN: Calculate the time of summing numbers from 1 to 1000.

// Task 5
// RU: Подсчитать количество дней с текущей даты до Нового года.
// EN: Calculate the number of days from the current date to the New Year.

// Task 0555555555555555555555555555555555555555
// Объявите переменную minute и проинициализируйте ее целым числом.
// Вычислите к какой четверти принадлежит это число и выведите в консоль.

// Task 0999999999999999999999999999999999999999
// Объявите переменную month и проинициализируйте ее числом от 1 до 12.
// Вычислите время года и выведите его в консоль.
