const calculateFuel=(distance)=>distance*10>100?distance*10:100;

console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));