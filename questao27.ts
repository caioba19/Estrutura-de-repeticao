function processarPesquisa(respostas: number[]): void {
  const frequencias: number[] = new Array(11).fill(0); 
  let respostasInvalidas = 0;
  let somaNotasValidas = 0;
  let totalValidas = 0;

  for (const r of respostas) {
    if (Number.isInteger(r) && r >= 0 && r <= 10) {
      frequencias[r]++;
      somaNotasValidas += r;
      totalValidas++;
    } else {
      respostasInvalidas++;
    }
  }

  const mediaValida = totalValidas > 0 ? somaNotasValidas / totalValidas : 0;

  console.log("--- RELATÓRIO DA PESQUISA ---");
  console.log(`Respostas Válidas: ${totalValidas}`);
  console.log(`Respostas Inválidas: ${respostasInvalidas}`);
  console.log(`Média das notas válidas: ${mediaValida.toFixed(2)}`);
  console.log("Distribuição por nota (0 a 10):");
  frequencias.forEach((freq, nota) => {
    console.log(`  Nota ${nota}: ${freq} voto(s)`);
  });
}

processarPesquisa([10, 8, 5, -1, 10, 12, 7, 8, 8, 0, 99]);
