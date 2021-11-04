/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { deleteBookFromApi } from '../redux/api';

export const Book = (prop) => {
  const { id, title, category } = prop.book;
  const dispatch = useDispatch();

  const handleRemove = (e, id) => {
    e.preventDefault();
    
    deleteBookFromApi(id);
    dispatch(removeBook({ id })); 
  };

  return (
    <>
      <li key={id}>
        <p>{title}</p>
        <p>{category}</p>
        <button type="button" onClick={(e) => handleRemove(e, id)}>Remove</button>
      </li>
      <br />
    </>
  );
};