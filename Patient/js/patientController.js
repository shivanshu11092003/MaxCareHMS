myApp.controller("patientController", ["$http", "$location", function ($http, $location) {

    const myThis = this;
    myThis.cancelBtn = true;

    myThis.hide = function(){

        myThis.cancelBtn = false;

    }
    myThis.show = function(){

        myThis.cancelBtn = true;

    }


}])