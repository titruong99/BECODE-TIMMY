//one line 1
// const removeDuplicate=array=>array.filter(word=>word===word);

// console.log(removeDuplicate(["hello", "world", "goodbye", "world"]));


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
// const areEqual=(array1,array2)=>array1.every(val)=>


//one line 9
const onlyPositives=array=>array.filter(val=>val>0).reduce((accumulator,current)=>accumulator+current,0);

// console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// console.log(onlyPositives([-3, -4, -2]));
// console.log(onlyPositives([-3, -4, -2,0,10,5,6,7,9]));