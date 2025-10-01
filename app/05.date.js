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

let dayOfWeek;

switch(new Date().getDay()) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
        dayOfWeek = "Monday";
        break;
    case 2:
        dayOfWeek = "Tuesday";
        break;
    case 3:
        dayOfWeek = "Wednesday";
        break;
    case 4:
        dayOfWeek = "Thursday";
        break;
    case 5:
        dayOfWeek = "Friday";
        break;
    case  6:
        dayOfWeek = "Saturday";
}

console.log("Сьогодні є ", dayOfWeek);
// ===================================================================================

// ============================Task 02================================================
// UA: У європейських країнах дні тижня починаються з понеділка (номер 1), потім з 
//     вівторка (номер 2) і до неділі (номер 7). Напишіть функцію getLocalDay(date),
//     яка повертає "європейський" день тижня для дати. Результат виведіть в консоль.
// EN: European countries have days of week starting with Monday (number 1), then Tuesday 
//     (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that 
//     returns the “European” day of week for date. Output the result into console.

// вихідні дані:
let date3Jan_12 = new Date(2012, 0, 3);  // 3 Jan 2012: має повернути TU - вівторок
let date8Jan_12 = new Date(2012, 0, 8);  // 8 Jan 2012: має повернути SU - неділя

// solution via .getDay() method and operator if
function getLocalDay(date) {
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']; // Європейський тиждень починається з Понеділка
    let day = date.getDay(); // Отримання дня тижня але тут поки тиждень починається з Неділі (0 for )

    if(day === 0) {
        day = 7; // препризначення неділі бо в Європі Неділя є 7м днем тижня
    }
    /* масиви мають нульовий індекс, ми використовуємо day-1 для коректного отримання 
       елементу масиву по його індексу. Так як в нас 7 елементів, то потрібно віднімати
       одиницю від заданого значення бо перший елемент має індекс 0, другий елемент має
       індекс 1 третій - 2, ... і останній -6. Це працює наступним чином:
       якщо day = 1 (Monday) → days[day - 1] = days[0] = 'MO'.
       якщо day = 2 (Tuesday) → days[day - 1] = days[1] = 'TU'.
       якщо day = 7 (Sunday після корегування) → days[day - 1] = days[6] = 'SU'.
    */
    return days[day - 1]; 
}
console.log(getLocalDay(date3Jan_12)); // TU
// For 3 Jan 2012: date.getDay() returns 2 (Tuesday in US convention), and since it's not 0,
// the array lookup gives days[1] which is "TU".
console.log(getLocalDay(date8Jan_12)); // SU
// For 8 Jan 2012: date.getDay() returns 0 (Sunday in US convention), we adjust it to 7, and 
// the array lookup gives days[6] which is "SU".

// solution via .getDay() method and ternary operator
function getLocalDay2(date) {
    // Array of European day abbreviations: Monday to Sunday
    const europeanDays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    // Get the day of the week using .getDay() (Sunday = 0, Monday = 1, ..., Saturday = 6)
    const usDay = date.getDay();

    // Convert US day convention to European day convention
    const europeanDay = usDay === 0 ? 7 : usDay; // Treat Sunday (0) as day 7

    // Map European day number (1 = MO, ..., 7 = SU) to the array
    return europeanDays[europeanDay - 1];
}

console.log(getLocalDay2(date3Jan_12)); // Output: "TU"
console.log(getLocalDay2(date8Jan_12)); // Output: "SU"
// ===================================================================================

// ============================Task 03================================================
// UA: Створіть дату 30 грудня 1969 року задавши кількість мілісекунд. Виведіть його 
//     у консоль. А можете зробити навпаки - визначити по даті кількість мілісекунд?
//     Покажіть ще одно рішення визначення дати по заданим аргументам.
// EN: Create the date December 30, 1969, given the number of milliseconds. Output it 
//     to the console. Сan you do the opposite - determine the number of milliseconds
//     from the date? Show another solution for determining the date from the given 
//     arguments.

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
   Також пам'ятаємо, що конструктор new Date() використовує місцевий часовий пояс.
*/

let Dec30_1969 = new Date(-48 * 3600 * 1000);
console.log(Dec30_1969); // Tue Dec 30 1969 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)

/* Якщо у вбудованому методі new Date() є один аргумент, і це рядок символів, то 
   такий рядок парситься (розкладається) автоматично. Але при цьому аргумент 
   повинен відповідати встановленому виду, типу: new Date("1969-12-30") і отримаємо
   Tue Dec 30 1969 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)
   Доречі, алгоритм є такий самий, як і в методі Date.parse.
   Зауважте, час в new Date("1969-12-30") не визначено час, тому вважається, 
   що це північ за Гринвічем, і він коригується відповідно до часового поясу 
   в якому виконується код. Тому, якщо потрібно вказати і час як от в 2год 34хв,
   new Date("1969-12-30Т02:34") то для створення дати в аргументах методу вказують
   через кому значення, а метод повинен відповідати формі:
            new Date(year, month, date, hours, minutes, seconds, ms);
   де year - рік повинен мати 4 цифри; month - місяць при цьому відлік місяців починається
   з 0 (січень) і до 11 (грудень); date - день ​​місяця, якщо він відсутній, то 
   передбачається значення 1; якщо години/хвилини/секунди/мс відсутні, вони вважаються 
   рівними 0. Отже, рішенням буде:
*/

