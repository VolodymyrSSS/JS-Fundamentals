console.log("Topic: Functions - Part 4");

// ============================Task 01===================================
// UA: Створіть функцію під назвою analyzeArray, яка приймає масив як аргумент.
//     Функція повинна використовувати деструктуризацію масиву для вилучення
//     першого, другого та останнього елементів масиву. Вона повинна повертати
//     об'єкт з такими властивостями:
//     - first: Перший елемент масиву;
//     - second: Другий елемент масиву;
//     - last: Останній елемент масиву;
//     - restLength: Кількість елементів, що залишилися в масиві.
//     Якщо будь-який з цих елементів не існує, використовуйте значення за
//     замовчуванням null.
// EN: Create a function called analyzeArray that takes an array as an argument.
//     The function should use array destructuring to extract the first,
//     second, and last elements of the array. It should return an object
//     with the following properties:
//     - first: The first element of the array;
//     - second: The second element of the array;
//     - last: The last element of the array;
//     - restLength: The number of remaining elements in the array;
//     If any of these elements don't exist, use default values of null.

// data for working check
const arrayNums = [1, 2, 3, 4, 5];
const arrayStrings = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const emptyArray = [];

// solution via array destructuring and ternary operator
function analyzeArray1(arr) {
  // значення за замовчуванням при деструктуризації (= null) для відсутніх елементів
  const [first = null, second = null, ...rest] = arr;
  // останній елемент деструктуруєм окремо бо ...rest має бути останнім і включає усе після другого елементу
  const last = arr.length >= 3 ? arr[arr.length - 1] : null;

  // крім того, довжина restLength починається від другого елемента та не повинна
  // включати останній елемент а масив має мати щонайменше 3 елементи
  const restLength = arr.length > 2 ? rest.length - 1 : 0;

  return {
    first,
    second,
    last,
    restLength,
  };
}

console.log(analyzeArray1(arrayNums));
console.log(analyzeArray1(arrayStrings));
console.log(analyzeArray1(emptyArray));

// solution via .slice() and ternary operator
// the data for working check
const arrayBooleans = [true, false, true, false, true];
const arrayObj = [{ name: "John" }, { name: "Jane" }, { name: "Bob" }];

function analyzeArray2(arr) {
  // перший та другий із знач по замовчуванню
  const first = arr.length > 0 ? arr[0] : null;
  const second = arr.length > 1 ? arr[1] : null;

  // останній елемент із знач по замовчуванню
  const last = arr.length >= 3 ? arr[arr.length - 1] : null;

  // взяти "середину" (усі елементи після другого але не останній)
  const middle = arr.slice(2, arr.length - 1);

  return {
    first,
    second,
    last,
    restLength: middle.length,
  };
}
console.log(analyzeArray1(arrayBooleans));
console.log(analyzeArray1(arrayObj));

// ======================================================================
// ============================Task 02===================================
// UA: Створіть функцію під назвою analyzeSparseArray, яка приймає
//     розріджений масив як аргумент. Функція повинна повертати об'єкт з
//     такими властивостями:
//     - length: Загальна довжина масиву;
//     - elementCount: Кількість непорожніх елементів у масиві;
//     - largestGap: Розмір найбільшого проміжку (послідовних порожніх
//      слотів) у масиві.
// EN: Create a function called analyzeSparseArray that takes a sparse
//     array as an argument. The function should return an object with
//     the following properties:
//     - length: The total length of the array;
//     - elementCount: The number of non-empty elements in the array;
//     - largestGap: The size of the largest gap (consecutive empty slots)
//      in the array.

// the data for working check
const spArr1 = [1, , , 4, 5];
const spArr2 = [1, , , , , , , , , 10];
const spArr3 = [undefined, null, , , 5];
// як видно: undefined і null це значення а не пусті слоти тому вони є елементами
const spArr4 = [1, , 3, , , 6, , , , 10, 11, , 13];

// solution via Object.keys(arr) method
/* Як відомо, розріджений масив у JavaScript — це масив із порожніми
   слотами або проміжками між його елементами. Ці проміжки створюються,
   коли ви присвоюєте значення непослідовним індексам або коли ви 
   видаляєте елементи з масиву.
   Для вирішення задачі необхідно усвідомити, що undefined і null це
   є значення а не пусті слоти тому вони є елементами. Пусті слоти не
   будуть рахуватись.
   Для того, щоб так розрізняти, можемо використати метод Object.keys(arr)
   який повертає лише ті індекси, які фактично існують у масиві (або з 
   визначеними «ключами»). Це значить:
    - Явні значення, такі як undefined або null, будуть рахуватися,
      оскільки вони присвоюються індексу.
    - Порожні слоти (діри) не будуть рахуватися, оскільки такі індекси 
      не існують в об'єкті масиву.
*/
function analyzeSparseArray1(arr) {
  const length = arr.length;

  // Підрахунок непустих елементів масиву (існують ключі в масиві)
  const elementCount = Object.keys(arr).length;

  // пошук найбільшого розміру пустих слотів
  let largestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < length; i++) {
    if (!(i in arr)) {
      // якщо це є пустий слот масиву
      currentGap++;
      if (currentGap > largestGap) {
        largestGap = currentGap;
      }
    } else {
      // тоді це є елемент зі значенням
      currentGap = 0; // скидання на 0 коли дірка, або не має значення
    }
  }

  return { length, elementCount, largestGap };
}
console.log(analyzeSparseArray1(spArr2));
console.log(analyzeSparseArray1(spArr3));
console.log(analyzeSparseArray1([]));

// solution via Set methods
/* За допомогою комбінації з Set ми шукаємо тільки елементи - непусті слоти*/
function analyzeSparseArray2(arr) {
  const length = arr.length;

  // збираємо усі елементи/числа масиву в множину Set
  const filledIndices = new Set(Object.keys(arr).map(Number));

  const elementCount = filledIndices.size;

  // пошук найбільшого проміжку пустих слотів
  let largestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < length; i++) {
    //   if (!filledIndices.has(i)) {
    //     if (currentGap === 0) gapStart = i; // mark start of a new gap
    //     currentGap++;
    //   if (currentGap > largestGap) {
    //     largestGap = currentGap;
    //     largestGapStart = gapStart;
    //     largestGapEnd = i;
    //   }

    if (!filledIndices.has(i)) {
      currentGap++;
      if (currentGap > largestGap) {
        largestGap = currentGap;
      }
    } else {
      currentGap = 0;
    }
  }

  return { length, elementCount, largestGap };
}
console.log(analyzeSparseArray1(spArr1));
console.log(analyzeSparseArray1(spArr4));
console.log(analyzeSparseArray1([]));
// ======================================================================
// ============================Task 03===================================
// UA: Створіть функцію arrayWorkshop, яка приймає масив чисел як аргумент.
//     Функція повинна виконувати такі операції:
//     1. Видалити всі дублікати чисел з масиву;
//     2. Якщо масив має менше 3 елементів після видалення дублікатів,
//        додавати число 0 до масиву, доки він не матиме 3 елементи;
//     3. Замінити перший та останній елементи їхньою сумою;
//     4. Повернути змінений масив.
// EN: Create a function called arrayWorkshop that takes an array of numbers
//     as an argument. The function should perform the following operations:
//     1. Remove all duplicate numbers from the array;
//     2. If the array has fewer than 3 elements after removing duplicates,
//        add the number 0 to the array until it has 3 elements;
//     3. Replace the first and last elements with their sum.
//     4. Return the modified array.

