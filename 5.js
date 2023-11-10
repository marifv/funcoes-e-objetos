function multiplicarArray(array, multiplicador) {
    return array.map(elemento => elemento * multiplicador);
}

let arrayOriginal = [2, 4, 6, 8];
let multiplicador = 3;
let resultado = multiplicarArray(arrayOriginal, multiplicador);
console.log(resultado);