myApp.controller("loginController", ["$http", "$location","baseURL","service","$state", 
    function ($http, $location,baseURL,service,$state) {

    const myThis = this

   

    myThis.redirect = function () {
        $location.url("/register")
    }
    service.getService("GET", "signin").then((response) => {
        console.log(response.route)

        $location.url(response.route)
        
      })
    

    myThis.login = function(){
        const form = document.getElementById("form")

        const formData = new FormData(form)

      
            var registerRequest = {
                method:"POST",
                url:`https://${baseURL.ip}:8000/maxcare_patient/signin/`,
                headers: {
                    "Content-Type": undefined
                },
                data: formData,
                withCredentials:true
            }
        
            $http(registerRequest).then((response)=>{
                $location.url(response.data.route)

            }).catch((e)=>{
                myThis.errorMsg = e.data.status

                console.log(e.status,e)
            })
    
        

    }

   
   

}])  