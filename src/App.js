import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
