const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outros] = [1, 2, 3, 4, 5, 6];

const [nome1 = 'Matheus'] = [];

const pessoa = {
    nome: 'Math',
    idade:'21'
}

const pessoaComTelefone = {telefone: 11123123123 , ...pessoa}

const { nome } = pessoa;
const { idade } = pessoa;

function imprimeDados({ nome, idade }) {    
    console.log(nome, idade);
}

imprimeDados(pessoaComTelefone);