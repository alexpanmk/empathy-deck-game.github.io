class endScreen {
    constructor(){
        this.template = this.getTemplate();
        this.selectors = this.initSelectors();
    }

    getTemplate(){
        return `
            <div class="end-screen">
                <h1>Game Ends</h1>
                <img></img>
                <div class="reset-game-btn" id="reset">RESTART GAME</div>
            </div>
        `
    }

    initSelectors(){
        return {
            mainDiv: document.getElementById('main'), 

            gameMessage: document.querySelector('.end-screen h1'),
            endImage: document.querySelector('.end-screen img'),
        }

    }

    update(state){
        //receive state from parent to update the dom with the render functions specific to this screen
        this.selectors = this.initSelectors();
        this.renderEndScreen(state);
    }

    renderEndScreen(state){

        this.selectors.gameMessage.innerText = state.endScreenMessage;
        if (state.endGame === "win"){
            this.selectors.endImage.src = "assets/img/trophy.svg";
        } else {
            this.selectors.endImage.src = "assets/img/need-a-job.svg";
        }

        
    }

    show(target){
        //To render this.template to the passed in target element
        target.innerHTML = this.template;
        this.selectors = this.initSelectors();
    }

}

export default endScreen;


