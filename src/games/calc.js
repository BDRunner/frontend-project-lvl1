import buildGame from '../index.js';
import { getRandomNumber, maxNumberSize } from '../helperLibrary.js';

const gameRule = 'What is the result of the expression?';

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
  const maxNumberOfOperator = operators.length - 1;
  const selectOperator = operators[getRandomNumber(maxNumberOfOperator)];
  return selectOperator;
};

const generateExpression = () => {
  const operand1 = getRandomNumber(maxNumberSize);
  const operand2 = getRandomNumber(maxNumberSize);
  const operator = getOperator();
  const question = `${operand1} ${operator} ${operand2}`;
  const result = getExpression(operand1, operand2, operator);
  return [question, result.toString()];
};

const calcOperationResult = () => buildGame(gameRule, generateExpression);

export default calcOperationResult;
