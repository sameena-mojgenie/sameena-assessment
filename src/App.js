import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import { connect } from 'react-redux';
import TableBody from './components/tableBody';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <TableBody />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default connect()(App);
