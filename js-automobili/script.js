// Crea un array composto da 15 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: 
// marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: 

// nel primo array solo le auto a benzina,  // ciclo for 
// nel secondo solo le auto a diesel,  // ciclo foreach
// nel terzo il resto delle auto.  //array.filter

// Infine stampa separatamente i 3 array.


let carArray = [
    {
        brand: 'ford',
        typeId: '234afc',
        powerSupply: 'eletric'
    },
    {
        brand: 'ford',
        typeId: '254abs',
        powerSupply: 'diesel'
    },
    {
        brand: 'ford',
        typeId: '294abc',
        powerSupply: 'gpl'
    },
    {
        brand: 'ford',
        typeId: '734acc',
        powerSupply: 'methan'
    },
    {
        brand: 'ford',
        typeId: '834avc',
        powerSupply: 'petrol'
    },
    {
        brand: 'fiat',
        typeId: '2389jai',
        powerSupply: 'eletric'
    },
    {
        brand: 'fiat',
        typeId: '238ljai',
        powerSupply: 'diesel'
    },
    {
        brand: 'fiat',
        typeId: '238lpai',
        powerSupply: 'gpl'
    },
    {
        brand: 'fiat',
        typeId: '23dsjai',
        powerSupply: 'methan'
    },
    {
        brand: 'fiat',
        typeId: '2a29jai',
        powerSupply: 'petrol'
    },
    {
        brand: 'mercedes-benz',
        typeId: 'lpojpl',
        powerSupply: 'eletric'
    },
    {
        brand: 'mercedes-benz',
        typeId: 'lpoasl',
        powerSupply: 'diesel'
    },
    {
        brand: 'mercedes-benz',
        typeId: 'lporfpl',
        powerSupply: 'gpl'
    },
    {
        brand: 'mercedes-benz',
        typeId: 'fhojpl',
        powerSupply: 'methan'
    },
    {
        brand: 'mercedes-benz',
        typeId: 'lpiopl',
        powerSupply: 'petrol'
    }
];

let petrolCars = [];

for (let i = 0; i < carArray.length; i++) {
    const car = carArray[i];
    if (car.powerSupply === 'petrol'){
        petrolCars.push(car);
    };
};

console.log(petrolCars);

let dieselCars = [];

carArray.forEach(car => {
    if(car.powerSupply === 'diesel'){
        dieselCars.push(car);
    }
});

console.log(dieselCars);

let otherCars = carArray.filter(car => car.powerSupply !== 'petrol' && car.powerSupply !== 'diesel');

console.log(otherCars)