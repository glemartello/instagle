import React from 'react';
import Navbar from '../components/Navbar';

import {
  Container,
  Header,
  Content,
  ContentContainer,
  MetaContainer,
} from './styles';

const MainLayout = () => (
  <Container>
    <Header>
      <Navbar />
    </Header>
    <Content>
      <ContentContainer>
        {/* Stories */}
        <div>Stories</div>
        {/* Posts */}
        <div>Posts</div>
      </ContentContainer>
      <MetaContainer>
        {/* MiniProfile */}
        <div>MiniProfile</div>
        {/* Suggestions */}
        <div>Suggestions</div>
      </MetaContainer>
    </Content>
  </Container>
);

export default MainLayout;
