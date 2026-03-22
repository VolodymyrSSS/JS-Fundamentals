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
// UA: Створіть функцію з назвою calculateRestaurantBill, яка приймає
//     JSON-об'єкт, що представляє замовлення в ресторані, як вхідні дані.
//     Кожен ключ в об'єкті є назвою страви, а кожне значення – іншим
//     об'єктом, що містить: ціну (число); кількість (число); isSpecialOffer
//     (булеве). Якщо останнє значення true, тоді на цю страву діє знижка 20%.
//     Функція повинна: ​​Розрахувати загальну суму замовлення; Застосувати
//     будь-які знижки за спеціальними пропозиціями. Повернений об'єкт містить:
//     1.totalBeforeDiscount; 2.totalDiscount; 3.finalTotal.
//     Усі значення округляються до 2 знаків після коми.
// EN: Create a function named calculateRestaurantBill that takes a JSON
//     object representing a restaurant order as input. Each key in the
//     object is a dish name, and each value is another object containing:
//     price (number); quantity (number); isSpecialOffer (boolean).
//     if true, there's a 20% discount on that dish. The function should:
//     Calculate the total bill; Apply any special offer discounts.
//     The returned object contains:
//     1.totalBeforeDiscount; 2.totalDiscount; 3.finalTotal.
//     All values are rounded to 2 decimal places.

let order1 = {
  "Sushi Platter": { price: 45.99, quantity: 2, isSpecialOffer: true },
  "Green Tea": { price: 3.5, quantity: 4, isSpecialOffer: false },
  "Miso Soup": { price: 2.99, quantity: 3, isSpecialOffer: true },
};
let order2 = {
  "Wagyu Steak": { price: 120.0, quantity: 1, isSpecialOffer: false },
  "Truffle Fries": { price: 18.5, quantity: 2, isSpecialOffer: true },
  "Vintage Wine": { price: 250.0, quantity: 1, isSpecialOffer: true },
};

// solution via for..in-loop and destructuring
function calculateRestaurantBill1(order) {
  let totalBeforeDiscount = 0;
  let totalDiscount = 0;

  for (let dishName in order) {
    /* let price = order[dishName].price;
       let quantity = order[dishName].quantity;
       let isSpecialOffer = order[dishName].isSpecialOffer; 
       або взяти через деструктиризацію */
    const { price, quantity, isSpecialOffer } = order[dishName];
    const dishTotal = price * quantity;

    totalBeforeDiscount += dishTotal;

    if (isSpecialOffer) {
      totalDiscount += dishTotal * 0.2; // робимо знижку тільки за це блюдо
    }
  }

  const finalTotal = totalBeforeDiscount - totalDiscount;

  return {
    totalBeforeDiscount: Number(totalBeforeDiscount.toFixed(2)),
    totalDiscount: Number(totalDiscount.toFixed(2)),
    finalTotal: Number(finalTotal.toFixed(2)),
  };
}
console.log(calculateRestaurantBill1(order1));

// solution via using Object.values() and .reduce(),
function calculateRestaurantBill2(order) {
  const { totalBeforeDiscount, totalDiscount } = Object.values(order).reduce(
    (acc, { price, quantity, isSpecialOffer }) => {
      const dishTotal = price * quantity;
      acc.totalBeforeDiscount += dishTotal;
      if (isSpecialOffer) {
        acc.totalDiscount += dishTotal * 0.2;
      }
      return acc;
    },
    { totalBeforeDiscount: 0, totalDiscount: 0 },
  );

  const finalTotal = totalBeforeDiscount - totalDiscount;

  return {
    totalBeforeDiscount: Number(totalBeforeDiscount.toFixed(2)),
    totalDiscount: Number(totalDiscount.toFixed(2)),
    finalTotal: Number(finalTotal.toFixed(2)),
  };
}
console.log(calculateRestaurantBill2(order2));

// або навіть ще простіше, ось так:
function calculateRestaurantBill3(order) {
  const { totalBeforeDiscount, totalDiscount } = Object.values(order).reduce(
    (acc, { price, quantity, isSpecialOffer }) => {
      const dishTotal = price * quantity;
      acc.totalBeforeDiscount += dishTotal;
      if (isSpecialOffer) acc.totalDiscount += dishTotal * 0.2;
      return acc;
    },
    { totalBeforeDiscount: 0, totalDiscount: 0 },
  );

  return {
    totalBeforeDiscount: +totalBeforeDiscount.toFixed(2),
    totalDiscount: +totalDiscount.toFixed(2),
    finalTotal: +(totalBeforeDiscount - totalDiscount).toFixed(2),
  };
}
console.log(calculateRestaurantBill3(order1));
// ======================================================================
// ============================Task 08===================================
// UA: Створіть функцію з назвою processCart, яка приймає рядок JSON, що
//     представляє кошик для покупок. Кошик містить масив товарів з назвами
//     та цінами. Ваше завдання:
//     1. Розібрати рядок JSON в об'єкт JavaScript,
//     2. Створити з нього ДВА окремі кошики. У другому кошику:
//     - Додати властивість 'discounted' до кожного товару, встановлену на false;
//     - Застосувати знижку 10% до всіх товарів, ціна яких перевищує 50;
//     - Встановити 'discounted' на true для товарів, на які надано знижку;
//     Повернути масив, що містить обидва кошики.
// EN: Create a function named processCart that takes a JSON string
//     representing a shopping cart. The cart contains an array of products
//     with names and prices. Your task is to: 1. Parse the JSON string into
//     a JavaScript object, 2. Create TWO separate carts from it. In the
//     second cart:
//     - Add a discounted property to each item set to false;
//     - Apply a 10% discount to all items that have price greater than 50;
//     - Set 'discounted' to true for items that received the discount;
//     Return an array containing both carts.

let jsonString1 = JSON.stringify([
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 60 },
]);
let jsonString2 = JSON.stringify([
  { name: "Book", price: 15 },
  { name: "Coffee Maker", price: 75 },
  { name: "Headphones", price: 45 },
  { name: "Smart Watch", price: 199 },
]);

// solution via JSON.parse(JSON.stringify(item))
function processCart1(jsonString) {
  const originalCart = JSON.parse(jsonString); // конвертуємо json-рядок y звичайний об'єкт

  // робимо незалежну копію originalCart
  const discauntedCart = JSON.parse(JSON.stringify(originalCart));

  // тепер застосуємо логіку знижки у відповідності до завдання
  for (let item of discauntedCart) {
    item.discounted = false;
    if (item.price > 50) {
      // Помноживши на 0.9, ми отримуємо знижку 10% (тобто залишаємо 90% від усієї ціни)
      item.price = Number((item.price * 0.9).toFixed(2));
      item.discounted = true;
    }
  }
  return [originalCart, discauntedCart];
}
console.log(processCart1(jsonString1)); // [Array(3), Array(3)]

// solution via .map() method and spread operator
function processCart2(jsonString) {
  const originalCart = JSON.parse(jsonString);

  const discountedCart = originalCart.map((item) => {
    const copy = { ...item, discounted: false };
    if (copy.price > 50) {
      copy.price = +(copy.price * 0.9).toFixed(2);
      copy.discounted = true;
    }
    return copy;
  });

  return [originalCart, discountedCart];
}
console.log(processCart2(jsonString2)); // [Array(4), Array(4)]

