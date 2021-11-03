import { AddBookForm } from './AddBookForm';
import { Book } from './Book';

export const BookList = (prop) => {
  const { booksArray } = prop.data;

  return (
    <div>
      <ul>
        {booksArray && booksArray.map((data, index) => <Book key={index} book={data}/>)}
      </ul>
      <AddBookForm />
      <br />
      <br />
    </div>
  );
};

// {/* <ul>
//   {prop && prop.booksArray.map((data, index) => <Book key={index} book={data}/>)}
// </ul> */}
