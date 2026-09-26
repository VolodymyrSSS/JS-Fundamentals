console.log("Topic: Functions from Coddy, JS part 6");
// =================================== 01 ==================================
/*
    Створіть програму, яка допомагає керувати станціями з напоями для пікніка,
    згладжуючи показники температури та декодуючи інструкції з рецептів. Ви
    отримаєте розмір вікна, а потім серію показників температури. Обчисліть
    ковзне середнє для кожного вікна (кожне середнє використовує N послідовних
    показників, зсуваючись на одну позицію за раз). Виведіть ці середні значення,
    округлені до 2 знаків після коми, розділені пробілами.
    Потім зчитайте рядок коду рецепту та перетворіть кожен символ на його значення
    ASCII. Виведіть ці значення, розділені пробілами, на наступному рядку.
 */
// Solution:

// визначений розмір вікна для ковзного середнього значення
const windowSize = 3;

// масив із значеннями показників температури
const temperatures = [10, 20, 30, 40, 50];

/* Для обчислення середнього значення для кожного вікна, потрібно пройтись циклом 
    по масиву температур, де кожне вікно має декілька послідовних показників температури.
    Необхідно розуміти, що цикл зупиняється на значэнні temperatures.length - windowSize
    що значить що беруться значення тих вікон, які повністю входять у масив. Можна ще так
    Ми хочемо перемістити вікно розміром N по масиву.
    Останній дійсний початковий індекс — temperatures.length - windowSize.
    Приклад: temperatures = [10,20,30,40,50], windowSize = 3.
    Length = 5.
    Останній дійсний початковий індекс = 5 - 3 = 2.
    При i = 2 вікно має розмір [30,40,50].
    Якби ви дозволили i = 3, ви б спробували розрізати [40,50,?] — але це неповний результат, 
    оскільки залишається лише 2 елементи. Тому беруться значення поточного але повного вікна.
    Ми використовуємо метод slice для отримання поточного вікна та метод reduce для 
    обчислення суми показників у цьому вікні. Потім ми ділимо суму на розмір вікна та 
    округлюємо результат до 2 знаків після коми за допомогою toFixed(2). Отримані середні
    значення зберігаємо у масиві averages, який потім конвертуємо в рядок з пробілами
    між значеннями та виводимо у консоль.
*/
let averages = []; // масив для отриманих середніх значень
// Для кожної позиції, де поміщається повне вікно, обчислюємо середнє значення послідовних показників windowSize
for (let i = 0; i <= temperatures.length - windowSize; i++) {
  // проходимось циклом по усіх позиціях, де може поміститись повне вікно
  let window = temperatures.slice(i, i + windowSize); // отримуємо поточнe вікнo де будуть братись температурні показники
  let sum = window.reduce((a, b) => a + b, 0); // обчислюємо суму показників поточного вікна
  let avg = (sum / windowSize).toFixed(2); // обчислюємо середнє значення та округлюємо до 2 знаків після коми
  averages.push(avg); // додаємо отримане середнє значення у масив
}
console.log(averages.join(" ")); // конвертуємо масив в рядок з пробілами між значеннями та виводимо у консоль

// визначений рядок з кодом рецепта
let recipeCode = "ABC";

// ASCII-конвертація
let asciiValues = []; // масив для отриманих  ASCII-значень
// проходимось циклом по усіх символах рядка
for (let ch of recipeCode) {
  /* Але тут ch вже є рядком з одного символу (наприклад, "A"). Цей рядок складається з
     одного символу і має довжину 1, а тому його єдиний дійсний індекс — 0. Тому вираз
     ch.charCodeAt(0) означає «дайте мені код першого (і єдиного) символу в цьому рядку».”
  */
  asciiValues.push(ch.charCodeAt(0)); // конвертуємо символи рядка на ASCII-значення та додаєм в масив
}
// конвертуємо масив в рядок з пробілами між значеннями та виводимо у консоль
console.log(asciiValues.join(" "));

// =================================== 02 ==================================
/*
    Створіть функцію updatePlantGrowth, яка отримує plantInfo як параметр. Ви 
    працюєте в сільськогосподарському дослідницькому центрі, де вчені вивчають
    ембріологію рослин. Ваше завдання — створити систему, яка відстежує стадії
    росту різних рослин.
    Функція повинна приймати рядок, що представляє назву рослини та її поточну
    стадію росту, а потім повертати змінений рядок з оновленою стадією росту та
    описом нового стану рослини.
    Параметри: plantInfo (рядок): Рядок у форматі "PlantName:Stage", де 
    PlantName — це назва рослини, а Stage — це однозначне число від 0 до 9, 
    що представляє її поточну стадію росту.
    Функція повинна виконувати такі операції:
    1. Витягувати назву рослини та поточну стадію з вхідного рядка.
    2. Збільшувати стадію росту на 1, якщо вона вже не досягнута на 9 (повністю виросла).
    3. Додавати опис нового стану рослини на основі оновленого номера стадії.
    4. Повертати оновлений рядок у форматі "PlantName:NewStage - Description".
    Використовуйте такі описи для кожної стадії росту рослини:
        0 - Насіння (Seed)
        1 - Проростання (Germination)
        2 - Розсада (Seedling)
        3 - Вегетативна (Vegetative)
        4 - Брунькування (Budding)
        5 - Цвітіння (Flowering)
        6 - Запилення (Pollination)
        7 - Розвиток плодів (Fruit development)
        8 - Дозрівання (Ripening)
        9 - Готовність до збору врожаю  (Harvest-ready)
    Функція повертає рядок, що представляє оновлену інформацію про рослину з її
    новою стадією росту та описом.
*/
// Solution:
function updatePlantGrowth1(plantInfo) {
  // витягуємо і розділяємо вхідний рядок на назву рослини та поточну стадію росту
  const [plantName, stage] = plantInfo.split(":");

  let newStage = parseInt(stage); // конвертуємо поточну стадію росту в ціле число
  if (newStage < 9) {
    newStage++; // збільшуємо стадію росту на 1, якщо вона ще не досягла 9
  }

  // масив з описами для кожної стадії росту рослини
  const descriptions = [
    "Seed",
    "Germination",
    "Seedling",
    "Vegetative",
    "Budding",
    "Flowering",
    "Pollination",
    "Fruit development",
    "Ripening",
    "Harvest-ready",
  ];

  return `${plantName}:${newStage} - ${descriptions[newStage]}`;
}
// Tests:
console.log(updatePlantGrowth1("Tomato:0")); // "Tomato:1 - Germination"
console.log(updatePlantGrowth1("Rose:1")); // "Rose:2 - Seedling"
console.log(updatePlantGrowth1("Lettuce:2")); // "Lettuce:3 - Vegetative"
console.log(updatePlantGrowth1("Cactus:3")); // "Cactus:4 - Budding"
console.log(updatePlantGrowth1("Sunflower:4")); // "Sunflower:5 - Flowering"
console.log(updatePlantGrowth1("Daisy:5")); // "Daisy:6 - Pollination"

// Solution with switch:
function updatePlantGrowth2(plantInfo) {
  // розділяємо вхідний рядок по :-роздільнику на дві частини: назву рослини та поточну стадію росту
  const parts = plantInfo.split(":");
  const plantName = parts[0]; // отримуємо назву рослини

  let newStage = parseInt(parts[1]); // отримуємо і конвертуємо поточну стадію росту в ціле число для подальшої роботи
  if (newStage < 9) newStage++; // збільшуємо стадію росту на 1, якщо вона ще не досягла 9

  let description; // змінна для зберігання опису нового стану рослини, яка буде визначена в залежності від оновленої стадії росту
  // Використовуємо конструкцію switch для визначення опису нового стану рослини на основі оновленого номера стадії
  switch (newStage) {
    case 0:
      description = "Seed";
      break;
    case 1:
      description = "Germination";
      break;
    case 2:
      description = "Seedling";
      break;
    case 3:
      description = "Vegetative";
      break;
    case 4:
      description = "Budding";
      break;
    case 5:
      description = "Flowering";
      break;
    case 6:
      description = "Pollination";
      break;
    case 7:
      description = "Fruit development";
      break;
    case 8:
      description = "Ripening";
      break;
    case 9:
      description = "Harvest-ready";
      break;
  }
  // повертаємо оновлений рядок з назвою рослини, новою стадією росту та описом нового стану рослини
  return plantName + ":" + newStage + " - " + description;
}
// Tests:
console.log(updatePlantGrowth2("Ruccola:0")); // "Ruccola:1 - Germination"
console.log(updatePlantGrowth2("Basil:1")); // "Basil:2 - Seedling"
console.log(updatePlantGrowth2("Apple:6")); // "Apple:7 - Fruit development"
console.log(updatePlantGrowth2("Pear:7")); // "Pear:8 - Ripening"
console.log(updatePlantGrowth2("Banana:8")); // "Banana:9 - Harvest-ready"
console.log(updatePlantGrowth2("Grapes:9")); // "Grapes:9 - Harvest-ready"

// =================================== 03 ==================================
/*
  Write a function organizeKitchen that takes items and discardFlags and returns an object with separated items and their counts in binary format.

The function helps organize kitchen cleanup by separating items to keep from items to discard, then converts the counts to binary representation for efficient tracking.

Parameters:

items (array): Kitchen items like "microwave_oven", "egg_cups", etc.
discardFlags (array): Boolean values indicating whether to discard each item (true = discard, false = keep)
Returns: Object with separated items and binary counts. Format: { keptItems: ["item1", "item2"], discardedItems: ["item3"], keptCountBinary: "10", discardedCountBinary: "1" }

 */
