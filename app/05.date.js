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

// const secondsInADay = days * 24 * 60 * 60 * 1000; // calculate the number of seconds in 7 days
// console.log(`There are ${secondsInADay} seconds in ${days} day(s).`);
// ... or There are 518400000 seconds in 6 day(s). or
// There are 604800000 seconds in 7 day(s). or ...
// =====================================================================

// ===========================Task 02===================================
// UA: Створіть поточну дату та відобразіть її у форматі <дд.мм.рррр> та
//     у форматі <дд Mісяць рррр>.
// EN: Create current date and display it in the console according to the
//     format dd.mm.yyyy and in format dd Month yyyy.

/* first, let's create a new Date object for the current date, when a date
object is created, a number of methods allow you to operate on it */
// const currentDate = new Date();

// solution via using Date Get Methods:
// Format: dd.mm.yyyy
// const formattedDate1 = `${currentDate.getDate()}.${
// 	currentDate.getMonth() + 1
// }.${currentDate.getFullYear()}.`;
/* To avoid any potential confusion with months being zero-indexed in 
   JavaScript (where January is 0 and December is 11), you might want 
   to add 1 to currentDate.getMonth() when formatting the month. So, adding
   1 to currentDate.getMonth() adjusts the index to match the standard 
   human-readable month numbering and consistent with the usual month 
   numbering (1-12). 
*/
// console.log(formattedDate1);
// Format: dd month yyyy
// const months = [
// 	'January',
// 	'February',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December',
// ];
// let month = months[currentDate.getMonth()];
// const formattedDate2 = `${currentDate.getDate()} ${month} ${currentDate.getFullYear()}.`;
// console.log(formattedDate2);

// solution via creating function to pad a number with leading zeros and Date get methods:
// function to pad a number with leading zeros
// const padNumber = (number) => (number < 10 ? `0${number}` : number);

// Format: dd.mm.yyyy
// const formattedDate1 = `${padNumber(currentDate.getDate())}.${padNumber(
// 	currentDate.getMonth() + 1
// )}.${currentDate.getFullYear()}`;

// Format: dd Month yyyy
// const months = [
// 	'January',
// 	'February',
// 	'March',
// 	'April',
// 	'May',
// 	'June',
// 	'July',
// 	'August',
// 	'September',
// 	'October',
// 	'November',
// 	'December',
// ];
// const formattedDate2 = `${padNumber(currentDate.getDate())} ${
// 	months[currentDate.getMonth()]
// } ${currentDate.getFullYear()}`;
/* here I didn't add 1 to currentDate.getMonth() because for JavaScript's 
   getMonth() method (not for human) returns a zero-based index, where 
   January is 0 and December is 11. I didn't include the padding because 
   months are represented by their names, and there's no need for leading 
   zeros in that context.*/

// display the formatted dates in the console
// console.log(`Formatted Date 1 (dd.mm.yyyy): ${formattedDate1}`);
// console.log(`Formatted Date 2 (dd Month yyyy): ${formattedDate2}`);
// =====================================================================

// ===========================Task 03===================================
// UА: Створити об'єкт Date з текстового рядка '15.03.2025'. Результат
//     виведіть у консоль.
// EN: Create an object Date from the string '15.03.2025'. Enter the result
//     in the console.

// solution via split() method and destructurization:
// const dateString = '15.03.2025';
// Split the string into day, month, and year components
// const [day, month, year] = dateString.split('.');

// using constructor new Date(date string) creates a date object from a date string
/* here I created a Date object using the date string components and convert 
   them into type ISO Date - "2015-03-25" (The International Standard) */
// const dateObject = new Date(`${year}-${month}-${day}`);

// console.log(dateObject);
// =====================================================================

// ===========================Task 04===================================
// UА: Об'явіть три змінні: hour, minute, second. Задайте їм такі
//     значення: 4, 35, 5. Виведіть у консоль час у форматі 04:35:05.
// EN: Declare three variables: hour, minute, second. Assign them the following
//     values: 4, 35, 5. Display the time in the format 04:35:05 in the console.