let dateFor301269 = new Date(1969, 11, 30, 2, 34, 47, 567);
console.log(dateFor301269); // Tue Dec 30 1969 02:34:47 GMT+0300 (за східноєвропейським стандартним часом)
// або без вказання часу, тоді ставимо нулі - new Date(1969, 11, 30, 0, 0, 0, 0);

/* Якщо ми маємо один аргумент з рядком де зазначено також і час то в конструкторі об'єкту 
   Date типу new Date("1969-12-30Т02:34") автоматичним перетворенням отримаємо потрібну дату 
   з часом, який був зазначений в аргументі. 
   Якщо об'єкт Date перетворюється на число, то він стає "timestamp" (міткою часу). Отримати
   мітку часу можна методом date.getTime() або простим оператором "+". Крім того, існує ще 
   один метод який дозволяє зчитувати дату з рядка, це - Date.parse(str), але аргумент 
   повинен бути в форматі:      YYYY-MM-DDTHH:mm:ss.sssZ  де
   YYYY-MM-DD - дата: рік-місяць-день;
   символ "Т" - використовується як роздільник;
   HH:mm:ss.sss – це час: години, хвилини, секунди та мілісекунди;
   Необов’язкова частина "Z" позначає часовий пояс у форматі +-гг:хх. Одна літера Z означала б UTC+0.
   Можливі коротші варіанти, наприклад, YYYY-MM-DD або YYYY-MM або навіть YYYY.
   Виклик Date.parse(str) аналізує рядок у заданому форматі та повертає мітку часу (кількість 
   мілісекунд від 1 січня 1970 UTC+0). Якщо формат недійсний, повертає NaN. Таким чином, рішення
*/

let myDateBirth = new Date("1969-12-30T02:34");
console.log(myDateBirth); // Tue Dec 30 1969 02:34:00 GMT+0300 (за східноєвропейським стандартним часом)
// потім по наявності дати визначаєм кількість мілісекунд (мітку часу) 
let timestampForMyDateBirth = myDateBirth.getTime();
console.log(timestampForMyDateBirth); // -174360000
// або навіть так
console.log(+myDateBirth); // -174360000

// або без попередньої конвертації в дату а одразу методом Date.parse()
let myBirthdayStamp = Date.parse("1969-12-30T02:34");
console.log(myBirthdayStamp); // -174360000
// тут зворотньо вже легко можна створити потрібну дату з цим методом
let myBirthday = new Date(Date.parse("1969-12-30T02:34"));
console.log(myBirthday); // Tue Dec 30 1969 02:34:00 GMT+0300 (за східноєвропейським стандартним часом)
// ===================================================================================

// ============================Task 04================================================
// UA: В нас є якась дорога операція підрахунку множини в циклі. Можете показати в
//      мілісекундах скільки часу виконувалась ця операція? Результат виведіть в консоль. 
// EN: We have some expensive operation of counting a set in a loop. Can you show how 
//     long this operation took in milliseconds? Print the result to the console.

// вхідні дані: дорога операція підрахунку множини в циклі
// for (let i = 0; i < 100_000; i++) {
//   let doExpensiveCalc = i * i * i;
// }

/* Як вже відомо, коли об'єкт Date перетворюється на число, він стає "timestamp"
   (міткою часу). Важливий побічний ефект цього є те, що дати можна віднімати і 
   результатом є їхня різниця в мілісекундах. Отримати мітку часу можна запустивши 
   конструктор new Date().
   Таким чином, треба мати початок відліку часу дорогої операції та її кінець 
   перетворивши їх в часові мітки які можна відняти. Отже, рішенням буде:
*/

let start = new Date(); // початок відліку часу в мілісекундах
// запускаємо дорогу операція на початку відліку
for (let i = 0; i < 100_000; i++) {
  let doExpensiveCalc = i * i * i;
}
let end = new Date(); // кінець відліку часу в мілісекундах
console.log( `The operation took ${end - start} ms` ); // The operation took 9 ms

