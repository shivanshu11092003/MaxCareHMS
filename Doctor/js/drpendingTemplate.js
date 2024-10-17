

myApp.controller("drpendingAppointmentsController", ["$http","baseURL","service", 
    function ($http ,baseURL,service) {
    const myThis = this

  
    function getData(){
        service.statusWiseData("GET","Paid").then((response=>{
            console.log(response)
            myThis.appointments = response.data
        }))
    }
    getData();

    myThis.update = function($index,id){

        console.log($index,id)
        const updateStatus = myThis.status[$index]
        console.log(updateStatus)

        const remark = myThis.feedBack[$index]
        

        
        console.log(remark)

        const statusUpdateRequest = {
            method:"PUT",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:{
                id:id,
                updated_status:updateStatus,
                remark: remark

            },
            withCredentials:true

        }
        $http(statusUpdateRequest).then((response) => {
            console.log(response.status)
            getData();

        })

    }



}])