// solution via using .reduce() with destructuring
function processCart3(jsonString) {
  const originalCart = JSON.parse(jsonString);

  // Deep copy via JSON methods
  const discountedCart = JSON.parse(JSON.stringify(originalCart));

  // використовуємо метод .reduce() щоб побудувати новий масив об'єктів
  const updatedCart = discountedCart.reduce((acc, { name, price }) => {
    // Apply discount if needed
    let discounted = false;
    if (price > 50) {
      price = Number((price * 0.9).toFixed(2));
      discounted = true;
    }

    // Push new object using destructuring
    acc.push({ name, price, discounted });
    return acc;
  }, []);

  return [originalCart, updatedCart];
}
console.log(processCart3(jsonString2)); // [Array(4), Array(4)]
// ======================================================================
// ============================Task 09===================================
// UA: Створіть функцію з назвою updateBikeInventory, яка приймає один
//     аргумент – рядок JSON inventoryStr. Розберіть її в об'єкт, де
//     inventoryStr містить масив велосипедів. Кожен велосипед має бренд,
//     ціну та кількість. Якщо кількість велосипеда менша за 3, додайте або
//     оновіть ключову примітку зі значенням "Потрібне поповнення запасів"
//     для цього велосипеда. Поверніть оновлений об'єкт як рядок JSON.
// EN: Create a function named updateBikeInventory that takes one argument,
//     a JSON string inventoryStr. Parse it into an object, where inventoryStr
//     has a bikes array. Each bike has brand, price, and quantity. If a
//     bike's quantity is less than 3, add or update a key note with the
//     value "Restock needed" for that bike. Return the updated object as
//     a JSON string.

let inventory1 = JSON.stringify({
  bikes: [
    { brand: "Trek", price: 999.99, quantity: 2 },
    { brand: "Giant", price: 799.99, quantity: 5 },
    { brand: "Santa Cruz", price: 4999.99, quantity: 10 },
    { brand: "Yeti", price: 5999.99, quantity: 1 },
  ],
});
let inventory2 = JSON.stringify({
  bikes: [
    { brand: "Specialized", price: 1499.99, quantity: 1 },
    { brand: "Cannondale", price: 1299.99, quantity: 0 },
    { brand: "BMC", price: 2999.99, quantity: 2 },
  ],
});
let inventory3 = JSON.stringify({
  bikes: [
    { brand: "Cervélo", price: 12999.99, quantity: 1 },
    { brand: "Pinarello", price: 14999.99, quantity: 2 },
    { brand: "Colnago", price: 9999.99, quantity: 3 },
    { brand: "Bianchi", price: 7999.99, quantity: 0 },
  ],
});

// solution via JSON.parse(JSON.stringify(obj))
function updateBikeInventory1(inventoryStr) {
  // Step 1: парсимо щоб отримати об'єкт
  let currentInventory = JSON.parse(inventoryStr);

  // Step 2: Створюємо глибоку копію
  let updatedInventory = JSON.parse(JSON.stringify(currentInventory));

  // Step 3: Ітеруємо по масиву bikes
  for (let bike of updatedInventory.bikes) {
    if (bike.quantity < 3) {
      bike.note = "Restock needed"; // додаємо помітку
    }
  }
  // Step 4: повертаємо обновлений об'єкт як JSON-рядок
  return JSON.stringify(updatedInventory);
}
console.log(updateBikeInventory1(inventory1));

// solution via using .map() and the spread operator
function updateBikeInventory2(inventoryStr) {
  // Step 1: розпарсимо в об"єкт
  const currentInventory = JSON.parse(inventoryStr);

  // Step 2: Deep copy and update bikes using map
  const updatedInventory = {
    ...currentInventory, // зробимо поверхневу копію об"єкта
    bikes: currentInventory.bikes.map((bike) => {
      // Step 3: додамо логіку для перевірки кількості та додамо нову властивість (помітку)
      if (bike.quantity < 3) {
        return { ...bike, note: "Restock needed" }; // копія усіх властивостей та додавання нової
        /* можна записати і так:
           let keyNote = "note"; і потім в тілі 
           return { ...bike, [keyNote]: "Restock needed"}
           але не можна так {...bike, bike.note: "Restock needed"}; бо не можна додавати 
           таким чином нову властивість об"єкту бо так здійснюється доступ до значення 
           властивості об"єкту а не визначення нової властивості всередині самого об'єкту.
        */
      }
      return { ...bike }; // у разі якщо новий ключ не доданий повертаєм незмінений об'єкт
    }),
  };

  // Step 4: повертаємо незмінений об'єкт як JSON-рядок
  return JSON.stringify(updatedInventory);
}
console.log(updateBikeInventory2(inventory2));

// solution via .reduce(), spred operator and destructuring
function updateBikeInventory3(inventoryStr) {
  const currentInventory = JSON.parse(inventoryStr);

  // тут використовуємо reduce щоб перебудувати масив bikes
  const updatedBikes = Array.isArray(currentInventory.bikes)
    ? currentInventory.bikes.reduce((acc, { brand, price, quantity }) => {
        // визначення чи потрібно додавати помітку
        const note = quantity < 3 ? "Restock needed" : undefined;

        // Push new bike object using spread
        acc.push({
          brand,
          price,
          quantity,
          ...(note && { note }), // conditionally add note
        });

        return acc;
      }, [])
    : [];

  return JSON.stringify({ ...currentInventory, bikes: updatedBikes });
}
console.log(updateBikeInventory3(inventory3));
// ======================================================================
// ============================Task 10===================================
// UA: Створіть функцію з назвою analyzeSolarSystem, яка приймає один
//     аргумент – рядок JSON solarSystemData. Рядок JSON містить інформацію
//     про планети нашої Сонячної системи. Кожна планета має такі властивості:
//     1.name (рядок); 2.type (рядок: "rocky" або "gas"); 3.numberOfMoons
//     (число); 4.discoveredIn (число, рік); 5.surfaceTemperature (об'єкт
//     з мінімальним та максимальним значеннями в градусах Цельсія);
//     6.hasRings (логічне значення). Ваше завдання: Розібрати рядок JSON
//     в об'єкт. Для кожної планети: Додати класифікацію властивостей на основі
//     цих правил:
//     1.Якщо це кам'яниста планета та surfaceTemperature.max < 50°C: Потенційно
//     придатна для життя;
//     2.Якщо це кам'яниста планета та surfaceTemperature.max >= 50°C: Екстремальні
//     умови;
//     3.Якщо це газова планета та numberOfMoons > 10: Складна система;
//     4.Якщо це газова планета і numberOfMoons <= 10: Простий газовий гігант.
//     5. Додайте властивість ageOfDiscovery, яка обчислює, скільки років
//     тому було відкрито планету (з 2010 року).
//     6. Якщо планета має кільця та більше 5 супутників, додайте властивість
//     specialFeature зі значенням Ring System with Rich Moon Population;
//     7. Поверніть змінений об'єкт як рядок JSON.
// EN: Create a function named analyzeSolarSystem that takes one argument,
//     a JSON string solarSystemData. The JSON string contains information
//     about planets in our solar system. Each planet has the following
//     properties: 1.name (string); 2.type (string: "rocky" or "gas");
//     3.numberOfMoons (number); 4.discoveredIn (number, year);
//     5.surfaceTemperature (object with min and max in Celsius); 6.hasRings
//     (boolean). Your task: Parse the JSON string into an object. For each
//     planet: Add a property classification based on these rules:
//     1.If it's a rocky planet and surfaceTemperature.max < 50°C: - Potentially
//     Habitable; 2.If it's a rocky planet and surfaceTemperature.max >= 50°C:
//     - Extreme Environment. 3.If it's a gas planet and numberOfMoons > 10:
//     Complex System; 4.If it's a gas planet and numberOfMoons <= 10: Simple
//     Gas Giant. 5.Add a property ageOfDiscovery that calculates how many
//     years ago the planet was discovered (from the year 2010). 6.If the
//     planet has rings and more than 5 moons, add a property specialFeature
//     with value Ring System with Rich Moon Population. 7.Return the
//     modified object as a JSON string.

