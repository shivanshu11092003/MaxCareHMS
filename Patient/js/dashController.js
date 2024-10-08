myApp.controller("dashController", ["$http", "$location", function ($http, $location) {

    const myThis = this

    myThis.login = function () {
        $location.url("/login")
    }
    myThis.register = function () {
        $location.url("/register")
    }

}])  