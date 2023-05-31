// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
// Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

const array = ['pippo', 'PLUTO', 'PapERino','pippR', 'PLUTO', 'PapERinFo'];
const array2 = [];
array.forEach((string) => {
    const a = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    array2.push(a);
});

console.log(array2)

