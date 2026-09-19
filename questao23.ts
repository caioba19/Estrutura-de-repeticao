const turmasNotas: number[][] = [
  [7.0, 8.5, 6.0, 9.5],
  [5.0, 4.0, 6.5, 5.5], 
  [9.0, 9.5, 10.0, 8.5]
];

let maiorNotaGeral = -1;

for (let i = 0; i < turmasNotas.length; i++) {
  let somaTurma = 0;

  for (let j = 0; j < turmasNotas[i].length; j++) {
    const notaAtual = turmasNotas[i][j];
    somaTurma += notaAtual;

    if (notaAtual > maiorNotaGeral) {
      maiorNotaGeral = notaAtual;
    }
  }

  const mediaTurma = somaTurma / turmasNotas[i].length;
  console.log(`Média da Turma ${i + 1}: ${mediaTurma.toFixed(2)}`);
}

console.log(`Maior nota identificada em todas as turmas: ${maiorNotaGeral}`);
