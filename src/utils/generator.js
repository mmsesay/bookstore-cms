export const generateRandomPercentage = () => Math.floor(Math.random() * 101);

const categories = ['Action', 'Science', 'Economy'];
const chapters = ['Chapter 17', 'Chapter 3: A Lesson Learned', 'Introduction', 'Chapter 12', 'Chapter 2'];

export const generateRandomCategory = () => categories[
  Math.floor(Math.random() * categories.length)];

export const generateRandomChapter = () => chapters[
  Math.floor(Math.random() * chapters.length)];