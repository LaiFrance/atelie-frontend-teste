// App.js
import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage/index'
import LoginPage from './pages/LoginPage/index'
import './asserts/Lato/Lato-Regular.ttf'


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );

}

export default App;