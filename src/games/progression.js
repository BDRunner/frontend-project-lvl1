import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const getGameRule = () => 'What number is missing in the progression?';

const getStep = () => {
  const maxStepSize = 7;
  const sizeStep = getRandomNumber(maxStepSize);
  return sizeStep > 0 ? sizeStep : getStep();
};

const getProgression = () => {
  const maxNumberSize = 100;
  const progressionArray = [];
  const maxProgressionSize = 9;
  const step = getStep();
  for (let i = 0; i < maxProgressionSize; i += 1) {
    if (progressionArray.length === 0) {
      progressionArray.push(getRandomNumber(maxNumberSize));
    }
    progressionArray.push(progressionArray[i] + step);
  }
  return progressionArray;
};

const getQuestion = (progression, getRandomElement) => {
  const arrayToOutput = progression.slice();
  arrayToOutput[getRandomElement] = '..';
  return arrayToOutput.join(' ');
};

const checkProgression = () => {
  const maxNumberSize = 9;
  const progression = getProgression();
  const getRandomElement = getRandomNumber(maxNumberSize);
  const result = progression[getRandomElement].toString();
  const question = getQuestion(progression, getRandomElement);
  return [question, result];
};

const progressionGame = () => buildGame(getGameRule(), checkProgression);

export default progressionGame;
