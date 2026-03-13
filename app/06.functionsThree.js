console.log("Topic: Functions - Part 3");

// ============================Task 01===================================
// UA: Створіть функцію під назвою toggleBookStatus, яка приймає об'єкт
//     книгa як параметр. Функція повинна:
//     Якщо книга має властивість isRead, що дорівнює true, змінити її на false
//     Якщо книга має властивість isRead, що дорівнює false, змінити її на true
//     Якщо книга не має властивості isRead, додати її та встановити для неї
//     значення true.
//     Повернути змінений об'єкт книги
// EN: Create a function called toggleBookStatus that takes a book object as
//     a parameter. The function should:
//     If the book has a property isRead that is true, change it to false
//     If the book has a property isRead that is false, change it to true
//     If the book doesn't have an isRead property, add it and set it to true
//     Return the modified book object

let book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isRead: true,
  pages: 180,
  genre: "Classic",
};

let book2 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  publishYear: 1997,
  price: 29.99,
  language: "English",
};

// solution via method .hasOwnProperty() and boolean operator !
function toggleBookStatus1(book) {
  if (book.hasOwnProperty("isRead")) {
    book.isRead = !book.isRead; // переключає true ↔ false
  } else {
    book.isRead = true; // додає властивість якщо вона відсутня
  }
  return book;
}
console.log(toggleBookStatus1(book1));

// solution via operator in and boolean operator !
function toggleBookStatus2(book) {
  if ("isRead" in book) {
    book.isRead = !book.isRead;
  } else {
    book.isRead = true;
  }
  return book;
}
console.log(toggleBookStatus2(book2));
// ======================================================================
// ============================Task 02===================================
// UA: Напишіть функцію з назвою analyzeShoppingCart, яка приймає об'єкт
//     корзини для покупок. Об'єкт корзини для покупок містить елементи як
//     ключі, а їх кількість як значення. Функція повинна повертати об'єкт
//     з такою інформацією:
//     -totalItems: Загальну кількість унікальних елементів (кількість ключів)
//     -totalQuantity: Суму усіх елементів покупок.
// EN: Write a function named analyzeShoppingCart that takes a shopping
//     cart object. The shopping cart object contains items as keys and
//     their quantities as values. The function should return an object
//     with the following information:
//      totalItems: The total number of unique items (number of keys)
//      totalQuantity: The sum of all quantities

let fruits = { banana: 5, apple: 3, orange: 2, mango: 1, pear: 4 };
let apparel = { shirt: 3, pants: 2 };

// solution via static Object class methods like Object.keys() and Object.values()
function analyzeShoppingCart1(cart) {
  let totalItems = Object.keys(cart).length;
  let totalQuantity = Object.values(cart).reduce((acc, val) => acc + val, 0);

  return {
    totalItems: totalItems,
    totalQuantity: totalQuantity,
  };
}
// working check
console.log(analyzeShoppingCart1(fruits));
// { totalItems: 5, totalQuantity: 15 }
console.log(analyzeShoppingCart1(apparel));
// { totalItems: 2, totalQuantity: 5 }

// solution via static Object class method Object.entries()
/* Статичний метод для Об"єктів Object.entries(cart) повертає масив пар [ключ, значення].
а властивість length поверне кількість ключів (унікальних ключів об"єкту)*/
function analyzeShoppingCart2(cart) {
  let totalItems = Object.entries(cart).length;
  let totalQuantity = Object.entries(cart).reduce(
    (acc, [_, val]) => acc + val,
    0,
  );

  return {
    totalItems: totalItems,
    totalQuantity: totalQuantity,
  };
}
// working check
console.log(analyzeShoppingCart2(fruits));
// { totalItems: 5, totalQuantity: 15 }
console.log(analyzeShoppingCart2(apparel));
// { totalItems: 2, totalQuantity: 5 }
// ======================================================================
// ============================Task 03===================================
// UA: Створіть функцію з назвою mergeCars, яка приймає два об'єкти car
//     як параметри. Функція повинна об'єднати властивості другого car з
//     властивостями першого car та повернути новий об'єкт car без зміни
//     жодних з оригінальних об'єктів.
// EN: Create a function named mergeCars that takes two car objects as
//     parameters. The function should merge the second car's properties
//     into the first car's properties and return a new car object without
//     modifying any of the original objects.

