import deckClass from './deckClass.js';
import leadClass from './leadClass.js';

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
    turnCount: 1,
    maxTurn: 10,
    statusMessage: "Choose your response",
    statusBoxColor: "#2C3E50",
    endGame: false,

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
    playerInteraction: {
        dialogue: document.querySelector('.player-interaction .dialogue'),
        choice1: document.getElementById('choice-1'),
        choice2: document.getElementById('choice-2'),
        choice3: document.getElementById('choice-3'),
    },
    statusbar: document.querySelector('.status-bar h1'),
    statusMessageBox: document.querySelector('.status-message'),
    statusMessage: document.querySelector('.status-message h1'),
    activeCards: document.querySelector('.active-cards'),
    cardTray: document.querySelector('.card-tray') ,
    
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

    // If dialogue choice is clicked
    if(id.substring(0, 6)==="choice" && state.endGame === false){
        console.log(id);

        let choiceIndex = parseInt(id.substring(7, 8));
        checkDialogueChoice(choiceIndex);

        advanceTurn();
    };

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
    renderStatusBar();

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
    selectors.fullCard.name.innerText = state.displayCard.cardName;
    selectors.fullCard.img.src = state.displayCard.imagePath;
    selectors.fullCard.writeup.innerText = state.displayCard.writeUp;

    console.log(state.displayCard.cardType);
    


    if(state.displayCard.cardType==="leadCard"){
        // leadCard
        selectors.fullCard.progressBar.style.width = state.displayCard.trustLevel + "%";
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
    console.log(state.displayCard);

    let categoryIndex = state.displayCard.dialogState.category;
    let dialogIndex = state.displayCard.dialogState.dialogIndex - 1;

    selectors.playerInteraction.dialogue.innerText = state.displayCard.dialogChoices.A[dialogIndex].dialog;
    selectors.playerInteraction.choice1.innerText = state.displayCard.dialogChoices.A[dialogIndex].choices[0].text;
    selectors.playerInteraction.choice2.innerText = state.displayCard.dialogChoices.A[dialogIndex].choices[1].text;
    selectors.playerInteraction.choice3.innerText = state.displayCard.dialogChoices.A[dialogIndex].choices[2].text;
}

function renderStatusBar(){
    selectors.statusbar.innerText = "Turn " + state.turnCount + " / " + state.maxTurn;
    selectors.statusMessage.innerText = state.statusMessage;
    selectors.statusMessageBox.style.backgroundColor = state.statusBoxColor;
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
    
    //console.log(state.displayCard.dialogChoices.A[0].dialog);
    //console.log(state.displayCard.dialogueState.dialogueIndex);
    //Load dialogue

    
    
    
    //Remember to shift the cards in the cardDeck

    render();
 }

 function checkDialogueChoice(selection){
    //To add to player's empathy prop and card's trust prop accordingly
    const trustDisplacement = state.displayCard.dialogChoices.A[state.displayCard.dialogState.dialogIndex - 1].choices[selection-1].score;

    if(trustDisplacement > 0){
        state.statusMessage = "You gain trust!";
        state.statusBoxColor = "#2ECC71";
    } else {
        state.statusMessage = "You lose trust!";
        state.statusBoxColor = "#E74C3C";
    }
    
    state.displayCard.trustLevel += trustDisplacement;

    //To check if card is converted
   checkConversion();

 }

function checkConversion(){
    if(state.displayCard.trustLevel >= 100){
        state.statusMessage = "You have converted a prospect into a client! Game Ends";
        state.statusBoxColor = "#2ECC71";
        state.endGame = true;
    } else if (state.displayCard.trustLevel <= 0){
        state.statusMessage = "You have lost a lead! Game Ends";
        state.statusBoxColor = "#E74C3C";
        state.endGame = true;
    }
}

function checkMaxTurn(){
    console.log(state.turnCount);
    if (state.turnCount >= state.maxTurn-1){
        state.statusMessage = "Turns up! You have failed to convert a prospect into a client!";
        state.statusBoxColor = "#E74C3C";
        state.endGame = true;
        state.turnCount += 1;
        render();
        return true;
    } else {
        return false;
    };
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
    if (checkMaxTurn() === true){
        return;
    } else {
        state.turnCount += 1;
        state.drawnCard.advanceDialog();
    }
    render();

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