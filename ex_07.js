const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];


function getFruitFromIndex(index) {
   
    if (index === -1) {
        return fruits[fruits.length - 1];
    }
    if (index < 0 || index >= fruits.length) {
        return null;
    }
    return fruits[index];
}

function displayResult(result) {
    console.log(result);
}
