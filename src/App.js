import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navlinks, BookList, Categories } from './components';

const App = () => {
  const data = useSelector((state) => state.booksReducer);

  return (
    <>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
          rel="stylesheet"/>
      </head>
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
                <BookList booksArray={data} />
              </Route>
            </Switch>
          </div>
        </Router>
      </main>
    </>
  );
};

export default App;
