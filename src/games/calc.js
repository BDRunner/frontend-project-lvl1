import buildGame from '../index.js';
import { getRandomNumber, maxNumberSize } from '../numberCreator.js';

const getGameRule = () => 'What is the result of the expression?';

const getExpression = (num1, num2, mathOperator) => {
  switch (mathOperator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      throw new Error(`Unsupported operator: '${mathOperator}'!`);
  }
};

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const selectOperator = operators[getRandomNumber(operators.length)];
  return selectOperator;
};

const getOperand = () => getRandomNumber(maxNumberSize);

const generateExpression = () => {
  const operand1 = getOperand();
  const operand2 = getOperand();
  const operator = getOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  const result = getExpression(operand1, operand2, operator);
  return [question, result.toString()];
};

const calcGame = () => buildGame(getGameRule(), generateExpression);

export default calcGame;
