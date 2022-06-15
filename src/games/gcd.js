import basisOfGames from '../index.js';
import getRandNumber from '../randomNumberCreator.js';

const gcdGame = () => {
  const gameRuleGcd = 'Find the greatest common divisor of given numbers.';

  const taskGcd = () => {
    const num1 = getRandNumber(100);
    const num2 = getRandNumber(100);
    const question = `${num1} ${num2}`;
    const gcdTask = (a, b) => {
      if (!b) {
        return a;
      }
      return gcdTask(b, a % b);
    };
    const result = gcdTask(num1, num2);

    return [question, result.toString()];
  };
  basisOfGames(gameRuleGcd, taskGcd);
};
export default gcdGame;
