console.log("Topic: combination of Strings and Numbers,  JS part 2");

// =============================== 01 ===================================
// UA: З теорії JS ми знаємо, що кожен символ має відповідний числовий
//     код. Отже, існують спеціальні методи, які дозволяють отримати
//     символ по його коду і назад. Покажіть, як отримати числовий код
//     по символу та як отримати символ по його числовому коду? Для чого
//     це потрібно? Крім того, виведіть в консоль латинський алфавіт та
//     букви з діакритичними знаками (Á,Ç,É,Ú...), які знаходяться в
//     діапазоні їх числових кодів від 65 до 220. Зробіть висновок за
//     результатами. Врешті, як правильно зробити порівняння, враховуючи
//     відмінності алфавітів різних країн?
// EN: From JS theory we know that each character has a corresponding numeric code.
//     So, there are special methods that allow to get the character for the code
//     and back. Show how to get a numeric code by its symbol, and how to get a
//     character by its code? What is it for?
//     In addition, output to the console the Latin alphabet in both cases and letters
//     with diacritical marks (Á,Ç,É,Ú...) that are in the range of their numeric codes
//     from 65 to 220. Draw a conclusion based on the results.
//     After all, how to properly make a comparison, taking into account the differences
//     in the alphabets of different countries?

// solution via codePointAt method for getting the numeric code:
/* it returns a decimal number representing the code for the character 
   at position pos. Here, different case letters have different codes*/
console.log("Nice".codePointAt(0)); // 78 - числовий код для 'N'
console.log("nice".codePointAt(0)); // 110 - числовий код для 'n'
console.log("nice".codePointAt(0).toString(16)); // 7e (if we need a hexadecimal value)
console.log("Nice".codePointAt(1)); // 105 - числовий код для 'i'
console.log("nice".codePointAt(2)); // 99 - числовий код для 'c'
console.log("nice".codePointAt(2).toString(16)); // 63 (if we need a hexadecimal value)

// solution via fromCodePoint for getting the character by its numeric code:
// it creates a character by its numeric code:
console.log(String.fromCodePoint(78)); // N символ для числового коду 78
console.log(String.fromCodePoint(110)); // n символ для числового коду 110

/* Рядки порівнюються символ за символом в алфавітному порядку. 
   Більший код означає, що символ більший. Код для
   'n' (110) більший за код для 'N' (78).
*/
console.log("a" > "Z"); // true
console.log("Österreich" > "Zealand"); // true

// solution via getting the characters with codes 65..220 (the latin alphabet
// in both cases and letters with diacritical marks) by making a string of them:
let str1 = "";
for (let i = 65; i <= 220; i++) {
  str1 += String.fromCodePoint(i);
}
console.log(str1); // Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
//  ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»
// ¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
/* Як видно, символи з великої букви розташовані першими, потім декілька
   спеціальних символів і далі йдуть символи з малої букви, а також символ Ö, 
   який знаходиться майже в кінці виводу. Тепер стає очевидним, чому a > Z і 
   чому 'Österreich' > 'Zealand'.
   Тобто, всі символи з малої букви йдуть після символів з великої букви, бо
   їх коди більші. Деякі символи, як-от Ö, відокремлені від основного алфавіту.
   Тут його код більший за будь-який код від a до z.
*/

/* Щоб зробити порівняння рядків є більш складним, ніж може здатися, бо алфавіти
   різні для різних мов. Тому браузеру потрібно знати мову для порівняння.
   Стандарт ECMA-402 надає спеціальний метод для порівняння рядків у різних мовах.
   Метод strOne.localeCompare(strTwo) повертає ціле число, яке вказує, чи є перший
   рядок меншим, рівним або більшим за другий за правилами мови. Отже:
   Повертає від'ємне число, якщо strOne менше за strTwo.
   Повертає додатне число, якщо strOne більше за strTwo.
   Повертає 0, якщо вони еквівалентні.
*/
console.log("Österreich".localeCompare("Zealand")); // -1
console.log("Ukraine".localeCompare("New Zealand")); // 1
