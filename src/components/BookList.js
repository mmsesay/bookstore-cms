export const BookList = (book) => (
  <li key={book.index}>
    <p>{book.title}</p>
    <p>{book.author}</p>
    <button type="button">Remove</button>
  </li>
);