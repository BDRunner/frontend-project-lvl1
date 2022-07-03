import buildGame from '../index.js';
import { getRandomNumber, maxNumberSize } from '../helperLibrary.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const checkEven = () => {
  const randomNumber = getRandomNumber(maxNumberSize);
  const evenResult = isEven(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, evenResult];
};

const evenOperationResult = () => buildGame(gameRule, checkEven);

export default evenOperationResult;
