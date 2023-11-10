//fetch example
fetch("https://handlers.launchcode.org/static/weather.json").then( function (response)
{
    console.log(response);
});

//capture value returned by fetch

//const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
//fetchPromise.then(function(response) {
    //console.log(response);
//});

const fetchPromise =
fetch("https://handlers.education.launchcode.org/static/weather.json");
fetchPromise.then(function(response) {
    const jsonPromise = response.json();
    jsonPromise.then(function(json) {
        console.log("temp", json.temp);
    })
})
