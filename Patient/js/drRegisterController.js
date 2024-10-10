const baseURL = "10.21.97.74"

myApp.controller("drRegisterController", ["$http", "$location", function ($http, $location) {

    const myThis = this

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
            console.log("a")

            
        }
        else{
            console.log("b")
            myThis.first_name = ""
            console.log(nameRegex.match(formDataObject.first_name))
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
            myThis.passwd1 = ""
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
        
       

        if(true){
            var registerRequest = {
                method:"POST",
                url:`https://${baseURL}:8000/maxcare_patient/register_doctor/`,
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

    myThis.specializationArray = [
        "General Practitioner",
        "Pediatrician",
        "Cardiologist",
        "Dermatologist",
        "Neurologist",
        "Orthopedic Surgeon",
        "Gynecologist",
        "Oncologist",
        "Psychiatrist",
        "Endocrinologist",
        "Anesthesiologist",
        "Radiologist",
        "Urologist",
        "Ophthalmologist",
        "Gastroenterologist"
    ];

    myThis.degree = ["MD", "DO", "MBBS", "DMD", "DDS", "PharmD", "DNP", "PsyD", "PhD"];

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



}])  