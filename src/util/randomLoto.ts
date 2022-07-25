const randomLotoValues = new Map<number, number>();

export const getRandomLoto = (): number => {
  const random = Math.floor(Math.random() * 31);
  const randomValue = random <= 0 ? 1 : random;

  // Verify if marked number
  const verifyLotoNumberMarked = randomLotoValues.get(randomValue);

  if (verifyLotoNumberMarked && verifyLotoNumberMarked === randomValue) {
    return getRandomLoto();
  }

  randomLotoValues.set(randomValue, randomValue);

  return randomValue;
};
