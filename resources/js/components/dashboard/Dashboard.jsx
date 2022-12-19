import React from 'react'
import ItemsChart from './charts/ItemsChart'
import PurchaseOrderChart from './charts/PurchaseOrderChart'
const Dashboard = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-12 col-md-4 mb-4'>
                <div className='card-container'>
                    <div className='card-dashboard-content text-success'>
                        <i className='fa fa-dollar-sign card-dashboard-icon'></i>
                        <div className='card-dashboard-body'>
                            <p className='card-dashboard-amount'>
                                4,000.00
                            </p>
                            <p className='card-dashboard-title'>
                                Inventory value
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-4 mb-4'>
                <div className='card-container'>
                    <div className='card-dashboard-content text-warning'>
                        <i className='fa fa-exclamation-circle card-dashboard-icon'></i>
                        <div className='card-dashboard-body'>
                            <p className='card-dashboard-amount'>
                                5
                            </p>
                            <p className='card-dashboard-title'>
                                Items on critical level
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-4 mb-4'>
                <div className='card-container'>
                    <div className='card-dashboard-content text-danger'>
                        <i className='fa fa-times-circle card-dashboard-icon'></i>
                        <div className='card-dashboard-body'>
                            <p className='card-dashboard-amount'>
                                0
                            </p>
                            <p className='card-dashboard-title'>
                                Out of stock items
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='row'>
                <div className='col-12 col-lg-4 mb-4'>
                    <div className='card-container'>
                        <div className='card-po-content text-primary'>
                            <i className='fa fa-shipping-fast card-po-icon'></i>
                            <div className='card-po-body'>
                                <p className='card-po-amount'>
                                    0
                                </p>
                                <p className='card-po-title'>
                                    Total Purchase Order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 mb-4'>
                    <div className='card-container'>
                        <div className='card-po-content text-success'>
                            <i className='fa fa-shopping-basket card-po-icon'></i>
                            <div className='card-po-body'>
                                <p className='card-po-amount'>
                                    0
                                </p>
                                <p className='card-po-title'>
                                    Paid Purchase Order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 mb-4'>
                    <div className='card-container'>
                        <div className='card-po-content text-warning'>
                            <i className='fa fa-shopping-bag card-po-icon'></i>
                            <div className='card-po-body'>
                                <p className='card-po-amount'>
                                    0
                                </p>
                                <p className='card-po-title'>
                                    Unpaid Purchase Order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>

            <div className='col-12 mb-4'>
                <div className='card-container'>
                    <ItemsChart />
                </div>
            </div>
            {/* <div className='col-12 col-lg-4 mb-4'>
                <div className='card-container'>
                    <PurchaseOrderChart />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Dashboard
