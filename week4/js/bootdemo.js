// console.log('boot demo is loaded')

var mfs = ['Select an Item', 'Volkswagen', 'BMW', 'Nissan', 'Audi',];

function init() {

    setup();
}

function setup() {


    var listingDiv = document.getElementById('fleetList');

    htmlString = '';

    htmlString += '<ul class="list-group">';

    for (var i = 1; i < mfs.length; i++) {

        htmlString += `<li class="list-group-item">${mfs[i]}</li>`;

    }


    htmlString += '</ul>'
    
    listingDiv.innerHTML = htmlString;

}