const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log("LISTAR NUMEROS")

// sem arrow function
for (let numero of numeros) {
    console.log(numero)
}

//com arrow function - nao tem corpo, nao tem tipo, nao tem nome
console.log("COM ARROW FUNCTION:")
numeros.forEach(numero => console.log(numero))
    // forEach vai percorrer todo o array e fazer alguma coisa qnd percorrer
    //nesse caso pegar a var numero e imprimir no console

console.log("LISTAR NUMEROS MULTIPLICADOS POR 2:")
numeros.forEach(numero => console.log(numero * 2))

console.log("LISTAR NUMEROS PARES:")
numeros.forEach(numero => {
    if (numero % 2 === 0) 
        console.log(numero)  
})