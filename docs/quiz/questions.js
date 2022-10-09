
export const questions = [

  0,

  { // 1 (test question)
    question: "How big are neutron stars?",
    choices: [
      "Around the size of a neutron, of course",
      "Around the size of the Sun",
      "Around the size of the Earth",
      "Around the size of a mountain",
      "Black body radiation",
    ],
    answer: 4,
  },

  { // 2 
    question: "What is spaghetti?",
    choices: [
      "edible, long, thin, cylindrical noodles",
      "the code of this website",
      "astronauts falling into black holes",
      "long rods of nucleons",
      "an O(N) sorting algorithm",
    ],
    answer: 4,
  },

  { // 3 
    question: "Why are neutron stars named 'neutron stars'?",
    choices: [
      "They spin as fast as neutrons",
      "They are as dense as neutrons",
      "They are as hot as neutrons",
      "They are as large as impostors",
      "They eat neutrinos for lunch",
    ],
    answer: 2,
  },

  { // 4 
    question: "When 2 neutron stars merge, what can't form?",
    choices: [
      "a pulsar",
      "a magnetar",
      "a black hole",
      "a kilonova",
      "a white dwarf",
    ],
    answer: 5,
  },

  { // 5
    question: "Which of these don't exist in neutron stars?",
    choices: [
      "carbon dioxide",
      "iron nuclei",
      "neutrons",
      "anti-gnocchi",
      "oxygen nuclei",
    ],
    answer: 1,
  },

  { // 6
    question: "Everyone likes neutron stars. Why?",
    choices: [
      "they are the most accurate and stable clock in the universe",
      "they are generally better than black holes, and won't eat you up",
      "they have the second-strongest pasta in the universe",
      "they are even cooler than the Sun",
      "they emit black body radiation",
    ],
    answer: 5,
  },

  { // 7
    question: "Everyone doesn't like neutron stars. Why?",
    choices: [
      "they can make you blind if you stare at them for too long",
      "they have a surface temperature of 600000 °C, and cannot be used as beds",
      "they enjoy eating neutrinos for lunch, leaving none for us",
      "they don't like us, therefore we don't like them",
      "they are very sus, especially in the game 'Among Us'",
    ],
    answer: 2,
  },

];

for (const question of questions) {
  if (typeof question === "number") continue;
  question.chosen = [false, false, false, false, false, false];
  question.chosen_number = 0;
}