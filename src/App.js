import Main from './component/Main';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <React.Fragment>
      <Switch>

        <Route>
          <Home path='/' exact/>  
        </Route>

        <Route>
          <About path='/about' />
        </Route>

        <Route>
          <Blog path='/blog'/>
        </Route>

        <Route>
          <Carrers path='/carrer'  />
        </Route>

        <Route>
          <Collaboration path='/collab' />
        </Route>
        <Route>
          <Hob path='/hob'/>  
        </Route>
        <Route>
          <Press path='press'/>
        </Route>
        <Route>
          <Shop path='Shop'/>
        </Route>

      </Switch>
    </React.Fragment>
  );
}

export default App;