import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { authContext } from './App'

const PrivateRoutes = ({children, token}) => {
  let alwaysAllowed = 'come in'
  return alwaysAllowed ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoutes