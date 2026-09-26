console.log("Functions from Coddy, JS part 5");
// =================================== 01 ==================================
/*
  Створіть функцію countStarfish, яка отримує текст як параметр. Ця функція
  має на меті знайти всі входження слова «starfish» у заданому тексті, який
  представляє розмови, почуті на пляжі. Вона повинна визначити загальну кількість
  появи слова «starfish», враховуючи варіації регістру (наприклад, «Starfish»,
  «STARFISH» тощо). Крім того, вона повинна визначити кількість разів, коли 
  «starfish» з'являється як окреме слово. Для цього потрібно виконати:
  1. Перевірте, чи поточне слово дорівнює «starfish» (нижній регістр). Якщо 
  так, збільште рахунок кількості окремих слів.
  2. Якщо поточне слово містить «starfish» як підрядок (але не є точним 
  збігом), збільште рахунок загальної кількості.
  3. Після обробки всіх слів поверніть об'єкт, який містить загальну кількість
  та кількістю окремих слів.
  Параметри: text (рядок): вхідний текст, що містить розмови, почуті на пляжі.
  Функція повертає об'єкт із двома властивостями:
  - total (ціле число): рахннок загальної кількості входжень слова «starfish» (без 
    урахування регістру) у тексті;
  - standalone (ціле число): рахунок кількості разів, коли «starfish» з'являється як 
    окреме слово в тексті.
*/
// Solution:
function countStarfish(text) {
  // переводимо увесь текст в нижній регістр для забезпечення нечутливого регістру
  const lowerText = text.toLowerCase();

  // замінюємо коми, крапки, знаки оклику та знак питання на пробіли
  const cleanedText = lowerText
    .replaceAll(",", " ")
    .replaceAll(".", " ")
    .replaceAll("!", " ")
    .replaceAll("?", " ");

  const words = cleanedText.split(" "); // розділяємо текст на слова за пробілами

  let total = 0; // змінна для підрахунку загальної кількості входжень слова "starfish"
  let standalone = 0; // змінна для підрахунку кількості разів, коли "starfish" з'являється як окреме слово

  // проходимо циклом по кожному слову в масиві
  for (const word of words) {
    if (word === "starfish") {
      total++; // збільшуємо загальну кількість, якщо слово є точним збігом "starfish"
      standalone++; // збільшуємо кількість окремих слів, якщо слово є точним збігом "starfish"
    } else if (word.includes("starfish")) {
      // збільшуємо загальну кількість, якщо слово містить "starfish" як підрядок, але не є точним збігом
      total++;
    }
  }

  return { total, standalone };
}
// Tests:
console.log(
  countStarfish("Starfish are amazing! I've never seen a starfish before."),
); // { total: 2, standalone: 2 }
console.log(countStarfish("starfishstarfish starfish"));
// { total: 2, standalone: 1 }
console.log(countStarfish("Look! There's a starfish on the starboard side!"));
// { total: 1, standalone: 1 }

// =================================== 02 ==================================
/*
  Напишіть функцію processAnimalTag, яка приймає animalTag та rescueOrder і 
  повертає об'єкт з оригінальною міткою, її зворотною версією та номером 
  рятувального наказу у двійковому форматі. Центру реабілітації дикої природи
  потрібно обробляти ідентифікаційні мітки тварин для своєї системи баз даних.
    Параметри:
  - animalTag (рядок): Ідентифікаційна мітка тварини;
  - rescueOrder (число): Номер наказу на порятунок у десятковому форматі;
    Повертає: Об'єкт із трьома властивостями. Формат:
    { original: "tag", reversed: "gat", binary: "1010" }
*/
// Solution:
function processAnimalTag(animalTag, rescueOrder) {
  const originalTag = animalTag; // Зберігаємо початкову мітку
  const reversedTag = animalTag.split("").reverse().join(""); // Розділяємо рядок на масив символів, розвертаємо його та з'єднуємо назад у рядок
  // aбо так; const reversedTag = [...animalTag].reverse().join(""); // спочатку конвертуємо і озділяємо рядок на масив символівз
  const binaryOrder = rescueOrder.toString(2); // Конвертуємо десяткове число в двійковий рядок

  return {
    original: originalTag,
    reversed: reversedTag,
    binary: binaryOrder,
  };
}
// Test
console.log(processAnimalTag("FOX", 2)); // { original: 'FOX', reversed: 'XOF', binary: '10' }

// =================================== 03 ==================================
/*
  Write a function organizeFairSchedule that takes basketCount, textileCount, 
  musicianSlots, belfryChimes and returns an object with updated counts and 
  combined schedule.
  The function increments basket and textile counts by 1, then concatenates 
  the musician performance slots with belfry chime times into a single 
  schedule array.
    Parameters:
    - basketCount (number): Current number of basket displays
    - textileCount (number): Current number of textile displays
    - musicianSlots (array): Array of musician performance times
    belfryChimes (array): Array of belfry chime times
    Returns: Object with updated counts and combined schedule.
    Format: { baskets: number, textiles: number, schedule: array }
*/
// Solution:
function organizeFairSchedule(
  basketCount,
  textileCount,
  musicianSlots,
  belfryChimes,
) {
  const baskets = basketCount + 1;
  const textiles = textileCount + 1;
  const schedule = musicianSlots.concat(belfryChimes);

  return { baskets, textiles, schedule };
}
// Tests:
console.log(
  organizeFairSchedule(5, 3, ["9:00 AM", "11:00 AM"], ["10:00 AM", "12:00 PM"]),
);
// { baskets: 6, textiles: 4, schedule: [ "9:00 AM", "11:00 AM", "10:00 AM", "12:00 PM" ] }
console.log(
  organizeFairSchedule(
    10,
    7,
    ["1:00 PM", "4:00 PM", "6:00 PM"],
    ["2:00 PM", "5:00 PM"],
  ),
);
// { baskets: 11, textiles: 8, schedule: [ "1:00 PM", "4:00 PM", "6:00 PM", "2:00 PM", "5:00 PM" ] }

// =================================== 04 ==================================
/*
  Create a function named calculateFinancialMistakes that receives years 
  and mistakesPerYear as parameters. This function calculates the total 
  money lost due to financial mistakes over the years.
  Each year, the cost per mistake increases by $100, starting from $100 in 
  the first year. For example:
  Year 1: 3 mistakes = 3 * $100 = $300
  Year 2: 2 mistakes = 2 * $200 = $400
  Year 3: 1 mistake = 1 * $300 = $300
  Parameters:
  - years (number): Number of years.
  - mistakesPerYear (array): Number of mistakes each year.
  Returns a number representing the total money lost.
*/
// Solution:
function calculateFinancialMistakes(years, mistakesPerYear) {
  // Handle the base case: if years is 0, there are no mistakes:
  if (years === 0) {
    return 0;
  }
  /* Define the yearly cost: the cost per mistake grows by $100 each year:
    Year 1 → $100
    Year 2 → $200
    Year 3 → $300
    So the formula is: costPerMistake = yearIndex * 100
    But since yearIndex with array starts at 0, we use (i+1) to get the correct cost.
    because Year 1 should cost 100, not 0. So:
    i = 0 → Year 1 → (0+1)*100 = 100
    i = 1 → Year 2 → (1+1)*100 = 200
    To solve - Loop over each year index i, than calculate Mistakes × (i+1) * 100 and
    Add to total */
  let total = 0;

  for (let i = 0; i < years; i++) {
    const mistakes = mistakesPerYear[i];
    /* Loop through years.  */
    const costPerMistake = (i + 1) * 100;
    total += mistakes * costPerMistake;
  }

  return total;
}
// Tests:
console.log(calculateFinancialMistakes(0, [])); // 0
console.log(calculateFinancialMistakes(1, [3])); // 300
console.log(calculateFinancialMistakes(2, [3, 2])); // 700
console.log(calculateFinancialMistakes(3, [3, 2, 1])); // 1000 (300 + 400 + 300)

// Solution via reduce:
/*We need the year index to calculate the cost per mistake ((i+1) * 100). That’s 
why we used the third parameter (i). 
We’ll use reduce on mistakesPerYear, starting with 0 as the accumulator.
Inside the reducer:
i is the year index (0‑based).
Cost per mistake = (i+1) * 100.
Contribution = mistakes * costPerMistake.*/
function calculateFinancialMistakes2(years, mistakesPerYear) {
  if (years === 0) return 0;

  return mistakesPerYear.reduce((total, mistakes, i) => {
    return total + mistakes * (i + 1) * 100;
  }, 0);
}