/* Якщо нам потрібно лише вимірювати час, нам не потрібен об'єкт Date. Для цього
   існує спеціальний метод Date.now(), який повертає поточну позначку часу. Він 
   семантично еквівалентний new Date().getTime(), але не створює проміжного об'єкту
   Date. Тому він швидший і не створює навантаження на збирача сміття. Він 
   використовується здебільшого для зручності або коли важлива продуктивність, 
   наприклад, в іграх на JavaScript або інших спеціалізованих програмах. Тож, 
   ймовірно, таке рішення буде краще: 
*/

let starPoint = Date.now(); // початок відліку часу в мілісекундах
// запускаємо дорогу операція на початку відліку
for (let i = 0; i < 100_000; i++) {
  let doExpensiveCalc = i * i * i;
}
let endPoint = Date.now(); // кінець відліку часу в мілісекундах
console.log( `The operation took ${endPoint - starPoint} ms` ); // The operation took 7 ms 
// ===================================================================================

// ============================Task 05================================================
// UA: Задайте змінну days та проініціалізуйте її числом від 1 до 10.
//     Спробуйте ініціалізувати кількість днів рандомно. І далі,
//     перетворіть це число на кількість секунд та виведіть його в консоль.
// EN: Declare a variable days and initialize it with a number from 1 to
//     10. Try initializing the number of days randomly. And then, convert
//     this number to the number of seconds and output it to the console.

// solution via manual initializing the quantity of days:
let takenDays = 7;
const msInMinute = 1000 * 60;
const msInHour = msInMinute * 60;
const msInDay = msInHour * 24;
const msInYear = msInDay * 365;
let msIn7days = takenDays * msInDay;
console.log(msIn7days); // 604800000
let secondsIn7days = msIn7days / 1000
console.log(`${secondsIn7days} seconds in 7 days` ); // 604800 seconds in 7 days

// але так як нам потрібні секунди а не мілісекунди, тому таке рішення 
// є перевантаженим і непотрібним бо для рішення треба тільки секунди і дні
const secondsInDay = 24 * 60 * 60; // кількість секунд в 1 дні
let secondsInTakenDays = takenDays * secondsInDay;
console.log(`${secondsInTakenDays} seconds in ${takenDays} day(s).`); // 604800 seconds in 7 day(s).

// solution via rendomly initialising the days:
// ініціалізація дня рандомно між 1 і 10.
const randomDays = Math.floor(Math.random() * 10) + 1;

const secondsInADay = randomDays * secondsInDay
console.log(`There are ${secondsInADay} seconds in ${randomDays} day(s).`);
// ===================================================================================

// ============================Task 06================================================
// UA: Створіть поточну дату та виведіть її в консоль у форматі dd.mm.yyyy та dd Month yyyy.
// EN: Create current date and display it in the console according to the format
//     dd.mm.yyyy and dd Month yyyys

// solution via methods .getDate()/.getMonth()/.getFullYear() to extract specific parts

const currentDate = new Date(); // створення поточної дати

/* Як відомо, існують методи для отримання значення року, місяця та інших значень з 
   об'єкта Date:
    getFullYear() - отримання значення року (4 цифри);
    getMonth() - отримання значення місяця від 0 до 11;
    getDate() - отримання значення дати місяця, з 1 до 31;
    getHours(), getMinutes(), getSeconds(), getMilliseconds() - отримання відповідних значень часу;
    getDay() - отримання назви дня тижня (від 0 (Неділя) to 6 (Субота)).
    Для того, щоб відображати дві цифри для дня і місяця із "0" попереду, будемо
    використовувати метод .padStart(2, '0'). Цей метод підходить коли 0 додається
    спереду коли є тільки одна цифра, а треба відображати дві, а якщо є дві то вони
    і відображається. Щоб зрозуміти цей метод, ось декілька прикладів:
    "abc".padStart(10); // "       abc"
    "abc".padStart(10, "foo"); // "foofoofabc"
    "abc".padStart(6, "123465"); // "123abc"
    "abc".padStart(8, "0"); // "00000abc"
    "abc".padStart(1); // "abc"
    Зауважте, що метод приміняється до рядка символів, тому потрібно спочатку конвертувати
    до рядка символів. Отже, подальші рішення:
*/

// формат1: dd.mm.yyyy
const currentDay = String(currentDate.getDate()).padStart(2, '0'); // тут забезпечення двух цифр для дати
const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0'); // тут отримання місяця у виді 2х цифр
const currentYear = currentDate.getFullYear();
const formattedDate1 = `${currentDay}:${currentMonth}:${currentYear}`
console.log(formattedDate1); // 26:09:2025

// формат2: dd Month yyyy
const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const monthName = monthNames[currentDate.getMonth()]; // отримання назви поточного місяця;
const formattedDate2 = `${currentDay} ${monthName} ${currentYear}`
console.log(formattedDate2); // 26 September 2025
// ===================================================================================

// ============================Task 07================================================
// UA: Створіть об'єкт Date з рядка символів '15.03.2025'.
// EN: Create an object Date from the string '15.03.2025'.

