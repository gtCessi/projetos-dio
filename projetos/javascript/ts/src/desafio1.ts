type identifica = number | string;

interface Funcionario {
    nome: string,
    id: identifica,
    idade?: number
}

const funcionario = {
    nome: 'Anderson',
    id: 112,
}

const funcionario2 = {} as Funcionario;
funcionario2.nome = 'Peterson';
funcionario2.id = 1234;
funcionario2.idade = 56;

const funcionario3: Funcionario = {
    nome:'Vermiliana',
    id: 551234,
    idade: 32
}