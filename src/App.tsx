import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import Auth from './components/Auth';
import { BrowserRouter } from 'react-router-dom';
import SiteContent from './layout/SiteContent';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Auth>
          <SiteContent></SiteContent>
        </Auth>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
