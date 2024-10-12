const baseURL = "10.21.97.74"
myApp.controller("loginController", ["$http", "$location", function ($http, $location) {

    const myThis = this

    myThis.redirect = function () {
        $location.url("/register")
    }
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

                if(response.status == 200){
                    $location.url(response.data.route)

                }
    
        
            }).catch((e)=>{
                console.log(e.status,e)
            })
    
        

    }

   
   

}])  