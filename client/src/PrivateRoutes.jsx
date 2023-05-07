import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { authContext } from './App'

const PrivateRoutes = ({children, token}) => {
/*   const { token, setToken } = useContext(authContext)
 */  let alwaysAllowed = 'come in'
  
  return token ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoutes