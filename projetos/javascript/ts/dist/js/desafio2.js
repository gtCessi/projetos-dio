"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Ator"] = 0] = "Ator";
    Profissao[Profissao["Professorx"] = 1] = "Professorx";
    Profissao[Profissao["Advogadx"] = 2] = "Advogadx";
    Profissao[Profissao["Cientista"] = 3] = "Cientista";
    Profissao[Profissao["Padeirx"] = 4] = "Padeirx";
    Profissao[Profissao["Estudante"] = 5] = "Estudante";
})(Profissao || (Profissao = {}));
const ana = {
    nome: 'Ana',
    idade: 23,
    profissao: Profissao.Estudante,
    cpf: 12312435
};
