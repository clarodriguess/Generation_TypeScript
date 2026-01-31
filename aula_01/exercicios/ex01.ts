import leia = require("readline-sync");

const cores : Array<string> = new Array<string>()

console.log("Digite 5 cores:")
for (let i = 0; i < 5; i++){
    cores.push(leia.question(`Digite a cor ${i +1}:`))
}

console.log("Lista de cores:")
for (let cor of cores){
    console.log(cor)
}

cores.sort()
console.log("Lista de cores em ordem alfabetica:")
for (let cor of cores){
    console.log(cor)
}


// console.log(cores)

