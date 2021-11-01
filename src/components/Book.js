export const Book = (prop) => {
  const { index, title, author } = prop.book;

  return (
    <li key={index}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </li>
  );
};