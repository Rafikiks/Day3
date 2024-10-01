function splitOperation(operation) {
    let parts = operation.split(' ');
    let firstNumber = parseInt(parts[0]);
    let operator = parts[1];
    let secondNumber = parseInt(parts[2]);
    return [firstNumber, operator, secondNumber];
}
function doOperation(operation) {
    let [firstNumber, operator, secondNumber] = splitOperation(operation);
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                console.log("Can't divide by 0");
                return null;
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        default:
            console.log("Opérateur non reconnu");
            return null;
    }
    return result;
}

// La fonction doOperation effectue l'opération mathématique basée sur l'opérateur donné