// solution via constructor new Date() and array method .split()

/* Щоб створити об'єкт Date з рядка '15.03.2025', потрібно попередньо розібрати   
   рядок на відповідні компоненти (день, місяць, рік) бо JavaScript не може 
   безпосередньо створити об'єкт Date з формату дд.мм.рррр. Для цього будемо
   використовувати метод .split(), і вже отримані частини використовувати для
   створення об'єкта Date у потрібному для нього форматі.
*/

const dateString = '15.03.2025';

// Розкладаємо рядок символів на елементи масиву з роздільником "." та отримаєм
// масив ['15', '03', '2025']. Далі через деструктуризацією визначимо day,month,
// year і конвертуємо кожен елемент в число:
const [day, month, year] = dateString.split('.').map(Number);

// Потім створимо обєкт Date конструктором new Date() при цьому врахуєм що перший 
// місяць має нульову нумерацію (січень має "0"), а тому віднімим одиницю в місяці:
const dateObject = new Date(year, month - 1, day);

// виводимо в консоль
console.log(dateObject); // Sat Mar 15 2025 00:00:00 GMT+... (local timezone)
// ===================================================================================

// ============================Task 08================================================
// UА: Створіть три змінні: givenHour, givenMinutes, givenSeconds. Задайте їм   
//     наступні значення: 4, 35, 5. Виведіть у консоль час у форматі 04:35:05.
// EN: Declare three variables: hour, minute, second.  Assign them
//     the following values: 4, 35, 5. Display the time in the format 
//     04:35:05 in the console.

let givenHour = 4;
let givenMinutes = 35;
let givenSeconds = 5;

// solution via ternary operator and template strings
/* Для потрібного відображення часу, кожне значення повинно мати дві цифри
   і якщо будь-яке значення (година, хвилина або секунда) менше за 10,
   до нього додається 0 ('0' + значення). Ефективним способом здійснити
   це є тернарний оператор типу: value < 10 ? '0' + value : value;
   Далі будем використовувати шаблонний літерал (${} всередині зворотних 
   лапок), щоб відформатувати час у потрібному форматі гг:хх:сс. Отже:
*/

let formattedHour = givenHour < 10 ? '0' +  givenHour : givenHour;
let formattedMinutes = givenMinutes < 10 ?  '0' +  givenMinutes : givenMinutes;
let formattedSeconds = givenSeconds < 10 ?  '0' +  givenSeconds : givenSeconds;

console.log(`${formattedHour}:${formattedMinutes}:${formattedSeconds}`);

// solution via padStart() methods and template strings
/* Рішення передбачає використання String(value).padStart(2, '0'), щоб забезпечити,
   що кожне значення має дві цифри. Якщо значення менше за 10, .padStart(2, '0') 
   додає 0 (наприклад, 4 стає 04 або 5 стає 05), а якщо значення вже має дві цифри
   то воно залишається незмінним (наприклад, 35 залишається 35).
*/

let formattedTime = `${String(givenHour).padStart(2, '0')}:${String(givenMinutes).padStart(2, '0')}:${String().padStart(2, '0')}`;
console.log(formattedTime); //  04:35:05
// ===================================================================================

// ============================Task 09================================================
// UA: Створіть об'єкт Date, який містить: 1) завтрашню дату; 2) перше число поточного
//     місяця; 3) посліднє число поточного місяця. Виведіть результати у стандартному 
//     форматі у консоль.
// EN: Create an object Date, which represents: 1) tomorrow; 2) first day of the current 
//     month; 3) last day of the current month. Output the results in standard format 
//     to the console.

// solution via constructor new Date() and methods setDate()/getDate()/toDateString()
/* Спочатку необхідно визначити початок відліку - сьогоднішній день. Це легко зробити за
   допомогою конструктора new Date(). Далі для визначення завтрашньої дати треба спочатку
   склонувати початкову дату щоб вона залишилась незмінною для подальших маніпуляцій.
   Склонувати також можна конструктором куда аргументом передати цю початкову дату. Для
   встановлення компонентів дати існують методи:
    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (встановлення дати по milliseconds з часу 01.01.1970 UTC)
   Отже, для встановлення завтрашньої дати використаєм метод setDate(date) куда аргументом
   передамо метод отримання сьогоднішньої дати getDate() до якого додаєм одиницю.
   З метою красивої презентації у форматі Tue Oct 31 2023 застосуємо метод .toDateString().
*/

// визначення сьогоднішнього дня
const today = new Date();
console.log(`Today: ${today.toDateString()}`); // Today: Sun Sep 28 2025

