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
      "profileImage": "assets/img/lady1.svg",
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
          },{
            "dialog": "But aren't the premiums for insurance quite high?",
            "choices": [
              {"text": "It varies, but investing now can ensure a secure future.", "score": 10},
              {"text": "Premiums depend on coverage. We can find something that fits your budget.", "score": 15},
              {"text": "You get what you pay for. Do you want a good retirement or not?", "score": -6}
            ]
          },
          {
            "dialog": "My friend told me she had trouble claiming her insurance. How can I avoid such issues?",
            "choices": [
              {"text": "Being transparent and informed helps. I'll guide you through every step.", "score": 14},
              {"text": "Choose a good company and read the policy carefully.", "score": 10},
              {"text": "Such things rarely happen. Don't overthink it.", "score": -5}
            ]
          },
          {
            "dialog": "How does insurance compare to just saving money in the bank?",
            "choices": [
              {"text": "Insurance can offer more benefits and growth than traditional savings.", "score": 13},
              {"text": "Both have their merits. Insurance provides protection on top of savings.", "score": 11},
              {"text": "Why keep money in the bank when you can grow it with insurance?", "score": -3}
            ]
          },
          {
            "dialog": "I'm worried about the future of my children. Can insurance help with that?",
            "choices": [
              {"text": "Certainly, insurance can secure their financial future.", "score": 12},
              {"text": "Yes, there are policies specifically designed for children's future.", "score": 14},
              {"text": "Insurance is the best way to show love for your children.", "score": 7}
            ]
          },
          {
            "dialog": "I've heard of term and whole life insurance. What's the difference?",
            "choices": [
              {"text": "Term is for a specific duration, while whole life covers your entire lifespan.", "score": 13},
              {"text": "Whole life is more comprehensive, and term is more budget-friendly.", "score": 14},
              {"text": "Term is short-term, while whole life is a lifelong commitment.", "score": 9}
            ]
          },
          {
            "dialog": "Are there any insurance plans that offer medical coverage?",
            "choices": [
              {"text": "Yes, there are health insurance plans covering medical expenses.", "score": 14},
              {"text": "Absolutely, they can be critical in places with high medical costs like Singapore.", "score": 15},
              {"text": "Medical insurance? Isn't that just for the elderly?", "score": -5}
            ]
          },
          {
            "dialog": "Can I adjust my insurance plan later on if my needs change?",
            "choices": [
              {"text": "Definitely, flexibility is a key feature of many modern insurance plans.", "score": 15},
              {"text": "To some extent, yes. But it's better to choose wisely from the start.", "score": 10},
              {"text": "Why think about changing now? Just pick one and stick to it.", "score": -6}
            ]
          },
          {
            "dialog": "How do I know which plan is right for me?",
            "choices": [
              {"text": "By assessing your needs, goals, and budget, we can find the best fit.", "score": 15},
              {"text": "Most people just choose the popular plans. It's safer that way.", "score": 8},
              {"text": "Just tell me your budget, and I'll find you something.", "score": -4}
            ]
          },
          {
            "dialog": "With so many options, it's quite overwhelming. Can I trust you to guide me right?",
            "choices": [
              {"text": "Absolutely, Mrs. Lim. Your trust and well-being are my top priorities.", "score": 16},
              {"text": "Trust is earned. Let's walk this journey together, and you can decide.", "score": 12},
              {"text": "Well, I'm in this business, so you should trust me.", "score": -7}
            ]
          },
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
  