const baseURL = "10.21.96.74"

myApp.controller("drprescriptionController", ["$http", "$location","$stateParams", function ($http, $location,$stateParams) {
    const myThis = this

    myThis.id = $stateParams.id

    

    myThis.medicineArray = []
    var count = 1

    myThis.add = function(){
       const medName=myThis.name
       const date = myThis.date
       const frequency = myThis.frequency

       myThis.medicineArray.push({
           medicineNo:count,
           medicineName:medName,
           prescribeDate:date,
           inDay:frequency
       })
       count++
       myThis.name =""
       myThis.date =""
       myThis.frequency =""



       console.log(myThis.medicineArray)


    }

}])