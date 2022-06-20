import basisOfGames from '../index.js';
import getRandNumber from '../randomNumberCreator.js';

const progressionGame = () => {
  const gameRuleProgression = 'What number is missing in the progression?';
  const taskProgression = () => {
    const resultArr = [];
    const lastIndex = 9;
    //  шаг чисел
    const getStep = () => {
      const necessaryStep = getRandNumber(7);
      return (necessaryStep === 0 ? getStep() : necessaryStep);
    };
    const step = getStep();
    //  первое число прогрессии
    const getStartNum = () => {
      const num = getRandNumber(100);
      const limitNum = num + (getStep() * lastIndex);
      if (limitNum > 100) { return getStartNum(); }
      return num;
    };
    //   создание массива прогрессии
    for (let i = 0, nextNum = getStartNum(); i < 10; i += 1, nextNum += step) {
      resultArr.push(nextNum);
    }
    const randomIndex = getRandNumber(lastIndex);
    //  сокрытие рандомного элемента массива
    let result = resultArr[randomIndex];
    resultArr[randomIndex] = '..';
    //  преобразование в строку
    const question = resultArr.join(' ');
    result = result.toString();
    return [question, result.toString()];
  };

  basisOfGames(gameRuleProgression, taskProgression);
};
export default progressionGame;