//solution via direct use of values with function to pad a number with leading zeros:
// let hour = 4;
// let minute = 35;
// let second = 5;

// function to pad a number with leading zeros
// const padNumber = (number) => (number < 10 ? `0${number}` : number);
/* padNumber function is used to ensure that each component (hour, minute, 
   and second) is displayed with leading zeros if it is a single digit*/

// display the time in the format 'hh:mm:ss'
// console.log(`${padNumber(hour)}:${padNumber(minute)}:${padNumber(second)}`);

// solution via setDate() and getDate() methods with function to pad a number:
// const d = new Date();
// d.setHours(4);
// d.setMinutes(35);
// d.setSeconds(5);
// console.log(d); // Thu Nov 09 2023 04:30:05 GMT+0200 (Eastern European Standard Time)
// const stipulatedTime =
// 	padNumber(d.getHours()) +
// 	':' +
// 	padNumber(d.getMinutes()) +
// 	':' +
// 	padNumber(d.getSeconds());

// console.log(stipulatedTime); // 04:35:05
// =====================================================================

// ===========================Task 05===================================
// UА: Створіть об’єкт Date, який буде перадставляти собою:
//     1. завтрашній день
//     2. перший день поточного місяця
//     3. останній день поточного місяця
// EN: Create an object Date, which represents:
//     1. tomorrow
//     2. first day of the current month
//     3. last day of the current month

// solution via using getDate/setDate methods:
// for tomorrow:
// const tomorrow = new Date();
/* the setDate() method can be used to add days to a date: */
// tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(`Tomorrow: ${tomorrow}`);

// for the first day of the current month
// const firstDayOfCurMonth = new Date();
/* the setDate() method sets the day of a date object (1-31): */
// firstDayOfCurMonth.setDate(1);
// console.log(`First day of the current month: ${firstDayOfCurMonth}`);

// for the last day of the current month
/* the algorithm will be:
   - and : */
// const lastDayOfCurMonth = new Date(firstDayOfCurMonth); // create a copy of the first day
/* the setMonth() method sets the month of a date object (0-11) */
// lastDayOfCurMonth.setMonth(firstDayOfCurMonth.getMonth() + 1); // set the month to the next month
/* subtract one day to get the last day of the current month (subtraction 
   actually occurs implicitly in two steps:)*/
// lastDayOfCurMonth.setDate(0); // this sets the day of the month to 0, which is interpreted as the last day of the previous month.

// console.log(`Last day of the current month: ${lastDayOfCurMonth}`);
// =====================================================================

// ===========================Task 06===================================
// UА: Підрахувати час додавання чисел від 1 до 1000.
// EN: Calculate the time of summing numbers from 1 to 1000.

// solution via use the performance.now() method to measure the time before and after the computation:
// first to create function to calculate the sum of numbers from 1 to n
// const calculateSum = (n) => {
// 	let sum = 0;
// 	for (let i = 1; i <= n; i++) {
// 		sum += i;
// 	}
// 	return sum;
// };
// Than use the performance.now() method is used to record the start and end times
// record the start time
// const startTime = performance.now();
// calculate the sum of numbers from 1 to 1000
// const result = calculateSum(1000);
// record the end time
// const endTime = performance.now();
// console.log(endTime);
// than calculate the time taken
// const elapsedTime = endTime - startTime;

// console.log(`Sum of numbers from 1 to 1000: ${result}`);
// console.log(`Time taken: ${elapsedTime} milliseconds`);
// =====================================================================

// ===========================Task 07===================================
// UA: Обчисліть кількість років з 01.01.1970 р
// EN: Calculate the number of years since 1970/01/01

// solution via Date.now() method:
// const msInMinute = 1000 * 60;
// const msInHour = msInMinute * 60;
// const msInDay = msInHour * 24;
// const year = msInDay * 365; // calculate milliseconds in a year

