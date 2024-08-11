import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'
import { useDispatch, useSelector } from 'react-redux'



const PrivateRoute = ({childern}) => {
  // const userData = useSelector((state) => state?.auth)
  // const isAuthenticated = !!userData;
  // return isAuthenticated ? childern : <Navigate to="/chat" />
}
export default function App() {
  // const dispatch = useDispatch()
  // const userData = useSelector((state) => state?.auth?.data)
  // const [loading, setLoading] = useState(true)
  // useEffect(()=>{
  //     const getUserData = async()=>{
  //       try {
          // const response = await dispatch(getUserProfile)
          //  if(response.status ===200 response.payload.id)
          //  {
          //   set
          //  }
  //         console.log(response);
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     if(!userData) {
  //       getUserData()
  //       setLoading(false)
  //     }else{
  //     }
  // },[])
  // if(!loading){
  //   return <div>Loading ...</div>
  // }

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
{/* <Route path='/profile' element={
  <PrivateRoute>
    <Profile />
  </PrivateRoute>
} /> */}
{/* <PrivateRoute>
<Chat />
</PrivateRoute>
} /> */}