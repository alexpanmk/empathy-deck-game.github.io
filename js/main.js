import deckClass from './deckClass.js';

/*----- constants -----*/

// console.log(deckData);

 /*----- state variables -----*/
// const state = {
//     //player = new playerClass(),
//     activeLead = [],
//     trustBar = 0,
// }

const state = {
    // player: new playerClass(),
    deck: new deckClass(),
    displayCard: [], //displayCard can show other cards being hovered over
    drawnCard: [],
    trustBarPlaceholder: 0,
    currentCardTurn: [], //To separate from main turn count due to nature of game mechanics
    currentDialogue: [],
    turnCount: 0,
    maxTurn: 11,
}

 /*----- cached elements  -----*/
const selectors = {
    mainDiv: document.getElementById('main'),

    //full-card selectors
    fullCard: {
        name: document.querySelector('.full-card .name h1'),
        img: document.querySelector('.full-card .profile-row img'),
        writeup: document.querySelector('.full-card .write-up p'),
        progressBar: document.querySelector('.progress-bar'),
    },

    activeCards: document.querySelector('.active-cards'),
    cardTray: document.querySelector('.card-tray') ,
    playerInteraction: document.querySelector('.player-interaction'),

};

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
    // renderActiveCards();
    renderPlayerInteraction();
    //renderStatusBar();

}

function clearDemoElements(){

    // // Collect the required elements into variable for iteration
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

    
    //render state.drawnCard into elements
    selectors.fullCard.name.innerText = state.displayCard.leadName;
    selectors.fullCard.img.src = state.displayCard.profileImage;
    selectors.fullCard.writeup.innerText = state.displayCard.leadPersona;

    console.log(state.displayCard.cardType);
    


    if(state.displayCard.cardType==="leadCard"){
        // leadCard
        selectors.fullCard.progressBar.style.width = state.displayCard.startTrust + "%";
    } else {
        //Other cards
        selectors.fullCard.progressBar.style.width = "0px";
    };
    
    

    //Render Character name + Status ( A-D / Client )

    //Render Character Portrait
    //Render Character Persona

    //Render Character Trust Bar
}

function renderPlayerInteraction(){
    //fills up the dialogue choice according to the current state.dialogueState
}

function renderStatusBar(){
    //Render Player Empathy Level

    //Render Converted Clients + total value

    //Render Timer 
}


 //------Business Logic--------//

 function initBoard(){
    //To set board's initial state
    //To set initial game greetings, tutorial and dialogue to player in interaction box
 }

 function initGame(){
    //init player state

 }

 function drawCard(){ //Draw card counts as 1 turn

    //To draw a card from deck, will load a single demo card to complete the basic mechanics
    //state.drawnCard = deckData.cardDeck[0];
    
    state.drawnCard = state.deck.drawCard();
    state.displayCard = state.drawnCard;
    
    //Load dialogue

    
    
    
    //Remember to shift the cards in the cardDeck

    render();
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

 function playerInteraction() {


 }

function gameTutorial(step){
    // Priorty low
    // To return initial tutorial pages according to steps (to store this in gamedata.js)
}

 function buildDialogueElements(){
    //To build dialogue elements from card prop
 }


function advanceTurn(){
    //For Demo

}



function runDemo(){
    //load demo card
    drawCard();

}


function initialise() {
    // console.log(deckData);
    clearDemoElements();
    addEventListeners();
    

    runDemo();
};

 initialise();