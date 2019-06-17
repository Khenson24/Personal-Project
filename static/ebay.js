// // These variables act as a puzzle inside of the weatherAsk function 
// // to come together and access the ebay api.

// var url = "https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=KinardHe-Innovate-PRD-151ea5241-765a9d7f&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords="
// var cold = "Men's-Coat"
// var theRest = "&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0";



// // This grabs the submit button by id from the HTML doc

// var button = window.document.getElementById('submit_city');


// // This function accesses the api and 
// // returns the temperature from the JSON object

// function weatherAsk() {
//     input = window.document.getElementById('city').value;

//     var fetchURL = url += input += apiKey += imp;
//     fetch(fetchURL)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (myJson) {
//             console.log(JSON.stringify(myJson));

//             window.document.getElementById('temp').innerHTML = "Temperature in Your City: <br>" + JSON.stringify(myJson.main.temp);
//         });
// }


// function ebayQuery() {
//     input = window.document.getElementById('city').value;

//     var fetchURL = url += input += apiKey += imp;
//     fetch(fetchURL)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (myJson) {
//             console.log(JSON.stringify(myJson));

//             window.document.getElementById('temp').innerHTML = "Temperature in Your City: <br>" + JSON.stringify(myJson.main.temp);
//         });
// }
