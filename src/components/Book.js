/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { baseUrl, appId } from '../redux/api';
import { removeBook } from '../redux/books/books';

export const Book = (prop) => {
  const { id, title, category } = prop.book;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <>
      <li key={id}>
        <p>{title}</p>
        <p>{category}</p>
        <button type="button" onClick={() => handleRemove(id)}>Remove</button>
      </li>
      <br />
    </>
  );
};