let data1 = JSON.stringify({
  planets: [
    {
      name: "Mercury",
      type: "rocky",
      numberOfMoons: 0,
      discoveredIn: -3000,
      surfaceTemperature: { min: -180, max: 430 },
      hasRings: false,
    },
  ],
});
let data2 = JSON.stringify({
  planets: [
    {
      name: "Neptune",
      type: "gas",
      numberOfMoons: 14,
      discoveredIn: 1846,
      surfaceTemperature: { min: -214, max: -200 },
      hasRings: true,
    },
    {
      name: "Venus",
      type: "rocky",
      numberOfMoons: 0,
      discoveredIn: -3000,
      surfaceTemperature: { min: 462, max: 462 },
      hasRings: false,
    },
  ],
});
let data3 = JSON.stringify({
  planets: [
    {
      name: "Kepler-186f",
      type: "rocky",
      numberOfMoons: 2,
      discoveredIn: 2014,
      surfaceTemperature: { min: -20, max: 40 },
      hasRings: false,
    },
  ],
});
let data4 = JSON.stringify({
  planets: [
    {
      name: "Jupiter",
      type: "gas",
      numberOfMoons: 79,
      discoveredIn: -3000,
      surfaceTemperature: { min: -110, max: -40 },
      hasRings: true,
    },
    {
      name: "Uranus",
      type: "gas",
      numberOfMoons: 27,
      discoveredIn: 1781,
      surfaceTemperature: { min: -224, max: -216 },
      hasRings: true,
    },
  ],
});
let data5 = JSON.stringify({
  planets: [
    {
      name: "Mars",
      type: "rocky",
      numberOfMoons: 2,
      discoveredIn: -3000,
      surfaceTemperature: { min: -140, max: 20 },
      hasRings: false,
    },
    {
      name: "Saturn",
      type: "gas",
      numberOfMoons: 82,
      discoveredIn: -3000,
      surfaceTemperature: { min: -178, max: -138 },
      hasRings: true,
    },
    {
      name: "Earth",
      type: "rocky",
      numberOfMoons: 1,
      discoveredIn: -3000,
      surfaceTemperature: { min: -88, max: 58 },
      hasRings: false,
    },
  ],
});

// solution via JSON.parse(JSON.stringify(obj))
function analyzeSolarSystem1(solarSystemData) {
  // отримаєм об'єкт з json-рядка
  const planetsData = JSON.parse(solarSystemData);

  // створимо глибоку копію
  const updatedPlanetsData = JSON.parse(JSON.stringify(planetsData));

  // проітеруємо по масиву planets
  for (let planet of updatedPlanetsData.planets) {
    // логіка для підзадач 1 & 2: Rocky planets
    if (planet.type === "rocky") {
      if (planet.surfaceTemperature.max < 50) {
        planet.classification = "Potentially Habitable";
      } else {
        planet.classification = "Extreme Environment";
      }
    }
    // логіка для підзадач 3 & 4: Gas planets
    else if (planet.type === "gas") {
      if (planet.numberOfMoons > 10) {
        planet.classification = "Complex System";
      } else {
        planet.classification = "Simple Gas Giant";
      }
    }

    // логіка для підзадачі 5: Age of discovery (від 2010 року)
    planet.ageOfDiscovery = 2010 - planet.discoveredIn;

    // логіка для підзадачі 6: Special feature
    if (planet.hasRings && planet.numberOfMoons > 5) {
      planet.specialFeature = "Ring System with Rich Moon Population";
    }
  }

  // повертаєм обновлений обєкт як JSON-рядок
  return JSON.stringify(updatedPlanetsData);
}
console.log(analyzeSolarSystem1(data1));

// solution via using a functional style with .map() and the spread operator
function analyzeSolarSystem2(solarSystemData) {
  // Step 1: Parse JSON string into object
  const planetsData = JSON.parse(solarSystemData);

  // Step 2: Transform planets array using map
  const updatedPlanets = planetsData.planets.map((planet) => {
    // Step 3: Determine classification
    let classification;
    if (planet.type === "rocky") {
      classification =
        planet.surfaceTemperature.max < 50
          ? "Potentially Habitable"
          : "Extreme Environment";
    } else if (planet.type === "gas") {
      classification =
        planet.numberOfMoons > 10 ? "Complex System" : "Simple Gas Giant";
    }

    // Step 4: Calculate age of discovery
    const ageOfDiscovery = 2010 - planet.discoveredIn;

    // Step 5: Add special feature if conditions met
    const specialFeature =
      planet.hasRings && planet.numberOfMoons > 5
        ? "Ring System with Rich Moon Population"
        : undefined;

    // Step 6: Return new planet object using spread
    return {
      ...planet,
      classification,
      ageOfDiscovery,
      ...(specialFeature && { specialFeature }),
    };
  });

  // Step 7: Return updated object as JSON string
  return JSON.stringify({ ...planetsData, planets: updatedPlanets });
}
console.log(analyzeSolarSystem2(data2));
console.log(analyzeSolarSystem2(data3));

// solution via
function analyzeSolarSystem3(solarSystemData) {
  // Step 1: Parse JSON string into object
  const planetsData = JSON.parse(solarSystemData);

  // Step 2: Use reduce to rebuild the planets array
  const updatedPlanets = Array.isArray(planetsData.planets)
    ? planetsData.planets.reduce((acc, planet) => {
        // Step 3: Determine classification
        let classification;
        if (planet.type === "rocky") {
          classification =
            planet.surfaceTemperature.max < 50
              ? "Potentially Habitable"
              : "Extreme Environment";
        } else if (planet.type === "gas") {
          classification =
            planet.numberOfMoons > 10 ? "Complex System" : "Simple Gas Giant";
        }

        // Step 4: Calculate age of discovery
        const ageOfDiscovery = 2010 - planet.discoveredIn;

        // Step 5: Add special feature if conditions met
        const specialFeature =
          planet.hasRings && planet.numberOfMoons > 5
            ? "Ring System with Rich Moon Population"
            : undefined;

        // Step 6: Push new planet object using spread
        acc.push({
          ...planet,
          classification,
          ageOfDiscovery,
          ...(specialFeature && { specialFeature }),
        });

        return acc;
      }, [])
    : [];

  // Step 7: Return updated object as JSON string
  return JSON.stringify({ ...planetsData, planets: updatedPlanets });
}
console.log(analyzeSolarSystem3(data4));
console.log(analyzeSolarSystem3(data5));
// ======================================================================
// ============================Task 11===================================
// UA: Створіть функцію під назвою uniqueElements, яка приймає масив як
//     аргумент. Функція повинна повертати новий масив, що містить лише
//     унікальні елементи з вхідного масиву.
// EN: Create a function called uniqueElements that takes an array as an
//     argument. The function should return a new array containing only
//     the unique elements from the input array.

let myArr1 = [null, undefined, "", null, 0, false, undefined, "", 0];
let myArr2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 3, name: "Bob" },
];
let myArr3 = [true, false, true, true, false, true];

