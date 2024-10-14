const baseURL = "10.21.96.74"

myApp.controller("dashController", ["$http", "$location", function ($http, $location) {

    const myThis = this

    myThis.login = function () {
        $location.url("/login")
    }
    myThis.career = function () {
        $location.url("/drRegister")
    }
    myThis.register = function () {
        $location.url("/register")
    }


    const doctorInfoRequest = {
        method: "GET",
        url: `https://${baseURL}:8000/maxcare_patient/info/`

    }
    $http(doctorInfoRequest).then((response) => {
        console.log(response.data)
        myThis.doctors = response.data
    })


    

}])  