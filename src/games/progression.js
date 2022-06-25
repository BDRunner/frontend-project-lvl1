import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const progressionGame = () => {
  const gameRuleProgression = 'What number is missing in the progression?';
  const generateProgression = () => {
    const progressionArray = [];
    const lastIndex = 9;
    const maxStepSize = 7;

    const getStep = () => {
      const sizeStep = getRandomNumber(maxStepSize);
      return sizeStep > 0 ? sizeStep : getStep();
    };

    const step = getStep();
    for (let i = 0; i < lastIndex; i += 1) {
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
