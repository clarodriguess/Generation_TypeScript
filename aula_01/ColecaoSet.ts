// Colecao Set nao aceita dados repetidos 
// e nao tem indice
import leia = require("readline-sync");

const cores : Set<string> = new Set<string>()

//para add dados na colecao .add
cores.add("Azul")
cores.add("Verde")
cores.add("Verde")
cores.add("Amarelo")
cores.add("Vermelho")

console.log(cores)
console.table(cores)

for (let cor of cores){
    console.log(cor)
}

//verifica se o elemento existe
console.log("a cor verde existe?", cores.has("Verde"))

// deletar elemento
cores.delete("Verde")
console.table(cores)


