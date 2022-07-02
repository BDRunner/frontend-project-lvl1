export const maxNumberSize = 100;
export const maxProgressionSize = 9;
export const getRandomNumber = (max, min = 0) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.round(randomNumber);
};
