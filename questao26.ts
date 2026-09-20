function decomporSaque(valor: number): void {
  if (!Number.isInteger(valor) || valor <= 0) {
    console.log(`Erro: Valor R$ ${valor} é inválido.`);
    return;
  }

  const notasDisponiveis = [100, 50, 20, 10, 5, 2];
  let restante = valor;
  const decomposicao: { [cedula: number]: number } = {};

  for (const nota of notasDisponiveis) {
    const qtdNotas = Math.floor(restante / nota);
    if (qtdNotas > 0) {
      decomposicao[nota] = qtdNotas;
      restante %= nota;
    }
  }
  if (restante !== 0) {
    console.log(`Erro: Impossível decompor o valor R$ ${valor} com as cédulas disponíveis.`);
  } else {
    console.log(`Saque de R$ ${valor} realizado:`, decomposicao);
  }
}


decomporSaque(387); 
decomporSaque(1);   
decomporSaque(250); 
