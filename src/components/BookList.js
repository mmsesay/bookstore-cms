import { AddBookForm } from './AddBookForm';
import { Book } from './Book';

export const BookList = (prop) => ( 
  <div>
    <ul>
      {prop && prop.booksArray.map((data, index) => <Book key={index} book={data}/>)}
    </ul>
    <br />
    <AddBookForm />
  </div>
);
