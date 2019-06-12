import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

export default () => {
  return (
    <Menu>
      <Link to="/" className="item">
        ENLIGHT
      </Link>
      <Menu.Menu position="right">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/blog" className="item">
          Blog
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
