import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const progressionGame = () => {
  const gameRuleProgression = 'What number is missing in the progression?';
  const generateProgression = () => {
    const progressionArray = [];

    const getStep = () => {
      const sizeStep = getRandomNumber(7);
      return sizeStep === 0 ? getStep() : sizeStep;
    };

    const step = getStep();

    for (let i = 0; i < 9; i += 1) {
      if (progressionArray.length === 0) {
        progressionArray.push(getRandomNumber(100));
      }
      progressionArray.push(progressionArray[i] + step);
    }

    const arrayToOutput = progressionArray.slice();
    const getRandomElement = getRandomNumber(9);
    const result = progressionArray[getRandomElement].toString();
    arrayToOutput[getRandomElement] = '..';
    const question = arrayToOutput.join(' ');
    return [question, result];
  };

  buildGame(gameRuleProgression, generateProgression);
};
export default progressionGame;
