import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const gcdGame = () => {
  const gameRuleGcd = 'Find the greatest common divisor of given numbers.';

  const generateGcd = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);
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
  buildGame(gameRuleGcd, generateGcd);
};
export default gcdGame;
