

myApp.controller("receptionistController", ["$http","baseURL", "$location", function ($http,baseURL, $location) {

    const myThis = this;

    var registerRequest = {
        method:"GET",
        url:`https://${baseURL.ip}:8000/maxcare_patient/signin/`,

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
        url: `https://${baseURL.ip}:8000/maxcare_patient/side_panel/`,
        withCredentials:true


    }
    $http(doctorInfoRequest).then((response) => {
        console.log(response.data)
        myThis.sideNaviagtion = response.data
    })

    myThis.logout = function(){
        const logoutRequest = {
            method: "GET",
            url: `https://${baseURL.ip}:8000/maxcare_patient/logout/`,
            withCredentials:true
    
    
        }
        $http(logoutRequest).then((response) => {
            if(response.status = 200){
                $location.url(response.data.route)
            }
        })

    }



}])