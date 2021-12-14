import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from '../views/Landing';
import About from '../views/About';
import Users from '../views/Users';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Landing user={user} />} />
        <Route exact path="/about" component={() => <About user={user} />} />
        <Route exact path="/users" component={() => <Users user={user} />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
};
export default Routes;
