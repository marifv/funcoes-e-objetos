const aluno = {
    nome: "João",
    notas: [8, 7, 9, 6],

    calcularMedia: function() {
        const total = this.notas.reduce((acc, nota) => acc + nota, 0);
        return total / this.notas.length;
    }
};

const media = aluno.calcularMedia();
console.log(`A média do aluno ${aluno.nome} é ${media}`);