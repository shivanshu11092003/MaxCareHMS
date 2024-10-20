

myApp.controller("prescribedAppointmentsController", ["service",
    function (service) {
   const myThis = this
   myThis.loader = true
    service.statusWiseData("GET","Prescribed").then((response=>{
        console.log(response.data)
        myThis.appointment = response.data
        myThis.loader = false
    }))
    


    



}])