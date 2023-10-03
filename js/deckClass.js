import deckData from '../assets/gamedata/gamedata.js'
import leadClass from './leadClass.js'

class deckClass {

    // Props
    // deck: array of cards in deck
    // drawnCards: pool of card that has been drawn

    constructor(){
        
        this.deck = this.initDeck();

        // this.demoCard = deckData[0]; 
    }

    drawCard(){
        //Pick a random card from deck, return the value and send it to drawndeck
        //1st card for demo
        return this.deck[0];

    }

    initDeck(){
        //To init the deck with the cards from gamedata.js

        const newDeck = [];

        deckData.cardDeck.forEach(card => {
            console.log(card.cardType);
            if(card.cardType==="leadCard"){
                newDeck.push(new leadClass(card.leadName, card.profileImage, card.leadPersona, card.category, card.startTrust, card.dialogChoices));
            } else {
                //Other cards
            };
        });



        return deckData.cardDeck

    }


}


export default deckClass;