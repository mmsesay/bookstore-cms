export const generateRandomPercentage = () => Math.floor(Math.random() * 101);

const categories = ['Action', 'Science', 'Economy'];

export const generateRandomCategory = () => categories[
  Math.floor(Math.random() * categories.length)];