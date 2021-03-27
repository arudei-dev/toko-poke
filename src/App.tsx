import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RootApolloProvider } from 'core/services/apollo-init'
import { RootStateProvider } from 'core/rootContext'
import { MyPokemonLists } from './pages/MyPokemonLists';
import { PokemonDetails } from './pages/PokemonDetails';
import { PokemonLists } from './pages/PokemonLists';
import './App.scss';
import { AppFrame } from 'views/AppFrame';


function App() {
  return (
    <div className="App">
      <RootApolloProvider>
        <RootStateProvider>
          <AppFrame>
            <Router>
              <Switch>
                <Route exact path="/"                          component={PokemonLists}/>
                <Route exact path="/pokemon/:pokeName/details" component={PokemonDetails}/>
                <Route exact path="/profile/poke-lists"        component={MyPokemonLists}/>
              </Switch>
            </Router>
          </AppFrame>
        </RootStateProvider>
      </RootApolloProvider>
    </div>
  );
}

export default App;
