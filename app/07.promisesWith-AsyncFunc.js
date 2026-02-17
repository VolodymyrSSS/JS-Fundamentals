// ========================== Task 01 ===================================
// UA: Отримайте перелік усіх даних на користувачів в списку використавши
//     метод для запиту на сервер fetch а для роботи з асинхронним кодом
//     promise. При цьому, безкоштовний сервіс для отимання даних/користувачів
//     за посиланням 'https://jsonplaceholder.typicode.com/users'. Також
//     отримайте сипсок імен користувачів окремо від усіх даних.
//     Перший рядок коду виводить у консолі вираз "Request started".
//     Після запиту fetch, виведіть у консолі рядок "Data received".
//     Далі створіть код з використанням promise, обробіть його та виведіть
//     результат у консоль.
// EN: Get a list of all data for users in the list using the fetch method
//     to request the server and to work with asynchronous promise code. At
//     the same time, a free service for obtaining data (users) at the link
//     'https://jsonplaceholder.typicode.com/users'. The first line of code
//     displays the expression "Request started" in the console. After the
//     fetch request, display the line "Data received" in the console.
//     Next, create code using a promise, process it, and output
//     the result to the console.

console.log("Request started");

let promiseUsersListOne = fetch("https://jsonplaceholder.typicode.com/users");

console.log("Data received");

// solution via then and nested map:
/* Щоб прочитати повну відповідь, ми повинні викликати метод response.text(),
    він в свою чергу повертає новий проміс. Цей новий проміс завершується лише
    тоді, коли з віддаленого сервера завантажується увесь текст, не лише заголовки.
    Після завершення він буде містити весь текст відповіді в якості результату.
    Але об’єкт response, повернутий із fetch, також має метод response.json(),
    який обробляє отриманий текст і зберігає його у форматі JSON. Він ще зручніший
    за метод response.text(), тому використовують більшістю саме його.
  */
promiseUsersListOne
  .then((data) => data.json()) // виклик .then повертає новий проміс, тому ми можемо викликати наступний .then на ньому
  .then((allUsersData) => {
    console.log("All users data ", allUsersData); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    const userNames = allUsersData.map((user) => user.name);
    console.log("Names list: ", userNames); // (10) ['Leanne Graham', 'Ervin Howell',..., 'Clementina DuBuque']
  })
  .catch((err) => {
    console.error("Error: ", err.message);
  });

// solution via chained .then and using map:
/* У попередньому рішенні було зроблено вкладення методу map через що
втратилась проста послідовність зчитування даних. Ми не могли написати
у наступному методі .then одразу таке: .then((user) => user.name)) бо
попередній .then явно не повертав значення і наступний .then отримав би
"undefined". Рішенням може бути те, що потрібно послідовно обробляти
дані методами ланцюжком .then і обов’язково повертати значення для 
наступного .then, Ось так:
*/
let promiseUsersListTwo = fetch("https://jsonplaceholder.typicode.com/users");

promiseUsersListTwo
  .then((data) => data.json())
  .then((allData) => {
    console.log("All data ", allData); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}])
    return allData.map((user) => user.name);
  })
  .then((names) => console.log("Names: ", names)) // (10) ['Leanne Graham', 'Ervin Howell',..., 'Clementina DuBuque']
  .catch((err) => {
    console.error("Error: ", err.message);
  });
// ======================================================================

// ========================== Task 02 ===================================
// UA: Ми маємо видавництво та декілька журналістів, які працюють в ньому.
//     Кожен журналіст написав свій пост з заголовком та якоюсь інформацією
//     в цьому пості. Потрібно написати дві функції: getJournalist - шукає
//     журналіста з даними по його id, а друга функція getPublisherPost -
//     виводить контент поста, який був написаний цим журналістом. Отримайте
//     потрібні дані використовуючи проміси та безкоштовний сервіс постів
//     за посиланням 'https://jsonplaceholder.typicode.com/posts'. Дані на
//     журналістів видавництва надані в змінній publishingHouse.
// EN: We have a publishing house and several journalists who work in it.
//     Each journalist wrote their own post with a headline and some
//     information in that post. It is necessary to write two functions:
//     getJournalist - searches for a journalist with data by his id, and
//     the second function getPublisherPost - displays information about the
//     post that was written by this journalist. Get the data you need using
//     promises and a free post information service at
//     'https://jsonplaceholder.typicode.com/posts'. Data on the journalists
//     of the publishing house are provided in the publishingHouse variable.

// solution when in posession is only 'https://jsonplaceholder.typicode.com/posts'
/* Кінцева точка повертає масив об'єктів post. Кожен post виглядає так:
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati",
        "body": "quia et suscipit..."
    }
    де userId → ідентифікатор журналіста (або id журналіста) цей номер
    пов’язує публікації з журналістом; id → унікальний ідентифікатор 
    публікації (id поста); title → заголовок поста; body → контент поста

    Отже, спочатку потрібно створити функцію, яка шукає журналіста за
    його ID. Оскільки кінцева точка posts не надає нам імен журналістів
    безпосередньо, можна змоделювати журналіста вказавши його "userID".
    Створимо таку функцію на основі promise:
*/

function getJournalistOne(id) {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json()) // отримання/пошук усіх постів
    .then((posts) => {
      // знаходимо перший пост цього журналіста
      const journalistPost = posts.find((post) => post.userId === id);
      if (!journalistPost) {
        throw new Error(`No journalist found with id ${id}`);
      }
      return { journalistId: id, post: journalistPost }; // об’єкт з ID журналіста та його постом
    });
}

