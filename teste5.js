/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/


// Função para inverter os caracteres de uma string
function inverterString(str) {
    let strInvertida = ''; // Inicializa a string invertida como uma string vazia
    
    // Loop para percorrer a string original de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i]; // Adiciona cada caractere ao final da string invertida
    }
    
    return strInvertida; // Retorna a string invertida
}

// Exemplo de uso
const stringOriginal = 'Hello, World!'; // String para ser invertida
const stringInvertida = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
