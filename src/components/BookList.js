import { AddBookForm } from './AddBookForm';
import { Book } from './Book';

export const BookList = (prop) => {
  const { booksArray } = prop.data;

  return (
    <div className="bg-white card">
      <ul className="py-10">
        {booksArray && booksArray.map((data, index) => <Book key={index} book={data} />)}
      </ul>
      <AddBookForm />
    </div>
  );
};