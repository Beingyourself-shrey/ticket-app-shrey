
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Slots from './Components/Slots';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" >
          <Redirect to='/home' />
        </Route>
        <Route exact path="/slots" >
          <Slots></Slots>
        </Route>
        <Route exact path="/*" >
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
