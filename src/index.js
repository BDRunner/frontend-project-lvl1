import readlineSync from 'readline-sync';

const runGame = (gameRule, generateQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  const numberOfGameRounds = 3;
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const [question, correctAnswer] = generateQuestionAnswerPair();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
