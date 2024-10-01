fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];

function getFruit(indexname) {
    if (indexname === -1 || indexname === "last") {
        return fruits[fruits.length - 1];
    }
    if (typeof indexname === 'string') {
        let index = fruits.indexOf(indexname);
        return index !== -1 ? index : null;
    } else if (typeof indexname === 'number') {
        return fruits[indexname] || null;
    } else {
        return null;
    }
}

// La fonction retourne le fruit ou son index selon le paramètre fourni, ou null si non trouvé.
displayResult(getFruit("Mango"));
