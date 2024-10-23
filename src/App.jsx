import Header from './Components/Header';
import Success from './Components/SuccessMsg';
import { Outlet } from 'react-router-dom';
import { Provider }from "react-redux";
import CartStore from './Utils/CartStore';
import { useContext } from 'react';
import Footer from './Components/Footer';

import './App.css'

function App() {
   


  return (
    
    <>
      <Provider store={CartStore}>
        <Header />     
        <Success />
        <Outlet />
        <Footer />
      </Provider>
    </>
  )
}

export default App
