import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import { postBookToApi } from '../redux/api';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        item_id: uuidv4(),
        title,
        category: author,
      };

      await postBookToApi(newBook);
      dispatch(addBook(newBook));
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
    <div>
      <h2>ADD NEW BOOK</h2>
      <p>{message}</p>

      <form method="POST" onSubmit={handleFormSubmit}>
        <input 
          type="text"
          placeholder="Author Name" 
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br/>
        <input 
          type="text"
          placeholder="Book title" 
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
