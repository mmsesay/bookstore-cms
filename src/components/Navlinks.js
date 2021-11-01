import {
  Link,
} from 'react-router-dom';

export const Navlinks = () => (
  <nav>
    <a>Bookstore cms</a>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);