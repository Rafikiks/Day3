function splitOperation(operation) {
    let parts = operation.split(' ');
    let firstNumber = parseInt(parts[0]);
    let operator = parts[1];
    let secondNumber = parseInt(parts[2]);
    return [firstNumber, operator, secondNumber];
}

// La fonction retourne un tableau contenant le premier nombre, l'opérateur, et le deuxième nombre issus de la chaîne donnée
