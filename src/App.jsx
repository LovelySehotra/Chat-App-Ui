import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'
import { useDispatch, useSelector } from 'react-redux'


const userData = useSelector((state) => state?.auth?.data)

const PrivateRoute = (childern) => {
  const isAuthenticated = !!userData;
  return isAuthenticated ? childern : <Navigate to="/chat" />
}
export default function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      const getUserData = async()=>{
        try {
          const response = await dispatch(getUserProfile)
          console.log(response);
        } catch (error) {
          console.log(error)
        }
      }
      if(!userData) {
        getUserData()
      }else{
        setLoading(false)
      }
  },[])
  if(!loading){
    return <div>Loading ...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        } />
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path='/*' element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  )
}