/* Date.now() returns the number of milliseconds since January 1, 1970.*/
// let years = Math.round(Date.now() / year);

// console.log('Since January 1, 1970 past years ', years);
// =====================================================================

// ===========================Task 08===================================
// UA: Підрахувати кількість днів від поточної дати до Нового року.
// EN: Calculate the number of days from the current date to the New Year.

// solution via func creation and using Date.now() method:
// Function to calculate the number of days to a specific date
// const calculateDaysToTargetDate = (targetDate) => {
//   /* Date.now() returns the number of milliseconds since January 1, 1970.
//      So let's get the the number of milliseconds since January 1, 1970
//      till current date*/
//   const currentDate = Date.now();
//   const timeDifference = targetDate - currentDate; // calculate the time difference in milliseconds
//   // convert the time difference to days
//   const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

//   return daysDifference;
// };

// // calculate the number of days to New Year (January 1 of the next year)
// const targetDate = new Date();
// targetDate.setFullYear(targetDate.getFullYear() + 1, 0, 1); // January 1 of the next year

// const daysToNewYear = calculateDaysToTargetDate(targetDate);

// // Display the result in the console
// console.log(`Number of days to New Year: ${daysToNewYear} days`);

// solution via func creation and new Date() method:
// function to calculate the number of days to a specific date
// const calculateDaysToTargetDate = (targetDate) => {
// 	const currentDate = new Date();
// 	// calculate the time difference in milliseconds
// 	const timeDifference = targetDate - currentDate;

// 	// convert the time difference to days
// 	const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// 	return daysDifference;
// };

// // calculate the number of days to New Year (January 1 of the next year)
// const targetDate = new Date();
// targetDate.setFullYear(targetDate.getFullYear() + 1, 0, 1); // January 1 of the next year
// /* targetDate.getFullYear() + 1: This gets the current year and adds 1 to it,
//    representing the next year.
//    , 0, 1: This sets the month to 0 (January) and the day to 1, representing
//    January 1st of the next year.
// */

// const daysToNewYear = calculateDaysToTargetDate(targetDate);

// // Display the result in the console
// console.log(`Number of days to New Year: ${daysToNewYear} days`);
// =====================================================================

// ===========================Task 09===================================
// UA: Оголосіть змінну minute та проініціалізуйте її цілим числом.
//     Обчисліть, до якої чверті належить це число, і виведіть у консоль.
// EN: Declare a variable minute and initialize it to an integer. Calculate
//     which quarter this number belongs to and print it to the console.

// solution via if..else condition:
// let minute = 45; // Replace with your desired value

// Calculate the quarter
// let quarter;

// if (minute >= 0 && minute <= 15) {
// 	quarter = 1;
// } else if (minute > 15 && minute <= 30) {
// 	quarter = 2;
// } else if (minute > 30 && minute <= 45) {
// 	quarter = 3;
// } else if (minute > 45 && minute <= 60) {
// 	quarter = 4;
// } else {
// 	quarter = 'Invalid minute'; // Handle invalid values
// }

// solution via switch statement
// let quarter;

// switch (true) {
// 	case minute >= 0 && minute <= 15:
// 		quarter = 1;
// 		break;
// 	case minute > 15 && minute <= 30:
// 		quarter = 2;
// 		break;
// 	case minute > 30 && minute <= 45:
// 		quarter = 3;
// 		break;
// 	case minute > 45 && minute <= 60:
// 		quarter = 4;
// 		break;
// 	default:
// 		quarter = 'Invalid minute';
// }

// Print the result to the console
// console.log(`The minute ${minute} belongs to quarter ${quarter}`);
// =====================================================================

// ===========================Task 10===================================
// UA: Оголосіть змінну місяць і проініціалізуйте її числом від 1 до 12.
//     Обчисліть пору року і виведіть її в консоль.
// EN: Declare a month variable and initialize it with a number from 1 to
//     12. Calculate the time of year and print it to the console.