// =================================== 05 ==================================
/*
  Create a function named checkPlantCellHealth that receives cellIntegrity
  and pestPresence as its parameters. This function aims to monitor the health
  status of plant cells based on given measurements of cellular integrity and
  pest behavior indicators. The function will iterate through the cellIntegrity
  array and check the corresponding value in the pestPresence array at each
  index. It will determine the health status of each cell based on the following 
  criteria:
  - If the cell integrity at index i is above 75% and there is no pest presence
    (false) at index i, the cell is considered "Healthy".
  - If the cell integrity at index i is between 50% and 75% (inclusive), or if 
    there is a pest presence (true) at index i, the cell is considered "At Risk".
  - If the cell integrity at index i is below 50%, the cell is considered 
    "Unhealthy", regardless of pest presence.
  The function will store the health status of each cell in a new array, which
  will be returned as the result.
  Parameters:
  - cellIntegrity (integer-array): An array where each integer represents the 
    integrity percentage of a plant cell.
  - pestPresence (boolean-array): An array of the same length as cellIntegrity, 
    where each boolean value indicates the presence (true) or absence (false) 
    of pests near the corresponding cell.
  The function returns a string-array, which is an array of strings describing 
  the health status of each cell.
*/
// Solution:
function checkPlantCellHealth(cellIntegrity, pestPresence) {
  const healthStatuses = [];

  for (let i = 0; i < cellIntegrity.length; i++) {
    const integrity = cellIntegrity[i];
    const pest = pestPresence[i];

    if (integrity > 75 && pest === false) {
      healthStatuses.push("Healthy");
    } else if (integrity >= 50 || pest === true) {
      healthStatuses.push("At Risk");
    } else {
      healthStatuses.push("Unhealthy");
    }
  }

  return healthStatuses;
}
// Tests:
console.log(checkPlantCellHealth([80], [false])); // [ "Healthy" ]
console.log(checkPlantCellHealth([70], [true])); // [ "At Risk" ]
console.log(checkPlantCellHealth([100, 80], [false, false])); // [ "Healthy", "Healthy" ]
console.log(checkPlantCellHealth([76, 74, 50], [false, false, false])); // [ "Healthy", "At Risk", "At Risk" ]

// Solution via map:
function checkPlantCellHealth2(cellIntegrity, pestPresence) {
  return cellIntegrity.map((integrity, i) => {
    const pest = pestPresence[i];

    if (integrity > 75 && !pest) {
      return "Healthy";
    } else if (integrity >= 50 || pest) {
      return "At Risk";
    } else {
      return "Unhealthy";
    }
  });
}

// =================================== 06 ==================================
/*
  Create a function named arrangePonies that receives initialPonies and 
  poniesToAdd as its parameters. This function aims to help Lily arrange her
  toy ponies in a special order. Lily has a group of ponies already lined up 
  (initialPonies) and wants to add some more ponies (poniesToAdd) to the end 
  of the line. The function should create a new array that combines both 
  groups of ponies, ensuring that the ponies from poniesToAdd appear after 
  the ponies from initialPonies in the final arrangement.
  If either of the input arrays is empty, the function should still work 
  correctly. If there are any duplicate pony names between the two arrays, 
  the duplicates should be included in the final array.
  Parameters:
  - initialPonies (array): An array of strings representing the names of the ponies
    already lined up.
  - poniesToAdd (array): An array of strings representing the names of the ponies
    Lily wants to add to the line.
  The function returns an array of strings representing the final arrangement
  of Lily's ponies, with the ponies from poniesToAdd appearing after the ponies
  from initialPonies.
*/
// Solution via if operator and loop:
function arrangePonies1(initialPonies, poniesToAdd) {
  const result = [];

  // If initialPonies is empty, add placeholder
  if (initialPonies.length === 0) {
    result.push("");
  } else {
    for (let i = 0; i < initialPonies.length; i++) {
      result.push(initialPonies[i]);
    }
  }

  // If poniesToAdd is empty, add placeholder
  if (poniesToAdd.length === 0) {
    result.push("");
  } else {
    for (let j = 0; j < poniesToAdd.length; j++) {
      result.push(poniesToAdd[j]);
    }
  }

  return result;
}
// Tests:
console.log(arrangePonies1([], []));
// [ "", "" ]
console.log(arrangePonies1(["Twilight Sparkle"], []));
// [ "Twilight Sparkle", "" ]
console.log(arrangePonies1([], ["Applejack", "Rarity"]));
// [ "", "Applejack", "Rarity" ]
console.log(
  arrangePonies1(["Applejack", "Rarity"], ["Fluttershy", "Twilight Sparkle"]),
);
// [ "Applejack", "Rarity", "Fluttershy", "Twilight Sparkle" ]

// Solution via spread and ternary operator:
function arrangePonies2(initialPonies, poniesToAdd) {
  // If both arrays are empty, return two empty strings
  if (initialPonies.length === 0 && poniesToAdd.length === 0) {
    return ["", ""];
  }

  // Start with initialPonies, or [""] if empty
  const start = initialPonies.length > 0 ? initialPonies : [""];
  // Add poniesToAdd, or [""] if empty
  const end = poniesToAdd.length > 0 ? poniesToAdd : [""];

  return [...start, ...end];
}
// Tests:
console.log(arrangePonies2(["Twilight", "Rainbow"], ["Applejack", "Rarity"]));
// ["Twilight", "Rainbow", "Applejack", "Rarity"]
console.log(arrangePonies2(["Starlight"], ["Fluttershy", "Twilight Sparkle"]));
// ["Starlight", "Fluttershy", "Twilight Sparkle"]

// =================================== 07 ==================================
/*
  Create a function named transformText that receives text and operation
  as its parameters. This function aims to manipulate the given text based
  on the specified operation, which can be "reverse", "palindrome", or "anagram".
  The function should perform the following operations based on the operation
  parameter:
  1. Reverse: If the operation is "reverse", the function should return 
    the text with its characters in reverse order.
  2. Palindrome: If the operation is "palindrome", the function should check
    if the text is a palindrome (ignoring spaces, punctuation, and case). If
    it is a palindrome, return "Is Palindrome". Otherwise, modify the text 
    minimally to make it a palindrome (if possible) and return the modified text.
  3. Anagram: If the operation is "anagram", the function should rearrange
    the letters of the text to form the most meaningful anagram. The rearrangement
    should consider word boundaries but ignore case and punctuation.
  The length of the text will not exceed 500 characters. The function should 
  implement optimal string manipulation techniques to perform efficiently for 
  the maximum input size.
  Parameters:
  - text (string): A paragraph of text representing Alex's reflections.
  - operation (string): A command that dictates the type of string manipulation.
    The values can be "reverse", "palindrome", or "anagram".
  The function returns a string, which is the manipulated text according to 
  the specified operation.
*/
// Solution:
function transformText(text, operation) {
  // create string reversal
  if (operation === "reverse") {
    return text.split("").reverse().join("");
  }

  // create palindrome check and modification
  if (operation === "palindrome") {
    // Step 1: Clean text manually
    let cleaned = "";
    for (let i = 0; i < text.length; i++) {
      const ch = text[i].toLowerCase();
      if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
        cleaned += ch;
      }
    }

    // Step 2: Reverse cleaned
    let reversed = "";
    for (let j = cleaned.length - 1; j >= 0; j--) {
      reversed += cleaned[j];
    }

    // Step 3: Compare
    if (cleaned === reversed) {
      return "Is Palindrome";
    } else {
      // Step 4: Minimal fix — append the reverse of the cleaned string
      // (this guarantees palindrome with minimal change)
      return text + reversed;
    }
  }

  // create anagram rearrangement
  if (operation === "anagram") {
    // Normalize: lowercase, keep only letters and spaces
    let filtered = "";
    for (let i = 0; i < text.length; i++) {
      const ch = text[i].toLowerCase();
      if ((ch >= "a" && ch <= "z") || ch === " ") {
        filtered += ch;
      }
    }
    return filtered;
  }

  return text;
}

// Tests:
console.log(transformText("hello", "reverse"));
// olleh
console.log(transformText("A man, a plan, a canal, Panama!", "palindrome"));
// Is Palindrome
console.log(transformText("The Morse Code", "anagram"));
// the morse code
console.log(transformText("No lemon, no melon", "palindrome"));
// Is Palindrome

// =================================== 08 ==================================
/*
  Create a function named sortFishBySize that receives fishList as its 
  parameter. This function sorts an array of fish names based on their size
  in ascending order:
    "Sardine" is small
    "Trout" is medium
    "Salmon" is large
    "Tuna" is extra large
  Parameter: fishList (array): An array of strings containing names of fish.
  The function returns a sorted array of fish names based on their size 
  categories from small to extra large.
*/
// Solution:
/*
  First, we need to define the size order in an object that maps each fish 
  name to a numeric rank. To do it, we need a mapping from fish name → size rank:
    "Sardine" → 1 (small)
    "Trout" → 2 (medium)
    "Salmon" → 3 (large)
    "Tuna" → 4 (extra large)
  After that, we can sort the fishList based on this size order.
  In order to use the sort method, we need to convert the list inro an array.
  fishList.slice() makes a copy so we don’t mutate the original array.
  Than we use the sort method with a custom comparator that compares 
  the size ranks of the fish names. The sort callback compares fish by 
  their numeric rank.
*/
function sortFishBySize(fishList) {
  // Define size ranking
  const sizeOrder = {
    Sardine: 1,
    Trout: 2,
    Salmon: 3,
    Tuna: 4,
  };

  // Sort based on sizeOrder
  return fishList.slice().sort((a, b) => sizeOrder[a] - sizeOrder[b]);
}
// Tests:
console.log(sortFishBySize(["Salmon", "Sardine", "Tuna", "Trout"]));
// [ "Sardine", "Trout", "Salmon", "Tuna" ]
console.log(sortFishBySize(["Trout"]));
// [ "Trout" ]
console.log(sortFishBySize(["Sardine", "Trout"]));
// [ "Sardine", "Trout" ]

