function contarPalavras(frase) {
    const palavras = frase.split(" ").filter(word => word !== "");
    return palavras.length;
}

const frase = "exemplo.";
const resultado = contarPalavras(frase);
console.log(resultado);