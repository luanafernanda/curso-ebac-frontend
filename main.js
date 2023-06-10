function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  

  this.emitirSom = function() { 
    return "nenhum som"
  }

  this.obterDetalhes = function() {
    return `Nome: ${this.nome}, Idade: ${this.idade}`
  }
}

function Cachorro(nome, idade, raca){
  Animal.call(this, nome, idade);  
  this.raca = raca;
  

  this.emitirSom = function() {
    return "Au Au";
  }

  this.obterDetalhes = function() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`;
    
  }
}

function Gato(nome, idade, cor) {
  Animal.call(this, nome, idade);
  this.cor = cor;

  this.emitirSom = function() {
    return "meow";
  }

  this.obterDetalhes = function() {
    return `Nome: ${this.nome}, Idade: ${this.idade}, Cor: ${this.cor}`;
  }
}

const floki = new Cachorro('Floki', 7, 'Poodle');
const nami = new Gato('Nami', 3, 'Branca');
const nico = new Gato('Nico', 0.7, 'Preta');


console.log(floki.emitirSom())  
console.log(floki.obterDetalhes())  
console.log(nami.emitirSom())  
console.log(nico.obterDetalhes())

