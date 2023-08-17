// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що 
// не є типом даних Number.

 const arr = [3, "Hello", null, 42, false];

// Приклад - 1
 for (let i = 0; i < arr.length; i += 1) {
   if (typeof arr[i] !== "number") {
    arr.splice(i, 1);
     i -= 1; // this step is needed here because first thing we deleted was "Hello"
// and reindexation happened afterwards, so null's index decreased by 1 and we moved
// one step forward, so null was missed.
   }
 }
console.log(arr); // result: [3,42]
 

// Приклад - 2
// Example below  starts count from the end, so there would be no need for reindexation,
// therefore that i-= 1; can be avoided. This method would also be faster
 const arr = [3, "Hello", null, 42, false];
 for(let i = arr.length -1; i >= 0; i-=1){
   if (typeof arr[i] !== "number") {
     arr.splice(i, 1);
   }
 }
 console.log(arr); //result: [3,42]

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути
// їх в вигляді нового масиву як результат виконання функції

function getCommonElements(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
      if (arr.includes(arr[i], i + 1 //this i+1 is used here to start the substraction below
      // from the next element, in other words, it cheks if there exists the same element as
      // mine but not inluding mine.
      )) {
    //    console.log(`${arr[i]} - ${arr.includes(arr[i])}`);
    result.push(arr[i]);
    }
  }

  return result;
}

console.log(getCommonElements([1, 2, 3, 2, 1, 1, 17, 19])); //result is [1,2]

//If numbers repeat more than once, this will be done:
function getCommonElements(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
      if (arr.includes(arr[i], i + 1 
      )) {
    //    console.log(`${arr[i]} - ${arr.includes(arr[i])}`);
          if (!result.includes(arr[i])) { //not sure how this works
        result.push(arr[i]);
      }
    }
  }

  return result;
}

console.log(getCommonElements([1, 2, 3, 2, 1, 1, 1, 1, 17, 19])); // result is [1,2]

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

const users = [
  "Artem",
  "Anna",
  "Larisa",
  "Maksim",
  "Svetlana",
  "David",
  "Roman",
  "Olga",
];

// console.table(users);
const men = ["Artem", "Maksim", "David", "Roman"];

function getWomen(users, men) {
  const women = [];
  for (const user of users) {
    if (!men.includes(user)) {
      // !false => true  !true => false
      women.push(user);
      //   console.log(user); // would give ["Anna", "Larisa", "Svetlana", "Olga"]
    }
  }
  return women;
}

console.log(getWomen(users, men)); // would give ["Anna", "Larisa", "Svetlana", "Olga"]

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

const string = 'Welcome to the future';
const SEPARATOR = '';
const result = string.split(SEPARATOR).reverse().join(SEPARATOR);

console.log(result);

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi

const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

for (let i = 1; i < numbers.length; i += 1) {
  const currentEl = numbers[i];
  const prevEl = numbers[i - 1];

  if (currentEl - prevEl !== 1) {
    numbers[i] = prevEl + 1;
  }
// if(currentEl <= prevEl){
//     numbers[i] = prevEl + 1;
// }
}
console.log(numbers);

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function createStr(arr) {
    let result = '';
  switch (arr.length) {
    case 0:
        result = "No one likes this";
        break;
    case 1:
        result = `${arr[0]} likes this`;
        break;
    case 2:
        result = `${arr[0]} and ${arr[1]} like this`;
        break;
    case 3:
        result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
        break;
    default:
        result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
  }
  return result;
}

console.log(createStr([]));
console.log(createStr(["Peter"]));
console.log(createStr(["Jacob", "Alex"]));
console.log(createStr(["Max", "John", "Mark"]));
console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

const array = [array[1], 1, 2]
console.log(array);

const str = "Hello World";

console.log(str.toLowerCase().replaceAll("", "-"));
console.log(str.toLowerCase().split('').join('-'));