console.log("Topic: DOM");

// Task 01
// Найти элемент с id= "t01". Вывести в консоль.
// Найти родительский элемент и вывести в консоль.
// Найти дочерние ноды, если они есть, и вывести в консоль
// названия и тип нод.

// Task 02
// Подсчитать количество <li> элементов на странице. Для поиска элементов использовать
// getElementsByTagName(). Вывести в консоль.
// Добавить еще один элемент в список и вывести снова их количество.

// Task 03
// Получить элементы <li> используя метод querySelectorAll() и вывети их в консоль
// Добавить новый <li> и снова вывести в консоль

// Task 04
// Найти все первые параграфы в каждом диве и установить цвет фона #ffff00

// Task 05
// Подсчитать сумму строки в таблице и вывести ее в последнюю ячейку

// Task 06
// Вывести значения всех атрибутов элемента с идентификатором t06

// Task 07
// Получить объект, который описывает стили, которые применены к элементу на странице
// Вывести объект в консоль. Использовать window.getComputedStyle().

// Task 08
// Установите в качестве контента элемента с идентификатором t08 следующий параграф
// <p>This is a paragraph</>

// Task 09
// Создайте элемент <div class='c09' data-class='c09'> с некоторым текстовым контентом, который получить от пользователя,
// с помощью prompt, перед элементом с идентификатором t08,
// когда пользователь кликает на нем

// Task 10
// Удалите у элемента с идентификатором t06 атрибут role
// Удалите кнопку с идентификатором btn, когда пользователь кликает по ней

// ============================Task 06================================================
// UA: Оптимізація маніпуляцій DOM. Ви створюєте веб-сторінку, яка динамічно відображає
//     список фруктів у списку (<ul>). Нижче наведено фрагмент коду, який виконує це
//     завдання. Хоча цей код працює належним чином для невеликих наборів даних, він має
//     проблеми з продуктивністю під час обробки великої кількості елементів (наприклад,
//     понад 10 000 фруктів). Рендеринг стає неефективним, що призводить до затримки
//     роботи користувача.
// EN: Optimize DOM Manipulation. You’re building a webpage that dynamically displays
//     a list of fruits in an unordered list (<ul>). Below is the code snippet that
//     accomplishes the task. While this code works properly for small datasets, it has
//     a performance issue when processing a large number of items (e.g., 10,000+ fruits).
//     Rendering becomes inefficient, leading to a laggy user experience.

// const fruits = ['apple', 'orange', 'banana', 'mango', 'maraqua', 'grapes'];
// const ul = document.querySelector('#fruit-list');
// items.forEach((fruit) => {
//    const li = document.createElement('li');
//    li.textContext = fruit;
//    ul.appendChild(li);
// });

// solution via Document Fragment
/* In this snippet, we're appending a <li> to the <ul> directly in each iteration of 
the loop. This leads to multiple unnecessary reflows (when the browser recalculates 
the layout of the page) and repaints (when the visual appearance of elements is updated)
in the browser. It means every call to ul.appendChild(li) triggers: 1) DOM modification;
2) A recalculation of layout (reflow); 3) A repaint in the browser. If the list has 
1000+ items, the browser will perform these expensive DOM operations 1000 times in a row, 
one for each <li> element. This costs a lot of CPU, making the page rendering slow.
To solve this problem, we can use a Document Fragment.
A DocumentFragment is a lightweight, in-memory container for DOM nodes. It allows you 
to build a collection of elements without rendering them on the DOM immediately. You can 
append the DocumentFragment to the actual DOM only once, which minimizes reflows/repaints.
*/
// const fruits = ['apple', 'orange', 'banana', 'mango', 'maraqua', 'grapes'];
// const ul = document.querySelector('#fruit-list');

// const fragment = document.createDocumentFragment(); // Step 1: Create a Document Fragment

// fruits.forEach((fruit) => {
//    const li = document.createElement('li'); // Step 2: Create the <li> element
//    li.textContent = fruit;
//    fragment.appendChild(li); // Step 3: Append <li> to the Fragment
// });

// ul.appendChild(fragment); // Step 4: Append the entire Fragment to the <ul>

/* Modern Alternative (Using Template Literals and innerHTML):
   If you prefer a more concise solution and are not concerned about potential 
   security risks (e.g., XSS), you can use innerHTML to batch update the DOM instead:

   const fruits = ['apple', 'orange', 'banana', 'mango', 'maraqua', 'grapes'];
   const ul = document.querySelector('#fruit-list');

   ul.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join('');
*/
// ===================================================================================
