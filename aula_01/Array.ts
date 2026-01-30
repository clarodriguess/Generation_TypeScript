import leia = require("readline-sync");

//tem q declarar qual vai ser o tipo
// esse tipo de array nao precisa declarar o tamanho, pq ela é dinamica
const numeros : Array<number> = new Array<number>()

//para add dados na colecao .push()
numeros.push(5)
numeros.push(2, 4, 6)
numeros.push(leia.questionInt("Digite um numero: "))

console.log(numeros)
console.table(numeros)

//for of - uma forma reduzida de usar o for, se nao precisar do indice
//o of indica q tem q percorrer toda a colecao, 
// sem precisar do for tradicional
for (let numero of numeros){
    console.log(numero)
}

//verifica se o elemento existe
console.log("o numero 5 existe?", numeros.includes(5))

//verifica o indice do elemento
console.log("Qual o indice do numero 5?", numeros.indexOf(5))

//Deletar elemento da lista
//Splice - apagar 1 elemento a partir do elemento 5
numeros.splice(numeros.indexOf(5), 1)

console.table(numeros)

