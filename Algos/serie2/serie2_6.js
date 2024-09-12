const sortIt=(array)=>{
    let temp=[];
    array.forEach(element => {
        typeof element==="number"?temp.push(element):temp.push(element[0]);
    });
    return temp.sort((nb1,nb2)=>nb1-nb2);
}

console.log(sortIt([4, 1, 3]));
