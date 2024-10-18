
myApp.controller("confirmController", ["service",
    function (service) {
        const myThis = this
        myThis.loader = true


        service.statusWiseData("GET", "Confirmed").then((response => {
            console.log(response)
            myThis.appointments = response.data
            myThis.loader = false

        }))






    }])