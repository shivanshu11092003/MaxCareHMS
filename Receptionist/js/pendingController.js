

myApp.controller("pendingAppointmentsController", ["$http","baseURL","service",
     function ($http,baseURL,service) {
    const myThis = this
    function getData(){
        service.statusWiseData("GET","Pending").then((response=>{
            console.log(response)
            myThis.appointments = response.data
        }))
        
    }
    getData();

    myThis.accept = function(id){
        const statusUpdateRequest = {
            method:"PUT",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:{
                id:id,
                updated_status:"Request Initiated",

            },
            withCredentials:true

        }
        $http(statusUpdateRequest).then((response) => {
                    console.log(response.status)
                    getData();
                    Swal.fire({
                        title: "Accepted!",
                        text: "Request of Patient is Initiated!",
                        icon: "success"
                      });
        
                })
        

    }
    myThis.reject = function(id){
        console.log(id)
        var remark = myThis.feedBack[id]
        const statusUpdateRequest = {
            method:"PUT",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:{
                id:id,
                updated_status:"Rejected",
                remark: remark

            },
            withCredentials:true

        }
        $http(statusUpdateRequest).then((response) => {
                    console.log(response.status)
                    getData();
                    Swal.fire({
                        title: "Rejected!",
                        text: "Request of Patient is Cancelled!",
                        icon: "error"
                      });
        
                })
        

    }

}])