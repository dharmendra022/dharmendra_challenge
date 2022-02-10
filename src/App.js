import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Header from './Header';
import Fooditem from './Fooditem';
import Login from './Login';
import Foodapp from './Foodapp';

const App = () => {
  return (
   <>
     <Routes>
       <Route path='/' element={<Header/>} />
       <Route path='/fooditem' element={<Fooditem/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/foodapp' element={<Foodapp/>} />
     </Routes>
   </>
  )
}

export default App