// solution via Set and Array.from()
/* Як відомо, Set не є масивом, а множина значень, тому не можна  
    безпосередньо використовувати методи масиву для нього. Щоб конвертувати 
    назад у масив використовують метод Array.from чи спред оператор.
    Також. Коли використовуємо Set (або .includes), JavaScript перевіряє 
    рівність посилань, а не глибоку рівність.*/
function uniqueElements1(arr) {
  return Array.from(new Set(arr));
}
// Навіть якщо обидва { id: 1, name: "John" } виглядають однаково, це два
// різні екземпляри об'єктів у пам'яті. Тому Set розглядає їх як окремі значення.
console.log(uniqueElements1(myArr2));

// solution via spred operator
function uniqueElements2(arr) {
  return [...new Set(arr)];
}
console.log(uniqueElements2(myArr1));

// solution via for-loop and .includes() method
function uniqueElements3(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(uniqueElements3(myArr3));
// ======================================================================
// ============================Task 12===================================
// EN: Create a function called addUniqueElements that takes two parameters:
//     an array and another array. The function should convert the first
//     array to a Set, and add all elements from the second array to the Set,
//     but only if they don't already exist in the Set. Finally convert the
//     set to an array and return it.

let arrNums1 = [1, 2, 3];
let arrNums2 = [4, 5, 2, 1, 6, 7];
let arrStr1 = ["apple", "banana"];
let arrStr2 = ["cherry", "apple", "date", "banana", "elderberry"];
let arrFalsy1 = [null, undefined];
let arrFalsy2 = [null, "hello", undefined, null, "world"];

// solution via Set, .forEach(), mySet.add(el) and spred operator
/* У цьому завданні потрібно перебрати весь масив array2 та додати кожен 
елемент до набору (Set). Крім того, метод Set.add() автоматично ігнорує
дублікати і тут не потрібна робити якоїсь додаткової перевірки на наявність
елементу в першому масиві. */
function addUniqueElements1(array1, array2) {
  let result = new Set(array1); // конвертуєм в колекцію Set та забезпеч унікальність

  //   array2.forEach((el) => result.add(el)); // ітеруємо по масиву та додаєм ел в перший, ігноруємо коли є ел
  // можна проітеруватись використавши for..of - це є навіть пріоритетно коли не потрібно індекс
  for (let el of array2) {
    result.add(el);
  }
  // можна проітерувати подібно до forEach, але використати .map() (з сайд ефектом), типу
  // array2.map(el => result.add(el));

  return [...result]; // конвертуємо колекцію Set в масив
}
console.log(addUniqueElements1(arrNums1, arrNums2));

// solution via Set, .concat() and spred operator
/* Можна також спочатку об'єднати масиви, а потім видалити дублікати, ось так:*/
function addUniqueElements2(array1, array2) {
  return [...new Set(array1.concat(array2))];
}
console.log(addUniqueElements2(arrStr1, arrStr2));

// solution via Set, .concat() and spred operator
/*замість додавання по одному, можна спочатку об'єднати обидва
масиви, а потім видалити дублікати, ось так: */
function addUniqueElements3(array1, array2) {
  return [...new Set([...array1, ...array2])];
}
console.log(addUniqueElements3(arrStr1, arrStr2));

// solution via Set and .reduce() method and spred operator
function addUniqueElements4(array1, array2) {
  let result = new Set(array1);
  // тепер зведем усі елементи другого масиву в Set
  array2.reduce((set, el) => set.add(el), result);
  return [...result]; // конвертуєм назад в масив
}
console.log(addUniqueElements4(arrFalsy1, arrFalsy2));
// ======================================================================
// ============================Task 13===================================
// UA: Створіть функцію під назвою removeMultiples, яка приймає два параметри:
//     масив чисел та число n. Функція повинна перетворити масив на множину
//     та видалити всі числа, кратні n, з множини (включаючи саме n, якщо воно
//     є в множині). Нарешті, перетворити множину на масив та повернути його.
//     Кратні числа – це числа, які ви отримуєте, коли множите задане число
//     (n) на всі цілі числа (1, 2, 3 тощо). Наприклад, якщо n = 3: то кратні
//     числу 3 будуть: 3, 6, 9, 12, 15, 18, 21, 24 і т.д.
// EN: Create a function called removeMultiples that takes two parameters:
//     an array of numbers and a number n. The function should convert the
//     array to a set, and remove all multiples of n from the Set (including
//     n itself if it's in the Set). Finally convert the set to an array and
//     return it. Multiples are the numbers you get when you multiply a
//     given number (n) by all whole numbers (1, 2, 3, etc.). For example,
//     if n = 3: The multiples of 3 are: 3, 6, 9, 12, 15, 18, 21, 24, and so on...

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n1 = 2;
let array2 = [15, 30, 45, 60, 75, 90, 17, 23, 8, 12];
let n2 = 15;
let array3 = [100, 200, 300, 400, 500, 101, 201, 301, 401, 501];
let n3 = 100;

// solution via Set, delete() for..of-loop and spred operator
/* Для вирішення цієї задачі потрібно спочатку конвертувати масив на множину
    Set, яка одночасно забезпечить унікальність елементів. Потім проітерувати по
    елементам цієї колекції Set та видалити елементи методом .delete(value) якщо
    елемент кратний числу n (i.e. value % n === 0). І вже потім конвертувати
    множину Set назад в масив. Нагадаємо, що метод .delete(value) повертає true
    якщо значення було знайдено та видалено, бо інакше - false. Але в цій задачі
    нам не потрібно повертати видалене значення, нам важливо видалити сам елемент.
*/
function removeMultiples1(arr, n) {
  let mySet = new Set(arr);

  for (let value of mySet) {
    if (value % n === 0) {
      mySet.delete(value);
    }
  }

  return [...mySet];
}
console.log(removeMultiples1(array1, n1));

// solution via Set, .filter() and delete() methods
/* Тут ми можемо відфільтрувати спочатку масив напряму і вже потім
    огорнути в Set з одночасною конвертацією в масив. Методом .filter()
    фільтруємо/видаляємо тільки ті значення, які не є кратні заданому n.
*/
function removeMultiples2(array, n) {
  return [...new Set(array.filter((value) => value % n !== 0))];
}
console.log(removeMultiples2(array2, n2));

// solution via combines Set with functional filtering
function removeMultiples3(array, n) {
  let mySet = new Set(array);

  // тут конвертуємо Set в масив, потім відфільтровуєм кратні n
  let filtered = [...mySet].filter((value) => value % n !== 0);

  return filtered;
}
console.log(removeMultiples3(array3, n3));
// ======================================================================
// ============================Task 14===================================
// UA: Створіть функцію symmetricDifference, яка приймає два масиви як
//     параметри. Функція повинна перетворити кожен масив на множину зачень та
//     повернути новий набір (Set), що містить елементи, що не знаходяться
//     в жодному з двох наборів (Set). Використайте метод has() для
//     перевірки існування елементів в кожній множині. Нарешті, перетворіть
//     результуючий набір на масив та поверніть його.
// EN: Create a function called symmetricDifference that takes two arrays
//     as parameters. The function should convert the arrays to sets, and
//     return a new Set containing elements that are in either of the two
//     Sets, but not in both. Use the has() method to check for element
//     existence. Finally convert the set to an array and return it.

let myNums1 = [100, 200, 300, 400];
let myNums2 = [300, 400, 500, 600];

// solution via Set, for..of-loop, .has() and spred operator
function symmetricDifference1(arr1, arr2) {
  let set1 = new Set(arr1); // конвертуємо у колекцію Set
  let set2 = new Set(arr2); // конвертуємо у колекцію Set
  let difference = new Set(); // створюємо нову пусту колекцію Set
  // перевіряємо наявність елементів в колекції set1 але не в set2
  for (let value of set1) {
    if (!set2.has(value)) {
      difference.add(value);
    }
  }
  // перевіряємо наявність елементів в колекції set2 але не в set1
  for (let value of set2) {
    if (!set1.has(value)) {
      difference.add(value);
    }
  }
  // можна перевірити значення одразу в двох колекціях одночасно
  //   for (let value of [...set1, ...set2]) {
  //     if (!(set1.has(value) && set2.has(value))) {
  //       difference.add(value);
  //     }
  //   }

  return [...difference]; // конвертуємо назад у масив
}
console.log(symmetricDifference1(myNums1, myNums2));

// solution via arrays methods: .filter() and .concat()
function symmetricDifference2(arr1, arr2) {
  return arr1
    .filter((el) => !arr2.includes(el))
    .concat(arr2.filter((el) => !arr1.includes(el)));
}
console.log(symmetricDifference2(arrNums1, arrNums2));
// ======================================================================
// ============================Task 15===================================
// UA: Створіть функцію з назвою partyPlanner, яка приймає масив підтвердження
//     відповідей (чи RSVP) що складається з рядків імен. Деякі люди могли
//     надіслати RSVP кілька разів через якесь захоплення. Функція повинна
//     повертати об'єкт зі значенням:
//     -uniqueGuests: Дійсну кількість гостей, які прийдуть;
//     -hasDuplicates: Логічне значення, що вказує, чи хтось RSVP більше одного разу;
//     -isEmpty: Логічне значення, що вказує, чи жодної RSVP не отримано;
//     -guestList: Список імен гостей (опційно).
// EN: Create a function named partyPlanner that takes an array of RSVPs
//     (strings of names). Some people may have RSVP'd multiple times out
//     of excitement. The function should return an object with:
//     uniqueGuests: The number of unique guests attending;
//     hasDuplicates: A boolean indicating if anyone RSVP'd more than once;
//     isEmpty: A boolean indicating if no one RSVP'd;
//     guestList: List of guest names (optional).

let rsvps1 = ["John", "Mary", "John", "Peter"];
let rsvps2 = ["Alice", "Bob", "Charlie", "David", "Eve"];
let rsvps3 = ["Beyoncé", "Beyoncé", "Beyoncé", "Jay-Z", "Jay-Z"];

// solution via
function partyPlanner1(rsvps) {
  let guestSet = new Set(rsvps); // автоматично видаляє дублікати і створює колекцію унікальних значень

  let guestList = [...guestSet]; // якщо хочемо отримати імена гостей

  // отримання дійсної кількості гостей
  let uniqueGuests = guestSet.size;

  // перевірка на наявність дублікатів
  let hasDuplicates = uniqueGuests !== rsvps.length;
  //   або так if (uniqueGuests === rsvps.length) {
  //     hasDuplicates = false;
  //   } else {
  //     hasDuplicates = true;
  //   }

  // перевірка на відсутність RSVP
  let isEmpty = guestSet.size === 0;

  return {
    uniqueGuests,
    hasDuplicates,
    isEmpty,
    guestList,
  };
}
console.log(partyPlanner1(rsvps1));
console.log(partyPlanner1(rsvps2));

// solution via .map() with option to see how many times each person RSVP’d
function partyPlanner2(rsvps) {
  let counts = {};
  let hasDuplicates = false;

  //  підрахунок кількості RSVPs з іменами та визначення наявності дублікатів
  for (let name of rsvps) {
    counts[name] = (counts[name] || 0) + 1;
    if (counts[name] > 1) {
      hasDuplicates = true;
    }
  }
  // Метод Object.keys(counts) дає перелік ключів\імен з автоматичним видаленням дублікатів
  let uniqueGuests = Object.keys(counts).length; //  кількість дійсних гостей (без дублікатів)
  let isEmpty = uniqueGuests === 0;
  let guestList = Object.keys(counts); // перелік імен гостей (ключі)

  return {
    uniqueGuests,
    hasDuplicates,
    isEmpty,
    guestList,
    counts, // опційно: показує скільки разів кожний гость RSVP
  };
}
console.log(partyPlanner2(rsvps3));
// ======================================================================
// ============================Task 16===================================
// UA: Створіть функцію processStudentGroups, яка приймає масив імен
//     студентів як аргумент. Функція повинна:
//     1. Створити множину (Set) з вхідного масиву для отримання унікальних
//     імен студентів;
//     2. Видалити будь-якого студента, ім'я якого починається з літери «Z»
//     (без урахування регістру);
//     3. Додати «John Doe» до множини, якщо його ще немає;
//     4. Повернути об'єкт з такими властивостями:
//      - uniqueCount: Кількість унікальних студентів;
//      - hasJohnDoe: Логічне значення, що вказує, чи є «John Doe» в множині;
//      - studentsArray: Масив остаточного набору імен студентів.
// EN: Create a function called processStudentGroups that takes an array
//     of student names as an argument. The function should: Create a Set
//     from the input array to get unique student names Remove any student
//     whose name starts with 'Z' (case insensitive). Add 'John Doe' to the
//     Set if not already present. Return an object with the following
//     properties:
//     uniqueCount: The number of unique students;
//     hasJohnDoe: A boolean indicating whether 'John Doe' is in the Set;
//     studentsArray: An array of the final set of student names;

let studentsGroup1 = ["Alice", "Bob", "alice", "Zack", "Charlie"];
let studentsGroup2 = [
  "John Doe",
  "ZARA",
  "Emma",
  "zeus",
  "John Doe",
  "Emma",
  "Bonny",
];
function processStudentGroups1(students) {
  let inputSet = new Set(students); // створюємо колекцію Set

  // видаляємо студента ім'я якого починається на "Z" з приведенням в нижній регістр
  for (let name of inputSet) {
    if (name[0].toLowerCase() === "z") {
      inputSet.delete(name);
    }
  }

  // додаєм "John Doe" якщо його ще немає
  inputSet.add("John Doe");

  // сформуємо значення для додавання їх до властивостей об'єктy
  let studentsArray = [...inputSet]; // імена студентів
  let uniqueCount = inputSet.size; // дійсна кількість студентів
  let hasJohnDoe = inputSet.has("John Doe"); // перевірка на наявність "John Doe"

  // повертаємо результуючий об'єкт
  return {
    uniqueCount,
    hasJohnDoe,
    studentsArray,
  };
}
console.log(processStudentGroups1(studentsGroup2));

// solution via array-based approach where it can be normalized
// to the version where "Alice" and "alice" are treated as the same student
function processStudentGroups(students) {
  // Step 1: Normalize to lowercase for uniqueness
  let normalizedSet = new Set(students.map((name) => name.toLowerCase()));

  // Step 2: Remove names starting with 'z'
  for (let name of normalizedSet) {
    if (name[0] === "z") {
      normalizedSet.delete(name);
    }
  }

  // Step 3: Add 'john doe' if not already present
  normalizedSet.add("john doe");

  // Step 4: Build final array with capitalized names
  let studentsArray = [...normalizedSet].map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1),
  );
  let uniqueCount = studentsArray.length;
  let hasJohnDoe =
    studentsArray.includes("John doe") || studentsArray.includes("John Doe");

  return {
    uniqueCount,
    hasJohnDoe,
    studentsArray,
  };
}
console.log(processStudentGroups(studentsGroup1));
// ======================================================================
// ============================Task 17===================================
// UA: Створіть функцію setUnion, яка приймає два масиви як параметри.
//     Функція повинна перетворити ці масиви на множини та створити новий
//     набір (Set), який є об'єднанням двох вхідних наборів (Set). Нарешті,
//     перетворите набір на масив та поверніть його. Не використовуйте
//     оператор розгортання у вашому рішенні.
// EN: Create a function called setUnion that takes two arrays as parameters.
//     The function should convert that arrays to sets and create a new Set
//     that is the union of the two input Sets. Finally convert the set to an
//     array and return it. Do not use the spread operator in your solution.

