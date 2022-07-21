const notaMedia = 7;
const turma = [] ;
const turmaAprovada = [];
const turmaReprovada = [];

const aluno = {
    nome: '',
    nota1: 0,
    nota2: 0,
    media: 0,
}

function mediaFinal(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    return media;
}

const aluno1 = Object.create(aluno);
aluno1.nome = 'Luana';
aluno1.nota1 = 8;
aluno1.nota2 = 7.8;
aluno1.media = mediaFinal(aluno1.nota1, aluno1.nota2);
turma.push(aluno1);

const aluno2 = Object.create(aluno);
aluno2.nome = 'Genesio';
aluno2.nota1 = 8;
aluno2.nota2 = 6;
aluno2.media = mediaFinal(aluno2.nota1, aluno2.nota2);
turma.push(aluno2);

const aluno3 = Object.create(aluno);
aluno3.nome = 'Tayanne';
aluno3.nota1 = 9;
aluno3.nota2 = 7;
aluno3.media = mediaFinal(aluno3.nota1, aluno3.nota2);
turma.push(aluno3);

const aluno4 = Object.create(aluno);
aluno4.nome = 'Marcos Paulo';
aluno4.nota1 = 5;
aluno4.nota2 = 6;
aluno4.media = mediaFinal(aluno4.nota1, aluno4.nota2);
turma.push(aluno4);

const aluno5 = Object.create(aluno);
aluno5.nome = 'Gertrudes';
aluno5.nota1 = 4;
aluno5.nota2 = 2;
aluno5.media = mediaFinal(aluno5.nota1, aluno5.nota2);
turma.push(aluno5);


for (let i = 0; i < turma.length; i++) {
    if (turma[i]['media'] >= notaMedia) {
        turmaAprovada.push(turma[i]);
    } else {
        turmaReprovada.push(turma[i]);
    }
}

console.log('Alunxs aprovadxs:\n');
for (let y = 0; y < turmaAprovada.length; y++) {
    console.log(turmaAprovada[y]['nome']);
}


console.log('\n\nAlunxs reprovadxs:\n');
for (let x = 0; x < turmaReprovada.length; x++) {
    console.log(turmaReprovada[x]['nome']);
}
