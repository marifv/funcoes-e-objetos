function mediaArray(array) {
    if (array.length === 0) {
        return 0; 
    }
    const soma = array.reduce((acc, valor) => acc + valor, 0);
    return soma / array.length;
}

let valores = [10, 20, 30, 40, 50];
let resultado = mediaArray(valores);
console.log(resultado);