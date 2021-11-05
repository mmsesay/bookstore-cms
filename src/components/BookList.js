import { AddBookForm } from './AddBookForm';
import { Book } from './Book';

export const BookList = (prop) => {
  const { booksArray } = prop.data;

  return (
    <div className="card rounded-bl-md rounded-br-md">
      <ul className="py-10">
        {booksArray && booksArray.map((data, index) => <Book key={index} book={data} />)}
      </ul>
      <div className="border border-gray-200 mx-28 "></div>
      <AddBookForm />
    </div>
  );
};