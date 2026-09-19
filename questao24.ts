const filas = ["A", "B", "C", "D", "E"];
const assentosPorFila = 6;
const assentosReservados = ["A1", "B3", "C5", "E6"];

console.log("--- MAPA DE ASSENTOS DO AUDITÓRIO ---");

for (const fila of filas) {
  let representacaoFila = `${fila} | `;

  for (let num = 1; num <= assentosPorFila; num++) {
    const codigoAssento = `${fila}${num}`;
    const estaReservado = assentosReservados.includes(codigoAssento);

    representacaoFila += estaReservado ? `[${codigoAssento}: X] ` : `[${codigoAssento}: O] `;
  }

  console.log(representacaoFila);
}
