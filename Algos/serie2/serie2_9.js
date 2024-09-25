const reverseWords=(str)=>str.split(" ").filter((elem)=>elem!="").reverse().join(" ");


console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello   world!  "));
console.log(reverseWords("a good example"));