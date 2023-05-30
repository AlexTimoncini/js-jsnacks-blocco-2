// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione

let array = [];
let peperoniTotalWeight = 0;

for (let i = 0; i < 10; i++){
    peperone(array);
    peperoniTotalWeight += parseInt(array[i].weigth);
    console.log(peperoniTotalWeight);
}

console.log(array);

function peperone(arrayParent){
    let peperone = {
        variety: 'Pepperonus Pepperinos',
        weigth: Math.floor(Math.random() * 300 + 100) + 'gr',
        length: Math.floor(Math.random() * 70 + 5) + 'cm',
    }
    arrayParent.push(peperone);
}
