// //one line 1
const removeDuplicate=array=>array.filter((item, index) => array.indexOf(item) === index);
// console.log(removeDuplicate(["hello", "world", "goodbye", "world"]));
// console.log(removeDuplicate([true, true, false, true, true, false]));
// Result : [true, false]


//one line 2
const capitalize=str=>str[0].toUpperCase()+str.slice(1,str.length);

// console.log(capitalize("belgium"));
// console.log(capitalize("brazil"));
// console.log(capitalize("brussels"));

//one line 3
const dayDif=(date1,date2)=>Math.floor((Math.abs(date2.getTime()-date1.getTime()))/(1000*3600*24));

// console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")));// Result : 366
// console.log(dayDif(new Date("2024-01-01"), new Date("2024-01-31")));
// // Résultat attendu : 30
// console.log(dayDif(new Date("2020-02-28"), new Date("2020-03-01")));
// // Résultat attendu : 2 (année bissextile donc février a 29 jours)
// console.log(dayDif(new Date("2023-07-15"), new Date("2023-12-25")));
// // Résultat attendu : 163
// console.log(dayDif(new Date("2023-07-15"), new Date("2023-12-25")));
// // Résultat attendu : 163
// console.log(dayDif(new Date("2021-12-31"), new Date("2022-01-01")));
// // Résultat attendu : 1
// console.log(dayDif(new Date("2023-03-15T12:00:00"), new Date("2023-03-16T11:59:59")));
// // Résultat attendu : 0 (moins de 24 heures d'écart)
// console.log(dayDif(new Date("2023-06-01"), new Date("2023-05-15")));
// // Résultat attendu : 17 (l'ordre des dates est inversé)
// console.log(dayDif(new Date("2019-12-31"), new Date("2020-12-31")));
// // Résultat attendu : 366 (année 2020 est bissextile, donc 366 jours)


//one line 4
const average=array=>array.reduce(
    (accumulator, currentValue) => accumulator + currentValue/array.length,0);

    // console.log(average([1, 2, 3, 4]));
    // console.log(average([1, 2, 3, 4,5]));
    // console.log(average([1, 2, 3, 4,6]));
    // console.log(average([1, 2, 3, 4,7]));
    // console.log(average([1, 2, 3, 4,8]));

//one line 5
const getSmallest=array=>Math.min(...array);
// console.log(getSmallest([13, 7, 11, 3, 9, 15, 17]));
// console.log(getSmallest([13, 7, 11, -3, 9, 15, 17]));
// console.log(getSmallest([13, 7, 11, 0, 9, 15, 17]));
// console.log(getSmallest([13, 7, 11, 3, 9, 15, -17]));


//one line 6
const areEqual=(array1,array2)=>array1.length===array2.length?array1.sort((a,b)=>a-b).every((elem,index)=>array2.sort((a,b)=>a-b).indexOf(elem)==index):false;

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 1, 4, 2];
// const arr3 = [1, 2, 3];
// console.log(areEqual(arr1,arr2));
// console.log(areEqual(arr1,arr3));

// const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 3, 2, 1];
// console.log(areEqual(arr1,arr2));
// Résultat : true

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 5];
// console.log(areEqual(arr1,arr2));
// Résultat : false

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 4];
// console.log(areEqual(arr1,arr2));
// Résultat : false

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 2, 3];
// console.log(areEqual(arr1,arr2));
// Résultat : false

// const arr1 = [];
// const arr2 = [];
// console.log(areEqual(arr1,arr2));
// Résultat : true


// one line 7
const randomRGB=()=>`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; 
// console.log(randomRGB());
// console.log(randomRGB());
// console.log(randomRGB());
// console.log(randomRGB());

//one line 8
const occurencies=(word,letter)=>word.split("").filter(char=>char==letter).length;
// console.log(occurencies("hello", "l"));
// console.log(occurencies("abracadabra", "a"));
// console.log(occurencies("oups", "z"));


//one line 9
const onlyPositives=array=>array.filter(val=>val>0).reduce((accumulator,current)=>accumulator+current,0);

// console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// console.log(onlyPositives([-3, -4, -2]));
// console.log(onlyPositives([-3, -4, -2,0,10,5,6,7,9]));


//one line 10
const scanAndFind=(array,obj)=>Object.keys(obj).length>0?array.filter(element=>element[Object.keys(obj)[0]]===Object.values(obj)[0]):[];
// console.log(scanAndFind(
//     [
//       {
//         firstName: "Vito",
//         lastName: "Corleone",
//       },
//       {
//         firstName: "Jon",
//         lastName: "Snow",
//       },
//       {
//         firstName: "Harry",
//         lastName: "Potter",
//       },
//       {
//         firstName: "Michal",
//         lastName: "Corleone",
//       },
//     ],
//     {
//       lastName: "Corleone",
//     }
//   ));

// console.log(scanAndFind(
//     [
//       { fullName: "Roi Baudoin", id: 49762 },
//       { fullName: "Margareth Tatcher", id: 94357 },
//       { fullName: "Barack Obama", id: 76458 },
//       { fullName: "Emmanuel Macron", id: 10687 },
//       { fullName: "Charles de Gaulle", id: 67098 },
//       { fullName: "Boris Johnson", id: 16437 },
//     ],
//     { id: 10687 }
//   ));
//   Result : [{fullName: "Emmanuel Macron", id: 10687}]

// console.log(scanAndFind([], { id: 10687 }));
// Résultat attendu : [] (aucun élément dans le tableau)

// console.log(scanAndFind(
//   [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 }
//   ],
//   {}
// ));
// Résultat attendu : [] (aucun critère de recherche spécifié)

// console.log(scanAndFind(
//   [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 30 }
//   ],
//   { age: 25 }
// ));
// Résultat attendu : [{ name: "Bob", age: 25 }]

// console.log(scanAndFind(
//   [
//     { id: "123", name: "Alice" },
//     { id: 123, name: "Bob" }
//   ],
//   { id: 123 }
// ));
// Résultat attendu : [{ id: 123, name: "Bob" }] (comparaison stricte avec nombre)

// console.log(scanAndFind(
//   [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 }
//   ],
//   { name: "Alice" }
// ));
// Résultat attendu : [{ name: "Alice", age: 30 }]


// console.log(scanAndFind(
//   [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 }
//   ],
//   { age: 35 }
// ));
// Résultat attendu : [] (aucun objet avec age 35)

// console.log(scanAndFind(
//   [
//     { name: "Alice", age: 30 },
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 }
//   ],
//   { age: 30 }
// ));
// Résultat attendu : [{ name: "Alice", age: 30 }, { name: "Alice", age: 30 }]
