/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { v4 as uuid_v4 } from 'uuid';
import { addBook, getBooks } from '../redux/books/books';
import { baseUrl, appId } from '../redux/api';

export const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const getBooksFromApi = () => {
    // dispatch(getBooks);
    axios.get(`${baseUrl}${appId}/books`).then((response) => {
      if (response.data) {
        dispatch(getBooks(response.data));
      }
    });
  };

  const postBook = (newBook) => {
    axios.post(`${baseUrl}${appId}/books`, newBook)
      .then((response) => {
        if (response.status === 201) {
          dispatch(addBook(newBook));
          getBooksFromApi();
        }
      })
      .catch((error) => { throw new Error(error); });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid_v4(),
      title,
      category: author,
    };

    // dispatch(addBook(newBook));
    postBook(newBook);
    setTitle('');
    setAuthor('');
  };

  useEffect(() => {
    getBooksFromApi();
  }, []);

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
