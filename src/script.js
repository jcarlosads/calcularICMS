// Função para inserir valor
function inserirValor() {
  const preco = parseFloat(prompt("Informe o preço do produto:"));
  return preco;
}

// Função para calcular o ICMS sobre o preço
function calcularICMS(preco) {
  const icms = 0.18; // 18% de ICMS
  return preco * icms;
}

// Função para calcular e mostrar o preço final
function calcularPrecoFinal(preco, icms) {
  const precoFinal = preco + icms;
  console.log(`O preço final do produto, incluindo o ICMS, é: R$ ${precoFinal.toFixed(2)}`);
}

// Função principal para chamadas das funções
function main() {
  const preco = inserirValor();
  const icms = calcularICMS(preco);
  calcularPrecoFinal(preco, icms);
}

// Executando a função principal
main();


