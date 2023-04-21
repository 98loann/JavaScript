console.log(`trabalhando com loops`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)


//listaDeDestinos.push(`Belo Horizonte`)//inserindo item ao Array

const idadeComprador = 20
const estaAcompanhada = false
let temPassagemComprada = false
const destino = "Rio de Janeiro"

console.log("\n Destinos possíveis: \n ")


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true 

    let contador =0
    while (contador < 3){
        if (listaDeDestinos[contador] == destino){
            console.log("Destino existe")
        }else{
            console.log("Destino não existe")
        }
        contador += 1
    }