import {
  Link,
} from 'react-router-dom';
import person from '../images/person.png';

export const Navlinks = () => (
  <nav className="panel-bg flex items-center justify-between border rounded-tl-md rounded-tr-md">
    <div className="flex items-center">
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
    </div>
    <div className="border rounded-full p-4">
      <img src={person} alt="man-icon" className="w-6 h-6 rounded" />
    </div>
  </nav>
);