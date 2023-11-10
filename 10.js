function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;  
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;  
        }
    }
    return true; 

const num = 17;
const resultado = verificarPrimo(num);
console.log(resultado);