// Solution via the loop‑based version
function sortFishBySize2(fishList) {
  const result = [];

  // Step 1: add all Sardines first
  for (let i = 0; i < fishList.length; i++) {
    if (fishList[i] === "Sardine") {
      result.push(fishList[i]);
    }
  }

  // Step 2: then add all Trouts
  for (let i = 0; i < fishList.length; i++) {
    if (fishList[i] === "Trout") {
      result.push(fishList[i]);
    }
  }

  // Step 3: then add all Salmons
  for (let i = 0; i < fishList.length; i++) {
    if (fishList[i] === "Salmon") {
      result.push(fishList[i]);
    }
  }

  // Step 4: finally add all Tunas
  for (let i = 0; i < fishList.length; i++) {
    if (fishList[i] === "Tuna") {
      result.push(fishList[i]);
    }
  }

  return result;
}
console.log(sortFishBySize2(["Salmon"]));
// [ "Salmon" ]

console.log(sortFishBySize2(["Trout", "Salmon"]));
// [ "Trout", "Salmon" ]

//Solution via a single loop with if/else:
function sortFishBySize3(fishList) {
  // Buckets for each category
  const sardines = [];
  const trouts = [];
  const salmons = [];
  const tunas = [];

  // Single loop: classify each fish into its bucket
  for (let i = 0; i < fishList.length; i++) {
    const fish = fishList[i];
    if (fish === "Sardine") {
      sardines.push(fish);
    } else if (fish === "Trout") {
      trouts.push(fish);
    } else if (fish === "Salmon") {
      salmons.push(fish);
    } else if (fish === "Tuna") {
      tunas.push(fish);
    }
  }

  // Concatenate buckets in order
  return sardines.concat(trouts, salmons, tunas);
}

// =================================== 09 ==================================
/*
  Create a function named truckJourneyReversal that receives truckerName 
  and route as parameters. This function helps document a trucker’s journey
  in reverse order. The route parameter is a string with locations separated
  by "->" (e.g., "Los Angeles->Phoenix->Dallas"). Your task is to reverse
  the order of the locations. Steps:
  - Split the route string into an array using "->".
  - Reverse the array.
  - Join the array back into a string using "->".
  - Concatenate the trucker’s name with the reversed route in the format: 
    "[Trucker’s Name]: [Reversed Route]".
  Parameters:
    - truckerName (string): The name of the trucker.
    - route (string): The trucker’s route, with locations separated by "->".
  The function returns a string with the trucker’s name followed by a colon,
  a space, and the reversed route.
*/
// Solution:
function truckJourneyReversal(truckerName, route) {
  // Step 1: Split route into array
  const locations = route.split("->");

  // Step 2: Reverse the array
  const reversed = [];
  for (let i = locations.length - 1; i >= 0; i--) {
    reversed.push(locations[i]);
  }

  // Step 3: Join back into string
  const reversedRoute = reversed.join("->");

  // Step 4: Concatenate with trucker’s name
  return truckerName + ": " + reversedRoute;
}
// Tests:
console.log(
  truckJourneyReversal(
    "John Doe",
    "Los Angeles->Phoenix->Dallas->Memphis->Atlanta",
  ),
);
// John Doe: Atlanta->Memphis->Dallas->Phoenix->Los Angeles

console.log(
  truckJourneyReversal(
    "Jane Smith",
    "New York->Boston->Philadelphia->Washington D.C.",
  ),
);
// Jane Smith: Washington D.C.->Philadelphia->Boston->New York

console.log(
  truckJourneyReversal("Emily Davis", "Miami->Orlando->Tampa->Jacksonville"),
);
// Emily Davis: Jacksonville->Tampa->Orlando->Miami

// =================================== 10 ==================================
/*
  Create a function named createBeachNameTag that receives fullName and 
  dayOfMonth as its parameters. This function generates a customized name 
  tag for a beach event participant using their name and the day of the month.
  Steps:
  1. Extract the first three letters of the first name. If shorter, use 
  the entire first name.
  2. Extract the last three letters of the last name. If shorter, use the 
  entire last name.
  3. Convert the day of the month to a string and reverse its characters.
  4. Combine the extracted parts in the format: 
      "First3Letters-ReversedDay-Last3Letters".
  5. Convert the entire name tag to uppercase.
  Parameters:
  - fullName (string): The full name of the participant, consisting of a 
  first name and a last name separated by a space.
  - dayOfMonth (number): The day of the month on which the event is happening,
  represented as an integer.
  The function returns a string representing the customized name tag in the
  specified format.
*/
// Solution:
function createBeachNameTag(fullName, dayOfMonth) {
  // Step 1: Split fullName into first and last
  const parts = fullName.split(" ");
  const firstName = parts[0];
  const lastName = parts[1];

  // Step 2: Extract first 3 letters of first name (or full if shorter)
  const firstPart = firstName.length >= 3 ? firstName.slice(0, 3) : firstName;

  // Step 3: Extract last 3 letters of last name (or full if shorter)
  const lastPart = lastName.length >= 3 ? lastName.slice(-3) : lastName;

  // Step 4: Convert dayOfMonth to string and reverse
  const dayStr = String(dayOfMonth);
  let reversedDay = "";
  for (let i = dayStr.length - 1; i >= 0; i--) {
    reversedDay += dayStr[i];
  }

  // Step 5: Combine parts
  const tag = `${firstPart}-${reversedDay}-${lastPart}`;

  // Step 6: Convert to uppercase
  return tag.toUpperCase();
}
// Tests:
console.log(createBeachNameTag("John Doe", 15));
// JOH-51-DOE
console.log(createBeachNameTag("Emma Watson", 1));
// EMM-1-SON
console.log(createBeachNameTag("Liam Neeson", 30));
// LIA-03-SON

// =================================== 11 ==================================
/*
  Create a function named banquetBinaryCandles that receives decimalCandles
  as its parameter. This function determines the number of lit candles needed
  to represent a given decimal number in binary format.
  Parameters:
  - decimalCandles (number): The desired number of candles in decimal format.
The function returns an integer representing the number of lit candles needed
to represent the decimal number in binary format.
*/
// Solution via loop:
function banquetBinaryCandles1(decimalCandles) {
  // Step 1: Convert to binary string
  const binary = decimalCandles.toString(2);

  // Step 2: Count '1's
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      count++;
    }
  }

  // Step 3: Return the count
  return count;
}
// Tests:
console.log(banquetBinaryCandles1(5)); // 2 (binary 101)
console.log(banquetBinaryCandles1(10)); // 2 (binary 1010)
console.log(banquetBinaryCandles1(0));

// Solution via functional approach:
function banquetBinaryCandles2(decimalCandles) {
  return decimalCandles
    .toString(2)
    .split("")
    .filter((ch) => ch === "1").length;
}
console.log(banquetBinaryCandles2(3)); // 2 (binary 101)
console.log(banquetBinaryCandles2(15)); // 4 (binary 1111)

// =================================== 12 ==================================
/*
  Create a function named reverseRainforestMessage that receives message
  and words as its parameters. This function formats a message by inserting
  words from an array in reverse order into placeholders in the message. The
  message is a string with placeholders {}. The words is an array of strings
  to be inserted into the message in reverse order. Replace the placeholders
  in the message with words from the words array, starting from the last word.
  The first placeholder {0} is replaced with the last word, {1} with the 
  second-to-last word, and so on.
  Example: If message is "In the {0} rainforest, I found a {1} bottle containing
  a {2}!" and words is ["lush", "small", "mysterious"], the output should be 
  "In the mysterious rainforest, I found a small bottle containing a lush!".
  Parameters:
  - message (string): A string with placeholders {}.
  - words (array): An array of strings to be inserted into the message in 
    reverse order.
  The function returns a string with placeholders replaced by words from the
   words array in reverse order.
*/
// Solution:
function reverseRainforestMessage1(message, words) {
  // Step 1: Reverse the words array
  const reversedWords = words.slice().reverse();

  // Step 2: Replace placeholders with reversed words
  let result = message;
  for (let i = 0; i < reversedWords.length; i++) {
    const placeholder = `{${i}}`;
    result = result.replace(placeholder, reversedWords[i]);
  }

  // Step 3: Return the formatted message
  return result;
}
// Tests:
console.log(
  reverseRainforestMessage1(
    "In the {0} rainforest, I found a {1} bottle containing a {2}!",
    ["lush", "small", "mysterious"],
  ),
);
// In the mysterious rainforest, I found a small bottle containing a lush!
console.log(
  reverseRainforestMessage1("The {0} {1} jumped over the {2} moon.", [
    "quick",
    "brown",
    "lazy",
  ]),
);
// The lazy brown jumped over the quick moon.
console.log(
  reverseRainforestMessage1("{0} sells {1} shells by the {2} shore.", [
    "She",
    "seashells",
    "seashore",
  ]),
);
// seashore sells seashells shells by the She shore.

