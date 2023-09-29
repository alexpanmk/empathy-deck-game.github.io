# The Empathy Deck: Insurance Agents

Welcome to The Empathy Deck: Insurance Agents, a browser-based card game designed to immerse players in the world of insurance agents. With every draw from the deck, players are given the chance to understand, empathize, and connect with diverse leads. Will you secure the trust of your leads, or will you lose them with a wrong choice? Dive in and let your empathy guide the way!

## Game Overview:

In The Empathy Deck, players assume the role of budding insurance agents looking to expand their clientele. With a deck full of potential leads spanning from close contacts to distant connections, your challenge is to navigate conversations, understand concerns, and offer tailored advice. The right choices build trust; the wrong ones push potential clients away.

Dynamic Conversations: Engage with a variety of leads, each with their unique scenarios and concerns.

Dialog Choices: Your words matter. Choose wisely and build trust or risk losing a potential client.

Empathy Power Cards: Draw special cards that offer unique advantages, from revealing the best dialog choice to getting a second shot with a lost lead.

Categories of Contacts: From closest family members to distant acquaintances, every lead has a different level of relationship and challenge.

## Objective:

The ultimate goal is to convert as many leads as possible into clients, leveraging empathy and understanding to guide your decisions. The player with the most successful conversions, reflecting the highest empathy level, emerges as the final winner.

# Pseudocode

Initialize Game:
  Create Deck of leads with categories A, B, C, D.
  Initialize Empathy Meter to zero.
  Initialize score to zero.
  Set Player level to "Junior Agent".

Game Loop:
  WHILE there are cards in the deck OR player has not decided to end:
    Draw Phase:
      DRAW a card from the deck.
      DISPLAY background information on the lead.
    
    Dialog Phase:
      WHILE lead's Trust Bar is not maxed out:
        DISPLAY a scenario or question from the lead.
        PRESENT multiple dialog choices.
        LET player CHOOSE a dialog option.
        IF choice is empathetic:
          INCREASE lead's Trust Bar.
          INCREASE player's Empathy Meter.
          IF Empathy Meter reaches certain points:
            GIVE player an Empathy Power Card.
        ELSE:
          DECREASE lead's Trust Bar.
          CHECK if player has "Reconnect" power card to try again.
        
        IF player uses "Deep Insight" card:
          REVEAL the best dialog choice.
        
    Conversion Phase:
      IF lead's Trust Bar is maxed out:
        CONVERT lead to client.
        ADD points based on lead's category and turns taken to score.
        IF player uses "Referral Boost" card:
          DRAW an additional card from the deck.
    
    Levels & Progression:
      IF certain conditions met (e.g. score threshold):
        UPGRADE player to next level.
        ADD more complex scenarios.
        ADD external factors like market changes, competitor activities, etc.
    
    End Phase:
      CHECK if all leads are converted or discarded.
      DISPLAY rank based on converted clients, points, and Empathy Meter.

User Interface:
  DISPLAY digital table with deck, drawn card, Empathy Meter, Trust Bar, and power cards.
  ALLOW hover over cards for more details.
  DISPLAY dialog choices at center.
  DISPLAY scoreboard with progress, points, and level.

# Pseudocode - Organised into reference project structure

/*----- constants -----*/

1. Game Constants:
   a. MAX_EMPATHY: The maximum value of the Empathy Meter.
   b. DECK_SIZE: Total number of leads in the deck.
   c. CATEGORIES: A list of lead categories ['A', 'B', 'C', 'D'].
   d. POWER_CARDS: A list of power cards ['Deep Insight', 'Reconnect', 'Referral Boost'].

/*----- state variables -----*/

1. Game State:
   a. currentPlayerLevel: Tracks the current level of the player (e.g., "Junior Agent").
   b. currentLead: Holds information about the drawn card (lead).
   c. empathyMeter: Tracks the player's current empathy level.
   d. score: Current player score.
   e. acquiredPowerCards: A list of power cards the player has earned.

/*----- cached elements  -----*/

1. Game UI Elements:
   a. titleEl: Reference to the title "Empathy Connection".
   b. levelDisplayEl: Reference to the player level display.
   c. scoreboardEl: Reference to the scoreboard displaying points, progress, and Empathy Meter.
   d. deckAreaEl: Reference to the deck of cards area.
   e. drawnCardAreaEl: Reference to the current lead's displayed information.
   f. trustBarEl: Reference to the current lead's Trust Bar.
   g. dialogChoicesEl: List of clickable areas/buttons for dialog choices.
   h. empathyMeterEl: Display for the player's empathy level.
   i. powerCardAreaEl: Icons or indicators for the earned power cards.

/*----- event listeners -----*/

1. User Interactions:
   a. dialogChoiceClicked: Event when a player clicks on a dialog choice.
   b. nextTurnBtnClicked: Event when a player clicks the "Next Turn" button.
   c. usePowerCardSelected: Event when a player selects and uses a power card from the dropdown.

/*----- functions -----*/

1. initGame(): Initializes the game state and UI.
2. drawLead(): Draws a card (lead) from the deck and updates UI.
3. updateTrustBar(choice): Updates the Trust Bar based on the player's dialog choice.
4. updateEmpathyMeter(choice): Updates the Empathy Meter based on the player's dialog choice.
5. checkConversion(): Checks if the lead's Trust Bar is maxed and converts the lead if so.
6. progressLevel(): Upgrades the player's level based on certain conditions.
7. usePowerCard(cardType): Applies the effects of a used power card.
8. endGame(): Concludes the game and displays the player's rank.
9. render(): Updates the DOM based on changes in the game state.
   a. Updates the player's current level display.
   b. Updates the current lead's displayed information.
   c. Updates the Trust Bar UI.
   d. Updates the Empathy Meter UI.
   e. Updates the acquired power cards display.
   f. Updates the scoreboard with points, progress, and current Empathy Meter level.