// solution via Set and operator spread
function setUnion1(arr1, arr2) {
  const set1 = new Set(arr1); // конвертуємо на множину значень
  const set2 = new Set(arr2); // конвертуємо на множину значень

  // повертає нову множину що містить усі елементи з двох вхідних множин без дублікатів
  function union(set1, set2) {
    return new Set([...set1, ...set2]);
  }
  const unionSet = union(set1, set2); // викликаєм функц для отрим нової множини

  return [...unionSet]; // конвертуємо назад у масив
}
console.log(setUnion1(arrNums1, arrNums2)); // [1, 2, 3, 4, 5, 6, 7]

// solution via Set, for..of-loop and Array.from()
function setUnion2(arr1, arr2) {
  const set1 = new Set(arr1); // конвертуємо на множину значень
  const set2 = new Set(arr2); // конвертуємо на множину значень

  // створюєм базу об"єднання на основі копії першої множини
  const unionSet = new Set(set1);

  // перебераємо другу множину вручну та додаєм до бази
  for (let item of set2) {
    unionSet.add(item);
  }
  // або можна так
  // set2.forEach((value) => unionSet.add(value));

  return Array.from(unionSet); // конвертуємо назад у масив
}
console.log(setUnion2(arrStr1, arrStr2)); // ['apple', 'banana', 'cherry', 'date', 'elderberry']

