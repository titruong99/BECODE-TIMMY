// améliorer regex

const isPalindrome=(str)=>{
    str=str.toLowerCase().replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    console.log(str);
    return str==str.split("").reverse().join("");
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello world"));
console.log(isPalindrome("Madam, I'm Adam"));