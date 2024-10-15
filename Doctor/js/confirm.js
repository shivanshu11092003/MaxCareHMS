

myApp.controller("drconfirmAppointmentsController", ["$http", "$location","baseURL",
     function ($http, $location,baseURL) {
    const myThis = this
    function getData(){
        const getAppointmentData = {
            method: "GET",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/?status=Confirmed`,
            withCredentials:true

    
        }
        $http(getAppointmentData).then((response) => {
            myThis.appointments = response.data
        })

    }
    getData();


     



}])