const baseURL = "10.21.96.74"

myApp.controller("patientController", ["$http", "$location", function ($http, $location) {

    const myThis = this;
    var registerRequest = {
        method:"GET",
        url:`https://${baseURL}:8000/maxcare_patient/signin/`,

        withCredentials:true
    }

    $http(registerRequest).then((response)=>{

        if(response.status == 200){
            $location.url(response.data.route)

        }


    }).catch((e)=>{
        console.log(e.status,e)
    })

   

    const doctorInfoRequest = {
        method: "GET",
        url: `https://${baseURL}:8000/maxcare_patient/side_panel/`,
        withCredentials:true


    }
    $http(doctorInfoRequest).then((response) => {
        myThis.sideNaviagtion = response.data
    })


    myThis.logout = function(){
        const logoutRequest = {
            method: "GET",
            url: `https://${baseURL}:8000/maxcare_patient/logout/`,
            withCredentials:true
    
    
        }
        $http(logoutRequest).then((response) => {
            if(response.status = 200){
                $location.url(response.data.route)
            }
        })

    }


}])


