var myApp = angular.module("myApp", ["ui.router"]);

myApp.constant("baseURL", {
  ip: "10.21.99.48"
})

myApp.service("service", ["$http", "baseURL", function ($http, baseURL) {

  //Get
  this.getService = function (requestMethod, apiName) {

    var request = {
      method: requestMethod,
      url: `https://${baseURL.ip}:8000/maxcare_patient/${apiName}/`,
      withCredentials:true

    }
    return $http(request).then((response) => {
      return response.data
    })
  }
  
  //Get Data According to Status
  this.statusWiseData = function(requestMethod,queryParameter){
    var request ={
      method:requestMethod,
      url:`https://${baseURL.ip}:8000/maxcare_patient/book_appointments/?status=${queryParameter}`,
      withCredentials:true

    }
    return $http(request).then((response) => {
     
      return response
    }).catch((error)=>{
      console.log(error);
    })
  }

  //ls
  this.addState = function(state){
    localStorage.setItem("state",state);
    const currrentState = localStorage.getItem("state");
    console.log(currrentState)

  }
  this.delState = function(){
    
    localStorage.removeItem("state")

  }

}])

myApp.config(function ($stateProvider, $urlRouterProvider) {
  var loginState = {
    name: "login",
    url: "/login",
    templateUrl: "Patient/template/loginTemplate.html",
    controller: "loginController",
  };
  var registerState = {
    name: "register",
    url: "/register",
    templateUrl: "Patient/template/registerTemplate.html",
    controller: "registerController",
  };
  var drregisterState = {
    name: "drRegister",
    url: "/drRegister",
    templateUrl: "Patient/template/drRegisterTemplate.html",
    controller: "drRegisterController",
  };
  var dashState = {
    name: "dashboard",
    url: "/dashboard",
    templateUrl: "Patient/template/dashTemplate.html",
    controller: "dashController",
  };

  var patientState = {
    name: "patient",
    url: "/patient",
    templateUrl: "Patient/template/patientTemplate.html",
    controller: "patientController",

  }


  var patientAppointmentState = {
    name: "patient.patientappointment",
    parent: 'patient',
    url: "/patientappointment",
    templateUrl: "Patient/template/appointTemplate.html",
    controller: "patientAppointmentController",

  };
  var transactionState = {
    name: "patient.transaction",
    parent: 'patient',
    url: "/transaction",
    templateUrl: "Patient/template/transactionTemplate.html",


  };
  var reportState = {
    name: "patient.report",
    parent: 'patient',
    url: "/report",
    templateUrl: "Patient/template/reportTemplate.html",


  };
  var prescriptionState = {
    name: "patient.prescription",
    parent: 'patient',
    url: "/prescription",
    templateUrl: "Patient/template/prescriptionTemplate.html",


  };
  var prescriptionPDFState = {
    name: "patient.prescriptionPdf",
    parent: 'patient',
    url: "/prescriptionPdf/:id",
    templateUrl: "Patient/template/pdfTemplate.html",


  };
  $stateProvider.state("prescriptionPdf", prescriptionPDFState);


  var receptionistState = {
    name: "receptionist",
    url: "/receptionist",
    templateUrl: "/Receptionist/template/receptionistTemplate.html",
    controller: "receptionistController",

  }
  $stateProvider.state("receptionist", receptionistState);

  var appointmentsState = {
    name: "receptionist.appointments",
    parent: 'receptionist',
    url: "/appointments",
    templateUrl: "/Receptionist/template/appointmentsStatisticsiTemplate.html",
    controller: "receptionistAppointmentController",

  };
  $stateProvider.state("appointments", appointmentsState);


  var pendingAppointmentsState = {
    name: "receptionist.pendingAppointments",
    parent: 'receptionist',
    url: "/pendingAppointments",
    templateUrl: "/Receptionist/template/pendingTemplate.html",
    controller: "pendingAppointmentsController",

  };
  $stateProvider.state("pendingAppointments", pendingAppointmentsState);

  var initiatedState = {
    name: "receptionist.initiated",
    parent: 'receptionist',
    url: "/initiated",
    templateUrl: "/Receptionist/template/initiatedTemplate.html",
    controller: "initiatedController",

  };
  $stateProvider.state("initiated", initiatedState);

  var confirmState = {
    name: "receptionist.confirm",
    parent: 'receptionist',
    url: "/confirm",
    templateUrl: "/Receptionist/template/confirmTemplate.html",
    controller: "confirmController",

  };
  $stateProvider.state("confirm", confirmState);

  var transactionPatientState = {
    name: "receptionist.transaction",
    parent: 'receptionist',
    url: "/transactionPatient",
    templateUrl: "/Receptionist/template/transactionPatientTemplate.html",
    controller: "transactionPatientController",

  };
  $stateProvider.state("transactionPatient", transactionPatientState);

  var doctorState = {
    name: "doctor",
    url: "/doctor",
    templateUrl: "/Doctor/template/doctorTemplate.html",
    controller: "doctorController",

  }
  $stateProvider.state("doctor", doctorState);

  var drpendingAppointmentsState = {
    name: "doctor.drpendingAppointments",
    parent: 'doctor',
    url: "/drpendingAppointments",
    templateUrl: "/Doctor/template/drpendingTemplate.html",
    controller: "drpendingAppointmentsController",

  };
  $stateProvider.state("drpendingAppointments", drpendingAppointmentsState);
  var drconfirmAppointmentsState = {
    name: "doctor.drconfirmAppointments",
    parent: 'doctor',
    url: "/drconfirmAppointments",
    templateUrl: "/Doctor/template/confirmDrTemplate.html",
    controller: "drconfirmAppointmentsController",

  };
  $stateProvider.state("drconfirmAppointments", drconfirmAppointmentsState);
  var prescribedAppointmentsState = {
    name: "doctor.prescribedAppointments",
    parent: 'doctor',
    url: "/prescribedAppointments",
    templateUrl: "/Doctor/template/prescribedTemplate.html",
    controller: "prescribedAppointmentsController",

  };
  $stateProvider.state("prescribedAppointments", prescribedAppointmentsState);

  var drprescriptionState = {
    name: "doctor.drprescription",
    parent: 'doctor',
    url: "/drprescription/:id",
    templateUrl: "/Doctor/template/prescriptionDrTemplate.html",
    controller: "drprescriptionController",

  };
  $stateProvider.state("drprescription", drprescriptionState);





  $stateProvider.state("login", loginState);
  $stateProvider.state("register", registerState);
  $stateProvider.state("dashboard", dashState);
  $stateProvider.state("drRegister", drregisterState);
  $stateProvider.state("patient", patientState);
  $stateProvider.state("patientappointment", patientAppointmentState);
  $stateProvider.state("transaction", transactionState);
  $stateProvider.state("report", reportState);
  $stateProvider.state("prescription", prescriptionState);

  $urlRouterProvider.otherwise("/dashboard");
})



myApp.controller("dashController", ["$location", "baseURL", "service",
  function ($location, baseURL, service) {

    service.getService("GET", "info").then((response) => {
      console.log(response)
      myThis.doctors = response
    })




    const myThis = this
    myThis.ipAddress = baseURL.ip


    myThis.login = function () {
      $location.url("/login")
    }
    myThis.career = function () {
      $location.url("/drRegister")
    }
    myThis.register = function () {
      $location.url("/register")
    }









  }])  