import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { RootApolloProvider } from 'context/Apollo/'
// import { AppStateProvider } from 'context/App'
import { RootProviders } from 'context'
import { MyPokemonLists } from './pages/MyPokemonLists';
import { PokemonDetails } from './pages/PokemonDetails';
import { PokemonLists } from './pages/PokemonLists';
import './App.scss';
import { AppFrame } from 'app/views/AppFrame';
import { PageNotFound } from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <RootProviders>
        <Router>
          <AppFrame>
            <Switch>
              <Route exact path="/"                          component={PokemonLists}/>
              <Route exact path="/pokemon/:pokeName/details" component={PokemonDetails}/>
              <Route exact path="/profile/poke-lists"        component={MyPokemonLists}/>
              <Route       path="*"                          component={PageNotFound} />
            </Switch>
          </AppFrame>
        </Router>
      </RootProviders>
    </div>
  );
}

export default App;
