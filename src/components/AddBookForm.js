import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newObject = {
      title,
      author,
    };

    dispatch(addBook(newObject));
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
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
