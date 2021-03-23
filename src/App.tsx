import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RootStateProvider } from 'core/rootContext'
import { MyPokemonLists } from './pages/MyPokemonLists';
import { PokemonDetails } from './pages/PokemonDetails';
import { PokemonLists } from './pages/PokemonLists';
import './App.scss';


function App() {
  return (
    <div className="App">
      <RootStateProvider>
        <Router>
          <Switch>
            <Route path="/" exact              component={PokemonLists}/>
            <Route path="/pokemon/:id/details" component={PokemonDetails}/>
            <Route path="/profile/poke-lists"  component={MyPokemonLists}/>
          </Switch>
        </Router>
      </RootStateProvider>
    </div>
  );
}

export default App;
