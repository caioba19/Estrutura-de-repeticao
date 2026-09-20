type Turno = "matutino" | "vespertino" | "noturno";

interface RegistroConsumoSala {
  sala: string;
  turno: Turno;
  leiturasDiarias: number[];
}

function relatorioConsumoEscola(registros: RegistroConsumoSala[]): void {
  let maiorConsumoTotal = -1;
  let salaMaiorConsumo = "";

  console.log("================ RELATÓRIO DE CONSUMO POR SALA ================");

  for (const reg of registros) {
    let consumoTotalSala = 0;
    let leiturasValidasCount = 0;

    for (const leitura of reg.leiturasDiarias) {
      if (leitura >= 0) {
        consumoTotalSala += leitura;
        leiturasValidasCount++;
      } else {
        console.log(`Alerta: Leitura inválida (${leitura}) ignorada na Sala ${reg.sala}`);
      }
    }

    const mediaDiaria = leiturasValidasCount > 0 ? consumoTotalSala / leiturasValidasCount : 0;
    const classificacao = meidaDiariaHigh(mediaDiaria) ? "ALTO CONSUMO" : "CONSUMO NORMAL";

    if (consumoTotalSala > maiorConsumoTotal) {
      maiorConsumoTotal = consumoTotalSala;
      salaMaiorConsumo = reg.sala;
    }

    console.log(`Sala: ${reg.sala} | Turno: ${reg.turno}`);
    console.log(`  Consumo Total: ${consumoTotalSala} kWh | Média Diária: ${mediaDiaria.toFixed(2)} kWh`);
    console.log(`  Classificação: ${classificacao}\n`);
  }

  console.log(`--> Destaque: Sala de Maior Consumo: Sala ${salaMaiorConsumo} (${maiorConsumoTotal} kWh)`);
}

function meidaDiariaHigh(media: number): boolean {
  return media > 150;
}

const dadosEscola: RegistroConsumoSala[] = [
  { sala: "Lab 01", turno: "matutino", leiturasDiarias: [180, 160, -5, 175, 190, 200, 165] },
  { sala: "Sala 102", turno: "vespertino", leiturasDiarias: [80, 95, 90, 85, 100, 75, 90] },
  { sala: "Auditório", turno: "noturno", leiturasDiarias: [250, 300, 280, 290, 310, 270, 260] }
];

relatorioConsumoEscola(dadosEscola);
