console.log(`trabalhando com condicionais`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)


//listaDeDestinos.push(`Belo Horizonte`)//inserindo item ao Array

const idadeComprador = 20
const estaAcompanhada = false
const temPassagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

/*if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`)
    listaDeDestinos.splice(1, 1) //removendo item
} else if (estaAcompanhada) {
    console.log(`Comprador está acompanhada`)
    listaDeDestinos.splice(1, 1)
} else {
    console.log(`Não está acompanhada`)
}
console.log(listaDeDestinos)*/
if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa Viagem`)
    listaDeDestinos.splice(1, 1) //removendo item
} else {
    console.log(`Não está acompanhada`)
}
console.log(listaDeDestinos)
console.log("Embarque \n\n")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem")
}else{
    console.log("Voce não pode embarcar")
}