// data for working check and exptcted outputs
const arr1 = [1, 2, 3, 4, 4, 5]; // -> [ 6, 2, 3, 4, 6 ]
const arr2 = [7, 7, 7, 7, 7]; // -> [7, 0, 7]
const arr3 = [4]; // -> [ 4, 0, 4 ]
const arr4 = []; // -> [ 0, 0, 0 ]

// solution via Set, spread operator, while-loop
function arrayWorkshop1(arr) {
  let noDuplicates = [...new Set(arr)]; // позбудемось дублікатів

  // проходимось по масиву і додаєм 0 до тих пір доки довжина не буде >=3
  while (noDuplicates.length < 3) {
    noDuplicates.push(0);
  }

  // підрахуємо суму першого та останнього елементу масиву
  const sum = noDuplicates[0] + noDuplicates[noDuplicates.length - 1];
  // заміняємо останній елемент та перший елемент їх сумою
  noDuplicates[0] = sum;
  noDuplicates[noDuplicates.length - 1] = sum;

  return noDuplicates;
}
console.log(arrayWorkshop1(arr1));
console.log(arrayWorkshop1(arr3));

// це саме але вищий пілотажЖ: компактне і обгорнуте в IIFE із fill методом
const arrayWorkshop11 = (arr) =>
  ((a = [...new Set(arr)]) => (
    a.length < 3 ? a.push(...Array(3 - a.length).fill(0)) : a,
    (a[0] = a[0] + a[a.length - 1]),
    (a[a.length - 1] = a[0]),
    a
  ))(arr);
// де snippet типу    ...Array(3 - a.length)     можна пояснити так:
/*- Array(n) → creates a new array with length n, but it’s full of empty 
slots (holes). Example: Array(3) → [ , , ] (length 3, but no values yet).
- .fill(0) → fills all those slots with the value 0.
Example: Array(3).fill(0) → [0, 0, 0].
- a.length → calculates how many zeros we need to add so that the array 
  has at least 3 elements.
- If a.length is 1 → 3 - 1 = 2 → we create [0, 0].
- If a.length is 2 → 3 - 2 = 1 → we create [0].
- If a.length is already ≥ 3 → 3 - a.length is ≤ 0, so we don’t need to add anything.
- a.push(...Array(3 - a.length).fill(0)) → spreads those zeros into 
  the array, padding it until it has at least 3 elements.*/

// sojution via set.size, fill and spread operator
function arrayWorkshop2(arr) {
  const set = new Set(arr); // створюєм множину без дублів
  let uniqueArr = [...set]; // конвертуємо назад в масив

  // додаємо 0 якщо довжина менше 3
  if (set.size < 3) {
    uniqueArr.push(...Array(3 - set.size).fill(0));
  }

  const sum = uniqueArr[0] + uniqueArr[uniqueArr.length - 1];
  uniqueArr[0] = sum;
  uniqueArr[uniqueArr.length - 1] = sum;

  return uniqueArr;
}
console.log(arrayWorkshop2(arr2));
console.log(arrayWorkshop2(arr4));
// ======================================================================
// ============================Task 04===================================
// UA: Створіть функцію formatNames, яка приймає масив імен (рядків) як
//     аргумент. Функція повинна використовувати метод map() для перетворення
//     кожного імені так, щоб воно було написано з першої літери (перша
//     літера кожного слова велика, решта малі). Повертає новий масив
//     відформатованих імен.
// EN: Create a function called formatNames that takes an array of names
//     (strings) as an argument. The function should use the map() method
//     to transform each name so that it's in title case (first letter of
//     each word capitalized, rest lowercase). Return the new array of
//     formatted names.

// data for working check
let arrStrs1 = ["john doe", "MARY JANE", "peter parker"];
let arrStrs2 = ["tOM hAnKs", "jULiA rOBerTs", "BRAD PITT", "aNgeLiNa JOLIE"];
let arrStrs3 = [
  "dr. strange",
  "CAPTAIN AMERICA",
  "black WIDOW",
  "iron MAN",
  "THOR odinson",
];
let arrStrs4 = [
  "sarah jessica parker",
  "ROBERT DOWNEY JR",
  "leonardo DiCaprio",
];
let arrStrs5 = [
  "muhammad ali",
  "MIKE TYSON",
  "floyd MAYWEATHER jr.",
  "manny PAC-MAN pacquiao",
];

// solution via map and
function formatNames1(names) {
  return names.map(
    (name) =>
      name
        .split(" ") // кожне ім"я розділити на слова з пробілом між ними
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()) // кожне слово починати з великої букви
        .join(" "), // з"єднати назад в повне ім"я з пробілом між словами
  );
}
console.log(formatNames1(arrStrs1));
console.log(formatNames1(arrStrs2));

// solution via .map() and .reduce() methods
function formatNames2(names) {
  return names.map((name) =>
    name.split(" ").reduce((acc, word) => {
      const formatted = word[0].toUpperCase() + word.slice(1).toLowerCase();
      return acc ? acc + " " + formatted : formatted;
      // або так: return idx === 0 ? formatted : acc + " " + formatted;
    }, ""),
  );
}
console.log(formatNames2(arrStrs3));
console.log(formatNames2(arrStrs4));

// solution via .map() and regEx
function formatNames3(names) {
  return names.map((name) =>
    name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
  );
}
console.log(formatNames3(arrStrs5));
// ======================================================================
// ============================Task 05===================================
// UA: Створіть функцію filterBooks, яка приймає два параметри:
//     1. Масив об'єктів book, де кожна книга має властивості title (рядок),
//        author (рядок) та rating (число від 1 до 5).
//     2. Мінімальний рейтинг (число).
//     Функція повинна використовувати метод filter() для повернення нового
//     масиву, що містить лише книги з рейтингом, більшим або рівним
//     мінімальному рейтингу.
// EN: Create a function called filterBooks that takes two parameters:
//     1.An array of book objects, where each book has properties title
//     (string), author (string), and rating (number from 1 to 5);
//     2. A minimum rating (number).
//     The function should use the filter() method to return a new array
//     containing only the books with a rating greater than or equal to the
//     minimum rating.

