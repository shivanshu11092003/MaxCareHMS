const baseURL = "10.21.96.74"

myApp.controller("initiatedController", ["$http", "$location", function ($http, $location) {
    const myThis = this
    function getData(){
        const getAppointmentData = {
            method: "GET",
            url: `https://${baseURL}:8000/maxcare_patient/book_appointments/?status=Request Initiated`,
            withCredentials:true

    
        }
        $http(getAppointmentData).then((response) => {
            myThis.appointments = response.data
        })

    }
    getData();

   


}])