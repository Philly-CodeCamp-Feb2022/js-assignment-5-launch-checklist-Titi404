// Write your JavaScript code here!


window.addEventListener("load", function () {
    let listedPlanetResponse = myFetch()



    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            const div = document.getElementById("missionTarget");
            let randPlanet = pickPlanet(json)
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
            <li>Name: ${randPlanet.name}</li>
            <li>Diameter: ${randPlanet.diameter}</li>
            <li>Star: ${randPlanet.star}</li>
            <li>Distance: ${randPlanet.distance}</li>
            <li>Number of Moons: ${randPlanet.moons}</li>
            </ol>
            <img src="${randPlanet.image}">`
        });

    });


    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {


        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.getElementById("faultyItems");

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
        }
        else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
            alert("Please do not enter number for Pilot name and Co-pilot name");
        }
        else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Please enter number for Fuel Level and Cargo Mass");
        } 
        else {
            
            
            // FAIL: fuel level high, cargo high
            if ((fuelLevel.value >= 10000) && (cargoMass.value > 10000)) {
                launchStatus.innerHTML = "Shuttle is not ready for launch";
                launchStatus.style.color = "red";
                faultyItems.style.visibility = "visible";
                faultyItems.innerHTML = faultyItems.innerHTML = `
                Pilot ${pilotName.value} is ready to fly </br>
                CoPilot ${copilotName.value} is ready to fly </br>
                Fuel level is ${fuelLevel.value}: It is high enough to fly</br>
                Cargo Mass is ${cargoMass.value}: It is <b>NOT</b> low enough to fly</br>
                `        
            }
            // FAIL: fuel level low, cargo high
            else if ((fuelLevel.value < 10000) && (cargoMass.value > 10000)) {
                launchStatus.innerHTML = "Shuttle is not ready for launch";
                launchStatus.style.color = "red";
                faultyItems.style.visibility = "visible";
                faultyItems.innerHTML = faultyItems.innerHTML = `
                Pilot ${pilotName.value} is ready to fly </br>
                CoPilot ${copilotName.value} is ready to fly </br>
                Fuel level is ${fuelLevel.value}: It is <b>NOT</b> high enough to fly</br>
                Cargo Mass is ${cargoMass.value}: It is <b>NOT</b> low enough to fly</br>
                `        
            }
            // FAIL: fuel level low, cargo low
            else if ((fuelLevel.value < 10000) && (cargoMass.value <= 10000)) {
                launchStatus.innerHTML = "Shuttle is not ready for launch";
                launchStatus.style.color = "red";
                faultyItems.style.visibility = "visible";
                faultyItems.innerHTML = faultyItems.innerHTML = `
                Pilot ${pilotName.value} is ready to fly </br>
                CoPilot ${copilotName.value} is ready to fly </br>
                Fuel level is ${fuelLevel.value}: It is <b>NOT</b> high enough to fly</br>
                Cargo Mass is ${cargoMass.value}: It is low enough to fly</br>
                `        
            }
            // SUCCEED: fuel level high, cargo low 
            else {
                launchStatus.innerHTML = "Shuttle is ready for launch";
                launchStatus.style.color = "green";
                faultyItems.style.visibility = "visible"
                faultyItems.innerHTML = `
                Pilot ${pilotName.value} is ready to fly  </br>
                CoPilot ${copilotName.value} is ready to fly </br>
                Fuel level is ${fuelLevel.value}: It is high enough to fly</br>
                Cargo Mass is ${cargoMass.value}: It is low enough to fly</br>
                <b>LAUNCH~~~~~~~~!!!!!!!!!!!!!!!!!!!!!</b>
                `        
            }
        }
        
        event.preventDefault();
    });


});


document.getElementById("pilotStatus").innerHTML = `${pilotName} is ready`;
document.getElementById("copilotStatus").innerHTML = `${copilotName} is ready`;
document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;

function pickPlanet(planets) {
    // input is an array
    // output is a random element from the said array. 
    let randomNum = Math.floor(Math.random() * planets.length);
    return planets[randomNum];
}