// data for working check
const bookGr1 = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.8 },
  { title: "Twilight", author: "Stephenie Meyer", rating: 2.3 },
];
let book1Rating = 3;

const bookGr2 = [{ title: "Empty Book", author: "Unknown", rating: 1 }];
let book2Rating = 1;

const bookGr3 = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.2 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.9 },
  { title: "1984", author: "George Orwell", rating: 4.6 },
];
let book3Rating = 4;

const bookGr4 = [
  { title: "Harry Potter", author: "J.K. Rowling", rating: 4.7 },
  { title: "Moby Dick", author: "Herman Melville", rating: 3.8 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 2.9 },
];
let book4Rating = 2;

// solution via .map()
function filterBooks1(books, minRating) {
  /* Метод .filter() очікує що функція callback повертає true чи false для
     кожного елементу масиву. І якщо true то в новому масиві містяться 
     елементи що пройшли цей тест. */
  return books.filter((book) => book.rating >= minRating);
}
console.log(filterBooks1(bookGr1, book1Rating));
console.log(filterBooks1(bookGr4, book4Rating));

// solution via .map() and ,filter()
function filterBooks2(books, minRating) {
  return books
    .map((book) => (book.rating >= minRating ? book : null))
    .filter(Boolean);
  /* Boolean це вбудована функція JS яка конвертує значення в true чи false.
• 	Приклади: Boolean("hello") → true, Boolean(null) → false, Boolean(0) → false,
    Boolean({}) → true. І коли записуємо як:
    array.filter(Boolean), це є скорочений запис array.filter(x => Boolean(x))
    тому вираз .filter(Boolean) видаляє усі falsy значення (null в нашому випадку),
    та залишає тільки валідні значення (обєкти book в нашому випадку).
    Приклад: const arr = [1, null, 2, undefined, 3, 0, 4];
    console.log(arr.filter(Boolean)); -> [1, 2, 3, 4].
    Таким чином, метод .filter(Boolean) - це просто фінт щоб видалити falsy значення
    як null, undefined, 0, "", false з масиву.
*/
}
console.log(filterBooks2(bookGr2, book2Rating));

// solution via .reduce() method
function filterBooks3(books, minRating) {
  return books.reduce((acc, book) => {
    if (book.rating >= minRating) {
      acc.push(book); // додасться тільки коли rating пройде умову
    }
    return acc;
  }, []);
  // a якщо так }, []).sort((a, b) => b.rating - a.rating);
  // то ще і відсортуєм на пониження рейтингу
}
console.log(filterBooks1(bookGr3, book3Rating));
// ======================================================================
// ============================Task 06===================================
// UA: Створіть функцію з назвою calculateGroceryTotal, яка приймає масив
//     об'єктів, що представляють продукти. Кожен об'єкт має дві властивості:
//      - name: рядок (назва товару);
//      - price: кількість (ціна товару);
//     Функція повинна:
//     1. Обчислювати загальну вартість усіх товарів;
//     2. Застосовувати знижку: - Якщо загальна сума перевищує 100,
//        застосовувати знижку 10%;
//     3. Якщо загальна сума перевищує 50, але менша або дорівнює 100,
//        застосовувати знижку 5%;
//     4. Не застосовувати знижку для загальної суми 50 або менше.
//     5. Повертати об'єкт, що містить:
//        - originalTotal: суму до знижки;
//        - discount: зекономлену суму;
//        - finalTotal: кінцеву суму після знижки.
// EN: Create a function named calculateGroceryTotal that takes an array
//     of objects representing grocery items. Each object has two properties:
//     1.name: string (name of the item); 2.price: number (price of the item)
//     The function should:
//     1.Calculate the total cost of all items;
//     2.Apply a discount: - If total is above 100, apply 10% discount;
//     3.If total is above 50 but below or equal to 100, apply 5% discount;
//     4.No discount for totals of 50 or less;
//     5.Return an object containing:
//      - originalTotal: the sum before discount;
//      - discount: the amount saved;
//      - finalTotal: the final amount after discount.

// the data for working check
const foodGr1 = [
  { name: "Organic Avocados", price: 15.99 },
  { name: "Premium Salmon", price: 89.99 },
];
const foodGr2 = [
  { name: "Truffle Oil", price: 45.5 },
  { name: "Wagyu Beef", price: 120.0 },
  { name: "Caviar", price: 80.0 },
];
const foodGr3 = [
  { name: "Ramen Noodles", price: 0.99 },
  { name: "Instant Coffee", price: 5.99 },
];

// solution via .reduce()
function calculateGroceryTotal1(items) {
  // підрахунок загальної ціни
  let originalTotal = items.reduce((acc, item) => acc + item.price, 0);
  // або можна і так: const originalTotal = items.reduce((acc, { price }) => acc + price, 0);

  // визначення скидки
  let discount = 0;
  if (originalTotal > 100) {
    discount = originalTotal * 0.1;
  } else if (originalTotal > 50) {
    discount = originalTotal * 0.05;
  }

  // підрахунок загальної вартості зі скидкою
  let finalTotal = originalTotal - discount;

  return {
    originalTotal: Math.round(originalTotal * 100) / 100, // Round to 2 decimals
    discount: Math.round(discount * 100) / 100,
    finalTotal: Math.round(finalTotal * 100) / 100,
  };
}
console.log(calculateGroceryTotal1(foodGr1));
console.log(calculateGroceryTotal1(foodGr2));

// solution via Object.values and .reduce()
function calculateGroceryTotalValues(itemsObj) {
  const originalTotal = Object.values(itemsObj).reduce(
    (acc, price) => acc + price,
    0,
  );

  const discountRate =
    originalTotal > 100 ? 0.1 : originalTotal > 50 ? 0.05 : 0;
  const discount = originalTotal * discountRate;
  const finalTotal = originalTotal - discount;

  return {
    originalTotal: +originalTotal.toFixed(2),
    discount: +discount.toFixed(2),
    finalTotal: +finalTotal.toFixed(2),
  };
}
console.log(calculateGroceryTotal1(foodGr3));
// ======================================================================
// ============================Task 07===================================
// UA: Створіть функцію processFruits, яка приймає масив об'єктів fruit.
//     Кожен об'єкт fruit має властивості name (рядок) та quantity (кількість).
//     Функція повинна використовувати ланцюжкове поєднання методів масивів для:
//     1. Фільтрування фруктів кількість якнх дорівнює 0;
//     2. Переведення назви кожного фрукта у верхній регістр;
//     3. Створення рядка, який містить список усіх фруктів та їх кількість,
//     наприклад "APPLE: 5, BANANA: 3"
//     Коротке нагадування: Ви можете використовувати функцію .join(", ")
//     для перетворення масиву рядків в один єдиний рядок. Можна навіть у
//     ланцюжку використовувати функцію .join(): arr.filter(...).map(...).join(...)
// EN: Create a function called processFruits that takes an array of fruit
//     objects. Each fruit object has properties name (string) and quantity
//     (number). The function should use chained array methods to:
//     1.Filter out fruits with quantity of 0;
//     2.Transform each fruit name to uppercase;
//     3.Create a string that lists all fruits with their quantities like
//     "APPLE: 5, BANANA: 3"
//     A quick reminder: You can use the .join(", ") function to convert
//     an array of strings to one single string. It is possible to chain
//     even the .join() function: arr.filter(...).map(...).join(...)

