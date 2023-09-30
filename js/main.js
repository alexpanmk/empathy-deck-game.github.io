import deckData from '../assets/gamedata/gamedata.js'

/*----- constants -----*/
const demoCard = deckData[0]; 
const demoCardDialogue = deckData.cardDeck[0].dialogChoices.A;



 /*----- state variables -----*/
// const state = {
//     //player = new playerClass(),
//     activeLead = [],
//     trustBar = 0,
// }

const state = {
    // player: new playerClass(),
    deck: [],
    displayCard: [],
    currentDialogue: [],
    turnCount: 0,
    maxTurn: 10,
}

 /*----- cached elements  -----*/
const selectors = {
    mainDiv: document.getElementById('main'),
    fullCard: document.querySelector('.full-card'),
    activeCards: document.querySelector('.active-cards'),
    cardTray: document.querySelector('.card-tray') ,
    playerInteraction: document.querySelector('.player-interaction'),
};

console.log(selectors);


 /*----- event listeners & functions-----*/
 
 //hover on card tray area to review full card
 //(full card should show current lead focus by default)
 function addEventListeners(){
    selectors.mainDiv.addEventListener('click', evt => {clickFunctions(evt.target.id)});
    // selectors.mainDiv.addEventListener('click', evt => {clickFunctions(evt.target.id)});
    // selectors.mainDiv.addEventListener('mouseover', evt => {hoverFunctions(evt.target.id, 'mouseover')});
    // selectors.mainDiv.addEventListener('mouseout', evt => {hoverFunctions(evt.target.id, 'mouseout')});
        
 }

function clickFunctions(id){
    console.log(id);

 }

//  function hoverFunctions(id, type){
    
//  }


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
    renderStatusBar();

}

function clearDemoElements(){

    // let elements = [
    //     ...Array.from(selectors.fullCard.children),
    //     ...Array.from(selectors.playerInteraction.children)
    // ];

    // elements.forEach(element => {
    //     element.innerText="";
    // });

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

function renderFullCard(){
    //Render Character name + Status ( A-D / Client )
    //Render Character Portrait
    //Render Character Persona
    //Render Character Interest Level
}

function renderStatusBar(){
    //Render Player Empathy Level

    //Render Converted Clients + total value

    //Render Timer 
}


 //Business Logic

 function initBoard(){
    //To set board's initial state
    //To set initial game greetings, tutorial and dialogue to player in interaction box
 }

 function initGame(){
    //init player state

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







function advanceTurn(){
    //For Demo

}


function loadDemoCard(){
    
}


function runDemo(){
    //load demo card

}


function initialise() {
    // console.log(deckData);
    clearDemoElements();
    addEventListeners();

    runDemo();
};




 initialise();