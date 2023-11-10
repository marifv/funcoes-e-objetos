const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    exibirInformacoes: function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
};

carro.exibirInformacoes();