const fruitsGr1 = [
  { name: "apple", quantity: 5 },
  { name: "banana", quantity: 3 },
  { name: "orange", quantity: 0 },
];
const fruitsGr2 = [
  { name: "dragon fruit", quantity: 2 },
  { name: "kiwi", quantity: 0 },
  { name: "mango", quantity: 4 },
  { name: "papaya", quantity: 0 },
];
const fruitsGr3 = [
  { name: "strawberry", quantity: 1 },
  { name: "blueberry", quantity: 1 },
  { name: "raspberry", quantity: 1 },
];
const fruitsGr4 = [
  { name: "", quantity: 5 },
  { name: "", quantity: 3 },
  { name: "grape", quantity: 2 },
];

// solution via chain array methods like: .filter(), .map(), .join()
function processFruits1(fruits) {
  return fruits
    .filter((fruit) => fruit.quantity > 0) // тримаємо fruits з quantity > 0
    .map((fruit) => `${fruit.name.toUpperCase()}: ${fruit.quantity}`) // конвертуємо у рядок у верхРегістр
    .join(", "); // об"єднуємо в єдиний, фінальний рядок
}
console.log(processFruits1(fruitsGr1));
console.log(processFruits1(fruitsGr2));

// solution via .reduce()
function processFruits2(fruits) {
  return fruits.reduce((acc, fruit) => {
    if (fruit.quantity > 0) {
      const entry = `${fruit.name.toUpperCase()}: ${fruit.quantity}`;
      // Add comma if accumulator already has content
      return acc ? acc + ", " + entry : entry;
    }
    return acc;
  }, "");
}
console.log(processFruits2(fruitsGr3));
console.log(processFruits2(fruitsGr4));
// ======================================================================
// ============================Task 08===================================
// UA: Створіть функцію sortByLength, яка приймає масив рядків і повертає
//     новий масив з тими ж рядками, відсортованими за їхньою довжиною у
//     порядку зростання. Якщо два рядки мають однакову довжину, їх слід
//     відсортувати в алфавітному порядку.
// EN: Create a function named sortByLength that takes an array of strings
//     and returns a new array with the same strings sorted by their length
//     in ascending order. If two strings have the same length, they should
//     be sorted alphabetically.

// the data for working check
const domesticAnimals = ["cat", "dog", "horse", "sheep", "cow", "donkay"];
const itProgLangs = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go"];
const lettersGr = ["zzz", "aaa", "bbb", "ccc"];
const greetingsGr = ["hello", "hi", "hey", "howdy", "greetings"];

// solution via .map() and .sort() methods
function sortByLength1(arr) {
  let copy = [...arr]; // створили копію щоб уникнути мутацію початкового масиву
  return copy.sort((a, b) => {
    // необхідно зауважити, що callback методу .sort() повертає або відємне
    // число або нуль або число, тому потрібно тут оперувати з властивістю length
    if (a.length !== b.length) {
      return a.length - b.length; // сортування по довжині рядка на зростання
    } else {
      return a.localeCompare(b); // cортування по алфавіту якщо одинакова довжина
    }
  });
}
console.log(sortByLength1(domesticAnimals));

// solution via using .map() and .sort()
/* Це класичний шаблон «декорування-сортування-роздекорування» (іноді його 
   називають перетворенням Шварца), який особливо корисний під час сортування 
   за кількома критеріями. Отже: */
function sortByLength2(arr) {
  return arr
    .map((str) => ({ value: str, length: str.length })) // декорування: отримуєм початковий рядок та його довжину в допоміжному об'єкті
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length; // сортування по довжині рядка на зростання
      }
      return a.value.localeCompare(b.value); // cортування по алфавіту якщо одинакова довжина
    })
    .map((obj) => obj.value); // роздекорування: повертаємо початковий рядок
}
console.log(sortByLength2(itProgLangs));

// solution via .map() - bucket‑style solution
/* Групування по корзинах - сутність полягає у спочатку групуванні рядків за їхньою 
   довжиною у віртуальні корзин, далі сортуємо кожну корзину в алфавітному порядку,
   і вже на кінці - знову об'єднаємо їх в один масив.
*/
function sortByLengthBuckets(arr) {
  // спочатку визначимо max довжину рядка, щоб визначити скільки корзин нам потрібно загалом
  const maxLen = Math.max(...arr.map((str) => str.length));

  // створюємо корзини для кожної існуючої довжини рядка
  const buckets = Array.from({ length: maxLen + 1 }, () => []);

  // розкладання рядків по корзинам в залежності від їх довжин
  arr.forEach((str) => {
    buckets[str.length].push(str);
  });

  // сортування корзин в алфавітному порядку
  buckets.forEach((bucket) => bucket.sort((a, b) => a.localeCompare(b)));

  // зведення усіх корзин (масивів) назад в один масив (корзину)
  return buckets.flat();
}
console.log(sortByLengthBuckets(lettersGr));