// Solution:
function organizeKitchen1(items, discardFlags) {
  const keptItems = []; // масив для збереження назв предметів, які залишаються
  const discardedItems = []; // масив для збереження назв предметів, які викидаються
  // проходимо циклом по усіх предметах та відповідних їм прапорцях discardFlags
  for (let i = 0; i < items.length; i++) {
    if (discardFlags[i]) {
      discardedItems.push(items[i]);
    } else {
      keptItems.push(items[i]);
    }
  }

  return {
    keptItems: keptItems, // повертаємо масив з назвами предметів, які залишаються
    discardedItems: discardedItems, // повертаємо масив з назвами предметів, які викидаються
    keptCountBinary: keptItems.length.toString(2), // конвертуємо кількість збережених предметів у двійкову систему числення
    discardedCountBinary: discardedItems.length.toString(2), // конвертуємо кількість викинутих предметів у двійкову систему численняS
  };
}
// Tests:
console.log(organizeKitchen1(["spoon"], [false])); // { keptItems: ["spoon"], discardedItems: [], keptCountBinary: "1", discardedCountBinary: "0" }
console.log(organizeKitchen1(["knife"], [true])); // { keptItems: [], discardedItems: ["knife"], keptCountBinary: "0", discardedCountBinary: "1" }
console.log(
  organizeKitchen1(
    ["microwave_oven", "egg_cups", "blender", "toaster"],
    [false, true, false, true],
  ),
);
// { keptItems: ["microwave_oven", "blender"], discardedItems: ["egg_cups", "toaster"], keptCountBinary: "10", discardedCountBinary: "10" }

// Solution with reduce:
function organizeKitchen2(items, discardFlags) {
  const { keptItems, discardedItems } = items.reduce(
    (acc, item, i) => {
      if (discardFlags[i]) {
        acc.discardedItems.push(item);
      } else {
        acc.keptItems.push(item);
      }
      return acc;
    },
    { keptItems: [], discardedItems: [] }, // Ініціалізуємо акумулятор з двома порожніми масивами для збережених та викинутих предметів
  );

  return {
    keptItems,
    discardedItems,
    keptCountBinary: keptItems.length.toString(2),
    discardedCountBinary: discardedItems.length.toString(2),
  };
}
// Tests:
console.log(organizeKitchen2(["fork", "plate"], [false, true]));
// { keptItems: ["fork"], discardedItems: ["plate"], keptCountBinary: "1", discardedCountBinary: "1" }
console.log(organizeKitchen2(["cup", "bowl", "pan"], [true, false, true]));
// { keptItems: ["bowl"], discardedItems: ["cup", "pan"], keptCountBinary: "1", discardedCountBinary: "10" }

// Solution with filter:
function organizeKitchen3(items, discardFlags) {
  const keptItems = items.filter((_, i) => !discardFlags[i]);
  const discardedItems = items.filter((_, i) => discardFlags[i]);

  return {
    keptItems,
    discardedItems,
    keptCountBinary: keptItems.length.toString(2),
    discardedCountBinary: discardedItems.length.toString(2),
  };
}
// Tests:
console.log(organizeKitchen3(["ladle", "colander"], [false, false]));
// { keptItems: ["ladle", "colander"], discardedItems: [], keptCountBinary: "10", discardedCountBinary: "0" }
console.log(organizeKitchen3(["grater", "peeler"], [true, true]));
// { keptItems: [], discardedItems: ["grater", "peeler"], keptCountBinary: "0", discardedCountBinary: "10" }

// =================================== 04 ==================================
/*
  Створіть функцію exploreCave, яка отримує message1 та message2 як параметри.
  Ця функція порівнює два повідомлення від дослідників печер і повертає 
  відформатований рядок на основі їхньої схожості:
  1. Якщо message1 та message2 ідентичні, поверніть: "Echo: [повідомлення]".
  2. Якщо вони різні, об'єднайте їх, поставивши "&" між ними, і поверніть результат.
  3. Ви повинні враховувати такі випадки як: порожні рядки, нечутливість до регістру.
  Параметри:
  - message1 (рядок): Повідомлення першого дослідника.
  - message2 (рядок): Повідомлення другого дослідника.
  Функція повертає рядок, який або об'єднує різні повідомлення, або вказує на
  повідомлення, що відтворюється.
*/
// Solution with if-else:
function exploreCave1(message1, message2) {
  // коли обидва повідомлення ідентичні ігноруючи регістр
  if (message1.toLowerCase() === message2.toLowerCase()) {
    return "Echo: " + message1;
  }
  // коли обидва повідомлення порожні
  else if (message1 === "" && message2 === "") {
    return "Echo: ";
  }
  // коли одне з повідомлень порожнє, повертаємо інше повідомлення
  else if (message1 === "") {
    return message2;
  } else if (message2 === "") {
    return message1;
  }
  // коли повідомлення різні
  else {
    return message1 + " & " + message2;
  }
}
// Tests:
console.log(exploreCave1("Hello", "hello")); // "Echo: Hello"
console.log(exploreCave1("Echo", "Echo")); // "Echo: Echo"
console.log(exploreCave1("Path splits into two", "CAVE")); // "Path splits into two & CAVE"
console.log(exploreCave1("", "")); // "Echo: "
console.log(exploreCave1("Light", "")); // "Light"

// Solution with ternary operator:
function exploreCave2(message1, message2) {
  return message1.toLowerCase() === message2.toLowerCase()
    ? "Echo: " + message1
    : message1 === "" && message2 === ""
      ? "Echo: "
      : message1 === ""
        ? message2
        : message2 === ""
          ? message1
          : message1 + " & " + message2;
}
// Tests:
console.log(exploreCave2("Watch out for bats", "There's a bear")); // "Watch out for bats & There's a bear"
console.log(exploreCave2("Watch out for bats", "watch out for bats")); // "Echo: Watch out for bats"

// Solution with filter and join:
function exploreCave3(message1, message2) {
  if (message1.toLowerCase() === message2.toLowerCase()) {
    return "Echo: " + message1;
  }
  const parts = [message1, message2].filter((m) => m !== "");
  return parts.length === 0 ? "Echo: " : parts.join(" & ");
}
// Tests:
console.log(exploreCave3("It's dark here", "It's DARK here")); // "Echo: It's dark here"

// Solution with switch:
/*
  Зазвичай, switch вимагає break, щоб запобігти провалу до наступного випадку.
  Але тут кожен випадок або повертає значення, або повертає значення за замовчуванням.
  Після виконання return функція негайно завершується, тому немає ризику переходу до 
  наступного випадку.
*/
function exploreCave4(message1, message2) {
  switch (true) {
    case message1.toLowerCase() === message2.toLowerCase():
      return "Echo: " + message1;
    case message1 === "" && message2 === "":
      return "Echo: ";
    case message1 === "":
      return message2;
    case message2 === "":
      return message1;
    default:
      return message1 + " & " + message2;
  }
}
// Tests:
console.log(exploreCave4("I found water", "No water found")); // "I found water & No water found"
console.log(exploreCave4("All clear", "all clear")); // "Echo: All clear"

// =================================== 05 ==================================
/*
  Створіть програму, яка допоможе керувати вашою новою школою дельтапланеризму,
  виконуючи три завдання: перевірте, чи містить ім'я учня підрядок "and" (враховуючи
  регістр), обчисліть дохід інструктора після сплати податків та підрахуйте суворо
  зростаючі підмасиви в оцінках безпеки обладнання.
  Ви прочитаєте ім'я учня, валовий дохід інструктора та ставку податку, а також
  серію оцінок безпеки. Виведіть, чи містить ім'я "and", чистий дохід після сплати
  податків та скільки послідовностей суворо зростаючих послідовностей існує в
  оцінках (де кожне число більше за попереднє).
 */
