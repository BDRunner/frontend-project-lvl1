import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const evenGame = () => {
  const gameRuleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const checkEven = () => {
    const randomNumber = getRandomNumber(100);

    const isEven = (num) => num % 2 === 0;

    const question = `${randomNumber}`;
    const result = isEven(randomNumber) ? 'yes' : 'no';

    return [question, result];
  };
  buildGame(gameRuleEven, checkEven);
};

export default evenGame;