let car1 = { brand: "Porsche", model: "911", year: 2022, isElectric: false };
let car2 = { brand: "BMW", model: "M3", year: 2023, isElectric: false };

// solution via spread operator
/* Оператор "..." створює новий об'єкт без зміни жодного з оригінальних. I
    якщо якісь ключі одинакові, то властивості другого об"єкта перезаписують
    властивості першого, як в цьому випадку (марка, модель, рік випуску,
    isElectric). Отже рішення буде:
*/
function mergeCars(car1, car2) {
  return { ...car1, ...car2 };
}
console.log(mergeCars(car1, car2));
// ======================================================================
// ============================Task 04===================================
// UA: Створіть функцію з назвою removeKeys, яка приймає два параметри:
//     1. Об'єкт 2. Масив рядків (ключі, які потрібно видалити)
//     Функція повинна повертати новий об'єкт з видаленими вказаними ключами.
// EN: Create a function named removeKeys that takes two parameters:
//     1. An object 2.An array of strings (keys to be removed)
//     The function should return a new object with the specified keys
//     removed.

let obj = {
  name: "John",
  age: 30,
  city: "New York",
  job: "developer",
  salary: 75000,
};
let keysToRemove = ["age", "salary"];

// solution via delete and spred operators and for..of loop
/* якщо є масив то потрібно проітерувати кожен елемент щоб
   взяти його бо оператор delete obj[someKey] працює тільки
   з однією властивістю.
*/
function removeKeys1(obj, keysToRemove) {
  let withRemoved = { ...obj }; // зробили копію спочатку
  for (let key of keysToRemove) {
    delete withRemoved[key]; // видаляємо кожен ключ keysToRemove-масиву
  }
  return withRemoved;
}
console.log(removeKeys1(obj, keysToRemove));

// solution via static Object class methods and .filter() with .includes() methods
/* Методом Object.entries отримуємо об"єкт з парами ключ-значення.
   А методом .filter() відфільтрувати тільки ті пари, які не включені
   в лист для видалення. І вже методом Object.fromEntries(...) 
   перебудовуєм у новий об"єкт з відфільтрованих пар.
*/
function removeKeys2(obj, keysToRemove) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToRemove.includes(key)),
  );
}
console.log(removeKeys2(obj, keysToRemove));
// ======================================================================
// ============================Task 05===================================
// UA: Створіть функцію з назвою petShelterManager, яка допомагає керувати
//     системою притулків для домашніх тварин. Функція отримує два параметри:
//     1.shelterData (масив об'єктів, що містять інформацію про домашніх тварин).
//     2.newData (об'єкт, що містить нові дані).
//     Масив shelterData містить об'єкти з наступною структурою, показаною
//     внизу. Ваша функція повинна виконувати наступне: Додати об'єкт newData
//     до масиву shelterData. Перед додаванням перевірте, чи всі обов'язкові
//     поля (id, name, type, age, isVaccinated, adoptionStatus) існують у
//     newData. Якщо поле відсутнє, не додавайте newData. Поверніть оновлений
//     масив shelterData.
// EN: Create a function named petShelterManager that helps manage a pet
//     shelter system. The function receives two parameters:
//     1. shelterData (an array of objects containing information about pets)
//     2. newData (an object containing new data)
//     Your function should do the following: The shelterData array contains
//     objects with the structure shown downwards. Add the newData object
//     to the shelterData array. Before adding, verify that all required
//     fields (id, name, type, age, isVaccinated, adoptionStatus) exist
//     in newData. If a field is missing, do not add the newData. Return
//     the updated shelterData array.

