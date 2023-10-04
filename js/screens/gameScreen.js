class gameScreen {
    constructor(){
        this.template = this.getTemplate();
        this.selectors = this.initSelectors();
    }

    getTemplate(){
        return `
            <div class="game-title">
                <h1>THE EMPATHY DECK GAME</h1>
            </div>
            <div class="game-viewport">
                    <div class="game-board">
                        <!-- <div class="card-tray"> 
                            <div class="card-deck"></div>
                            <div class="prospects"></div>
                            <div class="clients"></div>
                            <div class="power-cards"></div>
                        </div>
                        <div class="active-cards"></div> -->
                        <div class="scenario-writeup">
                            <h1>SCENARIO</h1>
                            <p>Mrs. Lim is your aunt's colleague and you met her during a family gathering. She overheard you speaking about insurance and is keen to explore her options.</p>
                        </div>
                        <div class="card-display">
                            <div class="full-card">
                                <div class="name">
                                    <h1></h1>
                                </div>
                                <div class="profile-row">
                                    <img src="">
                                </div>
                                <div class="write-up"><p></p></div>
                                <div class="trust-bar">
                                    <div class="progress-bar"></div>
                                    <div class="trust-text">TRUST BAR</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="player-interaction">
                        <div class="dialogue"><p></p></div>
                        <div class="dialogue-choices">
                            <div class="choice" id="choice-1"></div>
                            <div class="choice-alt" id="choice-2"></div>
                            <div class="choice" id="choice-3"></div>
                        </div>
                        <div class="buttons"></div>
                    </div>   
            </div>
            <div class="status-bar">
                <div class="turn-counter">
                    <h1></h1>
                </div>
                <div class="status-message">
                    <h1>TEST</h1>
                </div>
            </div>
        `
    }

    initSelectors(){
        return {
            mainDiv: document.getElementById('main'),
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
        }

    }

    update(state){
        //receive state from parent to update the dom with the render functions specific to this screen
        this.selectors = this.initSelectors();
        this.renderFullCard(state);
        this.renderPlayerInteraction(state);
        this.renderStatusBar(state);
    }

    renderFullCard(state){

        //render state.drawnCard into elements
        this.selectors.fullCard.name.innerText = state.displayCard.cardName;
        this.selectors.fullCard.img.src = state.displayCard.imagePath;
        this. selectors.fullCard.writeup.innerText = state.displayCard.writeUp;
    
        if(state.displayCard.cardType==="leadCard"){
            // leadCard
            this.selectors.fullCard.progressBar.style.width = state.displayCard.trustLevel + "%";
        } else {
            //Other cards
            this.selectors.fullCard.progressBar.style.width = "0px";
        };
        
    }

    renderPlayerInteraction(state){
        //fills up the dialogue choice according to the current state.dialogueState
        //console.log(state.displayCard);
    
        let categoryIndex = state.displayCard.dialogState.category;
        let dialogIndex = state.displayCard.dialogState.dialogIndex - 1;
    
        this.selectors.playerInteraction.dialogue.innerText = state.displayCard.dialogChoices.A[dialogIndex].dialog;
        this.selectors.playerInteraction.choice1.innerText = state.displayCard.dialogChoices.A[dialogIndex].choices[0].text;
        this.selectors.playerInteraction.choice2.innerText = state.displayCard.dialogChoices.A[dialogIndex].choices[1].text;
        this.selectors.playerInteraction.choice3.innerText = state.displayCard.dialogChoices.A[dialogIndex].choices[2].text;
    }
    
    renderStatusBar(state){
        this.selectors.statusbar.innerText = "Turn " + state.turnCount + " / " + state.maxTurn;
        this.selectors.statusMessage.innerText = state.statusMessage;
        this.selectors.statusMessageBox.style.backgroundColor = state.statusBoxColor;
    }

    show(target){
        //To render this.template to the passed in target element
        target.innerHTML = this.template;
    }

}

export default gameScreen;