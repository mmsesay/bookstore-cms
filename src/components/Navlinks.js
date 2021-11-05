import {
  Link,
} from 'react-router-dom';

export const Navlinks = () => (
  <nav className="panel-bg flex">
    <a className="Bookstore-CMS-Title">Bookstore cms</a>
    <ul className="flex">
      <li className="BOOKS">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="CATEGORIES">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);