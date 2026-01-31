import leia = require("readline-sync");

const numeros : Set<number> = new Set<number>()

console.log("Digite 10 valores inteiros não repetidos ")
for (let i = 0; i < 10; i++){
    numeros.add(leia.questionInt (`Digite o valor ${i + 1}:`))
}
// set nao ordena - criar uma array para ordenar
let ordenar = Array.from(numeros)
ordenar.sort()
console.log("Listar dados do Set:")

for (let num of ordenar){
    console.log(num)
}