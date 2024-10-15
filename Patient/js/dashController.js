

myApp.controller("dashController", ["$http", "$location","baseURL", 
    function ($http, $location,baseURL) {

    console.log(baseURL.ip)


    
    const myThis = this
    myThis.ipAddress = baseURL.ip


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
        url: `https://${baseURL.ip}:8000/maxcare_patient/info/`

    }
    $http(doctorInfoRequest).then((response) => {
        console.log(response.data)
        myThis.doctors = response.data
    })




    

}])  