// визначення завтрашнього дня
const tomorrow = new Date(today); // склонуємо об'єкт today
tomorrow.setDate(today.getDate() + 1); // додаємо 1 день до сьогоднішнього дня
// так забезпечують отримання правельних результатів автоматично обробляючи граничні 
// випадки, такі як переходи між місяцем та роком (наприклад, з 31 січня на 1 лютого)
console.log(`Tomorrow: ${tomorrow.toDateString()}`); // Tomorrow: Mon Sep 29 2025

// визначення першого дня поточного місяця
/*Використаєм конструктор new Date де аргументами вкажемо лише методи для отримання року, 
і місяця. Третім аргументом вкажемо число "1" що і буде визначати перший день поточного місяця.*/
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // перший день поточного місяця
console.log(`First day of the month: ${firstDayOfMonth.toDateString()}`); // First day of the month: Mon Sep 01 2025

// визначення останнього дня поточного місяця
/*Використаєм конструктор new Date де аргументами вкажемо лише методи для отримання року та 
наступного місяця (додаєм 1 до поточного місяця), а третім аргументом вкажемо число "0", що
і буде визначати останній день попереднього місяця. Або так: трюк з "0-м днем": якщо
передати 0 як день, то отримаєте останній день попереднього місяця, тобто він автоматично 
підлаштується під поточний місяць - це його останній день.*/
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); //останній день: 0й день наступного місяця 
console.log(`Last day of the month: ${lastDayOfMonth.toDateString()}`); // Last day of the month: Tue Sep 30 2025 
// ===================================================================================

// ============================Task 10================================================
// UА: Підрахувати кількість днів від теперішньої дати до Нового Року. Виведіть граматично
//     правильно написане слово "днів", а саме, якщо закінчується на 1, то треба казати 
//     "31 день" - не "31 днів", інакше - "14 днів", або "311 днів", або "88 днів".
// EN: Calculate the number of days from the current date to the New Year. Enter the 
//     grammatically correct word "days", namely, if it ends in 1, then you need to say
//     "31 day" - not "31 days", otherwise - "14 days" or "311 days" or "88 days".

// solution via constructor new Date() and getFullYear(), Math.ceil() methods and regEx

// отримання теперішнього дня
const todaysDay = new Date();

// отримання дня 1 січня наступного року
const nextNewYear = new Date(todaysDay.getFullYear() + 1, 0, 1);

// отримання різниці між датами (між двома обєктами Data) але результат буде в мілісекундах
const diffInMs = nextNewYear - todaysDay;
console.log(diffInMs); // 8091849984

/* конвертуємо мілісекунди в дні. Для цього використаєм метод Math.ceil для  
   округлення значення, оскільки часткові дні слід вважати повними.*/
const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

// додамо регулярні вирази для граматично-правильного виведення слова day/days
/* /1$/ - перевіряє, чи закінчується число на "1".
!/11$/ - гарантує, що числа на кшталт 11, 111 тощо, які закінчуються на «11»,
виключаються з наведеного вище правила. */
const dayWord = /1$/.test(diffInDays) && !/11$/.test(diffInDays) ? 'day' : 'days';

// виведем у консоль результат підрахунку з правельною семантикою
console.log(`There are ${diffInDays} ${dayWord} until New Year.`);
// ===================================================================================

// ============================Task 11================================================
// UA: Оголосіть змінну myMinute і проініціалізуйте її цілим числом. Обчисліть, до 
//     якої чверті належить це число, і виведіть у консоль.
// EN: Declare a variable named myMinute and initialize it with an integer. Calculate 
//     the quarter this number belongs to and print it to the console.

// оголошуємо змінну та ініціалізуємо
let myMinute = 42;

// solution via if-else block
/* Для вирішення спочатку потрібно розділити діапазон хвилин на чотири рівні чверті:
0–14 хвилин: Перша чверть 15–29 хвилин: Друга чверть 30–44 хвилини: Третя чверть
45–59 хвилин: Четверта чверть. Початок з "0" пояснюється тим, що змінна mуМinute 
представляє одну хвилину в поточній годині, а хвилини в JavaScript (або системах 
часу загалом) мають значення тільки від 0 до 59. Хвилини не можуть дорівнювати 60;  
коли час досягає 60, він переходить до наступної години, а хвилина скидається до 0. 
    Далі можемо використати блоки if-else, щоб перевірити, до якого діапазону
належить хвилина, та призначити відповідну чверть. Якщо значення хвилини знаходиться
поза діапазоном від 0 до 59 (недійсне значення), то передбачимо в останньому else-блоц
і виведення повідомлення про помилку та виходу з програми.*/

// визначаємо четверті та їх діапазони
let quarter;
if (myMinute >= 0 && myMinute <= 14) {
    quarter = 1; // 0-14 myMinutes належить першій четверті
} else if (myMinute >= 15 && myMinute <= 29) {
    quarter = 2; // 15-29 myMinutes належить другій четверті
} else if (myMinute >= 30 && myMinute <= 44) {
    quarter = 3; // 30-44 myMinutes належить третій четверті
} else if (myMinute >= 45 && myMinute <= 59) {
    quarter = 4; // 45-59 myMinutes належить четвертій четверті
} else {
    console.log('Error: Minutes should be between 0 and 59.');
    return; // вийти з програми якщо значення є невалідне
}

