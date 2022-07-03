import buildGame from '../index.js';
import { getRandomNumber, maxNumberSize } from '../helperLibrary.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const calcGCD = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return calcGCD(num2, num1 % num2);
};

const generateGCD = () => {
  const operand1 = getRandomNumber(maxNumberSize);
  const operand2 = getRandomNumber(maxNumberSize);
  const question = `${operand1} ${operand2}`;
  const result = calcGCD(operand1, operand2);
  return [question, result.toString()];
};

const GCDOperationResult = () => buildGame(gameRule, generateGCD);

export default GCDOperationResult;
