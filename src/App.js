import React from 'react';
import { ThemeProvider } from 'styled-components';

import MainLayout from './layouts/MainLayout';
import Feed from './pages/Feed';

import { lightTheme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <MainLayout>
      <Feed />
    </MainLayout>
  </ThemeProvider>
);

export default App;
