import { AddBookForm } from './AddBookForm';
import { Book } from './Book';

export const BookList = (prop) => ( 
  <div>
    <ul>
      {prop.booksArray.map((data) => <Book key={data.id} book={data}/>)}
    </ul>
    <br />
    <AddBookForm />
  </div>
);
