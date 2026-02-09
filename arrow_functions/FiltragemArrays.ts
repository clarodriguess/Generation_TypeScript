const numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
const numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
const numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
const estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
const estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
const estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

//manipular arrays com funcoes da classe Array

//MAP
//le todo o array e modifica o array 
// mas nao no original, é preciso criar um novo array para armazenar as alteraçoes)
console.log("------MAP------")
console.log('Multiplicar todos os elementos por 3:')
const numerosMultiplicadosPor3 = numerosOrdenados.map(numero => numero * 3)
console.dir(numerosMultiplicadosPor3)

//FILTER
//filtra os dados

console.log("------FILTER------")
console.log("------filter + includes------")
console.log("Listar todos os estados que possuem a palavra rio")
const estadosComRio = estados.filter(estado => estado.toLocaleUpperCase().includes('RIO'))
    //metodo .includes vai trazer todos as strings q possuem a palavra Rio 
console.dir(estadosComRio)

//endsWith  (termina com)
console.log("------filter + endsWith------")
console.log("Listar todos os estados que terminam com a palavra SUL")
const estadosTerminamComSul = estados.filter(estado => estado.toLocaleUpperCase().endsWith('SUL'))
console.dir(estadosTerminamComSul)


//REDUCE
console.log("------REDUCE------")
console.log("Listar estados sem repetir")
const estadosSemRepeticao = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if(acumulador.indexOf(estado) === -1) //qnd indexOf retorna -1 é pq nao encontrou na array
        acumulador.push(estado);
    return acumulador
}, []);
console.dir(estadosSemRepeticao)
//acumulador é um array q vai guardar os estados sem repetir - comeca vazio
//le item por item da array, se nao tiver na lista vai pra array acumuludor
//se ja tiver, ignora e vai pra proxima checagem


//find
console.log("------FIND------")
console.log("Encontrar o primeiro numero maior que 9:")
const numeroMaiorQue9 = numerosRepetidos.find(numero => numero > 9)
console.dir(numeroMaiorQue9)

//se quiser saber o indice desse numero
console.log("------findIndex------")
console.log("Encontrar o indice do primeiro numero maior que 9:")
const indeceNumeroMaiorQue9 = numerosRepetidos.findIndex(numero => numero > 9)
console.dir(indeceNumeroMaiorQue9)
// se for pegar todos precisa usar o reduce

//COMBINAR 2 ARRAYS
//Spread Operator ...
console.log("------COMBINAR 2 ARRAYS C SPREAD OPERATOR------")
const arrayCombinado = [...numerosOrdenados, ...numerosRepetidos]
console.dir(arrayCombinado)
//... significa: pega tudo da array numeros e tudo da numerosRepetidos 