// застосування та виведення виведення результату в консоль
console.log(`Minute ${myMinute} belongs to quarter ${quarter}.`); // Minute 42 belongs to quarter 3.

// solution via if-else and Math calculation
/* Якщо потрібне математичне рішення то треба поділити хвилину 
   на 15 і визначити четверть при цьому зробити округлення та 
   корекцію на підрахунок хвилин з нуля.
*/
myMinute = 12;

// перевірка валідного значення
if (myMinute < 0 || myMinute > 59) {
    console.log('Error: Minutes should be between 0 and 59.');
} else {
    /* математичне обчислення належності до четверті, причому виразом (myMinute+1)
       здійснюється коригування при підрахунку діапазону починаючи з нуля. Також
       Math.ceil() - забезпечує округлення значення до найближчого цілого числа.
       Звичайно, можемо почати не з "0", а з "1", але це доречно коли вхідні значення 
       завжди починаються з "1" та й діапазони є більш природними - люди зазвичай думають 
       "з 1-ї по 15-ту хвилину", а не "з 0-ї по 14-ту хвилину". Ну і потім, немає потреби
       в корегуванні (хвилина + 1) — діапазони безпосередньо відповідають вхідним даним.
            Тоді діапазони будуть: 
       Четверь 1 (0–14 чи 1–15): перші 15 хв поточної години;
       Чверть 2 (15–29 чи 16–30): наступні 15 хв поточної години;
       Чверть 3 (30–44 or 31–45): Наступні 15 хв поточної години;
       Чверть 4 (45–59 or 46–60): Останні 15 хв поточної години.
       Однак, хвилини в годині завжди мають значення від 0 до 59, а не від 1 до 60:
       Найбільше крайнє значення хвилини (59) позначає кінець 4-ї чверті, то значення 60 
       відповідатиме хвилині = 0 наступної години та є недійсним у цьому контексті.*/
    const quarter = Math.ceil((myMinute + 1) / 15);

    // виведення результату
    console.log(`Minute ${myMinute} belongs to quarter ${quarter}.`); // Minute 12 belongs to quarter 1.
}
// ===================================================================================

// ============================Task 12================================================
// UA: Оголосіть змінну myMonth і проініціалізуйте її числом від 1 до 12. Обчисліть пору 
//     року і виведіть її в консоль.
// EN: Declare a variable myMonth and initialize it with a number from 1 to 12. Calculate 
//     the season and print it to the console.

/* Змінна myMonth представляє місяць числом від 1 до 12. Наприклад: 1 = січень
 2 = лютий... 12 = грудень. Тому оголошуємо змінну та ініціалізуємо числом */
let myMonth = 4;
// ініціюємо змінну для сезонів також
let season;

// solution via if-else operator
/* Спочатку визначимо діапазони кожного сезону: які місяці включає кожен сезон.
   Місяці поділяються на 4 сезони наступним чином: Зима: грудень(12), січень(1) 
   та лютий(2); Весна: березень(3), квітень(4) та травень(5); Літо: червень(6), 
   липень(7) та серпень(8); Осінь: вересень(9), жовтень(10) та листопад(11).
    Далі використовуємо оператори if-else, щоб перевірити, якому сезону відповідає 
   місяць. Також в останньому блоці else, перевіряємо наявність недійсних введених
   даних (наприклад, місяць = 0 або місяць > 12) та відобразіть повідомлення про 
   помилку.
*/
if (myMonth === 12 || myMonth === 1 || myMonth === 2) {
    season = "Winter";
} else if (myMonth >= 3 && myMonth <= 5) {
    season = "Spring";
} else if (myMonth >= 6 && myMonth <= 8) {
    season = "Summer";
} else if (myMonth >= 9 && myMonth <= 11) {
    season = "Autumn";
} else {
    console.log("Error: Month should be a number between 1 and 12.");
    return; // вихід з програми при невалідному значенні
}
// виведення результату в консоль
console.log(`Month ${myMonth} belongs to the ${season} season.`);

// solution via switch operator
myMonth = 7;
switch (true) {
    case (myMonth === 12 || myMonth === 1 || myMonth === 2):
        season = "Winter";
        break;
    case (myMonth >= 3 && myMonth <= 5):
        season = "Spring";
        break;
    case (myMonth >= 6 && myMonth <= 8):
        season = "Summer";
        break;
    case (myMonth >= 9 && myMonth <= 11):
        season = "Autumn";
        break;
    default:
        console.log("Error: Month should be a number between 1 and 12.");
        return; // вихід з програми при невалідному значенні
}
// виведення результату в консоль
console.log(`Month ${myMonth} belongs to the ${season} season.`);
// ===================================================================================

