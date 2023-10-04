class openScreen {
    constructor(){
        this.template = this.getTemplate();
        this.selectors = this.initSelectors();
    }

    getTemplate(){
        return `
            <div class="open-screen">
                <img></img>
                <div class="reset-game-btn" id="reset">START GAME</div>
            </div>
        `
    }

    initSelectors(){
        return {
            mainDiv: document.getElementById('main'), 
            endImage: document.querySelector('.open-screen img'),
        }

    }

    update(state){
        //receive state from parent to update the dom with the render functions specific to this screen
        this.selectors = this.initSelectors();
        this.selectors.endImage.src = "assets/img/opening.svg";
        // this.renderEndScreen(state);
    }

    

    show(target){
        //To render this.template to the passed in target element
        target.innerHTML = this.template;
        this.selectors = this.initSelectors();
    }

}

export default openScreen;