// solution via .concat() and Array.from
function setUnion3(arr1, arr2) {
  // спочатку додаємо масиви методом сoncat і потім створюєм множину Set
  const unionSet = new Set(arr1.concat(arr2));

  // Convert back to array
  return Array.from(unionSet);
}
console.log(setUnion3(arrFalsy1, arrFalsy2)); // [null, undefined, 'hello', 'world']
// ======================================================================
// ============================Task 18===================================
// UA: Створіть функцію setIntersection, яка приймає масиви як параметри.
//     Функція повинна конвертувати ці масиви в множини (Set). Створіть
//     множину (Set), яка є перетином двох вхідних множин (Set), конвертуйте
//     її в масив і поверніть масив. Не використовуйте оператор розгортання
//     (spread) у рішенні.
// EN: Create a function called setIntersection that takes arrays as parameters.
//     The function should convert that arrays to Sets. Create a Set that
//     is the intersection of the two input Sets, convert to an array and
//     return the array. Do not use the spread operator in your solution.

// solution via Set and for..of-loop
function setIntersection1(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersectionSet = new Set();

  for (let item of set1) {
    // можна і так проітерувати: set1.forEach(item => {
    if (set2.has(item)) {
      intersectionSet.add(item);
    }
  }

  return Array.from(intersectionSet);
}
console.log(setIntersection1(arrNums1, arrNums2)); // [1, 2]

// solution via .filter()
function setIntersection2(arr1, arr2) {
  const set2 = new Set(arr2);

  // берем тільки елементи масиву з arr1 які також є і в множині set2
  const intersectionArray = arr1.filter((item) => set2.has(item));

  // конвертуємо в масив із одночасним запереченням дублікатів
  return Array.from(new Set(intersectionArray));
}
console.log(setIntersection2(arrStr1, arrStr2)); // ['apple', 'banana']

