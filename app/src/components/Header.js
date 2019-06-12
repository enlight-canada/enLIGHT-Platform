import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        ENLIGHT
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/blog" className="item">
          Blog
        </Link>
      </div>
    </div>
  );
};
