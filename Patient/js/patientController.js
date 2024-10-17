

myApp.controller("patientController", ["$http", "$location","baseURL", 
    function ($http, $location,baseURL) {

    const myThis = this;
    myThis.SideNaviagtionbtn = true
 


    myThis.hide = function(){
        myThis.divSideNaviagtionbtn = true
        myThis.sideNaviagtion = false
  
    }
    myThis.show = function(){
        myThis.sideNaviagtion = true
        myThis.divSideNaviagtionbtn = false
        getPanel();


       


    }
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

   function getPanel(){
    const doctorInfoRequest = {
        method: "GET",
        url: `https://${baseURL.ip}:8000/maxcare_patient/side_panel/`,
        withCredentials:true


    }
    $http(doctorInfoRequest).then((response) => {
        myThis.sideNaviagtion = response.data
    })

   }
   getPanel();

    


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


