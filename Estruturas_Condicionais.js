let jogador = 1
var array = ["a","b","c","d","e","f","g","h",]

// temos o chamado if ternario que é a declaração de um if em uma unica linha
// condição ? instrução1 : instrução 2

jogador > 1 ? console.log("fé em deus") : console.log("morreu")

//switch case

switch(jogador) {

    case 1:
        console.log("amém");
    break;

    case 2:
        console.log("amém papai");
    break;

    case 3:
        console.log("amém mamãe");
    break;

    default:
        console.log("fé em dios!")
    break;

}


//temos o for que é ingual ao C 
// for (condição inicial ; condiçãoo de parada ; incremento)

for(i = 0 ; i = 10 ; i++){
    console.log(i);
}

// podemos usar o in aqui, semelhante ao python

for(i in array){
    console.log(i)
}