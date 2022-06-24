import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const calcGame = () => {
  const gameRuleCalc = 'What is the result of the expression?';

  const generateExpression = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);

    const operator = ['+', '-', '*'];
    const selectOperator = operator[getRandomNumber(3)];

    const question = `${num1} ${selectOperator} ${num2}`;

    const chosenExpression = (a, b, mathOperator) => {
      switch (mathOperator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        default:
          throw new Error(`Unsupported operator: '${mathOperator}'!`);
      }
    };

    const result = chosenExpression(num1, num2, selectOperator);
    return [question, result.toString()];
  };
  buildGame(gameRuleCalc, generateExpression);
};

export default calcGame;
