export function getQuestions() {
  const questions = [
    {
      question:
        'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
      answers: [
        {
          answer: 'Don’t dare to interrupt them',
          extroversionLevel: 3,
        },
        {
          answer:
            'Think it’s more important to give them some of your time; work can wait',
          extroversionLevel: 7,
        },
        {
          answer: 'Listen, but with only with half an ear',
          extroversionLevel: 4,
        },
        {
          answer:
            'Interrupt and explain that you are really busy at the moment',
          extroversionLevel: 2,
        },
      ],
    },
    {
      question:
        'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
      answers: [
        {
          answer: 'Look at your watch every two minutes',
          extroversionLevel: 2,
        },
        {
          answer: 'Bubble with inner anger, but keep quiet',
          extroversionLevel: 2,
        },
        {
          answer:
            'Explain to other equally impatient people in the room that the doctor is always running late',
          extroversionLevel: 8,
        },
        {
          answer:
            'Complain in a loud voice, while tapping your foot impatiently',
          extroversionLevel: 8,
        },
      ],
    },
    {
      question:
        'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
      answers: [
        {
          answer: 'Don’t dare contradict them',
          extroversionLevel: 2,
        },
        {
          answer: 'Think that they are obviously right',
          extroversionLevel: 3,
        },
        {
          answer: 'Defend your own point of view, tooth and nail',
          extroversionLevel: 8,
        },
        {
          answer: 'Continuously interrupt your colleague',
          extroversionLevel: 7,
        },
      ],
    },
    {
      question: 'You are taking part in a guided tour of a museum. You:',
      answers: [
        {
          answer:
            'Are a bit too far towards the back so don’t really hear what the guide is saying',
          extroversionLevel: 2,
        },
        {
          answer: 'Follow the group without question',
          extroversionLevel: 3,
        },
        {
          answer: 'Make sure that everyone is able to hear properly',
          extroversionLevel: 8,
        },
        {
          answer:
            'Are right up the front, adding your own comments in a loud voice',
          extroversionLevel: 9,
        },
      ],
    },
  ];

  return questions;
}
