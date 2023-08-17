/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// let number = 10;

// if (true) {
//   let number = 22;
//   if (true) {
//     number = 35;
//   }
// }
// console.log(number); // outcome is 10

// let number = 10;

// if (true) {
//   number = 22;
//   if (true) {
//     number = 35;
//   }
// }
// console.log(number); // outcome is 35

// let number = 10;

// if (true) {
//   if (true) {
//     number = 35;
//   }
//   number = 42
// }
// console.log(number); //outcome is 42

// let number = 10;

// if (true) {
//     let number = 1;
//   if (true) {
//     number = 35;
//   }
//   number = 42
// }
// console.log(number); // outcome is 10

// let number = 10;

// if (true) {
//   if (true) {
//     number = 35;
//   }
//   let number = 42;
// }
// console.log(number); //error because in a single scope you cannot use a variable before you announced it.

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("Color ?");
// let action;
// if (message) {
//   // message Boolean ? true : false // here if no true/false is stated, then automatically only true answers will be considered.
//This line is important because straight lowercasing it will create an error if the customer canceled the prompt and the registered answer was null.
//   message = message.toLowerCase();
// } 

// switch (message) {
//   case "red":
//     action = "stop";
//     break;

//   case "yellow":
//     action = "ready";
//     break;

//   case "green":
//     action = "go";
//     break;

//   default:
//     action = "be careful";
// }
// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   let message = prompt(text);

//   if (message) {
//     message = message.toLowerCase();
//   }

//   return message === answer;
// }

// console.log(
//        check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
//   );
//   console.log(check('Через воду він проводить, А сам з місця вік не сходить', 'міст'));

// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// Task - 3
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let total = 0;
//   let days = 0;

//   while (total < deps) {
//     total += daySpeed;
//     days += 1;

//     if (total < deps) {
//       total -= nightSpeed;
//     }
//   }
//   console.log(days);
// }
// getDays(42); // 8
// getDays(17) // 3
// getDays(18) // 4

// Task - 4
// Порахуй скільки голосних літер у реченні.

// function countVowel(str) {
//   // str => string
//   const vowels = "aeiou";
//   let counter = 0;
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i]//lowercase can also be included here, but that would not be optimisable, as each letter would have to be checked separately )) {

//       counter += 1;
//     }
//   }

//   return counter;
// }

// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8



