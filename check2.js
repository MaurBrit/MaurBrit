let opcoes = ""
let tempoSelec = Number;

function fazerComida(comida, tempo){
    comida=="pipoca"? tempoSelec=10:0;
    comida=="macarão"? tempoSelec=8:0;
    comida=="carne"? tempoSelec=15:0;
    comida=="feijão"? tempoSelec=12:0;
    comida=="brigadeiro"? tempoSelec=8:0;
    if (opcoes==comida && tempo >= tempoSelec && tempo < tempoSelec *2){
        console.log("Prato pronto, Bom apetite!!!");
    } else if (opcoes==comida && tempo >= tempoSelec *2 && tempo < tempoSelec *3){
        console.log("Acomida queimou! Prato pronto. Bom apetite!!!");
    } else if (opcoes==comida && tempo >= tempoSelec *3){
        console.log("Kabuuum!!!");
    } else if (opcoes==comida && tempo < tempoSelec){
        console.log("Tempo insuficiente! Prato pronto, bom apetite!!!");
    } else {
        console.log("Prato Inexistente!");
    }
}

console.log("pipoca",20)