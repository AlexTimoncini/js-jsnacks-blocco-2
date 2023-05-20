// Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
// Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
// Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

let magicNumber = (Math.random() * 99 + 1).toFixed();
let userNumber = parseInt(prompt('guess the number between 1 and 100'));
let guessCounter = 1;
while (userNumber != magicNumber){
    if(userNumber < magicNumber){
        console.log('Bigger!')
        userNumber = parseInt(prompt('guess the number between 1 and 100'));
        guessCounter++;
    }
    else {
        console.log('Smaller!')
        userNumber = parseInt(prompt('guess the number between 1 and 100'));
        guessCounter++;    
    }
}

if (userNumber == magicNumber){
    console.log('THE MAGIC NUMBER IS ' + userNumber + ' NICE JOB!');
    console.log('You made it in just ' + guessCounter + ' times!');
}