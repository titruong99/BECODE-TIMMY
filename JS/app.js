// const rollDie = function (max) {
//     const roll = Math.floor(Math.random() * max + 1);
//     console.log(roll);
//   };

// const callFunction=(max,times)=>{
//     for(let i=0;i<times;i++){
//         rollDie(max);
//     };
// }
// callFunction(6,2);

// let max=parseInt(prompt("Enter a max number"));
// while(isNaN(max)){
//     alert("Not a number !");
//     max=parseInt(prompt("Enter a max number"));
//     console.log("lol");
// }
// console.log("OK");

// for(let i=0;i<20;i++){
//     console.log(Math.random()*4+1);
// }

// let nb1;
// let nb2;
// while(isNaN(parseFloat(nb1)) || isNaN(parseFloat(nb2))){
//     if(isNaN(parseFloat(nb1))){
//         nb1=prompt("Entrez une nouvelle valeur pour le premier nombre");
//     }
//     else if(isNaN(parseFloat(nb2))){
//         nb2=prompt("Entrez une nouvelle valeur pour le second nombre");
//     }
// }
// alert("La valeur est "+(parseInt(nb1)-parseInt(nb2)));
// function digPow(n, p){
//     let str=n.toString();
//     let result=0;
//     for(let i=0;i<str.length;i++){
//       result+=str.charAt(i)**(p+i)
//     }
//     return result%n==0?result/n:-1;
// }

// ====Purpose:get the length of the shortest word=====
// function findShort(s){
//   const myArray = s.split(" ");
//   let shortestWord=myArray[0];
//   for(let i=1;i<myArray.length;i++){
//     if(myArray[i].length<shortestWord.length){
//       shortestWord=myArray[i];
//     }
//   }
//   return shortestWord.length;
// }

// ====== Purpose:get the index of the outlier====
// function findOutlier(integers){
//   let nbOdd=0;
//   let nbEven=0;
//   let indexOdd;
//   let indexEven;
//   for(let i=0;i<integers.length;i++){
//     if(integers[i]%2==0){
//       nbEven++;
//       indexEven=i;
//     }else{
//       nbOdd++;
//       indexOdd=i;
//     }
//   }
//   return nbEven==1?indexEven:indexOdd;
// }


//====Purpose: get the sum of different numbers between the two numbers given. Same numbers: return number
// function getSum(a, b)
// {
//   if(a==b){
//     return a;
//   }else if(Math.abs(a-b)==1){
//     return a+b;
//   }else{
//       let val=0;
//       let min=a<b?a:b;
//       let max=a<b?b:a;
//       for(let i=min;i<=max;i++){
//         val+=i;
//       }
//   }
//   return val;
// }

//======Purpose: get same sentence with the words longer than 5 reversed, less than 5 stay the same
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
// function spinWords(string){
//   const tempArray=string.split(" ");
//   console.log(tempArray);
//   if(tempArray.length==1){
//     return string.split("").reverse().join("");
//   }else{
//     let newString="";
//     for(let i=0;i<tempArray.length;i++){
//       newString+=tempArray[i].length>=5?tempArray[i].split("").reverse().join(""):tempArray[i];
//       newString+=i==tempArray.length-1?" ":"";
//     }
//     return newString;
//   }
// }

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// var uniqueInOrder=function(iterable){
//   let current=iterable[0];
//   let array=[current];
//   for(let i=1;i<iterable.length;i++){
//     if(current!=iterable[i]){
//       current=iterable[i];
//       array.push(current);
//     }
//   }
//   return array;
// }


// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN (pin) {
//   let reg=new RegExp("^([0-9]{4}|[0-9]{6})$");
//   return reg.test(pin);
// }


// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// function findMissingLetter(array){
//   let letter=array[0];
//   for(let i=1;i<array.length;i++){
//     if(letter.charCodeAt(0)+1==array[i].charCodeAt(0)){
//       letter=array[i];
//     }else{
//       return String.fromCharCode(letter.charCodeAt(0)+1);
//     }
//   }
// }


// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// // function digitalRoot(n) {
//   let array=n.toString().split("");
//   let result=0;
//   array.forEach(element => {
//       result+=parseInt(element);
//   });
//   array=result.toString().split("");
//   console.log("resultat "+result);
//   if(array.length>1){
//     return digitalRoot(result);
//   }
//   return result;
// }
// return masked string
