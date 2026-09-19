function gerarFibonacci(n: number): number[] | string {
  if (!Number.isInteger(n) || n < 2 || n > 30) {
    return "Erro: O parâmetro n deve ser um inteiro entre 2 e 30.";
  }

  const sequencia: number[] = [];
  let a = 0;
  let b = 1;

  sequencia.push(a);
  sequencia.push(b);

  for (let i = 2; i < n; i++) {
    const proximo = a + b;
    sequencia.push(proximo);
    a = b;
    b = proximo;
  }

  return sequencia;
}

console.log("n = 2:", gerarFibonacci(2));
console.log("n = 8:", gerarFibonacci(8));
console.log("n = 35 (Inválido):", gerarFibonacci(35));
