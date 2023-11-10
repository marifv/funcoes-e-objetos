const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

function mostrarInfo(pessoa) {
    for (let propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
}

mostrarInfo(pessoa);