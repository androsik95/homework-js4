


// Задание 1
// let object = {     
//     id: 1,  
//     name: "Пылесоос",
//     firm:  "Bosch",
//     Count: 3,
//     Prace: 1200,     
//     totalSumm: 3600,
//   };
//   console.log(object);

// Задание 2
// let object = {     
//       id: 1,  
//       name: "Пылесоос",
//       firm:  "Bosch",
//       Count: 3,
//       Prace: 1200,     
//       totalSumm: 3600,
//     };
//     for (let key in object) {
//       if(object.hasOwnProperty(key)){
//         console.log(key + ", значение: " + object[key])
//     }
//       }

// Задание 3
// let developer1 = {
//   firstName: "Maria",
//   lastName: "Y.",
//   country: "Cyprus",
//   continent: "Europe",
//   age: 30,
//   language: "Javascript",
//   getLocation(object) {
//     console.log("Country: " + object.country + ", Continent: " + object.continent);
//   },
// };

// let developer2 = {
//   firstName: "Victoria",
//   lastName: "T.",
//   country: "Puerto Rico",
//   continent: "Americas",
//   age: 23,
//   language: "Python",
//   getLocation(object) {
//     console.log("Country: " + object.country + ", Continent: " + object.continent);
//   },
// };

// developer1.getLocation(developer1);
// developer2.getLocation(developer2);

// Задание 4
// let fruits = ['Яблоко', 'Апельсин', 'Банан','Мандарин']
// console.log(fruits.length)
// fruits.push ('Арбуз')
// console.log(fruits)
// fruits.splice(2, 1, "Груша");
// console.log(fruits);
// console.log(fruits[1], fruits[3]);

// Задание 5

// const numbers = [27, -3, 92, 0, -17, -2, 108];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     console.log(numbers[i] + " > 0");
//   } else if (numbers[i] < 0) {
//     console.log(numbers[i] + " < 0");
//   } else {
//     console.log(numbers[i] + " = 0");
//   }
// }


// Задание 6

// const arr = ["a", "b"];
// const additem = (arr, item) => {
//   arr[arr.length] = item;
// };
// additem(arr, "с");

// console.log(arr);


// Задание 7

// const users = [
//     { name: "Alex", age: 31 },
//     { name: "Olga", age: 17 },
//     { name: "Carl", age: 15 },
//     { name: "Nancy", age: 28 },
//     { name: "Eric", age: 9 },
//   ];
//   const arr = [];
//   for (let Howmanyyears of users) {
//     if (Howmanyyears.age < 18) {
//         arr.push(Howmanyyears);
//     }
//   }
//   console.log(arr);



// АDV 1
// function palindrome() {
//     let result = prompt("Введите значение");
//     let stringArr = result.split("").reverse().join("");

//     if (result == stringArr) {
//         console.log("Данное значение является палиндромом");
//     } else {
//         console.log("Данное значение не является палиндромом");
//     }
// }
// palindrome();


// ADV 2
// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
//   ];
//   let sum = 0  
//   let count = 0;
//   for (let i = 0; i < matrix.length; i++)
//   { for (let j = 0; j< matrix[i].length; j++) { 
//     sum+= matrix[i][j]
//     count++ } }
  
//   let result = sum / count
//   console.log(result)


