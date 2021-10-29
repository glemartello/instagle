import React from 'react';

import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';

import { ContentContainer, MetaContainer } from './styles';

const Feed = () => (
  <>
    <ContentContainer>
      {/* Stories */}
      <Stories />
      {/* Posts */}
      <Posts />
    </ContentContainer>
    <MetaContainer>
      {/* MiniProfile */}
      <MiniProfile />
      {/* Suggestions */}
      <Suggestions />
    </MetaContainer>
  </>
);

export default Feed;
