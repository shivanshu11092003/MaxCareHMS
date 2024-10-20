myApp.controller("receptionistAppointmentController", ["service",
   function (service) {

    const myThis = this

    myThis.loader = true




  service.getService("GET", "analytics").then((response) => {
    myThis.loader = false


     //Bar
     google.charts.load('current', { 'packages': ['corechart'] });
     google.charts.setOnLoadCallback(drawVisualization);
 
     function drawVisualization() {
       var barArray = []
 
 
       var data = google.visualization.arrayToDataTable(response);
 
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
     console.log(response[0][1], response[1][1])
     var pieArray = [['Handler', 'RequestHandle']]
 
     for (var i = 1; i < 6; i++) {
       var array = [response[0][i], response[1][i]]
       pieArray.push(array);
     }
     console.log(pieArray)
 
     google.charts.load("current", { packages: ["corechart"] });
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable(pieArray);
 
       var options = {
         title: "Today's Analytics ",
         legend: '',
         pieSliceText: 'label',
         slices: {
           4: { offset: 0.2 },
         },
       };
 
       var chart = new google.visualization.PieChart(document.getElementById('piechart'));
       chart.draw(data, options);
     }

    
  })



}])

