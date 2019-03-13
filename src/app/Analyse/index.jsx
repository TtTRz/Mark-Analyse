import React from 'react';
import {AnalyseRoutes} from "../routes";
import TermListView from "./term_list_view.jsx";
import {Switch, Route } from "react-router-dom";
import TermView from "./term_view.jsx";


const AnalyseApp = () => (
    <Switch>
      <Route path={AnalyseRoutes.TERM} component={TermView} />

      <Route path={AnalyseRoutes.TERM_LIST} component={TermListView}/>
    </Switch>
);
export default AnalyseApp;