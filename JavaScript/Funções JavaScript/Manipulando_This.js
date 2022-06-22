function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: 'maria',
  idade: 30
}

const pessoa2 = {
  nome: 'Gabriel',
  idade: 18
}

const animal = {
  nome: 'jully',
  idade: 1,
  raca: 'Shi'
}

// Com call
 console.log(calculaIdade.call(animal, 7))

// com apply
 console.log(calculaIdade.apply(pessoa1, [4]))

 