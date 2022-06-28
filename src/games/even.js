import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const getGameRule = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestion = (num) => `${num}`;

const checkEven = () => {
  const randomNumber = getRandomNumber(100);
  const question = getQuestion(randomNumber);
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [question, result];
};

const evenGame = () => buildGame(getGameRule(), checkEven);

export default evenGame;
