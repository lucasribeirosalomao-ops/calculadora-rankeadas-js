// ✅ Função principal que calcula o nível do herói
function calcularNivel(vitorias, derrotas) {

  // ✅ VARIÁVEIS
  let saldoVitorias = 0;
  let nivel = "";

  // ✅ LAÇO DE REPETIÇÃO — soma o saldo acumulando cada vitória
  for (let i = 0; i < vitorias; i++) {
    saldoVitorias++;
  }

  // desconta as derrotas
  for (let i = 0; i < derrotas; i++) {
    saldoVitorias--;
  }

  // ✅ ESTRUTURA DE DECISÃO — define o nível com base nas vitórias
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  // ✅ RETORNO com o resultado
  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// ✅ VARIÁVEL que armazena o retorno da função
const resultado = calcularNivel(75, 20);

// Exibe a mensagem final
console.log(resultado);