// Solution:
function manageGlidingSchool(studentName, grossIncome, taxRate, safetyRatings) {
  // перевіряємо, чи містить ім'я учня підрядок "and" (враховуючи регістр)
  /* Забезпечення чутливості до регістру полягає в тому, що перед перевіркою 
  потрібно якраз навпаки - не застосовувати методи як .toLowerCase() чи .toUpperCase(). 
  Наприклад: "Alexander" → містить "and" → true, а от "Andy" → містить "Аnd" 
  а не "and" і через регістр → false
  */
  const containsAnd = studentName.includes("and");

  // обчислюємо чистий дохід інструктора після сплати податків
  /*
    Чистий дохід після сплати податків можна обчислити за формулою:
    Net Income = Gross Income - (Gross Income * Tax Rate)
    але потрібно врахувати, що ставка податку taxRate вказана у відсотках, тому 
    її потрібно ще конвертувати в десяткову форму, поділивши на 100.
  */
  let netIncome = grossIncome - (grossIncome * taxRate) / 100;

  // підраховуємо суворо зростаючі підмасиви в оцінках безпеки обладнання
  /*
    Отже, строго зростаючий послідовний підмасив означає:
    Кожен елемент більший за попередній. Тому ми враховуємо всі можливі 
    послідовні зрізи, включаючи зрізи з одним елементом.
    Приклад: [2, 3, 5]
    Одинарні елементи: [2], [3], [5] → 3
    Пари: [2,3], [3,5] → 2
    Потрійний: [2,3,5] → 1
    Всього = 6.

    Можна використати підрахунок за формулою n*(n+1)/2 для кожного суворо 
    зростаючого підмасиву, де n - довжина цього підмасиву або це є одноелементний підмасив.
    Можна вважати що n-1 це парні підмасиви а n-2 це потрійні підмасиви і так далі, але це 
    буде складно реалізувати. Щось типу:
    let subarrayCounts = 0;
    let length = 1;
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > scores[i - 1]) {
        length++;
      } else {
        subarrayCounts += (length * (length + 1)) / 2;
        length = 1;
      }
    }
    subarrayCounts += (length * (length + 1)) / 2;

    Проте є простіший спосіб - це просто пройтись по всіх можливих підмасивах і перевірити їх на
    суворе зростання. Для цього потрібно спочатку знайти всі суворо зростаючі підмасиви та
    їх довжини. А тому ми будемо використовувати два вкладені цикли для перебору всіх можливих 
    підмасивів та перевірки їх суворого зростання. 
  */
  let count = 0; // змінна для підрахунку кількості суворо зростаючих підмасивів
  // Зовнішній цикл бере початковий індекс i. Внутрішній цикл бере наступні індекси j,
  // щоб перевірити, чи утворюють вони суворо зростаючий підмасив.
  for (let i = 0; i < safetyRatings.length; i++) {
    count++; // врахування одинарного елемента як підмасиву
    // проходимо циклом по наступних елементах після поточного індексу i щоб мати суворе зростання
    for (let j = i + 1; j < safetyRatings.length; j++) {
      // перевіряємо, чи кожен наступний елемент більший за попередній
      if (safetyRatings[j] > safetyRatings[j - 1]) {
        // якщо наступний елемент більший, то це продовження суворо зростаючого підмасиву, і ми збільшуємо лічильник
        count++;
      } else {
        // якщо наступний елемент не більший, то поточний підмасив закінчується, і ми виходимо з внутрішнього циклу
        break;
      }
    }
  }

  return { containsAnd, netIncome, count };
}
// Tests:
console.log(manageGlidingSchool("Alexander", 1000, 20, [2, 3, 5])); // { containsAnd: true, netIncome: 800, count: 6 }
console.log(manageGlidingSchool("Andy", 1500, 15, [1, 2, 2, 4])); // { containsAnd: false, netIncome: 1275, count: 4 }
console.log(manageGlidingSchool("Cassandra", 7500, 30, [1, 1, 1, 1])); // { containsAnd: true, netIncome: 5250, count: 4 }
console.log(manageGlidingSchool("Michael", 8500, 28, [10])); // { containsAnd: false, netIncome: 6120, count: 1 }

// =================================== 06 ==================================
/*
  Створіть програму, яка допоможе організувати систему реєстрації на спільні
  обіди. Ваша програма повинна перевірити, чи містить назва страви лише літери
  (без цифр та спеціальних символів), згенерувати 10-значний код відстеження,
  обчисливши контрольну цифру в стилі ISBN-10 для 9-значного ідентифікатора
  страви, та оновити список офіціантів-волонтерів, замінивши першу особу новим
  волонтером.
  Якщо назва страви недійсна, виведіть "Invalid dish name". В іншому 
  випадку виведіть в обєкті повний 10-значний код відстеження в одному рядку, а
  потім оновлений список офіціантів (розділений комами) в наступному рядку.
*/
// Solution:
function organizePotluck(dishName, dishId, serverList, newVolunteer) {
  // перевіряємо, чи містить назва страви лише літери
  // if (!/^[a-zA-Z]+$/.test(dishName)) {
  //   console.log("Invalid dish name");
  //   return;
  // }

  // перевіряємо, чи містить назва страви лише літери
  function isValidDishName(name) {
    for (let i = 0; i < name.length; i++) {
      const code = name.charCodeAt(i);
      // дозволені літери великого регістру A-Z (65–90) та малого регістру a-z (97–122)
      if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
        return false;
      }
    }
    return true;
  }

  if (!isValidDishName(dishName)) {
    console.log("Invalid dish name"); // виводимо повідомлення, якщо назва страви містить недопустимі символи
  } else {
    // генеруємо 10-значний код відстеження, додаючи контрольну суму до ID страви
    let sum = 0; // змінна для зберігання суми для обчислення контрольної суми за формулою ISBN-10
    // проходимо циклом по перших 9 цифрах dishId (а це рядок), множимо кожну цифру на її позицію (починаючи з 1) та додаємо до суми
    for (let i = 0; i < 9; i++) {
      sum += (i + 1) * Number(dishId[i]);
      /*
        (i + 1) - ISBN‑10 вимагає множення кожної цифри на її позицію, починаючи з 1 (не з 0).
        Number(dishId[i]) - конвертує символ у рядку dishId на число. Оскільки dishId - це рядок,
        кожен символ є рядком з одного символу (наприклад, "3"). Використання Number() або 
        parseInt() дозволяє конвертувати цей символ у відповідне числове значення (наприклад, 3).
        Це необхідно для правильного обчислення контрольної суми, оскільки ми повинні працювати з
        числами, а не з рядками. Якщо ви спробуєте використовувати символи як є, ви отримаєте
        неправильні результати, оскільки рядкові символи не можуть бути безпосередньо використані
        в арифметичних операціях.
      */
    }
    let remainder = sum % 11; // обчислюємо залишок від ділення суми на 11, що є частиною формули для обчислення контрольної суми ISBN-10
    let checkDigit = remainder === 10 ? "X" : String(remainder); // визначаємо контрольну суму: якщо залишок дорівнює 10, контрольна сума буде "X", інакше це буде сам залишок у вигляді рядка
    let trackingCode = dishId + checkDigit; // формуємо повний 10-значний код відстеження, додаючи контрольну суму до 9-значного ID страви

    // замінюємо першого сервера в списку на нового волонтера
    let servers = serverList.split(","); // розділяємо рядок зі списком серверів на масив, використовуючи кому як роздільник
    servers[0] = newVolunteer; // замінюємо першого сервера (елемент з індексом 0) на нового волонтера
    const updatedList = servers.join(","); // об'єднуємо масив серверів назад у рядок, використовуючи кому як роздільник, щоб отримати оновлений список серверів

    return {
      trackingCode,
      updatedList,
    }; // повертаємо повний 10-значний код відстеження та оновлений список серверів
  }
}
// Tests:
console.log(
  organizePotluck("Pasta", "123456789", "Alice,Bob,Charlie", "David"),
); // "123456789X", "David,Bob,Charlie"
console.log(organizePotluck("Salad", "987654321", "Eve,Frank,Grace", "Heidi")); // "9876543210", "Heidi,Frank,Grace"
console.log(organizePotluck("Cake", "111111111", "Ivan,Judy,Ken", "Leo")); // "1111111111", "Leo,Judy,Ken"
console.log(
  organizePotluck("Pizza123", "222222222", "Mallory,Nina,Oscar", "Peggy"),
); // "Invalid dish name"
console.log(
  organizePotluck("Soup!", "333333333", "Quentin,Rachel,Steve", "Trent"),
); // "Invalid dish name"
console.log(
  organizePotluck("TacoSalad", "000000000", "Mike,Sarah,Jake", "Lucy"),
); // "0000000000", "Lucy,Sarah,Jake"

// =================================== 07 ==================================
/*
  Створіть функцію fishObservation, яка отримує параметри unusualFish
  та waterTemp. Функція повинна поєднати незвичайні види риб із поширеними
  гірськими струмковими рибами та створити відформатований звіт про спостереження.
  Виконайте такі кроки, щоб виконати завдання:
  1. Об'єднайте масив unusualFish із заздалегідь визначеним масивом поширених
  гірських струмкових риб: ["форель", "лосось", "харіус"].
  2. Створіть відформатований рядок, який містить:
    a. Ранкове привітання
    б. Температуру води
    с. Список усіх спостережуваних видів риб (як незвичайних, так і поширених)
    д. Цікавий факт про екосистеми гірських струмків
  Параметри:
  - unusualFish (масив): Масив рядків, що представляють назви незвичайних видів риб.
  - waterTemp (число): Число, що представляє температуру води в градусах Цельсія.
  Функція повертає рядок, що містить відформатований звіт про спостереження.
  Примітка: Обов'язково об'єднайте елементи масиву комами та пробілами для зручності
  читання у відформатованому рядку. Також, між рядками повинен бути пустий рядок.
*/
// Solution:
function fishObservation1(unusualFish, waterTemp) {
  const mountainFish = ["trout", "salmon", "grayling"];
  const observedFish = unusualFish.concat(mountainFish);

  const fishList =
    unusualFish.length === 0
      ? ", " + mountainFish.join(", ")
      : observedFish.join(", ");

  const formattedReport =
    "Good morning! Today's mountain stream observation:\n\n" +
    "Water Temperature: " +
    waterTemp +
    "°C\n\n" +
    "Observed Fish Species: " +
    fishList +
    "\n\n" +
    "Fun Fact: Mountain stream ecosystems are highly sensitive to environmental changes and serve as important indicators of overall watershed health.";

  return formattedReport;
}
// Tests:
console.log(fishObservation1([], 8));
/*
Good morning! Today's mountain stream observation:

Water Temperature: 8°C

Observed Fish Species: , trout, salmon, grayling

Fun Fact: Mountain stream ecosystems are highly sensitive to environmental changes and 
serve as important indicators of overall watershed health.
*/

