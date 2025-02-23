import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { useEffect } from 'react';
import Homepage from './Homepage/Homepage'
import { Loginpage } from './Loginpage/Loginpage';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Signuppage } from './Signuppage/Signuppage.jsx';
import { CartProvider } from './components/ContextReducer.jsx';
import MyOrder from './MyOrder/MyOrder.jsx';
import SessionTimeout from './components/SessionTimeout.jsx';

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
    <SessionTimeout/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Loginpage' element={<Loginpage/>} />
        <Route path='/Signuppage' element={<Signuppage/>} />
        <Route path='/MyOrder' element={<MyOrder/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App
