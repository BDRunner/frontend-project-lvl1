import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const getGameRule = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const getQuestion = (num) => num.toString();

const checkPrime = () => {
  const maxNumberSize = 100;
  const randomNumber = getRandomNumber(maxNumberSize);
  const question = getQuestion(randomNumber);
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, result];
};

const primeGame = () => buildGame(getGameRule(), checkPrime);

export default primeGame;
