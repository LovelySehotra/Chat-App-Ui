import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat/Main.jsx'
import Profile from './pages/profile'
// import { useDispatch, useSelector } from 'react-redux'


export default function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={
         
            <Chat />
          
        } />
        <Route path='/profile' element={
                   <Profile />          
        } />
        <Route path='/*' element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  )
}
