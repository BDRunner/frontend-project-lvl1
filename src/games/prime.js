import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const primeGame = () => {
  const gameRulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const checkPrime = () => {
    const randomNumber = getRandomNumber(100);
    const question = randomNumber.toString();

    const isPrime = (num) => {
      if (num === 0) return 'no';
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return 'no';
      }
      return 'yes';
    };

    const result = isPrime(randomNumber);

    return [question, result];
  };
  buildGame(gameRulePrime, checkPrime);
};

export default primeGame;
