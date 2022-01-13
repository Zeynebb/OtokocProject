import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Navi from './navi/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './pages/dashboard/Dashboard';
import CartSummary from './pages/cart/CartSummary.jsx'
import MainPage from './pages/mainPage/MainPage.jsx'
import { Route, Routes } from 'react-router';
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
