myApp.controller("receptionistController", ["$location","service",
     function ($location,service) {

    const myThis = this;

    service.getService("GET", "signin").then((response) => {
        $location.url(response.route)
    })



    service.getService("GET", "side_panel").then((response) => {
        myThis.sideNaviagtion = response
    })


    myThis.logout = function () {
        service.getService("GET", "logout").then((response) => {

            $location.url(response.route)

        })

    }



}])