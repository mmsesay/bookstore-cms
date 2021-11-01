import { AddBookForm } from './AddBookForm';
import { BookList } from './BookList';

export const Books = (booksArray) => (
  <div>
    <ul>
      {booksArray.map((book) => <BookList key={book} book={book} />)}
    </ul>
    <br />
    <AddBookForm />
  </div>
);