// solution via .reduce() - bucket‑style solution
function sortByLengthReduce(arr) {
  // групування рядків по їх довжинам використовуючи .reduce()
  const grouped = arr.reduce((acc, str) => {
    const len = str.length;
    if (!acc[len]) acc[len] = [];
    acc[len].push(str);
    return acc;
  }, {});

  // сортування корзин за значенням довжини (sort lengths numerically)
  const lengths = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  // зведення в один масив (корзину), сортування за алфавітом всередині кожної корзини
  return lengths.flatMap((len) =>
    grouped[len].sort((a, b) => a.localeCompare(b)),
  );
}
console.log(sortByLengthReduce(greetingsGr));
// ======================================================================
// ============================Task 09===================================
// UA: Створіть функцію chainMaster, яка приймає масив чисел як аргумент.
//     Функція повинна використвувати методи масивів ланцюжком для
//     виконання таких операцій:
//     1. Зберігати лише числа, які діляться на 3;
//     2. Помножити кожне число, що залишилося, на 2;
//     3. Сортувати результуючий масив у порядку спадання;
//     4. Повернути об'єкт з такими властивостями:
//      - transformedArray: Кінцевий масив після всіх операцій
//      - sum: Сума всіх чисел у кінцевому масиві
//      - average: Середнє значення всіх чисел у кінцевому масиві, округлене
//        до двох знаків після коми.
//      Використовуйте відповідні методи для масивів (filter, map, sort,
//      reduce) у вашому рішенні.
// EN: Create a function called chainMaster that takes an array of numbers
//     as an argument. The function should use chained array methods to
//     perform the following operations:
//     1.Keep only numbers that are divisible by 3;
//     2.Multiply each remaining number by 2;
//     3.Sort the resulting array in descending order;
//     4.Return an object with the following properties:
//       - transformedArray: The final array after all operations;
//       - sum: The sum of all numbers in the final array;
//       - average: The average of all numbers in the final array, rounded
//         to two decimal places.
//      Use appropriate array methods (filter, map, sort, reduce) in your
//      solution.

const arr5 = [15, 3, 27, 8, 99, 6, 4, 2];
const arr6 = [7, 11, 13, 17, 19, 23];

// solution via
function chainMaster1(numbers) {
  let result = numbers
    .filter((num) => num % 3 === 0) // утримуються лише ті числа, які діляться на 3
    .map((num) => num * 2) // множимо кожне число на 2
    .sort((a, b) => b - a); // сортуємо на зменшення

  let sum = result.reduce((acc, num) => acc + num, 0);

  //   let average = Math.round((sum / result.length) * 100) / 100;
  // aле у цьому випадку краще додати перевірку на 0 щоб не ділити на 0
  // також у цьому випадку значення для avarage буде NaN, тоді рішення
  // потрібно перевірити на 0 або кожуть додати запобіжник типу:
  let average;
  if (result.length > 0) {
    average = Math.round((sum / result.length) * 100) / 100;
  } else {
    average = 0; // або average = NaN;
  }
  // можна i так:
  // const average =
  //   result.length ? Math.round((sum / result.length) * 100) / 100 : 0;

  return {
    transformedArray: result,
    sum: sum,
    average: average,
  };
}
console.log(chainMaster1(arr5));
console.log(chainMaster1(arr6));
console.log(chainMaster1(arr4));

// solution via separate steps and .reduce() for transforming array
function chainMaster2(numbers) {
  // Step 1: build transformed array directly inside reduce
  const transformedArray = numbers.reduce((acc, num) => {
    if (num % 3 === 0) {
      acc.push(num * 2); // keep only divisible by 3, then double
    }
    return acc;
  }, []);

  // Step 2: sort descending
  transformedArray.sort((a, b) => b - a);

  // Step 3: compute sum and average
  const sum = transformedArray.reduce((acc, num) => acc + num, 0);

  const average = transformedArray.length
    ? +(sum / transformedArray.length).toFixed(2)
    : NaN; // або 0

  return { transformedArray, sum, average };
}
console.log(chainMaster2(arr5));
console.log(chainMaster2(arr6));
console.log(chainMaster2(arr4));
// ======================================================================
// ============================Task 10===================================
// UA: Ви створюватимете систему управління кінофестивалем. Почніть з
//     ініціалізації системи наданими даними та створення структури головної
//     функції. Змінна festivalData як початкові дані вже була створена. Ви
//     створюватимете систему управління кінофестивалем. Почніть з ініціалізації
//     системи наданими даними та створення структури головної функції. Створіть
//     функцію manageFestival, яка приймає два параметри:
//     - дії (масив рядків);
//     - дані (масив об'єктів).
//     Функція повинна:
//     1. Обробляти кожну дію в масиві дій послідовно;
//     2. Створити порожній масив результатів;
//     3. Створити оператор switch з такими початковими кейсами:
//       - listMovies: додає festivalData.movies до масиву результатів;
//       - listVenues: додає festivalData.venues до масиву результатів;
//       - listTickets: додає festivalData.tickets до масиву результатів;
//       - listScreenings: додає festivalData.screenings до масиву результатів;
//       - default: додає "Invalid action!" до масиву результатів;
//     Повертати масив результатів.
// EN: You will be creating a Movie Festival Management System. Start by
//     initializing the system with the provided data and creating the main
//     function structure. The variable festivalData as initial data had
//     already craeted. You will be creating a Movie Festival Management
//     System. Start by initializing the system with the provided data and
//     creating the main function structure. Create a function called
//     manageFestival that takes two parameters:
//     - actions (array of strings);
//     - data (array of objects).
//     The function should:
//     1.Process each action in the actions array in sequence;
//     2.Create an empty results array;
//     3.Create a switch statement with the following initial cases:
//       - listMovies: adds festivalData.movies to results array;
//       - listVenues: adds festivalData.venues to results array;
//       - listTickets: adds festivalData.tickets to the results array;
//       - listScreenings: adds festivalData.screenings to the results array;
//       - default: adds "Invalid action!" to results array;
//     Return the results array.

// initial data
const festivalData = {
  movies: [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      mainGenre: "Sci-Fi",
      secondGenre: undefined,
      avgRating: 0,
      available: true,
    },
  ],
  venues: [
    {
      id: 1,
      name: "Main Theater",
      capacity: 200,
    },
  ],
  screenings: [
    {
      id: 1,
      movieId: 1,
      venueId: 1,
      date: "2023-10-29",
      time: "13:35:00",
      availableSeats: 200,
    },
  ],
  tickets: new Set(),
};

function manageFestival1(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "listMovies":
        // Write your code here
        results.push(festivalData.movies);
        break;
      case "listVenues":
        // Write your code here
        results.push(festivalData.venues);
        break;
      case "listTickets":
        // Write your code here
        results.push(festivalData.tickets);
        /* повертає сам об'єкт Set (Set(0) {}). Це відповідає задачі на тепер, але якщо
           наступні підзадачі очікують, що квитки будуть перелічені як масив, то потрібно 
           обгорнути його методом Array.from(festivalData.tickets). */
        break;
      case "listScreenings":
        // Write your code here
        results.push(festivalData.screenings);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  });

  return results;
}
// working check
let actions1 = ["listMovies"];
let data1 = [{}];
// Outputs: - returns [[{ id: 1, title: "Inception", ... }]]

let actions2 = ["listVenues", "listMovies"];
let data2 = [{}, {}];
// Outputs: - returns [[{ id: 1, name: "Main Theater", capacity: 200 }], [{ id: 1, title: "Inception", ... }]]