// Solution via functional one‑liner version
function reverseRainforestMessage2(message, words) {
  return words
    .slice()
    .reverse()
    .reduce((acc, word, i) => acc.replace(`{${i}}`, word), message);
}
console.log(
  reverseRainforestMessage2("The {0} {1} was {2} in the dense foliage.", [
    "colorful",
    "bird",
    "hidden",
  ]),
);

// =================================== 13 ==================================
/*
  Create a function named analyzeGardenSoil that receives soilSamples as
  its parameter. This function analyzes the pH levels of soil samples and 
  provides insights about the soil's acidity and alkalinity. Each soil sample
  is represented by an integer:
  - 7 indicates neutral soil
  - Less than 7 indicates acidic soil
  - Greater than 7 indicates alkaline soil
  - Return the results as an array in the format:
      [averagePH, acidicCount, alkalineCount]
    Where:
  - averagePH: Average pH level, rounded to 2 decimal places.
  - acidicCount: Count of acidic soil samples (pH less than 7).
  - alkalineCount: Count of alkaline soil samples (pH greater than 7).
  Parameter: soilSamples (integer-array): Array of integers representing 
  the pH level of each soil sample.
  The function returns an array containing averagePH, acidicCount, and 
  alkalineCount.
*/
// Solution:
/* We loop through all samples, summing them and counting acidic (<7) and alkaline (>7).
   Neutral (==7) is ignored in counts but included in average.
   Average is rounded to 2 decimals with .toFixed(2) and converted back to a number.
*/
function analyzeGardenSoil1(soilSamples) {
  let acidicCount = 0;
  let alkalineCount = 0;
  let sum = 0;

  for (let i = 0; i < soilSamples.length; i++) {
    const ph = soilSamples[i];
    sum += ph;
    if (ph < 7) {
      acidicCount++;
    } else if (ph > 7) {
      alkalineCount++;
    }
  }

  const averagePH =
    soilSamples.length > 0
      ? parseFloat((sum / soilSamples.length).toFixed(2))
      : NaN;

  return [averagePH, acidicCount, alkalineCount];
}
// Tests:
console.log(analyzeGardenSoil1([]));
// [ NaN, 0, 0 ]
console.log(analyzeGardenSoil1([7]));
// [ 7, 0, 0 ]
console.log(analyzeGardenSoil1([5, 8]));
// [ 6.5, 1, 1 ]
console.log(analyzeGardenSoil1([6, 6, 7, 8]));
// [ 6.75, 2, 1 ]
console.log(analyzeGardenSoil1([1, 3, 5, 6, 7, 8, 9, 11]));
// [ 6.25, 4, 3 ]

// Solution via functional approach using reduce:
function analyzeGardenSoil2(soilSamples) {
  const { sum, acidic, alkaline } = soilSamples.reduce(
    (acc, ph) => ({
      sum: acc.sum + ph,
      acidic: acc.acidic + (ph < 7 ? 1 : 0),
      alkaline: acc.alkaline + (ph > 7 ? 1 : 0),
    }),
    { sum: 0, acidic: 0, alkaline: 0 },
  );

  return [
    soilSamples.length > 0
      ? parseFloat((sum / soilSamples.length).toFixed(2))
      : NaN,
    acidic,
    alkaline,
  ];
}
console.log(analyzeGardenSoil2([9, 7]));
// [8, 0, 1]
console.log(analyzeGardenSoil2([4, 6, 4, 6]));
// [5, 4, 0]

// =================================== 14 ==================================
/*
  Create a function named organizePhotos that receives tags and photos as
  its parameters. This function organizes nature photos by their tags ('forest', 
  'lake', or 'pond'). The function should create a dictionary where the keys
  are the unique tags and the values are arrays containing the corresponding
  photo names. Parameters:
  - tags (array): An array of strings representing the tags for the photos.
  - photos (array): An array of strings representing the photo names. The photo
    name at index i corresponds to the tag at index i in the tags array.
  The function returns an object (dictionary) where the keys are the unique
  tags and the values are arrays of photo names associated with each tag.
 */
// Solution:
function organizePhotos1(tags, photos) {
  const result = {};

  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const photo = photos[i];

    // If the tag doesn’t exist yet, initialize it as an empty array
    if (!result[tag]) {
      result[tag] = [];
    }

    // Push the photo into the correct tag bucket
    result[tag].push(photo);
  }

  return result;
}
// Tests:
console.log(organizePhotos1(["forest"], ["photo1"])); // { forest: [ "photo1" ] }
console.log(organizePhotos1(["pond"], ["photo3"])); // { pond: [ "photo3" ] }
console.log(
  organizePhotos1(["forest", "lake", "pond"], ["photo1", "photo2", "photo3"]),
); // { forest: [ "photo1" ], lake: [ "photo2" ], pond: [ "photo3" ] }

// Solution via functional approach using reduce:
function organizePhotos2(tags, photos) {
  return tags.reduce((acc, tag, i) => {
    (acc[tag] = acc[tag] || []).push(photos[i]);
    return acc;
  }, {});
}
console.log(organizePhotos2(["lake"], ["photo2"])); // { lake: [ "photo2" ] }

// =================================== 15 ==================================
/*
  This function decodes a wine collector's secret message, which is a mix
  of reversed words and binary-encoded text.
  The message contains reversed words and binary numbers prefixed with "#".
  To decode:
  - Reverse any reversed words.
  - Convert binary numbers to decimal.
  - Convert decimal numbers to ASCII characters.
  Example: Input "yenw yessalm: #01001000 #01100101 #01101100 
  #01101100 #01101111" 
  should output "wine malmsey Hello".
  Parameter:
  - text (string): A string with reversed words and binary-coded numbers prefixed with "#".
  The function returns a string representing the decoded message.
*/
// Solution:
/*
  - Splitting by spaces gives us each word or binary token.
  - If the token starts with #, we parse the binary string into a decimal
    and then into its ASCII character.
  - Otherwise, we reverse the word.
  - Finally, we join everything back with spaces.
*/
function decodeWineMessage1(text) {
  // Step 1: Split the message into tokens
  const tokens = text.split(" ");

  // Step 2: Process each token
  const decoded = tokens.map((token) => {
    if (token.startsWith("#")) {
      // Binary case: strip "#" and convert to ASCII
      const binary = token.slice(1);
      const decimal = parseInt(binary, 2);
      return String.fromCharCode(decimal);
    } else {
      // Word case: reverse the word
      return token.split("").reverse().join("");
    }
  });

  // Step 3: Join back into a string
  return decoded.join(" ");
}
// Tests:
console.log(
  decodeWineMessage1(
    "yenw yessalm #01001000 #01100101 #01101100 #01101100 #01101111",
  ),
);
// wney mlassey H e l l o
console.log(
  decodeWineMessage1("selttab #01010011 #01110100 #01101111 #01110000"),
);
// battles S t o p
console.log(
  decodeWineMessage1("#01000001 #01101100 #01101100 #01101111 #01111001"),
);
// A l l o y

// Solution via functional one‑liner version  using map + join directly
function decodeWineMessage2(text) {
  return text
    .split(" ")
    .map((token) =>
      token.startsWith("#")
        ? String.fromCharCode(parseInt(token.slice(1), 2))
        : token.split("").reverse().join(""),
    )
    .join(" ");
}
console.log(
  decodeWineMessage2(
    "#01000010 #01101111 #01110010 #01100100 #01100101 #01100001 #01110101 #01111000",
  ),
); // B o r d e a u x

