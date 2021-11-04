/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import { deleteBookFromApi } from '../redux/api';

export const Book = (prop) => {
  const { item_id, title, category } = prop.book;
  const dispatch = useDispatch();

  const handleRemove = (e, item_id) => {
    e.preventDefault();
    
    deleteBookFromApi(item_id);
    dispatch(removeBook({ item_id })); 
  };

  return (
    <>
      <li key={item_id}>
        <p>{title}</p>
        <p>{category}</p>
        <button type="button" onClick={(e) => handleRemove(e, item_id)}>Remove</button>
      </li>
      <br />
    </>
  );
};