// Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, 
// al termine della quale preme un secondo bottone e 
// viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..

let ingredientList = document.getElementById('ingredients_list');
let newIngredient = document.getElementById('ingredient');
let addIngredientBtn = document.getElementById('addIngredient');
let dishGenBtn = document.getElementById('dish');
let ingredientCounter = 0;
let dishImg = document.getElementById('dish_img');

addIngredientBtn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.append(newIngredient.value);
    ingredientList.appendChild(li);
    ingredientCounter++;
    newIngredient.value = '';
});

dishGenBtn.addEventListener('click', function(){
    if (ingredientCounter >= 2){
        setTimeout(generatePlate, (ingredientCounter * 2000), dishImg);
    }
});

function generatePlate(dishImageParent){
    dishImageParent.style.opacity = '1';
}