console.log(
  fishObservation1(
    ["Mountain Whitefish", "Paiute Sculpin", "Speckled Dace", "Tui Chub"],
    13,
  ),
);
/*
Good morning! Today's mountain stream observation:

Water Temperature: 13°C

Observed Fish Species: Mountain Whitefish, Paiute Sculpin, Speckled Dace, Tui Chub, trout, salmon, grayling

Fun Fact: Mountain stream ecosystems are highly sensitive to environmental changes and 
serve as important indicators of overall watershed health.
*/

// Solution with spread operator and map
function fishObservation2(unusualFish, waterTemp) {
  const mountainFish = ["trout", "salmon", "grayling"];

  // об'єднуємо в єдиний масиви за допомогою оператора spread
  const observedFish = [...unusualFish, ...mountainFish];

  // проходимо циклом по об'єднаному масиву observedFish та створюємо рядок з назвами риб, розділеними комами та пробілами
  const fishList =
    unusualFish.length === 0
      ? ", " + mountainFish.map((f) => f).join(", ")
      : observedFish.map((f) => f).join(", ");

  const formattedReport =
    "Good morning! Today's mountain stream observation:\n\n" +
    "Water Temperature: " +
    waterTemp +
    "°C\n\n" +
    "Observed Fish Species: " +
    fishList +
    "\n\n" +
    "Fun Fact: Mountain stream ecosystems are highly sensitive to environmental changes and serve as important indicators of overall watershed health.";

  return formattedReport;
}

console.log(fishObservation2(["Rainbow Trout", "Golden Carp"], 15));
/*
Good morning! Today's mountain stream observation:

Water Temperature: 15°C

Observed Fish Species: Rainbow Trout, Golden Carp, trout, salmon, grayling

Fun Fact: Mountain stream ecosystems are highly sensitive to environmental changes and 
serve as important indicators of overall watershed health.
*/

// ==================================== 08 ==================================
/*
  Create a program that reads a quantity number of package tracking numbers and
  the list of it than identifies which ones appear more than once. Print each 
  duplicate tracking number formatted as a 6-digit code with leading zeros.
  Output the duplicate tracking numbers in the order they first appeared in 
  the input list, with each number on a separate line.
*/
// Solution with Map:
/*
  Треба спочатку створити змінну counts, яка буде відстежувати скільки разів 
  з'явилося кожне число. Далі, коли число з'являється вдруге, ми поміщаємо 
  його в масив для дублікатів. Це гарантує, що дублікати будуть збиратися у
  порядку їхньої першої появи.
*/
function findDuplicateTrackingNumbers1(n, trackingNumbers) {
  const counts = new Map(); // створюємо Map для зберігання кількості появ кожного номера відстеження
  const duplicates = []; // визначаємо масив для зберігання дублікатів, які з'являються більше одного разу

  // проходимо циклом по кожному номеру відстеження в списку trackingNumbers
  for (const num of trackingNumbers) {
    if (!counts.has(num)) {
      counts.set(num, 1); // якщо номер відстеження ще не зустрічався, додаємо його в Map з початковим значенням 1
    } else {
      counts.set(num, counts.get(num) + 1); // якщо номер відстеження вже зустрічався, збільшуємо його кількість на 1
      // якщо кількість появ цього номера відстеження досягає 2, це означає, що він є дублікатом, і ми додаємо його в масив duplicates
      if (counts.get(num) === 2) {
        duplicates.push(num);
      }
    }
  }
  // return duplicates; // повертаємо масив з дублікатами, які з'являються більше одного разу
  // проходимо циклом по масиву duplicates та виводимо кожен номер відстеження, форматуючи його як 6-значний код з провідними нулями
  for (const num of duplicates) {
    console.log(num.toString().padStart(6, "0"));
    /*
      num.toString() - конвертує число в рядок.
      .padStart(6, '0') гарантує, що воно завжди має 6 символів, додаючи ведучі нулі, якщо це необхідно.
      console.log(...) виводить кожен дублікат на окремому рядку
    */
  }
}
// Tests:
findDuplicateTrackingNumbers1(
  10,
  [123, 456, 789, 123, 456, 101112, 131415, 161718, 192021, 222324],
); // 000123, 000456
findDuplicateTrackingNumbers1(6, [1, 2, 3, 4, 5, 6]); // (no output)
findDuplicateTrackingNumbers1(4, [7, 7, 7, 7]); // 000007
findDuplicateTrackingNumbers1(8, [999999, 1, 999999, 1, 500000, 1, 2, 2]); // 000001, 999999, 000002
findDuplicateTrackingNumbers1(5, [0, 0, 0, 0, 0]); // 000000

// Solution with plain object:
function findDuplicateTrackingNumbers2(n, trackingNumbers) {
  const counts = {}; // створюємо об'єкт для зберігання кількості появ кожного номера відстеження
  const duplicates = []; // визначаємо масив для зберігання дублікатів, які з'являються більше одного разу

  // проходимо циклом по кожному номеру відстеження в списку trackingNumbers
  for (const num of trackingNumbers) {
    // якщо номер відстеження ще не зустрічався, додаємо його в об'єкт counts з початковим значенням 1
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num]++; // якщо номер відстеження вже зустрічався, збільшуємо його кількість на 1
      if (counts[num] === 2) {
        duplicates.push(num);
      }
    }
  }
  // проходимо циклом по масиву duplicates та виводимо кожен номер відстеження, форматуючи його як 6-значний код з провідними нулями
  for (const num of duplicates) {
    console.log(num.toString().padStart(6, "0"));
  }
}
// Tests:
findDuplicateTrackingNumbers2(
  8,
  [42, 795, 111111, 42, 339, 2053, 85914, 192021],
); // 000042

// Solution with Set:
/*
  Рішення Set є акуратним та лаконічним, і воно добре підходить для такої задачі. Воно 
  дозволяє уникнути додаткового ведення обліку карти чи об'єкта як в Map/object, водночас
  зберігаючи порядок, надсилаючи дублікати лише тоді, коли вони вперше виявлені.
*/
function findDuplicateTrackingNumbers3(n, trackingNumbers) {
  const seen = new Set(); // створюємо Set для відстеження тільки унікальних номерів відстеження
  const duplicates = []; // створюємо масив для зберігання дублікатів, які з'являються більше одного разу

  // проходимо циклом по кожному номеру відстеження в списку trackingNumbers
  for (const num of trackingNumbers) {
    // якщо ми вже бачили цей номер, і він ще не був доданий до масиву duplicates, додаємо його в масив duplicates
    if (seen.has(num)) {
      if (!duplicates.includes(num)) {
        duplicates.push(num); // додаємо номер відстеження в масив duplicates, якщо він ще не був доданий
      }
    } else {
      // Якщо це перший раз, коли ми бачимо цей номер, додаємо його в Set
      seen.add(num);
    }
  }
  // проходимо циклом по масиву duplicates та виводимо кожен номер відстеження, форматуючи його як 6-значний код з провідними нулями
  for (const num of duplicates) {
    console.log(num.toString().padStart(6, "0"));
  }
}
// Tests:
findDuplicateTrackingNumbers3(
  7,
  [55555, 12345, 55555, 654321, 1456, 111111, 222222],
); // 000005

// ==================================== 09 ==================================
/*
  Напишіть функцію longestWord, яка приймає речення (рядок) і знаходить
  найдовше слово.
  Вхідні дані: "The quick brown fox jumps over the lazy dog";
  Вихідні дані: "quick".
*/
// Solution via split, sort and reverse methods:
function longestWord1(sentence) {
  // конвертуємо речення в масив слів, розділяючи його за пробілами
  let words = sentence.split(" ");

  // сортуємо в зворотному порядку за довжиною слова
  // якщо два слова мають однакову довжину, перше слово залишається першим для повернення
  words.sort((a, b) => b.length - a.length);

  // перше слово в масиві після сортування буде найдовшим словом
  return words[0];

  /* у разі якщо сортуємо за зростанням довжини, то потрібно повернути останній
  елемент масиву або використати метод reverse() після сортування, щоб отримати
  масив у зворотному порядку, і тоді повернути перший елемент, ось так:
    let words = sentence.split(" ");
    words.sort((a, b) => a.length - b.length);
    words.reverse();
    return words[0];
  */
}
// Tests:
console.log(longestWord1("The quick brown fox jumps over the lazy dog"));
// "quick"
console.log(
  longestWord1("A journey of a thousand miles begins with a single step"),
); // "thousand"

// Solution via split and reduce methods:
function longestWord2(sentence) {
  // конвертуємо речення в масив слів, розділяючи його за пробілами
  let words = sentence.split(" ");
  // використовуємо метод reduce для знаходження найдовшого слова
  return words.reduce((longest, current) => {
    // порівнюємо довжину поточного слова з довжиною найдовшого слова, яке ми знайшли до цього
    return current.length > longest.length ? current : longest;
  }, ""); // починаємо з порожнього рядка як початкового значення для longest
}
console.log(longestWord2("This is the sentence")); // "sentence"

