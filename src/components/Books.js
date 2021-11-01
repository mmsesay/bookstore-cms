import { AddBookForm } from './AddBookForm';

export const Books = () => (
  <div>
    <ul>
      <li>
        <p>The Hunder Games</p>
        <button type="button">Remove</button>
      </li>
      <li>
        <p>Dune</p>
        <button type="button">Remove</button>
      </li>
      <li>
        <p>Capital in the Twenty-First Century</p>
        <button type="button">Remove</button>
      </li>
    </ul>
    <br />
    <AddBookForm />
  </div>
);