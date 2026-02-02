import leia = require("readline-sync");
import Queue = require("../Queue");

const fila = new Queue<string>();

let continuar : boolean = true

console.log("Fila por ordem de chegada")
console.log("************************************")
console.log("\nMENU")
console.log("\n1: Adicionar Cliente na fila.")
console.log("2: Listar todos os Clientes")
console.log("3: Chamar (retirar) Cliente da fila")
console.log("0: Finalizar")
console.log("\n************************************")

while (continuar){
    let opcao = leia.questionInt("\nDigite a opcao desejada: ")
    switch (opcao){
        case 1:
            fila.enqueue(leia.question("Digite o nome do cliente: "))
            console.log("\nCliente adicionado na fila!")
            break
        case 2: 
            console.log("\n ****   Fila    ****")
            fila.printQueue();
            console.log("\n Tamanho da fila:", fila.count())
            break
        case 3:
            if (fila.isEmpty()){
                console.log("A fila está vazia")
                break
            } else {
            fila.dequeue()
            console.log("\n ****   Fila atualizada   ****")
            fila.printQueue();
            console.log("\nCliente chamado")
            console.log("\n Tamanho da fila:", fila.count())
            break}
        case 0:
            continuar = false
            console.log("Programa finalizado")
            break
        default:
            console.log("Opção inválida")
            break     

    }
}