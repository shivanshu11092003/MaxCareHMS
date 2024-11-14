

myApp.controller("drpendingAppointmentsController", ["$http","baseURL","service", 
    function ($http ,baseURL,service) {
    const myThis = this
    myThis.loader = true
  
    function getData(){
        service.statusWiseData("GET","Paid").then((response=>{
            console.log(response)
            myThis.appointments = response.data
            myThis.loader = false
        }))
    }
    getData();

    myThis.accept = function(id){
        myThis.loader = true

        console.log(id)
        const statusUpdateRequest = {
            method:"PUT",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:{
                id:id,
                updated_status:"Confirmed",

            },
            withCredentials:true

        }
        $http(statusUpdateRequest).then((response) => {
            if(response.status == 200){
                myThis.loader = false

                console.log(response.status)
                getData();

                Swal.fire({
                    title: "Accepted!",
                    text: "Request of Patient is Initiated!",
                    icon: "success"
                  });

            }
                   
        
                })
        

    }
    myThis.reject = function(id){
        myThis.loader = true

        console.log(id)
        var remark = myThis.feedBack[id]
        const statusUpdateRequest = {
            method:"PUT",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:{
                id:id,
                updated_status:"Refunded",
                remark: remark

            },
            withCredentials:true

        }
        $http(statusUpdateRequest).then((response) => {

                    
                    if(response.status == 200){
                        myThis.loader = false
                        console.log(response.status)
                        getData();
                        Swal.fire({
                            title: "Rejected!",
                            text: "Request of Patient is Cancelled!",
                            icon: "error"
                          });

                    }

                   
        
                })
        

    }




}])