// const sevenBoom=array=>array.includes(7)?"Boom!":"There is no 7 in the array";

const sevenBoom=array=>array.find(el=>el==7)?"Boom!":"There is no 7 in the array";

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));