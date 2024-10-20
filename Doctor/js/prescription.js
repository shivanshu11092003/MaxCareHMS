

myApp.controller("drprescriptionController", ["$http","$stateParams","baseURL",
     function ($http,$stateParams,baseURL) {
    const myThis = this
    myThis.loader = true
 
    const appointmentID = $stateParams.id
    myThis.id = appointmentID

    

    myThis.medicineArray = []

    function getAppointmentData(){
        var getPrescription = {
            method:"GET",
            url: `https://${baseURL.ip}:8000/maxcare_patient/manage_prescriptions/?id=${appointmentID}`,
            withCredentials:true
           }
           $http(getPrescription).then((response) => {
            console.log(response.data)
            myThis.medicineArray = response.data
            myThis.loader = false
    
    
        })

    }
    getAppointmentData();

    myThis.sentMail = function(){

        const statusUpdateRequest = {
            method:"PUT",
            url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
            data:{
                id:appointmentID,
                updated_status:"Prescribed",

            },
            withCredentials:true

        }
        $http(statusUpdateRequest).then((response) => {
            if(response.status == 200){
                myThis.loader = false

                console.log(response.status)
                getData();

                Swal.fire({
                    title: "Prescribed!",
                    text: "Prescription is sent in the Mail!",
                    icon: "success"
                  });

            }
                   
        
                })
        
        

    }
   


    myThis.add = function(){
       const medName=myThis.name
       const date = myThis.date
       const dateFormat = new Date(date)
       console.log(dateFormat)
       const myDate = dateFormat.getFullYear() + "-" + (dateFormat.getMonth()+1) + "-" + dateFormat.getDate()
       console.log(myDate)
       const frequency = myThis.frequency

       var postPrescription = {
        method:"POST",
        url: `https://${baseURL.ip}:8000/maxcare_patient/manage_prescriptions/`,
        data:{
            id:appointmentID,
            medicineName:medName,
            prescribeDate:myDate,
            frequency:frequency

        },
        withCredentials:true


       }
       $http(postPrescription).then((response) => {
        console.log(response.status)
        if(response.status == 200){
            getAppointmentData()
        }


    })
       myThis.name =""
       myThis.date =""
       myThis.frequency =""

       console.log(myThis.medicineArray)


    }

}])