

myApp.controller("drconfirmAppointmentsController", ["service",
    function (service) {
        const myThis = this

        service.statusWiseData("GET", "Confirmed").then((response => {
            console.log(response)
            myThis.appointments = response.data
        }))

    }])