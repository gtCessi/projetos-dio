function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const person1 =  {
    nome: 'Angela',
    idade: 34,
}


console.log(calculaIdade.call(person1, 15));
console.log(calculaIdade.apply(person1, [40]));
