

myApp.controller("registerController", ["$http", "$location", "baseURL","service",

    function ($http, $location, baseURL,service) {

        const myThis = this

        var today = new Date();
        myThis.myDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        console.log(myThis.myDate)

        myThis.redirect = function () {
            $location.url("/login")
        }

        myThis.stateArray = [
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttarakhand",
            "Uttar Pradesh",
            "West Bengal",
            "Andaman and Nicobar Islands",
            "Chandigarh",
            "Dadra and Nagar Haveli",
            "Daman and Diu",
            "Delhi",
            "Lakshadweep",
            "Puducherry"
        ]

        service.getService("GET", "register").then((response) => {
            console.log(response)
            myThis.maritalArray = response.marital_status
            myThis.genderArray = response.gender
            myThis.bloodArray = response.blood
    
            
          })

        myThis.register = function () {

            const form = document.getElementById("form")

            const formData = new FormData(form)

            const formDataObject = Object.fromEntries(formData)

            var requestPass = false

            const nameRegex = /^[A-Z]+[a-z]{1,25}$/
            const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]+[@][a-z]+[\.][a-z]{2,}$/
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/
            const mobileNoRegex = /^[0-9]{10}$/
            const pincodeRegex = /^[0-9]{6}$/


            const fname = formDataObject.first_name

        
            if (fname == "" ) {
                    requestPass = false
                    myThis.first_name = "*required"
               
            }
            else {
                if(formData.get("first_name").match(nameRegex) == null){
                    Swal.fire({
                        title: "First Name",
                        text: "contain alphabet min 2 character and first charcter is uppercase",
                        icon: "error",
                    });
    
                    requestPass = false
                }else{
                 

                    requestPass = true
                }
                   myThis.first_name = ""
         

            }
            if (formDataObject.last_name != "" ) {
                if( formData.get("last_name").match(nameRegex) == null ){
                    Swal.fire({
                        title: "Last Name",
                        text: "contain alphabet min 2 character and first charcter is uppercase",
                        icon: "error",
                    });
                    requestPass = false

                }else{
                

                    requestPass = true
                }
                    myThis.last_name = ""
                    


            }
            else {
                myThis.last_name = "*required"
                requestPass = false

            }
            if (formDataObject.email != "" ) {
                if( formData.get("email").match(emailRegex) == null ){
                    Swal.fire({
                        title: "Email",
                        text: "must like example@gmail.com",
                        icon: "warning",
                    });
                    requestPass = false

                }else{
               

                    requestPass = true
                }
               myThis.email = ""

            }
            else {
                myThis.email = "*required"
                requestPass = false


            }
            if (formData.get("mobile") != "" ) {
                if(formData.get("mobile").match(mobileNoRegex) == null){
                    Swal.fire({
                        title: "Mobille Number",
                        text: "contain 10 digit only and must valid",
                        icon: "warning",
                    });
                    requestPass = false

                }else{
                  
                    requestPass = true
                }
                  myThis.mobile = ""
            } else {
                myThis.mobile = "required"
                requestPass = false

            }

            if (formData.get("gender") == "") {
                myThis.gender = "*required "
                requestPass = false


            } else {
                myThis.gender = ""
                requestPass = true

            }

            // if (formData.get("maritalStatus") == "") {
             
            //     requestPass = true


            // } else {
            //     myThis.maritalStatus = ""
            //     requestPass = true

            // }


            if (formData.get("dob") == "") {

                myThis.dob = "*required"
                requestPass = false
            } else {
                requestPass = true
                myThis.dob = ""

            }

            if (formDataObject.Weight == "") {
                myThis.Weight = "*required"
                requestPass = false


            } else {
                myThis.Weight = ""
                requestPass = true

            }
            const heightRegex = /^[0-9]{1,4}$/
            if (formData.get("height") == "") {
                myThis.height = "*is required field"
                requestPass = false


            } else {
                 if(formData.get("height").match(heightRegex) == null){
                    Swal.fire({
                        title: "Height",
                        text: "must be a number",
                        icon: "error",
                        confirmButtonColor: "#ff4136,"
                    });
    
                    requestPass = false
                }else{
              
                    requestPass = true
                }
                      myThis.height = ""


            }
            if (formDataObject.diabitic == "" ) {
                
                myThis.diabitic = "*is required field"
                requestPass = false


            } else {
                myThis.diabitic = ""
                requestPass = true

            }
            if (formDataObject.blood_Group == "") {
                myThis.blood_Group = "*is required field"
                requestPass = false


            } else {
                myThis.blood_Group = ""
                requestPass = true

            }
        
           
            if (formDataObject.pincode != "") {
                if(formData.get("pincode").match(pincodeRegex) == null){
                    requestPass = false
                    Swal.fire({
                        title: "Pincode",
                        text: "must be of 6 digit",
                        icon: "warning",
                    });

                }else{
                    requestPass = true;
                    
                }
            } else {
                myThis.pincode = ""
                requestPass = true

            }

            if (formDataObject.address == "") {
                myThis.address = "*is required field"
                requestPass = false


            } else {
                myThis.address = ""
                requestPass = true

            }

            if (formDataObject.city == "") {
                myThis.city = "*is required field"
                requestPass = false


            } else {
                myThis.city = ""
                requestPass = true

            }

            if (formDataObject.state == "") {
                myThis.state = "*is required field"
                requestPass = false


            } else {
                myThis.state = ""
                requestPass = true

            }


            if (formData.get("passwd1") != "") {
                if (formData.get("passwd1").match(passwordRegex)==null) {
                    Swal.fire({
                        title: "Password",
                        text: "contain lowercase,uppercase alphabet,a special character,number contain min 8 character",
                        icon: "warning",
                    });
                    requestPass = false

                } else {
                    requestPass = true

                }
                myThis.passwd1 = ""
               


            } else {
                myThis.passwd1 = "*required field"
                requestPass = false
               

            }

            if (formData.get("passwd2") == "") {
                myThis.passwd2 = "*required field"
                requestPass = false


            } else {
                if (formDataObject.passwd2 == formData.get("passwd1")) {
                    myThis.passwd2 = ""
                    requestPass = true


                } else {
                    myThis.passwd2 = "*must same as password"
                    requestPass = false

                }
            }



            if (requestPass) {
                var registerRequest = {
                    method: "POST",
                    url: `https://${baseURL.ip}:8000/maxcare_patient/register/`,
                    headers: {
                        "Content-Type": undefined
                    },
                    data: formData,
                    withCredentials:true
                }

                $http(registerRequest).then((response) => {
                    if (response.status == 200) {
                        $location.url(response.data.route)
                    }

                }).catch((e) => {
                    myThis.errorMsg = e.data.status

                    console.log(e.status, e)
                })

            }



        }




    }])  