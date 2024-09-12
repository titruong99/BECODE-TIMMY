const convert=(temperature)=>{
    let answer="";
    switch(temperature.charAt(temperature.length-1).toUpperCase()){
        case "C":
            answer=`${Math.round(parseFloat(temperature)*9/5+32)}°F`;
            break;
        case "F":
            answer=`${Math.round((parseFloat(temperature)-32)*5/9)}°C`;
            break;
        default:
            answer="Error";
            break;
    }
    return answer;
}

console.log(convert("350°C"));
console.log(convert("195°F"));
console.log(convert("33"));