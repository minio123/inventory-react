import React from 'react'
const Header = () => {
    const toggleMenu = () =>{
        document.getElementById('sidebar').style.left = '0%'
        document.getElementById('overlay').style.display = 'block'
    }
    return (
        <div className='row'>
            <div className='col-12'>
                <header className='header container-fluid'>
                    <div className='header-container'>
                        <i className='fa fa-align-justify sidebar-toggle-show' onClick={toggleMenu}></i>
                        <h5 className='module-name'>Module Name</h5>
                        <i className='fa fa-cog account-settings'></i>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header
