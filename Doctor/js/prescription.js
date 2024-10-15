

myApp.controller("drprescriptionController", ["$http", "$location","$stateParams","baseURL",
     function ($http, $location,$stateParams,baseURL) {
    const myThis = this

 
    const appointmentID = $stateParams.id
    myThis.id = appointmentID

    

    myThis.medicineArray = []
    var getPrescription = {
        method:"GET",
        url: `https://${baseURL.ip}:8000/maxcare_patient/manage_prescriptions/?id=${appointmentID}`,
        withCredentials:true


       }
       $http(getPrescription).then((response) => {
        console.log(response.data)
        myThis.medicineArray = response.data


    })


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


    })
       
       count++
       myThis.name =""
       myThis.date =""
       myThis.frequency =""




       console.log(myThis.medicineArray)


    }

}])