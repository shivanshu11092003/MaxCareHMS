var myApp = angular.module("myApp", ["ui.router"]);

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
    name:"patient",
    url:"/patient",
    templateUrl: "Patient/template/patientTemplate.html",
    controller: "patientController",
    
  }


  var patientAppointmentState = {
    name: "patient.patientappointment",
    parent:'patient',
    url: "/patientappointment",
    templateUrl: "Patient/template/appointTemplate.html",
    controller: "patientAppointmentController", 

  };
  var transactionState = {
    name: "patient.transaction",
    parent:'patient',
    url: "/transaction",
    templateUrl: "Patient/template/transactionTemplate.html",


  };
  var reportState = {
    name: "patient.report",
    parent:'patient',
    url: "/report",
    templateUrl: "Patient/template/reportTemplate.html",


  };
  var prescriptionState = {
    name: "patient.prescription",
    parent:'patient',
    url: "/prescription",
    templateUrl: "Patient/template/prescriptionTemplate.html",


  };

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