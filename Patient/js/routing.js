var myApp = angular.module("myApp",["ui.router"]);

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
        views:{
          '':{
            templateUrl: "Patient/template/patientTemplate.html",
            controller: "patientController"
          },
          'appointments@patient':{
             templateUrl: "Patient/template/appointTemplate.html",

          }

        }

      };
      $stateProvider.state("login", loginState);
      $stateProvider.state("register", registerState);
      $stateProvider.state("dashboard", dashState);
      $stateProvider.state("patient", patientState);
      $stateProvider.state("drRegister", drregisterState);
      $urlRouterProvider.otherwise("/login");
}
)