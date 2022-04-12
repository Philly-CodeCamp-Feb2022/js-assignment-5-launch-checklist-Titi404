// Write your JavaScript code here!

window.addEventListener("load", function () {

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            const div = document.getElementById("missionTarget");
            for (let i = 0; i < json.length; i++)
                missionTarget.innerHTML += `
            <h2>Mission Destination</h2>
            <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
            </ol>
            <img src="${json[i].image}">`
        });
      
    });


        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
           let pilotName = document.querySelector("input[name=pilotName]");
           let copilotName = document.querySelector("input[name=copilotName]");
           let fuelLevel = document.querySelector("input[name=fuelLevel]");
           let cargoMass = document.querySelector("input[name=cargoMass]");
    
    
        });




    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

});