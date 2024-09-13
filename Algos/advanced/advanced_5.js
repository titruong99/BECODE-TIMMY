const reverse=array=>{
    for(let i=0;i<Math.floor(array.length/2);i++){
        let temp=array[array.length-(i+1)];
        array[array.length-(i+1)]=array[i];
        array[i]=temp;
    }
    return array;
}

console.log(reverse([0,1,2,3,4,5,6]));
console.log(reverse(["a","b"]));
console.log(reverse([0,1,2,3,4]));
console.log(reverse(["yo","salut","bonjour","hey","coucou","wassup"]));