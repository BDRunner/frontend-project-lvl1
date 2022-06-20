import basisOfGames from '../index.js';
import getRandNumber from '../randomNumberCreator.js';

const primeGame = () => {
  const gameRulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const taskPrime = () => {
    const num = getRandNumber(100);
    const question = num.toString();
    let flag = true;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        flag = false;
      }
    }
    const result = (flag === true) ? 'Yes' : 'No';
    return [question, result.toString()];
  };
  basisOfGames(gameRulePrime, taskPrime);
};

export default primeGame;
