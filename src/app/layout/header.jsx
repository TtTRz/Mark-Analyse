import '../../styles/common/layout/base.scss'

import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd'
import { Button } from 'antd';


const Header = ({ title = null, isLogined = null, handleRegisterClick}) => {
  return (
    <div className="contest_header">
      <div className="header_title">
        {title}
      </div>
      <div className="header_user">
        <Avatar src={require('../../static/img/avatar.jpg')}/>
      </div>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  isLogined: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleRegisterClick: PropTypes.func.isRequired,
};
export default Header;
