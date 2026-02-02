import leia = require("readline-sync");

//colecao map nao tem indice
const participantes: Map<number, string> = new Map<number, string>()

//para add dados na colecao map -> .set()
participantes.set(1, "João")
participantes.set(2, "Maria")
participantes.set(3, "José")
participantes.set(4, "Ana") 

//desestruturação do objeto 
//estou informando q o numero vai virar matricula 
// e a string vai ser nome
for(let[matricula, nome] of participantes){
    console.log(`Matricula: ${matricula} - Nome: ${nome}`)
}


//procurar elemento pela chave: - true or false
console.log("Existe a matricula 2?", participantes.has(2))


//retornar o valor a partir da chave
console.log("Qual o nome do aluno com  a matricula 3?", participantes.get(3))


//procurar elemento pelo valor:
//precisa primeiro converter os valores pra array
//dps usar o metodo .includes (q pertence a classe string)
console.log("Existe o nome João?", Array.from(participantes.values()).includes("João"))


//para retornar as chaves 
//.keys pega somente a primeira coluna
console.log(' .keys() para retonar as chaves:')

for (let matricula of participantes.keys()){
    console.log(matricula)
}


//para retornar os valores
//.values pega somente a segunda coluna
console.log(" .values() para retonar os valores:")

for (let nome of participantes.values()){
    console.log(nome)
}

//deletar pela chave 
participantes.delete(2)

console.table(participantes)
//o interation index é do .table
//colection map nao tem indice!!!

