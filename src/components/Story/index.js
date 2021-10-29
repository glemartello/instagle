import React from 'react';
import PropTypes from 'prop-types';

import { Container, Photo, UserName } from './styles';

const Story = ({ name, photo }) => (
  <Container>
    <Photo src={photo} alt={name} />
    <UserName>{name}</UserName>
  </Container>
);

Story.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Story;
