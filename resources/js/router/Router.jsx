import React from 'react'
import { Routes, Route } from 'react-router-dom'

import DashboardIndex from '../components/dashboard/Dashboard'
import UsersIndex from '../components/users/Index'
import NotFound from '../components/NotFound'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <DashboardIndex /> }/>
            <Route path='/users' element={ <UsersIndex /> }/>
            <Route path='/*' element={ <NotFound /> }/>
        </Routes>
    </div>
  )
}

export default Router
