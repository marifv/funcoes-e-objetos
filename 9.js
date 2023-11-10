function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = NumeroAleatorio(10, 20);
console.log(numeroAleatorio);