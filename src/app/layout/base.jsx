import '../../styles/common/layout/base.scss'

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

const { Header, Content, Footer, Sider } = Layout;
class BaseLayout extends React.PureComponent {

  static propTypes = {
    header: PropTypes.shape(),
    sider: PropTypes.shape(),
  };

  static defaultProps = {
    header: null,
    sider: null,
  }

  render() {
    return (
      <React.Fragment>
       <Layout className="base-layout" style={{ height: '100vh' }}>
          <Sider
            breakpoint="lg"
            collapsedWidth="180"
            onBreakpoint={(broken) => { console.log(broken); }}
            onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          >
            <span style={{ color: 'pink' ,fontSize: '30px', margin: '0 auto' }}>LittlePigHoHo</span>
            {this.props.sider}
          </Sider>
          <Layout className="base-layout">
            <Header style={{ background: '#fff', padding: 0 }} >
              {this.props.header}
            </Header>
            <Content className="contest_content ant-layout-content" id="base-layout-content" >
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              LittlePigHoHo
            </Footer>
          </Layout>
        </Layout>

      </React.Fragment>
    )
  }
}

export default BaseLayout;