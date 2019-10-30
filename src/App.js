import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import { Container } from './styles';

function App() {
  return (
    <>
    <Container>
    <Header></Header>
    </Container>
    <GlobalStyle/>
    </>
  );
}

export default App;
