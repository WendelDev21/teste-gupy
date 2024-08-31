/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/


function isFibonacci(num) {
    // Primeiros dois números da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Verifica se o número é 0 ou 1, que são os dois primeiros números da sequência
    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    // Calcula a sequência de Fibonacci até encontrar ou ultrapassar o número informado
    let next = a + b;
    while (next <= num) {
        if (next === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

// Defino o número a ser verificado
let numero1 = 21;
let numero2 = 33;  
let numero3 = 55;  

// Verifica se o número pertence à sequência de Fibonacci
let resultado1 = isFibonacci(numero1);
let resultado2 = isFibonacci(numero2);
let resultado3 = isFibonacci(numero3);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