// отримання контенту поста який був написаний журналістом по його ID
function getPublisherPostOne(journalistId) {
  return getJournalistOne(journalistId)
    .then((data) => {
      const { post } = data;
      console.log("Headline:", post.title);
      console.log("Content:", post.body);
      return post;
    })
    .catch((err) => {
      console.error("Error:", err.message);
    });
}

// перевірка роботи
console.log("Post Request sent");

getPublisherPostOne(4) // журналіст з id = 4
  .then((post) => {
    console.log("Post retrieved:", post);
    /* {userId: 4, id: 31, title: 'ullam ut quidem id aut vel consequuntur', body: 'debitis
       eius sed quibusdam non quis…sci atque\nquaerat voluptatem adipisci repudiandae'} */
  });

// solution when in posession are journalist name, his id, it's post's title
// and 'https://jsonplaceholder.typicode.com/posts' for post's content

// вихідні дані
const publishingHouse = [
  {
    journalist: "Mariana",
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
  },
  { journalist: "Modest", id: 47, title: "quibusdam cumque rem aut deserunt" },
  {
    journalist: "Aram",
    id: 68,
    title: "odio quis facere architecto reiciendis optio",
  },
  {
    journalist: "Ellis",
    id: 81,
    title: "tempora rem veritatis voluptas quo dolores vero",
  },
];

// Отримання журналіста за його id
const getJournalistTwo = (id) => {
  return new Promise((resolve, reject) => {
    // імітація роботи сервера - асинхронна операція
    setTimeout(() => {
      const journalistData = publishingHouse.find(
        (journalist) => journalist.id === id,
      );

      if (journalistData) {
        resolve(journalistData);
      } else {
        reject(Error("Journalist is not fond"));
      }
    }, 1500);
  });
};

// отримання контенту поста по його заголовку (title) чи іd
const getPublisherPostTwo = (writtenPost) => {
  const promisePosts = fetch("https://jsonplaceholder.typicode.com/posts");
  return promisePosts
    .then((data) => data.json())
    .then((posts) => {
      // const postContent = posts.find((post) => post.title == writtenPost.title);
      //  але так ненадійно бо будь-яка помилка в title і пост не буде знайдений
      const postContent = posts.find((post) => post.id === writtenPost.id);

      // console.log(postContent.body); // his post is about >  voluptatem assumenda ut ...
      if (!postContent) {
        throw new Error("Post not found for this title");
      }

      return {
        ...writtenPost,
        body: postContent.body,
      };
    });
};

// перевірка роботи
getJournalistTwo(47)
  .then((data) => {
    console.log("Journalist:", data); // {journalist: 'Modest', id: 47, title: 'quibusdam cumque rem aut deserunt'}
    return getPublisherPostTwo(data);
  })
  .then((publisherPost) => {
    console.log("The content of the post is > \n", publisherPost.body);
  })
  .catch((err) => {
    console.error("Error: ", err.message);
  });
// ===================================================================

// Task 18
// UA: Ми маємо функцію watchTutorialCallback, яка на вхід отримує два колбека: callback
//     та errorCallback. В залежності від значення змінних userLeft та userWatchingCartoon
//     в консолі ми отримуєм відповідний результат. Змініть функцію watchTutorialCallback
//     на watchTutorialPromise використовуючи проміси замість колбеків та застосуйте методи
//     промісів .then/.catch.
// EN: We have a watchTutorialCallback function that receives two callbacks as input: callback
//     and errorCallback. Depending on the value of the userLeft and userWatchingCartoon
//     variables in the console, we get the corresponding result. Change the watchTutorialCallback
//     function on watchTutorialPromise using promises instead of callbacks and use the .then/.catch
//     promise methods.

// const userLeft = false;
// const userWatchingCartoon = false;

// function watchTutorialCallback(callback, errorCallback) {
// 	if (userLeft) {
// 		errorCallback({
// 			name: 'user Left',
// 			message: ':(',
// 		});
// 	} else if (userWatchingCartoon) {
// 		errorCallback({
// 			name: 'user watching cartoon',
// 			message: "cartoon's name - Mikey Mouse",
// 		});
// 	} else {
// 		callback('Thumbs up and Subscribe');
// 	}
// }

// thret to get 'callback hell'
// watchTutorialCallback(
// 	(message) => {
// 		console.log('Success! ' + message); // Success! Thumbs up and Subscribe
// 	}, (error) => {
// 		console.log(error.name + ' ' + error.message);
// 	}
// );

// // solution
// function watchTutorialPromise() {
// 	return new Promise((resolve, reject) => {
// 		if (userLeft) {
// 			reject({
// 				name: 'user Left',
// 				message: ':(',
// 			});
// 		} else if (userWatchingCartoon) {
// 			reject({
// 				name: 'user watching cartoon',
// 				message: "cartoon's name - Mikey Mouse",
// 			});
// 		} else {
// 			resolve('Thumbs up and Subscribe');
// 		}
// 	});
// }

// watchTutorialPromise()
// 	.then((message) => {
// 		console.log('Success! ' + message); // Success! Thumbs up and Subscribe
// 	})
// 	.catch((error) => {
// 		console.log(error.name + ' ' + error.message);
// 	});
