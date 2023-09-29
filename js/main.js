/*----- constants -----*/
//read in game data as constant

 /*----- state variables -----*/
const state = {

}

 /*----- cached elements  -----*/
const selectors = {
    
}

 /*----- event listeners -----*/
 
 //hover on card tray area to review full card 

 //timer for game progression
 

 /*----- functions -----*/

 //Render Functions
function render() {
    renderDeck();
    renderProspects();
    renderClients();

    renderFullCard();
    renderActiveCards();
    renderPlayerInteraction();

}

function renderDeck(){
    //render deck to represent fixed number of cards overlapping each other

}

function renderProspects(){
    //render current leads, to declare in state
}

function renderClients(){
    //render converted clients, to declare in state

}

function initBoard(){
    //To set board's initial state
    //To set initial game greetings, tutorial and dialogue to player in interaction box


}

 //Business Logic

 function initGame(){
    //init player state
    //init deck state with readInGameData()

 }

 function drawLead(){
    //to load dialogue state from card properties
 }

 function checkDialogueChoice(){
    //To add to player's empathy prop and card's trust prop accordingly

 }

 function checkTrustBar(){
    //to check after change in state

 }

function checkEmpathyBar(){
    //to check after change in state

}

 function readInGameData() {
    //To read in assets/gamedata/gamedata.json

 }

 function playerInteraction() {


 }

function gameTutorial(step){
    // Priorty low
    // To return initial tutorial pages according to steps (to store this in json?)
}

 function buildDialogueElements(){
    //To build dialogue elements from card prop
 }


 //




 initialise();