// let shelterDataStructure = {
//   id: "unique-id",
//   name: "pet-name",
//   type: "animal-type",
//   age: number,
//   isVaccinated: boolean,
//   adoptionStatus: "available" | "adopted",
// };

let currentShelter1 = [
  {
    id: "A1",
    name: "Buddy",
    type: "Dog",
    age: 3,
    isVaccinated: true,
    adoptionStatus: "available",
  },
  {
    id: "B2",
    name: "Whiskers",
    type: "Cat",
    age: 5,
    isVaccinated: false,
    adoptionStatus: "adopted",
  },
];

let newCreature1 = {
  id: "C3",
  name: "Rocky",
  type: "Hamster",
  age: 1,
  isVaccinated: true,
  adoptionStatus: "available",
};

let newCreature2 = {
  id: "P2",
  name: "Polly",
  type: "Parrot",
  age: 15,
  isVaccinated: true,
};

// solution via obj fields validation through for..of-loop, .includes() and spred operator
/* Якщо в основу поставити Object.keys(shelterDataStructure) === Object.keys(newData)
   то так ми порівнюємо два масиви безпосередньо. У JavaScript масиви порівнюються за
   посиланням, а не за вмістом, тому це завжди буде false (якщо вони не є буквально одним
   і тим самим об'єктом масиву). */
function petShelterManager1(shelterData, newData) {
  const requiredFields = [
    "id",
    "name",
    "type",
    "age",
    "isVaccinated",
    "adoptionStatus",
  ];
  let isValid = true;

  for (let field of requiredFields) {
    if (!Object.keys(newData).includes(field)) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    return [...shelterData, newData]; // додаємо newData в масив
  } else {
    return shelterData; // повертаєм незмінне якщо якесь поле відсутнє
  }
}
console.log(petShelterManager1(currentShelter1, newCreature1)); // [{…}, {…}, {…}]

// solution via for..in loop, .every() method and spread operator
function petShelterManager2(shelterData, newData) {
  const requiredFields = [
    "id",
    "name",
    "type",
    "age",
    "isVaccinated",
    "adoptionStatus",
  ];

  // перевірка чи кожне заявлене поле існує в об"єкті newData
  const isValid = requiredFields.every((field) => field in newData);
  // можна спробувати навіть так:
  // const isValid = requiredFields.every((field) => Object.hasOwn(newData, field));
  // бо метод Object.hasOwn (доданий в ES2022) є більш безпечною альтернативою до hasOwnProperty

  return isValid ? [...shelterData, newData] : shelterData;
}
console.log(petShelterManager2(currentShelter1, newCreature2)); // [{…}, {…}]

// solution via finding the missing keys, property length, .filter() and spred operator
function petShelterManager3(shelterData, newData) {
  const requiredFields = [
    "id",
    "name",
    "type",
    "age",
    "isVaccinated",
    "adoptionStatus",
  ];
  const missing = requiredFields.filter((field) => !(field in newData));

  if (missing.length === 0) {
    return [...shelterData, newData];
  } else {
    console.log("Missing fields:", missing);
    return shelterData;
  }
}
console.log(petShelterManager3(currentShelter1, newCreature1)); // [{…}, {…}, {…}]

