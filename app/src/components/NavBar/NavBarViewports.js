import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Image, Menu, Sidebar } from 'semantic-ui-react';

const menu = (
  <>
    <Link to="/" className="item">
      Home
    </Link>
    <Link to="/about" className="item">
      About
    </Link>
    <Link to="/blog" className="item">
      Blog
    </Link>
  </>
);

export const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      {menu}
    </Sidebar>

    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh' }}
    >
      <Menu fixed="top" inverted>
        <Link to="/" className="item">
          <Image
            size="mini"
            src="https://i2.wp.com/enlightme.ca/wp-content/uploads/2016/08/enlight-logo-full.png"
          />
        </Link>

        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" style={{ padding: '0px', margin: '0px' }} />
        </Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export const NavBarDesktop = () => (
  <Menu fixed="top" inverted>
    <Link to="/" className="item">
      <Image
        size="mini"
        src="https://i2.wp.com/enlightme.ca/wp-content/uploads/2016/08/enlight-logo-full.png"
      />
    </Link>
    <Menu.Menu position="right">{menu}</Menu.Menu>
  </Menu>
);

export const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: '5em' }}>{children}</Container>
);
