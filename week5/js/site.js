
var fleet = [];


function init() {

    var carDataAsString = localStorage.getItem("carData");


    fleet = JSON.parse(carDataAsString);

    // We need this check as the localStorage may be empty....or null and it will cause errors
    if (fleet === undefined || fleet === null) {
        console.log('no data for fleet');
        fleet = [];
    } else {
        // Else we found an item in local storage and we will render it
        renderData(fleet);

    }

}


function btnSave() {

    console.log(`I saving`);

    var carObject = {}

    carObject.mf = document.getElementById("tbCarMF").value;
    carObject.model = document.getElementById("tbCarModel").value;
    carObject.engine = document.getElementById("tbCarEngine").value;

    // Push onto the fleet
    fleet.push(carObject);

    // Save the fleet
    localStorage.setItem("carData", JSON.stringify(fleet));

    renderData(fleet);

}


function clearFleetFromStorage() {

    fleet = [];
    localStorage.removeItem("carData");
    renderData([]);
}

function btnRetrieve() {
    console.log(`I retrieving`);

 

    var carDataAsString = localStorage.getItem("carData");

    if (carDataAsString === null || carDataAsString === undefined) {

        console.log('error retrieving');
        return;

    }

    carDataAsObject = JSON.parse(carDataAsString);

    renderData(carDataAsObject);

    console.log(carDataAsObject);

}

function removeCar(indexOfCar) {

    console.log('removing car' + indexOfCar);

     fleet.splice(indexOfCar,1);

    localStorage.setItem("carData", JSON.stringify(fleet));

    renderData(fleet);

}

function renderData(carObject) {


    var listingDiv = document.getElementById('tbodyCarData');
    listingDiv.innerHTML = '';
    htmlString = [];

    //  for (var i = 0; i < carObject.length; i++) {

    //      var currentCar = carObject[i];

    for (const [index,currentCar] of carObject.entries()) {

        const removeButton = `<button class='btn btn-danger' onclick='removeCar(${index})'>Remove </button>`
        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.engine}</td><td>${removeButton}</td></tr>`;
        htmlString.push(rowItem);

    }

    listingDiv.innerHTML = htmlString.join(' ');

}


