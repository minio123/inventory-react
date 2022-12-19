import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ItemsChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
            name: 'Item 1',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
            name: 'Item 2',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
            name: 'Item 3',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 600
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
                        endingShape: 'rounded',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                yaxis: {
                    title: {
                        text: 'Quantity'
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                        return val + " pcs"
                        }
                    }
                }
            },
        };
    }



    render() {
        return (
            <>
                <h3 className="text-center mb-3">Items Inventory Chart</h3>
                <ReactApexChart className="items-chart" options={this.state.options} series={this.state.series} height={this.state.options.chart.height} type="bar"/>
            </>
        );
    }
}

export default ItemsChart
