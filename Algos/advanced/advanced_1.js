// const ransomNote=(noteText,magazineText)=>{
//     let count=0
//     let arrNoteText=noteText.split(" ");
//     let arrMagazineText=magazineText.split(" ");
//     for(let i=0;i<arrNoteText.length;i++){
//         let found=false;
//         for(let j=0;j<arrMagazineText.length;j++){
//             if(!found && arrNoteText[i]==arrMagazineText[j]){
//                 count++;
//                 arrMagazineText.splice(j,1);
//                 found=true;
//             }
//         }
//     }
//     return count==arrNoteText.length;
// }


// version Maxime
// function ransomNote(word1,word2) {

//     wordinaire1=word1.split(" ")
//     wordinaire2= word2.split(" ")
    
//     for (let i = 0; i< wordinaire1.length; i++) {
//         const mot= wordinaire1[i]
//         if (!wordinaire2.includes(mot)){
//             return false
//         }
//         else{
//             const ind= wordinaire2.indexOf(mot)
//             wordinaire2.splice(ind,1)
//          }
    
// }return true}

// version Ilias
// function ransomNote(noteText, magazineText) {
//     let noteArray = noteText.split(" ");
//     let magazineArray = magazineText.split(" ");



//     for (let i = 0; i < noteArray.length; i++) {

//     let indexMot = magazineArray.indexOf(noteArray[i])
//         if (indexMot === -1) {
//             return false;

//         } else{ 
//         magazineArray.splice(indexMot, 1)
//         }
// }
//    return true;

// }

const ransomNote=(noteText,magazineText)=>{
    let arrNoteText=noteText.split(" ");
    let arrMagazineText=magazineText.split(" ");
    let obj={};
    arrMagazineText.forEach(element =>obj[element]?obj[element]++:obj[element]=1);
    console.log(obj);
    return checkAllWordsAvailable(arrNoteText,obj);
}

const checkAllWordsAvailable=(arrayNote,objMagazine)=>{
    for(let word of arrayNote){
        if(objMagazine[word] && objMagazine[word]>0){
            objMagazine[word]--;
        }else{
            return false
        }
    }
    return true;
}


let noteText = "this is a secret note to you from a secret admirer"
// let noteText= "this is a note to you from a secret admirer"
let magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"


// Exemple given by chat gpt
// let noteText = "find a secret waterfall"
// let magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

// let noteText = "find a secret secret waterfall"
// let magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

// let noteText = "you must find a great place"
// let magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

// let noteText = "a great place to hike"
// let magazineText = "hiking is fun and a great way to explore nature"

// let noteText = "this is my advice"
// let magazineText = "this is my advice to you"


console.log(ransomNote(noteText,magazineText));