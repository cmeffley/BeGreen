import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from '../views/Landing';
import Quiz from '../views/Quiz';
import IdeasView from '../views/Ideas/IdeasView';
import TreeActivity from '../views/TreeViews/TreeActivity';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Landing user={user} />} />
        <Route exact path="/quiz" component={() => <Quiz user={user} />} />
        <Route exact path="/ideas" component={() => <IdeasView user={user} />} />
        <Route exact path="/treeActivity" component={() => <TreeActivity user={user} />} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
};
export default Routes;
