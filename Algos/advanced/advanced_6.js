const twoSums=(array,sum)=>{
    let sums=[];
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==sum){
                sums.push([array[i],array[j]]);
            }
        }
    }
    return sums
}

console.log(twoSums([1,6,4,3,5,7,8,9,6,3,40],10));