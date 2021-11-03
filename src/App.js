import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { baseUrl, appId } from './redux/api';
import { Navlinks, BookList, Categories } from './components';
// import { getBooks } from './redux/books/books';

const App = () => {
  // const dispatch = useDispatch();
  const booksDataFromStore = useSelector((state) => state.booksReducer);

  useEffect(() => { }, []);

  return (
    <>
      <div>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
          rel="stylesheet"/>
      </div>
      <main>
        <Router>
          <div>
            <Navlinks />
            <br />
            <Switch>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/">
                <BookList booksArray={booksDataFromStore} />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </>
  );
};

export default App;
