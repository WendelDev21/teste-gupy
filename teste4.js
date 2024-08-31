/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal 
da distribuidora.*/


// Valores de faturamento por estado em reais (R$)
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Função para calcular o percentual de representação
function calcularPercentual(faturamento) {
    // Calcular o valor total de faturamento
    const valorTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

    // Calcular o percentual para cada estado
    const percentualPorEstado = {};
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / valorTotal) * 100;
        percentualPorEstado[estado] = percentual.toFixed(2); // Arredondar para 2 casas decimais
    }

    return percentualPorEstado;
}

// Executar a função e exibir os resultados
const percentuais = calcularPercentual(faturamentoPorEstado);
console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
