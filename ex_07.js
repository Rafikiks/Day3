fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitNameFromIndex(index) {
    if (index === -1 || index === "last") {
        return fruits[fruits.length - 1];
    }
    if (isNaN(index) || index < 0 || index >= fruits.length) {
        return null;
    }
    return fruits[index];
}

let result = getFruitNameFromIndex("last");
displayResult(result);

// La fonction retourne le fruit correspondant à l'index ou null si l'index est invalide.
