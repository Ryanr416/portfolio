import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import {
  Routes,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from './shared/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
