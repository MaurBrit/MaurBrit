function preparar(prato, time){
var timePrato = 0

    if(prato=="pipoca") {timePrato=10;}
    else if(prato=="macarrão") {timePrato=8;}
    else if(prato=="carne") {timePrato=15;}
    else if(prato=="feijão") {timePrato=12;}
    else if(prato=="brigadeiro") {timePrato=8;}

    if (time==timePrato && timePrato!=0) {console.log("Prato pronto, bom apetite!!")}
    if (timePrato==0){console.log("Prato Inexistente!!");}
    if (time>=timePrato*2 && time<timePrato*3 && time!=00){console.log("A comida queimou!!");}
    if (time>=timePrato*3 && timePrato!=0){console.log("Kabuuum!!");}
    if (time<timePrato && timePrato!=0){console.log("Tempo Insuficicente!");}
    console.log("Prato pronto, bom apetite!!")
}
preparar("pipoca",10)
preparar("macarrão",20)
preparar("carne",10)
preparar("espaguete",0)