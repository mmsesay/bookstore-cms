// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { baseUrl, appId } from '../redux/api';
// import { removeBook } from '../redux/books/books';

export const Book = (prop) => {
  console.log(prop);
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
    <li key={prop.book.item_id}>
      <p>{prop.book.title}</p>
      <p>{prop.book.category}</p>
      <button type="button" onClick={() => handleRemove(1)}>Remove</button>
    </li>
  );
};

// return Object.entries(prop.book).map((data, index) => {
//   const [{ title, category }] = data[1];

//   return (
//     <>
//       {data && <li key={index}>
//           <p>{title}</p>
//           <p>{category}</p>
//           <button type="button" onClick={() => handleRemove(data[0])}>Remove</button>
//         </li>
//       }
//       <br />
//     </>
//   );
// });