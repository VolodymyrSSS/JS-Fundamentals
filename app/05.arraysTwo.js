// =========================== Task 01 ====================================
// UA: У нас є масив, який містить елементи, що повторяються. Напишіть код:
//     1) який підрахує скільки разів кожен елемент зустрічається в масиві.
//        Виведіть результат у виді об'єкту у якому для кожного ключа буде
//        елемент масиву а його значенням, число скільки кожен елемент
//        зустрічається у цьому масиві, типу {'sony': 3, 'dell': 2, ...}
//     2) який буде отримувати  масив, що містить тільки унікальні значення.
//        Виведіть у консолі масив цих унікальних значень.
// EN: We have an array that contains repeating elements. Write code:
//     1) that will receive an array containing only unique values. Display
//        an array of these unique values in the console;
//     2) which will count how many times each element occurs in the array.
//        Output the result in the form of an object in which the keys will
//        be the elements of the array and their value will be the number of
//        times each element occurs in this array, such as {'sony': 3, ...}.

// const brands = [
// 	'sony',
// 	'hp',
// 	'apple',
// 	'sony',
// 	'dell',
// 	'sony',
// 	'hp',
// 	'dell',
// 	'hp',
// ];

// for1) solution via forEach() method in a function:

// const countBrend = (list) => {
// 	const count = {}; // об'єкт для встановлення 'ключ/бренд : значення/число-з'являння'
// 	list.forEach((brand) => {
// 		// якщо об'єкт count не містить ключ з назвою поточного бренду
// 		if (!count[brand]) {
// 			// додати цей ключ із встановленим значенням "1"
// 			count[brand] = 1;
// 		} else {
// 			// збільшити значення на одиницю
// 			count[brand]++;
// 		}
// 	});
// 	return count;
// };

// console.log(countBrend(brands)); // {sony: 3, hp: 3, apple: 1, dell: 2}

// for2) solution via forEach() and Object.keys() methods in a function:

// const uniqueBrands = (list) => {
// 	const uniques = {}; // кладем сюди унікальні ключі
// 	list.forEach((brand) => {
// 		/* встановити кожному ключу значення true і при кожній ітерації
// 		значення елементу буде перезаписуватись на це true. Так ефективно
// 		можна позбутись дублікатів бо ключі об'єктів є унікальними */
// 		uniques[brand] = true;
// 	});
// 	// але в результаті ми отримаємо об'єкт тільки з унікальними ключами типу
// 	// {sony: true, hp: true, apple: true, dell: true}
// 	// щоб отримати масив з унікальними ключами використаємо цей метод:
// 	return Object.keys(uniques);
// };
// console.log(uniqueBrands(brands)); // ['sony', 'hp', 'apple', 'dell']

// for2) solution via reduce() method:

// const uniqueBrands = arr.reduce((accumulator, brand) => {
// 	if (!accumulator.includes(brand)) {
// 		accumulator.push(brand);
// 	}
// 	return accumulator;
// 	// initialize an empty array as the accumulator
// }, []);
// =======================================================================
