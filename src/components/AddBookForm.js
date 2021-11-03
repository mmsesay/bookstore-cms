/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';
import { addBook } from '../redux/books/books';
import { postBookToApi } from '../redux/api';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid_v4(),
      title,
      category: author,
    };

    await postBookToApi(newBook);
    // console.log(response.data);
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  useEffect(() => {}, []);

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
