// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla 
// volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
// numeri da indovinare sono stati individuati.

// creare 5 numeri casuali e stamparli sull html

let arrayNumeri = [];
const numeriFisso = 5;
const numeriStampaHtml = document.getElementById('numeriStampa');
const inputs = document.getElementById('inputs')
const btn = document.getElementById('btn');
    const numeriFine = document.getElementById('numeriFine');

// funzione che nasconde il bottone
    hideButton(btn);
// fare un ciclo, che se i numeri non sono dentro l'array li pusha se no no 

for(let i = 0; i < numeriFisso; i++ ){
 let randomNuber =  getRndInteger(1,100);
    arrayNumeri.push(randomNuber);
    numeriStampaHtml.innerText = arrayNumeri;
}
//     if(!arrayNumeri.includes(randomNuber)){
//          arrayNumeri.push(randomNuber);
//          console.log(randomNuber)
//     //   numeriStampaHtml.innerHTML = arrayNumeri   
// }
    

   setTimeout(time,2000)
btn.addEventListener('click',()=>{
    for(let i = 0; i<numeriFisso; i++){
        const inputValue = document.getElementById('NumeroInserito'+i).value;
        if(inputValue == arrayNumeri[i]){
            numeriFine.innerHTML += `il numero della ${i+1} e corretto <3 <br> `
        }else{
            numeriFine.innerHTML += `il numero della ${i+1} e Sbagliato :( <br> `    
            
        }
    }
})


    













// -----------Funzioni-----------------------------
   function time(){
    const numeriUtente = [];

    for(let i = 0; i< numeriFisso; i++){
        const input = document.createElement("input");
        input.setAttribute('type','number');
        input.setAttribute("id","NumeroInserito"+i)
        inputs.appendChild(input);
        numeriStampaHtml.innerHTML = ' '
    }
    showButton(btn);
        

   }


   function hideButton(button){
        button.style.display = 'none';
   }
   function showButton(button){
    button.style.display = 'block';
}

   function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) );
  }
// creo un arry con i dati che mi da l'utente
// confronto con i mie dati 