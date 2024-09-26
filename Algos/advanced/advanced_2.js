// const isPalindrome=(str)=>{
//     str=str.toLowerCase().replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
//     console.log(str);
//     return str==str.split("").reverse().join("");
// }

const isPalindrome=(str)=>{
    let arrWord=keepOnlyLetters(str.toLowerCase());
    let arrReverseWord=[...arrWord].reverse();
    return arrWord.join("")===arrReverseWord.join("");
}

const keepOnlyLetters=(word)=>word.split("").filter(elem=> elem.toLowerCase()>= "a" && elem.toLowerCase()<= "z");

console.log(isPalindrome("kayak"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome("Madam, in Eden, I'm Adam"));