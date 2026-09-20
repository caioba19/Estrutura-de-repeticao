function simularAmortizacao(dividaInicial: number, pagamentoMensal: number): void {
  let saldoDevedor = dividaInicial;
  let mes = 0;

  const jurosMesUm = saldoDevedor * 0.01;
  if (pagamentoMensal <= jurosMesUm) {
    console.log("Erro: Pagamento mensal é insuficiente para cobrir os juros. A dívida crescerá infinitamente.");
    return;
  }

  while (saldoDevedor > 0 && mes < 120) {
    mes++;
    saldoDevedor += saldoDevedor * 0.01;
    saldoDevedor -= pagamentoMensal;

    if (saldoDevedor < 0) {
      saldoDevedor = 0;
    }

    if (mes % 12 === 0 || saldoDevedor === 0) {
      console.log(`Mês ${mes}: Saldo Restante = R$ ${saldoDevedor.toFixed(2)}`);
    }
  }

  if (saldoDevedor === 0) {
    console.log(`\nDívida totalmente quitada no mês ${mes}.`);
  } else {
    console.log(`\nLimite de 120 meses atingido. Saldo residual: R$ ${saldoDevedor.toFixed(2)}`);
  }
}

simularAmortizacao(10000, 300);