// =================================== 16 ==================================
/*
  Створіть функцію balancedContrast, яка отримує arr, condition та str як 
  параметри. Ця функція маніпулює заданим масивом та рядком, щоб створити
  збалансований контраст на основі певних умов.
  Маніпуляції з масивами:
  - Якщо елемент більший за порогове значення, змінити його позицію
    в масиві на протилежну;
  - Якщо елемент менший або дорівнює пороговому значенню, зберегти 
    його позицію незмінною.
  Маніпуляції з рядками:
  - Змінити регістр усього рядка.
  - Для кожного символу в оригінальному рядку:
    -Якщо символ знаходиться в першій половині алфавіту (від 'a' до 'm'), 
    перетворити відповідний символ у зворотному рядку на верхній регістр;
    -Якщо символ знаходиться в другій половині алфавіту (від 'n' до 'z'),
    перетворити відповідний символ у зворотному рядку на нижній регістр.
  Об'єднайте оброблений масив і рядок в об'єкт і поверніть його.
  Параметри:
  - arr (масив): масив чисел;
  - condition (число): порогове значення для маніпулювання масивом;
  - str (рядок): рядок, що містить малі літери та пробіли.
  Повертає:
  - array: маніпульований масив;
  - string: маніпульований рядок.
*/
// Solution:
function balancedContrast(arr, condition, str) {
  // --- Маніпуляція з масивом ---
  const manipulatedArray = arr.slice(); // створюємо копію для уникнення мутації оригіналу
  // Проходимо по масиву і змінюємо позиції елементів, які більші за порогове значення (condition)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > condition) {
      // arr.length - 1 це останній індекс масиву, а віднімання "i" дасть дзеркальний індекс
      const j = arr.length - 1 - i; // знаходимо протилежну позицію для символу
      manipulatedArray[i] = arr[j]; // заміна символу на протилежний
    }
  }

  // --- Маніпуляція з рядком ---
  const reversed = str.split("").reverse(); // створюємо копію рядка і розвертаємо її
  // Проходимо по кожному символу переробленого рядка і змінюємо регістр відповідного символу
  const resultChars = reversed.map((ch, i) => {
    const originalChar = str[i]; // беремо відповідний символ початкового рядка
    const code = originalChar.charCodeAt(0); // отримуємо ASCII-код символу початкового рядка

    if (code >= 97 && code <= 109) {
      // символи в діапазоні a–m
      return ch.toUpperCase();
    } else if (code >= 110 && code <= 122) {
      // символи в діапазоні n–z
      return ch.toLowerCase();
    } else {
      return ch; // символ не змінений (наприклад, пробіл)
    }
  });

  const manipulatedString = resultChars.join(""); // конвертуємо масив назад у рядок

  return {
    array: manipulatedArray,
    string: manipulatedString,
  };
}
// Tests:
console.log(balancedContrast([1, 2, 3], 2, "abc"));
// { array: [ 1, 2, 1 ], string: "CBA" }
console.log(balancedContrast([10, 20, 30, 40], 25, "hello world"));
// { array: [ 10, 20, 20, 10 ], string: "DLROw ollEH" }
console.log(
  balancedContrast([5, 15, 25, 35], 20, "zyxwvutsrqponmlkjihgfedcba"),
); // { array: [ 5, 15, 15, 5 ], string: "abcdefghijklmNOPQRSTUVWXYZ" }

// =================================== 17 ==================================
/*
  Create a function named arrangeFlowerbed that receives flowerbed and 
  newPlants as parameters. This function arranges new plants in the flowerbed
  ensuring no two plants are adjacent. The flowerbed array represents a row
  where 0 is an empty slot and 1 is a slot with a plant. Modify the flowerbed
  array by planting the given number of newPlants in empty slots (changing
  0 to 1) while ensuring no two plants are next to each other.
  Start planting from the beginning of the flowerbed array. If there are not
  enough empty slots to accommodate all newPlants while maintaining the 
  non-adjacency rule, stop planting and return the modified flowerbed array.
  Parameters:
  - flowerbed (integer-array): An array representing the flowerbed, where 
    0 indicates an empty slot and 1 indicates a slot with a plant.
  - newPlants (integer): The number of new plants to be planted in the flowerbed.
  The function returns the modified flowerbed array after planting the new plants
  while ensuring no adjacent plants.
*/
// Solution:
function arrangeFlowerbed1(flowerbed, newPlants) {
  let planted = 0; // Counter for how many new plants have been planted
  // Loop through the flowerbed array
  for (let i = 0; i < flowerbed.length; i++) {
    // Check if the current slot is empty
    if (flowerbed[i] === 0) {
      const leftEmpty = i === 0 || flowerbed[i - 1] === 0; // Check left neighbor
      const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0; // Check right neighbor
      // If both neighbors are empty, we can plant here
      if (leftEmpty && rightEmpty) {
        flowerbed[i] = 1; // Plant a new plant here
        planted++; // Increment the planted counter
        if (planted === newPlants) break; // Stop if we've planted all new plants
      }
    }
  }

  return flowerbed;
}
// Tests:
console.log(arrangeFlowerbed1([0], 1)); // [1]
console.log(arrangeFlowerbed1([0, 0, 0], 1)); // [1, 0, 0]
console.log(arrangeFlowerbed1([0, 0, 0], 2)); // [1, 0, 1]
console.log(arrangeFlowerbed1([1, 0, 0, 0, 1], 1)); // [1, 0, 1, 0, 1]

// Solution via functional approach using map:
function arrangeFlowerbed2(flowerbed, newPlants) {
  let planted = 0;
  return flowerbed.map((slot, i, arr) => {
    if (
      planted < newPlants &&
      slot === 0 &&
      (i === 0 || arr[i - 1] === 0) &&
      (i === arr.length - 1 || arr[i + 1] === 0)
    ) {
      planted++;
      return 1;
    }
    return slot;
  });
}
console.log(arrangeFlowerbed2([0, 1, 0, 0], 2)); // [0, 1, 0, 1]

// =================================== 18 ==================================
/*
  Create a function named calculateEventCost that receives services and 
  attendees as its parameters. This function calculates the total cost of 
  an event based on the selected services and the number of attendees.
  Each service has a base cost and a per attendee cost:
  -"catering": base cost = $500, per attendee = $15
  -"sound": base cost = $300, per attendee = $5
  -"decoration": base cost = $250, per attendee = $10
  -"photography": base cost = $400, per attendee = $8
  To calculate the total cost:
  1. Initialize totalCost to 0.
  2. Loop through each service in services:
  - If "catering", add $500 + ($15 * attendees) to totalCost.
  - If "sound", add $300 + ($5 * attendees) to totalCost.
  - If "decoration", add $250 + ($10 * attendees) to totalCost.
  - If "photography", add $400 + ($8 * attendees) to totalCost.
  3. Return totalCost.
  Parameters:
  - services (array): An array of strings representing the selected services: 
  "catering", "sound", "decoration", "photography".
  - attendees (number): The number of people attending the event.
  The function returns the total estimated event cost as a number.
 */
// Solution:
/*
  We loop through each selected service.
  Add its base cost plus per‑attendee cost × attendees.
  Return the accumulated total.
*/
function calculateEventCost1(services, attendees) {
  let totalCost = 0;

  for (let service of services) {
    if (service === "catering") {
      totalCost += 500 + 15 * attendees;
    } else if (service === "sound") {
      totalCost += 300 + 5 * attendees;
    } else if (service === "decoration") {
      totalCost += 250 + 10 * attendees;
    } else if (service === "photography") {
      totalCost += 400 + 8 * attendees;
    }
  }

  return totalCost;
}
// Tests:
console.log(calculateEventCost1(["catering"], 10)); // 650
console.log(calculateEventCost1(["sound"], 20)); // 400
console.log(calculateEventCost1(["catering", "sound"], 50)); // 1800

// Solution via functional approach using reduce:
function calculateEventCost2(services, attendees) {
  const pricing = {
    catering: { base: 500, perAttendee: 15 },
    sound: { base: 300, perAttendee: 5 },
    decoration: { base: 250, perAttendee: 10 },
    photography: { base: 400, perAttendee: 8 },
  };

  return services.reduce(
    (total, service) =>
      total + pricing[service].base + pricing[service].perAttendee * attendees,
    0,
  );
}
console.log(calculateEventCost1(["catering", "decoration", "photography"], 35)); // 2305

// =================================== 19 ==================================
/*
  Create a function named evaluateExpression that receives expression as
  its parameter. This function evaluates a mathematical expression involving
  expert numbers, operations, and arithmetics.
  The function should handle:
  - Expert numbers: e, pi, phi (golden ratio);
  - Expert operations: sin, cos, tan, log (natural logarithm), xor (bitwise
    XOR), gcd (greatest common divisor);
  - Expert arithmetics: fractions, decimals, percentages, exponents, roots.
  The expression will be provided as a string, and the function should parse
  and evaluate it according to the standard order of operations (PEMDAS).
  For the gcd operation, assume it will always have two integer arguments. For
  the xor operation, assume it will always have two integer arguments and perform
  a bitwise XOR operation.
  The function should return the evaluated result as a float. If the expression
  is invalid or cannot be evaluated, the function should return NaN.
  Parameter:
  - expression (string): The mathematical expression to evaluate, provided as
  a string.
  The function returns a float representing the evaluated result of the expression.
  If the expression is invalid or cannot be evaluated, the function returns NaN.
*/
// Solution:
function evaluateExpression(expression) {
  const pi = Math.PI;
  const e = Math.E;
  const phi = (1 + Math.sqrt(5)) / 2;

  function sin(x) {
    return Math.sin(x);
  }

  function cos(x) {
    return Math.cos(x);
  }

  function tan(x) {
    return Math.tan(x);
  }

  function log(x) {
    return Math.log(x);
  }

  function xor(a, b) {
    return a ^ b;
  }

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  try {
    const result = eval(expression);
    return isNaN(result) ? NaN : result;
  } catch (error) {
    return NaN;
  }
}
// Tests:
console.log(evaluateExpression("2")); // 2
console.log(evaluateExpression("sin(pi/2)")); // 1
console.log(evaluateExpression("log(e)")); // 1
console.log(evaluateExpression("gcd(12, 18)")); // 6
console.log(evaluateExpression("xor(3, 5)")); // 6
console.log(evaluateExpression("2^3 + 4/2")); // 7
console.log(evaluateExpression("sin(pi/6) + cos(pi/3) + tan(pi/4)")); // 2
console.log(evaluateExpression("(3/4) * 100 + 2^3 - sqrt(16)")); // NaN

