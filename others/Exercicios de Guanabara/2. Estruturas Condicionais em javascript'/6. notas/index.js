'use strict'

// Problema "notas"
// [] Fazer um programa para ler as duas notas que um aluno obteve no primeiro e segundo semestres de
// uma disciplina anual. Em seguida, mostrar a nota final que o aluno obteve (com uma casa decimal) no
// ano juntamente com um texto explicativo. Caso a nota final do aluno seja inferior a 60.00, mostrar a
// mensagem "REPROVADO", conforme exemplos.


const nota1 = +(prompt('digite a primeira nota'));
const nota2 = +(prompt("DIgite a segunda nota"))

const soma = () => {
    return nota1 + nota2;
}

const resp = soma() < 60 ? 'Reprovado' : 'Aprovado';

console.log("NOta final", soma())
console.log(resp)