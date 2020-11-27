import React from 'react';
import Home from './pages/Home';
import Climas from './pages/Climas';
import Mapas from './pages/Mapas';
import Contaminacion from './pages/Contaminacion';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {


  return (
    <>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Climas" component={Climas} />
        <Route exact path="/Mapas" component={Mapas} />
        <Route exact path="/Contaminacion" component={Contaminacion} />
        </Switch>
    </Router>
   
    </>
  );
}

export default App;
