// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 


const basketPlayer = {
    code: '2x5we',
    firstName: 'Bob',
    lastName: 'Wayne',
    age: 25,
    scoreM: 30,
    '3-point(%)': 15,
    stop: 40,
    shots: 70
};

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100


function codeBasketPlayer (obj){
    let letterString = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    let codeB = '';
    for (let i = 0; i < 6; i++){
    let randomUpcaseLetter = letterString.charAt(Math.random() * letterString.length);
        if (i % 2 === 0){
            codeB += randomUpcaseLetter;
        } else {
            codeB += Math.floor(Math.random() * 9 + 1);
        }
    }
    
    obj.code = codeB;
}

function score(obj){
    scoreMedia = Math.floor(Math.random() * 50 + 1);
    obj.scoreM = scoreMedia;
}

function point_triple_percentage(obj){
    let random100 = Math.floor(Math.random() * 100 + 1);
    obj['3-point(%)'] = random100 + '%';
}

function stops(obj){
    let random30 = Math.floor(Math.random() * 30 + 1);
    obj['stop'] = random30;
}

function shots(obj){
    let random20_100 = Math.floor(Math.random() * 80 + 21);
    obj['shots'] = random20_100;
}

codeBasketPlayer(basketPlayer);
score(basketPlayer);
point_triple_percentage(basketPlayer);
stops(basketPlayer);
shots(basketPlayer);

console.log(basketPlayer);