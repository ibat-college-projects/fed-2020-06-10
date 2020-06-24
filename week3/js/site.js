console.log(' js file is loaded');


function init() {
    showDate();
    setUpListeners();
}

function setUpListeners() {

    var btn = document.getElementById('btnFirstPara');
    btn.addEventListener('click', getFirstParaText)
}


function getFirstParaText() {
    console.log('grabbing first para text');

}

function sendMessageToConsole() {
    console.log('week 3 loading');
}


function showDate() {
    let d = new Date();

    const longDate = d.toString();
    const shortDate = d.toDateString();

    console.log(`Date is : ${longDate}`);
    console.log(`Date is : ${shortDate}`);

    var element = document.getElementById('messagePanel');


    element.innerHTML = `Hello World`;

    var dateSpan = document.getElementById('currentDate');

    dateSpan.innerHTML = `${shortDate}`;


    // moment.js is a good date library

}

function clearField() {
    console.log('clearing field');
    var object = document.getElementById('inputDemo');
    object.value = '';

}

function resetField() {
    console.log('resetting field');
    var object = document.getElementById('inputDemo');
    object.value = 'Enter your email for newsletter';
}


function sum() {
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    document.getElementById('messagePanel').innerHTML = num1 + num2;

}