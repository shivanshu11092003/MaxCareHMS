const baseURL = "10.21.98.212"

myApp.controller("registerController", ["$http", "$location", function ($http, $location) {

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
        
        if(formDataObject.first_name == ""){
            myThis.first_name = "*is required field"
        }
        else{
            myThis.first_name = ""
        }
        if(formDataObject.last_name == ""){
            myThis.last_name = "*is required field"
        }
        else{
            myThis.last_name = ""
        }
        if(formDataObject.email == ""){
            myThis.email = "*is required field"
        }
        else{
            myThis.email = ""
        }
        if(formDataObject.mobile == ""){
            myThis.mobile = "*is required field"
        
        }else{
            myThis.mobile = ""
        }
        if(formDataObject.gender == ""){
            myThis.gender = "*is required field"
        
        }else{
            myThis.gender = ""
        }
        if(formDataObject.maritalStatus == ""){
            myThis.maritalStatus = "*is required field"
        
        }else{
            myThis.maritalStatus = ""
        }
        if(formDataObject.dob == ""){
            myThis.dob = "*is required field"
        
        }else{
            myThis.dob = ""
        }
        if(formDataObject.Weight == ""){
            myThis.Weight = "*is required field"
        
        }else{
            myThis.Weight = ""
        }
        if(formDataObject.height == ""){
            myThis.height = "*is required field"
        
        }else{
            myThis.height = ""
        }
        if(formDataObject.diabitic == ""){
            myThis.diabitic = "*is required field"
        
        }else{
            myThis.diabitic = ""
        }
        if(formDataObject.blood_Group == ""){
            myThis.blood_Group = "*is required field"
        
        }else{
            myThis.blood_Group = ""
        }
        if(formDataObject.allergy == ""){
            myThis.allergy = "*is required field"
        
        }else{
            myThis.allergy = ""
        }
        if(formDataObject.prv_medissue == ""){
            myThis.prv_medissue = "*is required field"
        
        }else{
            myThis.prv_medissue = ""
        }
        if(formDataObject.pincode == "" ){
            myThis.pincode = "*is required field"
        
        }else{
            myThis.pincode = ""
        }
        if(formDataObject.address == "" ){
            myThis.address = "*is required field"
        
        }else{
            myThis.address = ""
        }
        if(formDataObject.city == "" ){
            myThis.city = "*is required field"
        
        }else{
            myThis.city = ""
        }
        if(formDataObject.state == "" ){
            myThis.state = "*is required field"
        
        }else{
            myThis.state = ""
        }
        if(formDataObject.passwd1 == "" ){
            myThis.passwd1 = "*is required field"
        
        }else{
            myThis.passwd1 = "false"
        }
        console.log(formDataObject.passwd2,formDataObject.passwd1)
        if(formDataObject.passwd2 == "" ){
            myThis.passwd2 = "*required field"
        
        }else{
            if(formDataObject.passwd2 == formDataObject.passwd1 ){
                myThis.passwd2 = ""
            
            }else{
                myThis.passwd2 = "*must same as passwd"
            }
        }
        
       

        if(requestPass){
            var registerRequest = {
                method:"POST",
                url:`https://${baseURL}:8000/maxcare_patient/register/`,
                headers: {
                    "Content-Type": undefined
                },
                data: formData,
            }
        
            $http(registerRequest).then((response)=>{
    
                console.log(response)
        
            }).catch((error)=>{
                console.log(error)
            })

        }
        
    

    }

    


}])  