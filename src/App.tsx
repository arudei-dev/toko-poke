import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MyPokemonLists } from './pages/MyPokemonLists';
import { PokemonDetails } from './pages/PokemonDetails';
import { PokemonLists } from './pages/PokemonLists';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact             component={PokemonLists}/>
          <Route path="/some-ids/details"   component={PokemonDetails}/>
          <Route path="/profile/poke-lists" component={MyPokemonLists}/>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
