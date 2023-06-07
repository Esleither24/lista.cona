let numeroingresado1=0;
let numeroingresado2=0;
let numerocorrecto1=10;
let numerocorrecto2=50;
let intentos1=2;
let intentos2=4;
while (intentos1>0 && numeroingresado1!==numerocorrecto1 && numeroingresado2!==numerocorrecto2) {
     intentos1 = intentos1 -1 ;
     intentos2= intentos1 -1 ;
     numeroingresado1=(prompt('ingrese su primer numero:'));
     numeroingresado2=(prompt('ingrese su segundo numero:'));
}
if (numeroingresado1===numerocorrecto1 || numeroingresado2===numerocorrecto2) {
     console.log('felicidades eres un gran adivino, merlin estaria orgulloso de ti');
} else {
     console.log('las cosas no son lo que parecen, sigue intentando');
     while (intentos2>0 && numeroingresado2!==numerocorrecto2) {
          intentos2--;
          numeroingresado2=(prompt('ingrese su segundo numero:'));
     }
     if (numeroingresado2===numerocorrecto2) {
          console.log('a veces fallar no esta tan mal, a veces solo es intentar una vez mas');
          intentos2=0;
     } else {
          console.log('vaya!, mi pequeño adivinador ha perdido .pero recuerda siempre se puede intentar una vez mas');
     }
}