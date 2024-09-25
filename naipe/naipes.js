let cartas=Number(prompt('Quantas cartas voce deseja virar?'))
let foto
let numero


for(let i=0;i<cartas;i++){
    let naipe=parseInt(Math.random()*3)
    let numero=parseInt((Math.random()*9)+1)
    if(naipe==0){
        foto="copas"
    }else if (naipe==1) {
        foto="espadas"
    }else if(naipe == 2){
        foto="ouros"

    }else if(naipe==3){
     foto="paus"
    }
    else{
        foto="Esse naipe nao existe"
    }
    console.log(numero+" de "+foto)
   }






