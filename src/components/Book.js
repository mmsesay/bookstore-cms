/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
      <li key={item_id} className="Lesson-Panel flex space-x-10">
        <span>
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
        </span>
        <span className="flex space-x-3 items-center">
          <div className="w-24 h-24">
            <CircularProgressbar value={66} className="text-blue-400"/>
          </div>
          <div className="">
            <p className="text-3xl">64%</p>
            <p className="font-montserrat text-lg">Completed</p>
          </div>
        </span>
        <span>
          Current
        </span>
      </li>
      <br />
    </>
  );
};