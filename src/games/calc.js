import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

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

const getOperand = () => {
  const maxNumberSize = 100;
  return getRandomNumber(maxNumberSize);
};

const getQueston = (num1, num2, operator) => `${num1} ${operator} ${num2}`;

const generateExpression = () => {
  const operand1 = getOperand();
  const operand2 = getOperand();
  const operator = getOperator();
  const question = getQueston(operand1, operand2, operator);
  const result = getExpression(operand1, operand2, operator);
  return [question, result.toString()];
};

const calcGame = () => buildGame(getGameRule(), generateExpression);

export default calcGame;
