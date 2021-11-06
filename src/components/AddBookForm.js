import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import { postBookToApi } from '../redux/api';
import { 
  generateRandomPercentage, generateRandomCategory,
  generateRandomChapter,
} from '../utils/generator';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (title && author) {
      const newBookToApi = {
        item_id: uuidv4(),
        title,
        category: author,
      };

      const newBookToStore = {
        item_id: uuidv4(),
        title,
        category: author,
        percentage: generateRandomPercentage(),
        category_section: generateRandomCategory(),
        chapter: generateRandomChapter(),
      };

      await postBookToApi(newBookToApi);
      dispatch(addBook(newBookToStore));
      setTitle('');
      setAuthor('');
    } else {
      setMessage('Both title and author fields are required');
    }
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 4000);
    }
  }, [message]);

  return (
    <div className="mx-20 p-10 my-5">
      <h2 className="font-montserrat font-bold text-3xl text-gray-500">ADD NEW BOOK</h2>
      {
        message 
        && <div className="bg-red-100 w-2/3 h-16 flex items-center justify-center rounded my-3">
          <p className="text-center text-red-600 text-2xl font-montserrat font-bold">{message}</p>
        </div>
      }
      <form method="POST" onSubmit={handleFormSubmit} className="mt-5 mb-40 flex items-center space-x-10">
        <input 
          type="text"
          placeholder="Book title" 
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="my-3 w-2/4 p-4 font-montserrat text-3xl text-gray-500 border border-gray-300 focus:outline-none"
        />
        <input 
          type="text"
          placeholder="Author Name" 
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          className="my-3 w-2/4 p-4 font-montserrat text-3xl text-gray-500 border border-gray-300 focus:outline-none"
        />
        <button type="submit" className="font-montserrat bg-blue-500 text-white p-6 rounded focus:outline-none w-48 text-center">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
