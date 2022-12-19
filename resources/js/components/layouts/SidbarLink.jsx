import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const SidbarLink = () => {
      //assigning location variable
      const location = useLocation();

      //destructuring pathname from location
      const { pathname } = location;

      //Javascript split method to get the name of the path in array
      const splitLocation = pathname.split("/");
    return (
        <div>
            <ul className='sidebar-links'>

                {/*MAIN*/}
                <p className="link-title">Main</p>
                <NavLink to='/' className='link'>
                    <li className={splitLocation[1] === "" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-chart-pie link-icon'></i> Dashboard
                            </label>
                        </div>
                    </li>
                </NavLink>

                {/*ITEMS*/}
                <p className="link-title mt-4">Items</p>
                {/* <NavLink to='/items' className='link'> */}
                    <li className={splitLocation[1] === "items" ? "link-label active" : "link-label"}>
                        <input type="checkbox" id='item-collapsed' hidden/>
                        <div className='menu-title'>
                            <label htmlFor='item-collapsed' className='link-container'>
                                <i className='fa fa-shopping-basket link-icon'></i>Items
                            </label>
                            <i className='fa fa-chevron-right link-icon caret-right'></i>
                        </div>
                        <ul className='submenu'>
                            <li className='submenu-link'>1</li>
                            <li className='submenu-link'>2</li>
                            <li className='submenu-link'>3</li>
                        </ul>
                    </li>
                {/* </NavLink> */}

                {/*REPORTS*/}
                <p className="link-title mt-4">Reports</p>
                <NavLink to='/critical-items-report' className='link'>
                    <li className={splitLocation[1] === "critical-items-report" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-exclamation link-icon'></i> Critical Items Report
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/inventory-report' className='link'>
                    <li className={splitLocation[1] === "inventory-report" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-boxes link-icon'></i> Inventory Report
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/transaction-report' className='link'>
                    <li className={splitLocation[1] === "transaction-report" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-clipboard-list link-icon'></i> Transaction Report
                            </label>
                        </div>
                    </li>
                </NavLink>

                {/*ACCOUNTING*/}
                <p className="link-title mt-4">Accounting</p>
                <NavLink to='/chart-of-accounts' className='link'>
                    <li className={splitLocation[1] === "chart-of-accounts" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-book link-icon'></i> Chart of Accounts
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/transactions' className='link'>
                    <li className={splitLocation[1] === "transactions" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-clipboard-check link-icon'></i> Transactions
                            </label>
                        </div>
                    </li>
                </NavLink>

                {/*PEOPLE*/}
                {/* <p className="link-title mt-4">People</p> */}

                {/* <NavLink to='/customers' className='link'>
                    <li className={splitLocation[1] === "customers" ? "link-label active" : "link-label"}>
                        <i className='fa fa-users link-icon'></i> Customer
                    </li>
                </NavLink> */}

                {/*GENERAL SETTINGS*/}
                <p className="link-title mt-4">General Settings</p>
                <NavLink to='/bank-accounts' className='link'>
                    <li className={splitLocation[1] === "bank-accounts" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-piggy-bank link-icon'></i> Bank Accounts
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/category' className='link'>
                    <li className={splitLocation[1] === "category" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-list link-icon'></i> Item Category
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/suppliers' className='link'>
                    <li className={splitLocation[1] === "suppliers" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-truck link-icon'></i> Suppliers
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/system-logs' className='link'>
                    <li className={splitLocation[1] === "system-logs" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-address-book link-icon'></i> System Logs
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/users' className='link'>
                    <li className={splitLocation[1] === "users" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-user-cog link-icon'></i> Users
                            </label>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/warehouse' className='link'>
                    <li className={splitLocation[1] === "warehouse" ? "link-label active" : "link-label"}>
                        <div className='menu-title'>
                            <label className='link-container'>
                                <i className='fa fa-warehouse link-icon'></i> Warehouse
                            </label>
                        </div>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default SidbarLink
