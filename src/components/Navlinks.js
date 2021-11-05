import {
  Link,
} from 'react-router-dom';

export const Navlinks = () => (
  <nav className="panel-bg flex items-center border">
    <a className="Bookstore-CMS-Title">Bookstore cms</a>
    <ul className="flex space-x-5 font-normal font-thiner text-xl">
      <li className="text-gray-600">
        <Link to="/" className="">BOOKS</Link>
      </li>
      <li className="text-gray-400">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);