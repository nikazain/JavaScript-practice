// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//   id: 1,
//   username: "harry_potter",
//   profile: {
//     name: "Harry",
//     surname: "Potter",
//     age: 25,
//   },
// };
// const {
//   username,
//   profile,
//   profile: { name, surname },
// } = user;
// console.log(username);
// console.log(profile);
// console.log(name);
// console.log(surname);
// Деструктуризація об'єкта для отримання окремих змінних
// const ......

// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//   name: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };
// function displayProductInfo({
//   name,
//   price,
//   category,
//   details: { brand, color, weight } = {},
// } = {}) {
//   console.log(`Назва товару: ${name}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала
// новий об'єкт контакту з доданими властивостями id та createdAt, а також
// list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   const profile = {
//     id: Date.now(), // Date.now just produces a number of miliseconds from 1970 till now to generate a random number
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
//   return profile;
// }
// //or (this way is faster)
// function createContact(partialContact) {
//     return {
//         id: Date.now(), 
//         createdAt: new Date(),
//         list: "default",
//         ...partialContact,
//     }
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );
// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт
// із властивістю fullName, замість firstName та lastName.

// //Example with destructurisation
// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }
// //Example with NO destructurisation
// function transformUsername(obj) {
//   const keys = Object.keys(obj);
//   console.log(keys);
//   const profile = {};
//   let fullName = [];
//   for (const key of keys) {
//     if (key === "firstName" || key === "lastName") {
//       fullName.push(obj[key]);
//     } else {
//       profile[key] = obj[key];
//     }
//   }

//   profile.fullName = fullName.join(" ");
//   return profile;
// }
// //Method 3 using operator delete
// function transformUsername(obj) {
//   const firstName = obj.firstName;
//   const lastName = obj.lastName;
//   const fullName = `${firstName} ${lastName}`;

//   delete obj.firstName;
//   delete obj.lastName;

//   obj.fullName = fullName;

//   return obj;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );
// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб
// вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. 
// Функція повинна розрахувати та повернути периметр будинку.

function calculateHousePerimeter({sideA, sideB, sideC, sideD} = {}) {
  const perimeter = sideA + sideB + sideC + sideD;
  return perimeter;
}

const perimeter = calculateHousePerimeter({
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
});
console.log(calculateHousePerimeter());
console.log(`Периметр будинку: ${perimeter}`);

function fn() {
  console.log(this);
}
fn();



//TODO spread: створення нового об'єкта
//Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

//По суті це аналог такого запису:
const fouth = {
    propA: first.propA,
    propB: first.propB,
    propC: second.propC
}
console.log(fouth);
//А як воно влаштовано під капотом насправді ???

const user = {
    name: 'Test name',
    skills: {
        html: true,
        css: false,
        js: true
    }
}

const copy = {...user}

console.log(copy.skills === user.skills);

const test = '[1, 2, 3]';

console.log(Array.isArray(test));