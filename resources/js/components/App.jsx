import React from 'react'
import Router from '../router/Router'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Overlay from './layouts/Overlay'
const App = () => {

  return (
    <div className='wrapper'>
        <Sidebar />
        <Overlay />
        <div className='content-wrapper'>
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <div>
                        <Router />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
