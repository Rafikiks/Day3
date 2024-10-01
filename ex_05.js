function getBasketContent() {
    
    const fruits = [
        { name: 'strawberry', quantity: 3 },
        { name: 'apple', quantity: 2 },
        { name: 'lime', quantity: 2 },
        { name: 'peach', quantity: 1 },
        { name: 'pear', quantity: 2 }
    ];

   
    let fruitList = [];
    fruits.forEach(fruit => {
        for (let i = 0; i < fruit.quantity; i++) {
            fruitList.push(fruit.name.toLowerCase())
        }
    });

    
    console.log(`${fruitList.length} fruit(s) selected`)

    
    return fruitList
}


getBasketContent()
