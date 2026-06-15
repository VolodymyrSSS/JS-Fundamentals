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
