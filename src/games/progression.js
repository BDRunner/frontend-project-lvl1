import buildGame from '../index.js';
import getRandomNumber from '../randomNumberCreator.js';

const progressionGame = () => {
  const gameRuleProgression = 'What number is missing in the progression?';
  const generateProgression = () => {
    const progressionArray = [];

    const getStep = () => {
      const sizeStep = getRandomNumber(7);
      return sizeStep > 0 ? sizeStep : getStep();
    };

    const step = getStep();
    //  формирую прогрессию с шагом
    for (let i = 0; i < 9; i += 1) {
      if (progressionArray.length === 0) {
        progressionArray.push(getRandomNumber(100));
      }
      progressionArray.push(progressionArray[i] + step);
    }
    //  делаю копию массива для дальнейшего преобразования к выводу в консоль
    const arrayToOutput = progressionArray.slice();
    //  генерирую случайное число
    const getRandomElement = getRandomNumber(9);
    // выбираю ответ который буду прятать
    const result = progressionArray[getRandomElement].toString();
    //  закрываю символ в массиве на выводе
    arrayToOutput[getRandomElement] = '..';
    const question = arrayToOutput.join(' ');
    return [question, result];
  };

  buildGame(gameRuleProgression, generateProgression);
};
export default progressionGame;
