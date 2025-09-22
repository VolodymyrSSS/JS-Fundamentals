console.log('Topic: Date object');

// ============================Task 01================================================
// UA: Виведіть назву дати тижня у консоль. При рішенні використайте оператор switch.
// EN: Print the name of the day of the week to the console. Use a switch statement
//     for the solution.

// solution via switch
/*Спочатку отримаємо теперішню повну дату і вже з неї візьмемо назву дня тижня.
  Тому, використаємо вбудований в JS об'єкт Date, який зберігає дату, час і дозволяє
  застосувати методи для керування датою/часом. Тобто, вбудований метод new Date() 
  без аргументів дозволить отримати теперішню повну дату типу:
    "Mon Sep 22 2025 08:07:10 GMT+0300 (за східноєвропейським літнім часом)"
  І вже маючи повну дату, застосуємо метод .getDay() щоб отримати день тижня від 
  0 (неділя) до 6 (субота). Перший день завжди неділя, у деяких країнах це не так, 
  але це не можна змінити у цьому методі. А щоб застосувати синтаксис оператора 
  switch в case будемо зазначати дні тижня, які починаються з неділі і тоді "0" 
  буде відповідати "Sunday". Таким чином, рішення буде:
*/

// let day;

// switch(new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case  6:
//         day = "Saturday";
// }

// console.log("Сьогодні є ", day);
// ===================================================================================

// ============================Task 02================================================
// UA: Створіть дату 30 грудня 1969 року задавши кількість мілісекунд. Виведіть його 
//     у консоль. Покажіть ще одно рішення визначення дати по заданим аргументам.
// EN: Create the date December 30, 1969, given the number of milliseconds. Output it 
//     to the console. Show another solution for determining the date from the given arguments.

// solution via timestamp
/* Вбудований в JS об'єкт Date може мати аргументи. Якщо аргументом є ціле число то
   таке число називають "timestamp". Більш точно: timestamp - цв кількість мілісекунд, 
   що минула з початку 1970 року. Проте в задачі вказана дата до 1970 року. У такому
   випадку потрібно задавати відємне значення timestamp. Крім того, потрібно мати
   велечини часу конвертовані в мілісекунди, а саме:
   1 секунда = 1000 мілісекунд; або 1 мілісекунда = 1/1000 секунди
   1 хвилина = 60сек * 1000мілісек = 60 000 мілісекунд
   1 година = 60хв * 60 000мілісек = 3600 000 мілісекунд
   1 доба = 24год * 3600 000 мілісек =  86 400 000 мілісекунд 
   але нам краще не мати так багато нулів, тому краще рахувати і писати так:
   1 доба має мілісекунд = 24год * 60хв * 60сек * 1000 мсек або 24 * 3600 * 1000
*/

// let Dec30_1969 = new Date(-48 * 3600 * 1000);
// console.log(Dec30_1969); // Tue Dec 30 1969 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)

/* Якщо у вбудованому методі new Date() є один аргумент, і це рядок символів, то 
   такий рядок парситься (розкладається) автоматично. Але при цьому аргумент 
   повинен відповідати встановленому виду, типу  ------ new Date("1969-12-30") при
   цьому отримаємо Tue Dec 30 1969 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)
   Доречі, алгоритм є такий самий, як і в методі Date.parse.
   Зауважте, час тут не визначено, тому вважається, що це північ за Гринвічем, і 
   він коригується відповідно до часового поясу, в якому виконується код.
   Тому, якщо потрібно вказати і час то аргументи методу повинні йти через кому і відповідати формі
   new Date(year, month, date, hours, minutes, seconds, ms);
   де year - рік повинен мати 4 цифри; month - місяць при цьому відлік місяців починається
   з 0 (січень) і до 11 (грудень); date - день ​​місяця, якщо він відсутній, то 
   передбачається значення 1; якщо години/хвилини/секунди/мс відсутні, вони вважаються 
   рівними 0. Рішенням буде:
*/

// let dateFor301269 = new Date(1969, 11, 30, 2, 34, 47, 567);
// console.log(dateFor301269); // Tue Dec 30 1969 02:34:47 GMT+0300 (за східноєвропейським стандартним часом)
// ===================================================================================

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
