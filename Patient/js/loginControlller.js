myApp.controller("loginController", ["$http", "$location", function ($http, $location) {

    const myThis = this

    myThis.redirect = function () {
        $location.url("/register")
    }
   

}])  