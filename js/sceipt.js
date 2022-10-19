// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla 
// volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
// numeri da indovinare sono stati individuati.

// creare 5 numeri casuali e stamparli sull html

let arrayNumeri = [];
const numeriFisso = 5;
const numeriStampaHtml = document.getElementById('nuemriStampa')

// Funzione che genera randomicamente i numeri 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// fare un ciclo, che se i numeri non sono dentro l'array li pusha se no no 

while(arrayNumeri.length < numeriFisso ){
 let randomNuber =  getRndInteger(1,100);
    if(!arrayNumeri.includes(randomNuber)){
  const NumeriVisual =  arrayNumeri.push(randomNuber);
        console.log(NumeriVisual);
    
}
    }