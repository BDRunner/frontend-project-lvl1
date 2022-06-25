import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const calcGame = () => {
  const gameRuleCalc = 'What is the result of the expression?';

  const generateExpression = () => {
    const operand1 = getRandomNumber(100);
    const operand2 = getRandomNumber(100);

    const operators = ['+', '-', '*'];
    const selectOperator = operators[getRandomNumber(operators.length)];

    const question = `${operand1} ${selectOperator} ${operand2}`;

    const chosenExpression = (num1, num2, mathOperator) => {
      switch (mathOperator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        default:
          throw new Error(`Unsupported operator: '${mathOperator}'!`);
      }
    };

    const result = chosenExpression(operand1, operand2, selectOperator);
    return [question, result.toString()];
  };
  buildGame(gameRuleCalc, generateExpression);
};

export default calcGame;
