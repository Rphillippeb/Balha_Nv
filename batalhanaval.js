const Teclado = require("prompt-sync")({sigint:true});
var Tabuleiro = [];
let BarcoNaufragado = 0;
let quantidadeTiros = 10;

for (let l = 0; l < 5; l++) {
    Tabuleiro[l] = []; 
    for (let c = 0; c < 5; c++) {
        Tabuleiro[l][c] = false;
    }
}

for(let i = 0; i < 5; i++){
    let posx = Math.floor(Math.random() * 5);
    let posy = Math.floor(Math.random() * 5);
    Tabuleiro[posx][posy] = true;
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





0