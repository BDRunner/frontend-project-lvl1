export const getRandomNumber = (max, min = 0) => {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomNumber);
};
export const maxNumberSize = 100;
export const maxProgressionSize = 9;
