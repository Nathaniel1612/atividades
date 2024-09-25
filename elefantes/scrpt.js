let elefante=Number(prompt('Quantos elefantes tem no ambiente?'))

let i = 1;
 
if(elefante==1){
    console.log("este unico elefante incomoda muita gente ")
 }
 else{
     for(i=1; i<=elefante; i++){
        console.log(i + " elefantes incomodam muita gente" +(i+1) + " elefantes incomodam muito mais")
    }

 }
