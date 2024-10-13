myApp.controller("receptionistAppointmentController", ["$http", "$location", function ($http, $location) {


    //Bar
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      
        var data = google.visualization.arrayToDataTable([

            ['Date', 'Total Request', 'Accepted by Receptionist', 'Rejected by Receptionist', 'Accepted by doctor', 'Refunded'],
            ['10-10-24', 1000, 900, 100, 600, 300],
            ['11-10-24', 660, 460, 200, 260, 200],
            ['12-10-24', 960, 520, 400, 120, 400],
            ['13-10-24', 600, 500, 100, 150, 350]
        ]);

        var options = {
            title: 'Last 10 Days Requested Appoinments',
            vAxis: { title: 'Request' },
            hAxis: { title: 'Date' },
            seriesType: 'bars',
            series: { 4: { type: 'line' } }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    //pie
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Handler', 'RequestHandle'],
        ['Total Request ', 1200], 
        ['Accepted by Receptionist', 900],
         ['Rejected by Receptionist', 300],
        ['Accepted by doctor', 750],
         ['Refunded', 150]
      ]);

      var options = {
        title: "Today's Analytics " ,
        legend: '',
        pieSliceText: 'label',
        slices: {  4: {offset: 0.2},
        },
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }


}])

