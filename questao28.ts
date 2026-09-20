function buscarTriplaConsecutiva(codigos: number[]): void {
  let padraoLocalizado = false;

  for (let i = 0; i < codigos.length - 2; i++) {
    if (codigos[i] === codigos[i + 1] && codigos[i] === codigos[i + 2]) {
      console.log(`Padrão detectado! Valor: ${codigos[i]} no índice inicial: ${i}`);
      padraoLocalizado = true;
      break;
    }
  }

  if (!padraoLocalizado) {
    console.log("Nenhum padrão de 3 valores consecutivos iguais foi localizado.");
  }
}

console.log("Teste com presença:");
buscarTriplaConsecutiva([10, 4, 7, 7, 7, 2, 9]);

console.log("\nTeste com ausência:");
buscarTriplaConsecutiva([10, 4, 7, 2, 7, 7, 9]);
