import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
class PurchaseOrderChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (
            <div className="table-responsive">
                <h3 className="text-center mb-3">Items Inventory Chart</h3>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
            </div>
          );
    }
}

export default PurchaseOrderChart
