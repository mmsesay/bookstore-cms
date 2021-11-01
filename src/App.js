import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Navlinks, Books, Categories } from './components';
import { data } from './utils/sample_data';

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
          <Navlinks />
          <br />
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Books booksArray={data} />
            </Route>
          </Switch>
        </div>
      </Router>
    </main>
    </div>
  );
}

export default App;
