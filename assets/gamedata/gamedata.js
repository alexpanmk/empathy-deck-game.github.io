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
      "cardType": "leadCard",
      "leadName": "Mrs. Lim Hui Min",
      "profileImage": "assets/img/lady1.svg",
      "leadPersona": "Mrs. Lim is a 52-year-old school teacher in Singapore. She is approaching retirement and is concerned about her financial stability post-retirement. She is a mother of two and wishes to ensure a comfortable life for her family.",
      "category": "A",
      "startTrust": 10,
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
    },
    {
      "leadID": "SG_A_002",
      "cardType": "leadCard",
      "leadName": "Mr. Rahul Nair",
      "profileImage": "assets/img/man1.svg",
      "leadPersona": "Mr. Nair is a 40-year-old IT professional in Singapore with a busy lifestyle. Having recently experienced health complications, he's now focused on ensuring the well-being and financial security of his young family.",
      "category": "A",
      "startTrust": 10,
      "scenario": "Mr. Nair is a friend of your father. During a family get-together, you learn about his recent health concerns, and he expresses interest in exploring insurance options.",
      "dialogChoices": {
        "A": [
          {
            "dialog": "I've been so engrossed in work, I never really considered insurance. Where do I start?",
            "choices": [
              {
                "text": "It's never too late, Mr. Nair. Let's discuss your priorities and find a suitable plan.",
                "score": 15
              },
              {
                "text": "Health and family security should be paramount. Let's look at plans addressing those first.",
                "score": 14
              },
              {
                "text": "Well, you should have started earlier! But we'll figure something out.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I'm worried about the future expenses for my kid's education. Can insurance help?",
            "choices": [
              {
                "text": "Definitely, there are education insurance plans tailored for such needs.",
                "score": 14
              },
              {
                "text": "Yes, it's wise to plan ahead. We can look into policies that secure your child's academic future.",
                "score": 13
              },
              {
                "text": "Just save money. Why involve insurance in everything?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Given my health issues, will premiums be very high for me?",
            "choices": [
              {
                "text": "Your health can affect premiums, but there are options. Let's find the best fit.",
                "score": 13
              },
              {
                "text": "It might be slightly higher, but ensuring your family's security is paramount.",
                "score": 12
              },
              {
                "text": "You should have thought of that before getting sick.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "How can I ensure my family isn't burdened with debt if something happens to me?",
            "choices": [
              {
                "text": "A term life insurance policy can provide a death benefit to your family in such scenarios.",
                "score": 14
              },
              {
                "text": "We can look into a comprehensive policy that covers liabilities and ensures your family's well-being.",
                "score": 15
              },
              {
                "text": "Don't be so pessimistic. Just focus on staying healthy.",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Can I get a policy that covers critical illnesses, considering my recent health scare?",
            "choices": [
              {
                "text": "Certainly, critical illness plans cover specific diseases and offer financial support during tough times.",
                "score": 15
              },
              {
                "text": "Yes, these plans can provide lump-sum payouts, helping you manage expenses and recover without stress.",
                "score": 14
              },
              {
                "text": "Only if you're lucky. Most companies reject such cases.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "How soon can an insurance policy start covering me?",
            "choices": [
              {
                "text": "Typically, after policy approval and first premium payment, you're covered.",
                "score": 13
              },
              {
                "text": "It varies, but we can expedite the process for urgent cases like yours.",
                "score": 14
              },
              {
                "text": "It takes forever. Bureaucracy, you know.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "What happens if I can't pay the premium someday due to unforeseen issues?",
            "choices": [
              {
                "text": "Most policies have a grace period. We can also explore flexible payment options.",
                "score": 15
              },
              {
                "text": "Consistency is key, but insurance companies understand genuine issues. Let's find a flexible plan.",
                "score": 14
              },
              {
                "text": "Then you lose everything. That's how it works.",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Can I have a single policy that covers both health and life?",
            "choices": [
              {
                "text": "Absolutely. There are combo plans offering both health and life coverage.",
                "score": 14
              },
              {
                "text": "Yes, such holistic plans can be tailored to your unique needs.",
                "score": 13
              },
              {
                "text": "It's complicated. Separate policies are better.",
                "score": -4
              }
            ]
          },
          {
            "dialog": "How transparent are the claim processes? I don't want any hidden surprises.",
            "choices": [
              {
                "text": "Transparency is crucial. I'll ensure you understand every detail of the claim process.",
                "score": 15
              },
              {
                "text": "We'll go through the policy terms together, ensuring there are no ambiguities.",
                "score": 14
              },
              {
                "text": "Just trust the process. Too many questions aren't good.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "I've heard insurance agents vanish after selling the policy. Will you be there for me?",
            "choices": [
              {
                "text": "Absolutely, Mr. Nair. I'm here for the long run. Your trust and satisfaction are paramount.",
                "score": 16
              },
              {
                "text": "I understand your concern. I promise to be there whenever you need assistance.",
                "score": 15
              },
              {
                "text": "I'm here now, aren't I? Let's focus on the policy.",
                "score": -6
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_A_002",
      "cardType": "leadCard",
      "leadName": "Mr. Rahul Nair",
      "profileImage": "assets/img/man1.svg",
      "leadPersona": "Mr. Nair is a 40-year-old IT professional in Singapore with a busy lifestyle. Having recently experienced health complications, he's now focused on ensuring the well-being and financial security of his young family.",
      "category": "A",
      "startTrust": 10,
      "scenario": "Mr. Nair is a friend of your father. During a family get-together, you learn about his recent health concerns, and he expresses interest in exploring insurance options.",
      "dialogChoices": {
        "A": [
          {
            "dialog": "I've been so engrossed in work, I never really considered insurance. Where do I start?",
            "choices": [
              {
                "text": "It's never too late, Mr. Nair. Let's discuss your priorities and find a suitable plan.",
                "score": 15
              },
              {
                "text": "Health and family security should be paramount. Let's look at plans addressing those first.",
                "score": 14
              },
              {
                "text": "Well, you should have started earlier! But we'll figure something out.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I'm worried about the future expenses for my kid's education. Can insurance help?",
            "choices": [
              {
                "text": "Definitely, there are education insurance plans tailored for such needs.",
                "score": 14
              },
              {
                "text": "Yes, it's wise to plan ahead. We can look into policies that secure your child's academic future.",
                "score": 13
              },
              {
                "text": "Just save money. Why involve insurance in everything?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Given my health issues, will premiums be very high for me?",
            "choices": [
              {
                "text": "Your health can affect premiums, but there are options. Let's find the best fit.",
                "score": 13
              },
              {
                "text": "It might be slightly higher, but ensuring your family's security is paramount.",
                "score": 12
              },
              {
                "text": "You should have thought of that before getting sick.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "How can I ensure my family isn't burdened with debt if something happens to me?",
            "choices": [
              {
                "text": "A term life insurance policy can provide a death benefit to your family in such scenarios.",
                "score": 14
              },
              {
                "text": "We can look into a comprehensive policy that covers liabilities and ensures your family's well-being.",
                "score": 15
              },
              {
                "text": "Don't be so pessimistic. Just focus on staying healthy.",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Can I get a policy that covers critical illnesses, considering my recent health scare?",
            "choices": [
              {
                "text": "Certainly, critical illness plans cover specific diseases and offer financial support during tough times.",
                "score": 15
              },
              {
                "text": "Yes, these plans can provide lump-sum payouts, helping you manage expenses and recover without stress.",
                "score": 14
              },
              {
                "text": "Only if you're lucky. Most companies reject such cases.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "How soon can an insurance policy start covering me?",
            "choices": [
              {
                "text": "Typically, after policy approval and first premium payment, you're covered.",
                "score": 13
              },
              {
                "text": "It varies, but we can expedite the process for urgent cases like yours.",
                "score": 14
              },
              {
                "text": "It takes forever. Bureaucracy, you know.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "What happens if I can't pay the premium someday due to unforeseen issues?",
            "choices": [
              {
                "text": "Most policies have a grace period. We can also explore flexible payment options.",
                "score": 15
              },
              {
                "text": "Consistency is key, but insurance companies understand genuine issues. Let's find a flexible plan.",
                "score": 14
              },
              {
                "text": "Then you lose everything. That's how it works.",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Can I have a single policy that covers both health and life?",
            "choices": [
              {
                "text": "Absolutely. There are combo plans offering both health and life coverage.",
                "score": 14
              },
              {
                "text": "Yes, such holistic plans can be tailored to your unique needs.",
                "score": 13
              },
              {
                "text": "It's complicated. Separate policies are better.",
                "score": -4
              }
            ]
          },
          {
            "dialog": "How transparent are the claim processes? I don't want any hidden surprises.",
            "choices": [
              {
                "text": "Transparency is crucial. I'll ensure you understand every detail of the claim process.",
                "score": 15
              },
              {
                "text": "We'll go through the policy terms together, ensuring there are no ambiguities.",
                "score": 14
              },
              {
                "text": "Just trust the process. Too many questions aren't good.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "I've heard insurance agents vanish after selling the policy. Will you be there for me?",
            "choices": [
              {
                "text": "Absolutely, Mr. Nair. I'm here for the long run. Your trust and satisfaction are paramount.",
                "score": 16
              },
              {
                "text": "I understand your concern. I promise to be there whenever you need assistance.",
                "score": 15
              },
              {
                "text": "I'm here now, aren't I? Let's focus on the policy.",
                "score": -6
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_B_001",
      "cardType": "leadCard",
      "leadName": "Mr. Javier Torres",
      "profileImage": "assets/img/man2.svg",
      "leadPersona": "Mr. Torres is a 35-year-old freelance graphic designer from Singapore, known for his creative prowess. Recently, he's been thinking about his future, considering he doesn’t have the traditional employment benefits.",
      "category": "B",
      "startTrust": 10,
      "scenario": "You met Mr. Torres at a local art exhibition where you admired his work. Over a casual conversation about life and future planning, the topic of insurance comes up.",
      "dialogChoices": {
        "B": [
          {
            "dialog": "Being a freelancer, I don't have company insurance. Do you think I should get one?",
            "choices": [
              {
                "text": "Absolutely, Mr. Torres. Freelancers especially benefit from having a personal insurance plan.",
                "score": 14
              },
              {
                "text": "Yes, securing yourself gives peace of mind and ensures continuity in your work.",
                "score": 13
              },
              {
                "text": "If you earn enough, why worry about insurance?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I often travel for inspiration. Is there something to cover me internationally?",
            "choices": [
              {
                "text": "Certainly! There are international health and travel insurance plans tailored for frequent travelers.",
                "score": 15
              },
              {
                "text": "Yes, global coverage ensures you're protected wherever inspiration takes you.",
                "score": 14
              },
              {
                "text": "Traveling so much sounds risky. Ever thought of settling down?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Being in the creative field, my income fluctuates. Are there flexible payment plans?",
            "choices": [
              {
                "text": "Yes, many policies offer flexibility in payment, understanding the nature of varied incomes.",
                "score": 15
              },
              {
                "text": "Absolutely, we can find plans that align with your financial flow.",
                "score": 14
              },
              {
                "text": "Maybe you should get a stable job then.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "How can I ensure my family is taken care of, in case my projects don't take off?",
            "choices": [
              {
                "text": "Life insurance and savings plans can provide a safety net, ensuring your family's financial security.",
                "score": 14
              },
              {
                "text": "We can explore options that guarantee a stable foundation for your family, regardless of professional ups and downs.",
                "score": 15
              },
              {
                "text": "That's the risk with being creative, isn't it?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "I’ve heard of insurance for equipment. Can I insure my design tools?",
            "choices": [
              {
                "text": "Definitely. There's equipment insurance that can cover your valuable design tools.",
                "score": 15
              },
              {
                "text": "Yes, ensuring your tools protects your livelihood and ensures business continuity.",
                "score": 14
              },
              {
                "text": "Tools break or get old. Just replace them.",
                "score": -5
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_C_001",
      "cardType": "leadCard",
      "leadName": "Ms. Aisha Malik",
      "profileImage": "assets/img/woman3.svg",
      "leadPersona": "Ms. Malik is a 29-year-old pharmacist in Singapore. While she's medically knowledgeable, she hasn't given much thought to her own financial and health protection.",
      "category": "C",
      "startTrust": 10,
      "scenario": "You bump into Ms. Malik at a community volunteer event where she's providing medical assistance. During a coffee break, you both discuss the importance of being prepared for the unexpected.",
      "dialogChoices": {
        "C": [
          {
            "dialog": "Working in healthcare, I've seen many unforeseen situations. Should I be worried about myself too?",
            "choices": [
              {
                "text": "It's always wise to be prepared, Ms. Malik. Insurance can provide that safety net.",
                "score": 13
              },
              {
                "text": "Indeed, being proactive in your own protection is as vital as caring for others.",
                "score": 14
              },
              {
                "text": "Well, you deal with it every day, so you tell me.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "There are so many insurance options. How do I know which is best for me?",
            "choices": [
              {
                "text": "By understanding your personal needs and future goals, we can tailor the best plan for you.",
                "score": 15
              },
              {
                "text": "It's about matching your lifestyle and aspirations with the right protection.",
                "score": 14
              },
              {
                "text": "Just pick any. It's all the same.",
                "score": -6
              }
            ]
          },
          {
            "dialog": "My job can be stressful. Can insurance help if I need to take a break for health reasons?",
            "choices": [
              {
                "text": "Certainly, there are policies that provide coverage for prolonged illnesses or needed breaks.",
                "score": 14
              },
              {
                "text": "Yes, ensuring you have support during recuperative periods is essential. We can look into that.",
                "score": 13
              },
              {
                "text": "Maybe just consider a less stressful job?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "With my knowledge, I feel I could invest my money better than insurance. Why shouldn't I?",
            "choices": [
              {
                "text": "While investing is beneficial, insurance provides a security blanket against uncertainties.",
                "score": 14
              },
              {
                "text": "Insurance isn't just about returns; it's about protection and peace of mind for unforeseen situations.",
                "score": 15
              },
              {
                "text": "Sure, go ahead and gamble your savings.",
                "score": -7
              }
            ]
          },
          {
            "dialog": "What benefits can I get from a health insurance policy given I work in healthcare?",
            "choices": [
              {
                "text": "You'd get coverage for treatments, hospitalizations, and even potential income loss during health issues.",
                "score": 15
              },
              {
                "text": "Even in healthcare, out-of-pocket expenses can be significant. Health insurance ensures you're covered without straining your finances.",
                "score": 14
              },
              {
                "text": "Don't you get discounts being in healthcare?",
                "score": -5
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_D_001",
      "cardType": "leadCard",
      "leadName": "Mr. Ethan Roberts",
      "profileImage": "assets/img/man3.svg",
      "leadPersona": "Mr. Roberts is a 45-year-old event manager in Singapore. He lives a fast-paced life, often managing multiple events simultaneously. While successful in his career, he hasn't spent much time considering personal or financial protection.",
      "category": "D",
      "startTrust": 10,
      "scenario": "You encounter Mr. Roberts at a large corporate event you're attending. After a brief introduction, you find an opportunity to discuss the importance of planning for the future amidst the chaos of event management.",
      "dialogChoices": {
        "D": [
          {
            "dialog": "My life's always on the move. Do I really have time for insurance?",
            "choices": [
              {
                "text": "Understanding your busy lifestyle, insurance can provide a safety net, giving peace of mind amidst the hustle.",
                "score": 12
              },
              {
                "text": "Absolutely, Mr. Roberts. It's about ensuring stability for unexpected turns in life.",
                "score": 13
              },
              {
                "text": "Life's a risk, right? Just roll with it.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I sometimes handle high-value equipment for events. Can those be covered?",
            "choices": [
              {
                "text": "Yes, there are specific insurance policies for equipment, ensuring they're protected against damages or theft.",
                "score": 14
              },
              {
                "text": "Definitely. Covering valuable assets is crucial in your line of work. We can help with that.",
                "score": 13
              },
              {
                "text": "Why not just be extra careful with them?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Given the pandemic, can I get insurance against event cancellations?",
            "choices": [
              {
                "text": "Certainly, event cancellation insurance can help mitigate losses from unforeseen event disruptions.",
                "score": 14
              },
              {
                "text": "Yes, especially with current uncertainties, such policies are invaluable for event managers.",
                "score": 13
              },
              {
                "text": "Just plan better events, and they won't get cancelled.",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I've many employees and associates. Can I ensure they're covered during events?",
            "choices": [
              {
                "text": "Absolutely, group insurance policies can cover your employees and associates, providing protection during events.",
                "score": 15
              },
              {
                "text": "Yes, considering their well-being reflects well on your business. We can assist in getting comprehensive coverage.",
                "score": 14
              },
              {
                "text": "Aren't they responsible for their own safety?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "With so many transactions, I'm concerned about potential liabilities. What can I do?",
            "choices": [
              {
                "text": "Liability insurance is designed for such concerns, covering claims that may arise from your business operations.",
                "score": 15
              },
              {
                "text": "It's a valid concern in event management. We can provide policies that shield against potential legal claims.",
                "score": 14
              },
              {
                "text": "Just hope for the best. What could go wrong?",
                "score": -7
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_C_002",
      "cardType": "leadCard",
      "leadName": "Ms. Fiona Chen",
      "profileImage": "assets/img/woman4.svg",
      "leadPersona": "Ms. Chen is a 38-year-old single mother and a passionate environmentalist. She works for an NGO in Singapore, advocating for environmental causes. While committed to global well-being, she's started to consider her own future and that of her daughter.",
      "category": "C",
      "startTrust": 10,
      "scenario": "You meet Ms. Chen at a charity run event. As the day progresses, amidst conversations about sustainability and the environment, the discussion moves to personal security and future planning.",
      "dialogChoices": {
        "C": [
          {
            "dialog": "I've always focused on the planet's future. But lately, I've been thinking about my daughter's and my own. What should I consider?",
            "choices": [
              {
                "text": "It's commendable to care for the planet, Ms. Chen. Ensuring your daughter's future with insurance can be a good starting point.",
                "score": 13
              },
              {
                "text": "Balancing global and personal well-being is crucial. Let's explore options to secure both.",
                "score": 14
              },
              {
                "text": "Better late than never, right?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "Working for an NGO, I don't earn much. Are there affordable insurance options?",
            "choices": [
              {
                "text": "Definitely. There are diverse plans catering to various budgets, ensuring everyone gets adequate coverage.",
                "score": 14
              },
              {
                "text": "Yes, the goal is to provide protection, not strain your finances. We can find something suitable.",
                "score": 13
              },
              {
                "text": "Maybe consider a higher paying job?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "I'd like my daughter to study overseas. Can insurance help with future educational expenses?",
            "choices": [
              {
                "text": "Certainly, education savings plans can help accumulate funds for her future studies.",
                "score": 14
              },
              {
                "text": "Yes, planning ahead with the right policy ensures her educational dreams aren't compromised.",
                "score": 15
              },
              {
                "text": "Why not just save up normally?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I'm concerned about potential health issues as I age. What should I look into?",
            "choices": [
              {
                "text": "Health insurance with critical illness coverage can be a wise choice, providing support during tough times.",
                "score": 15
              },
              {
                "text": "Given your concerns, a comprehensive health policy can be tailored to ensure you're well-protected.",
                "score": 14
              },
              {
                "text": "Aren't we all worried about aging?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Can my contributions to environmental causes be somehow protected or insured?",
            "choices": [
              {
                "text": "While direct insurance for contributions is uncommon, you can ensure financial stability, which indirectly supports your causes.",
                "score": 14
              },
              {
                "text": "We can structure a plan ensuring your ability to contribute remains consistent, even in uncertain times.",
                "score": 13
              },
              {
                "text": "How do you insure goodwill?",
                "score": -7
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_D_002",
      "cardType": "leadCard",
      "leadName": "Mr. Rajan Kapoor",
      "profileImage": "assets/img/man4.svg",
      "leadPersona": "Mr. Kapoor is a 50-year-old restaurateur in Singapore, owning a chain of successful Indian cuisine restaurants. While he's achieved business success, the recent economic fluctuations have made him rethink about securing his assets and ensuring a legacy for his children.",
      "category": "D",
      "startTrust": 10,
      "scenario": "You find yourself dining at one of Mr. Kapoor's restaurants. By sheer chance, you're seated next to him at the bar. Conversations shift from food to future security, leading to a discussion on insurance.",
      "dialogChoices": {
        "D": [
          {
            "dialog": "The restaurant business is unpredictable. How can I ensure I don't suffer huge losses?",
            "choices": [
              {
                "text": "Business interruption insurance can help compensate for lost income during unforeseen disruptions, Mr. Kapoor.",
                "score": 14
              },
              {
                "text": "Protection against uncertainties is key. Let's explore insurance options tailored for your industry.",
                "score": 13
              },
              {
                "text": "You're already successful. Why worry now?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "My family has always been my priority. How do I secure their future, especially when I'm gone?",
            "choices": [
              {
                "text": "Life insurance and estate planning can ensure your family's well-being and that your legacy continues seamlessly.",
                "score": 14
              },
              {
                "text": "Ensuring a financial safety net and a smooth inheritance transition is essential. We can guide you on this.",
                "score": 15
              },
              {
                "text": "Haven't you already given them enough with the business?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "With various properties and assets, managing them becomes a headache. What's your suggestion?",
            "choices": [
              {
                "text": "Asset protection and management insurance can provide coverage and simplify the process for you.",
                "score": 15
              },
              {
                "text": "Having a cohesive insurance plan can reduce complexities, ensuring each asset is well-protected and managed.",
                "score": 14
              },
              {
                "text": "More assets, more problems, right?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "I've multiple employees. I want to ensure they're cared for too. What can I do?",
            "choices": [
              {
                "text": "Group health insurance and employee benefits can ensure they're well-covered, fostering loyalty and trust.",
                "score": 15
              },
              {
                "text": "Your employees are your business's backbone. Let's explore comprehensive plans that cater to their well-being.",
                "score": 14
              },
              {
                "text": "Isn't a salary enough for them?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "Given recent events, I'm considering insurance against thefts and damages. Is that possible?",
            "choices": [
              {
                "text": "Certainly! Property and casualty insurance can cover potential damages or thefts in your establishments.",
                "score": 15
              },
              {
                "text": "Absolutely, Mr. Kapoor. Ensuring your establishments against unforeseen events is a wise decision.",
                "score": 14
              },
              {
                "text": "Just invest in better security systems.",
                "score": -7
              }
            ]
          }
        ]
      }
    },
    {
      "leadID": "SG_A_003",
      "cardType": "leadCard",
      "leadName": "Mr. Joshua Ong",
      "profileImage": "assets/img/man5.svg",
      "leadPersona": "Mr. Ong is a 60-year-old grandfather who recently retired from his position as an engineer in a prominent firm in Singapore. He is looking forward to spending quality time with his grandchildren but is concerned about leaving behind a secure future for them.",
      "category": "A",
      "startTrust": 10,
      "scenario": "During a family gathering, Mr. Ong shares his retirement reflections. Amidst stories of his work days, he subtly expresses worries about the future of his grandchildren.",
      "dialogChoices": {
        "A": [
          {
            "dialog": "I've been fortunate in my career, but I wonder if I've done enough to ensure my grandchildren's future.",
            "choices": [
              {
                "text": "Your concern is commendable, Mr. Ong. Let's explore options to create a lasting legacy for them.",
                "score": 14
              },
              {
                "text": "Building a secure future is an ongoing journey. With the right planning, we can ensure their well-being.",
                "score": 13
              },
              {
                "text": "Aren't their parents supposed to handle that?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "With medical costs rising, I'm worried about potential health issues. What can I consider?",
            "choices": [
              {
                "text": "Health insurance, especially one tailored for seniors, can help cover potential medical expenses without straining your savings.",
                "score": 15
              },
              {
                "text": "It's a valid concern, Mr. Ong. Let's find a plan that provides comprehensive coverage while being budget-friendly.",
                "score": 14
              },
              {
                "text": "You've been healthy so far, why worry now?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "I'd like to leave behind something for my grandchildren. Is there an insurance that can help with that?",
            "choices": [
              {
                "text": "Absolutely! Life insurance policies can serve as a financial legacy, ensuring your grandchildren's future financial needs are met.",
                "score": 14
              },
              {
                "text": "Setting up a life insurance policy with them as beneficiaries is a wonderful gesture. Let's explore suitable options.",
                "score": 15
              },
              {
                "text": "Can't you just leave them some money?",
                "score": -5
              }
            ]
          },
          {
            "dialog": "What about my wife? I want to ensure she's comfortable if I'm not around.",
            "choices": [
              {
                "text": "Spouse protection is essential. We can tailor a plan ensuring her comfort and financial stability in your absence.",
                "score": 15
              },
              {
                "text": "Your foresight is commendable. Let's ensure she's well-taken care of with the right coverage.",
                "score": 14
              },
              {
                "text": "Isn't she independent enough?",
                "score": -6
              }
            ]
          },
          {
            "dialog": "I've heard of annuities. Can they provide a consistent income during retirement?",
            "choices": [
              {
                "text": "Yes, annuities are designed to provide a steady income stream during retirement, ensuring financial stability.",
                "score": 14
              },
              {
                "text": "Absolutely, Mr. Ong. Annuities can supplement your retirement income, giving peace of mind in your golden years.",
                "score": 15
              },
              {
                "text": "Why not just live off your savings?",
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
  