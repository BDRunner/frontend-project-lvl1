import readlineSync from 'readline-sync';

const basisOfGames = (gameRule, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let i = 0; i < 3; i += 1) {
    const arrResult = task();
    console.log(`Question: ${arrResult[0]}`);
    const answerUser = readlineSync.question('Your answer: ');
    const rightAnswer = arrResult[1];
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default basisOfGames;
