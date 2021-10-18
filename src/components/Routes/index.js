import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from '../../pages/About';
import Accueil from '../../pages/Accueil'
import Annonces from '../../pages/Annonces';
import Connect from '../../pages/Connect'
import Contact from '../../pages/Contact';
import Partenaires from '../../pages/Partenaires';

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/annonces" exact component={Annonces} />
        <Route path="/login-register" exact component={Connect} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/partenaires" exact component={Partenaires} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;