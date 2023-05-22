// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let firstWord =  prompt('insert a word');
let secondWord =  prompt('insert another word');

console.log(lengthCheck(firstWord, secondWord));

function lengthCheck(userFirstWord, userSecondWord){
    if (userFirstWord.length === userSecondWord.length){
        console.log('the words have the same length');
        return true
    }
    console.log('the words have different length');
    return false;
}