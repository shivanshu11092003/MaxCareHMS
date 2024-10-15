

myApp.controller("prescribedAppointmentsController", ["$http", "$location","baseURL",
    function ($http, $location,baseURL) {
   const myThis = this
   function get(){
       const getAppointmentData = {
           method: "GET",
           url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/?status=Prescribed`,
           withCredentials:true

   
       }
       $http(getAppointmentData).then((response) => {
           myThis.appointment = response.data
       })

   }
   get();


    



}])