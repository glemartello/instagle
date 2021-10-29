import React from 'react';
import faker from 'faker';

import { Container, StoriesContainer } from './styles';
import Story from '../../../components/Story';

const data = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.internet.userName().toLowerCase(),
  photo: faker.image.avatar(),
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
