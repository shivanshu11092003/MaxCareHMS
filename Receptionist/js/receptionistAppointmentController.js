const baseURL = "10.21.96.74"
myApp.controller("receptionistAppointmentController", ["$http", "$location", function ($http, $location) {




      const getAppointmentData = {
        method: "GET",
        url: `https://${baseURL}:8000/maxcare_patient/analytics`,
        withCredentials:true


    }
    $http(getAppointmentData).then((response) => {
        
       //Bar
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {
      var barArray =[]
      console.log(response.data)
      
        var data = google.visualization.arrayToDataTable(response.data);

        var options = {
            title: 'Last 5 Days Requested Appoinments',
            vAxis: { title: 'Request' },
            hAxis: { title: 'Date' },
            seriesType: 'bars',
            series: { 4: { type: 'line' } }
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    //pie
    console.log(response.data[0][1],response.data[1][1])
    var pieArray =[['Handler', 'RequestHandle']]

    for(var i=1;i<6;i++){
      var array = [response.data[0][i],response.data[1][i]]
      pieArray.push(array);
    }
    console.log(pieArray)

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(pieArray);

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

    })
   

}])