let actions = ["listTickets", "listScreenings", "listMovies"];
let data3 = [{}, {}, {}];
// Outputs: - returns [Set(0) {}, [{ id: 1, movieId: 1, venueId: 1, ... }], [{ id: 1, title: "Inception", ... }]]

let actions4 = ["invalidAction", "listVenues", "wrongAction"];
let data4 = [{}, {}, {}];
// Outputs: - returns ["Invalid action!", [{ id: 1, name: "Main Theater", capacity: 200 }], "Invalid action!"];

let actions5 = ["listScreenings", "listTickets", "listVenues", "listMovies"];
let data5 = [{}, {}, {}, {}];
// Outputs: - returns [[{ id: 1, movieId: 1, venueId: 1, ... }], Set(0) {}, [{ id: 1, name: "Main Theater", capacity: 200 }], [{ id: 1, title: "Inception", ... }]]
// ======================================================================
// EN: Add two new cases to your switch statement: addMovie and addVenue.
//     For addMovie, the data parameter contains:
//     -title (string); -director (string); -year (number); -mainGenre (string);
//     -secondGenre (string).  The function should:
//     1.Create a new movie object with:
//     - id: generate by adding 1 to the length of movies array;
//     - title, - director, - year, - mainGenre, - secondGenre from the data;
//     - avgRating: 0; - available: true.
//     2.Add the movie to festivalData.movies array;
//     3.Add "Movie added successfully!" to results array;
//     For addVenue, the data parameter contains: -name (string); -capacity (number).
//     The function should:
//     1.Create a new venue object with:
//     - id: generate by adding 1 to the length of venues array;
//     - name and capacity from the data;
//     2.Add the venue to festivalData.venues array;
//     3.Add "Venue added successfully!" to results array.

// solution:
function manageFestival2(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "addVenue":
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };
        festivalData.venues.push(newVenue);
        results.push("Venue added successfully!");
        break;
      case "addMovie":
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };
        festivalData.movies.push(newMovie);
        results.push("Movie added successfully!");
        break;
      case "listMovies":
        // Write your code here
        results.push(festivalData.movies);
        break;
      case "listVenues":
        // Write your code here
        results.push(festivalData.venues);
        break;
      case "listTickets":
        // Write your code here
        results.push(festivalData.tickets);
        break;
      case "listScreenings":
        // Write your code here
        results.push(festivalData.screenings);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  });

  return results;
}
// working check
const actions6 = ["addMovie", "listMovies"];
const data6 = [
  {
    title: "The Matrix",
    director: "Wachowski Sisters",
    year: 1999,
    mainGenre: "Sci-Fi",
    secondGenre: "Action",
  },
  {},
];
const actions7 = ["addVenue", "listVenues"];
const data7 = [{ name: "IMAX Theater", capacity: 300 }, {}];
const actions8 = ["addMovie", "addVenue", "listMovies", "listVenues"];
const data8 = [
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    mainGenre: "Crime",
    secondGenre: "Drama",
  },
  { name: "Outdoor Cinema", capacity: 500 },
  {},
  {},
]; // [
//   "Movie added successfully!",
//   "Venue added successfully!",
//   [
//     { id: 1, title: "Inception", ...},
//     { id: 2, title: "The Matrix", director: "Wachowski ... },
//     { id: 3, title: "Pulp Fiction", director: "Quentin Tarantino". }
//   ],
//   [
//     { id: 1, name: "Main Theater", capacity: 200 },
//     { id: 2, name: "IMAX Theater", capacity: 300 },
//     { id: 3, name: "Outdoor Cinema", capacity: 500 }
//   ]
// ]
// ======================================================================
// EN: Add a new test case to your switch statement: addScreening. For
//     addScreening the data parameters contains:
//     -movieId (number);   -venueId (number);
//     -date (string in 'YYYY-MM-DD' format); -time (string in 'HH:MM:SS' format);
//     The function should:
//     1.Validate if movie and venue exist - If movie or venue not found,
//     add "Movie or venue not found!" to results;
//     2.Check if there's no screening at the same venue, date and time - If
//     screening exists, add "Screening already exists at this time!" to results;
//     3.Create a new screening object with:
//       -id: generate by adding 1 to the length of screening array;
//       -movieId, venueId, date, and time from the data;
//       -availableSeats: equal to venue's capacity;
//     4.Add the screening to festivalData.screenings array;
//     5.Add "Screening added successfully!" to results array.

// solution:
function manageFestival3(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "addScreening":
        // валідація існування movie та venue
        const movie = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        const venue = festivalData.venues.find(
          (v) => v.id === currentData.venueId,
        );

        if (!movie || !venue) {
          results.push("Movie or venue not found!");
          break;
        }

        // перевірка існування дублікатів фільмів в тому самому чи місці чи даті чи часі
        // створення множини існуючих унікальних ключів Set
        const screeningKeys = new Set(
          festivalData.screenings.map(
            (s) => `${s.venueId}-${s.date}-${s.time}`,
          ),
        );
        // генерація ключа для нового screening
        const newKey = `${currentData.venueId}-${currentData.date}-${currentData.time}`;
        if (screeningKeys.has(newKey)) {
          results.push("Screening already exists at this time!");
          break;
        }
        // або можна ше і так:
        // const duplicate = festivalData.screenings.find(
        //   (s) =>
        //     s.venueId === currentData.venueId &&
        //     s.date === currentData.date &&
        //     s.time === currentData.time,
        // );
        // if (duplicate) {
        //   results.push("Screening already exists at this time!");
        //   break;
        // }

        const newScreening = {
          id: festivalData.screenings.length + 1,
          movieId: currentData.movieId,
          venueId: currentData.venueId,
          date: currentData.date,
          time: currentData.time,
          availableSeats: venue.capacity,
        };
        festivalData.screenings.push(newScreening);
        results.push("Screening added successfully!");
        break;
      case "addVenue":
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };
        festivalData.venues.push(newVenue);
        results.push("Venue added successfully!");
        break;
      case "addMovie":
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };
        festivalData.movies.push(newMovie);
        results.push("Movie added successfully!");
        break;
      case "listMovies":
        results.push(festivalData.movies);
        break;
      case "listVenues":
        results.push(festivalData.venues);
        break;
      case "listTickets":
        results.push(festivalData.tickets);
        break;
      case "listScreenings":
        results.push(festivalData.screenings);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  });

  return results;
}

