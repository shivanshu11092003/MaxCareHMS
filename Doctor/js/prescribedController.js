

myApp.controller("prescribedAppointmentsController", ["service",
    function (service) {
   const myThis = this
    service.statusWiseData("GET","Prescribed").then((response=>{
        console.log(response.data)
        myThis.appointment = response.data
    }))
    


    



}])