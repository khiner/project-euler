import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom';
import './App.css';
import Problem from './components/Problem';

const PROBLEM_NUMBERS = [1];

function Problems() {
  const match = useRouteMatch();

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav
        style={{
          position: 'fixed',
          boxSizing: 'border-box',
          padding: 10,
          width: 150,
          overflowY: 'scroll',
          top: 0,
          bottom: 0,
          borderRight: '1px solid #597ef7',
          background: '#d6e4ff',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>Problems</div>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {PROBLEM_NUMBERS.map(problemNumber => (
            <li key={problemNumber}>
              <Link to={`/problems/${problemNumber}`}>Problem {problemNumber}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ position: 'fixed', left: 150, top: 0, bottom: 0, overflowY: 'scroll', padding: 10 }}>
        <Switch>
          <Route path={`${match.path}/:problemNumber`}>
            <Problem />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/problems" />
          </Route>
          <Route path="/problems">
            <Problems />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
