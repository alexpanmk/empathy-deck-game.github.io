//Classes
import deckClass from './classes/deckClass.js';

//Screens 
import gameScreen from './screens/gameScreen.js';
import openScreen from './screens/openScreen.js';
import endScreen from './screens/endScreen.js';

/*----- constants -----*/

const appScreens = {
    openScreen: new openScreen(),
    gameScreen: new gameScreen(),
    endScreen: new endScreen(),
}

 /*----- state variables -----*/

const state = {
    // player: new playerClass(),
    deck: new deckClass(),
    displayCard: [], //displayCard can show other cards being hovered over
    drawnCard: [],
    trustBarPlaceholder: 0,
    currentCardTurn: [], //To separate from main turn count due to nature of game mechanics
    currentDialogue: [],
    turnCount: 1,
    maxTurn: 11,
    statusMessage: "Choose your response",
    statusBoxColor: "#2C3E50",
    activeScreen: "",

    //endScreen
    endGame: "", //"win" or "lose"
    endScreenMessage: "",

}

 /*----- cached elements  -----*/

const gs = new gameScreen();

const gameScreenHTML = gs.template;
document.getElementById('main').innerHTML = "";
document.getElementById('main').innerHTML = gs.template;

let selectors = {
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
 
 //Full card should show current lead focus by default
 function addEventListeners(){
    
    appScreens.gameScreen.selectors.mainDiv.addEventListener('click', evt => {clickFunctions(evt.target.id)});
    //appScreens.endScreen.selectors.mainDiv.addEventListener('click', evt => {clickFunctions(evt.target.id)});
        
 }

function clickFunctions(id){
    console.log(id);
    // If dialogue choice is clicked
    if(id.substring(0, 6)==="choice" && state.endGame === ""){

        console.log(id);
        let choiceIndex = parseInt(id.substring(7, 8));
        checkDialogueChoice(choiceIndex);
        advanceTurn();
    } else if (id === "reset"){

        resetGame();

    };

 }
 
/*----- functions -----*/

 //Render Functions
function render() {

    //Updates state of currentScreen of activeScreen in state
    appScreens[state.activeScreen].show(selectors.mainDiv);
    appScreens[state.activeScreen].update(state);

}


 //------Business Logic--------//

 function drawCard(){ //Draw card counts as 1 turn

    //To draw a card from deck, will load a single demo card to complete the basic mechanics
    //state.drawnCard = deckData.cardDeck[0];

    state.drawnCard = state.deck.drawCard();
    state.displayCard = state.drawnCard;
    
    state.turnCount += 1;
    state.statusMessage = "Drawn Card - 1 Turn Spent"

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
        state.endScreenMessage = "You have converted a prospect into a client! Game Ends";

        state.statusBoxColor = "#2ECC71";

        state.endGame = "win";
        state.activeScreen = "endScreen";

    } else if (state.displayCard.trustLevel <= 0){
        state.statusMessage = "You have lost a prospect!  Game Ends";
        state.endScreenMessage = `You have lost a prospect! Game Ends`;

        state.statusBoxColor = "#E74C3C";
        state.endGame = "lose";
        state.activeScreen = "endScreen";
    }
}

function checkMaxTurn(){
    console.log(state.turnCount);
    if (state.turnCount >= state.maxTurn-1){
        state.statusMessage = "Turns up! You have failed to convert a prospect into a client!";
        state.statusBoxColor = "#E74C3C";
        state.endGame = "lose";
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

function resetGame(){

    //To reset game state
    state.activeScreen = "gameScreen";
    state.endGame = "";
    state.turnCount = 1;
    state.deck = new deckClass();
    state.displayCard = [];
    state.drawnCard = [];
    state.trustBarPlaceholder = 0;
    state.currentCardTurn = [];
    state.currentDialogue = [];
    state.statusMessage = "Choose your response";
    state.statusBoxColor = "#2C3E50";
    state.endScreenMessage = "";
    state.statusMessage = "Choose your response";
    state.statusBoxColor = "#2C3E50";

    drawCard();
}


function initialise() {

    addEventListeners();
    state.activeScreen = "openScreen";
    drawCard(); //eventually to have drawcard button for first draw
};

 initialise();