// Solution via split and for loop:
function longestWord3(sentence) {
  // конвертуємо речення в масив слів, розділяючи його за пробілами
  let words = sentence.split(" ");

  let longest = ""; // змінна для зберігання найдовшого слова

  // проходимо циклом по кожному слову в масиві words
  for (let i = 0; i < words.length; i++) {
    // якщо довжина поточного слова більше за довжину найдовшого слова, яке ми знайшли до цього
    if (words[i].length > longest.length) {
      longest = words[i]; // оновлюємо змінну longest на поточне слово
    }
  }
  /* можна пройтись циклом for...of, що є більш сучасним та зручним способом перебору масиву:
    for (let word of words) {
      // якщо довжина поточного слова ('word') є більшо за 'longest', то оновлюємо 'longest' на поточне слово
      if (word.length > longest.length) {
        longest = word;
      }
    }
  */

  return longest; // повертаємо найдовше слово після завершення циклу
}
console.log(longestWord3("To be or not to be, that is the question")); // "question"

// ==================================== 10 ==================================
/*
  Напишіть функцію removeDuplicates, яка видаляє дублікати елементів з масиву.
*/
// Solution via loop and includes method:
function removeDuplicates(arr) {
  const unique = []; // створюємо порожній масив для зберігання унікальних елементів

  // проходимо циклом по кожному елементу в масиві arr
  for (const item of arr) {
    // перевіряємо, чи елемент вже є в масиві unique
    if (!unique.includes(item)) {
      unique.push(item); // якщо елемент ще не зустрічався, додаємо його в масив unique
    }
  }
  /* Або ітерацію робимо так:
  for (let i = 0; i < arr.length; i++) {
        // тільки додаємо коли ще не маємо в масиві
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
  */
  return unique; // повертаємо масив унікальних елементів після завершення циклу
}
// Tests:
console.log(removeDuplicates([1, 2, 3, 2, 1])); // [1, 2, 3]
console.log(removeDuplicates(["apple", "banana", "apple", "orange"])); // ["apple", "banana", "orange"]

// Solution via Set:
function removeDuplicates2(arr) {
  return [...new Set(arr)];

  // можна замінити на: return Array.from(new Set(arr));
}
console.log(removeDuplicates2([25, 24, 32, 23, 22, 25, 32])); // [25, 24, 23, 22, 32]
console.log(removeDuplicates2(["papay", "ananas", "mango", "papay", "ananas"])); // ["papay", "ananas", "mango"]

// Solution via filter:
function removeDuplicates3(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates3([11, 11, 11, 2, 11])); // [11, 2]

// Solution via using an object (or map) avoids repeated .includes checks, making it O(n):
function removeDuplicates4(arr) {
  let seen = {}; // створюємо об'єкт для відстеження побачених елементів
  let result = []; // створюємо масив для зберігання унікальних елементів

  // проходимо циклом по кожному елементу в масиві arr
  for (let i = 0; i < arr.length; i++) {
    //  якщо елемент ще не зустрічався, додаємо його в об'єкт seen
    if (!seen[arr[i]]) {
      seen[arr[i]] = true; // відмічаємо елемент як побачений
      result.push(arr[i]); // додаємо елемент у результативний масив, якщо він ще не зустрічався
    }
  }

  return result; // повертаємо масив унікальних елементів після завершення циклу
}
console.log(removeDuplicates4([11, 11, 11, 2, 11])); // [11, 2]

// ==================================== 11 ==================================
/*
  Напишіть функцію countVowels для підрахунку кількості голосних у заданому рядку.
*/
// Solution via loop and includes method with array of vowels:
function countVowels1(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; // створюємо масив для зберігання голосних літер
  let count = 0; // змінна для підрахунку кількості голосних

  // проходимо циклом по кожному символу в рядку str
  for (let i = 0; i < str.length; i++) {
    // перевіряємо, чи є поточний символ голосною літерою, використовуючи метод includes
    if (vowels.includes(str[i])) {
      count++; // якщо символ є голосною, збільшуємо лічильник на 1
    }
  }
  return count;
}
// Tests:
console.log(countVowels1("Hello World")); // 3
console.log(countVowels1("JavaScript is awesome")); // 8

// Solution via loop and includes method with string of vowels:
function countVowels2(str) {
  const vowels = "aeiouAEIOU"; // створюємо рядок для зберігання голосних літер прописних та великих літер
  let count = 0; // змінна для підрахунку кількості голосних

  // проходимо циклом по кожному символу в рядку str
  for (let char of str) {
    // перевіряємо, чи є поточний символ голосною літерою, використовуючи метод includes
    if (vowels.includes(char)) {
      count++; // якщо символ є голосною, збільшуємо лічильник на 1
    }
  }
  /* або можна використати класичний цикл for дял перебору рядка:
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++; 
    }
  }*/

  return count;
}
console.log(countVowels2("Find the way")); // 4

// Solution via loop and switch statement:
function countVowels3(str) {
  let count = 0; // змінна для підрахунку кількості голосних
  // проходимо циклом по кожному символу в рядку str
  for (let char of str) {
    // використовуємо switch для перевірки, чи є поточний символ голосною літерою
    switch (char.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++; // якщо символ є голосною, збільшуємо лічильник на 1
        break;
    }
  }

  return count;
}
console.log(countVowels3("JavaScript is awesome")); // 8

// Solution via reduce method:
function countVowels4(str) {
  const vowels = "aeiouAEIOU";

  // повертаємо лічильник як акамулятор методу reduce попередньо конвертувавши str в масив символів
  return str.split("").reduce((count, char) => {
    // перевіряємо, чи є поточний символ голосною літерою, використовуючи метод includes
    return vowels.includes(char) ? count + 1 : count;
  }, 0); // початкове значення лічильника встановлюємо на 0
}
console.log(countVowels4("Hii")); // 2

// Solution via match method with regex:
function countVowels5(str) {
  // використовуємо регулярний вираз для пошуку всіх голосних літер у рядку str
  const matches = str.match(/[aeiouAEIOU]/gi); // 'g' - глобальний пошук, 'i' - нечутливий до регістру
  // повертаємо кількість знайдених голосних літер
  return matches ? matches.length : 0;
}
console.log(countVowels5("Ornitologist")); // 5

// ==================================== 12 ==================================
/*
  Створіть функцію firstUniqueCharacter Знайдіть перший унікальний символ у
  заданому рядку.
*/
// Solution via nested loops and boolean flag:
function firstUniqueCharacter1(str) {
  // проходимо циклом по кожному символу в рядку str
  for (let i = 0; i < str.length; i++) {
    let isUnique = true; // змінна для відстеження, чи є поточний символ унікальним

    // перевіряємо, чи є поточний символ унікальним, порівнюючи його з усіма іншими символами в рядку
    for (let j = 0; j < str.length; j++) {
      // якщо індекси не збігаються і символи однакові, перевіряємо, чи є поточний символ унікальним
      if (i !== j && str[i] === str[j]) {
        isUnique = false; // якщо знайдено збіг, поточний символ не є унікальним
        break; // виходимо з внутрішнього циклу, оскільки ми вже знайшли збіг
      }
    }
    // якщо поточний символ є унікальним
    if (isUnique !== false) {
      return str[i]; // то повертаємо його
    }
  }

  return "No unique character found"; // якщо не знайдено унікальних символів, повертаємо повідомлення
}
// Tests:
console.log(firstUniqueCharacter1("swiss")); // "w"
console.log(firstUniqueCharacter1("redivider")); // "v"

// Solution via loop and object:
function firstUniqueCharacter2(str) {
  const charCount = {}; // створюємо об'єкт для зберігання кількості появ кожного символу

  // проходимо циклом по кожному символу в рядку str
  for (let char of str) {
    // збільшуємо лічильник для поточного символу
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // проходимо циклом по кожному символу в рядку str знову
  for (let char of str) {
    // якщо кількість появ поточного символу дорівнює 1, повертаємо його
    if (charCount[char] === 1) {
      return char;
    }
  }

  // якщо не знайдено унікальних символів, повертаємо null
  return "No unique character found";
}
console.log(firstUniqueCharacter2("abccba")); // "No unique character found"
console.log(firstUniqueCharacter2("abcdef")); // "a"
console.log(firstUniqueCharacter2("aabbcdde")); // "c"

// Solution via indexOf and lastIndexOf methods:
function firstUniqueCharacter3(str) {
  // проходимо циклом по кожному символу в рядку str
  for (let i = 0; i < str.length; i++) {
    // перевіряємо, чи є поточний символ унікальним, порівнюючи його перший та останній індекси
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i]; // якщо символ унікальний, повертаємо його
    }
  }
  // якщо не знайдено унікальних символів, повертаємо null
  return "No unique character found";
}
console.log(firstUniqueCharacter3("swiss")); // "w"
console.log(firstUniqueCharacter3("redivider")); // "v"

// Solution via for loop and Set:
function firstUniqueCharacter4(str) {
  const seen = new Set(); // створюємо Set для відстеження побачених символів
  const duplicates = new Set(); // створюємо Set для відстеження дублікатів

  // проходимо циклом по кожному символу в рядку str
  for (let char of str) {
    // якщо символ вже зустрічався, додаємо його в Set duplicates
    if (seen.has(char)) {
      duplicates.add(char);
    } else {
      // якщо символ ще не зустрічався, додаємо його в Set seen
      seen.add(char);
    }
  }
  // проходимо циклом по кожному символу в рядку str знову
  for (let char of str) {
    // якщо символ не є дублікатом, повертаємо його
    if (!duplicates.has(char)) {
      return char;
    }
  }
  // якщо не знайдено унікальних символів, повертаємо повідомлення
  return "No unique character found";
}
console.log(firstUniqueCharacter4("aabbccdde")); // "e"
console.log(firstUniqueCharacter4("aabbccddeeff")); // "No unique character found"

