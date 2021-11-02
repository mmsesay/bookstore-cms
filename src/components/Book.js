import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export const Book = (prop) => {
  const { id, title, author } = prop.book;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <li key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => handleRemove(id)}>Remove</button>
    </li>
  );
};