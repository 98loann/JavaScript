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
    let destinoExiste=false
    while (contador < 3){
        if (listaDeDestinos[contador] == destino){
            destinoExiste=true
            break
        }
        contador += 1
    }
    console.log("Destino existe: " +destinoExiste)