// let month = 8;

// solution via switch statement:
// const adjustedMonth = month - 1; // adjust month to the zero-based index
// let timeOfYear; // determine the time of year

// switch (adjustedMonth) {
// 	case 0:
// 	case 1:
// 	case 11:
// 		timeOfYear = 'Winter';
// 		break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		timeOfYear = 'Spring';
// 		break;
// 	case 5:
// 	case 6:
// 	case 7:
// 		timeOfYear = 'Summer';
// 		break;
// 	case 8:
// 	case 9:
// 	case 10:
// 		timeOfYear = 'Autumn';
// 		break;
// 	default:
// 		timeOfYear = 'Invalid month';
// }

// solution via switch and modulo operator (%):
// let timeOfYear;
/* we can use like switch (month - 1) {.. but if we're confident that
   the month variable will always be within the range 1 to 12 and you
   don't need to wrap around the values. */
// switch ((month - 1) % 12) {
// 	case 0:
// 	case 1:
// 	case 10:
// 		timeOfYear = 'Winter';
// 		break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		timeOfYear = 'Spring';
// 		break;
// 	case 5:
// 	case 6:
// 	case 7:
// 		timeOfYear = 'Summer';
// 		break;
// 	case 8:
// 	case 9:
// 	case 11:
// 		timeOfYear = 'Autumn';
// 		break;
// 	default:
// 		timeOfYear = 'Invalid month';
// }
/* month - 1: this part is used to adjust the month value to a 0-based index.
   In JavaScript, the getMonth() method returns values from 0 to 11, where 
   January is 0, February is 1, and so on. So, subtracting 1 from the month 
   variable adjusts it to a 0-based index.
   % 12: this part ensures that the adjusted month value is wrapped around 
   within the range of 0 to 11. The modulo operator (%) returns the remainder 
   after division. In this case, it ensures that the result of (month - 1) is
   within the range of 0 to 11.
   For example:
   If month is 7, (7 - 1) % 12 results in 6.
   If month is 12, (12 - 1) % 12 results in 11.
*/

// solution via switch statement and setMonth/getMonth methods:
// let timeOfYear;
// // set the month and get the adjusted month value
// const currentDate = new Date();
// currentDate.setMonth(month - 1); // adjust month to the zero-based index

// // create a new Date object after setting the month
// const adjustedDate = new Date(currentDate);
// const adjustedMonth = adjustedDate.getMonth();

// Determine the time of year using adjustedMonth
// switch (adjustedMonth) {
// 	case 0:
// 	case 1:
// 	case 11:
// 		timeOfYear = 'Winter';
// 		break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		timeOfYear = 'Spring';
// 		break;
// 	case 5:
// 	case 6:
// 	case 7:
// 		timeOfYear = 'Summer';
// 		break;
// 	case 8:
// 	case 9:
// 	case 10:
// 		timeOfYear = 'Autumn';
// 		break;
// 	default:
// 		timeOfYear = 'Invalid month'; // Handle invalid month numbers
// }

// solution via func creation and using if..else condition:
// const calculateTimeOfYear = (month) => {
// 	const adjustedMonth = month - 1;// adjust month to the zero-based index
// 	if (adjustedMonth >= 0 && adjustedMonth <= 2) {
// 		return 'Winter';
// 	} else if (adjustedMonth >= 3 && adjustedMonth <= 5) {
// 		return 'Spring';
// 	} else if (adjustedMonth >= 6 && adjustedMonth <= 8) {
// 		return 'Summer';
// 	} else if (adjustedMonth >= 9 && adjustedMonth <= 11) {
// 		return 'Autumn';
// 	} else {
// 		return 'Invalid month';
// 	}
// };

// Calculate the time of year
// const timeOfYear = calculateTimeOfYear(month);

// console.log(`The time of year for month ${month} is: ${timeOfYear}`);
// =====================================================================
