import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { RootApolloProvider } from 'context/Apollo/'
// import { RootStateProvider } from 'context/App'
import { RootProviders } from 'context'
import { MyPokemonLists } from './pages/MyPokemonLists';
import { PokemonDetails } from './pages/PokemonDetails';
import { PokemonLists } from './pages/PokemonLists';
import './App.scss';
import { AppFrame } from 'app/views/AppFrame';


function App() {
  return (
    <div className="App">
      <RootProviders>
        <AppFrame>
          <Router>
            <Switch>
              <Route exact path="/"                          component={PokemonLists}/>
              <Route exact path="/pokemon/:pokeName/details" component={PokemonDetails}/>
              <Route exact path="/profile/poke-lists"        component={MyPokemonLists}/>
            </Switch>
          </Router>
        </AppFrame>
      </RootProviders>
    </div>
  );
}

export default App;
