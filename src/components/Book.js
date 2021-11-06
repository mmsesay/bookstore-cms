/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';
import { deleteBookFromApi } from '../redux/api';

export const Book = (prop) => {
  const { 
    item_id, title, category, percentage,
    category_section, chapter,
  } = prop.book;
  const dispatch = useDispatch();

  const handleRemove = (e, item_id) => {
    e.preventDefault();
    
    deleteBookFromApi(item_id);
    dispatch(removeBook({ item_id })); 
  };

  return (
    <>
      <li key={item_id} className="Lesson-Panel flex space-x-10">
        <div className="w-4/6">
          <p className="w-full text-xl text-gray-400 font-semibold">{category_section}</p>
          <p className="Book-Title w-full">{title}</p>
          <p className="Author-Name text-blue-400">{category}</p>
          <div className="flex mt-4">
            <p className="text-blue-400 font-crete hover:text-gray-400 cursor-pointer">Comments</p>
            <span className="border-r mx-2"></span>
            <p
              className="text-blue-400 font-crete hover:text-gray-400 cursor-pointer"
              type="button"
              onClick={(e) => handleRemove(e, item_id)}>
              Remove
            </p>
            <span className="border-r mx-2"></span>
            <p className="text-blue-400 font-crete hover:text-gray-400 cursor-pointer">Edit</p>
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="w-24 h-24">
            <CircularProgressbar value={percentage} className="text-blue-400"/>
          </div>
          <div className="">
            <p className="text-4xl">{percentage}%</p>
            <p className="font-montserrat text-lg">Completed</p>
          </div>
        </div>
        <span className="border-r border-gray-200 mx-2"></span>
        <div className="w-1/4 font-crete">
          <p className="font-thin text-gray-400">CURRENT CHAPTER</p>
          <p className="font-thiner text-gray-600">{chapter}</p>
          <button className="font-montserrat bg-blue-500 text-white p-2 rounded mt-4">
            UPDATE PROGRESS
          </button>
        </div>
      </li>
      <br />
    </>
  );
};