import React from 'react';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Feature, Footer, Hero, Products } from './components';
import { GlobalStyle } from './globalStyles';
import { productData, productData2 } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' products={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' products={productData2} />
      <Footer />
    </Router>
  );
}

export default App;
