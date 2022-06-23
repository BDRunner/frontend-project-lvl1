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
      let result;
      switch (mathOperator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        default:
          throw new Error(`Unknown order state: '${mathOperator}'!`);
      }
      return result.toString();
    };

    return [question, chosenExpression(num1, num2, selectOperator)];
  };
  buildGame(gameRuleCalc, generateExpression);
};

export default calcGame;
