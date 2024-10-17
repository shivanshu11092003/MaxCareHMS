 myApp.controller("prescriptionController", ["service",
     function (service) {

    const myThis = this
    function getData(){
        service.statusWiseData("GET","Prescribed").then((response=>{
            console.log(response)
            myThis.appointments = response.data
        }))
       
    }
    getData();



}])