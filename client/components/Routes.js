import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

// Imported components:
import Main from './Main';

const Routes = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </main>
    </div>
  );
};

export default Routes;
