
import '../../styles/common/layout/base.scss'

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Sider extends React.PureComponent {
  static propTypes = {

  };
  static defaultProps = {
  };

  state = {

  };
  render() {
    return (
      <React.Fragment>
        <Menu theme="dark" mode="inline" >
          {this.props.children}
        </Menu>

      </React.Fragment>
    );
  }
}

export default Sider;

