export const maxNumberSize = 100;
export const maxProgressionSize = 9;
export const getRandomNumber = (max, min = 0) => {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.round(randomNumber);
};
