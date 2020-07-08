
var fleet = [];


function init() { }


function btnSave() {

    console.log(`I saving`);

    var carObject = {}

    carObject.mf = document.getElementById("tbCarMF").value;
    carObject.model = document.getElementById("tbCarModel").value;
    carObject.engine = document.getElementById("tbCarEngine").value;

    console.log(`I saving ${carObject.mf}`);
    console.log(`I saving ${carObject.model}`);
    console.log(`I saving ${carObject.engine}`);
    localStorage.setItem("carMF", carObject.mf);
    localStorage.setItem("carModel", carObject.model);
    localStorage.setItem("carEngine", carObject.engine);


    localStorage.setItem("carData", JSON.stringify(carObject));

}

function btnRetrieve() {
    console.log(`I retrieving`);

    

    var carObject = {}

    carObject.mf = localStorage.getItem("carMF");
    carObject.model = localStorage.getItem("carModel");
    carObject.engine = localStorage.getItem("carEngine");

    console.log(`I retrieving ${carObject.mf}`);
    console.log(`I retrieving ${carObject.model}`);
    console.log(`I retrieving ${carObject.engine}`);


    var carDataAsString = localStorage.getItem("carData");


    carDataAsObject = JSON.parse(carDataAsString);

    renderData(carDataAsObject);

    console.log(carDataAsObject);

}

function renderData(carObject) {
    var listingDiv = document.getElementById('tbodyCarData');

    htmlString = [];
    htmlString.push('<tr>');

    htmlString.push('<td>');
    htmlString.push(carObject.mf);
    htmlString.push('</td>');

    htmlString.push('<td>');
     htmlString.push(carObject.model);
    htmlString.push('</td>');

    htmlString.push('<td>');
    htmlString.push(carObject.engine);
    htmlString.push('</td>');

    htmlString.push('</tr>');

    //
  //  const rowItem = `<tr><td>${carObject.mf}</td><td>${carObject.model}</td><td>${carObject.engine}</td></tr>`
  //  htmlString.push(rowItem);

    listingDiv.innerHTML = htmlString.join(' ');

}


