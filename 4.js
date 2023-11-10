function contarVogais(string) {
    const vogais = string.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
}

let resultado = contarVogais("Olá, mundo!");
console.log(resultado);