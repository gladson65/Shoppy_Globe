import Header from './Components/Header';
import Success from './Components/SuccessMsg';
import { Outlet } from 'react-router-dom';
import { Provider }from "react-redux";
import CartStore from './Utils/CartStore';
import { useContext } from 'react';
import msgContext from './Utils/msgContext';
import { useSelector } from 'react-redux';
import './App.css'

function App() {
  
  const data = useContext(msgContext)
   

  return (
    
    <>
      <Provider store={CartStore}>
        <Header />     
        <Success />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
