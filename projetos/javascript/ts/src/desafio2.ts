interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
    cpf: number
}

enum Profissao {
    Ator,
    Professorx,
    Advogadx,
    Cientista,
    Padeirx,
    Estudante
}

const ana: Pessoa = {
    nome: 'Ana',
    idade: 23,
    profissao: Profissao.Estudante,
    cpf: 12312435
}