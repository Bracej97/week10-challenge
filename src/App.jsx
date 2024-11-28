import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Product from './pages/Product';
import Header from './components/Header';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SearchProvider } from './contexts/SearchContext';




function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <SearchProvider>
      <BasketProvider>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/basket' element={<Basket />} />
            </Routes>
          </div>
        </Router>
      </BasketProvider>
      </SearchProvider>
    </ThemeProvider>
  )
}

export default App
