// =========================== Task 1 ====================================
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с публичными свойствами title, artist и методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with public properties title, artist and method concat().
//     Method should return the concatenation of values of properties title and artist.
//     Create a few objects. Call their method concat().

// function Tune(title, artist) {
// 	this.title = title;
// 	this.artist = artist;

// 	this.concat = function () {
// 		return this.title + this.artist;
// 	};
// }

// let john1 = new Tune('Leon', 'Killer');
// let john2 = new Tune('Sister', 'Carry');
// let john3 = new Tune('Tam', 'Tadam');
// console.log(john1.concat()); // LeonKiller
// console.log(john2.concat()); // SisterCarry
// console.log(john3.concat()); // TamTadam

// =========================== Task 2 ====================================
// RU: Создать функцию-конструктор Tune(title, artist) для создания объектов
//     с приватными свойствами title, artist и публичным методом concat().
//     Метод должен возвращать конкатенацию значений свойств title и artist.
//     Создать несколько объектов. Вызвать их метод concat().
// EN: Create function-constructor Tune(title, artist) for creating objects
//     with private properties title, artist and method concat().
//     Method should return the concatenation of values of properties title and artist.
//     Create a few objects. Call their method concat().

// class

// const Tune = (function () {
// 	// constructor

// 	const priv = new WeakMap();

// 	function Tune(title, artist) {
// 		const privateMemebers = { title, artist };

// 		priv.set(this, privateMemebers);
// 	}

// 	// method

// 	Tune.prototype.concat = function () {
// 		return `${priv.get(this).title} ${priv.get(this).artist}`;
// 	};

// 	return Tune;
// })();
