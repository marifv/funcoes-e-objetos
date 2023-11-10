function contarPropriedades(objeto) {
    return Object.keys(objeto).length;
}

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

const numeroPropriedades = contarPropriedades(carro);
console.log(numeroPropriedades);