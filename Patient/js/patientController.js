

myApp.controller("patientController", ["$location","service",
    function ($location, service) {

        const myThis = this;
        myThis.SideNaviagtionbtn = true



        myThis.hide = function () {
            myThis.divSideNaviagtionbtn = true
            myThis.sideNaviagtion = false

        }
        myThis.show = function () {
            myThis.sideNaviagtion = true
            myThis.divSideNaviagtionbtn = false
            getPanel();

        }

        service.getService("GET", "signin").then((response) => {
            $location.url(response.route)
        })
        function getPanel(){
            service.getService("GET", "side_panel").then((response) => {

                myThis.sideNaviagtion = response
            })
            
        }
        getPanel()

       





        myThis.logout = function () {
            service.getService("GET", "logout").then((response) => {

                    $location.url(response.route)
             
            })


        }


    }])


