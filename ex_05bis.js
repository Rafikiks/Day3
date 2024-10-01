function getBasketContent(nbFruits) {
    let strawberry = 'strawberry';
    let apple = 'apple';
    let lime = 'lime';
    let peach = 'peach';
    let pear = 'pear';
    
    let fruits = [strawberry, strawberry, strawberry, apple, apple, lime, lime, peach, pear, pear];

    if (nbFruits > fruits.length) {
        console.log("Too many fruit(s) selected.");
        return [];
    } else {
        console.log(nbFruits + ' fruit(s) selected');
        return fruits.slice(0, nbFruits);
    }
}

if (typeof getBasketContent === "function") {
    const fruits = getBasketContent(10);
    showMyBasket(fruits);
}

// La fonction retourne les fruits demandés ou un message d'erreur si le nombre est trop élevé.
