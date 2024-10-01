function getIndexFromName(name) {
    // Cherche l'index du fruit dans le tableau
    const index = fruits.indexOf(name);

    // Si le fruit est trouvé, retourne l'index, sinon retourne null
    if (index !== -1) {
        return index;
    } else {
        return null;
    }
}

// Fonction pour afficher le résultat
function displayResult(result) {
    console.log(result);
}
