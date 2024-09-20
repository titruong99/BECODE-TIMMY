const countTrue=(array)=>array.filter(element =>element==true).length;


console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));