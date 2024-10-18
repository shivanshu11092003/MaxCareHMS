

myApp.controller("initiatedController", ["service",
    function (service) {
        const myThis = this
        myThis.loader = true

        service.statusWiseData("GET", "Request Initiated").then((response => {
            console.log(response)
            myThis.appointments = response.data
            myThis.loader = false
        }))







    }])