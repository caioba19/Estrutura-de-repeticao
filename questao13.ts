function gerarTabuada(numero: number): void {
  if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
    console.log(`Erro: O valor ${numero} é inválido. Informe um número inteiro entre 1 e 100.`);
    return;
  }

  console.log(`--- Tabuada do ${numero} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

gerarTabuada(7);     
gerarTabuada(0);    
gerarTabuada(5.5);  
