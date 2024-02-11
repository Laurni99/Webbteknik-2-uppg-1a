/* Uppgift U1 */

// Globala variabler
let optionsDialog;	    // Element för inställningsdialog


let rollElem;            //Element för utskrift av antal omkast som återstår


let resElem;	        // Element för resultat


let newBtn;             // Element för "nytt spel"


let stopBtn;            // Knapp för att stanna


let playerName = "Du";  // Spelarens namn


let maxNrOfRolls = 3;   // Valt max antal omkast av tärningar


let nrOfRolls = 0;      // Antal omkast som återstår


let sum = 0;            // Summan av kastade tärningar



// --------------------------------------------------
// Ta fram referenser till element i gränssnittet och lägg till händelselyssnare.
function init() {

    optionsDialog = document.querySelector("#options"); //Inställnings knapp
    rollElem = document.querySelector("#nrOfReroll");
    playerName = document.querySelector("#player"); // Spelarens namn
    maxNrOfRolls = document.querySelector("#nrOfReroll"); // Antal kast
    nrOfRolls = document.querySelector("#rollCounter");
    resElem = document.querySelector("#result");
    newBtn = document.querySelector("#dice");


    document.querySelector("#optionsBtn").addEventListener("click", showOptionsDialog);
    document.querySelector("#optionsOkBtn").addEventListener("click", closeOptionsDialog);
    document.querySelector("#newBtn").addEventListener("click", newGame);
    document.querySelector("#die1").addEventListener("click", throwOneDie);
    document.querySelector("#die2").addEventListener("click", throwOneDie);
    document.querySelector("#die3").addEventListener("click", throwOneDie);
    document.querySelector("#die4").addEventListener("click", throwOneDie);
    document.querySelector("#die5").addEventListener("click", throwOneDie);
    document.querySelector("#stopBtn").addEventListener("click", endGame);
    document.querySelector("#stopBtn").disabled = true;
    document.querySelector("#newBtn").disabled = false;

    sum = 0;
} // Slut init
window.addEventListener("load", init);
// --------------------------------------------------
function showOptionsDialog() {
    //Den här funktionen används för att visa inställningsdialogen när användaren klickar på inställningsknappen.

    optionsDialog.showModal();
    console.log(showOptionsDialog);
}
function closeOptionsDialog() {
    //Denna funktion används för att stänga inställningsdialogen när användaren har gjort sina val och klickat på OK-knappen. Den sparar också de valda inställningarna och uppdaterar antalet omkast som återstår.

    optionsDialog.close();
    nrOfRolls.textContent = rollElem.value;
    console.log(closeOptionsDialog);
    console.log(playerName)
    console.log(nrOfRolls)
}
function throwDie(id) {
    //Detta är en funktion som simulerar kastet av en tärning genom att generera ett slumpmässigt nummer mellan 1 och 6 och uppdatera tärningsbilden med detta nummer. Sedan returneras det slumpmässigt genererade numret för att användas i spelet.

    let newBtn = document.querySelector("#" + id);
    newBtn.classList.toggle("rotateDie");
    let dieValue = Math.floor(Math.random() * 6) + 1;
    newBtn.src = "dice" + dieValue + "png";
    newBtn.alt = dieValue;
    console.log(throwDie);

    return dieValue;

}


function newGame(id) {
    //Denna funktion används för att starta ett nytt spel. Den kastar alla tärningar och visar summan av tärningarna i gränssnittet. Om antalet omkast som återstår är 0, avslutas spelet genom att anropa endGame()-funktionen.

    if (nrOfRolls.textContent == 0) {
        endGame();
        return endGame;
    }

    sum = 0;

    let DieVal = throwDie("die1");
    sum += DieVal;
    DieVal = throwDie("die2");
    sum += DieVal;
    DieVal = throwDie("die3");
    sum += DieVal;
    DieVal = throwDie("die4");
    sum += DieVal;
    DieVal = throwDie("die5");
    sum += DieVal;

    document.querySelector("#die1").src = "1.png";
    document.querySelector("#die2").src = "2.png";
    document.querySelector("#die3").src = "3.png";
    document.querySelector("#die4").src = "4.png";
    document.querySelector("#die5").src = "5.png";


    document.querySelector("#rollCounter").innerHTML -= 1;
    document.querySelector("#stopBtn").disabled = false;
    document.querySelector("#newBtn").disabled = false;
    document.querySelector("#result").innerHTML = "Summa: " + sum;

    console.log(newGame);
    console.log(DieVal)
    console.log(sum)



}
function throwOneDie() {
    //Denna funktion används för att kasta en enskild tärning när någon klickar på den. Den uppdaterar summan av tärningarna och visar den i "gränssnittet". Om antalet omkast är 0, avslutas spelet genom att anropa endGame()-funktionen och summan återställs till 0.
    if (nrOfRolls.textContent == 0) {
        endGame();
        sum = 0;
        return;
    }


    let DieVal = parseInt(this.alt);
    DieVal = throwDie(this.id);
    sum += DieVal;
    
    document.querySelector("#die1").src = "1.png";
    document.querySelector("#die2").src = "2.png";
    document.querySelector("#die3").src = "3.png";
    document.querySelector("#die4").src = "4.png";
    document.querySelector("#die5").src = "5.png";
    
    document.querySelector("#stopBtn").disabled = false;
    document.querySelector("#result").innerHTML = "Summa: " + sum;
    document.querySelector("#rollCounter").innerHTML -= 1;

    console.log(DieVal)
    console.log(sum)
    console.log(throwOneDie);

}





function endGame() {
    //Denna funktion används för att avsluta spelet och beräkna poäng. Den inaktiverar stoppknappen och visar resultatet i "gränssnittet" + spelarens namn, summan av tärningarna och poängen. Den återställer också omkast till 0.

    // Stannar spelet
    document.querySelector("#stopBtn").disabled = true;
    document.querySelector("#newBtn").disabled = false;

    // Poänguträkning
    let points = sum - 18;
    points = (points < 0 || points > 3) ? 0 : points;

    // Utskrift av resultat
    resElem.innerHTML = playerName.value + ", summan av tärningarna är: " + sum + ", så du har " + points + " poäng ";

    nrOfRolls.textContent = 0;

    console.log(endGame);
}








