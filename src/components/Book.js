import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export const Book = (prop) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook({ id }));
  };

  return Object.entries(prop.book).map((data) => {
    const [{ title, category }] = data[1];

    return (
      <>
        <li key={data[0]}>
          <p>{title}</p>
          <p>{category}</p>
          <button type="button" onClick={() => handleRemove(data[0])}>Remove</button>
        </li>
        <br />
      </>
    );
  });
};  