


myApp.controller("pdfController", ["$http", "$location", "$stateParams", "baseURL",
    function ($http, $location, $stateParams, baseURL) {
        const myThis = this


        const appointmentID = $stateParams.id
        myThis.id = appointmentID



        myThis.medicineArray = []

        myThis.loader = true


        function getAppointmentData() {

            var getPrescription = {
                method: "GET",
                url: `https://${baseURL.ip}:8000/maxcare_patient/manage_prescriptions/?id=${appointmentID}`,
                withCredentials: true
            }
            $http(getPrescription).then((response) => {
                console.log(response.data)
                myThis.medicineArray = response.data
                myThis.loader = false



            })

        }
        getAppointmentData();

        myThis.print = function () {
            window.print()


        }

        







    }])