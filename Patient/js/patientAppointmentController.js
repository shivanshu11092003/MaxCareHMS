

myApp.controller("patientAppointmentController", ["$http", "$location", "baseURL", "service",
    function ($http, $location, baseURL, service) {

        const myThis = this


        service.getService("GET", "info").then((response) => {
            console.log(response)
            myThis.doctors = response
        })

        myThis.loader = true


        function getData() {
            service.getService("GET", "book_appointments").then((response) => {
                myThis.appointments = response
                myThis.loader = false


          
            })
           

        }
        getData();

        myThis.book = function () {

            const form = document.getElementById("form")

            const formData = new FormData(form)

            const doctorInfoRequest = {
                method: "POST",
                url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
                data: formData,
                headers: {
                    "Content-Type": undefined
                },
                withCredentials: true


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