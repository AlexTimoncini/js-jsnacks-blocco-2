// Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi
let array = [];
console.log(getDifferentRandomInt(1, 5, array, 4));

/**
 * Funzione per inserire dentro un array vuoto un numero (times) definito di valori randomici diversi tra loro
 * @param min valore minimo che può assumere il numero randomico (incluso)
 * @param max valore massimo che può assumere il numero randomico (inculso)
 * @param voidArray array creato vuoto
 * @param times numero di valori che si vuole inserire nell'array 
 * @returns l'array con all'interno valori randomici diversi tra loro, tanti quanti times
 */
function getDifferentRandomInt(min, max, voidArray, times){

    if ((max - min) < times){
        return [];
    }
    while (voidArray.length < times){
        let randomInt = Math.floor(Math.random() * max + min);
        if (!voidArray.includes(randomInt)){
            voidArray.push(randomInt);
        }
    }
    return voidArray;
}