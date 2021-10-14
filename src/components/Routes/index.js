import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Accueil from '../../pages/Accueil'
import Annonces from '../../pages/Annonces';
import Connect from '../../pages/Connect'

const index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/annonces" exact component={Annonces} />
        <Route path="/login-register" exact component={Connect} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;