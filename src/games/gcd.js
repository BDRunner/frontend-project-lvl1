import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const gcdGame = () => {
  const gameRuleGcd = 'Find the greatest common divisor of given numbers.';

  const generateGcd = () => {
    const operand1 = getRandomNumber(100);
    const operand2 = getRandomNumber(100);
    const question = `${operand1} ${operand2}`;
    const calcGCD = (num1, num2) => {
      if (!num2) {
        return num1;
      }
      return calcGCD(num2, num1 % num2);
    };
    const result = calcGCD(operand1, operand2);

    return [question, result.toString()];
  };
  buildGame(gameRuleGcd, generateGcd);
};
export default gcdGame;
