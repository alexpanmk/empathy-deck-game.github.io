//JSON format for Card Props
// - leadID: [Unique identifier for the lead]
// - leadName: [Name of the lead]
// - leadPersona: [A write up of the lead that helps player to know the lead better
// - category: [A/B/C/D - Category of scenario]
// - scenario: [Description of the scenario]

// - dialogChoices:
//   - A: [Array of 10 opening dialogues from lead and choices for each dialogue]
//   - B: [Array of 10 opening dialogues from lead and choices for each dialogue]
//   - C: [Array of 10 opening dialogues from lead and choices for each dialogue]
//   - D: [Array of 10 opening dialogues from lead and choices for each dialogue]

const jsonData = 
{
  "cardDeck": [
    {
      "leadID": "SG_A_001",
      "leadName": "Mrs. Lim Hui Min",
      "leadPersona": "Mrs. Lim is a 52-year-old school teacher in Singapore. She is approaching retirement and is concerned about her financial stability post-retirement. She is a mother of two and wishes to ensure a comfortable life for her family.",
      "category": "A",
      "scenario": "Mrs. Lim is your aunt's colleague and you met her during a family gathering. She overheard you speaking about insurance and is keen to explore her options.",
      "dialogChoices": {
        "A": [
          {
            "dialog": "I've been thinking about retirement lately. Is insurance a good option for that?",
            "choices": [
              {
                "text": "Definitely! Insurance can be a stable foundation for retirement planning.",
                "score": 12
              },
              {
                "text": "Many people in Singapore rely on insurance for their retirement. You should too.",
                "score": 8
              },
              {
                "text": "If you don’t plan now, you might regret it later.",
                "score": -4
              }
            ]
          },
          // ... [the rest of your dialog objects go here]
          {
            "dialog": "With so many options, it's quite overwhelming. Can I trust you to guide me right?",
            "choices": [
              {
                "text": "Absolutely, Mrs. Lim. Your trust and well-being are my top priorities.",
                "score": 16
              },
              {
                "text": "Trust is earned. Let's walk this journey together, and you can decide.",
                "score": 12
              },
              {
                "text": "Well, I'm in this business, so you should trust me.",
                "score": -7
              }
            ]
          }
        ]
      }
    }
  ]
}


export default jsonData;
  