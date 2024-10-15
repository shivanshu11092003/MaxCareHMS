

myApp.controller("pdfController", ["$http", "$location", "$stateParams", "baseURL",
    function ($http, $location, $stateParams, baseURL) {
        const myThis = this


        const appointmentID = $stateParams.id
        myThis.id = appointmentID



        myThis.medicineArray = []

        function getAppointmentData() {
            var getPrescription = {
                method: "GET",
                url: `https://${baseURL.ip}:8000/maxcare_patient/manage_prescriptions/?id=${appointmentID}`,
                withCredentials: true
            }
            $http(getPrescription).then((response) => {
                console.log(response.data)
                myThis.medicineArray = response.data


            })

        }
        getAppointmentData();

        myThis.print = function () {

        //    const table = document.getElementById("tab")
        //    const file = new File([table],"html",{ type:"application/pdf"})

           fetch("http://127.0.0.1:5500/#!/patient/prescriptionPdf/299").then((res)=> res.blob())
           .then(blob => {
            console.log(blob)

            
             
            const file  = new File([blob],"text",{type:"application/pdf"})

            readFile(file)
        })


        function readFile(input){
            const fr = new FileReader()
            fr.readAsDataURL(input)
            fr.addEventListener('load',()=>{
                const res = fr.result;
                console.log(res)
            })

        }
           
      
        }





        }])