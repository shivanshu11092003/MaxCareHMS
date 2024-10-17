

myApp.controller("drconfirmAppointmentsController", ["$http", "$location", "baseURL",
    function ($http, $location, baseURL) {
        const myThis = this

        service.statusWiseData("GET", "Confirmed").then((response => {
            console.log(response)
            myThis.appointments = response.data
        }))









    }])