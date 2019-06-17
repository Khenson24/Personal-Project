// These variables act as a puzzle inside of the weatherAsk function 
// to come together and access the open weather api.

var url = "http://api.openweathermap.org/data/2.5/weather?q=";


var apiKey = "&appid=44cc3fb517f8a37f5a59c81896d116db";
var imp = "&units=imperial";

var url1 = "https://svcs.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=KinardHe-Innovate-PRD-151ea5241-765a9d7f&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords="
var cold = "Men's-Coat"
var warm = "Men's-Shorts"
var hot = "Men's-Trunks"
var theRest = "&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0";
// This grabs the submit button by id from the HTML doc

var button = window.document.getElementById('submit_city');


// This function accesses the api and 
// returns the temperature from the JSON object

function weatherAsk() {
    input = window.document.getElementById('city').value;
    var temp1 = myJson.main.temp
    var fetchURL = url += input += apiKey += imp;
    fetch(fetchURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));

            window.document.getElementById('temp').innerHTML = "Temperature in Your City: <br>" + JSON.stringify(myJson.main.temp);
        });
}

function ebayGrab() {

    var fetchURL1 = url1 += warm += theRest;
    fetch(fetchURL1)
        .then(function (response) {
           return response.json()
        })
        .then(function (myJson) {
           console.log(JSON.stringify(myJson));

            window.document.getElementById("ebay").innerHTML = "Try these clothing options! " + JSON.stringify(root.findItemsByKeywordsResponse[0].searchResult[0]);
        });
}


