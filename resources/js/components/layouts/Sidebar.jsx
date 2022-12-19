import React from 'react'
import SidbarLink from './SidbarLink'
const Sidebar = () => {

    const toggleMenu = () => {
        document.getElementById('sidebar').style.left = '-100%'
        document.getElementById('overlay').style.display = 'none'
    }

    return (
        <div className='sidebar-container'>
            <div className='sidebar' id='sidebar'>
                <div className='sidebar-content'>
                    <i className='fa fa-times sidebar-toggle-close' onClick={toggleMenu}></i>
                    <div className='sidebar-header'>
                        <h2>Logo</h2>
                    </div>
                    <hr />
                    <div className='sidebar-menu'>

                        <SidbarLink />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