// ==================================== 13 ==================================
/*
  Напишіть функцію findMissingNumber, яка на вхід отримує масив цілих чисел 
  та  відшукає відсутнє число у цьому масиві цілих чисел від 1 до n.
*/
// Solution via sum formula аnd reduce method:
/* Ідея полягає в тому, що ми можемо обчислити очікувану суму чисел від 1 до n
   за допомогою формули суми арифметичної прогресії: (n * (n + 1)) / 2. Потім
   ми обчислюємо фактичну суму елементів у масиві та віднімаємо її від очікуваної
   суми, щоб знайти відсутнє число. */
function findMissingNumber1(arr) {
  // визначення n, де n - довжина масиву + 1 (оскільки одне число відсутнє)
  let n = arr.length + 1;

  // підрахунок очікуваної суми чисел від 1 до n за допомогою формули суми арифметичної прогресії
  let expectedSum = (n * (n + 1)) / 2;

  // підрахунок фактичної суми елементів у масиві arr за допомогою методу reduce
  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum; // різниця сум - це відсутнє число
}
console.log(findMissingNumber1([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber1([2, 3, 4, 5, 6])); // 1

// Solution via sorting and loop:
function findMissingNumber2(arr) {
  // сортуємо масив у порядку зростання
  arr.sort((a, b) => a - b);

  // проходимо циклом по кожному елементу в масиві arr
  for (let i = 0; i < arr.length; i++) {
    // перевіряємо, чи елемент на поточному індексі не відповідає очікуваному значенню (i + 1)
    if (arr[i] !== i + 1) {
      return i + 1; // якщо елемент не відповідає очікуваному значенню, повертаємо відсутнє число
    }
  }

  // якщо не знайдено пропуску, відсутнє число - це n
  return arr.length + 1;
}
console.log(findMissingNumber2([3, 7, 1, 2, 8, 4, 5])); // 6

// Solution via Set:
function findMissingNumber3(arr) {
  let n = arr.length + 1; // визначення n, де n - довжина масиву + 1 (оскільки одне число відсутнє)
  // створюємо Set для зберігання унікальних елементів масиву arr
  let set = new Set(arr);

  // проходимо циклом від 1 до n, перевіряючи, чи кожне число присутнє в Set
  for (let i = 1; i <= n; i++) {
    // якщо число не присутнє в Set, повертаємо його як відсутнє число
    if (!set.has(i)) {
      return i; // повертаємо відсутнє число
    }
  }
}
console.log(findMissingNumber3([1, 2, 3, 4, 5])); // 6

// ==================================== 14 ==================================
/*
  Напишіть функцію titleCase, яка перетворює першу літеру кожного слова в
  реченні на велику літеру.
*/
// Solution via split and loops:
function titleCase1(sentence) {
  let words = sentence.split(" "); // конвертуємо речення в масив слів, розділяючи його за пробілами

  // проходимо циклом по кожному слову в масиві words
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; // отримуємо поточне слово
    // перевіряємо, чи слово не є порожнім рядком
    if (word.length > 0) {
      // перетворюємо першу літеру слова на велику літеру та об'єднуємо її з рештою частиною слова
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  // об'єднуємо масив слів назад у рядок, використовуючи пробіл як роздільник
  return words.join(" ");
}
// Tests:
console.log(titleCase1("the quick brown fox")); // "The Quick Brown Fox"
console.log(titleCase1("hello world")); // "Hello World"

// Solution via split and map:
function titleCase2(sentence) {
  // конвертуємо речення в масив слів, розділяючи його за пробілами
  return sentence
    .split(" ")
    .map((word) =>
      word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "",
    )
    .join(" ");
}
console.log(titleCase2("Believe you can and you're halfway there!"));
// "Believe You Can And You're Halfway There!"

// Solution via reduce method:
function titleCase3(sentence) {
  return sentence.split(" ").reduce((acc, word, idx) => {
    // перевіряємо, чи слово не є порожнім рядком
    let capitalized =
      word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "";
    // додаємо пробіл перед словом, якщо це не перше слово в реченні
    return acc + (idx > 0 ? " " : "") + capitalized;
  }, ""); // початкове значення акумулятора - порожній рядок
}
console.log(titleCase3("Change your thoughts, and you change your world."));
// "Change Your Thoughts, And You Change Your World."

// Solution via for...of loop:
function titleCase4(sentence) {
  let result = []; // створюємо порожній масив для зберігання відформатованих слів

  // проходимо циклом по кожному слову в реченні, розділяючи його за пробілами
  for (let word of sentence.split(" ")) {
    // перевіряємо, чи слово не є порожнім рядком
    if (word.length > 0) {
      // перетворюємо першу літеру слова на велику літеру та об'єднуємо її з рештою частиною слова
      result.push(word[0].toUpperCase() + word.slice(1));
    } else {
      // якщо слово є порожнім рядком, додаємо порожній рядок у масив result
      result.push("");
    }
  }
  return result.join(" "); // об'єднуємо масив слів назад у рядок, використовуючи пробіл як роздільник
}
console.log(
  titleCase4(
    "the only limit to our realization of tomorrow is our doubts of today.",
  ),
);
// "The Only Limit To Our Realization Of Tomorrow Is Our Doubts Of Today."

// ==================================== 15 ==================================
/*
  Напишіть функцію areAnagrams, яка перевіряє, чи є два рядки анаграмами один
  одного. Нагадаємо, що анаграма — це слово або фраза, утворена шляхом
  перестановки літер іншого слова або фрази.
*/
// Solution via sort and compare methods:
function areAnagrams(str1, str2) {
  // конвертуємо обидва рядки в масиви символів, сортуємо їх та об'єднуємо назад у рядки
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  /* Хоча легко для розуміння але метод сортування може бути неефективним для
    великих рядків, оскільки сортування має часову складність O(n log n).
    Альтернативний підхід полягає у використанні підрахунку символів, що має
    часову складність O(n). */

  // порівнюємо відсортовані рядки, щоб перевірити, чи є вони однаковими
  return s1 === s2;
}
// Tests:
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("apple", "pale")); // false

// Solution via character count:
function areAnagrams2(str1, str2) {
  // якщо довжини рядків не однакові, вони не можуть бути анаграмами
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {}; // створюємо об'єкт для зберігання кількості появ кожного символу

  // проходимо циклом по кожному символу в рядку str1
  for (let char of str1) {
    // збільшуємо лічильник для поточного символу
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // проходимо циклом по кожному символу в рядку str2
  for (let char of str2) {
    // зменшуємо лічильник для поточного символу
    charCount[char] = (charCount[char] || 0) - 1;
  }

  // перевіряємо, чи всі лічильники дорівнюють нулю
  for (let count of Object.values(charCount)) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
console.log(areAnagrams2("triangle", "integral")); // true

// Solution via Frequency Map (Object):
function areAnagrams3(str1, str2) {
  // якщо довжини рядків не однакові, вони не можуть бути анаграмами
  if (str1.length !== str2.length) return false;

  let count = {}; // створюємо об'єкт для зберігання кількості появ кожного символу

  // проходимо циклом по кожному символу в рядку str1
  for (let char of str1) {
    // збільшуємо лічильник для поточного символу
    count[char] = (count[char] || 0) + 1;
  }

  // проходимо циклом по кожному символу в рядку str2
  for (let char of str2) {
    // якщо символ не зустрічався в str1 або його кількість вже дорівнює нулю, то рядки не є анаграмами
    if (!count[char]) return false;
    count[char]--; // зменшуємо лічильник для поточного символу
  }

  return true; // якщо всі лічильники дорівнюють нулю, рядки є анаграмами
}

// Solution via reduce method:
function areAnagrams4(str1, str2) {
  // якщо довжини рядків не однакові, вони не можуть бути анаграмами
  if (str1.length !== str2.length) return false;

  // створюємо об'єкт для зберігання кількості появ кожного символу в str1
  let freq1 = str1.split("").reduce((map, c) => {
    // збільшуємо лічильник для поточного символу
    map[c] = (map[c] || 0) + 1;
    return map;
  }, {}); // ініціалізуємо об'єкт як порожній об'єкт

  // створюємо об'єкт для зберігання кількості появ кожного символу в str2
  let freq2 = str2.split("").reduce((map, c) => {
    // збільшуємо лічильник для поточного символу
    map[c] = (map[c] || 0) + 1; // якщо символ ще не зустрічався, ініціалізуємо його лічильник як 1
    return map; // повертаємо об'єкт для наступної ітерації
  }, {}); // ініціалізуємо об'єкт як порожній об'єкт

  // проходимо циклом по кожному ключу в об'єкті freq1
  for (let key in freq1) {
    // якщо кількість появ символу в freq1 не дорівнює кількості появ символу в freq2, рядки не є анаграмами
    if (freq1[key] !== freq2[key]) return false;
  }

  return true; // якщо всі лічильники збігаються, рядки є анаграмами
}
console.log(areAnagrams4("heart", "earth")); // true

// Solution via Set and split/filter methods:
function areAnagrams5(str1, str2) {
  // якщо довжини рядків не однакові, вони не можуть бути анаграмами
  if (str1.length !== str2.length) return false;

  let set = new Set(str1); // створюємо Set для зберігання унікальних символів з str1

  // проходимо циклом по кожному символу в Set
  for (let char of set) {
    // підраховуємо кількість появ символу в обох рядках, використовуючи метод split та filter
    let count1 = str1.split("").filter((c) => c === char).length;
    let count2 = str2.split("").filter((c) => c === char).length;
    if (count1 !== count2) return false; // якщо кількість появ символу не збігається, рядки не є анаграмами
  }
  return true; // якщо всі лічильники збігаються, рядки є анаграмами
}
console.log(areAnagrams5("night", "thing")); // true

// ==================================== 16 ==================================
/*
  Напишіть функцію  reverseWords, яка змінює порядок слів у реченні на протилежний.
*/
// Solution via split, reverse and join methods:
function reverseWords1(sentence) {
  // конвертуємо речення в масив слів, розділяючи його за пробілами, потім перевертаємо масив та об'єднуємо його назад у рядок
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords1("Find Info")); // "Info Find"

// Solution via split and for loop:
function reverseWords2(sentence) {
  let words = sentence.split(" "); // конвертуємо речення в масив слів, розділяючи його за пробілами
  let reversed = []; // створюємо порожній масив для зберігання перевернутих слів
  // проходимо циклом по кожному слову в масиві words у зворотному порядку
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]); // додаємо поточне слово в масив reversed
  }
  return reversed.join(" "); // об'єднуємо масив перевернутих слів назад у рядок, використовуючи пробіл як роздільник
}
console.log(reverseWords2("JavaScript is fun")); // "fun is JavaScript"

// Solution via split and reduce method:
function reverseWords3(sentence) {
  // конвертуємо речення в масив слів, розділяючи його за пробілами, потім використовуємо метод reduce для перевертання порядку слів
  return sentence
    .split(" ")
    .reduce((acc, word) => word + " " + acc, "")
    .trim();
}
console.log(reverseWords3("Dance Lambada")); // "Lambada Dance"

// Solution via split and for...of loop:
function reverseWords4(sentence) {
  let words = sentence.split(" "); // конвертуємо речення в масив слів, розділяючи його за пробілами
  let reversed = []; // створюємо порожній масив для зберігання перевернутих слів
  // проходимо циклом по кожному слову в масиві words у зворотному порядку
  for (let word of words.reverse()) {
    reversed.push(word); // додаємо поточне слово в масив reversed
  }
  return reversed.join(" "); // об'єднуємо масив перевернутих слів назад у рядок, використовуючи пробіл як роздільник
}
console.log(reverseWords4("The quick brown fox")); // "fox brown quick The"

// Solution via split and forEach method:
function reverseWords5(sentence) {
  let words = sentence.split(" "); // конвертуємо речення в масив слів, розділяючи його за пробілами
  let reversed = []; // створюємо порожній масив для зберігання перевернутих слів
  // проходимо циклом по кожному слову в масиві words у зворотному порядку, використовуючи метод forEach
  words.reverse().forEach((word) => reversed.push(word)); // додаємо поточне слово в масив reversed
  return reversed.join(" "); // об'єднуємо масив перевернутих слів назад у рядок, використовуючи пробіл як роздільник
}
console.log(reverseWords5("Green Hair")); // "Hair Green"

// Solution via unshift method:
function reverseWords6(sentence) {
  let words = sentence.split(" ");
  let result = [];
  for (let word of words) {
    result.unshift(word); // push to front
  }
  return result.join(" ");
}
console.log(reverseWords6("Hello World")); // "World Hello"

// ==================================== 17 ==================================
/*
  Напишіть функцію mergeSortedArrays для об'єднання двох відсортованих масивів
  в один відсортований масив.
*/
// Solution via destructuring or concat and sort methods:
function mergeSortedArrays1(arr1, arr2) {
  // об'єднуємо два масиви за допомогою деструктуризації та сортуємо їх у порядку зростання
  return [...arr1, ...arr2].sort((a, b) => a - b);

  /* Або можна використати метод concat для об'єднання масивів:
    return arr1.concat(arr2).sort((a, b) => a - b);*/
}
console.log(mergeSortedArrays1([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
/* Такий підхід є простий, лаконічний і працює надійно. Єдиним компромісом є те, що він викликає
   метод sort для об'єднаного масиву, який дорівнює O((n+m) log(n+m)). Оскільки обидва масиви вже
   відсортовані, можна об'єднати їх за лінійний час за допомогою двовказівного циклу.
*/

// Solution via two pointers method:
function mergeSortedArrays2(arr1, arr2) {
  let merged = []; // створюємо порожній масив для зберігання об'єднаних елементів
  let i = 0; // індекс для першого масиву
  let j = 0; // індекс для другого масиву

  // проходимо циклом по обох масивах, порівнюючи елементи
  while (i < arr1.length && j < arr2.length) {
    // якщо елемент з першого масиву менший за елемент з другого масиву
    if (arr1[i] < arr2[j]) {
      // додаємо елемент з першого масиву в масив merged та збільшуємо індекс i
      merged.push(arr1[i]);
      i++;
    } else {
      // додаємо елемент з другого масиву в масив merged та збільшуємо індекс j
      merged.push(arr2[j]);
      j++;
    }
  }

  // додаємо залишкові елементи з будь-якого з масивів
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  /* Можна додати залишкові елементи і так:
    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);
  */
}
console.log(mergeSortedArrays2([-3, 0, 2], [1, 4, 8])); // [-3, 0, 1, 2, 4, 8]

// Solution via while loop and shift method:
function mergeSortedArrays3(arr1, arr2) {
  let merged = []; // створюємо масив для змерджених елементів
  let a = [...arr1],
    b = [...arr2]; // скопіюємо масиви для уникнення мутації

  while (a.length && b.length) {
    merged.push(a[0] < b[0] ? a.shift() : b.shift());
  }

  return merged.concat(a, b);
}
console.log(mergeSortedArrays3([-4, -2, -1], [1, 2, 3])); // [-4, -2, -1, 1, 2, 3]

// Solution via map method:
function mergeSortedArrays4(arr1, arr2) {
  let i = 0,
    j = 0;
  return Array(arr1.length + arr2.length)
    .fill(0)
    .map(() => {
      if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
        return arr1[i++];
      } else {
        return arr2[j++];
      }
    });
}

// Solution via recursive merge:
function mergeSortedArrays5(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  if (arr1[0] < arr2[0]) {
    return [arr1[0]].concat(mergeSortedArrays(arr1.slice(1), arr2));
  } else {
    return [arr2[0]].concat(mergeSortedArrays(arr1, arr2.slice(1)));
  }
}
console.log(mergeSortedArrays5([-5, 0, 5], [-4, -2, -1])); // [-5, -4, -2, -1, 0, 5]

// ==================================== 18 ==================================
/*
  Напишіть функцію mergeSortedArrays для об'єднання двох відсортованих масивів
  в один відсортований масив.
*/
// Solution:
/* Алгоритм підрахунку паліндромних підрядків:
  1. Ініціалізувати лічильник для відстеження кількості знайдених паліндромних
     підрядків.
  2. Перебрати всі можливі початкові індекси підрядків (i від 0 до довжини -1).
  3. Для кожного початкового індексу перебрати всі можливі кінцеві індекси (j
     від i до довжини -1).
  4. Витягти підрядок з індексу i до j.
  5. Змінити підрядок на інвертований та порівняти його з оригіналом.
  - Якщо вони рівні, це означає, що підрядок є паліндромом.
  - Збільшити лічильник.
  6. Після завершення всіх циклів повернути лічильник.
  Часова складність: O(n3), оскільки O(n²) підрядків, і кожне зворотне/порівняння
  займає 𝑂(𝑛). Просторова складність: 𝑂(𝑛) для тимчасового зберігання підрядка.
*/
function countPalindromes1(str) {
  let count = 0; // змінна для підрахунку паліндромних підрядків

  // зовнішній цикл: індекс початку підрядка
  for (let i = 0; i < str.length; i++) {
    // внутрішній цикл: індекс кінця підрядка ending
    for (let j = i; j < str.length; j++) {
      // виводимо підрядок від i до j (включно)
      let sub = str.slice(i, j + 1);

      // інвертуємо підрядок через конвертацію в масив, інверсію та конвертація назад в рядок
      let reversed = sub.split("").reverse().join("");

      // перевірка чи підрядок одинаковий з інвертованим
      if (sub === reversed) {
        count++; // збільшуємо підрахунок якщо паліндром
      }
    }
  }

  return count; // загальний підрахунок можливих паліндромних підрядків
}
console.log(countPalindromes1("level")); // 7 (l, e, v, e, l, eve, level)

// Solution via “expand around center” technique (O(n²) without creating substrings repeatedly
/* Алгоритм (Розгортання навколо центру)
  1. Ініціалізувати лічильник для паліндромних підрядків.
  2. Розглядати кожен символ (і кожен проміжок між символами) як центр:
    - Паліндроми непарної довжини: центрувати на одному символy.
    - Паліндроми парної довжини: центрувати між двома символами.
  3. Розходимо від центру назовні:
    - Якщо лівий і правий символи рівні, це паліндром.
    - Збільшувати лічильник для кожного допустимого розходження.
    - Переміщатися ліворуч на один крок назад і праворуч на один крок вперед.
  4. Повторити для всіх центрів.
  5. Повертаємо лічильник.
*/
function countPalindromes2(str) {
  let count = 0;

  // функція-помічник: розходження в сторони від центру
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      count++; // знайшли паліндром і збільшили лічильник
      left--; // йдемо в ліво
      right++; // йдемо в право
    }
  }

  // проходимо по кожному можливому центру
  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(i, i); // odd-length palindromes
    expandAroundCenter(i, i + 1); // even-length palindromes
  }

  return count;
}
console.log(countPalindromes2("abba")); // 6 (a, b, b, a, bb, abba)

