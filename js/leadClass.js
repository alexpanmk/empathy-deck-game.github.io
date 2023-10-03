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
    
    constructor(leadName, imagePath, writeUp, trustLevel, dialogueChoices){
        
        super(leadName, imagePath, writeUp);
        this.cardType = "leadCard";
        this.cardName = leadName;
        this.imagePath = imagePath;
        this.writeUp = writeUp;

        this.trustLevel = trustLevel;
        this.dialogueChoices = dialogueChoices;

    }


}

export default leadClass;