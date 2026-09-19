interface ConsumoResidencia {
  id: number;
  consumoAnterior: number;
  consumoAtual: number;
}

const residencias: ConsumoResidencia[] = [
  { id: 1, consumoAnterior: 200, consumoAtual: 170 }, 
  { id: 2, consumoAnterior: 150, consumoAtual: 145 },
  { id: 3, consumoAnterior: 0, consumoAtual: 100 },   
  { id: 4, consumoAnterior: 300, consumoAtual: 270 }, 
  { id: 5, consumoAnterior: 180, consumoAtual: 190 }, 
  { id: 6, consumoAnterior: 220, consumoAtual: 195 },
  { id: 7, consumoAnterior: 100, consumoAtual: 80 },
  { id: 8, consumoAnterior: 250, consumoAtual: 220 },
  { id: 9, consumoAnterior: 140, consumoAtual: 130 },
  { id: 10, consumoAnterior: 310, consumoAtual: 275 },
  { id: 11, consumoAnterior: 190, consumoAtual: 170 },
  { id: 12, consumoAnterior: 400, consumoAtual: 350 }
];

let metasAtingidas = 0;

for (const r of residencias) {
  if (r.consumoAnterior === 0) {
    console.log(`Residência ${r.id}: Consumo anterior é zero. Cálculo de percentual ignorado.`);
    continue;
  }

  const reducao = ((r.consumoAnterior - r.consumoAtual) / r.consumoAnterior) * 100;

  if (reducao >= 10) {
    metasAtingidas++;
    console.log(`Residência ${r.id}: Redução de ${reducao.toFixed(1)}% -> METAS ATINGIDA`);
  } else {
    console.log(`Residência ${r.id}: Redução de ${reducao.toFixed(1)}% -> Abaixo da meta`);
  }
}

console.log(`\nTotal de residências que atingiram a meta: ${metasAtingidas}/${residencias.length}`);