// ==================================== 19 ==================================
/*
  Напишіть функцію rotateArray для ротації елементів масиву праворуч на задану
  кількість кроків.
*/
// Solution:
/* Алгоритм рішення:
  1. Нормалізувати кроки:
    - Якщо кроки перевищують довжину масиву, зменшити його за модулем:
      steps = steps%arr.length
  2. Розділити масив на дві частини:
    - Останні елементи steps.
    - Решта елементів попереду.
  3. Об'єднати дві частини у зворотному порядку.
    Це фактично повертає масив праворуч.
*/
function rotateArray(steps, arr) {
  let n = arr.length;

  // Normalize steps (avoid unnecessary rotations)
  steps = steps % n;

  // Slice last 'steps' elements and the rest
  let rightPart = arr.slice(n - steps);
  let leftPart = arr.slice(0, n - steps);

  // Concatenate to form rotated array
  return rightPart.concat(leftPart);
}
console.log(rotateArray(2, [1, 2, 3, 4, 5])); // [4, 5, 1, 2, 3]
console.log(rotateArray(3, [7, 8, 9, 10, 11, 12])); // [10, 11, 12, 7, 8, 9]

// ==================================== 19 ==================================
/*
  Напишіть функцію arrayIntersection яка отримує два масиви чисел та 
  знаходить перетин (спільні елементи) цих двох масивів.
*/
// Solution via filter method:
function arrayIntersection1(arr1, arr2) {
  // застосуємо фільтр на перший масив
  return arr1.filter(
    // залишаємо тільки ті елементи, які також є в другому масиві
    (element) => arr2.includes(element),
  );
}
// Test:
console.log(arrayIntersection1([1, 2, 3, 4, 5], [3, 4, 5, 6])); // [3, 4, 5]

