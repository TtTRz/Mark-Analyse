import React from 'react';
import App from './App.jsx'
import { BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {LPHHRoutes} from "./app/routes";

class AppIndex extends React.Component{
  IndexRoute = () => {
    return <Redirect to={LPHHRoutes.LPHH_ROOT} />;
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={LPHHRoutes.LPHH_ROOT} component={App}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppIndex;