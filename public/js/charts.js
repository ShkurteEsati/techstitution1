$(document).ready(function(){

Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Te dhenat per vonesen ne kolona per vitin 2017'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Janar',
            y: 0.9
        }, {
            name: 'Shkurt',
            y: 0.8
        }, {
            name: 'Mars',
            y: 0.2
        }, {
            name: 'Prill',
            y: 0.56
        }, {
            name: 'Maj',
            y: 0.91
        }, {
            name: 'Qershor',
            y: 0.99
        }, {
            name: 'Korrik',
            y: 43.25
         }, {
            name: 'Gusht',
            y: 45.36
         }, {
            name: 'Shtator',
            y: 0.1
         }, {
            name: 'Tetor',
            y: 0.1
         }, {
            name: 'Nentor',
            y: 0.1
         }, {
            name: 'Dhjetor',
            y: 0.2
        }]
    }]
  
});
});