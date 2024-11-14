
myApp.controller("patientAppointmentController", ["$http", "baseURL", "service",
    function ($http, baseURL, service) {

        const myThis = this



        service.getService("GET", "info").then((response) => {
            console.log(response)
            myThis.doctors = response
        })

        myThis.loader = true


        function getData() {
            service.getService("GET", "book_appointments").then((response) => {
                response.forEach((item)=>{
                 
                    if(item.status == "Request Initiated"){
                        item.btn_class = "btn-danger"
                    }
                    else{
                        item.btn_class = "d-none"
                    }
                })
                myThis.appointments = response

                myThis.loader = false
            })
        }
        getData();

        myThis.book = function () {

            const form = document.getElementById("form")

            const formData = new FormData(form)

            const doctorInfoRequest = {
                method: "POST",
                url: `https://${baseURL.ip}:8000/maxcare_patient/book_appointments/`,
                data: formData,
                headers: {
                    "Content-Type": undefined
                },
                withCredentials: true


            }
            $http(doctorInfoRequest).then((response) => {
                console.log(response.data)
                form.reset()
                getData();
            })

        }

        myThis.pay = function(){
            var options = {
                "key": "rzp_test_T6aKcrW24ZWxWH	", // Enter the Key ID generated from the Dashboard
                "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Acme Corp",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": "order_PK0dKY5YSc7Ch8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response){
                console.log(response)
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
            rzp1.open();
            // document.getElementById('rzp-button1').onclick = function(e){
              
            //     e.preventDefault();
            // }
        }

        service.getService("GET","register_doctor").then((response)=>{
            console.log(response.specialization)
            myThis.specializationArray =[]
            response.specialization.forEach((element)=>{
                console.log(element.speciality)
                myThis.specializationArray.push(element.speciality)
            })
   
       
            
    
        })

      



    }])