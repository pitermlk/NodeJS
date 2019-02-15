// FORA DE UMA FUNÇÃO O THIS APONTA PARA O OBJETO MODULE.EXPORTS

// DENTRO DE UMA FUNÇÃO O THIS APONTA PARA O OBJETO GLOBAL 

console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function logThis(){
    console.log(this === global)
    console.log(this === module)
    console.log(this === exports)
    console.log(this === module.exports)
}

logThis()