// solution via
function petShelterManager4(shelterData, newData) {
  const requiredFields = [
    "id",
    "name",
    "type",
    "age",
    "isVaccinated",
    "adoptionStatus",
  ];
  const newDataKeys = new Set(Object.keys(newData));

  const isValid = requiredFields.every((field) => newDataKeys.has(field));

  return isValid ? [...shelterData, newData] : shelterData;
}
console.log(petShelterManager4(currentShelter1, newCreature2)); // [{…}, {…}]
// ======================================================================
// ============================Task 06===================================
// UA: Створіть функцію з назвою analyzeCarData, яка приймає JSON-об'єкт
//     як вхідні дані. Об'єкт містить дані про наявність автомобілів у
//     автосалоні, де: ключі – це моделі автомобілів; значення ​​– це ціни
//     Функція повинна повертати об'єкт, що містить:
//     - mostExpensive: назву найдорожчого автомобіля
//     - cheapest: назву найдешевшого автомобіля
//     - averagePrice: середню ціну всіх автомобілів
// EN: Create a function named analyzeCarData that takes a JSON object as
//     input. The object contains data about a car dealership's inventory
//     where: keys are the car models; values are the prices.
//     The function should return an object containing:
//     - mostExpensive: the name of the most expensive car
//     - cheapest: the name of the cheapest car
//     - averagePrice: the average price of all cars

let carData1 = {
  "Rolls-Royce Phantom": 460000,
  "Bentley Continental GT": 202500,
  "Mercedes-Maybach S680": 229000,
  "Aston Martin DB11": 205600,
  "Porsche 911 GT3": 169700,
};
let carData2 = {
  "Tesla Model 3": 46990,
  "Ford F-150": 33695,
  "BMW X5": 61600,
  "Toyota Camry": 25945,
  "Chevrolet Spark": 13600,
};

// solution via for..in-loop
function analyzeCarData1(carData) {
  let highestPrice = 0; // тож ціна будь-якого автомобіля буде більшою, ніж вона є тут (спочатку)
  let highestCarName = "";
  let lowestPrice = Infinity; // тож ціна будь-якого автомобіля буде нижчою, ніж вона є тут (спочатку)
  let lowestCarName = "";
  let totalPrice = 0;
  let carCount = 0;

  /* Виконаємо ітерацію по об'єкту carData циклом for...in для того, щоб отримати
     доступ як до ключів (моделей автомобілів), так і до їх значень (цін) безпосередньо
     з об'єкту.
  */
  for (const carModel in carData) {
    const price = carData[carModel];
    // отже, тепер маємо ключі (carModel - key) та значення (price - value)
    if (price > highestPrice) {
      highestPrice = price; // тут перевизначимо нову найбільшу ціну
      highestCarName = carModel;
    }
    if (price < lowestPrice) {
      lowestPrice = price; // тут перевизначимо нову найменшу ціну
      lowestCarName = carModel;
    }
    carCount++;
    totalPrice += price;
  }

  let averagePrice = totalPrice / carCount;

  return {
    mostExpensive: highestCarName,
    cheapest: lowestCarName,
    averagePrice: averagePrice,
  };
}
console.log(analyzeCarData1(carData1));

// solution via using Object.entries() and .reduce() method
function analyzeCarData2(carData) {
  const entries = Object.entries(carData);

  const { mostExpensive, cheapest, total } = entries.reduce(
    (acc, [model, price]) => {
      if (price > acc.maxPrice) {
        acc.maxPrice = price;
        acc.mostExpensive = model;
      }
      if (price < acc.minPrice) {
        acc.minPrice = price;
        acc.cheapest = model;
      }
      acc.total += price;
      return acc;
    },
    {
      maxPrice: -Infinity,
      minPrice: Infinity,
      mostExpensive: "",
      cheapest: "",
      total: 0,
    },
  );

  const averagePrice = total / entries.length;

  return { mostExpensive, cheapest, averagePrice };
}
console.log(analyzeCarData2(carData2));

// solution via using Math.max, Math.min, and Object.values()
function analyzeCarData3(carData) {
  const prices = Object.values(carData);
  const models = Object.keys(carData);

  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const mostExpensive = models[prices.indexOf(maxPrice)];
  const cheapest = models[prices.indexOf(minPrice)];
  const averagePrice = prices.reduce((a, b) => a + b, 0) / prices.length;

  return { mostExpensive, cheapest, averagePrice };
}
console.log(analyzeCarData3(carData2));
// ======================================================================
// ============================Task 07===================================
