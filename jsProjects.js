

var options = {
	colors: ['#703FFB', '#217BF4', '#6AD5FF'],
	series: [74, 62, 50],
	chart: {
	height: 350,
	type: 'radialBar',
  },
  title: {
	text: 'Main directions',
	align: 'center',
	margin: 10,
	offsetX: 0,
	offsetY: 0,
	floating: true,
	style: {
	  fontSize:  '13px',
	  fontWeight:  '400',
	  fontFamily:  undefined,
	  color:  '#7C89A9'
	},
},
legend: {
	show: true,
	showForSingleSeries: false,
	showForNullSeries: true,
	showForZeroSeries: true,
	position: 'bottom',
	horizontalAlign: 'center', 
	floating: true,
	fontSize: '14px',
	fontFamily: 'Helvetica, Arial',
	fontWeight: 400,
	formatter: undefined,
	inverseOrder: false,
	width: undefined,
	height: undefined,
	tooltipHoverFormatter: undefined,
	customLegendItems: [],
	offsetX: 0,
	offsetY: 0,
	labels: {
		colors: undefined,
		useSeriesColors: false
	},
	markers: {
		width: 8,
		height: 8,
		strokeWidth: 0,
		strokeColor: '#fff',
		fillColors: undefined,
		radius: 8,
		customHTML: undefined,
		onClick: undefined,
		offsetX: 0,
		offsetY: 0
	},
	itemMargin: {
		horizontal: 25,
		vertical: 0
	},
	onItemClick: {
		toggleDataSeries: true
	},
	onItemHover: {
		highlightDataSeries: true
	},
},
  subtitle: {
	text: '300+',
	align: 'left',
	marginTop: '200px',
	offsetX: 100,
	offsetY: 150,
	floating: false,
	style: {
	  fontSize:  '14px',
	  fontWeight:  '600',
	  fontFamily:  undefined,
	  lineHeight: '17px',
	  color:  '#2068D9'
	},
},
  plotOptions: {
	radialBar: {
	  dataLabels: {
		markers: {
			colors: ['#703FFB', '#217BF4', '#6AD5FF']
		  },
		name: {
		  fontSize: '22px',
		},
		value: {
		  fontSize: '16px',
		},
		total: {
		  show: false,
		  label: '',
		//   formatter: function (w) {
		// 	// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
		// 	return 249
		//   }
		}
	  }
	}
  },
  labels: ['Medecine', 'Foodtech', 'Fintech',],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
//   var chart = new ApexCharts(el, options);

let menuIcon = document.querySelector(".navbar-toggler-icon");
menuIcon.style.backgroundImage = 'url("./assets/svg/menu-icon.svg")';
menuIcon.addEventListener("click", function () {
  if (this.style.backgroundImage === 'url("./assets/svg/menu-icon.svg")') {
    this.style.backgroundImage = "url(./assets/svg/Close.svg)";
  } else if (this.style.backgroundImage !== "url(./assets/svg/menu-icon.svg)") {
    this.style.backgroundImage = "url(./assets/svg/menu-icon.svg)";
  }
});