// ============================Task 13================================================
// UA: Напишіть функцію getSecondsToday(), яка повертає кількість секунд від початку
//     сьогоднішнього дня. Функція повинна працювати в будь-який день. Тобто, вона не 
//     повинна мати жорстко запрограмованого значення “сьогодні”. Виведіть результат у консоль.
// EN: Write a function getSecondsToday() that returns the number of seconds from 
//     the beginning of today. The function should work in any day. That is, it 
//     should not have a hard-coded value of “today”. Print the result in the console.

// solution via constructor new Date() and generated parameters for time
/* Щоб отримати кількість секунд, ми можемо згенерувати дату, використовуючи поточний
   день із заданим часом 00:00:00 (просто його не вказувати коли генеруємо поточний день),
   а потім відняти її від "зараз" - той самий поточний день із врахуванням часу. Крім того,
   особливість полягає в тому, що отримана різниця буде вказана в мілісекундах і щоб 
   отримати секунди, різницю потрібно поділити на 1000.
*/

function getSecondsToday1() {
    let now = new Date(); // тут час врахований

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // тут час має значення 00:00:00

    let diffInMs = now - today;

    return Math.round(diffInMs / 1000); // конвертуємо в секунди та округляємо
}
console.log(getSecondsToday1()); // 53685

// solution via constructor new Date() and convertin received time parameters into seconds on place

function getSecondsToday2() {
    let d = new Date();

    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log(getSecondsToday2()); // 53685
// ===================================================================================

// ============================Task 14================================================
// UA: Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтра.
//     Функція має працювати в будь-який день, “сьогодні” не задано жорстко. Результат 
//     виведіть в консоль.
// EN: Create a function getSecondsToTomorrow() that returns the number of seconds
//     till tomorrow. The function should work at any day, the “today” is not hardcoded.
//     Output the result to the console.

// solution via constructor new Date() and generated parameters for date
/* Щоб отримати кількість мілісекунд до завтра, ми можемо відняти поточну дату від 
   “завтра” з часом 00:00:00.
*/
function getSecondsToTomorrow1() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diffInMs = tomorrow - now;
    return Math.round(diffInMs / 1000); // конвертуємо в секунди та округляємо
}
console.log(getSecondsToTomorrow1()); // 17175

// solution via constructor new Date() and convertin received time parameters into seconds on place
function getSecondsToTomorrow2() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
console.log(getSecondsToTomorrow2()); // 17175
// ===================================================================================

// ============================Task 15================================================
// UA: Напишіть функцію formatDate(date), яка має форматувати дату наступним чином:
//     Якщо з дати минуло менше 1 секунди, то "от щойно". В іншому випадку, якщо з 
//     дати минуло менше 1 хвилини, то "n секунд тому". В іншому випадку, якщо менше години,
//     то "m хвилин тому". В іншому випадку, повна дата у форматі "ДД.ММ.РР ГГ:хх". Тобто: 
//     "день.місяць.рік години:хвилини", все у двоцифровому форматі, наприклад, 31.12.16 10:04.
// EN: Write a function formatDate(date) that should format date as follows:
//     If since date passed less than 1 second, then "right now". Otherwise, if since date
//     passed less than 1 minute, then "n sec. ago". Otherwise, if less than an hour, then
//     "m min. ago". Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: 
//     "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:04.

// solution via reassigning date to another value in order to manipulate with it
/* Щоб отримати час, який пройщов від якогось моменту в минулому (назвемо просто date) до  
   теперішнього моменту (отримаємо консструктором new Date()) – потрібно просто відняти 
   дати які були на ті моменти і сформувати результат у потрібному форматі. Далі в умові
   if перевіряєм чи результат буде меншим за 1 секунду (1/1000 мсек) і повертаєм потрібний
   вираз. Але нам краще працювати з секундами а не мілісекундами тому конвертуємо останні
   в секунди та округлимо методом Math.floor() і вже далі візьмемо це значення для
   перевірки та виведення потрібного виразу. Подібно будемо робити з хвилинами. Вже в
   роботі з годинами, за умови виведення в двоцифровому форматі, потрібно додати "0" до
   годин, які мають одну цифру. Крім того, потрібно додавати нуль і до місяців, і дати, і
   хвилин, тому можна перепризначити змінну date типу let d = date; Такий запис просто 
   створює нову змінну d, яка посилається на той самий об'єкт дати. Однак на наступному 
   кроці перетворимо змінну d на масив форматованих значень (день, місяць, рік, години та
   хвилини) замість оригінального об'єкта дати. По суті: змінна d спочатку містить об'єкт
   дати для вилучення його компонентів (getDate, getMonth тощо), але після перетворення
   вона стає масивом форматованих рядків з початковими нулями. Вже після перепризначення
   та форматування, можна об'єднати частини дати в потрібний формат. Перепризначення d
   не є абсолютно необхідним — можна безпосередньо обчислити та повернути відформатований
   результат. Однак, якщо зробити перепризначення за допомогою таких кроків то це покращує
   читабельність та дозволяє окремо обробляти логіку форматування. Крім того, це створює 
   модульний, повторно використовуваний фрагмент коду для обробки початкових нулів та 
   форматування 2 цифр.
*/

