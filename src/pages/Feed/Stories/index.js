import React from 'react';
import faker from '@faker-js/faker';

import { Container, StoriesContainer } from './styles';
import Story from '../../../components/Story';

const data = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.internet.userName().toLowerCase(),
  photo: 'https://via.placeholder.com/50/EBEBEB/000000',
}));

const Stories = () => (
  <Container>
    <StoriesContainer>
      {data.map(story => (
        <Story key={story.id} name={story.name} photo={story.photo} />
      ))}
    </StoriesContainer>
  </Container>
);

export default Stories;
