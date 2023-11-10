function ordenarObjetos(array, propriedade) {
    array.sort((a, b) => a[propriedade] - b[propriedade]);
}

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 20 }
];

ordenarObjetos(pessoas, 'idade');
console.log(pessoas);

estoque.adicionarProduto("Camiseta", 50);
estoque.adicionarProduto("Calça", 30);
estoque.adicionarProduto("Camiseta", 20); 
estoque.exibirQuantidade("Camiseta");
estoque.exibirQuantidade("Calça");
estoque.exibirQuantidade("Sapato");