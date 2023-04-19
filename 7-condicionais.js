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

const idadeComprador=15
console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

if (idadeComprador >= 18){
    console.log(`Comprador maior de idade`)
    listaDeDestinos.splice(1,1) //removendo item
}else{
    console.log(`Comprador menor de idade, não é possível realizar a compra`)
}
console.log(listaDeDestinos)

