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
      };
      $stateProvider.state("login", loginState);
      $stateProvider.state("register", registerState);
      $stateProvider.state("dashboard", dashState);
      $stateProvider.state("patient", patientState);
      $urlRouterProvider.otherwise("/login");
}
)