function formatDate1(date) {
    let diff = new Date() - date; // результат обчислення в мілісекундах

    // випадок 1: менше ніж 1 секунда назад
    if (diff < 1000) {
        return ' right now';
    }

    // випадок 2: менше ніж 1 хвилина назад
    let sec = Math.floor(diff / 1000); // конвертуємо в секунди
    if (sec < 60) {
        return sec + ' sec. ago';
    }

    // випадок 3: менше ніж 1 год назад
    let min = Math.floor(diff / (60 * 1000)); // конвертуємо в хвилини
    if (min < 60) {
        return min + ' min. ago';
    }

    let d = date;
    /* такий запис дозволить перетворити d на масив рядкових символів, які 
       представляють різні компоненти дати. На першому етапі здійснюється 
       отримання відомими методами компонентів дати/часу, а додавання '0' 
       попереду одної цифри гарантує, що одноцифрові значення стануть двоцифровими,
       багатоцифрові значення (наприклад, двоцифровий день '15' або рік '2025') 
       залишаться незмінними. А далі беремо останні два символи за допомогою
       метода .slice(-2). Так обидва: одноцифрові числа (наприклад, '05')
       залишаться двома цифрами, а багатоцифрові значення (наприклад, двоцифровий
       день '15' або рік '2025') залишаться незмінними. Після перепризначення
       та використання функції .map(), змінна d стає масивом двозначних
       рядків для частин дати, наприклад: d = ['05', '01', '25', '09', '08'];
       А на другому етапі - об'єднуєм перші три компоненти (день, місяць, рік)
       за допомогою символу ".", щоб утворити дату (05.01.25) і потім б'єднуєм
       решту компонентів (години, хвилини) за допомогою символу ":", щоб утворити
       час (09:08). Поєднує дві частини з пробілом між ними: 05.01.25 09:08.
    */
    d = [
        '0' + d.getDate(),          // додавання '0' до дати
        '0' + (d.getMonth() + 1),   // додавання '0' до місяця (місяці в JS починаються з "0", додаєм 1 щоб отримати правельний місяць)
        '' + d.getFullYear(),       // гарантує, що рік буде перетворено на рядок, хоча це не є абсолютно необхідним
        '0' + d.getHours(),         // додавання '0' до годин
        '0' + d.getMinutes()        // додавання '0' до хвилин
    ].map(component => component.slice(-2)); // тут беремо тільки 2 останніх символи рядка

    // об"єднуєм перетворені компоненти в дату з визначеним форматом
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

// перевіряємо роботу та виводимо в консоль
/* Подібний запис типу "new Date(new Date - [зсув часу])" – це скорочений спосіб для динамічного 
    обчислення певного часу відносно поточного моменту. Спосіб створено з використанням властивої 
    JavaScript можливості віднімати та маніпулювати мітками часу. Ним зручно тестувати логіку, пов’язану
    з датою, функції formatDate. Таким методом досягається подібного результату, що й обчислення мітки 
    часу та створення нового об’єкта Date вручну, але є лаконічним та елегантним, особливо для цілей 
    тестування.
*/
// аргумент (new Date - 1) повертає число (мітку часу, що знаходиться на 1 мілісекунду в минулом від теперу).
// зовнішній об'єкт new Date() перетворює його назад на об'єкт Date, що представляє об'єкт Date 1 мілісекунду тому.
console.log( formatDate1(new Date(new Date - 1)) ); // "right now"
// аргумент (new Date - 30 * 1000) повертає число (мітку часу, що знаходиться на 30 мілісекунд в минулому).
console.log( formatDate1(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
console.log( formatDate1(new Date(new Date - 5 * 60 * 1000)) ); // 5 min. ago
console.log( formatDate1(new Date(new Date - 86400 * 1000)) ); // 30.09.25 13:27

// solution via formatting on place
function formatDate2(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматування
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'right now';
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}

console.log( formatDate2(new Date(new Date - 1)) ); // "right now"
console.log( formatDate2(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
console.log( formatDate2(new Date(new Date - 5 * 60 * 1000)) ); // 5 min. ago
console.log( formatDate2(new Date(new Date - 86400 * 1000)) ); // 30.09.25 13:27
// ===================================================================================