const actions9 = ["addScreening", "listScreenings"];
const data9 = [
  { movieId: 1, venueId: 1, date: "2023-12-25", time: "18:00:00" },
  {},
];
const actions10 = ["addMovie", "addVenue", "addScreening", "listScreenings"];
const data10 = [
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    mainGenre: "Action",
    secondGenre: "Drama",
  },
  { name: "Premium Theater", capacity: 150 },
  { movieId: 2, venueId: 2, date: "2023-12-24", time: "20:00:00" },
  {},
];
const actions11 = ["addScreening", "addScreening", "listScreenings"];
const data11 = [
  { movieId: 1, venueId: 1, date: "2023-12-26", time: "15:00:00" },
  { movieId: 1, venueId: 1, date: "2023-12-26", time: "15:00:00" },
  {},
];
const actions12 = [
  "addScreening",
  "listMovies",
  "listVenues",
  "listScreenings",
];
const data12 = [
  { movieId: 999, venueId: 1, date: "2023-12-27", time: "19:30:00" },
  {},
  {},
  {},
];
console.log(manageFestival3(actions9, data9));
console.log(manageFestival3(actions10, data10));
console.log(manageFestival3(actions11, data11));
console.log(manageFestival3(actions12, data12));
// ======================================================================
// EN: Add case buyTicket that handles ticket purchases. The data parameter
//     contains: - screeningId (number) and - quantity (number);
//     The function should:
//     1.Check if screening exists and has enough available seats:
//      -If not found, add "Screening not found!" to results array;
//      -If not enough seats, add "Not enough seats available!" to results array.
//     2.Create ticket IDs following this exact format:
//      -For each ticket, create ID as: ${screeningId}-${currentAvailableSeats},
//       Example: If screeningId is 1 and availableSeats is 200, and quantity is 2:
//          --First ticket ID will be "1-200";
//          --Second ticket ID will be "1-199"
//     3.Add each ticket ID to festivalData.tickets Set;
//     4.Subtract quantity from screening's availableSeats;
//     5.Add Tickets purchased successfully! to results array.

// solution:
function manageFestival4(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "buyTicket":
        // пошук екрана/кінотеатра
        const screening = festivalData.screenings.find(
          (s) => s.id === currentData.screeningId,
        );
        if (!screening) {
          results.push("Screening not found!");
          break;
        }
        // перевірка на наявність вільних місць
        if (screening.availableSeats < currentData.quantity) {
          results.push("Not enough seats available!");
          break;
        }
        // створення IDs білета
        for (let i = 0; i < currentData.quantity; i++) {
          const ticketId = `${screening.id}-${screening.availableSeats}`;
          festivalData.tickets.add(ticketId); // тут додаєм рядок типу "1-200" в колекцію білетів Set
          screening.availableSeats--; // зменшуємо кількість місць
        }
        results.push("Tickets purchased successfully!");
        break;
      case "addScreening":
        const movie = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        const venue = festivalData.venues.find(
          (v) => v.id === currentData.venueId,
        );

        if (!movie || !venue) {
          results.push("Movie or venue not found!");
          break;
        }

        const screeningKeys = new Set(
          festivalData.screenings.map(
            (s) => `${s.venueId}-${s.date}-${s.time}`,
          ),
        );
        const newKey = `${currentData.venueId}-${currentData.date}-${currentData.time}`;
        if (screeningKeys.has(newKey)) {
          results.push("Screening already exists at this time!");
          break;
        }

        const newScreening = {
          id: festivalData.screenings.length + 1,
          movieId: currentData.movieId,
          venueId: currentData.venueId,
          date: currentData.date,
          time: currentData.time,
          availableSeats: venue.capacity,
        };
        festivalData.screenings.push(newScreening);
        results.push("Screening added successfully!");
        break;
      case "addVenue":
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };
        festivalData.venues.push(newVenue);
        results.push("Venue added successfully!");
        break;
      case "addMovie":
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };
        festivalData.movies.push(newMovie);
        results.push("Movie added successfully!");
        break;
      case "listMovies":
        results.push(festivalData.movies);
        break;
      case "listVenues":
        results.push(festivalData.venues);
        break;
      case "listTickets":
        results.push(festivalData.tickets);
        break;
      case "listScreenings":
        results.push(festivalData.screenings);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  });

  return results;
}
// working check data
const actions13 = ["buyTicket", "listTickets"];
const data13 = [{ screeningId: 1, quantity: 2 }, {}];
const actions14 = [
  "addScreening",
  "buyTicket",
  "listScreenings",
  "listTickets",
];
const data14 = [
  { movieId: 1, venueId: 1, date: "2023-12-25", time: "20:00:00" },
  { screeningId: 2, quantity: 5 },
  {},
  {},
];
console.log(manageFestival4(actions13, data13));
console.log(manageFestival4(actions14, data14));
// ======================================================================
// EN: Add case rateMovie that handles movie ratings. The data parameter
//     contains: -movieId (number) and -avgRating (number between 1-5).
//     The function should:
//     1.Validate if movie exists - If movie not found, add "Movie not found!"
//       to results array;
//     2.Validate rating is between 1-5 - If rating invalid, add "Invalid
//       rating! Must be between 1 and 5" to results array;
//     3.Update movie's avgRating.
//     4.Add Rating added successfully! to results array;

