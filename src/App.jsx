import React from 'react';
import { Button, Menu, Icon} from 'antd';
import { get } from 'lodash-es';
import { BrowserRouter, Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {AnalyseRoutes, LPHHRoutes} from "./app/routes";
import Sider from './app/layout/sider.jsx';
import Header from './app/layout/header.jsx';
import BaseLayout from './app/layout/base.jsx';
import { buildPath } from "./common/utils/location_helper";
import AnalyseApp from "./app/Analyse/index.jsx";

const SubMenu = Menu.SubMenu;

@withRouter
class App extends React.PureComponent{
  PATH = {
    term_list: AnalyseRoutes.TERM_LIST,
    term: AnalyseRoutes.TERM,
  };
  handleMenuClick = (keyName, termId: null) => () => {
    const { history } = this.props;
    if(keyName === 'term') {
      history.push(buildPath(
        this.PATH[keyName],
        {termId: termId}
      ))
    } else {
      history.push(buildPath(
        this.PATH[keyName]
      ))
    }
  }

  renderHeader = () => {
    const { match } = this.props;
    console.log(match)
    if(get(match.params, 'termId', null)) {
      return <Header title="大二下学期"/>
    }
    return <Header title="成绩分析"/>
  }
  renderSider = () => {
    return (
      <Sider>
        <SubMenu title={<span><Icon type="dashboard"/>成绩分析</span>}>
          <Menu.Item onClick={this.handleMenuClick('term_list')}>
            全部
          </Menu.Item>
          <Menu.Item onClick={this.handleMenuClick('term', 3)}>
            大二上
          </Menu.Item>
        </SubMenu>
        <Menu.Item >
          <Icon type="user" />
          用户
        </Menu.Item>
      </Sider>
    );
  };
  render() {
    return (
        <BaseLayout
          header={this.renderHeader()}
          sider={this.renderSider()}
        >
          <Switch>
            <Route path={LPHHRoutes.ANALYSE_ROOT} component={AnalyseApp}/>
          </Switch>
        </BaseLayout>
    )
  }
}

export default App;