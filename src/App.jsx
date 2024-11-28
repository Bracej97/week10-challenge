import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BasketProvider } from './contexts/BasketContext';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Product from './pages/Product';
import Header from './components/Header';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';




function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  )
}

export default App