// solution via .reduce()
function setIntersection3(arr1, arr2) {
  const set2 = new Set(arr2);

  // зводимо arr1 в масив із спільними елементами
  const intersectionArray = arr1.reduce((acc, item) => {
    if (set2.has(item) && !acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return intersectionArray;
}
console.log(setIntersection3(arrFalsy1, arrFalsy2)); // [null, undefined]
// ======================================================================
// ============================Task 19===================================
// UA: Створіть функцію setDifference, яка приймає два масиви як параметри:
//     arr1 та arr2. Функція повинна конвертувати масиви в множини. Створіть
//     новий набір (Set), який містить елементи, що знаходяться в множині
//     set1, але не в множині set2, конвертуйте його в масив і поверніть його.
// EN: Create a function called setDifference that takes two arrays as
//     parameters: arr1 and arr2. The function should convert the arrays to
//     sets. Create a new Set that contains elements that are in set1 but
//     not in set2, convert it an array and return it.

const arrFig1 = [10, 20, 30, 40, 50];
const arrFig2 = [30, 40, 50, 60, 70];

// solution via Set and .filter()
function setDifference1(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const differenceSet = new Set([...set1].filter((item) => !set2.has(item)));

  return Array.from(differenceSet);
}
console.log(setDifference1(arrFig1, arrFig2)); // [10, 20]

// solution via Set and for..of-loop
function setDifference2(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const differenceSet = new Set();

  for (let item of set1) {
    if (!set2.has(item)) {
      differenceSet.add(item);
    }
  }

  return Array.from(differenceSet);
}
console.log(setDifference2(arrNums1, arrNums2)); // [3]

// solution via .reduce()
function setDifference3(arr1, arr2) {
  const set2 = new Set(arr2);

  // Звести масив arr1 в масив елементів яких не має в множині set2
  const differenceArray = arr1.reduce((acc, item) => {
    if (!set2.has(item) && !acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return differenceArray;
}
console.log(setDifference3(arrFig1, arrFig2)); // [10, 20]
// ======================================================================
// ============================Task 20===================================
// UA: Створіть функцію efficientSymmetricDifference, яка приймає два масиви
//     як параметри: arr1 та arr2. Функція повинна перетворити масиви на
//     множини. Створіть нову множину (Set), яка є симетричною різницею двох
//     вхідних множин (Set), перетворите її на масив (Target) та поверніть масив.
// EN: Create a function called efficientSymmetricDifference that takes
//     two arrays as parameters: arr1 and arr2. The function should convert
//     the arrays to sets. Create a new Set that is the symmetric difference
//     of the two input Sets, convert it to array and return the array.

// solution via for..of-loop
/* Нагадаємо, що симетрична різниця двох множин A та B — це нова множина,
   яка містить елементи, що знаходяться або в A, або в B, але не в обох.
   Її можна розглядати як об'єднання A - B та B - A.
*/
function efficientSymmetricDifference1(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const symDiff = new Set();

  // елементи в множині set1 але не в множині set2
  for (let item of set1) {
    if (!set2.has(item)) {
      symDiff.add(item);
    }
  }

  // елементи в множині set2 але не в множині set1
  for (let item of set2) {
    if (!set1.has(item)) {
      symDiff.add(item);
    }
  }

  return Array.from(symDiff);
}
console.log(efficientSymmetricDifference1(arrFig1, arrFig2)); // [10, 20, 60, 70]

// solution via .filter()
function efficientSymmetricDifference2(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // елементи в масиві arr1 але не в множині set2
  const diff1 = arr1.filter((item) => !set2.has(item));

  // елементи в масиві arr2 але не в множині set1
  const diff2 = arr2.filter((item) => !set1.has(item));

  // Обєднання/комбінація усіх вирізнених елементів в єдину множину Set (із видален дублікатів)
  const symDiff = new Set([...diff1, ...diff2]);

  return Array.from(symDiff);
}
console.log(efficientSymmetricDifference2(arrFig1, arrFig2)); // [10, 20, 60, 70]

// solution via reduce
function efficientSymmetricDifference3(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Start with empty accumulator
  const symDiff = arr1.reduce((acc, item) => {
    if (!set2.has(item) && !acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  // Process arr2 as well
  arr2.reduce((acc, item) => {
    if (!set1.has(item) && !acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, symDiff);

  return symDiff;
}
console.log(efficientSymmetricDifference3(arrFig1, arrFig2)); // [10, 20, 60, 70]
// ======================================================================
// ============================Task 21===================================
// UA: Створіть функцію analyzeSetRelations, яка приймає два масиви як
//     параметри: arr1 та arr2. Функція повинна перетворити масиви на
//     множини та повернути об'єкт з такими властивостями:
//     -isSubset: логічне значення, що вказує, чи є set1 підмножиною set2
//     -isSuperset: логічне значення, що вказує, чи є set1 надмножиною set2
//     -isEqual: логічне значення, що вказує, чи мають set1 та set2 абсолютно
//      однакові елементи.
// EN: Create a function called analyzeSetRelations that takes two arrays
//     as parameters: arr1 and arr2. The function should convert the arrays
//     to sets and return an object with the following properties:
//     -isSubset: a boolean indicating whether set1 is a subset of set2;
//     -isSuperset: a boolean indicating whether set1 is a superset of set2;
//     -isEqual: a boolean indicating whether set1 and set2 have exactly
//     the same elements.

const a1 = [1, 2, 3];
const a2 = [1, 2, 3, 4];

// solution via Set, .every() and .has()
function analyzeSetRelations1(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  let isSubset = [...set1].every((item) => set2.has(item));
  let isSuperset = [...set2].every((item) => set1.has(item));
  let isEqual = set1.size === set2.size && isSubset;

  return {
    isSubset: isSubset,
    isSuperset: isSuperset,
    isEqual: isEqual,
  };
}
console.log(analyzeSetRelations1(a1, a2));

// solution via for..of-loop
function analyzeSetRelations2(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  let isSubset = true;
  for (let item of set1) {
    if (!set2.has(item)) {
      isSubset = false;
      break;
    }
  }

  let isSuperset = true;
  for (let item of set2) {
    if (!set1.has(item)) {
      isSuperset = false;
      break;
    }
  }

  let isEqual = set1.size === set2.size && isSubset;

  return { isSubset, isSuperset, isEqual };
}
console.log(analyzeSetRelations2(arrFig1, arrFig2));
// ======================================================================
// ============================Task 22===================================
// UA: Створіть функцію analyzeFriendGroups, яка приймає два масиви імен
//     (що представляють дві різні групи друзів) як параметри. Функція
//     повинна перетворити масиви на множини та повернути об'єкт, що містить
//     наступну інформацію (у такому порядку):
//     - mutualFriends: кількість людей, які входять до обох груп друзів;
//     - exclusiveToFirst: кількість людей, які входять лише до першої групи;
//     - exclusiveToSecond: кількість людей, які входять лише до другої групи;
//     - potentialConnections: кількість унікальних з'єднань, які можуть бути
//       встановлені між виключними членами кожної групи;
//     - isSubset: логічне значення, яке вказує, чи одна група повністю міститься
//       в іншій.
// EN: Create a function named analyzeFriendGroups that takes two arrays of
//     names (representing two different friend groups) as parameters. The
//     function should convert the arrays to sets and returns an object
//     containing the following information (in this exact order):
//     - mutualFriends: The number of people who are in both friend groups;
//     - exclusiveToFirst: The number of people who are only in the first group;
//     - exclusiveToSecond: The number of people who are only in the second group;
//     - potentialConnections: The number of unique connections that could be
//       made between exclusive members of each group;
//     -isSubset: Boolean indicating if one group is entirely contained within
//       the other.

const ar1 = ["Sam", "Alex", "Jordan", "Taylor"];
const ar2 = ["Alex", "Jordan", "Taylor", "Morgan"];

// solution via for..of-loop
function analyzeFriendGroups(group1, group2) {
  let set1 = new Set(group1);
  let set2 = new Set(group2);

  // визначення спільних друзів
  let mutualFriends = new Set();
  for (let item of set1) {
    if (set2.has(item)) {
      mutualFriends.add(item);
    }
  }
  // визначення учасників виключно своїх груп
  let exclusiveToFirst = [...set1].filter((item) => !set2.has(item));
  let exclusiveToSecond = [...set2].filter((item) => !set1.has(item));

  // визначення потенційних зв"язків = можлива кількість потенційних зв"язків між участниками своїх груп
  const potentialConnections =
    exclusiveToFirst.length * exclusiveToSecond.length;

  // перевірка на існування однієї підгрупи в іншій
  let isSubset =
    [...set1].every((item) => set2.has(item)) ||
    [...set2].every((item) => set1.has(item));

  return {
    mutualFriends: mutualFriends.size,
    exclusiveToFirst: exclusiveToFirst.length,
    exclusiveToSecond: exclusiveToSecond.length,
    potentialConnections: potentialConnections,
    isSubset: isSubset,
  };
}
console.log(analyzeFriendGroups(ar1, ar2));
// ======================================================================
// ============================Task 23===================================
// EN: You will be creating a library management system. Start by initializing
//     the system with the provided data and creating the main function
//     structure. You will be creating a library management system. Start
//     by initializing the system with the provided data and creating the
//     main function structure. We have a variable called libraryData with
//     initial data shown downwards. Create a function called manageLibrary
//     that takes two parameters:
//     - actions (array of strings);
//     - data (array of objects);
//     The function should process each action in the actions array in sequence,
//     using the corresponding data object from the data array at the same index.
//     For example, the action at actions[i] uses the data at data[i]. Create
//     a loop that goes through each action in the actions array, then inside
//     the loop:
//     1.Create an empty result array that will hold all of the results;
//     2.Create a switch statement that will handle different cases;
//     3.Add a case printBooks inside the switch statement that will add the
//       current books inside the libraryData to the results array;
//     4.Add a case printReaders inside the switch statement that will add
//       the current readers inside the libraryData to the results array;
//     5.Add a default case that adds an “Invalid action!” to the results array;

// Initial library data
let libraryData = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: "",
    },
  ],
  readers: [
    {
      name: "John Smith",
      favoriteGenre: "Fiction",
    },
  ],
};

// data for working check
let actions1 = ["printBooks", "printReaders", "someAction"];
let data6 = [null, null, null];

// solution:
function manageLibrary1(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i]; // на цьому етапі поки не використовується

    switch (currentAction) {
      case "printBooks":
        results.push(libraryData.books);
        break;
      case "printReaders":
        results.push(libraryData.readers);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  }
  return results;
}
console.log(manageLibrary1(actions1, data6));
// ======================================================================
// EN: Add the case "addBook". This case should: Create a new book object
//     using the currentData parameter which holds the following properties:
//     - title (string); - author (string); - year (string); - genre (string);
//     Generate an id (use libraryData.books.length + 1);
//     Set default values for: isRead, rating, borrowed, borrowedBy,
//      borrowDate (like in the initial data);
//     Add the new book to libraryData.books array;
//     Add the string Book added successfully! to the results array.

// data for working check
let actions2 = ["addBook", "addBook", "printBooks"];
let data7 = [
  {
    title: "The Art of War",
    author: "Sun Tzu",
    year: 500,
    genre: "Philosophy",
  },
  {
    title: "The Prince",
    author: "Niccolò Machiavelli",
    year: 1532,
    genre: "Philosophy",
  },
  null,
];

// solution:
function manageLibrary2(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case "addBook":
        const newBook = {
          /*для генерації id на цей момент це працює добре, але якщо в 
            майбутн буде доданий метод видалення книги то може знадобитися
            потужніший генератор ідентифікаторів.*/
          id: libraryData.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: "",
          borrowDate: "",
        };
        libraryData.books.push(newBook);
        results.push("Book added successfully!");
        break;
      case "printBooks":
        results.push(libraryData.books);
        break;
      case "printReaders":
        results.push(libraryData.readers);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  }
  return results;
}
console.log(manageLibrary2(actions2, data7));
/* так ми отримаємо
  [
  "Book added successfully!",
  "Book added successfully!",
  [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: "",
    },
    {
      id: 2,
      title: "The Art of War",
      author: "Sun Tzu",
      year: 500,
      genre: "Philosophy",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: "",
    },
    {
      id: 3,
      title: "The Prince",
      author: "Niccolò Machiavelli",
      year: 1532,
      genre: "Philosophy",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: "",
    },
  ],
];*/
// ======================================================================
// EN: Create a new case searchByTitle in your switch statement. This action
//     should search for books by their title. For the searchByTitle case:
//     1.The currentData parameter is a string to search for;
//     2.Create an empty array searchResults to store the search results;
//     3.Loop through all books in the library;
//     4.For each book, check if its title includes the search string;
//     5.The search should be case-insensitive (convert both strings to
//     lowercase before comparing);
//     6.If a match is found, add the book to the searchResults array;
//     7.Add the searchResults array to the main results array;

// data for working check
let actions3 = ["addBook", "addBook", "addBook", "searchByTitle", "printBooks"];
let data8 = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    year: 2019,
    genre: "Thriller",
  },
  { title: "Silent Hill", author: "Roger Avary", year: 2006, genre: "Horror" },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    year: 1988,
    genre: "Horror",
  },
  "silent",
  null,
];

// solution:
function manageLibrary3(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case "searchByTitle":
        let searchResults = [];
        for (let book of libraryData.books) {
          if (book.title.toLowerCase().includes(currentData.toLowerCase())) {
            searchResults.push(book);
          }
        }
        results.push(searchResults);
        break;
      case "addBook":
        const newBook = {
          /*для генерації id на цей момент це працює добре, але якщо в 
            майбутн буде доданий метод видалення книги то може знадобитися
            потужніший генератор ідентифікаторів.*/
          id: libraryData.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: "",
          borrowDate: "",
        };
        libraryData.books.push(newBook);
        results.push("Book added successfully!");
        break;
      case "printBooks":
        results.push(libraryData.books);
        break;
      case "printReaders":
        results.push(libraryData.readers);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  }
  return results;
}
console.log(manageLibrary3(actions3, data8));
// ======================================================================
// EN: Add a new case filterByGenre to your switch statement. This action
//     should filter books by their genre. For the filterByGenre case:
//     1.The currentData parameter is a string representing the genre to filter by;
//     2.Create an empty array filteredResults to store the filtered results;
//     3.Loop through all books in the library;
//     4.For each book, check if its genre exactly matches the requested genre;
//     5.If there's a match, add the book to the filteredResults array;
//     6.Add the filteredResults to the main results array;

// data for working check
let actions4 = ["addBook", "addBook", "filterByGenre", "printBooks"];
let data9 = [
  { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Dystopian",
  },
  "Dystopian",
  null,
];
// solution:
function manageLibrary3(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case "filterByGenre":
        let filteredResults = [];
        for (let book of libraryData.books) {
          if (book.genre === currentData) {
            // в цьому випадку currentData є "string"
            filteredResults.push(book);
          }
        }
        results.push(filteredResults);
        break;
      case "searchByTitle":
        let searchResults = [];
        for (let book of libraryData.books) {
          if (book.title.toLowerCase().includes(currentData.toLowerCase())) {
            // в цьому випадку currentData є "string"
            searchResults.push(book);
          }
        }
        results.push(searchResults);
        break;
      case "addBook":
        const newBook = {
          // в цьому випадку - currentData є object (with title, author, year, genre).
          id: libraryData.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: "",
          borrowDate: "",
        };
        libraryData.books.push(newBook);
        results.push("Book added successfully!");
        break;
      case "printBooks":
        results.push(libraryData.books);
        break;
      case "printReaders":
        results.push(libraryData.readers);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  }
  return results;
}
console.log(manageLibrary3(actions4, data9));
// ======================================================================
// EN: Add a new case markAsRead to your switch statement. This action
//     should mark books as read and add ratings. For the markAsRead case:
//     The currentData parameter is an object containing:
//     1.bookId (number);
//     2.rating (number from 1 to 5);
//     3.Find the book with the matching id in the library;
//     4.Validate that the rating is a number between 1 and 5;
//     5.If the book is found and rating is valid:
//      -Set isRead to true;
//      -Set the rating to the provided value;
//     6.Add appropriate messages to the results array:
//      -Book marked as read! - for successful update;
//      -Invalid rating! Please rate between 1 and 5 - for invalid rating;
//      -Book not found! - if the book id doesn't exist

// data for working check
let actions5 = ["addBook", "markAsRead", "markAsRead", "printBooks"];
let data11 = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
  { bookId: 2, rating: 7 },
  { bookId: 2, rating: -1 },
  null,
];

