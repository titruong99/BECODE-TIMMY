// peut améliorer

const randomNote=(noteText,magazineText)=>{
    let count=0
    let arrNoteText=noteText.split(" ");
    let arrMagazineText=magazineText.split(" ");
    for(let i=0;i<arrNoteText.length;i++){
        let found=false;
        for(let j=0;j<arrMagazineText.length;j++){
            if(!found && arrNoteText[i]==arrMagazineText[j]){
                count++;
                arrMagazineText.splice(j,1);
                found=true;
            }
        }
    }
    return count==arrNoteText.length;
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


console.log(randomNote(noteText,magazineText));