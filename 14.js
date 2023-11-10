const produto = {
    nome: "Camiseta",
    preco: 25.99,
    quantidadeEstoque: 50
};

function calcularTotal(produto) {
    return produto.preco * produto.quantidadeEstoque;
}

const total = calcularTotal(produto);
console.log(total);