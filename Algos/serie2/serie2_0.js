const countTrue=(array)=>{
    let count=0;
    array.forEach(element => {
        element?count++:count;
    });
    return count;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));