// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let firstWord =  prompt('insert a word');
let secondWord =  prompt('insert another word');

console.log(lengthCheck(firstWord, secondWord));

function lengthCheck(userFirstWord, userSecondWord){
    if (userFirstWord.length === userSecondWord.length){
        console.log(userFirstWord, userSecondWord);
        console.log('the words have the same length');
    } else {
        console.log('the words have different length');
        if (userFirstWord.length < userSecondWord.length){
            console.log(userSecondWord + ' is longer');
        } else {
            console.log(userFirstWord + ' is longer');
        }
    }
}