// =================================== 20 ==================================
/*
  Create a function named organizePicnicBasket that receives items and query
  as its parameters. This function organizes a virtual picnic basket by processing
  each query on the corresponding items in the items array. It keeps track of 
  the counts of each picnic item after multiple increments and decrements. If a 
  decrement operation results in a negative count, it defaults to zero.
  Parameters:
  - items (array): An array of strings representing picnic items.
  - query (array): An array of integers representing the query type:
    1: Increment the count of the next string item.
    -1: Decrement the count of the next string item.
  The function returns an object with each distinct item from the items array as 
  keys and their final counts as values.
*/
// Solution:
function organizePicnicBasket(items, query) {
  const basket = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const action = query[i];

    // Initialize count if not present
    if (!(item in basket)) {
      basket[item] = 0;
    }

    if (action === 1) {
      basket[item] += 1;
    } else if (action === -1) {
      basket[item] = Math.max(0, basket[item] - 1);
      /*So if the count was already 0, subtracting would give -1.
      But Math.max(0, -1) returns 0, ensuring the count never goes below zero.*/
    }
  }

  return basket;
}
// Tests:
console.log(organizePicnicBasket(["apple", "banana"], [1, 1]));
// { apple: 1, banana: 1 }
console.log(organizePicnicBasket(["sandwich", "juice", "cookie"], [1, 1, 1]));
// { sandwich: 1, juice: 1, cookie: 1 }
console.log(organizePicnicBasket(["sandwich", "apple", "cookie"], [1, 1, -1]));
// { sandwich: 1, apple: 1, cookie: 0 }

// =================================== 21 ==================================
/*
  Create a function named findScepter that receives inscription as its parameter.
  This function deciphers an inscription to determine the location of a lost
  scepter within a temple. The inscription contains the words "day" and "night".
  Your task is to count the occurrences of each word:
  - If "day" appears more times, the scepter is in the "West Wing".
  - If "night" appears more times, the scepter is in the "East Wing".
  - If they appear equally, the scepter is in the "Central Chamber".
  Steps to solve:
  - Split the inscription string into an array of words.
  - Initialize counters for "day" and "night".
  - Loop through the array, incrementing the counters for "day" and "night".
  - Compare the counts and return the location string.
  Parameter: inscription (string): The text containing "day" and "night".
  The function returns a string indicating the scepter's location: "West Wing",
  "East Wing", or "Central Chamber".
*/
// Solution:
function findScepter(inscription) {
  const words = inscription.split(" ");
  let dayCount = 0;
  let nightCount = 0;

  for (let word of words) {
    if (word === "day") {
      dayCount++;
    } else if (word === "night") {
      nightCount++;
    }
  }

  if (dayCount > nightCount) {
    return "West Wing";
  } else if (nightCount > dayCount) {
    return "East Wing";
  } else {
    return "Central Chamber";
  }
}
// Tests:
console.log(findScepter("day"));
// West Wing
console.log(findScepter("night"));
// East Wing
console.log(findScepter("day day night"));
// West Wing
console.log(findScepter("night night day"));
// East Wing

// =================================== 22 ==================================
/*
  Create a function named gymProgressTracker that receives day1Exercises and
  day2Exercises as its parameters. This function compares your workout routines
  on two different days and provides feedback on your progress. Each day's 
  workout routine is represented as an array of strings, where each string is
  the name of an exercise you performed that day. The gymProgressTracker function
  should compare the two arrays day1Exercises and day2Exercises. 
  - If the arrays contain the exact same exercises in the same order, it means
    you followed the same workout routine on both days. In this case, the function
    should return the string "You did the same workout on both days!".
  - If the arrays have any differences in exercises or order, it indicates that
    you varied your workout routine between the two days. In this case, the function
    should return the string "You mixed it up today!".
  Parameters:
  - day1Exercises (array): An array of strings representing the exercises you 
    performed on Day 1.
  - day2Exercises (array): An array of strings representing the exercises you 
    performed on Day 2.
  The function returns a string indicating whether you followed the same workout 
  routine on both days or mixed it up.
*/
// Solution:
function gymProgressTracker1(day1Exercises, day2Exercises) {
  // check lengths
  if (day1Exercises.length !== day2Exercises.length) {
    return "You mixed it up today!";
  }

  // compare elements looping through both arrays at the same time
  for (let i = 0; i < day1Exercises.length; i++) {
    if (day1Exercises[i] !== day2Exercises[i]) {
      return "You mixed it up today!";
    }
  }

  // if all match
  return "You did the same workout on both days!";
}
// Tests:
console.log(
  gymProgressTracker1(["squats", "bench press"], ["squats", "bench press"]),
); // You did the same workout on both days!
console.log(
  gymProgressTracker1(["squats", "bench press"], ["bench press", "squats"]),
); // You mixed it up today!

// Solution via functional approach using JSON.stringify for deep comparison:
function gymProgressTracker2(day1Exercises, day2Exercises) {
  if (day1Exercises.length !== day2Exercises.length) {
    return "You mixed it up today!";
  }

  if (JSON.stringify(day1Exercises) === JSON.stringify(day2Exercises)) {
    return "You did the same workout on both days!";
  } else {
    return "You mixed it up today!";
  }
}
console.log(
  gymProgressTracker2(
    ["squats", "bench press", "deadlift"],
    ["bench press", "pull-ups", "planks"],
  ),
); // You mixed it up today!

// =================================== 23 ==================================
/*
  Створіть функцію tasselBaseConverter, яка отримує tasselColor та
  number як параметри. Ця функція перетворює десяткове число в іншу систему
  числення на основі кольору закладки:
  - "red": Двійкова (основа 2)
  - "blue": Шістнадцяткова (основа 16)
  - "green": Вісімкова (основа 8)
  Параметри:
  - tasselColor (рядок): Колір закладки, що визначає цільову систему числення.
    Допустимі кольори: "red", "blue", "green".
  - number (рядок): Десяткове число для перетворення в діапазоні від 0 до 10 000 (включно).
  Функція повертає перетворене число як рядок в основі що відповідає tasselColor.
*/
// Solution:
function tasselBaseConverter(tasselColor, number) {
  const decimal = parseInt(number, 10); // конвертуємо в десяткове число

  let base = 10; // основа за замовчуванням, але ми її змінюємо залежно від кольору закладки
  // визначаємо основу по кольору закладки
  if (tasselColor === "red") {
    // для двійкової системи числення
    base = 2;
  } else if (tasselColor === "blue") {
    // для шістнадцяткової системи числення
    base = 16;
  } else if (tasselColor === "green") {
    // для вісімкової системи числення
    base = 8;
  }

  let result = decimal.toString(base); // конвертуємо в потрібну систему числення маючи основу

  // для шістнадцяткової системи числення, конвертуємо літери в верхній регістр як прийнято в шістнадцятковому форматі
  if (base === 16) {
    result = result.toUpperCase();
  }

  return result; // повертаємо результат як рядок
}
// Tests:
console.log(tasselBaseConverter("red", 0)); // "0"
console.log(tasselBaseConverter("red", 1)); // "1"
console.log(tasselBaseConverter("red", 10)); // "1010"
console.log(tasselBaseConverter("red", 255)); // "11111111"

console.log(tasselBaseConverter("blue", 0)); // "0"
console.log(tasselBaseConverter("blue", 255)); // "FF"

console.log(tasselBaseConverter("green", 64)); // "100"

// Solution via functional approach using a mapping object:
/*
  Сторюємо об'єкт відображення кольорів закладки із визначеними основами 
  числення типу: const baseMap = { red: 2, blue: 16, green: 8 };
  Будемо використовувати колір закладок для безпосереднього пошуку основи
  числення і конвертуємо десяткове число за допомогою .toString(base).
*/
function tasselBaseConverter2(tasselColor, number) {
  const baseMap = { red: 2, blue: 16, green: 8 }; // об'єкт для відображення кольорів закладки на основі числення
  const decimal = parseInt(number, 10); // конвертуємо в десяткове число

  const base = baseMap[tasselColor]; // отримуємо основу числення по кольору закладки
  let result = decimal.toString(base); // конвертуємо в потрібну систему числення

  // конвертуємо у верхній регістр для шістнадцяткової системи числення
  if (base === 16) {
    result = result.toUpperCase();
  }

  return result;
}
console.log(tasselBaseConverter2("red", 255)); // "11111111"
console.log(tasselBaseConverter2("blue", 255)); // "FF"
console.log(tasselBaseConverter2("green", 64)); // "100"

// =================================== 24 ==================================
/*
  Create a program that helps organize a dairy stand by handling three tasks:
  update product labels by replacing all occurrences of an old term with a new
  one, count how many pairs of item weights sum to a target weight for bundle
  deals, and create an alternating display sign by interleaving two product
  names character by character.
  Your program should read the label text and replacement terms, the list of
  weights with a target, and the two product names, then output the updated label,
  the count of valid pairs, and the interleaved sign.
*/
// Solution:
// Read the label text and replacement terms
const labelText = "Premium ice cream selection";
const oldTerm = "ice";
const newTerm = "frozen";

// Read the weights and target for bundle deals
const weightsLine = [4, 6, 8, 2, 10, 12];
const target = 16;

