import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Books, Categories } from './components';

function App() {
  return (
    <div className="App">
      <head>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        rel="stylesheet"/>
    </head>
    <main>
      <Router>
        <div>
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
          <br />
          
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Books />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
    </div>
  );
}

export default App;
