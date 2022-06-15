import basisOfGames from '../index.js';
import getRandNumber from '../randomNumberCreator.js';

const calcGame = () => {
  const gameRuleCalc = 'What is the result of the expression?';

  const taskCalc = () => {
    const num1 = getRandNumber(100);
    const num2 = getRandNumber(100);

    const arrSymbol = ['+', '-', '*'];
    const symbol = arrSymbol[getRandNumber(3)];

    const question = `${num1} ${symbol} ${num2}`;
    let result = 0;
    switch (symbol) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    return [question, result.toString()];
  };
  basisOfGames(gameRuleCalc, taskCalc);
};

export default calcGame;