// Read the two product names for the display sign
const product1 = "Strawberry";
const product2 = "Vanilla";

// Replace all occurrences of oldTerm with newTerm in labelText
let updatedLabel = labelText
  .split(" ")
  .map((word) =>
    word.toLowerCase() === oldTerm.toLowerCase() ? newTerm : word,
  )
  .join(" ");

// Count pairs of weights that sum to the target
let pairCount = 0;
// We use a nested loop to check all unique pairs of weights
for (let i = 0; i < weightsLine.length; i++) {
  // Loop through each weight
  for (let j = i + 1; j < weightsLine.length; j++) {
    // Loop through the weights that come after the current weight to avoid double counting
    if (weightsLine[i] + weightsLine[j] === target) {
      // Check if the sum of the pair equals the target
      pairCount++; // If it does, increment the pair count
    }
  }
}

// Interleave product1 and product2 character by character
let interleavedSign = "";
// We loop up to the length of the longer product name to ensure we include all characters
const maxLen = Math.max(product1.length, product2.length); // Loop through each index up to the maximum length of the two product names
for (let i = 0; i < maxLen; i++) {
  // Check if the current index is within the bounds of product1 and append the character if it is
  if (i < product1.length) interleavedSign += product1[i]; // Check if the current index is within the bounds of product2 and append the character if it is
  if (i < product2.length) interleavedSign += product2[i]; // This way, if one product name is shorter, we simply skip adding characters from it once we go past its length
}
// Tests:
console.log(updatedLabel);
console.log(pairCount);
console.log(interleavedSign);

// =================================== 24 ==================================
/*
  Create a program that helps coordinate a family reunion by calculating travel
  logistics and updating the guest list. First, read the travel distances (in 
  miles) for all family members and calculate the range — the difference between
  the farthest and closest traveler. This shows how spread out everyone is. Then,
  update the guest list by replacing the last occurrence of a family member's
  name with their plus-one's name (someone's bringing a guest!). Print the distance
  range on one line, then the updated guest list on the next line.
*/
// Solution:
// Read the travel distances (space-separated numbers on first line)
const distances = [10, 20, 30];

// Read the original guest list
const guestList = ["Alice", "Bob", "Charlie"];

// Name to replace
const originalName = "Bob";

// Plus-one’s name
const plusOneName = "David";

// TODO: Calculate the range (difference between max and min distances)
// Hint: Find the maximum distance and minimum distance, then subtract
const maxDistance = Math.max(...distances);
const minDistance = Math.min(...distances);
const range = maxDistance - minDistance;

// TODO: Replace the LAST occurrence of originalName with plusOneName in the guest list
// Hint: You might want to find the last index of the name first
const lastIndex = guestList.lastIndexOf(originalName);
if (lastIndex !== -1) {
  // If the name is found, replace it with the plus-one's name
  guestList[lastIndex] = plusOneName;
}
// Print the distance range
console.log(range);
// Print the updated guest list (space-separated)
console.log(guestList.join(" "));

// =================================== 25 ==================================
/*
  Create a program that helps organize table assignments for the family reunion.
  You'll receive a hexadecimal color code representing a table, followed by a
  list of family member IDs assigned to that table.
  First, convert the hex color code to its decimal equivalent and print it as 
  the table number. Then, check if any family members were accidentally assigned
  multiple times to this table and print "Duplicates found" or "No duplicates".
*/
// Solution:
// Read the hex color code (table identifier)
const hexColor = "#7B";

// Read the family member IDs
const familyMembers = [701, 702, 703, 702, 704, 705];

// TODO: Convert hex color code to decimal and print as table number
// Hint: Remove the '#' if present, then convert from base 16 to base 10
const tableNumber = parseInt(hexColor.replace("#", ""), 16);
console.log(tableNumber);

// TODO: Check if any family member IDs appear more than once
// Print "Duplicates found" or "No duplicates"
const hasDuplicate = new Set(familyMembers).size !== familyMembers.length;
console.log(hasDuplicate ? "Duplicates found" : "No duplicates");

//================================== 26 ==================================
/*
  Write a function checkOfficeSetup that takes hasInk, hasPaper, extraSupplies
  and returns the next setup step needed. The function determines what action
  is needed to complete your home office printer setup based on current supplies.
  Conditions:
  - If no ink: return "Refill ink";
  - If no paper: return "Load paper";
  - If extra supplies > 5: return "Organize supplies";
  - Otherwise: return "All set!".
  Parameters:
  - hasInk (boolean): Whether printer has ink;
  - hasPaper (boolean): Whether printer has paper;
  - extraSupplies (number): Count of additional office supplies.
  Returns: String indicating the next setup step needed. Format: "Refill ink",
  "Load paper", "Organize supplies", or "All set!"
*/
// Solution via if-else statements:
function checkOfficeSetup1(hasInk, hasPaper, extraSupplies) {
  if (!hasInk) {
    return "Refill ink";
  } else if (!hasPaper) {
    return "Load paper";
  } else if (extraSupplies > 5) {
    return "Organize supplies";
  } else {
    return "All set!";
  }
}
// Tests:
console.log(checkOfficeSetup1(false, false, 0)); // "Refill ink"
console.log(checkOfficeSetup1(false, true, 3)); // "Refill ink"
console.log(checkOfficeSetup1(true, false, 2)); // "Load paper"
console.log(checkOfficeSetup1(true, true, 4)); // "All set!"
console.log(checkOfficeSetup1(true, true, 6)); // "Organize supplies"

// Solution via ternary chain:
const checkOfficeSetup2 = (hasInk, hasPaper, extraSupplies) =>
  !hasInk
    ? "Refill ink"
    : !hasPaper
      ? "Load paper"
      : extraSupplies > 5
        ? "Organize supplies"
        : "All set!";
// Tests:
console.log(checkOfficeSetup2(false, true, 0)); // "Refill ink"
console.log(checkOfficeSetup2(true, false, 0)); // "Load paper"
console.log(checkOfficeSetup2(true, true, 10)); // "Organize supplies"
console.log(checkOfficeSetup2(true, true, 3)); // "All set!"

// =================================== 27 ==================================
/*
  Create a program that helps organize a baby's nursery with three quick calculations.
  First, calculate the average daily screen time from a weekly total (round down
  to the nearest whole number). Next, calculate the total storage volume needed
  for N cube-shaped bins, where each bin's size equals its number (bin 1 is 1³, bin 2 
  is 2³, and so on). Finally, check if a wallpaper pattern string alternates
  perfectly between exactly two different characters. Print true if it does, false
  otherwise. Print each result on its own line. 
*/
// Solution:
// Read the inputs
const weeklyScreenTime = 70; // Total weekly screen time in minutes
const numberOfBins = 3; // Number of cube-shaped bins
const wallpaperPattern = "ababab"; // Wallpaper pattern string

// Calculate average daily screen time (round down)
const avgDailyScreenTime = Math.floor(weeklyScreenTime / 7);
// Divide weeklyScreenTime by 7 and round down using Math.floor

// Calculate total storage volume for all bins
// Remember: bin 1 = 1³, bin 2 = 2³, bin 3 = 3³, etc.
let totalVolume = 0; // Your calculation here
// calculate the total volume by summing the cubes of the bin numbers
for (let i = 1; i <= numberOfBins; i++) {
  totalVolume += Math.pow(i, 3); // Add the cube of the current bin number to totalVolume
}

// Check if wallpaper pattern alternates between exactly two different characters
let isAlternating = false;
// Collect distinct characters
let distinctChars = new Set(wallpaperPattern);
// Only proceed if there are exactly two distinct characters
if (distinctChars.size === 2) {
  let alternating = true;
  for (let i = 1; i < wallpaperPattern.length; i++) {
    if (wallpaperPattern[i] === wallpaperPattern[i - 1]) {
      alternating = false;
      break;
    }
  }
  // If alternating is true, override the initial false
  if (alternating) {
    isAlternating = true;
  }
}
/* Alternative
  let isAlternating = new Set(wallpaperPattern).size === 2 &&
  [...wallpaperPattern].every((ch, i, arr) => i === 0 || ch !== arr[i - 1]);
*/
// Print results
console.log(avgDailyScreenTime);
console.log(totalVolume);
console.log(isAlternating);

