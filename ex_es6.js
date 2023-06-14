const alunos = [
  {nome: 'Grace', nota: 10},
  {nome: 'Arthur', nota: 5},
  {nome: 'Nico', nota: 6},
  {nome: 'Robin', nota: 8} 
]

const filtrarAlunos = (alunos) => {
  const aprovados = alunos.filter(aluno => aluno.nota >= 6);
  return aprovados
};


console.log(filtrarAlunos(alunos))