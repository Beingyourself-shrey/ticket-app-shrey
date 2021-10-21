
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import { lazy, Suspense } from 'react'
const Slots = lazy(() => import('./Components/Slots'))
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>

  );
}

export default App;
