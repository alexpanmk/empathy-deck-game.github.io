import cardClass from "./cardClass.js"

class leadClass extends cardClass {

    // Props
    // cardType: leadCard
    // cardName: [Name of the lead] 
    // cardImage: [Image of the lead]
    // cardWriteUp: [A write up of the lead that helps player to know the lead better]

    // category: [A/B/C/D - Category of scenario]
    // scenario: [Description of the scenario]
    // dialogChoices: [Array of 10 opening dialogues from lead and choices for each dialogue]
    // trustLevel: [Starting trust level of the lead]
    
    constructor(leadName, imagePath, writeUp, category, trustLevel, dialogueChoices){
        
        super(leadName, imagePath, writeUp);
        this.cardType = "leadCard";
        this.cardName = leadName;
        this.imagePath = imagePath;
        this.writeUp = writeUp;

        this.category = category;
        this.trustLevel = trustLevel;
        this.dialogueChoices = dialogueChoices;
        this.dialogueState = {
            category: category,
            dialogueIndex: 1,
        }
    }

    advanceDialogue(){
        //To advance the dialogue index by 1
        this.dialogueState.dialogueIndex += 1;
    }


}

export default leadClass;