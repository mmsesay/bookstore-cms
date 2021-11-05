import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navlinks, BookList, Categories } from './components';
import { getBooks } from './redux/books/books';
import { getBooksFromApi } from './redux/api';

const App = () => {
  const dispatch = useDispatch();
  const booksDataFromStore = useSelector((state) => state.booksReducer);

  useEffect(() => { 
    getBooksFromApi().then((data) => {
      dispatch(getBooks(data));
    });
  }, []);

  return (
    <>
      <div>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
          rel="stylesheet"/>
      </div>
      <main className="Bookstore-CMS">
        <Router>
          <div>
            <Navlinks />
            <br />
            <Switch>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/">
                <BookList data={booksDataFromStore} />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </>
  );
};

export default App;
