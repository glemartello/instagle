/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Left,
  Avatar,
  UserInfo,
  UserName,
  Location,
  Right,
  Options,
  OptionIcon,
  Image,
} from './styles';

function Post({ post }) {
  return (
    <Container>
      <Header>
        <Left>
          <Avatar src={post.userPhoto} />
          <UserInfo>
            <UserName>UserName</UserName>
            <Location>Location</Location>
          </UserInfo>
        </Left>
        <Right>
          <Options>
            <OptionIcon />
          </Options>
        </Right>
      </Header>
      <Image src={post.photo} />
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    userPhoto: PropTypes.string,
  }).isRequired,
};

export default Post;
