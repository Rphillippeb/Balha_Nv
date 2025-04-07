const Teclado = require("prompt-sync")({sigint:true}); // conseguir digitar entradas dentro do terminal/console

var Tabuleiro = [];      //é uma array que representa um tabuleiro no jogo
let BarcoNaufragado = 0;  //variável que conta quantos barcos foram atingidos e afundados
let quantidadeTiros = 10; //é o número de tiros que o jogador pode dar


for (let l = 0; l < 5; l++) {  // linha da matriz do tabuleiro
    Tabuleiro[l] = [];  // Cria uma nova linha no tabuleiro
    for (let c = 0; c < 5; c++) {  // coluna da matriz do tabuleiro
        Tabuleiro[l][c] = false;  // coloca ''false''  em IJ ou seja, linha e coluna 
    }
}


for(let i = 0; i < 5; i++){    // loop que vai rodar 5 vezes
    let posx = Math.floor(Math.random() * 5); //esse vai gerar posiçao aleatoria  na linha
    let posy = Math.floor(Math.random() * 5); //esse vai gerar posiçao aleatoria na coluna
    Tabuleiro[posx][posy] = true; //Marca essa posição com 'true' no Tabuleiro
}



console.log(Tabuleiro);

while (quantidadeTiros > 0 && BarcoNaufragado < 5) {
    let JogadaX = parseInt(Teclado("Digite a posição em x :"));
    let JogadaY = parseInt(Teclado("Digite a posição em y :"));

    if(Tabuleiro[JogadaX][JogadaY] === true){
       console.log(" **** Barco Naufragado ****"); 
       BarcoNaufragado++;
       quantidadeTiros--;
    }
    else {
        console.log(" ***** Tiro na Água ****");
        quantidadeTiros--;
    }

    console.log("Tiros restantes: " + quantidadeTiros);
}

console.log("\nFIM DE JOGO");
console.log("Barcos Naufragados: " + BarcoNaufragado);
console.log("Tiros Restantes: " + quantidadeTiros);





