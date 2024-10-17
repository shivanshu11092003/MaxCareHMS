

myApp.controller("pendingAppointmentsController", ["$http", "$location","baseURL",
     function ($http, $location,baseURL) {
    const myThis = this
    function getData(){
        const getAppointmentData = {
            method: "GET",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/?status=Pending`,
            withCredentials:true

    
        }
        $http(getAppointmentData).then((response) => {
            myThis.appointments = response.data
        })

    }
    getData();

    myThis.accept = function($index,id){
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

    // myThis.update = function($index,id){

    //     console.log($index,id)
    //     const updateStatus = myThis.status[$index]
    //     console.log(updateStatus)

    //     var remark = myThis.feedBack[$index]
    //     console.log(remark)
        

    //     const statusUpdateRequest = {
    //         method:"PUT",
    //         url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
    //         data:{
    //             id:id,
    //             updated_status:updateStatus,
    //             remark: remark

    //         },
    //         withCredentials:true

    //     }
    //     $http(statusUpdateRequest).then((response) => {
    //         console.log(response.status)
    //         getData();
    //         Swal.fire({
    //             title: "Good job!",
    //             text: "You clicked the button!",
    //             icon: "success"
    //           });

    //     })

    // }



}])