// solution:
function manageFestival5(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "rateMovie":
        // перевірка чи фільм існує
        const movieToRate = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        if (!movieToRate) {
          results.push("Movie not found!");
          break;
        }
        // визначення діапазону рейтингу
        if (currentData.avgRating < 1 || currentData.avgRating > 5) {
          results.push("Invalid rating! Must be between 1 and 5");
          break;
        }
        // поновлення рейтингу фільму avgRating
        movieToRate.avgRating = currentData.avgRating;
        // повідомлення про успішно доданий рейтинг
        results.push("Rating added successfully!");
        break;

      case "buyTicket":
        // пошук екрана/кінотеатра
        const screening = festivalData.screenings.find(
          (s) => s.id === currentData.screeningId,
        );
        if (!screening) {
          results.push("Screening not found!");
          break;
        }
        // перевірка на наявність вільних місць
        if (screening.availableSeats < currentData.quantity) {
          results.push("Not enough seats available!");
          break;
        }
        // створення IDs білета
        for (let i = 0; i < currentData.quantity; i++) {
          const ticketId = `${screening.id}-${screening.availableSeats}`;
          festivalData.tickets.add(ticketId); // тут додаєм рядок типу "1-200" в колекцію білетів Set
          screening.availableSeats--; // зменшуємо кількість місць
        }
        results.push("Tickets purchased successfully!");
        break;
      case "addScreening":
        const movieForScreening = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        const venue = festivalData.venues.find(
          (v) => v.id === currentData.venueId,
        );

        if (!movieForScreening || !venue) {
          results.push("Movie or venue not found!");
          break;
        }

        const screeningKeys = new Set(
          festivalData.screenings.map(
            (s) => `${s.venueId}-${s.date}-${s.time}`,
          ),
        );
        const newKey = `${currentData.venueId}-${currentData.date}-${currentData.time}`;
        if (screeningKeys.has(newKey)) {
          results.push("Screening already exists at this time!");
          break;
        }

        const newScreening = {
          id: festivalData.screenings.length + 1,
          movieId: currentData.movieId,
          venueId: currentData.venueId,
          date: currentData.date,
          time: currentData.time,
          availableSeats: venue.capacity,
        };
        festivalData.screenings.push(newScreening);
        results.push("Screening added successfully!");
        break;

      case "addVenue":
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };
        festivalData.venues.push(newVenue);
        results.push("Venue added successfully!");
        break;

      case "addMovie":
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };
        festivalData.movies.push(newMovie);
        results.push("Movie added successfully!");
        break;

      case "listMovies":
        results.push(festivalData.movies);
        break;

      case "listVenues":
        results.push(festivalData.venues);
        break;

      case "listTickets":
        results.push(festivalData.tickets);
        break;

      case "listScreenings":
        results.push(festivalData.screenings);
        break;

      default:
        results.push("Invalid action!");
        break;
    }
  });

  return results;
}
// working check data
const actions15 = ["rateMovie", "listMovies"];
const data15 = [{ movieId: 1, avgRating: 4.5 }, {}];
const actions16 = ["addMovie", "rateMovie", "listMovies"];
const data16 = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    mainGenre: "Drama",
    secondGenre: "Crime",
  },
  { movieId: 2, avgRating: 5 },
  {},
];
console.log(manageFestival5(actions15, data15));
console.log(manageFestival5(actions16, data16));
// ======================================================================
// EN: Add case cancelScreening that handles screening cancellations. The
//     data parameter contains: screeningId (number). The function should:
//     1.If the screening with the given screeningId does not exist in
//      festivalData.screenings, add "Screening not found!" to results
//      and stop;
//     2.Find and remove the screening from festivalData.screenings array;
//     3.Remove all related tickets from festivalData.tickets Set;
//     4.Add "Screening cancelled successfully!"" to results array.

// solution:
function manageFestival6(actions, data) {
  let results = [];

  actions.forEach((action, index) => {
    const currentData = data[index];

    switch (action) {
      case "cancelScreening":
        // пошук відповідного показу (screening)
        /*Тут використаємо метод .findIndex(), який повертає числовий індекс
        місця положення цілого об"єкту screening в масиві.*/
        const screeningIndex = festivalData.screenings.findIndex(
          (s) => s.id === currentData.screeningId,
        );
        if (screeningIndex === -1) {
          results.push("Screening not found!");
          break;
        }

        // доступ до об"єкта показу по його індексу та зчитування його id
        const screeningId = festivalData.screenings[screeningIndex].id;

        // видалення показу (screening)
        festivalData.screenings.splice(screeningIndex, 1);

        // видалення відповідних білетів (з колекції Set)
        for (let ticket of festivalData.tickets) {
          if (ticket.startsWith(`${screeningId}-`)) {
            festivalData.tickets.delete(ticket);
          }
        }
        /*aбо можна так видалити білети:
        festivalData.tickets = new Set(
            [...festivalData.tickets].filter(ticket => !ticket.startsWith(`${screeningId}-`))
        );*/
        // повідомлення про успішне видалення показу
        results.push("Screening cancelled successfully!");
        break;

      case "rateMovie":
        const movieToRate = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        if (!movieToRate) {
          results.push("Movie not found!");
          break;
        }
        if (currentData.avgRating < 1 || currentData.avgRating > 5) {
          results.push("Invalid rating! Must be between 1 and 5");
          break;
        }
        movieToRate.avgRating = currentData.avgRating;
        results.push("Rating added successfully!");
        break;

      case "buyTicket":
        const screening = festivalData.screenings.find(
          (s) => s.id === currentData.screeningId,
        );
        if (!screening) {
          results.push("Screening not found!");
          break;
        }
        if (screening.availableSeats < currentData.quantity) {
          results.push("Not enough seats available!");
          break;
        }
        for (let i = 0; i < currentData.quantity; i++) {
          const ticketId = `${screening.id}-${screening.availableSeats}`;
          festivalData.tickets.add(ticketId);
          screening.availableSeats--;
        }
        results.push("Tickets purchased successfully!");
        break;
      case "addScreening":
        const movieForScreening = festivalData.movies.find(
          (m) => m.id === currentData.movieId,
        );
        const venue = festivalData.venues.find(
          (v) => v.id === currentData.venueId,
        );

        if (!movieForScreening || !venue) {
          results.push("Movie or venue not found!");
          break;
        }

        const screeningKeys = new Set(
          festivalData.screenings.map(
            (s) => `${s.venueId}-${s.date}-${s.time}`,
          ),
        );
        const newKey = `${currentData.venueId}-${currentData.date}-${currentData.time}`;
        if (screeningKeys.has(newKey)) {
          results.push("Screening already exists at this time!");
          break;
        }

        const newScreening = {
          id: festivalData.screenings.length + 1,
          movieId: currentData.movieId,
          venueId: currentData.venueId,
          date: currentData.date,
          time: currentData.time,
          availableSeats: venue.capacity,
        };
        festivalData.screenings.push(newScreening);
        results.push("Screening added successfully!");
        break;

      case "addVenue":
        const newVenue = {
          id: festivalData.venues.length + 1,
          name: currentData.name,
          capacity: currentData.capacity,
        };
        festivalData.venues.push(newVenue);
        results.push("Venue added successfully!");
        break;

      case "addMovie":
        const newMovie = {
          id: festivalData.movies.length + 1,
          title: currentData.title,
          director: currentData.director,
          year: currentData.year,
          mainGenre: currentData.mainGenre,
          secondGenre: currentData.secondGenre,
          avgRating: 0,
          available: true,
        };
        festivalData.movies.push(newMovie);
        results.push("Movie added successfully!");
        break;

      case "listMovies":
        results.push(festivalData.movies);
        break;

      case "listVenues":
        results.push(festivalData.venues);
        break;

      case "listTickets":
        results.push(festivalData.tickets);
        break;

      case "listScreenings":
        results.push(festivalData.screenings);
        break;

      default:
        results.push("Invalid action!");
        break;
    }
  });

  return results;
}
// working check data
const actions17 = ["cancelScreening", "listScreenings"];
const data17 = [{ screeningId: 1 }, {}];
const actions18 = [
  "buyTicket",
  "cancelScreening",
  "listScreenings",
  "listTickets",
];
const data18 = [{ screeningId: 1, quantity: 5 }, { screeningId: 1 }, {}, {}];
console.log(manageFestival6(actions17, data17));
console.log(manageFestival6(actions18, data18));
