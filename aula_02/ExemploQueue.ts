import leia = require("readline-sync");
import Queue = require("./Queue");

//criando um objeto chamado fila
const fila = new Queue<string>();

//se digitar fila. 
// ja traz os metodos q estao definidos na classe queue

//metodo para add na fila
//sempre vai entrar na msm sequecia q adicionar
fila.enqueue("João");
fila.enqueue("Maria");
fila.enqueue("José");
fila.enqueue(leia.question("Digite um nome: "));

//visualizar elementos da fila
console.log("\n ****    Fila   ****")
fila.printQueue();


//deletar elemento da fila (sempre vai tirar o primeiro)
fila.dequeue()
console.log("\n ****  Fila apos a remoçao de um elemento  ****")
fila.printQueue();


//tamanho da fila
console.log("\n Tamanho da fila:", fila.count())

//consultar fila
console.log("\n O Benedito ta na fila?", fila.contains("Benedito"))
