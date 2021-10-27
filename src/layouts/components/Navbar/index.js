import React from 'react';

import Searchbar from '../Searchbar';

import { Container, Logo } from './styles';

import images from '../../../assets/images';
import MenuIcons from '../MenuIcons';

const Navbar = () => (
  <Container>
    {/* Logo */}
    <Logo src={images.logo} alt="instagram" />
    {/* Search */}
    <Searchbar />
    {/* Icons */}
    <MenuIcons />
  </Container>
);

export default Navbar;
