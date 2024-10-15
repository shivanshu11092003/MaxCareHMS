

myApp.controller("registerController", ["$http", "$location","baseURL",
     function ($http, $location,baseURL) {

    const myThis = this

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




   


    myThis.register = function(){

        const form = document.getElementById("form")

        const formData = new FormData(form)

        const formDataObject = Object.fromEntries(formData)

        var requestPass = false
        console.log("click")

        const nameRegex = "/^[A-Z]+[a-z]{2,25}$/"
        console.log(formDataObject.first_name.trim())
        if(formDataObject.first_name.trim() == ""){
            myThis.first_name = "*is required field"
            requestPass = false


            
        }
        else{
            requestPass = true
            myThis.first_name = ""
        }
        if(formDataObject.last_name == ""){
            myThis.last_name = "*is required field"
            requestPass = false

        }
        else{
            myThis.last_name = ""
            requestPass = true

        }
        if(formDataObject.email == ""){
            myThis.email = "*is required field"
            requestPass = false

        }
        else{
            myThis.email = ""
            requestPass = true

        }
        if(formDataObject.mobile == ""){
            myThis.mobile = "*is required field"
            requestPass = false

        
        }else{
            myThis.mobile = ""
            requestPass = true

        }
        if(formDataObject.gender == ""){
            myThis.gender = "*is required field"
            requestPass = false

        
        }else{
            myThis.gender = ""
            requestPass = true

        }
        if(formDataObject.maritalStatus == ""){
            myThis.maritalStatus = "*is required field"
            requestPass = false

        
        }else{
            myThis.maritalStatus = ""
            requestPass = true

        }
        if(formDataObject.dob == ""){
            myThis.dob = "*is required field"
            requestPass = false

        
        }else{
            myThis.dob = ""
            requestPass = true

        }
        if(formDataObject.Weight == ""){
            myThis.Weight = "*is required field"
            requestPass = false

        
        }else{
            myThis.Weight = ""
            requestPass = true

        }
        if(formDataObject.height == ""){
            myThis.height = "*is required field"
            requestPass = false

        
        }else{
            myThis.height = ""
            requestPass = true

        }
        if(formDataObject.diabitic == ""){
            myThis.diabitic = "*is required field"
            requestPass = false

        
        }else{
            myThis.diabitic = ""
            requestPass = true

        }
        if(formDataObject.blood_Group == ""){
            myThis.blood_Group = "*is required field"
            requestPass = false

        
        }else{
            myThis.blood_Group = ""
            requestPass = true

        }
        if(formDataObject.allergy == ""){
            myThis.allergy = "*is required field"
            requestPass = false

        
        }else{
            myThis.allergy = ""
            requestPass = true

        }
        if(formDataObject.prv_medissue == ""){
            myThis.prv_medissue = "*is required field"
            requestPass = false

        
        }else{
            myThis.prv_medissue = ""
            requestPass = true

        }
        if(formDataObject.pincode == "" ){
            myThis.pincode = "*is required field"
            requestPass = false

        
        }else{
            myThis.pincode = ""
            requestPass = true

        }
        if(formDataObject.address == "" ){
            myThis.address = "*is required field"
            requestPass = false

        
        }else{
            myThis.address = ""
            requestPass = true

        }
        if(formDataObject.city == "" ){
            myThis.city = "*is required field"
            requestPass = false

        
        }else{
            myThis.city = ""
            requestPass = true

        }
        if(formDataObject.state == "" ){
            myThis.state = "*is required field"
            requestPass = false

        
        }else{
            myThis.state = ""
            requestPass = true

        }
        if(formDataObject.passwd1 == "" ){
            myThis.passwd1 = "*is required field"
            requestPass = false

        
        }else{
            myThis.passwd1 = ""
            requestPass = true

        }
        console.log(formDataObject.passwd2,formDataObject.passwd1)
        if(formDataObject.passwd2 == "" ){
            myThis.passwd2 = "*required field"
            requestPass = false

        
        }else{
            if(formDataObject.passwd2 == formDataObject.passwd1 ){
                myThis.passwd2 = ""
                requestPass = true

            
            }else{
                myThis.passwd2 = "*must same as passwd"
                requestPass = false

            }
        }
        
       

        if(requestPass){
            var registerRequest = {
                method:"POST",
                url:`https://${baseURL.ip}:8000/maxcare_patient/register/`,
                headers: {
                    "Content-Type": undefined
                },
                data: formData,
            }
        
            $http(registerRequest).then((response)=>{
    
                
                if(response.status == 200){
                    $location.url(response.data.route)

                }
    
        
            }).catch((e)=>{
                myThis.errorMsg = e.data.status

                console.log(e.status,e)
            })
    
        }
        
    

    }

    


}])  