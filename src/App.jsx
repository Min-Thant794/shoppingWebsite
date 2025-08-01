import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Deals from './Deals'
import Product from './Product'
import New_Arrival from './New_Arrival'
import NotFound from './NotFound'
import ForgotPsw from './ForgotPsw'
import SignUp from './SignUp'
import Support_Center from './Support_Center'
import Invoicing from './Invoicing'
import Careers from './Careers'
import Contract from './Contract'
import Blog from './Blog'
import FAQs from './FAQs'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/deals' element={<Deals />}/>
        <Route path='/new-arrival' element={<New_Arrival />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='forgot-psw' element={<ForgotPsw />}/>
        <Route path='support-center' element={<Support_Center />}/>
        <Route path='invoicing' element={<Invoicing />}/>
        <Route path='careers' element={<Careers />}/>
        <Route path='contract' element={<Contract />}/>
        <Route path='blog' element={<Blog />}/>
        <Route path='faqs' element={<FAQs />}/>
        
        
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App