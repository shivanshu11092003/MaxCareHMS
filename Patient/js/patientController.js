const baseURL = "10.21.97.74"

myApp.controller("patientController", ["$http", "$location", function ($http, $location) {

    const myThis = this;
    myThis.cancelBtn = true;

    myThis.hide = function(){

        myThis.cancelBtn = false;

    }
    myThis.show = function(){

        myThis.cancelBtn = true;

    }

    const doctorInfoRequest = {
        method: "GET",
        url: `https://${baseURL}:8000/maxcare_patient/side_panel/`,
        withCredentials:true


    }
    $http(doctorInfoRequest).then((response) => {
        console.log(response.data)
        myThis.sideNaviagtion = response.data
    })


}])


