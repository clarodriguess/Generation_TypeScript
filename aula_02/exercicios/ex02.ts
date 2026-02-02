import leia = require("readline-sync");
import Stack = require("../Stack");

const pilha = new Stack<string>();

console.log("PILHA DE LIVROS")
console.log("************************************")
console.log("\nMENU")
console.log("\n1: Adicionar um novo livro na pilha")
console.log("2: Listar todos os livros da pilha")
console.log("3: Retirar um livro da pilha")
console.log("0: Finalizar")
console.log("\n************************************")

let continuar : boolean = true

while (continuar){
    let opcao = leia.questionInt("\nDigite a opcao desejada: ")
    switch (opcao){
        case 1:
            pilha.push(leia.question("Digite o nome do livro: "));
            console.log("\nLivro adicionado na pilha!")
            break
        case 2:
            console.log("\n ****  Pilha de livros  ****")
            pilha.printStack();
            console.log("\nTotal de livros na pilha:", pilha.count())
            break
        case 3:
            if (pilha.isEmpty()){
                console.log("A pilha está vazia")
                break
            } else {
            pilha.pop()
            console.log("\n ****   Pilha atualizada   ****")
            pilha.printStack();
            console.log("\nLivro retirado da pilha")
            console.log("\nTotal de livros na pilha", pilha.count())
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