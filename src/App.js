import React from 'react'
import { Root } from 'react-static';

import { Contact, Download, Features, Footer, Header, Nav } from './components';
// import './app.css';

function App() {
  return (
    <Root>
      <Nav />
      <Header />
      <Download />
      <Features />
      <Contact />
      <Footer />
    </Root>
  )
}

export default App
