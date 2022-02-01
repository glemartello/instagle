import React from 'react';
import faker from '@faker-js/faker';

import Post from '../../../components/Post';

import { Container } from './styles';

const data = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.internet.userName().toLowerCase(),
  photo: 'https://via.placeholder.com/614/EBEBEB/000000',
  userPhoto: 'https://via.placeholder.com/40/EBEBEB/000000',
}));

const Posts = () => (
  <Container>
    {data.map(post => (
      <Post post={post} />
    ))}
  </Container>
);

export default Posts;
