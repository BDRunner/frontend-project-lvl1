import buildGame from '../index.js';
import { getRandomNumber, maxNumberSize } from '../helperLibrary.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const checkPrime = () => {
  const randomNumber = getRandomNumber(maxNumberSize);
  const question = randomNumber.toString();
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, result];
};

const primeOperationResult = () => buildGame(gameRule, checkPrime);

export default primeOperationResult;
