import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const getGameRule = () => 'Find the greatest common divisor of given numbers.';

const getOperand = () => {
  const maxNumberSize = 100;
  return getRandomNumber(maxNumberSize);
};

const getQuestion = (num1, num2) => `${num1} ${num2}`;

const calcGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return calcGCD(num2, num1 % num2);
};

const generateGcd = () => {
  const operand1 = getOperand();
  const operand2 = getOperand();
  const question = getQuestion(operand1, operand2);
  const result = calcGCD(operand1, operand2);
  return [question, result.toString()];
};

const gcdGame = () => buildGame(getGameRule(), generateGcd);

export default gcdGame;
