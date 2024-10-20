
myApp.controller("confirmController", ["service",
    function (service) {
        const myThis = this
        myThis.loader = true


        service.statusWiseData("GET", "Confirmed").then((response => {
            console.log(response)
            myThis.appointments = response.data.data
            myThis.loader = false

        }))

        myThis.export = function (table, sheetName, fileName) {

            fileName = fileName + new Date();

            var uri = 'data:application/vnd.ms-excel;base64,',
                templateData = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
                base64Conversion = function (s) { return window.btoa(unescape(encodeURIComponent(s))) },
                formatExcelData = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }

            $("tbody > tr[data-level='0']").show();

            if (!table.nodeType)
                table = document.getElementById(table)

            var ctx = { worksheet: sheetName || 'Worksheet', table: table.innerHTML }

            var element = document.createElement('a');
            element.setAttribute('href', 'data:application/vnd.ms-excel;base64,' + base64Conversion(formatExcelData(templateData, ctx)));
            element.setAttribute('download', fileName);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);

        }






    }])