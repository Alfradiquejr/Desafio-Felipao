let nomeHeroi = "Alfradique"
let experienciaJogador = 5500
let LVL = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal", "radiante"]
let nivel = 0

switch (true) {
case experienciaJogador < 1000:
nivel = 0
break;
case experienciaJogador <= 2000:
nivel = 1
break;
case experienciaJogador <= 3000:
nivel = 2
break;
case experienciaJogador <= 4000:
nivel = 3
break;
case experienciaJogador <= 5000:
nivel = 4
break;
case experienciaJogador <= 6000:
nivel = 5
break;
case experienciaJogador <= 8000:
nivel = 6
break;
default:
nivel = 7
}

console.log("O heroi de nome " + nomeHeroi + " está no seguinte LVL: " + LVL[nivel])