import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { socket } from './socket'
import Login from './Login'
import Home from './Home'
import Deals from './Deals'
import Product from './Product'
import New_Arrival from './New_Arrival'
import NotFound from './NotFound'
import SignUp from './SignUp'
import Settings from './Settings'
import { Bounce, ToastContainer, toast } from 'react-toastify'

const App = () => {

  // initialize socket connection ONCE in the root
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected: ", socket.id);
    });

    socket.on("connect_error", (error) => {
      console.error("Socket connection error: ", error.message);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/deals' element={<Deals />}/>
        <Route path='/new-arrival' element={<New_Arrival />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='/settings' element={<Settings/>}/>
        
        <Route path='/*' element={<NotFound />}/>
      </Routes>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
    </BrowserRouter>
  )
}

export default App