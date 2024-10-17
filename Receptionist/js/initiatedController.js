

myApp.controller("initiatedController", ["service",
    function (service) {
        const myThis = this

        service.statusWiseData("GET", "Request Initiated").then((response => {
            console.log(response)
            myThis.appointments = response.data
        }))







    }])