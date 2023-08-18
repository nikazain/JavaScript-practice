// // Task-1;
// // Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// // 1 - Масив чисел
// // 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// // Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, targetValue) {
//   let message = "Success ✅";

//   for (const value of arr) {
//     if (value <= targetValue) {
//       message = "Fail ❌";
//       return message;
//     }
//   }

//   return message;
// }

// console.log(checkValue(numbers, 12));
// console.log(checkValue(numbers, 10));

// // Застосування функції + патерн раннє повернення

// // const numbers = [25, 12, 67, 40, 18];

// // function checkValue(arr, target) {
// //
// // }

// // console.log(checkValue(numbers, 10));
// // console.log(checkValue(numbers, 13));

// // Task-2
// // Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька
// // масивів. Функція приймає 2 параметри:
// // 1 - масив значень
// // 2 - потрібну кількість елементів в масиві
// //  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(data, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combination = arr.slice(i, i + count);
//     result.push(combination);
//   }
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// // Task 3 - Площа прямокутника
// // Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть
// // передані до параметра dimensions у вигляді рядка.Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
// const values = dimensions.split(' ');
// // console.log(Number(values)); // NaN
//     const firstValue = Number(values[0]); // + values[0] //number is used here to turn a string into number for 
//     // later multiplication
// const secondValue = Number(values[1]);


// // 'a' + 'a'// Бінарний
// // + 'a'    // Унарний

// return firstValue * secondValue;
// // console.log(typeof firstValue);
// // console.log(secondValue);
// }

// console.log(getRectArea('8 11')); // will get 88
// console.log(getRectArea('15 11')); // will get 165

// // Task-4
// // Напишіть функції для роботи з колекцією навчальних курсів courses:

// // addCourse(name) - додає курс до кінця колекції
// // removeCourse(name) - видаляє курс із колекції
// // updateCourse(oldName, newName) - змінює ім'я на нове

// // 1 checks if a course is already added or adds a course

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
//   if (courses.includes(name)) {
//     alert("Ви вже маєте такий курс!");
//     // return "Ви вже маєте такий курс!"
//   } else {
//     courses.push(name);
//   }
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// // 2 checks if a course is added and deletes it

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function removeCourse(name) {
//     const idx = courses.indexOf(name); //'React' // -1 // checks that the course is already 
//     // added by finding it's index
// console.log(idx);
//   if (idx === -1) { // if index is -1, then this course is not in the array
//     return "Курс із таким ім`ям не знайдено";
//   }

// // if (!courses.includes(name)) {
// //     return "Курс із таким ім`ям не знайдено";
// //   }
//   courses.splice(idx, 1); //this deletes the course if it was found
// }
// removeCourse("React");
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'

// // 3 updates course

// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName); // -1
//   const inCourses = courses.includes(newName); // false

//   if (idx !== -1 && !inCourses) { // this means that if oldName is in the array AND if newName isn't already added, then we change it
//     // courses.splice(idx, 1, newName);
//     courses[idx] = newName;
//   } else if (inCourses) {
//     return "Ви вже вивчаєте такий курс";
//   } else {
//     return "Курс із таким ім'ям не знайдено";
//   }
// }

// updateCourse("HTML", "NestJS");
// console.log(updateCourse("qwerty", "NestJS"));
// console.log(updateCourse("qwerty", "qwe"))
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// const numbers = [1, 2, 3, 4, 5];



