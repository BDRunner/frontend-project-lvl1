import basisOfGames from '../index.js';
import getRandNumber from '../randomNumberCreator.js';

const evenGame = () => {
  const gameRuleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const rndNum = getRandNumber(100);

    const isEven = (num) => num % 2 === 0;

    const question = `${rndNum}`;
    const result = (isEven(rndNum) ? 'Yes' : 'No');

    return [question, result];
  };
  basisOfGames(gameRuleEven, taskEven);
};

export default evenGame;
