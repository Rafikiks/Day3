function getBasketContent() {
    let fruits = [];
    
    for (let nbfruits = 0; nbfruits < 3; nbfruits++) {
        fruits.push('strawberry');
    }
    for (let nbfruits = 0; nbfruits < 2; nbfruits++) {
        fruits.push('apple');
    }
    for (let nbfruits = 0; nbfruits < 2; nbfruits++) {
        fruits.push('lime');
    }
    
    fruits.push('peach');
    
    for (let nbfruits = 0; nbfruits < 2; nbfruits++) {
        fruits.push('pear');
    }

    console.log(fruits.length + ' fruit(s) selected');
    return fruits;
}

if (typeof getBasketContent === "function") {
    const fruits = getBasketContent();
    showMyBasket(fruits);
}

// La fonction retourne un panier de fruits avec le nombre total affiché.
