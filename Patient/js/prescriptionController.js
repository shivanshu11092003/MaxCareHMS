 myApp.controller("prescriptionController", ["service",
     function (service) {

    const myThis = this
    myThis.loader = true
    function getData(){
        service.statusWiseData("GET","Prescribed").then((response=>{
            console.log(response)
            myThis.appointments = response.data
            myThis.loader = false

        }))
       
    }
    getData();



}])