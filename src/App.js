import React from 'react';
// import './App.css';
import routes from './routes';
import {HashRouter, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <header className="App-header">
          <h1>Redux Review</h1>
          <Link to='/'><button>Home</button></Link>
          <Link to='/addShow'><button>Add Show</button></Link>
        </header>
        {routes}
      </div>
      </HashRouter>
    );
  }
}

export default App;
