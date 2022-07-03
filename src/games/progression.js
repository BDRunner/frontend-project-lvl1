import buildGame from '../index.js';
import { getRandomNumber, maxNumberSize, maxProgressionSize } from '../helperLibrary.js';

const gameRule = 'What number is missing in the progression?';

const getStep = () => {
  const minStepSize = 1;
  const maxStepSize = 7;
  const sizeStep = getRandomNumber(maxStepSize, minStepSize);
  return sizeStep;
};

const getProgression = () => {
  const progressionArray = [];
  progressionArray.push(getRandomNumber(maxNumberSize));
  const step = getStep();
  for (let i = 0; i < maxProgressionSize; i += 1) {
    progressionArray.push(progressionArray[i] + step);
  }
  return progressionArray;
};

const getQuestion = (progression, getRandomElement) => {
  const arrayToOutput = progression.slice();
  arrayToOutput[getRandomElement] = '..';
  return arrayToOutput.join(' ');
};

const generateProgression = () => {
  const progression = getProgression();
  const randomIndexProgression = getRandomNumber(maxProgressionSize);
  const result = progression[randomIndexProgression];
  const question = getQuestion(progression, randomIndexProgression);
  return [question, result.toString()];
};

const progressionOperationResult = () => buildGame(gameRule, generateProgression);

export default progressionOperationResult;