// Solution via loop and includes method:
function arrayIntersection2(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    // перевіряємо чи такий елемент в arr1[i] існує в arr2
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(arrayIntersection2([10, 20, 30, 40, 50], [30, 40, 50, 60])); // [30, 40, 50]

// Solution via reduce and includes methods:
function arrayIntersection3(arr1, arr2) {
  return arr1.reduce((acc, el) => {
    if (arr2.includes(el)) acc.push(el);
    return acc;
  }, []);
}

// Solution via Set and filter:
function arrayIntersection4(arr1, arr2) {
  const set2 = new Set(arr2); // O(m)
  return arr1.filter((el) => set2.has(el)); // O(n)
}
console.log(arrayIntersection4([43, 46, 47], [42, 46, 48])); // [46]

// ==================================== 20 ==================================
/*
  Напишіть функцію findMedianSortedArrays для знаходження медіани двох
  відсортованих масивів.
*/
// Solution:
/* Алгоритм рішення буде:
  1. Об'єднаємо два масиви в один відсортований масив.
  - Оскільки вхідні масиви вже є відсортовані то ми можемо ефективно виконати об'єднання.
2. Знаходимо медіану:
  - Якщо загальна довжина непарна то виводимо середній елемент.
  - Якщо парна то виводимо значення двох середніх елементів.
*/
function findMedianSortedArrays(arrNums1, arrNums2) {
  // обєднуємо два масиви і сортуємо на всякий випадок
  const merged = [...arrNums1, ...arrNums2].sort((a, b) => a - b);

  const len = merged.length; // визначаємо довжину обєднаного масиву
  const mid = Math.floor(len / 2); // визначаємо середину обєднаного масиву

  // якщо довжина непарна → виводимо середній елемент
  if (len % 2 !== 0) {
    return merged[mid];
  } else {
    // якщо довжина парна → виводимо два середні елементи
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}
// Tests:
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([2, 4, 6], [1, 3, 5])); // 3.5
console.log(findMedianSortedArrays([7, 6], [3, 2])); // 4.5

// ==================================== 21 ==================================
/*
  Найбільший спільний дільник (НСД) двох чисел – це найбільше додатне ціле
  число, яке ділить обидва числа без залишку. Наприклад, знайдемо НСД чисел 
  12 та 18:
    Перераховуємо дільники числа 12: 1, 2, 3, 4, 6, 12.
    Перераховуємо дільники числа 18: 1, 2, 3, 6, 9, 18.
    Визначаємо найбільший спільний дільник: У цьому випадку це 6.
  Отже, НСД(12, 18) = 6. Це означає, що 6 – найбільше число, на яке можна
  поділити як 12, так і 18. Напишіть функцію для обчислення НСД двох чисел.
*/
// Solution:
/* Алгоритм рішення - це алгоритм Евкліда в дії, а саме:
  у кожній ітерації циклу while залишок від ділення 'a' на 'b' обчислюється та
  присвоюється 'b', при цьому 'a' приймає попереднє значення 'b'. Цей процес
  продовжується доти, доки 'b' не стане 0. Кінцеве значення 'a' — це НСД. 
  Розглянемо, як алгоритм використовує той факт, що НСД залишається незмінним,
  якщо замінити більше число його залишком від ділення на менше число.
  Отже, суть: продовжуйте замінювати більше число залишком, доки одиниця не 
  стане нулем.*/
function gcd(a, b) {
  // продовжуємо доки b стане 0
  while (b !== 0) {
    const temp = b; // визначимо поточне b
    b = a % b; // остача стає новим b
    a = temp; // попереднє b стає новим a
  }
  return a; // коли b = 0, тоді a є НСД
}

// Tests:
console.log(gcd(12, 18)); // 6
console.log(gcd(11, 33)); // 11

// ==================================== 22 ==================================
/*
  Напишіть функцію fizzBuzz, яка повертає рядок, наприклад: для чисел, кратних
  3, виведіть "Fizz" замість числа. Для чисел, кратних 5, виведіть "Buzz". Для
  чисел, кратних і 3, і 5, виведіть "FizzBuzz". Отже, якщо на вхід функція
  отримає число 15 то повинна повернути на виході такий рядок:
  "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
*/
// Solution:
function fizzBuzz1(n) {
  let result = ""; // починаємо з пустого рядка, який потім повернемо

  // ітеруємо по числах до n включно
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // перевіряємо спочатку числа які кратні одночасно 3 та 5
      result += "FizzBuzz"; // повертаємо словосполучення
    } else if (i % 3 === 0) {
      // перевіряємо числа кратні 3
      result += "Fizz";
    } else if (i % 5 === 0) {
      // перевіряємо числа кратні 5
      result += "Buzz";
    } else {
      result += i; // повертаємо просто поточне число
    }

    // додаємо пробіл після кожного елемента ітерації (крім останнього)
    if (i < n) {
      result += " ";
    }
  }

  return result;
}
console.log(fizzBuzz1(15));
// "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"

// Solution via Array.join(" ") method:
function fizzBuzz2(n) {
  let arr = []; // collect results in an array

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString()); // конвертуємо поточне число в рядок
    }
  }

  return arr.join(" "); // вибудовуємо рядок з пробілами між елементами
}
console.log(fizzBuzz2(20));
// "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz"

// ==================================== 23 ==================================
/*
  Дано масив чисел та цільову суму. Знайдіть у масиві два числа, які в сумі
  дорівнюють цільовому значенню тієї суми, та поверніть їхні індекси!
*/
// Solution via creating hashmap:
/* Ідея для рішення буде:
  1. Потрібно створити змінну, тобто карту (hashmap) для зберігання чисел, які
  ми вже бачили та їхні індекси.
  2. Перебераємо масив:
    - Для кожного числа num обчислюємо т.зв. контрольне доповнення: complement = target - num
  3. Якщо complement вже є в карті → повертаємо [map[complement], i].
    - В іншому випадку зберігаємо num з його індексом у карті.
  4. Оскільки задача гарантує коректну пару, ми завжди знайдемо її.
*/
function twoSumHashmap(arr, target) {
  const map = {}; // простий об'єкт як hashmap

  //
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i]; // повертаємо властивість та індекс числа як значення
    }

    map[num] = i; // зберігаємо поточне число та його індекс (заносимо в карту)
  }

  return [];
  // Порожній масив [] — це безпечне значення "без результату" — означає "Я не знайшов жодної дійсної пари"
}
console.log(twoSumHashmap([2, 7, 11, 15], 9)); // [0, 1]

// Solution via doubled loop:
function twoSumBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSumBrute([8, 12, 5, 2, 10, 17], 15)); // [2, 4] (5 + 10 = 15)

// Solution via findIndex:
function twoSumFindInd(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const j = arr.findIndex((num, idx) => idx !== i && num + arr[i] === target);
    if (j !== -1) return [i, j];
  }
  return [];
}
console.log(twoSumFindInd([12, 22, 4, 1, 10], 23)); // [1, 3] (22 + 1 = 23)

// Solution via sort and two indexes:
function twoSumSorted(arr, target) {
  // keep original indexes
  const nums = arr.map((val, idx) => ({ val, idx }));
  nums.sort((a, b) => a.val - b.val);

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const sum = nums[left].val + nums[right].val;
    if (sum === target) {
      return [nums[left].idx, nums[right].idx];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
console.log(twoSumSorted([1, 55, 4, 5, 6], 10)); // [2, 4]
