

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

    myThis.update = function($index,id){

        console.log($index,id)
        const updateStatus = myThis.status[$index]
        console.log(updateStatus)

        var remark = myThis.feedBack[$index]
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