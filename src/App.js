import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import { connect } from 'react-redux';
import TableBody from './components/tableBody';
import CharacterDetails from './components/characterDetails';
import Home from './components/home';
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/details/:id">
            <CharacterDetails />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default connect()(App);
