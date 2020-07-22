$(function () {

    const message = `jquery is loaded`;
    console.log(message)

    $('#messagePanel').html(message)
    sendMessage(message);

    setup();

})

function setup() {

    $('#btnLoadData').on('click', function () {
        sendMessage(`button  is clicked`);
        const contract_name = `dublin`;
        const api_key = `923b9f8762f3bacf246b898bf50e66550436b145`;
        const url = `https://api.jcdecaux.com/vls/v1/stations?contract=${contract_name}&apiKey=${api_key}`;
        $.getJSON(url, function (jsonData) {
            console.log(jsonData);
            renderJsonData(jsonData);
        });


    });
}


function renderJsonData(jsonData) {
    
    htmlString = [];
    for (const station of jsonData) {
       


    }

    $('#messagePanel').html(htmlString.join(' '));

}

function sendMessage(message) {

    $('#messagePanel').html(message)

}