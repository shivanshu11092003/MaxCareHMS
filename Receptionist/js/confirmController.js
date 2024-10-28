
myApp.controller("confirmController", ["service",
    function (service) {
        const myThis = this
        myThis.loader = true
       


        service.statusWiseData("GET", "Confirmed").then((response => {
            console.log(response)
            myThis.appointments = response.data.data
            myThis.loader = false

        }))

        myThis.export = function (tableId, filename) {
                const table = document.getElementById(tableId);
                let csv = [];
                for (let row of table.rows) {
                    let cols = Array.from(row.cells).map(cell => cell.innerText.replace(/,/g, '')); 
                    csv.push(cols.join(',')); 
                }
                const csvString = csv.join('\n'); 
                const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement('a');
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', filename);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            
        }






    }])