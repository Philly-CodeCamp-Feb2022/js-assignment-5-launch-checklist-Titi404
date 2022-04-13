// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

// function validateInput(testInput) {
//     if (pilotName.value === "" || copilotName.value === "") {
//         alert("All fields are required!");
//         event.preventDefault();
//     }
//     if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
//         alert("Please do not enter number for Pilot name and Co-pilot name");
//         event.preventDefault();
//     }
//     if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
//         window.alert("Please enter number for Fuel Level and Cargo Mass");
//         event.preventDefault();
//     }
//     if (pilotName.value !== "" && isNaN(pilotName.value) && isNaN(copilotName.value) && copilotName.value !== "" && !isNaN(fuelLevel.value) && !isNaN(cargoMass.value)) {
//         window.alert("LAUNCCHHHHHHHHHHHHHH");
//         event.preventDefault();
//     }
// }



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

}





async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            for (let i = 0; i < json.length; i++)
                missionTarget.innerHTML = `
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

        return planetsReturned;
    })
}



console.log(pickPlanet("diz"))

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
