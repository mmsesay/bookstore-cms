import { AddBookForm } from './AddBookForm';
// import { Book } from './Book';

export const BookList = (prop) => {
  console.log(prop);

  return (
      <div>
      <br />
      <AddBookForm />
    </div>
  );
};

// {/* <ul>
//   {prop && prop.booksArray.map((data, index) => <Book key={index} book={data}/>)}
// </ul> */}
