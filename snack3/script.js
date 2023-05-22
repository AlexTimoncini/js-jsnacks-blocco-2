// Calcola la somma e la media dei primi 10 numeri.
let sum = 0;
let media = 0;
for (let i = 1; i <= 10; i++){
    let userNumber = parseInt(prompt('Insert a number'));
    sum += userNumber;
    media = sum / (i);
    console.log('numero', userNumber);
    console.log('somma', sum);
    console.log('media', media);
}