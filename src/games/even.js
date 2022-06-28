import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const getGameRule = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestion = (num) => `${num}`;

const checkEven = () => {
  const maxNumberSize = 100;
  const randomNumber = getRandomNumber(maxNumberSize);
  const evenResult = isEven(randomNumber) ? 'yes' : 'no';
  const question = getQuestion(randomNumber);
  return [question, evenResult];
};

const evenGame = () => buildGame(getGameRule(), checkEven);

export default evenGame;