// =================================== 28 ==================================
/*
  Write a function generateArtClassRoster that takes participants and returns
  a formatted attendance roster with painting style preferences.
  The function processes participant data strings to count students by their
  preferred painting techniques and generates a summary report for the afternoon
  art class session.
  Logic:
  1. Parse each participant string to extract name and preferred painting style
  2. Use loops to count students for each painting technique
  3. Use increment operators to track style preferences
  4. Format the final roster with student counts per technique
  Parameters:
  - participants (array): Array of participant data strings in format "Name:Style"
  Returns: Formatted roster string showing technique counts. Format: Art Class 
  Roster: Watercolor: 2 students Oil Painting: 1 student Acrylic: 3 students
*/
// Solution:
function generateArtClassRoster1(participants) {
  let watercolorCount = 0;
  let oilPaintingCount = 0;
  let acrylicCount = 0;

  // Loop through each participant string
  for (let entry of participants) {
    // Split into [name, style]
    let [name, style] = entry.split(":");

    if (style === "Watercolor") {
      watercolorCount++;
    } else if (style === "Oil Painting") {
      oilPaintingCount++;
    } else if (style === "Acrylic") {
      acrylicCount++;
    }
  }

  // Build the roster string for Watercolor, Oil Painting, and Acrylic only:
  let roster = "Art Class Roster:\n";
  if (watercolorCount > 0) {
    roster += `Watercolor: ${watercolorCount} ${watercolorCount === 1 ? "student" : "students"}\n`;
  }
  if (oilPaintingCount > 0) {
    roster += `Oil Painting: ${oilPaintingCount} ${oilPaintingCount === 1 ? "student" : "students"}\n`;
  }
  if (acrylicCount > 0) {
    roster += `Acrylic: ${acrylicCount} ${acrylicCount === 1 ? "student" : "students"}\n`;
  }

  return roster.trim(); // remove trailing newline
}
// Tests:
console.log(generateArtClassRoster1(["Alice:Watercolor"]));
// Art Class Roster:
// Watercolor: 1 student

console.log(
  generateArtClassRoster1(["Bob:Oil Painting", "Carol:Oil Painting"]),
);
// Art Class Roster:
// Oil Painting: 2 students

console.log(
  generateArtClassRoster1([
    "Alice:Watercolor",
    "Bob:Oil Painting",
    "Carol:Acrylic",
  ]),
);
// Art Class Roster:
// Watercolor: 1 student
// Oil Painting: 1 student
// Acrylic: 1 student

console.log(
  generateArtClassRoster1([
    "Dave:Acrylic",
    "Eve:Acrylic",
    "Frank:Watercolor",
    "Grace:Oil Painting",
    "Heidi:Watercolor",
  ]),
);
// Art Class Roster:
// Watercolor: 2 students
// Oil Painting: 1 student
// Acrylic: 2 students

// Solution via functional approach using reduce and Object.entries for many styles:
const generateArtClassRoster2 = (participants) =>
  "Art Class Roster:\n" +
  // Use reduce to count styles in an object
  Object.entries(
    // Convert the counts object into an array of [style, count] pairs
    participants.reduce((acc, entry) => {
      const [, style] = entry.split(":"); // Extract the style from the participant string
      acc[style] = (acc[style] || 0) + 1;
      return acc;
    }, {}),
  )
    .map(
      ([style, count]) =>
        `${style}: ${count} ${count === 1 ? "student" : "students"}`,
    )
    .join("\n");
// Tests:
console.log(
  generateArtClassRoster2([
    "Sam:Mixed Media",
    "Tina:Mixed Media",
    "Uma:Mixed Media",
  ]),
);

// Solution avoiding hard‑coding counters and instead use a dynamic object to track counts for any style:
function generateArtClassRoster3(participants) {
  // Object to hold counts for each style
  let styleCounts = {};

  // Loop through participants
  for (let entry of participants) {
    let [, style] = entry.split(":");

    // Increment count dynamically
    styleCounts[style] = (styleCounts[style] || 0) + 1;
  }

  // Build roster string
  let roster = "Art Class Roster:\n";
  for (let style in styleCounts) {
    let count = styleCounts[style];
    roster += `${style}: ${count} ${count === 1 ? "student" : "students"}\n`;
  }

  return roster.trim();
}
// Tests:
console.log(
  generateArtClassRoster3([
    "Van:Gouache",
    "Will:Gouache",
    "Xena:Pastel",
    "Yara:Gouache",
    "Zane:Pastel",
    "Ava:Oil Painting",
  ]),
);
// Art Class Roster:
// Gouache: 3 students
// Pastel: 2 students
// Oil Painting: 1 student

console.log(
  generateArtClassRoster3([
    "Sam:Mixed Media",
    "Tina:Mixed Media",
    "Uma:Mixed Media",
  ]),
);
// Art Class Roster:
// Mixed Media: 3 students

console.log(
  generateArtClassRoster3([
    "Ian:Acrylic",
    "Jack:Oil Painting",
    "Kelly:Oil Painting",
    "Leo:Oil Painting",
    "Mia:Watercolor",
    "Nina:Watercolor",
    "Oscar:Watercolor",
    "Pam:Acrylic",
  ]),
);
// Art Class Roster:
// Acrylic: 2 students
// Oil Painting: 3 students
// Watercolor: 3 students

// =================================== 29 ==================================
/*
  Write a function organizeClinicMorning that takes appointmentId, supplyCodes
  and returns an object with the binary appointment ID and reversed supply codes
  array. The function converts the decimal appointment ID to binary format and
  reverses the array of binary supply codes to help organize the morning clinic
  routine.
  Parameters:
  - appointmentId (number): Decimal appointment ID to convert to binary;
  - supplyCodes (array): Array of binary supply codes to reverse.
  Returns: Object with binary appointment and reversed codes. 
  Format: {"binaryAppointment": "binary_string", "reversedCodes": ["code1", "code2"]} 
*/
// Solution:
function organizeClinicMorning(appointmentId, supplyCodes) {
  // Convert appointmentId to binary string
  const binaryAppointment = appointmentId.toString(2);

  /* Reverse the supply codes array and to preserve immutability, we create a copy of 
    the array before reversing it const reversedCodes = supplyCodes.slice().reverse();
    but esure supply codes are strings, then reverse */
  const reversedCodes = supplyCodes
    .map((code) => String(code))
    .slice()
    .reverse();

  // Return the formatted object with the binary appointment ID and reversed codes
  return {
    binaryAppointment: `${binaryAppointment}`, // force string format
    reversedCodes: reversedCodes, // force string format - array of strings
  };
}
// Tests:
console.log(organizeClinicMorning(5, ["1100", "0011"]));
// { binaryAppointment: "101", reversedCodes: ["0011", "1100"] }
console.log(organizeClinicMorning(8, [1111, "0000", 1010]));
// { binaryAppointment: "1000", reversedCodes: ["1010", "0000", "1111"] }
console.log(organizeClinicMorning(255, ["11111111", "00000000", "10101010"]));
// { binaryAppointment: "11111111", reversedCodes: ["10101010", "00000000", "11111111"] }
console.log(organizeClinicMorning(1024, [1, 10, 100]));
// { binaryAppointment: "10000000000", reversedCodes: ["100", "10", "1"] }
console.log(organizeClinicMorning(1, [1010]));
// { binaryAppointment: "1", reversedCodes: ["1010"] }

// =================================== 30 ==================================
/*
  Створіть програму, яка допоможе керівнику реквізиту театру організувати сценічний
  інвентар. На початку зчитайте цільову різницю ваги "K" та список ваг предметів
  реквізиту, потім порахуйте, скільки пар реквізиту мають вагу, що відрізняється
  рівно на "K" кілограмів (це допомагає збалансувати сценічне оснащення). Далі
  зчитайте максимальну довжину та список описів предметів реквізиту, а потім
  виведіть кожен опис предмету — якщо опис перевищує максимальну довжину, скоротіть
  його та додайте "..." в кінці.
  Першим виведіть кількість дійсних пар, а потім кожен відформатований опис предмету
  реквізиту в окремому рядку.
*/
// Solution:
// допустима різницю ваги "К" між двома предметами реквізиту
let K = 4;
// лист ваг предметів реквізиту, які ми хочемо порівняти
let weights = [8, 12, 16, 20, 24, 28];

// спочатку підрахунок пар предметів, вага яких відрізняється на "К"
let pairCounter = 0;
//
/* Для підрахунку пар предметів, вага яких відрізняється на "К", нам потрібно пройтися
   по всіх вагових значеннях предметів реквізиту, порівняти кожну пару один раз і 
   збільшити лічильник, якщо їх абсолютна різниця дорівнює "К" (в нашому випадку 4).
   Тому проходимо циклом по масиву weights, та порівнюємо кожну пару значень, а щоб урикнути
   дублікатів треба мати дргугий цикл який бере наступне значення як j = i + 1 щоб не порівнювати 
   той самий елемент з самим собою і не порівнювати пару в обох напрямках (12 - 8 і 8 - 12).
   Для прикладу: 12 - 8 = 4 взято одну пару з масиву weights. І так треба підрахувати
   усі можливі пари не зважаючи на відємне значення бо візьмемо абсолютне значення.
*/
for (let i = 0; i < weights.length; i++) {
  for (let j = i + 1; j < weights.length; j++) {
    if (Math.abs(weights[i] - weights[j]) === K) {
      pairCounter++;
    }
  }
}
console.log(pairCounter); // 5

// значення максимальної довжини для описів реквізиту
let maxLength = 18;

// Масив описів предметів реквізиту
const descriptions = [
  "Crystal decanter",
  "Velvet cushion cover",
  "Bronze statue of a horse",
  "Wooden jewelry box",
  "Persian rug fragment",
];

// Обробка кожного опису
for (const description of descriptions) {
  if (description.length > maxLength) {
    console.log(description.slice(0, maxLength) + "...");
  } else {
    console.log(description);
  }
}
// =========================================================================
