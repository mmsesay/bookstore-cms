/* eslint-disable camelcase */
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { baseUrl, appId } from '../redux/api';
// import { removeBook } from '../redux/books/books';

export const Book = (prop) => {
  const { id, title, category } = prop.book;
  // const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log(id);
    // axios.post(`${baseUrl}${appId}/books`, { item_id: id })
    //   .then((response) => {
    //     console.log(response);
    //     // if (response.status === 201) {
    //     //   dispatch(removeBook({ id }));
    //     // }
    //   })
    //   .catch((error) => { throw new Error(error); });
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