// const toArray=(obj)=>Object.entries(obj);

// Without cheating :D
const toArray=(obj)=>{
    let array=[];
    for(let elem in obj){
        array.push([elem,obj[elem]]);
    }
    return array;
}


console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));
