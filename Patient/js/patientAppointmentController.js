

myApp.controller("patientAppointmentController", ["$http", "$location","baseURL", 
    function ($http, $location,baseURL) {

    const myThis = this
    const doctorInfoRequest = {
        method: "GET",
        url: `https://${baseURL.ip}:8000/maxcare_patient/info/`

    }
    $http(doctorInfoRequest).then((response) => {
        myThis.doctors = response.data
    })

    function getData(){
        const getAppointmentData = {
            method: "GET",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            withCredentials:true

    
        }
        $http(getAppointmentData).then((response) => {
            myThis.appointments = response.data
        })

    }
    getData();

    myThis.book = function(){

        const form = document.getElementById("form")

        const formData = new FormData(form)


      
        console.log("Hello")
    

        const doctorInfoRequest = {
            method: "POST",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:formData,
            headers: {
                "Content-Type": undefined
            },
            withCredentials:true

    
        }
        $http(doctorInfoRequest).then((response) => {
            console.log(response.data)
            form.reset()
            getData();
        })

 





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



}])