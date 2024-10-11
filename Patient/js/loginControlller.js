const baseURL = "10.21.97.74"
myApp.controller("loginController", ["$http", "$location", function ($http, $location) {

    const myThis = this

    myThis.redirect = function () {
        $location.url("/register")
    }

    myThis.login = function(){
        const form = document.getElementById("form")

        const formData = new FormData(form)

      
            var registerRequest = {
                method:"POST",
                url:`https://${baseURL}:8000/maxcare_patient/signin/`,
                headers: {
                    "Content-Type": undefined
                },
                data: formData,
                withCredentials:true
            }
        
            $http(registerRequest).then((response)=>{
    
                $location.url(response.data.route)
        
            })
    
        

    }

   
   

}])  