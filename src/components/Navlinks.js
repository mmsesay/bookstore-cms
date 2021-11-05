import {
  Link,
} from 'react-router-dom';

export const Navlinks = () => (
  <nav className="panel-bg flex items-center border rounded-tl-md rounded-tr-md">
    <a className="Bookstore-CMS-Title">Bookstore CMS</a>
    <ul className="flex space-x-5 font-montserrat text-lg">
      <li>
        <Link to="/">
          <span className="text-gray-900 blck">BOOKS</span>
        </Link>
      </li>
      <li className="text-gray-400">
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);