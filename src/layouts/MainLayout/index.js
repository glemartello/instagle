import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar';

import { Container, Header, Content } from './styles';

const MainLayout = ({ children }) => (
  <Container>
    <Header>
      <Navbar />
    </Header>
    <Content>{children}</Content>
  </Container>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