// solution:
function manageLibrary4(actions, data) {
  let results = [];

  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];
    const currentData = data[i];

    switch (currentAction) {
      case "markAsRead":
        // в цьому випадку - currentData є object (with bookId, rating), після деструктуризації
        const { bookId, rating } = currentData;

        let book = libraryData.books.find((b) => b.id === bookId);

        if (!book) {
          results.push("Book not found!");
          break;
        }

        if (typeof rating !== "number" || rating < 1 || rating > 5) {
          results.push("Invalid rating! Please rate between 1 and 5");
          break;
        }

        book.isRead = true;
        book.rating = rating;
        results.push("Book marked as read!");
        break;
      case "filterByGenre":
        let filteredResults = [];
        for (let book of libraryData.books) {
          if (book.genre === currentData) {
            // в цьому випадку currentData є "string"
            filteredResults.push(book);
          }
        }
        results.push(filteredResults);
        break;
      case "searchByTitle":
        let searchResults = [];
        for (let book of libraryData.books) {
          if (book.title.toLowerCase().includes(currentData.toLowerCase())) {
            // в цьому випадку currentData є "string"
            searchResults.push(book);
          }
        }
        results.push(searchResults);
        break;
      case "addBook":
        const newBook = {
          // в цьому випадку - currentData є object (with title, author, year, genre).
          id: libraryData.books.length + 1,
          title: currentData.title,
          author: currentData.author,
          year: currentData.year,
          genre: currentData.genre,
          isRead: false,
          rating: 0,
          borrowed: false,
          borrowedBy: "",
          borrowDate: "",
        };
        libraryData.books.push(newBook);
        results.push("Book added successfully!");
        break;
      case "printBooks":
        results.push(libraryData.books);
        break;
      case "printReaders":
        results.push(libraryData.readers);
        break;
      default:
        results.push("Invalid action!");
        break;
    }
  }
  return results;
}
console.log(manageLibrary4(actions5, data11));
