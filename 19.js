const estoque = {
    produtos: {},

    adicionarProduto: function(nome, quantidade) {
        if (this.produtos[nome]) {
            this.produtos[nome] += quantidade;
        } else {
            this.produtos[nome] = quantidade;
        }
    },

    exibirQuantidade: function(nome) {
        if (this.produtos[nome]) {
            console.log(`Produto: ${nome}, Quantidade em estoque: ${this.produtos[nome]}`);
        } else {
            console.log(`O produto ${nome} não está em estoque.`);
        }
    }
};

estoque.adicionarProduto("Camiseta", 50);
estoque.adicionarProduto("Calça", 30);
estoque.adicionarProduto("Camiseta", 20); 
estoque.exibirQuantidade("Camiseta");
estoque.exibirQuantidade("Calça");
estoque.exibirQuantidade("Sapato");