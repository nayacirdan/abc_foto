import React from 'react';
import Header from './components/Header/Header';
import './App.scss';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
         Fantastic Five Project Started!!!!
        </p>
        The main stucture of any page would be:
        <ul>
          <li>Main nav</li>
          <li>Header</li>
          <li>Products nav</li>
          <li>Main Container</li>
          <li>Footer</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
