import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const primeGame = () => {
  const gameRulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const checkSimplicity = () => {
    const randomNumber = getRandomNumber(100);
    const question = randomNumber.toString();

    const isSimply = (num) => {
      if (num === 0) return 'no';
      let flag = true;
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) flag = false;
      }
      return (flag === true) ? 'yes' : 'no';
    };

    const result = isSimply(randomNumber);

    return [question, result];
  };
  buildGame(gameRulePrime, checkSimplicity);
};

export default primeGame;
