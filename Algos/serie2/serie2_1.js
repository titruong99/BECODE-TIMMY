const possibleBonus=(posA,posB)=>{
    return (posA<posB&& posA+6>=posB)?true:false;
}

console.log(possibleBonus(3,7));
console.log(possibleBonus(1,9));
console.log(possibleBonus(5,3));