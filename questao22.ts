function calcularFatorial(n: number): number | string {
  if (!Number.isInteger(n) || n < 0 || n > 15) {
    return "Erro: Forneça um número inteiro no intervalo de 0 a 15.";
  }

  if (n === 0) {
    return 1;
  }

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}

console.log("Caso 0!:", calcularFatorial(0));         
console.log("Caso 5!:", calcularFatorial(5));      
console.log("Caso -3:", calcularFatorial(-3));
console.log("Caso 4.2:", calcularFatorial(4.2));     
