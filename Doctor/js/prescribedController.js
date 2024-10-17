

myApp.controller("prescribedAppointmentsController", ["$http", "$location","baseURL",
    function ($http, $location,baseURL) {
   const myThis = this
    service.statusWiseData("GET","Prescribed").then((response=>{
        console.log(response)
        myThis.appointments = response.data
    }))
    


    



}])