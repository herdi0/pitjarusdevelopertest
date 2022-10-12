import React, { Component, useEffect } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function BarChart({byArea}) {
		let options = {
			title: {
				text: ""
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Apple",  y: 10  },
					{ label: "Orange", y: 15  },
					{ label: "Banana", y: 25  },
					{ label: "Mango",  y: 30  },
					{ label: "Grape",  y: 28  }
				]
			}
			]
		}
        useEffect(()=>{
            let data = []
           byArea.forEach(element => {
            data.push({label: element.area_name, y: element.nilai})
           }); 
           options.data[0].dataPoints = data
           var chart = this.chart;
           chart.render();
        },[byArea])
		return (
		<div>
			<CanvasJSChart options = {options}
				//onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}
export default BarChart