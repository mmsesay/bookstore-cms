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
      <li key={item_id} className="Lesson-Panel">
        <p className="Book-Title">{title}</p>
        <p className="Author-Name text-blue-400">{category}</p>
        <span className="flex mt-8">
          <p className="text-blue-400 font-crete">Comments</p>
          <span className="border-r mx-2"></span>
          <p
            className="text-blue-400 font-crete"
            type="button"
            onClick={(e) => handleRemove(e, item_id)}>
            Remove
          </p>
          <span className="border-r mx-2"></span>
          <p className="text-blue-400 font-crete">Edit</p>
        </span>
      </li>
      <br />
    </>
  );
};