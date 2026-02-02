import leia = require("readline-sync");
import Stack = require("./Stack");


//criando um objeto chamado fila
const pilha = new Stack<string>();

//se digitar pilha. 
// ja traz os metodos q estao definidos na classe Stack

//metodo para add na pilha
pilha.push("Maria");
pilha.push("José");
pilha.push("João");
pilha.push(leia.question("Digite um nome: "));

//visualizar elementos da pilha
console.log("\n ****    pilha   ****")
pilha.printStack();


//deletar elemento da pilha (sempre vai tirar o ultimo)
pilha.pop()
console.log("\n ****  pilha apos a remoçao de um elemento  ****")
pilha.printStack();


//tamanho da pilha
console.log("\n Tamanho da pilha:", pilha.count())  


//consultar pilha
console.log("\n O José ta na pilha?", pilha.contains("José"))
