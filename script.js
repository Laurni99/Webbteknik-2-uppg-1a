/* Uppgift U1 */

// Globala variabler
let optionsDialog;	    // Element för inställningsdialog


let rollElem;            //Element för utskrift av antal omkast som återstår


let resElem;	        // Element för resultat


let newBtn = document.querySelector("#die1,#die2,#die3,#die4,#die5");             // Element för "nytt spel"


let stopBtn;            // Knapp för att stanna


let playerName = "Du";  // Spelarens namn


let maxNrOfRolls = 3;   // Valt max antal omkast av tärningar


let nrOfRolls = 0;      // Antal omkast som återstår


let sum = 0;            // Summan av kastade tärningar




// --------------------------------------------------
// Ta fram referenser till element i gränssnittet och lägg till händelselyssnare.
function init() {
 optionsDialog =document.querySelector("#options") //Inställnings knapp
 playerName = document.querySelector("#player") // Spelarens namn
 maxNrOfRolls = document.querySelector("#nrOfReroll") // Antal kast
 document.querySelector("#optionsBtn").addEventListener("click",showOptionsDialog); //visa  
 document.querySelector("#optionsOkBtn").addEventListener("click",closeOptionsDialog); // stäng
 document.querySelector("#newBtn").addEventListener("click",newGame); 
 document.querySelector("#stopBtn").addEventListener("click",endGame);
 document.querySelector("#stopBtn").disabled=true;
 rollElem = document.querySelector ("#nrOfReroll");
 newBtn=document.querySelector("#die1");
 document.querySelector("#newBtn").addEventListener("click", newGame);
 document.querySelector("#die1").addEventListener("click", newGame);  
 document.querySelector("#die2").addEventListener("click", newGame); 
 document.querySelector("#die3").addEventListener("click", newGame);   
 document.querySelector("#die4").addEventListener("click", newGame);
 document.querySelector("#die5").addEventListener("click", newGame);

} // Slut init
window.addEventListener("load", init);
// --------------------------------------------------
function showOptionsDialog () {
    console.log("inställningar")
    optionsDialog.showModal();
}
function closeOptionsDialog() {
    optionsDialog.close();
     
}
function newGame() {
    document.querySelector("#newBtn").disabled=true;
    document.querySelector("#stopBtn").disabled=false;
    let dieValue= Math.floor(6* Math.random()) + 1;
    newBtn.src = "img/dice/" + dieValue + ".png";
    console.log("Nytt spel");
}
function endGame() {
    document.querySelector("#stopBtn").disabled=true;
    document.querySelector("#newBtn").disabled=false;
    console.log("Stannar spel");
}
//


